# COMPREHENSIVE IMPLEMENTATION PROMPT FOR MANUS AI AGENT

## 🎯 CRITICAL CONTEXT - READ FIRST

**YOU ARE**: An AI agent implementing a feature in an existing codebase  
**PROJECT**: Octant Developer Portal (React + Vite + TypeScript + Express)  
**TASK**: Implement "Ask AI" chat feature matching Stripe's implementation  
**REPOSITORY**: https://github.com/ReageMeuFilho/Octant-developer-portal  
**BRANCH**: manus-ai-ask-ai-feature  
**TIME ESTIMATE**: 2.5-3 hours  
**DIFFICULTY**: Low (using Vercel AI SDK tools)

---

## 📋 TASK BREAKDOWN (COMPLETE CHECKLIST)

You will create **11 new files** and **modify 2 existing files**. Each file's complete content is provided below.

### Files to CREATE (11 files):

#### Backend (5 files in `server/src/`)
1. ✅ `server/src/lib/ai.ts` - Vercel AI SDK setup
2. ✅ `server/src/lib/pinecone.ts` - Vector database connection
3. ✅ `server/src/lib/prompts.ts` - AI system prompts
4. ✅ `server/src/api/chat.ts` - Chat API endpoint
5. ✅ `server/src/types/chat.ts` - TypeScript types

#### Frontend (5 files in `client/src/`)
6. ✅ `client/src/components/AskAIButton.tsx` - Button component
7. ✅ `client/src/components/AIChatPanel.tsx` - Chat panel component
8. ✅ `client/src/components/ChatMessage.tsx` - Message display component
9. ✅ `client/src/hooks/useChatPanel.ts` - Chat panel state management
10. ✅ `client/src/types/chat.ts` - TypeScript types

#### Configuration (1 file)
11. ✅ `.env.example` - Environment variables template

### Files to MODIFY (2 files):
12. ✅ `server/src/app.ts` - Add chat route
13. ✅ `client/src/pages/docs/*` - Add button to doc pages

---

## 🔧 STEP 1: INSTALL DEPENDENCIES

**Location**: Project root

**Command to run**:
```bash
pnpm add ai @ai-sdk/openai @pinecone-database/pinecone lucide-react
```

**Expected output**: Packages installed successfully

**Verification**: Check `package.json` includes:
- `"ai": "^x.x.x"`
- `"@ai-sdk/openai": "^x.x.x"`
- `"@pinecone-database/pinecone": "^x.x.x"`
- `"lucide-react": "^x.x.x"`

---

## 🔧 STEP 2: CREATE BACKEND FILES

### FILE 1: `server/src/lib/ai.ts`

**Purpose**: Configure Vercel AI SDK for embeddings and chat

**Complete file content**:
```typescript
import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';

/**
 * Generate embedding vector for text
 * Used to convert questions into vectors for similarity search
 * 
 * @param text - Text to convert to embedding
 * @returns Array of 1536 numbers (embedding vector)
 */
export async function generateEmbedding(text: string): Promise<number[]> {
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
 * OpenAI model instance for chat
 * Using GPT-4 Turbo for high-quality responses
 */
export { openai };
```

**Save to**: `server/src/lib/ai.ts`

**Verification**: File exists at exact path above

---

### FILE 2: `server/src/lib/pinecone.ts`

**Purpose**: Connect to Pinecone vector database containing Octant documentation

**Complete file content**:
```typescript
import { Pinecone } from '@pinecone-database/pinecone';

/**
 * Pinecone client instance
 * Connects to vector database storing Octant documentation
 */
const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

/**
 * Pinecone index containing documentation embeddings
 */
const index = pinecone.index(process.env.PINECONE_INDEX_NAME || 'octant-docs');

/**
 * Search documentation using vector similarity
 * 
 * @param embedding - Question embedding vector
 * @param topK - Number of results to return (default: 5)
 * @returns Array of relevant documentation chunks
 */
export async function searchDocumentation(embedding: number[], topK: number = 5) {
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

export { pinecone, index };
```

**Save to**: `server/src/lib/pinecone.ts`

**Verification**: File exists at exact path above

---

### FILE 3: `server/src/lib/prompts.ts`

**Purpose**: Define AI system prompts and behavior

**Complete file content**:
```typescript
/**
 * System prompt for Octant Protocol AI assistant
 * 
 * This prompt instructs the AI on:
 * - What it is (Octant documentation expert)
 * - How to behave (only use provided context)
 * - What to do if answer not found
 * - Tone and style
 */
export const SYSTEM_PROMPT = `You are an expert AI assistant for Octant Protocol documentation.

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
```

**Save to**: `server/src/lib/prompts.ts`

**Verification**: File exists at exact path above

---

### FILE 4: `server/src/types/chat.ts`

**Purpose**: TypeScript types for chat functionality

**Complete file content**:
```typescript
/**
 * Message from user or AI assistant
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
  timestamp?: number;
}

/**
 * Documentation source citation
 */
export interface Source {
  title: string;
  source: string;
  score?: number;
}

/**
 * Chat request payload
 */
export interface ChatRequest {
  question: string;
  conversationHistory?: Message[];
  currentPage?: string;
}

/**
 * Search result from Pinecone
 */
