/**
 * Message part from Vercel AI SDK
 */
export interface MessagePart {
  type: 'text' | 'tool-call' | 'tool-result';
  text?: string;
  [key: string]: any;
}

/**
 * Chat message interface
 * Supports both content (string) and parts (array) formats from Vercel AI SDK
 */
export interface Message {
  id: string;
  role: 'user' | 'assistant';
  content?: string;
  parts?: (string | MessagePart)[];
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
