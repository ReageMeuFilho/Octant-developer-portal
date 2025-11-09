import express, { Request, Response } from 'express';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generateEmbedding } from '../lib/ai';
import { searchDocumentation } from '../lib/pinecone';
import { SYSTEM_PROMPT } from '../lib/prompts';
import { ChatRequest } from '../types/chat';

const router = express.Router();

/**
 * POST /api/chat
 * 
 * Handles chat requests by:
 * 1. Converting question to embedding
 * 2. Searching Pinecone for relevant docs
 * 3. Building context from search results
 * 4. Streaming AI response with sources
 */
router.post('/chat', async (req: Request, res: Response) => {
  try {
    let question: string;
    let conversationHistory: any[] = [];
    
    if (req.body.messages && Array.isArray(req.body.messages)) {
      const messages = req.body.messages;
      if (messages.length === 0) {
        return res.status(400).json({ error: 'Messages array cannot be empty' });
      }
      
      const latestMessage = messages[messages.length - 1];
      if (!latestMessage?.content || typeof latestMessage.content !== 'string') {
        return res.status(400).json({ error: 'Latest message must have valid content' });
      }
      
      question = latestMessage.content;
      conversationHistory = messages.slice(0, -1).map((msg: any) => ({
        id: msg.id || '',
        role: msg.role,
        content: msg.content
      }));
    } else {
      const legacyRequest = req.body as ChatRequest;
      question = legacyRequest.question;
      conversationHistory = legacyRequest.conversationHistory || [];
      
      if (!question || typeof question !== 'string') {
        return res.status(400).json({ error: 'Question is required' });
      }
    }
    
    console.log('📥 Received question:', question);
    
    console.log('🔢 Generating embedding...');
    const questionEmbedding = await generateEmbedding(question);
    
    console.log('🔍 Searching documentation...');
    const searchResults = await searchDocumentation(questionEmbedding, 5);
    
    console.log(`✅ Found ${searchResults.length} relevant documents`);
    
    const context = searchResults
      .map((doc, i) => {
        const relevance = (doc.score * 100).toFixed(1);
        return `[SOURCE ${i + 1} - ${relevance}% relevant - ${doc.source}]\n${doc.content}`;
      })
      .join('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n');
    
    const messages = [
      ...conversationHistory.slice(-6), // Last 3 exchanges only
      { role: 'user' as const, content: question },
    ];
    
    console.log('🤖 Calling AI model...');
    
    const result = await streamText({
      model: openai('gpt-4o'),
      system: `${SYSTEM_PROMPT}\n\n**RELEVANT DOCUMENTATION CONTEXT**:\n\n${context}`,
      messages,
      temperature: 0.3, // Lower = more factual
    });
    
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
    
    try {
      for await (const chunk of result.textStream) {
        res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`);
      }
      
      const sources = searchResults.map(doc => ({
        title: doc.title,
        source: doc.source,
        score: doc.score,
      }));
      
      res.write(`data: ${JSON.stringify({ sources, done: true })}\n\n`);
      res.end();
      
      console.log('✅ Response streamed successfully');
      
    } catch (streamError) {
      console.error('❌ Streaming error:', streamError);
      res.write(`data: ${JSON.stringify({ error: 'Stream interrupted' })}\n\n`);
      res.end();
    }
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