export interface SearchResult {
  content: string;
  title: string;
  source: string;
  score: number;
}
```

**Save to**: `server/src/types/chat.ts`

**Verification**: File exists at exact path above

---

### FILE 5: `server/src/api/chat.ts`

**Purpose**: Main backend API endpoint for chat

**Complete file content**:
```typescript
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
    const { question, conversationHistory = [] }: ChatRequest = req.body;
    
    // Validate input
    if (!question || typeof question !== 'string') {
      return res.status(400).json({ error: 'Question is required' });
    }
    
    console.log('📥 Received question:', question);
    
    // Step 1: Generate embedding for question
    console.log('🔢 Generating embedding...');
    const questionEmbedding = await generateEmbedding(question);
    
    // Step 2: Search documentation
    console.log('🔍 Searching documentation...');
    const searchResults = await searchDocumentation(questionEmbedding, 5);
    
    console.log(`✅ Found ${searchResults.length} relevant documents`);
    
    // Step 3: Build context from search results
    const context = searchResults
      .map((doc, i) => {
        const relevance = (doc.score * 100).toFixed(1);
        return `[SOURCE ${i + 1} - ${relevance}% relevant - ${doc.source}]\n${doc.content}`;
      })
      .join('\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n');
    
    // Step 4: Build messages for AI
    const messages = [
      ...conversationHistory.slice(-6), // Last 3 exchanges only
      { role: 'user' as const, content: question },
    ];
    
    // Step 5: Stream AI response using Vercel AI SDK
    console.log('🤖 Calling AI model...');
    
    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: `${SYSTEM_PROMPT}\n\n**RELEVANT DOCUMENTATION CONTEXT**:\n\n${context}`,
      messages,
      temperature: 0.3, // Lower = more factual
      maxTokens: 1000,
    });
    
    // Step 6: Set up Server-Sent Events for streaming
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    res.setHeader('Access-Control-Allow-Origin', '*'); // Adjust for production
    
    // Step 7: Stream response chunks
    try {
      for await (const chunk of result.textStream) {
        res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`);
      }
      
      // Step 8: Send sources at the end
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
    
    // Return error as JSON
    res.status(500).json({ 
      error: 'Failed to generate response',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
});

export default router;
```

**Save to**: `server/src/api/chat.ts`

**Verification**: 
- File exists at `server/src/api/chat.ts`
- File has 111 lines
- Exports default Express router

---

## 🔧 STEP 3: MODIFY BACKEND MAIN FILE

### FILE TO MODIFY: `server/src/app.ts`

**Action**: Add chat router to existing Express app

**Find this section** (approximate):
```typescript
import express from 'express';
// ... other imports

const app = express();
app.use(express.json());
// ... other middleware
```

**Add these lines**:
```typescript
// ADD THIS IMPORT at the top
import chatRouter from './api/chat';

// ADD THIS ROUTE after other middleware
app.use('/api', chatRouter);
```

**Complete example**:
```typescript
import express from 'express';
import cors from 'cors';
import chatRouter from './api/chat'; // ← ADD THIS

const app = express();

app.use(cors());
app.use(express.json());

// ADD THIS
app.use('/api', chatRouter);

// ... rest of your routes

export default app;
```

**Verification**: 
- `chatRouter` imported at top
- `app.use('/api', chatRouter)` added
- No TypeScript errors

---

## 🎨 STEP 4: CREATE FRONTEND FILES

### FILE 6: `client/src/types/chat.ts`

**Purpose**: Frontend TypeScript types

**Complete file content**:
```typescript
/**
 * Chat message interface
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

/**
 * Documentation source citation
 */
export interface Source {
  title: string;
  source: string;
  score?: number;
}

/**
 * Chat panel state
 */
export interface ChatPanelState {
  isOpen: boolean;
  isExpanded: boolean;
}
```

**Save to**: `client/src/types/chat.ts`

---

### FILE 7: `client/src/hooks/useChatPanel.ts`

**Purpose**: Manage chat panel state (open/close/expand)

**Complete file content**:
```typescript
import { useState } from 'react';

export function useChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const openChat = () => setIsOpen(true);
  const closeChat = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };
  const toggleExpand = () => setIsExpanded(prev => !prev);
  
  return {
    isOpen,
    isExpanded,
    openChat,
    closeChat,
    toggleExpand,
  };
}
```

**Save to**: `client/src/hooks/useChatPanel.ts`

---

### FILE 8: `client/src/components/AskAIButton.tsx`

**Purpose**: Button that opens chat panel

**Visual reference**: Stripe docs "Ask AI" button (gray, with sparkle icon)

**Complete file content**:
```typescript
import { Sparkles } from 'lucide-react';

interface AskAIButtonProps {
  /**
   * Callback when button is clicked
   */
  onClick: () => void;
  
  /**
   * Optional custom class names
   */
  className?: string;
}

/**
 * Ask AI Button Component
 * 
 * Positioned below page titles in documentation pages.
 * Matches Stripe's design: gray background, sparkle icon, subtle hover effect.
 */
export function AskAIButton({ onClick, className = '' }: AskAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 px-4 py-2 mt-4 mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors duration-200 ${className}`}
      aria-label="Open AI chat assistant to ask questions about Octant Protocol"
    >
      <Sparkles className="w-4 h-4" aria-hidden="true" />
      <span className="font-medium text-sm">Ask AI</span>
    </button>
  );
}
```

**Save to**: `client/src/components/AskAIButton.tsx`

**Visual specifications**:
- Background: `bg-gray-100` (#F3F4F6)
- Hover: `bg-gray-200` (#E5E7EB)
- Text: `text-gray-700` (#374151)
- Border: `border-gray-300` (#D1D5DB)
- Spacing: `mt-4` (16px top) `mb-6` (24px bottom)
- Icon size: 16px (w-4 h-4)
- Font: Medium weight, small size (14px)

---

### FILE 9: `client/src/components/ChatMessage.tsx`

**Purpose**: Display individual chat messages

**Visual reference**: 
- User messages: Blue background, white text, right-aligned
- AI messages: Gray background, dark text, left-aligned
- Sources: Listed below AI messages in small text

**Complete file content**:
```typescript
import { Message } from '../types/chat';

