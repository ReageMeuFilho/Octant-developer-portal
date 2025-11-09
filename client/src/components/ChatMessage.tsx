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
          : 'bg-[#2a2b35] text-gray-200 border border-gray-700'
      }`}>
        {/* Message content */}
        <div className="text-sm whitespace-pre-wrap leading-relaxed">
          {message.content}
        </div>
        
        {/* Source citations (only for assistant messages) */}
        {!isUser && message.sources && message.sources.length > 0 && (
          <div className="mt-3 pt-3 border-t border-gray-700">
            <p className="text-xs font-semibold mb-2 text-gray-400">
              📚 Sources:
            </p>
            <div className="space-y-1">
              {message.sources.slice(0, 3).map((source, idx) => (
                <div key={idx} className="text-xs text-gray-400 flex items-start gap-1">
                  <span>•</span>
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
