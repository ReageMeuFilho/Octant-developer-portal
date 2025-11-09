# Manus AI Prompt: Implement "Ask AI" Feature for Octant Documentation Portal

## 🎯 PROJECT OVERVIEW

Implement a Stripe-style "Ask AI" chat feature in the Octant documentation portal. The AI will answer questions about Octant Protocol using RAG (Retrieval Augmented Generation) with Pinecone vector search and Vercel AI Gateway.

**Reference Implementation**: https://stripe.com/docs (see their "Ask AI" button and chat panel)

---

## 📋 SCOPE OF WORK

### What You're Building

1. **"Ask AI" Button** - Positioned below page titles in the main content area
2. **Chat Panel** - Slides in from right with Stripe-like design
3. **Backend Integration** - Already built, just needs frontend connection
4. **Streaming Responses** - Real-time AI answers with source citations

### What's Already Done (Use These)

- ✅ Backend API endpoint: `/api/chat`
- ✅ Vector database: Pinecone with 1,100+ documentation chunks
- ✅ AI integration: Vercel AI Gateway + OpenAI
- ✅ Content ingestion: All Octant docs + DeepWiki loaded

**Your job**: Build the frontend UI and connect to existing backend.

---

## 🎨 VISUAL SPECIFICATIONS (EXACT STRIPE MATCH)

### 1. "Ask AI" Button Location

```
┌─────────────────────────────────────────────────────────────┐
│ GLOBAL HEADER (Don't modify - already exists)              │
│ [Octant Logo] [Navigation] [Search] [GitHub] [Sign In]     │
└─────────────────────────────────────────────────────────────┘
├──────────────┬──────────────────────────────────────────────┤
│ LEFT NAV     │ MAIN CONTENT AREA                            │
│              │                                              │
│ • Overview   │ ┌──────────────────────────────────────────┐│
│ • Tutorials  │ │ # Page Title (e.g., "Getting Started")   ││
│ • Reference  │ │                                          ││
│              │ │ [✨ Ask AI]  ← ADD BUTTON HERE           ││
│              │ │                                          ││
│              │ │ ───────────────────────────────────────  ││
│              │ │                                          ││
│              │ │ Page content starts here...              ││
│              │ │ Lorem ipsum dolor sit amet...            ││
│              │ │                                          ││
│              │ └──────────────────────────────────────────┘│
└──────────────┴──────────────────────────────────────────────┘
```

**Button Specifications:**
- **Position**: Below page `<h1>` title, before main content
- **Margin**: `mt-4 mb-6` (16px top, 24px bottom)
- **Visible on**: All documentation/tutorial pages
- **Not visible on**: Homepage, landing pages

---

### 2. "Ask AI" Button Design

```tsx
// Exact styling to match Stripe
<button className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg border border-gray-300 transition-colors">
  <Sparkles className="w-4 h-4" />
  <span className="font-medium text-sm">Ask AI</span>
</button>
```

**Visual Details:**
- Background: Light gray (`bg-gray-100`)
- Hover: Slightly darker (`bg-gray-200`)
- Border: Subtle gray (`border-gray-300`)
- Icon: Sparkles (lucide-react)
- Text: "Ask AI" (medium weight, small size)
- Rounded corners: `rounded-lg`

---

### 3. Chat Panel - Slide-in from Right

**When button is clicked:**

```
┌────────────────────────────┬───────────────────────────┐
│ MAIN CONTENT (70%)         │ CHAT PANEL (30%)          │
│                            │ ┌───────────────────────┐ │
│ # Page Title               │ │ New chat        ▼     │ │
│ [✨ Ask AI] ← clicked      │ │              [+][⛶][✕]│ │
│                            │ └───────────────────────┘ │
│ Content visible but        │                           │
│ slightly grayed out...     │ ⚠️ AI responses may       │
│                            │ contain mistakes          │
│                            │                           │
│                            │ Ask questions about       │
│                            │ Octant Protocol...        │
│                            │                           │
│                            │ 💡 Tip: Highlight text    │
│                            │ with ⌘ + I                │
│                            │                           │
│                            │ ┌───────────────────────┐ │
│                            │ │ "How do yield         │ │
│                            │ │  strategies work?" ✕  │ │
│                            │ └───────────────────────┘ │
│                            │                           │
│                            │ [Chat messages appear]    │
│                            │                           │
│                            │ ┌───────────────────────┐ │
│                            │ │Ask a question about   │ │
│                            │ │the page...          ↑ │ │
│                            │ └───────────────────────┘ │
└────────────────────────────┴───────────────────────────┘
```