interface ChatMessageProps {
  /**
   * Message object to display
   */
  message: Message;
}

/**
 * Chat Message Component
 * 
 * Displays user or assistant messages with different styles.
 * Shows source citations for assistant messages.
 */
export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`inline-block max-w-[85%] rounded-lg p-3 ${
        isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-900'
      }`}>
        {/* Message content */}
        <div className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.content}
        </div>
        
        {/* Source citations (only for assistant messages) */}
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-300">
            <p className="text-xs font-semibold mb-2 text-gray-600">
              📚 Sources:
            </p>
            <div className="space-y-1">
              {message.sources.slice(0, 3).map((source, idx) => (
                <div key={idx} className="text-xs text-gray-600 flex items-start gap-1">
                  <span className="text-gray-400">•</span>
                  <span className="flex-1">{source.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

**Save to**: `client/src/components/ChatMessage.tsx`

**Visual specifications**:
- User messages: `bg-blue-600` (#2563EB), right-aligned
- AI messages: `bg-gray-100` (#F3F4F6), left-aligned
- Max width: 85% of container
- Padding: 12px (`p-3`)
- Border radius: 8px (`rounded-lg`)
- Sources: Gray text, bullet points, max 3 shown

---

### FILE 10: `client/src/components/AIChatPanel.tsx`

**Purpose**: Main chat panel that slides from right

**Visual reference**: Stripe docs chat panel (see screenshots)

**Complete file content**:
```typescript
import { useState, useRef, useEffect } from 'react';
import { useChat } from 'ai/react';
import { 
  X, 
  Maximize2, 
  Minimize2, 
  Plus, 
  Sparkles, 
  ArrowUp, 
  ChevronDown 
} from 'lucide-react';
import { ChatMessage } from './ChatMessage';
import { Message, Source } from '../types/chat';

interface AIChatPanelProps {
  /**
   * Whether panel is visible
   */
  isOpen: boolean;
  
  /**
   * Callback to close panel
   */
  onClose: () => void;
}

/**
 * AI Chat Panel Component
 * 
 * Slides in from the right side of the screen.
 * Matches Stripe's design and functionality.
 * Uses Vercel AI SDK's useChat hook for automatic streaming.
 */
export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Vercel AI SDK useChat hook - handles everything automatically!
  const { 
    messages, 
    input, 
    handleInputChange, 
    handleSubmit, 
    isLoading,
    setMessages,
  } = useChat({
    api: '/api/chat', // Points to server/src/api/chat.ts
    onError: (error) => {
      console.error('Chat error:', error);
    },
  });
  
  // Auto-scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  // Keyboard shortcut: Escape to close
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  // Suggested prompts for empty chat
  const suggestedPrompts = [
    "How do yield strategies work?",
    "What's the difference between YDS and YSS?",
    "How do I deploy a vault?",
    "Explain quadratic funding in Octant",
    "What is the Dragon Protocol?",
  ];
  
  const handlePromptClick = (prompt: string) => {
    handleInputChange({ target: { value: prompt } } as any);
  };
  
  const handleNewChat = () => {
    setMessages([]);
  };
  
  // Don't render if not open
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-10 z-40 transition-opacity"
        onClick={onClose}
        aria-hidden="true"
      />
      
      {/* Chat panel */}
      <div 
        className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-50 flex flex-col transition-all duration-300 ease-out ${
          isExpanded ? 'w-full' : 'w-[400px]'
        }`}
        role="dialog"
        aria-label="AI Chat Assistant"
        aria-modal="true"
      >
        {/* ===== HEADER ===== */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          {/* Left side: Title */}
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" aria-hidden="true" />
            <span className="font-semibold text-sm">New chat</span>
            <ChevronDown className="w-4 h-4 text-gray-500" aria-hidden="true" />
          </div>
          
          {/* Right side: Action buttons */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleNewChat}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Start new chat"
              aria-label="Start new chat"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title={isExpanded ? "Minimize" : "Expand"}
              aria-label={isExpanded ? "Minimize panel" : "Expand panel to full screen"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="Close"
              aria-label="Close chat panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* ===== DISCLAIMER ===== */}
        <div className="px-4 py-3 bg-yellow-50 border-b text-xs text-yellow-800 flex items-start gap-2">
          <span className="text-yellow-600" aria-hidden="true">⚠️</span>
          <span>Responses are generated using AI and may contain mistakes.</span>
        </div>
        
        {/* ===== MESSAGES AREA ===== */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.length === 0 ? (
            /* ===== WELCOME SCREEN ===== */
            <div className="text-center mt-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" aria-hidden="true" />
              
              <p className="text-sm text-gray-600 mb-2 font-medium">
                Ask questions about Octant Protocol and get help with your integration.
              </p>
              
              <p className="text-xs text-gray-500 mb-6">
                💡 <strong>Tip:</strong> you can highlight any text to ask questions about it with ⌘ + I
              </p>
              
              {/* Suggested prompts */}
              <div className="space-y-2 max-w-sm mx-auto">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handlePromptClick(prompt)}
                    className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200 transition-colors duration-150"
                    aria-label={`Use suggested prompt: ${prompt}`}
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* ===== MESSAGES LIST ===== */
            <>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg as Message} />
              ))}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-500 ml-2" role="status" aria-live="polite">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs">Thinking...</span>
                </div>
              )}
              
              {/* Auto-scroll anchor */}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        
        {/* ===== INPUT AREA ===== */}
        <div className="border-t p-4 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question about the page..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              disabled={isLoading}
              aria-label="Chat input"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              aria-label="Send message"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-2 text-center">
            Press <kbd className="px-1 py-0.5 bg-gray-100 rounded border text-xs">Enter</kbd> to send • <kbd className="px-1 py-0.5 bg-gray-100 rounded border text-xs">Esc</kbd> to close
          </p>
        </div>
      </div>
    </>
  );
}
```

**Save to**: `client/src/components/AIChatPanel.tsx`

**Visual specifications**:
- Width: 400px normal, 100% when expanded
- Height: 100vh (full screen)
- Position: `fixed right-0 top-0`
- Animation: Slide from right, 300ms duration
- Z-index: 50 (above content, below modals)
- Background: White
- Border: Left shadow only

---

### FILE 11: `.env.example`

**Purpose**: Template for environment variables

**Complete file content**:
```bash
# Pinecone Vector Database
PINECONE_API_KEY=your-pinecone-api-key-here
PINECONE_INDEX_NAME=octant-docs

