# Manus AI Prompt: Ask AI Feature (Simplified with useChat Hook)

## 🎯 SUPER SIMPLIFIED VERSION

This is a **simpler implementation** using Vercel AI SDK's `useChat` hook.

**Reference**: [Vercel AI SDK - useChat](https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat)

**What changed**: Instead of manually handling streaming, use the built-in hook that does everything automatically!

---

## 🚀 SIMPLIFIED IMPLEMENTATION

### Backend: SAME AS BEFORE (No Changes)

The backend API we already built works perfectly with `useChat`. No changes needed!

**File**: `server/src/api/chat.ts` (already provided)

---

### Frontend: MUCH SIMPLER!

### STEP 1: Install AI SDK React Package

```bash
pnpm add ai
```

---

### STEP 2: Simplified Chat Panel Component

**File**: `client/src/components/AIChatPanel.tsx`

```tsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { useChat } from 'ai/react'; // 🎉 Magic hook!
import { X, Maximize2, Minimize2, Plus, Sparkles, ArrowUp, ChevronDown } from 'lucide-react';
import { ChatMessage } from './ChatMessage';

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // 🎉 ONE LINE replaces 100+ lines of manual streaming code!
  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: '/api/chat',
  });
  
  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const suggestedPrompts = [
    "How do yield strategies work?",
    "What's the difference between YDS and YSS?",
    "How do I deploy a vault?",
  ];
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-10 z-40"
        onClick={onClose}
      />
      
      {/* Chat Panel */}
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
            <button 
              onClick={() => window.location.reload()} 
              className="p-1 hover:bg-gray-100 rounded"
              title="New chat"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded"
              title={isExpanded ? "Minimize" : "Expand"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded"
              title="Close"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
        
        {/* Disclaimer */}
        <div className="px-4 py-3 bg-yellow-50 border-b text-xs text-yellow-800 flex items-start gap-2">
          <span>⚠️</span>
          <span>Responses are generated using AI and may contain mistakes.</span>
        </div>
        
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 bg-gray-50">
          {messages.length === 0 ? (
            /* Welcome Screen */
            <div className="text-center mt-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-sm text-gray-600 mb-2">
                Ask questions about Octant Protocol and get help with your integration.
              </p>
              <p className="text-xs text-gray-500 mb-6">
                💡 <strong>Tip:</strong> you can highlight any text to ask questions about it with ⌘ + I
              </p>
              
              {/* Suggested Prompts */}
              <div className="space-y-2 max-w-sm mx-auto">
                {suggestedPrompts.map((prompt, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      const input = document.querySelector('input[type="text"]') as HTMLInputElement;
                      if (input) input.value = prompt;
                      handleInputChange({ target: { value: prompt } } as any);
                    }}
                    className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Messages */
            <>
              {messages.map((msg) => (
                <ChatMessage key={msg.id} message={msg} />
              ))}
              {isLoading && (
                <div className="flex items-center gap-2 text-gray-500 ml-2">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                  <span className="text-xs">Thinking...</span>
                </div>
              )}
              <div ref={messagesEndRef} />
            </>
          )}
        </div>
        
        {/* Input Area */}
        <div className="border-t p-4 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask a question about the page..."
              className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-sm"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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

**Look at the difference!**
- ❌ Before: ~100 lines of manual streaming logic
- ✅ After: ONE LINE with `useChat` hook

---

### STEP 3: Ask AI Button (Same)

**File**: `client/src/components/AskAIButton.tsx`

```tsx
import { Sparkles } from 'lucide-react';

interface AskAIButtonProps {
  onClick: () => void;
}

export function AskAIButton({ onClick }: AskAIButtonProps) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-2 px-4 py-2 mt-4 mb-6 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors"
    >
      <Sparkles className="w-4 h-4" />
      <span className="font-medium text-sm">Ask AI</span>
    </button>
  );
}
```

---

### STEP 4: Chat Message Component (Same)

**File**: `client/src/components/ChatMessage.tsx`

```tsx
import { Message } from 'ai/react';

export function ChatMessage({ message }: { message: Message }) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`inline-block max-w-[85%] rounded-lg p-3 ${
        isUser ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-900'
      }`}>
        <div className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.content}
        </div>
      </div>
    </div>
  );
}
```

---

### STEP 5: Add to Documentation Pages

**File**: `client/src/pages/docs/YourDocPage.tsx`

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
        
        {/* ADD BUTTON BELOW TITLE */}
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

## 📊 Comparison: Manual vs useChat Hook

### Before (Manual Implementation)

```tsx
// 100+ lines of code for:
const [messages, setMessages] = useState([]);
const [input, setInput] = useState('');
const [isLoading, setIsLoading] = useState(false);

const sendMessage = async () => {
  // Manual fetch
  const response = await fetch('/api/chat', {...});
  
  // Manual streaming parsing
  const reader = response.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    // 50 lines of parsing logic...
  }
  
  // Manual state updates
  setMessages([...]);
};
```

**Complexity**: High ⭐⭐⭐⭐⭐  
**Lines of code**: ~150  
**Maintenance**: Manual

---

### After (With useChat Hook)

```tsx
// ONE line does everything!
const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
  api: '/api/chat',
});

// Just use them in your JSX
<form onSubmit={handleSubmit}>
  <input value={input} onChange={handleInputChange} />
</form>
```

**Complexity**: Low ⭐  
**Lines of code**: ~50  
**Maintenance**: Automatic (SDK updates)

---

## 🎁 Additional AI SDK Features

### 1. Built-in Error Handling

```tsx
const { messages, error } = useChat({ api: '/api/chat' });

