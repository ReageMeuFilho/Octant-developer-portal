import { createContext, useContext, useState, ReactNode } from 'react';

interface ChatPanelContextType {
  isOpen: boolean;
  isExpanded: boolean;
  openChat: () => void;
  closeChat: () => void;
  toggleExpand: () => void;
}

const ChatPanelContext = createContext<ChatPanelContextType | undefined>(undefined);

export function ChatPanelProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const openChat = () => setIsOpen(true);
  const closeChat = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };
  const toggleExpand = () => setIsExpanded((prev) => !prev);
  
  return (
    <ChatPanelContext.Provider
      value={{
        isOpen,
        isExpanded,
        openChat,
        closeChat,
        toggleExpand,
      }}
    >
      {children}
    </ChatPanelContext.Provider>
  );
}

export function useChatPanel() {
  const context = useContext(ChatPanelContext);
  if (!context) {
    throw new Error('useChatPanel must be used within ChatPanelProvider');
  }
  return context;
}