# Note: Vercel AI Gateway uses Vercel token automatically
# No additional AI API keys needed
```

**Save to**: `.env.example` (project root)

**Action required**: 
1. Copy this to `.env` locally
2. Replace `your-pinecone-api-key-here` with actual Pinecone key
3. Add same variables to Vercel dashboard

---

## 🔧 STEP 5: INTEGRATE INTO DOCUMENTATION PAGES

### Files to modify: ALL pages in `client/src/pages/docs/`

**Pattern to follow for EVERY documentation page:**

**Step 1**: Import required components at top of file
```typescript
import { useState } from 'react';
import { AskAIButton } from '../../components/AskAIButton';
import { AIChatPanel } from '../../components/AIChatPanel';
import { useChatPanel } from '../../hooks/useChatPanel';
```

**Step 2**: Add chat panel state to component
```typescript
export function YourDocPage() {
  const { isOpen, openChat, closeChat } = useChatPanel();
  
  // ... rest of component
}
```

**Step 3**: Add button below page title
```typescript
return (
  <>
    <div className="docs-page">
      <h1>Your Page Title</h1>
      
      {/* ADD THIS LINE - Button goes right after h1 */}
      <AskAIButton onClick={openChat} />
      
      {/* Rest of page content */}
      <div className="content">
        ...
      </div>
    </div>
    
    {/* ADD THIS - Chat panel (renders outside main content) */}
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
  </>
);
```

**Files to modify** (add button to all these):
- `client/src/pages/docs/Quickstart.tsx`
- `client/src/pages/docs/Overview.tsx`
- `client/src/pages/docs/CoreConcepts.tsx`
- `client/src/pages/docs/YieldDonating.tsx`
- `client/src/pages/docs/YieldSkimming.tsx`
- `client/src/pages/docs/AllocationMechanisms.tsx`
- All other documentation pages in `client/src/pages/docs/`

**CRITICAL**: Add to EVERY page that has documentation content.

---

## ✅ STEP 6: ENVIRONMENT SETUP

### Local Development

**File**: `.env` (create in project root)

```bash
PINECONE_API_KEY=pcsk_xxxxx_xxxxx
PINECONE_INDEX_NAME=octant-docs
PORT=5000
```

### Vercel Production

**Action**: Add environment variables in Vercel dashboard

**Steps**:
1. Go to: https://vercel.com/ReageMeuFilho/octant-developer-portal
2. Click "Settings"
3. Click "Environment Variables"
4. Add:
   - Key: `PINECONE_API_KEY`, Value: `pcsk_xxxxx_xxxxx`
   - Key: `PINECONE_INDEX_NAME`, Value: `octant-docs`
5. Click "Save"

---

## 🧪 STEP 7: TESTING PROCEDURES

### Test 1: Backend API Test

**Command**:
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "What is Octant Protocol?"}'
```

**Expected output**: Streaming response with `data:` prefixed lines

**Success criteria**: 
- Returns HTTP 200
- Streams content chunks
- Ends with sources array
- No error messages

---

### Test 2: Frontend Button Test

**Actions**:
1. Start dev server: `pnpm dev`
2. Navigate to: http://localhost:3000/docs/quickstart
3. Verify "Ask AI" button appears below page title
4. Button has sparkle icon and gray background
5. Hover effect works (background changes)