**Panel Specifications:**
- **Width**: 400px (can expand to full width)
- **Height**: Full viewport height
- **Position**: Fixed, right side
- **Animation**: Slide in from right (300ms ease-out)
- **Backdrop**: Optional gray overlay on content (opacity: 0.1)
- **Z-index**: 50 (above content, below modals)

---

### 4. Chat Panel Header

```tsx
<div className="flex items-center justify-between p-4 border-b bg-white">
  {/* Left side */}
  <div className="flex items-center gap-2">
    <Sparkles className="w-4 h-4 text-blue-600" />
    <span className="font-semibold text-sm">New chat</span>
    <ChevronDown className="w-4 h-4 text-gray-500" />
  </div>
  
  {/* Right side */}
  <div className="flex items-center gap-2">
    <button className="p-1 hover:bg-gray-100 rounded">
      <Plus className="w-4 h-4" />
    </button>
    <button onClick={toggleExpand} className="p-1 hover:bg-gray-100 rounded">
      <Maximize2 className="w-4 h-4" />
    </button>
    <button onClick={closePanel} className="p-1 hover:bg-gray-100 rounded">
      <X className="w-4 h-4" />
    </button>
  </div>
</div>
```

**Header Elements:**
- ✨ Sparkles icon + "New chat" text
- ▼ Dropdown arrow (for conversation history - optional)
- [+] New chat button
- [⛶] Expand/collapse button
- [✕] Close button

---

### 5. Chat Panel Content Area

```tsx
<div className="flex flex-col h-full">
  {/* Disclaimer */}
  <div className="px-4 py-3 bg-yellow-50 border-b text-xs text-yellow-800">
    ⚠️ Responses are generated using AI and may contain mistakes.
  </div>
  
  {/* Welcome message (when empty) */}
  <div className="flex-1 overflow-y-auto p-4">
    {messages.length === 0 ? (
      <div className="text-center mt-12">
        <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
        <p className="text-sm text-gray-600 mb-2">
          Ask questions about Octant Protocol and get help with your integration.
        </p>
        <p className="text-xs text-gray-500 mb-4">
          💡 Tip: you can highlight any text to ask questions about it with ⌘ + I
        </p>
        
        {/* Suggested prompts */}
        <div className="space-y-2 max-w-sm mx-auto">
          <button onClick={() => setInput("How do yield strategies work?")} 
                  className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200">
            How do yield strategies work?
          </button>
          <button onClick={() => setInput("What's the difference between YDS and YSS?")}
                  className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200">
            What's the difference between YDS and YSS?
          </button>
          <button onClick={() => setInput("How do I deploy a vault?")}
                  className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200">
            How do I deploy a vault?
          </button>
        </div>
      </div>
    ) : (
      /* Chat messages */
      messages.map((msg) => (
        <ChatMessage key={msg.id} message={msg} />
      ))
    )}
  </div>
  
  {/* Input area */}
  <div className="border-t p-4">
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Ask a question about the page..."
        className="flex-1 px-3 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
      />
      <button type="submit" disabled={!input.trim()} 
              className="p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg disabled:opacity-50">
        <ArrowUp className="w-5 h-5" />
      </button>
    </form>
  </div>
</div>
```

---

### 6. Chat Message Display

```tsx
function ChatMessage({ message }: { message: Message }) {
  return (
    <div className={`mb-4 ${message.role === 'user' ? 'text-right' : ''}`}>
      <div className={`inline-block max-w-[85%] rounded-lg p-3 ${
        message.role === 'user' 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-900'
      }`}>
        <div className="text-sm whitespace-pre-wrap">
          {message.content}
        </div>
        
        {/* Show sources for AI responses */}
        {message.role === 'assistant' && message.sources && (
          <div className="mt-2 pt-2 border-t border-gray-300">
            <p className="text-xs font-semibold mb-1">Sources:</p>
            {message.sources.map((source, idx) => (
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

**Message Styling:**
- User messages: Blue background, white text, right-aligned
- AI messages: Gray background, dark text, left-aligned
- Sources: Listed below AI responses
- Markdown support: Optional for code blocks

---

## 🔧 TECHNICAL IMPLEMENTATION

### File Structure to Create

```
your-portal/
├── components/
│   ├── AskAIButton.tsx           ← NEW: Button component
│   ├── AIChatPanel.tsx           ← NEW: Main chat panel
│   └── ChatMessage.tsx           ← NEW: Message component
│
├── hooks/
│   └── useAIChat.ts              ← NEW: Chat state management
│
├── app/
│   └── (docs)/                   ← Your docs pages
│       ├── layout.tsx            ← MODIFY: Add chat context
│       └── [slug]/
│           └── page.tsx          ← MODIFY: Add Ask AI button
│
└── lib/
    └── ai-chat-client.ts         ← NEW: Client-side API calls
