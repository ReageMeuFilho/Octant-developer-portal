import express, { Request, Response } from 'express';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generateEmbedding } from '../lib/ai';
import { searchDocumentation } from '../lib/pinecone';
import { SYSTEM_PROMPT } from '../lib/prompts';
import { ChatRequest } from '../types/chat';

const router = express.Router();

/**
 * Normalize message content to string
 * Handles both plain strings and Vercel AI SDK content parts format
 */
function normalizeContent(content: unknown): string {
  if (typeof content === 'string') return content;
  if (Array.isArray(content)) {
    return content
      .map(part => {
        if (part && typeof part === 'object' && 'text' in part) {
          return (part as any).text;
        }
        return '';
      })
      .join('')
      .trim();
  }
  if (content && typeof content === 'object' && 'text' in content) {
    return (content as any).text;
  }
  return '';
}

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
    console.log('📦 Request body:', JSON.stringify(req.body).slice(0, 500));
    
    let question: string;
    let conversationHistory: any[] = [];
    
    if (req.body.messages && Array.isArray(req.body.messages)) {
      const messages = req.body.messages;
      if (messages.length === 0) {
        return res.status(400).json({ error: 'Messages array cannot be empty' });
      }
      
      const latestMessage = messages[messages.length - 1];
      const contentToNormalize = latestMessage?.content || latestMessage?.parts;
      const questionText = normalizeContent(contentToNormalize);
      
      if (!questionText) {
        return res.status(400).json({ error: 'Latest message must have valid content' });
      }
      
      question = questionText;
      conversationHistory = messages.slice(0, -1).map((msg: any) => ({
        id: msg.id || '',
        role: msg.role,
        content: normalizeContent(msg.content || msg.parts)
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
      temperature: 0.3,
    });
    
    const webRes = result.toUIMessageStreamResponse();
    
    res.status(webRes.status);
    webRes.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('X-Accel-Buffering', 'no');
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    
    res.flushHeaders();
    
    const body = webRes.body;
    if (body) {
      const reader = body.getReader();
      try {
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
          if (typeof (res as any).flush === 'function') {
            (res as any).flush();
          }
        }
        console.log('✅ Response streamed successfully');
      } catch (streamError) {
        console.error('❌ Streaming error:', streamError);
      }
    }
    
    res.end();
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