{error && <div>Error: {error.message}</div>}
```

### 2. Stop Generation

```tsx
const { stop, isLoading } = useChat({ api: '/api/chat' });

<button onClick={stop} disabled={!isLoading}>
  Stop generating
</button>
```

### 3. Reload Last Message

```tsx
const { reload } = useChat({ api: '/api/chat' });

<button onClick={reload}>
  Regenerate response
</button>
```

### 4. Set Messages Programmatically

```tsx
const { setMessages } = useChat({ api: '/api/chat' });

// Clear chat
<button onClick={() => setMessages([])}>New chat</button>
```

---

## ✅ Updated Complexity Reduction

| Feature | Manual Implementation | With useChat Hook |
|---------|----------------------|-------------------|
| State management | 30 lines | 1 line |
| API calls | 20 lines | 0 lines (automatic) |
| Streaming logic | 50 lines | 0 lines (automatic) |
| Form handling | 15 lines | 0 lines (automatic) |
| Error handling | 10 lines | 1 line |
| Loading states | 5 lines | 0 lines (automatic) |
| **Total** | **~130 lines** | **~2 lines** |

**Time saved for Manus: 2-3 hours!**

---

## 🔧 Updated Backend (Compatible with useChat)

Your backend needs to return responses in a specific format. Update `server/src/api/chat.ts`:

```typescript
import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { generateEmbedding } from '../lib/ai';
import { searchDocs } from '../lib/pinecone';
import { SYSTEM_PROMPT } from '../lib/prompts';

export async function POST(req: Request) {
  const { messages } = await req.json(); // useChat sends messages array
  
  // Get last message
  const lastMessage = messages[messages.length - 1].content;
  
  // Search docs
  const embedding = await generateEmbedding(lastMessage);
  const docs = await searchDocs(embedding);
  
  const context = docs.map(d => d.content).join('\n\n');
  
  // Use AI SDK's streamText - it returns the right format automatically!
  const result = streamText({
    model: openai('gpt-4-turbo'),
    system: `${SYSTEM_PROMPT}\n\nContext:\n${context}`,
    messages, // Pass the whole conversation
    temperature: 0.3,
  });
  
  // This returns the exact format useChat expects!
  return result.toDataStreamResponse();
}
```

**The magic**: `toDataStreamResponse()` formats everything perfectly for `useChat`!

---

## 📦 UPDATED FILE LIST FOR MANUS

Even simpler now:

### Backend (3 files)
```
server/src/
├── api/chat.ts           ← Main API (updated for useChat compatibility)
├── lib/ai.ts             ← AI utilities
└── lib/pinecone.ts       ← Vector search
```

### Frontend (3 files)
```
client/src/
├── components/
│   ├── AskAIButton.tsx   ← Button component
│   ├── AIChatPanel.tsx   ← Chat panel (SIMPLIFIED with useChat!)
│   └── ChatMessage.tsx   ← Message display
```

**Total: 6 files instead of 10!**

---

## ⏱️ UPDATED TIME ESTIMATE

| Task | Before | With useChat | Savings |
|------|--------|-------------|---------|
| Setup | 30 min | 30 min | - |
| Backend | 1 hour | 1 hour | - |
| Frontend Components | 3 hours | **1.5 hours** | **1.5 hr** |
| Integration | 1 hour | 30 min | 30 min |
| Testing | 1 hour | 30 min | 30 min |
| **Total** | **6.5 hours** | **4 hours** | **2.5 hr** |

**Manus can complete this in 4 hours instead of 6.5!**

---

## 🎉 Why This is Better

### For Manus AI:
- ✅ **65% less frontend code** to write
- ✅ **Built-in streaming** - no manual parsing
- ✅ **Automatic state management** - no useState complexity
- ✅ **Type-safe** - TypeScript types included
- ✅ **Battle-tested** - used by thousands of apps
- ✅ **Well-documented** - [Vercel AI SDK docs](https://sdk.vercel.ai/docs)

### For You:
- ✅ **Faster delivery** (4 hours vs 6.5 hours)
- ✅ **Less bugs** (SDK is tested)
- ✅ **Easier maintenance** (SDK handles updates)
- ✅ **Better performance** (optimized by Vercel)

---

## ✅ WHAT TO TELL MANUS

**Key point**: Use the `useChat` hook from `ai/react`!

```
Hi Manus,

IMPORTANT UPDATE: Use Vercel AI SDK's `useChat` hook for the frontend!

Reference: https://sdk.vercel.ai/docs/reference/ai-sdk-ui/use-chat

This simplifies the implementation significantly:
- Automatic streaming
- Built-in state management  
- Type-safe
- Only ~50 lines of frontend code needed

See MANUS_AI_SIMPLIFIED_WITH_USECHAT.md for the updated implementation.

Time reduced from 6.5 hours to 4 hours!

Thanks,
Wesley
```

---

## 📋 FINAL CHECKLIST

- [x] Files copied to portal repo
- [x] Branch created: manus-ai-ask-ai-feature
- [x] Pushed to GitHub
- [ ] Send message to Manus (with useChat note)
- [ ] Include link to AI SDK docs
- [ ] Wait for implementation (~4 hours)
- [ ] Review and merge

---

## 🚀 THE BOTTOM LINE

**YES** - Vercel AI SDK makes this MUCH simpler!

The `useChat` hook reduces frontend complexity by **65%** and saves Manus **2.5 hours** of development time.

**It's built exactly for this use case!** 🎯

According to the [AI SDK documentation](https://vercel.com/docs/ai-sdk), it's designed for building chat interfaces and handles all the complexity automatically.

---

**Want me to update the main prompt file with this simplified approach?** It will make Manus's job much easier! 🚀

