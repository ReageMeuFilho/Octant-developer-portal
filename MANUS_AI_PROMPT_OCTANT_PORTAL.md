# Manus AI Prompt: Add "Ask AI" Feature to Octant Developer Portal

## 🎯 PROJECT CONTEXT

**Repository**: https://github.com/ReageMeuFilho/Octant-developer-portal  
**Live Portal**: https://octant-developer-portal.vercel.app  
**Tech Stack**: React + Vite + TypeScript + Express + Tailwind CSS  
**Current Status**: Portal with 20+ documentation pages, fully deployed

---

## 📋 YOUR TASK

Add a Stripe-style "Ask AI" chat feature to help developers get instant answers about Octant Protocol.

**Reference**: https://stripe.com/docs (see their "Ask AI" implementation)

**What You're Building**:
1. "Ask AI" button below page titles in documentation
2. Chat panel that slides in from the right
3. Backend API for AI responses (Vercel AI Gateway + Pinecone)
4. Streaming responses with source citations

**Time Estimate**: 5-6 hours

---

## 🏗️ PROJECT STRUCTURE (IMPORTANT!)

This portal uses a **client-server architecture**, NOT Next.js:

```
Octant-developer-portal/
├── client/                    ← FRONTEND (React + Vite)
│   └── src/
│       ├── components/        ← Add chat components here
│       ├── pages/docs/        ← Add button to these pages
│       ├── hooks/             ← Add chat hook here
│       └── App.tsx
│
├── server/                    ← BACKEND (Node.js + Express)
│   └── src/
│       ├── api/              ← Add chat endpoint here
│       └── lib/              ← Add AI utilities here
│
├── shared/                    ← Shared types/constants
└── package.json              ← Monorepo with pnpm workspaces
```

### Key Differences from Standard Setup:
- ❌ NOT using Next.js App Router
- ✅ Using React Router for navigation
- ✅ Separate Express backend
- ✅ Vite for frontend bundling
- ✅ Already deployed to Vercel

---

## 🎨 VISUAL SPECIFICATIONS (Match Stripe Exactly)

### 1. "Ask AI" Button Placement

**Location**: Below page title in documentation pages

```tsx
// In client/src/pages/docs/* components
<div className="docs-page">
  <h1>Page Title Here</h1>
  
  {/* ADD BUTTON HERE */}
  <AskAIButton onClick={() => setIsChatOpen(true)} />
  
  <div className="content">
    {/* Rest of documentation content */}
  </div>
</div>
```

**Button Design**:
```tsx
<button className="inline-flex items-center gap-2 px-4 py-2 mt-4 mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors">
  <Sparkles className="w-4 h-4" />
  <span className="font-medium text-sm">Ask AI</span>
</button>
```

---

### 2. Chat Panel (Slides from Right)

**Layout When Open**:
```
┌────────────────────────┬─────────────────────────┐
│ DOCS CONTENT (70%)     │ CHAT PANEL (30%)        │
│                        │ ┌─────────────────────┐ │
│ # Page Title           │ │ New chat    [+][⛶][✕]│ │
│ [✨ Ask AI]            │ └─────────────────────┘ │
│                        │                         │
│ Documentation...       │ ⚠️ AI may make mistakes │
│                        │                         │
│                        │ Ask about Octant...     │
│                        │                         │
│                        │ [Suggested prompts]     │
│                        │                         │
│                        │ [Chat messages]         │
│                        │                         │
│                        │ ┌─────────────────────┐ │
│                        │ │ Ask a question... ↑ │ │
│                        │ └─────────────────────┘ │
└────────────────────────┴─────────────────────────┘
```

**Specifications**:
- Width: 400px (expandable to full screen)
- Height: 100vh (full viewport)
- Position: `fixed right-0 top-0`
- Animation: Slide in from right (300ms)
- Z-index: 50

---

## 🔧 IMPLEMENTATION STEPS

### STEP 1: Backend API (server/)

Create: `server/src/api/chat.ts`

```typescript
import express from 'express';
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generateEmbedding } from '../lib/ai';
import { searchDocs } from '../lib/pinecone';
import { SYSTEM_PROMPT } from '../lib/prompts';

const router = express.Router();

router.post('/chat', async (req, res) => {
  try {
    const { question } = req.body;
    
    // 1. Generate embedding
    const embedding = await generateEmbedding(question);
    
    // 2. Search Pinecone for relevant docs
    const docs = await searchDocs(embedding);
    
    // 3. Build context
    const context = docs.map((doc, i) => 
      `[SOURCE ${i + 1}]: ${doc.content}`
    ).join('\n\n');
    
    // 4. Stream AI response
    const result = streamText({
      model: openai('gpt-4-turbo'),
      system: `${SYSTEM_PROMPT}\n\nContext:\n${context}`,
      messages: [{ role: 'user', content: question }],
      temperature: 0.3,
    });
    
    // 5. Set up Server-Sent Events
    res.setHeader('Content-Type', 'text/event-stream');
    res.setHeader('Cache-Control', 'no-cache');
    res.setHeader('Connection', 'keep-alive');
    
    // 6. Stream response
    for await (const chunk of result.textStream) {
      res.write(`data: ${JSON.stringify({ content: chunk })}\n\n`);
    }
    
    // 7. Send sources
    res.write(`data: ${JSON.stringify({ 
      sources: docs.map(d => ({ title: d.title, source: d.source })),
      done: true 
    })}\n\n`);
    
    res.end();
    
  } catch (error) {
    console.error('Chat error:', error);
    res.status(500).json({ error: 'Failed to generate response' });
  }
});

export default router;
```