**Success criteria**:
- Button visible on page
- Positioned below `<h1>` title
- Has proper spacing (mt-4 mb-6)
- Hover effect activates

---

### Test 3: Chat Panel Open/Close

**Actions**:
1. Click "Ask AI" button
2. Panel should slide in from right
3. Animation should be smooth (300ms)
4. Content should remain visible on left

**Success criteria**:
- Panel slides from right edge
- Takes 400px width
- Header shows "New chat" with buttons
- Disclaimer banner visible (yellow)
- Input field at bottom

**Test close**:
1. Click X button in header
2. Panel should slide out to right
3. Panel should disappear completely

---

### Test 4: Send Message

**Actions**:
1. Open chat panel
2. Click suggested prompt "How do yield strategies work?"
3. Input field should populate
4. Click up arrow or press Enter
5. User message should appear (blue, right-aligned)
6. "Thinking..." indicator should appear
7. AI response should stream in word-by-word (gray, left-aligned)
8. Sources should appear below response

**Success criteria**:
- User message displays correctly
- Loading indicator shows
- AI response streams (not all-at-once)
- Response contains relevant information
- Sources listed with titles
- No console errors

---

### Test 5: Expand/Collapse

**Actions**:
1. With chat open, click expand button (⛶)
2. Panel should expand to full width
3. Click minimize button
4. Panel should return to 400px width

**Success criteria**:
- Expand animation smooth
- Full width = 100vw
- Minimize returns to 400px
- No layout shifts

---

### Test 6: Multiple Messages

**Actions**:
1. Send first question
2. Wait for response
3. Send follow-up question
4. Verify conversation history maintained

**Success criteria**:
- Previous messages remain visible
- New messages append to bottom
- Auto-scrolls to latest message
- Conversation context maintained

---

### Test 7: Error Handling

**Actions**:
1. Disconnect internet or stop backend
2. Try sending message
3. Should show error gracefully

**Success criteria**:
- Doesn't crash
- Shows error message
- User can retry

---

### Test 8: Mobile Responsiveness

**Actions**:
1. Open browser dev tools
2. Toggle device toolbar
3. Test on iPhone, iPad, Android sizes
4. Chat should be usable

**Success criteria**:
- Panel width adjusts (80-90% on mobile)
- Messages readable
- Input accessible
- Buttons tappable

---

## 📊 ACCEPTANCE CRITERIA (Must All Pass)

### Visual ✅
- [ ] Button matches Stripe's design exactly
- [ ] Button positioned below page title (not in header)
- [ ] Chat panel slides from right smoothly
- [ ] Header has all 5 elements (sparkle, "New chat", +, ⛶, ✕)
- [ ] Disclaimer banner is yellow with warning icon
- [ ] User messages: blue, right-aligned
- [ ] AI messages: gray, left-aligned
- [ ] Sources display below AI messages
- [ ] Colors match specification (see visual specs)
- [ ] Spacing matches specification
- [ ] Animations are smooth (300ms)

### Functional ✅
- [ ] Button opens chat panel
- [ ] Can send messages and receive responses
- [ ] Responses stream word-by-word (not all-at-once)
- [ ] Sources display correctly (max 3)
- [ ] Suggested prompts clickable
- [ ] Can start new chat (+ button)
- [ ] Can expand to full screen (⛶ button)
- [ ] Can minimize back to 400px
- [ ] Can close panel (✕ button)
- [ ] Escape key closes panel
- [ ] Auto-scrolls to latest message
- [ ] Conversation history maintained

### Technical ✅
- [ ] Backend API runs on `/api/chat`
- [ ] Uses Vercel AI SDK correctly
- [ ] Uses Pinecone for vector search
- [ ] Streams responses (Server-Sent Events)
- [ ] Sources extracted from search results
- [ ] TypeScript compiles without errors
- [ ] No console errors or warnings
- [ ] Works with existing Express server
- [ ] Works with existing Vite frontend
- [ ] CORS configured correctly

### Integration ✅
- [ ] Button added to ALL documentation pages
- [ ] Works on all pages (no page-specific bugs)
- [ ] Doesn't break existing navigation
- [ ] Doesn't interfere with page scrolling
- [ ] Mobile responsive (320px - 1920px)
- [ ] Accessible (keyboard navigation works)
- [ ] ARIA labels present

### Deployment ✅
- [ ] Builds successfully (`pnpm build`)
- [ ] Environment variables documented
- [ ] Works in production on Vercel
- [ ] No build errors
- [ ] No runtime errors

**ALL items must be checked before marking as complete.**

---

## 🚨 CRITICAL REQUIREMENTS (DO NOT DEVIATE)

### 1. Button Location (EXACT)
```tsx
<h1>Page Title</h1>
<AskAIButton onClick={openChat} />  ← Must be HERE
<div className="content">...</div>
```

**NOT here:**
- ❌ In global header
- ❌ At bottom of page
- ❌ In sidebar
- ❌ Floating button

---

### 2. Chat Panel Direction (EXACT)
- ✅ Slides from RIGHT (not left, not bottom)
- ✅ `fixed right-0 top-0`
- ✅ 400px width default
- ✅ Full width when expanded

---

### 3. Use Vercel AI SDK (EXACT)
```typescript
import { useChat } from 'ai/react';  ← Must use this
import { streamText } from 'ai';     ← Must use this
```

