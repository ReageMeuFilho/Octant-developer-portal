import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Card {
  icon: string;
  title: string;
  description: string;
  badge?: string;
}

interface CardGridProps {
  cards: Card[];
}

export function CardGrid({ cards }: CardGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
      {cards.map((card, idx) => {
        const IconComponent = (Icons as any)[card.icon] as LucideIcon;
        
        return (
          <div
            key={idx}
            className="p-6 bg-card border-2 border-border rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
          >
            <div className="flex items-start gap-4">
              {IconComponent && (
                <div className="flex-shrink-0">
                  <IconComponent className="w-8 h-8 text-primary" />
                </div>
              )}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold">{card.title}</h3>
                  {card.badge && (
                    <span className="px-2 py-1 text-xs font-semibold bg-primary/20 text-primary rounded">
                      {card.badge}
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