**Add to**: `server/src/app.ts`
```typescript
import chatRouter from './api/chat';

app.use('/api', chatRouter);
```

---

### STEP 2: AI Utilities (server/src/lib/)

Create: `server/src/lib/ai.ts`

```typescript
import { embed } from 'ai';
import { openai } from '@ai-sdk/openai';

export async function generateEmbedding(text: string): Promise<number[]> {
  const { embedding } = await embed({
    model: openai.embedding('text-embedding-3-small'),
    value: text,
  });
  return embedding;
}
```

Create: `server/src/lib/pinecone.ts`

```typescript
import { Pinecone } from '@pinecone-database/pinecone';

const pinecone = new Pinecone({
  apiKey: process.env.PINECONE_API_KEY!,
});

const index = pinecone.index(process.env.PINECONE_INDEX_NAME!);

export async function searchDocs(embedding: number[], topK = 5) {
  const results = await index.query({
    vector: embedding,
    topK,
    includeMetadata: true,
  });
  
  return results.matches.map(match => ({
    content: match.metadata?.content as string,
    title: match.metadata?.title as string,
    source: match.metadata?.source as string,
    score: match.score,
  }));
}
```

Create: `server/src/lib/prompts.ts`

```typescript
export const SYSTEM_PROMPT = `You are an expert AI assistant for Octant Protocol documentation.

RULES:
1. Answer ONLY using the provided documentation context
2. If the answer isn't in the context, say "I don't have that information in the docs"
3. Be concise but thorough
4. Use code examples when relevant
5. Cite sources

OCTANT PROTOCOL OVERVIEW:
- Yield-based funding infrastructure for public goods
- ERC-4626 vaults with 1:1 share ratio (capital preservation)
- Two strategy types: Yield Donating (YDS) and Yield Skimming (YSS)
- Built on Yearn V3 patterns
- Integrates with Lido, Aave, Morpho, and other DeFi protocols`;
```

---

### STEP 3: Frontend Components (client/src/components/)

Create: `client/src/components/AskAIButton.tsx`

```tsx
import { Sparkles } from 'lucide-react';

interface AskAIButtonProps {
  onClick: () => void;
}

export function AskAIButton({ onClick }: AskAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors duration-200"
      aria-label="Open AI chat assistant"
    >
      <Sparkles className="w-4 h-4" />
      <span className="font-medium text-sm">Ask AI</span>
    </button>
  );
}
```

Create: `client/src/components/AIChatPanel.tsx`