**NOT:**
- ❌ Manual fetch() calls
- ❌ Custom streaming logic
- ❌ Direct OpenAI SDK
- ❌ Other chat libraries

---

### 4. Backend Response Format (EXACT)

Backend MUST return Server-Sent Events in this format:

```
data: {"content":"word"}\n\n
data: {"content":" by"}\n\n
data: {"content":" word"}\n\n
...
data: {"sources":[...],"done":true}\n\n
```

**NOT:**
- ❌ Regular JSON response
- ❌ WebSocket
- ❌ Other formats

---

## 🎁 OPTIMIZATION: Use v0.dev (HIGHLY RECOMMENDED)

**What is v0.dev**: Vercel's AI component generator (https://v0.dev)

**How to use**:

**Step 1**: Go to https://v0.dev in your browser

**Step 2**: Sign in with GitHub

**Step 3**: Use this EXACT prompt:
```
Create a React TypeScript chat panel component with the following specifications:

LAYOUT:
- Fixed position on right side of screen
- 400px wide (expandable to full width)
- Full viewport height
- White background with left shadow

HEADER:
- "New chat" text with sparkle icon
- Three buttons on right: Plus (new chat), Maximize/Minimize (expand), X (close)
- Bottom border

DISCLAIMER:
- Yellow banner (bg-yellow-50) with warning icon
- Text: "Responses are generated using AI and may contain mistakes"

MESSAGES AREA:
- Scrollable flex-1 area with gray background
- Welcome screen when empty with sparkle icon and suggested prompts
- User messages: blue background, white text, right-aligned
- Assistant messages: gray background, dark text, left-aligned
- Source citations below assistant messages

INPUT:
- Bottom border above
- Input field with placeholder "Ask a question about the page..."
- Blue submit button with up arrow icon
- Keyboard hints below (Enter to send, Esc to close)

Use Tailwind CSS and lucide-react icons. Match Stripe docs design style.
```

**Step 4**: Copy the generated component code

**Step 5**: Customize:
- Replace placeholder logic with `useChat` hook
- Adjust colors if needed
- Add TypeScript types

**Time saved**: 1-2 hours! The UI will be generated instantly.

---

## 📝 IMPLEMENTATION ORDER (FOLLOW EXACTLY)

### Phase 1: Backend (1 hour)
```
1. Install dependencies (5 min)
2. Create server/src/lib/ai.ts (10 min)
3. Create server/src/lib/pinecone.ts (10 min)
4. Create server/src/lib/prompts.ts (5 min)
5. Create server/src/types/chat.ts (5 min)
6. Create server/src/api/chat.ts (20 min)
7. Modify server/src/app.ts to add route (5 min)
8. Test with curl (5 min)
```

### Phase 2: Frontend - Option A (with v0.dev - 1 hour)
```
1. Go to v0.dev (5 min)
2. Generate chat panel with prompt (5 min)
3. Copy code, integrate useChat hook (20 min)
4. Create AskAIButton.tsx (10 min)
5. Create ChatMessage.tsx (10 min)
6. Create useChatPanel hook (5 min)
7. Create types (5 min)
```

### Phase 2: Frontend - Option B (without v0.dev - 2 hours)
```
1. Create client/src/types/chat.ts (5 min)
2. Create client/src/hooks/useChatPanel.ts (10 min)
3. Create client/src/components/AskAIButton.tsx (15 min)
4. Create client/src/components/ChatMessage.tsx (20 min)
5. Create client/src/components/AIChatPanel.tsx (60 min)
6. Style and polish (10 min)
```

### Phase 3: Integration (30 min)
```
1. Add button to first doc page (5 min)
2. Test it works (5 min)
3. Copy pattern to all other doc pages (15 min)
4. Test on 3-4 different pages (5 min)
```

### Phase 4: Testing (30 min)
```
1. Run all 8 tests from testing procedures (20 min)
2. Fix any issues found (10 min)
3. Final verification (5 min)
```

**TOTAL TIME**: 2.5-3 hours (with v0.dev) or 4 hours (without)

---

## 🔍 DEBUGGING GUIDE

### Issue: "Cannot find module 'ai'"
**Solution**: Run `pnpm add ai @ai-sdk/openai`

### Issue: "PINECONE_API_KEY is not defined"
**Solution**: 
1. Create `.env` file in root
2. Add `PINECONE_API_KEY=your-key`
3. Restart server

### Issue: "useChat is not a function"
**Solution**: Import from correct path: `import { useChat } from 'ai/react'`

### Issue: "No response from API"
**Solution**: 
1. Check backend is running
2. Check CORS settings in server
3. Check network tab in browser dev tools
4. Verify `/api/chat` endpoint exists

### Issue: "Streaming not working"
**Solution**: 
1. Verify backend returns `Content-Type: text/event-stream`
2. Check response format matches SSE spec
3. Verify `useChat` hook is used correctly

### Issue: "Button not showing"
**Solution**: 
1. Check import paths are correct
2. Verify component is called in page
3. Check no CSS hiding it
4. Inspect element in browser

### Issue: "Panel doesn't slide in"
**Solution**: 
1. Check `isOpen` state is changing
2. Verify `fixed right-0` CSS class
3. Check z-index is 50
4. Verify transition classes present

---

## 📊 SUCCESS VERIFICATION CHECKLIST