```

---

### Step 1: Create Ask AI Button Component

**File**: `components/AskAIButton.tsx`

```tsx
'use client';

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

---

### Step 2: Create Chat Panel Component

**File**: `components/AIChatPanel.tsx`

```tsx
'use client';

import { useState, useRef, useEffect } from 'react';
import { X, Maximize2, Minimize2, Plus, Sparkles, ArrowUp, ChevronDown } from 'lucide-react';
import { useAIChat } from '@/hooks/useAIChat';
import { ChatMessage } from './ChatMessage';

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIChatPanel({ isOpen, onClose }: AIChatPanelProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const { messages, input, setInput, sendMessage, isLoading } = useAIChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() && !isLoading) {
      sendMessage(input);
      setInput('');
    }
  };
  
  const suggestedPrompts = [
    "How do yield strategies work?",
    "What's the difference between YDS and YSS?",
    "How do I deploy a vault?",
  ];
  
  if (!isOpen) return null;
  
  return (
    <>
      {/* Backdrop overlay */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-10 z-40"
        onClick={onClose}
      />
      
      {/* Chat panel */}
      <div className={`fixed right-0 top-0 h-full bg-white shadow-2xl z-50 flex flex-col transition-all duration-300 ${
        isExpanded ? 'w-full' : 'w-[400px]'
      }`}>
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-white">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="font-semibold text-sm">New chat</span>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
          
          <div className="flex items-center gap-2">
            <button 
              onClick={() => {/* Start new chat */}}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title="New chat"
            >
              <Plus className="w-4 h-4" />
            </button>
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
              title={isExpanded ? "Minimize" : "Expand"}
            >
              {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
            </button>
            <button 
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded transition-colors"
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
        
        {/* Messages area */}
        <div className="flex-1 overflow-y-auto p-4">
          {messages.length === 0 ? (
            /* Welcome screen */
            <div className="text-center mt-12">
              <Sparkles className="w-12 h-12 mx-auto mb-4 text-blue-400" />
              <p className="text-sm text-gray-600 mb-2">
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
                    onClick={() => setInput(prompt)}
                    className="w-full text-left px-3 py-2 bg-blue-50 hover:bg-blue-100 rounded-lg text-sm border border-blue-200 transition-colors"
                  >
                    {prompt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            /* Chat messages */
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
        
        {/* Input area */}
        <div className="border-t p-4 bg-white">
          <form onSubmit={handleSubmit} className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
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

---

### Step 3: Create Chat Message Component

**File**: `components/ChatMessage.tsx`

```tsx
'use client';

interface Source {
  title: string;
  source: string;
  score?: number;
}

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Source[];
}

interface ChatMessageProps {
  message: Message;
}

