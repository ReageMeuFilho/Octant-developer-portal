import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Pinecone } from '@pinecone-database/pinecone';
import { openai } from '@ai-sdk/openai';
import { streamText, embed } from 'ai';
import { Readable } from 'node:stream';

/**
 * Initialize Pinecone client outside handler for reuse across invocations
 */
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'octant-docs');

/**
 * System prompt for Octant Protocol AI assistant
 */
const SYSTEM_PROMPT = `You are an expert AI assistant for Octant Protocol documentation.

**YOUR ROLE**: 
Help developers and users understand Octant Protocol by answering questions using the official documentation.

**STRICT RULES YOU MUST FOLLOW**:
1. ONLY use information from the documentation context provided below
2. If the answer is not in the provided context, respond with: "I don't have information about that in the Octant documentation. You can check the full documentation at octant-developer-portal.vercel.app or ask the team on Discord."
3. Be concise but thorough - aim for 2-4 paragraphs unless more detail is needed
4. Always cite sources by mentioning the document name
5. Use code examples when relevant and available in the context
6. If asked about other protocols, only explain their relationship to Octant
7. Never make up information - stick strictly to the provided context

**OCTANT PROTOCOL OVERVIEW** (for context):
- **Purpose**: Yield-based funding infrastructure for public goods and sustainable ecosystem funding
- **Core Innovation**: ERC-4626 vaults that maintain 1:1 share ratio by donating yield instead of compounding
- **Architecture**: Multi-strategy vaults allocate capital across yield-generating strategies
- **Strategy Types**:
  • Yield Donating (YDS): Active reward harvesting (e.g., Morpho, Aave, Sky)
  • Yield Skimming (YSS): Passive appreciation capture (e.g., Lido stETH, Rocket Pool rETH)
- **Foundation**: Built on Yearn V3 tokenized strategy patterns
- **Allocation**: Supports quadratic funding for democratic resource allocation
- **Integration**: Works with Gnosis Safe via Dragon Protocol for automation
- **Key Contracts**: MultistrategyVault, BaseStrategy, DragonRouter, RegenStaker

**RESPONSE FORMAT**:
- Start with a direct answer
- Provide technical details
- Include code examples if relevant
- End with source citations

**TONE**: Professional, helpful, technical but accessible`;

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
 * Generate embedding vector for text
 */
async function generateEmbedding(text: string): Promise<number[]> {
  try {
    const { embedding } = await embed({
      model: openai.embedding('text-embedding-3-small'),
      value: text,
    });
    return embedding;
  } catch (error) {
    console.error('Error generating embedding:', error);
    throw new Error('Failed to generate embedding');
  }
}

/**
 * Search documentation using vector similarity
 */
async function searchDocumentation(embedding: number[], topK: number = 5) {
  try {
    const results = await index.query({
      vector: embedding,
      topK,
      includeMetadata: true,
    });
    
    return results.matches.map(match => ({
      content: match.metadata?.content as string || '',
      title: match.metadata?.title as string || 'Unknown',
      source: match.metadata?.source as string || 'Unknown',
      score: match.score || 0,
    }));
  } catch (error) {
    console.error('Error searching Pinecone:', error);
    throw new Error('Failed to search documentation');
  }
}

/**
 * Vercel Serverless Function Handler for /api/chat
 * 
 * Handles chat requests by:
 * 1. Converting question to embedding
 * 2. Searching Pinecone for relevant docs
 * 3. Building context from search results
 * 4. Streaming AI response with sources
 */
export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  try {
    console.log('📦 Request body:', JSON.stringify(req.body).slice(0, 500));
    
    let question: string;
    let conversationHistory: any[] = [];
    
    if (req.body.messages && Array.isArray(req.body.messages)) {
      const messages = req.body.messages;
      if (messages.length === 0) {
        res.status(400).json({ error: 'Messages array cannot be empty' });
        return;
      }
      
      const latestMessage = messages[messages.length - 1];
      const contentToNormalize = latestMessage?.content || latestMessage?.parts;
      const questionText = normalizeContent(contentToNormalize);
      
      if (!questionText) {
        res.status(400).json({ error: 'Latest message must have valid content' });
        return;
      }
      
      question = questionText;
      conversationHistory = messages.slice(0, -1).map((msg: any) => ({
        id: msg.id || '',
        role: msg.role,
        content: normalizeContent(msg.content || msg.parts)
      }));
    } else {
      question = req.body.question;
      conversationHistory = req.body.conversationHistory || [];
      
      if (!question || typeof question !== 'string') {
        res.status(400).json({ error: 'Question is required' });
        return;
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
    res.setHeader('Cache-Control', 'no-cache, no-transform');
    res.setHeader('Connection', 'keep-alive');
    
    if (typeof (res as any).flushHeaders === 'function') {
      (res as any).flushHeaders();
    }
    
    if (webRes.body) {
      Readable.fromWeb(webRes.body as any).pipe(res);
      console.log('✅ Response streaming started');
    } else {
      res.end();
    }
    
  } catch (error) {
    console.error('❌ Chat API error:', error);
    console.error('❌ Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    if (!res.headersSent) {
      res.status(500).json({ 
        error: 'Failed to generate response',
        details: error instanceof Error ? error.message : 'Unknown error'
      });
    } else {
      res.end();
    }
  }
}
