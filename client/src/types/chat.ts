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