export function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';
  
  return (
    <div className={`mb-4 ${isUser ? 'flex justify-end' : 'flex justify-start'}`}>
      <div className={`inline-block max-w-[85%] rounded-lg p-3 ${
        isUser 
          ? 'bg-blue-600 text-white' 
          : 'bg-gray-100 text-gray-900'
      }`}>
        <div className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.content}
        </div>
        
        {/* Show sources for AI responses */}
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-300">
            <p className="text-xs font-semibold mb-2 text-gray-600">📚 Sources:</p>
            <div className="space-y-1">
              {message.sources.slice(0, 3).map((source, idx) => (
                <div key={idx} className="text-xs text-gray-600">
                  • {source.title}
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

---

### Step 4: Create Chat Hook

**File**: `hooks/useAIChat.ts`

```tsx
'use client';

import { useState, useCallback } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  sources?: Array<{ title: string; source: string; score?: number }>;
}

export function useAIChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const sendMessage = useCallback(async (question: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      content: question,
    };
    
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    
    try {
      // Call backend API (already built!)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question,
          conversationHistory: messages.slice(-6), // Last 3 exchanges
          currentPage: window.location.pathname,
        }),
      });
      
      if (!response.ok) throw new Error('API request failed');
      
      // Read streaming response
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
                // Update message in real-time
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
        
        // Add sources to final message
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
  }, [messages]);
  
  return {
    messages,
    input,
    setInput,
    sendMessage,
    isLoading,
  };
}
```

---

### Step 5: Create Chat Context Provider

**File**: `app/(docs)/layout.tsx`

```tsx
'use client';

import { createContext, useContext, useState } from 'react';
import { AIChatPanel } from '@/components/AIChatPanel';

interface ChatContextType {
  isOpen: boolean;
  openChat: () => void;
  closeChat: () => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function useChat() {
  const context = useContext(ChatContext);
  if (!context) throw new Error('useChat must be used within ChatProvider');
  return context;
}

export default function DocsLayout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <ChatContext.Provider value={{
      isOpen,
      openChat: () => setIsOpen(true),
      closeChat: () => setIsOpen(false),
    }}>
      <div className="docs-layout">
        {children}
      </div>
      <AIChatPanel isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </ChatContext.Provider>
  );
}
```

---

### Step 6: Add Button to Pages

**File**: `app/(docs)/[slug]/page.tsx` (or your equivalent)

```tsx
import { AskAIButton } from '@/components/AskAIButton';
import { useChat } from '../layout';

export default function DocPage() {
  const { openChat } = useChat();
  
  return (
    <div className="prose max-w-none">
      <h1>Page Title Here</h1>
      
      {/* Add Ask AI button right after title */}
      <AskAIButton onClick={openChat} />
      
      {/* Rest of page content */}
      <p>Your documentation content here...</p>
    </div>
  );
}
```

---

## 📦 FILES TO PROVIDE TO MANUS AI

### 1. Backend Files (Already Built - For Reference)

```
backend/
├── lib/
│   ├── ai.ts                    ← Vercel AI SDK setup
│   ├── pinecone.ts              ← Pinecone connection
│   └── prompts.ts               ← AI system prompts
│
├── app/api/chat/
│   └── route.ts                 ← Chat API endpoint (COMPLETE)
│
└── scripts/
    ├── ingest-all-octant-docs.ts ← Documentation loader
    └── fetch-deepwiki-content.ts ← DeepWiki fetcher
```

**Action**: Provide these files for reference - they're complete and working.

---

### 2. Documentation Files (Context for AI)

```
content/
├── getting-started-*.json       ← 10 tutorial JSON files
├── docs/**/*.md                 ← All markdown docs
├── deepwiki-content/*.md        ← DeepWiki pages (35 files)
└── FINAL_PROMPT_FOR_MANUS_AI.txt ← Master knowledge file
```

**Action**: Mention these are already loaded into Pinecone - AI has access to all content.

---

### 3. Design References

```
design-references/
├── stripe-ask-ai-button.png     ← Screenshot of Stripe button
├── stripe-chat-panel.png        ← Screenshot of Stripe chat panel
└── stripe-chat-expanded.png     ← Screenshot of expanded view
```

**Action**: Provide the screenshots you showed me (Stripe docs).

---

### 4. Portal Structure (For Context)

```
your-portal/
├── app/
│   ├── layout.tsx               ← Root layout
│   ├── (docs)/
│   │   ├── layout.tsx           ← Docs layout (MODIFY THIS)
│   │   └── [slug]/
│   │       └── page.tsx         ← Doc pages (ADD BUTTON HERE)
│   └── api/
│       └── chat/
│           └── route.ts         ← Backend API (COMPLETE)
│
├── components/
│   ├── Navigation.tsx           ← Existing nav
│   └── [other components]
│
└── styles/
    └── globals.css              ← Tailwind config
```

**Action**: Describe your current portal structure so Manus knows where to add components.

---

## 🎯 IMPLEMENTATION CHECKLIST FOR MANUS AI

### Phase 1: Setup (30 min)
- [ ] Install dependencies: `lucide-react` (icons)
- [ ] Verify backend API is accessible at `/api/chat`
- [ ] Test API with curl/Postman

### Phase 2: Components (2 hours)
- [ ] Create `AskAIButton.tsx` component
- [ ] Create `AIChatPanel.tsx` component
- [ ] Create `ChatMessage.tsx` component
- [ ] Create `useAIChat.ts` hook
- [ ] Style all components to match Stripe

### Phase 3: Integration (1 hour)
- [ ] Add chat context to docs layout
- [ ] Add Ask AI button below page titles
- [ ] Connect button to chat panel
- [ ] Test open/close/expand functionality

### Phase 4: Testing (1 hour)
- [ ] Test on all doc pages
- [ ] Verify streaming responses work
- [ ] Check source citations display
- [ ] Test mobile responsiveness
- [ ] Verify expand/collapse works

### Phase 5: Polish (30 min)
- [ ] Add animations (slide-in, fade)
- [ ] Add keyboard shortcuts (Escape to close)
- [ ] Add loading states
- [ ] Test accessibility (ARIA labels)

**Total Time: ~5 hours**

---

## 🔍 TESTING INSTRUCTIONS

### Test 1: Button Placement
1. Navigate to any documentation page
2. Verify "Ask AI" button appears below page title
3. Button should have sparkle icon and gray background

### Test 2: Chat Panel Opening
1. Click "Ask AI" button
2. Panel should slide in from right
3. Should take ~400px width
4. Content should remain visible on left

### Test 3: Sending Messages
1. Type "How do yield strategies work?" in input
2. Press Enter or click arrow button
3. Should see:
   - User message (blue, right-aligned)
   - "Thinking..." indicator
   - AI response streaming in (gray, left-aligned)
   - Sources listed below response

### Test 4: Expand/Collapse
1. Click expand button (⛶) in header
2. Panel should expand to full width
3. Click again to collapse back to 400px

### Test 5: Close Panel
1. Click X button in header
2. Panel should slide out to right
3. "Ask AI" button should still be visible

### Test 6: Suggested Prompts
1. Open empty chat panel
2. Click a suggested prompt
3. Input field should populate with prompt text
4. Should be ready to send

---

## 🚨 CRITICAL REQUIREMENTS

### Must-Have Features
1. ✅ Button below page title (NOT in global header)
2. ✅ Chat panel slides from right
3. ✅ Streaming responses (not all-at-once)
4. ✅ Source citations displayed
5. ✅ Expand/collapse/close buttons work
6. ✅ Match Stripe's visual design exactly
7. ✅ Mobile responsive

### Nice-to-Have Features
8. ⭐ Keyboard shortcut (⌘ + I to open)
9. ⭐ Conversation history persistence
10. ⭐ Highlight text to ask about it
11. ⭐ Dark mode support
12. ⭐ Copy message button

---

## 📝 ACCEPTANCE CRITERIA

The implementation is COMPLETE when:

### Visual ✅
- [ ] Button matches Stripe's design exactly
- [ ] Chat panel matches Stripe's layout
- [ ] Colors, spacing, fonts are consistent
- [ ] Animations are smooth (300ms)

### Functional ✅
- [ ] Button opens chat panel
- [ ] Can send messages and receive responses
- [ ] Responses stream in word-by-word
- [ ] Sources are displayed
- [ ] Can expand to full screen
- [ ] Can close panel
- [ ] Can start new chat

### Technical ✅
- [ ] Uses existing `/api/chat` endpoint
- [ ] No errors in console
- [ ] Works on all documentation pages
- [ ] Mobile responsive (320px - 1920px)
- [ ] Accessible (keyboard navigation works)

---

## 🆘 TROUBLESHOOTING

### Issue: API returns 404
**Solution**: Verify `/api/chat/route.ts` exists and is deployed

### Issue: Streaming doesn't work
**Solution**: Check `Content-Type: text/event-stream` in API response

### Issue: Button not showing
**Solution**: Verify page template includes `<AskAIButton />` component

### Issue: Panel doesn't slide smoothly
**Solution**: Check `transition-all duration-300` is in panel className

### Issue: Sources not displaying
**Solution**: Verify API returns `sources` array in final message

---

## 📞 CONTACT & SUPPORT

**Questions?** Ask about:
- Backend API integration
- Component architecture
- Styling questions
- Testing procedures

**Reference Materials:**
- Stripe Docs: https://stripe.com/docs
- Vercel AI SDK: https://sdk.vercel.ai/docs
- Lucide Icons: https://lucide.dev

---

## ✅ SUMMARY FOR MANUS AI

**What you're building:**
- "Ask AI" button below page titles
- Chat panel that slides from right (like Stripe)
- Connects to existing backend API
- Streams AI responses with sources

**What's already done:**
- ✅ Backend API (`/api/chat`)
- ✅ Vector database (Pinecone)
- ✅ AI integration (Vercel AI Gateway)
- ✅ All documentation loaded

**Your job:**
- Build the frontend UI components
- Match Stripe's design exactly
- Connect to existing API
- Make it work on all doc pages

**Time estimate: 5 hours**

---

Good luck! 🚀

