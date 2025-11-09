import { useState } from 'react';

export function useChatPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const openChat = () => setIsOpen(true);
  const closeChat = () => {
    setIsOpen(false);
    setIsExpanded(false);
  };
  const toggleExpand = () => setIsExpanded(prev => !prev);
  
  return {
    isOpen,
    isExpanded,
    openChat,
    closeChat,
    toggleExpand,
  };
}
