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