After implementation, verify EVERY item:

### Visual Verification
- [ ] Open portal: https://octant-developer-portal.vercel.app/docs/quickstart
- [ ] "Ask AI" button visible below page title
- [ ] Button has sparkle icon on left
- [ ] Button is gray with border
- [ ] Hover changes background slightly
- [ ] Click button
- [ ] Panel slides from right (smooth animation)
- [ ] Panel width is 400px
- [ ] Header shows "New chat" with buttons
- [ ] Yellow disclaimer visible
- [ ] Welcome screen shows with sparkle icon
- [ ] 5 suggested prompts visible
- [ ] Input field at bottom
- [ ] Keyboard hints visible

### Functional Verification
- [ ] Click suggested prompt
- [ ] Input populates with prompt text
- [ ] Click send button (or press Enter)
- [ ] User message appears (blue, right side)
- [ ] "Thinking..." indicator appears
- [ ] AI response starts streaming (word by word)
- [ ] Response completes
- [ ] Sources appear below response (max 3)
- [ ] Send follow-up question
- [ ] Conversation history maintained
- [ ] Click + button
- [ ] Chat resets (messages cleared)
- [ ] Click ⛶ button
- [ ] Panel expands to full width
- [ ] Click ⛶ again
- [ ] Panel returns to 400px
- [ ] Click X button
- [ ] Panel closes (slides out right)
- [ ] Press Escape key
- [ ] Panel closes if open

### Technical Verification
- [ ] Check browser console: No errors
- [ ] Check network tab: API calls to `/api/chat`
- [ ] Check response: Streaming SSE format
- [ ] Check TypeScript: No compilation errors
- [ ] Check build: `pnpm build` succeeds
- [ ] Check different browsers: Chrome, Firefox, Safari
- [ ] Check mobile: Responsive on small screens

---

## 📦 DELIVERABLES (WHAT YOU MUST PROVIDE)

### 1. Pull Request on GitHub

**Title**: `feat: Add Ask AI chat feature with Vercel AI SDK`

**Description**:
```markdown
## Overview
Implements Stripe-style "Ask AI" chat feature for Octant documentation portal.

## Features
- "Ask AI" button below page titles
- Chat panel sliding from right
- Streaming AI responses
- Source citations
- Expand/collapse functionality
- Mobile responsive

## Technical Details
- Backend: Express + Vercel AI SDK + Pinecone
- Frontend: React + useChat hook
- Vector search: 1,100+ documentation chunks
- Streaming: Server-Sent Events

## Testing
- [x] Backend API tested
- [x] Frontend UI tested
- [x] Integration tested
- [x] Mobile tested
- [x] All acceptance criteria met

## Screenshots
[Add screenshots of chat panel]
```

### 2. Code Files (13 files)

**Backend (5 files)**:
- `server/src/lib/ai.ts`
- `server/src/lib/pinecone.ts`
- `server/src/lib/prompts.ts`
- `server/src/types/chat.ts`
- `server/src/api/chat.ts`

**Frontend (5 files)**:
- `client/src/components/AskAIButton.tsx`
- `client/src/components/AIChatPanel.tsx`
- `client/src/components/ChatMessage.tsx`
- `client/src/hooks/useChatPanel.ts`
- `client/src/types/chat.ts`

**Modified files (2+)**:
- `server/src/app.ts` (add route)
- `client/src/pages/docs/*.tsx` (add button to all pages)

**Configuration (1 file)**:
- `.env.example`

### 3. Documentation

**Update README** (optional) with:
```markdown
## AI Chat Feature

The portal includes an AI chat assistant powered by Vercel AI SDK.

### Usage
- Click "Ask AI" button on any documentation page
- Ask questions about Octant Protocol
- Get instant answers with source citations

### Architecture
- Backend: Vercel AI Gateway + Pinecone vector search
- Frontend: React with useChat hook
- Knowledge base: 1,100+ documentation chunks
```

---

## 🎯 OUTPUT FORMAT

When you complete the task, respond with:

```
✅ IMPLEMENTATION COMPLETE

FILES CREATED:
- server/src/lib/ai.ts (23 lines)
- server/src/lib/pinecone.ts (34 lines)
- server/src/lib/prompts.ts (45 lines)
- server/src/types/chat.ts (28 lines)
- server/src/api/chat.ts (111 lines)
- client/src/components/AskAIButton.tsx (27 lines)
- client/src/components/AIChatPanel.tsx (189 lines)
- client/src/components/ChatMessage.tsx (41 lines)
- client/src/hooks/useChatPanel.ts (18 lines)
- client/src/types/chat.ts (21 lines)
- .env.example (4 lines)

FILES MODIFIED:
- server/src/app.ts (added 2 lines)
- client/src/pages/docs/*.tsx (added button to X pages)

TESTS RUN:
✅ Backend API test - PASSED
✅ Frontend button test - PASSED
✅ Chat open/close test - PASSED
✅ Send message test - PASSED
✅ Expand/collapse test - PASSED
✅ Multiple messages test - PASSED
✅ Error handling test - PASSED
✅ Mobile responsive test - PASSED

PULL REQUEST:
https://github.com/ReageMeuFilho/Octant-developer-portal/pull/XXX

READY FOR: Review and merge
```

---

## 📞 QUESTIONS TO ASK IF ANYTHING IS UNCLEAR

