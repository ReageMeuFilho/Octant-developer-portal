import { useEffect, useRef } from 'react';

interface MermaidProps {
  code: string;
  id?: string;
}

export default function Mermaid({ code, id }: MermaidProps) {
  const diagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (diagramRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'dark',
            themeVariables: {
              primaryColor: '#2563eb',
              primaryTextColor: '#fff',
              primaryBorderColor: '#1e40af',
              lineColor: '#64748b',
              secondaryColor: '#8b5cf6',
              tertiaryColor: '#10b981',
              background: '#0a0a0a',
              mainBkg: '#1a1a1a',
              secondBkg: '#1e1e1e',
              textColor: '#ffffff',
              fontSize: '14px'
            }
          });

          const diagramId = id || `mermaid-${Math.random().toString(36).substr(2, 9)}`;
          const { svg } = await mermaid.render(diagramId, code);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = `<div class="text-red-500">Error rendering diagram</div>`;
          }
        }
      }
    };

    renderDiagram();
  }, [code, id]);

  return <div ref={diagramRef} className="mermaid-container" />;
}
