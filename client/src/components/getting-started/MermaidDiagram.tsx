import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  code: string;
}

export function MermaidDiagram({ code }: MermaidDiagramProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState<string>('');
  const [isZoomed, setIsZoomed] = useState(false);

  useEffect(() => {
    const renderDiagram = async () => {
      if (!containerRef.current) return;

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            primaryColor: '#e1f5ff',
            primaryTextColor: '#0a0a0a',
            primaryBorderColor: '#334155',
            lineColor: '#64748b',
            secondaryColor: '#ffe1f5',
            tertiaryColor: '#d4f1d4',
            background: '#0f172a',
            mainBkg: '#0f172a',
            secondBkg: '#1e293b',
            tertiaryBkg: '#334155',
            textColor: '#e5e7eb',
            border1: '#334155',
            border2: '#475569',
            fontFamily: 'ui-sans-serif, system-ui, sans-serif',
          },
          themeCSS: `
            .node rect, .node circle, .node ellipse, .node polygon {
              fill: #0f172a !important;
              stroke: #64748b !important;
              stroke-width: 2px !important;
            }
            .node .label, .nodeLabel, .edgeLabel {
              color: #e5e7eb !important;
              fill: #e5e7eb !important;
            }
            .edgePath .path {
              stroke: #64748b !important;
              stroke-width: 2px !important;
            }
            .actor {
              fill: #0f172a !important;
              stroke: #64748b !important;
            }
            .actor-line {
              stroke: #64748b !important;
            }
            .messageLine0, .messageLine1 {
              stroke: #64748b !important;
            }
            .messageText {
              fill: #e5e7eb !important;
              stroke: none !important;
            }
            .labelText {
              fill: #e5e7eb !important;
            }
            .loopText, .loopLine, .labelBox {
              fill: #0f172a !important;
              stroke: #64748b !important;
            }
            .note {
              fill: #1e293b !important;
              stroke: #64748b !important;
            }
            .noteText {
              fill: #e5e7eb !important;
            }
            .activation0, .activation1, .activation2 {
              fill: #1e293b !important;
              stroke: #64748b !important;
            }
            .actor > rect {
              fill: #0f172a !important;
            }
          `,
        });

        const id = `mermaid-${Math.random().toString(36).substr(2, 9)}`;
        const { svg: renderedSvg } = await mermaid.render(id, code);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
      }
    };

    renderDiagram();
  }, [code]);

  const handleClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <>
      <div
        ref={containerRef}
        className="my-8 flex justify-center cursor-pointer"
        onClick={handleClick}
        dangerouslySetInnerHTML={{ __html: svg }}
      />
      
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-8"
          onClick={handleClick}
        >
          <div
            className="max-w-7xl max-h-full overflow-auto"
            dangerouslySetInnerHTML={{ __html: svg }}
          />
        </div>
      )}
    </>
  );
}
