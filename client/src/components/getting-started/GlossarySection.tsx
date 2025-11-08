import { LucideIcon } from 'lucide-react';
import * as Icons from 'lucide-react';

interface Term {
  term: string;
  definition: string;
  category?: string;
  relatedTerms?: string[];
  formula?: string;
  permissions?: string[];
  examples?: string[];
  compensation?: string;
  purpose?: string;
  duration?: string;
  example?: string;
  states?: string[];
  function?: string;
  frequency?: string;
  triggers?: string[];
  condition?: string;
  effects?: string[];
  variants?: string[];
  interface?: string;
  typical?: string;
  invented?: string;
  sources?: string[];
  methods?: string[];
  challenge?: string;
  benefits?: string[];
  contracts?: string[];
  use?: string;
  deployment?: string;
  benefit?: string;
  gasPattern?: string;
}

interface GlossarySectionProps {
  category: string;
  icon: string;
  terms: Term[];
}

export function GlossarySection({ category, icon, terms }: GlossarySectionProps) {
  const IconComponent = (Icons as any)[icon] as LucideIcon;

  return (
    <div className="my-12">
      <div className="flex items-center gap-3 mb-6">
        {IconComponent && <IconComponent className="w-8 h-8 text-primary" />}
        <h2 className="text-3xl font-bold">{category}</h2>
      </div>

      <div className="space-y-6">
        {terms.map((term, idx) => (
          <div
            key={idx}
            className="p-6 bg-card border-2 border-border rounded-lg hover:border-primary/30 transition-colors"
          >
            <h3 className="text-xl font-bold mb-3 text-primary">{term.term}</h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {term.definition}
            </p>

            {term.formula && (
              <div className="p-3 bg-muted/30 rounded font-mono text-sm mb-3">
                {term.formula}
              </div>
            )}

            {term.example && (
              <div className="p-3 bg-blue-500/10 border-l-4 border-blue-500 rounded mb-3">
                <p className="text-sm"><strong>Example:</strong> {term.example}</p>
              </div>
            )}

            {term.permissions && term.permissions.length > 0 && (
              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Permissions:</p>
                <ul className="list-disc list-inside space-y-1">
                  {term.permissions.map((perm, i) => (
                    <li key={i} className="text-sm text-muted-foreground font-mono">
                      {perm}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {term.examples && term.examples.length > 0 && (
              <div className="mb-3">
                <p className="text-sm font-semibold mb-2">Examples:</p>
                <ul className="list-disc list-inside space-y-1">
                  {term.examples.map((ex, i) => (
                    <li key={i} className="text-sm text-muted-foreground">
                      {ex}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {term.relatedTerms && term.relatedTerms.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3">
                <span className="text-sm font-semibold">Related:</span>
                {term.relatedTerms.map((related, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 text-xs bg-primary/20 text-primary rounded"
                  >
                    {related}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