```tsx
import { useState, useRef, useEffect } from 'react';
import { X, Maximize2, Minimize2, Plus, Sparkles, ArrowUp, ChevronDown } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; source: string }>;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: input,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);
    
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: input }),
      });
      
      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let assistantContent = '';
      let sources: any[] = [];
      
      if (reader) {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          
          const chunk = decoder.decode(value);
          const lines = chunk.split('\n\n');
          
          for (const line of lines) {
            if (line.startsWith('data: ')) {
              const data = JSON.parse(line.slice(6));
              
              if (data.content) {
                assistantContent += data.content;
                setMessages(prev => {
                  const newMessages = [...prev];
                  if (newMessages[newMessages.length - 1]?.role === 'assistant') {
                    newMessages[newMessages.length - 1].content = assistantContent;
                  } else {
                    newMessages.push({
                      id: `assistant-${Date.now()}`,
                      role: 'assistant',
                      content: assistantContent,
                    });
                  }
                  return newMessages;
                });
              }
              
              if (data.sources) {
                sources = data.sources;
              }
            }
          }
        }
        
        setMessages(prev => {
          const newMessages = [...prev];
          if (newMessages[newMessages.length - 1]?.role === 'assistant') {
            newMessages[newMessages.length - 1].sources = sources;
          }
          return newMessages;
        });
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, {
        id: `error-${Date.now()}`,
        role: 'assistant',
        content: '❌ Sorry, I encountered an error. Please try again.',
      }]);
    } finally {
      setIsLoading(false);
    }
  };
  
  if (!isOpen) return null;
  
  return (
    <>
      <div 
        className="fixed inset-0 bg-black bg-opacity-10 z-40"
        onClick={onClose}
      />
      
      <div className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-50 flex flex-col transition-all duration-300 ${
        isExpanded ? 'w-full' : 'w-[400px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-sm">New chat</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          
          <div className="flex items-center gap-2">
            <button onClick={() => setMessages([])} className="p-1 hover:bg-gray-100 rounded">
              <Plus className="w-4 h-4" />
            </button>
            <button onClick={() => setIsExpanded(!isExpanded)} className="p-1 hover:bg-gray-100 rounded">
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded">
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="px-4 py-3 bg-yellow-50 border-b text-xs text-yellow-800">
          ⚠️ Responses are generated using AI and may contain mistakes.
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            <div className="text-center mt-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-sm text-gray-600 mb-2">
                Ask questions about Octant Protocol
              </p>
              <p className="text-xs text-gray-500 mb-6">
                💡 Tip: Highlight text with ⌘ + I to ask about it
              </p>
              
              <div className="space-y-2 max-w-sm mx-auto">
                <button
                  onClick={() => setInput("How do yield strategies work?")}
                  className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200"
                >
                  How do yield strategies work?
                </button>
                <button
                  onClick={() => setInput("What's the difference between YDS and YSS?")}
                  className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200"
                >
                  What's the difference between YDS and YSS?
                </button>
              </div>
            </div>
          ) : (
            <>
              {messages.map(msg => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-500">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        
        {/* Input */}
        <div className="border-t p-4">
          <form onSubmit={(e) => { e.preventDefault(); sendMessage(); }} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about the page..."
              className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
```

Create: `client/src/components/ChatMessage.tsx`

```tsx
interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; source: string }>;
}

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`inline-block max-w-[85%] rounded-lg p-3 ${
        isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <div className="text-sm whitespace-pre-wrap">{message.content}</div>
        
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-300">
            <p className="text-xs font-semibold mb-2">📚 Sources:</p>
            {message.sources.slice(0, 3).map((source, idx) => (
              <div key={idx} className="text-xs text-gray-600">
                • {source.title}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

---

### STEP 4: Add to Documentation Pages

Update: `client/src/pages/docs/*` pages

```tsx
import { useState } from 'react';
import { AskAIButton } from '../../components/AskAIButton';
import { AIChatPanel } from '../../components/AIChatPanel';

export function DocPage() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  
  return (
    <>
      <div className="docs-page">
        <h1>Page Title</h1>
        
        {/* ADD BUTTON HERE */}
        <AskAIButton onClick={() => setIsChatOpen(true)} />
        
        <div className="content">
          {/* Documentation content */}
        </div>
      </div>
      
      {/* CHAT PANEL */}
      <AIChatPanel 
        isOpen={isChatOpen} 
        onClose={() => setIsChatOpen(false)} 
      />
    </>
  );
}
```

---

### STEP 5: Environment Variables

Add to: `.env` (root level)

```bash
# Pinecone
PINECONE_API_KEY=your-key-here
PINECONE_INDEX_NAME=octant-docs

# Note: Vercel AI Gateway uses Vercel token automatically
```

Also add to **Vercel dashboard** (Settings → Environment Variables)

---

### STEP 6: Dependencies

Install required packages:

```bash
pnpm add ai @ai-sdk/openai @pinecone-database/pinecone lucide-react
```

---

## ✅ TESTING

### Test 1: Backend API
```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"question": "How do yield strategies work?"}'
```

### Test 2: Frontend
1. Start dev server: `pnpm dev`
2. Navigate to any docs page
3. Click "Ask AI" button
4. Type question and press Enter
5. Verify streaming response appears
6. Check sources are displayed

### Test 3: Expand/Close
1. Click expand button (⛶)
2. Verify full-screen mode
3. Click minimize
4. Click X to close
5. Verify panel disappears

---

## 📦 DEPLOYMENT

The portal auto-deploys to Vercel. After merging your changes:

1. Vercel detects changes
2. Builds client and server
3. Deploys automatically
4. **Don't forget**: Add environment variables in Vercel dashboard

---

## 🎯 SUCCESS CRITERIA

Feature is complete when:

- [ ] Button appears below titles on all doc pages
- [ ] Chat panel slides from right smoothly
- [ ] Can send/receive messages
- [ ] Responses stream word-by-word
- [ ] Sources display correctly
- [ ] Expand/collapse works
- [ ] Close button works
- [ ] Mobile responsive
- [ ] No console errors

---

## 📞 QUESTIONS?

Everything you need is in this prompt. If something is unclear:
- Backend goes in `server/src/`
- Frontend goes in `client/src/`
- Use Express for API (not Next.js API routes)
- Use React Router (not Next.js routing)

Good luck! 🚀

