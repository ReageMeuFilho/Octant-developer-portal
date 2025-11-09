import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
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
import type { Message, Source } from '../types/chat';

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
  const [input, setInput] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const { 
    messages, 
    status,
    error,
    sendMessage,
    setMessages,
  } = useChat({
    onError: (error: Error) => {
      console.error('Chat error:', error);
    },
  });
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);
  
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);
  
  const suggestedPrompts = [
    "How do yield strategies work?",
    "What's the difference between YDS and YSS?",
    "How do I deploy a vault?",
    "Explain quadratic funding in Octant",
    "What is the Dragon Protocol?",
  ];
  
  const handlePromptClick = (prompt: string) => {
    setInput(prompt);
    sendMessage({ text: prompt });
    setInput('');
  };
  
  const handleNewChat = () => {
    setMessages([]);
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || status === 'streaming') return;
    
    sendMessage({ text: input });
    setInput('');
  };
  
  const isLoading = status === 'streaming';
  
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
              {messages.map((msg: any) => (
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
              onChange={(e) => setInput(e.target.value)}
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
