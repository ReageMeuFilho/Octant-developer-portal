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