**If you encounter any ambiguity, ask:**

1. "The file path X doesn't exist in the repo structure. Should I create the parent directories?"
2. "Component Y isn't defined in the codebase. Should I use a different component?"
3. "The existing code structure uses pattern Z. Should I follow the same pattern?"
4. "Environment variable X isn't documented. What value should it have?"
5. "Should I add the button to page X? It's not explicitly listed."

**DO NOT:**
- Proceed with assumptions
- Skip steps
- Simplify requirements
- Deviate from specifications

---

## 🎯 FINAL EXPLICIT INSTRUCTIONS

### Your EXACT Task:

1. **Clone repository**: `git clone https://github.com/ReageMeuFilho/Octant-developer-portal.git`
2. **Checkout branch**: `git checkout manus-ai-ask-ai-feature`
3. **Read this entire document** from top to bottom
4. **Install dependencies**: Run exact command in Step 1
5. **Create files**: Create ALL 11 files with EXACT content provided
6. **Modify files**: Modify 2 files as specified
7. **Test locally**: Run ALL 8 tests in testing procedures
8. **Create PR**: With title and description as specified
9. **Respond**: With output format as specified

### What Success Looks Like:

**User visits**: https://octant-developer-portal.vercel.app/docs/quickstart  
**User sees**: "Ask AI" button below page title  
**User clicks**: Button  
**Result**: Chat panel slides in from right  
**User types**: "How do yield strategies work?"  
**Result**: AI streams response word-by-word with sources  
**User clicks**: Expand button  
**Result**: Panel expands to full width  
**User clicks**: Close button  
**Result**: Panel slides out and disappears  

**All of this works smoothly with no errors.**

---

## ⏱️ TIME TRACKING

Log your time for each phase:

- [ ] Setup & dependencies: _____ minutes
- [ ] Backend implementation: _____ minutes
- [ ] Frontend implementation: _____ minutes
- [ ] Integration: _____ minutes
- [ ] Testing: _____ minutes
- [ ] Documentation: _____ minutes
- **TOTAL**: _____ minutes

**Target**: 150-180 minutes (2.5-3 hours)

---

## 🔐 SECURITY CHECKLIST

Before submitting:

- [ ] NO API keys committed to git
- [ ] `.env` is in `.gitignore`
- [ ] Only `.env.example` is committed
- [ ] CORS is configured properly
- [ ] Input is sanitized
- [ ] No XSS vulnerabilities
- [ ] Error messages don't leak sensitive data

---

## 🎉 COMPLETION CRITERIA

The task is COMPLETE and ONLY COMPLETE when:

### Code
- ✅ All 11 files created with exact content
- ✅ All files in correct locations
- ✅ TypeScript compiles without errors
- ✅ No linter warnings
- ✅ No console errors

### Testing
- ✅ All 8 tests passed
- ✅ All acceptance criteria checked
- ✅ Mobile responsive verified
- ✅ Accessibility verified

### Deliverables
- ✅ Pull request created with proper description
- ✅ Screenshots added to PR
- ✅ Environment variables documented
- ✅ README updated (optional)

### Visual
- ✅ Matches Stripe's design exactly
- ✅ Animations smooth
- ✅ No visual bugs
- ✅ Professional polish

**DO NOT mark as complete until ALL criteria are met.**

---

## 🎯 ABSOLUTE REQUIREMENTS (CANNOT BE CHANGED)

1. **Button location**: Below page title, inside main content (NOT in global header)
2. **Panel direction**: Slides from RIGHT (not left, not bottom)
3. **Panel width**: 400px default, expandable to 100%
4. **Use useChat hook**: From `ai/react` package (automatic streaming)
5. **Backend format**: Server-Sent Events with `data:` prefix
6. **Stripe design match**: Visual design must match Stripe docs exactly
7. **All doc pages**: Button must appear on ALL documentation pages
8. **Responsive**: Must work on mobile (320px) and desktop (1920px)

**These are non-negotiable. Follow exactly as specified.**

---

## 📚 REFERENCE MATERIALS

**Code examples**: Complete code for every file is provided in this document  
**Visual reference**: Stripe docs (https://stripe.com/docs/payments)  
**AI SDK docs**: https://sdk.vercel.ai/docs  
**useChat reference**: https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat  
**v0.dev**: https://v0.dev (UI generation tool)  
**Repository**: https://github.com/ReageMeuFilho/Octant-developer-portal  
**Live portal**: https://octant-developer-portal.vercel.app  

---

## ✅ BEFORE YOU START

Confirm you understand:

- [ ] I will create 11 new files in exact locations specified
- [ ] I will modify 2 existing files as specified
- [ ] I will use Vercel AI SDK's useChat hook (not manual implementation)
- [ ] I will match Stripe's design exactly
- [ ] I will test all 8 test cases
- [ ] I will run all acceptance criteria checks
- [ ] I will create a pull request when complete
- [ ] I will NOT deviate from specifications
- [ ] I will ask questions if anything is ambiguous
- [ ] I will report time taken for each phase

**If you understand all requirements, begin implementation now.**

**Expected completion time: 2.5-3 hours**

**Start with**: Installing dependencies, then create backend files, then frontend files, then integrate.

---

🚀 **BEGIN IMPLEMENTATION NOW** 🚀

