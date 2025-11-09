import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';
import { ReactNode } from 'react';

interface PageHeaderProps {
  /**
   * Page title
   */
  title: string | ReactNode;
  
  /**
   * Optional description/subtitle
   */
  description?: string | ReactNode;
  
  /**
   * Optional badge/category
   */
  badge?: ReactNode;
  
  /**
   * Optional className for customization
   */
  className?: string;
}

/**
 * PageHeader Component
 * 
 * Renders page title with Ask AI button consistently positioned below it.
 * Use this on all documentation pages to ensure consistent Ask AI button placement.
 */
export function PageHeader({ title, description, badge, className = '' }: PageHeaderProps) {
  const { openChat } = useChatPanel();

  return (
    <div className={`mb-8 ${className}`}>
      {badge && <div className="mb-4">{badge}</div>}
      
      {typeof title === 'string' ? (
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
      ) : (
        title
      )}
      
      {/* Ask AI button - Always positioned below title */}
      <AskAIButton onClick={openChat} />
      
      {description && (
        typeof description === 'string' ? (
          <p className="text-xl text-muted-foreground leading-relaxed mt-4">{description}</p>
        ) : (
          <div className="mt-4">{description}</div>
        )
      )}
    </div>
  );
}

