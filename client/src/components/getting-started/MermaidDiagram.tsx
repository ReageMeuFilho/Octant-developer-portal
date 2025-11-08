import { useEffect, useRef, useState, useId } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  code: string;
}

export function MermaidDiagram({ code }: MermaidDiagramProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);
  const id = useId();

  useEffect(() => {
    const renderDiagram = async () => {
      if (!diagramRef.current) return;

      try {
        mermaid.initialize({
          startOnLoad: false,
          theme: 'base',
          themeVariables: {
            background: '#0a0a0a',
            textColor: '#e5e7eb',
            lineColor: '#64748b',
            mainBkg: '#0f172a',
            secondBkg: '#111827',
            primaryBorderColor: '#334155',
            primaryTextColor: '#e5e7eb',
            primaryColor: '#2563eb',
            secondaryColor: '#8b5cf6',
            tertiaryColor: '#10b981',
            nodeTextColor: '#e5e7eb',
            clusterBkg: '#0f172a',
            clusterBorder: '#334155',
            edgeLabelBackground: '#0f172a',
            actorBkg: '#0f172a',
            actorTextColor: '#e5e7eb',
            noteBkgColor: '#0f172a',
            noteTextColor: '#e5e7eb',
            labelBoxBkgColor: '#0f172a',
            labelTextColor: '#e5e7eb',
            signalTextColor: '#e5e7eb',
            fontSize: '14px'
          },
          themeCSS: `
            .labelBox > rect,
            .note > rect,
            .actor > rect {
              fill: #0f172a !important;
              stroke: #334155 !important;
            }
            .messageText,
            .noteText,
            .labelBox > text,
            .actor > text {
              fill: #e5e7eb !important;
            }
            .edgeLabel .label > rect {
              fill: #0f172a !important;
              stroke: #334155 !important;
            }
            .edgeLabel .label tspan,
            .edgeLabel .label text {
              fill: #e5e7eb !important;
            }
          `
        });

        const { svg } = await mermaid.render(`diagram-${id}`, code);
        if (diagramRef.current) {
          diagramRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        if (diagramRef.current) {
          diagramRef.current.innerHTML = `<div class="text-red-500">Error rendering diagram</div>`;
        }
      }
    };

    renderDiagram();
  }, [code, id]);

  useEffect(() => {
    const renderZoomedDiagram = async () => {
      if (isZoomed && zoomedDiagramRef.current) {
        try {
          mermaid.initialize({
            startOnLoad: false,
            theme: 'base',
            themeVariables: {
              background: '#0a0a0a',
              textColor: '#e5e7eb',
              lineColor: '#64748b',
              mainBkg: '#0f172a',
              secondBkg: '#111827',
              primaryBorderColor: '#334155',
              primaryTextColor: '#e5e7eb',
              primaryColor: '#2563eb',
              secondaryColor: '#8b5cf6',
              tertiaryColor: '#10b981',
              nodeTextColor: '#e5e7eb',
              clusterBkg: '#0f172a',
              clusterBorder: '#334155',
              edgeLabelBackground: '#0f172a',
              actorBkg: '#0f172a',
              actorTextColor: '#e5e7eb',
              noteBkgColor: '#0f172a',
              noteTextColor: '#e5e7eb',
              labelBoxBkgColor: '#0f172a',
              labelTextColor: '#e5e7eb',
              signalTextColor: '#e5e7eb',
              fontSize: '22px'
            },
            themeCSS: `
              .labelBox > rect,
              .note > rect,
              .actor > rect {
                fill: #0f172a !important;
                stroke: #334155 !important;
              }
              .messageText,
              .noteText,
              .labelBox > text,
              .actor > text {
                fill: #e5e7eb !important;
              }
              .edgeLabel .label > rect {
                fill: #0f172a !important;
                stroke: #334155 !important;
              }
              .edgeLabel .label tspan,
              .edgeLabel .label text {
                fill: #e5e7eb !important;
              }
            `,
            flowchart: {
              htmlLabels: true,
              curve: 'basis',
              padding: 20,
              nodeSpacing: 100,
              rankSpacing: 100
            }
          });

          const { svg } = await mermaid.render(`diagram-${id}-zoomed`, code);
          if (zoomedDiagramRef.current) {
            zoomedDiagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering zoomed Mermaid diagram:', error);
        }
      }
    };

    renderZoomedDiagram();
  }, [isZoomed, code, id]);

  return (
    <>
      <div
        ref={diagramRef}
        className="my-8 bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors relative group"
        onClick={() => setIsZoomed(true)}
        title="Click to view larger diagram"
      >
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm font-medium">
          🔍 Click to zoom
        </div>
      </div>
      
      {isZoomed && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
          onClick={() => setIsZoomed(false)}
        >
          <div
            className="relative w-full max-w-7xl max-h-[90vh] overflow-auto bg-card border-2 border-primary rounded-lg p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsZoomed(false)}
              className="absolute top-4 right-4 z-10 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              ✕ Close
            </button>
            <div ref={zoomedDiagramRef} className="mt-8">
              {/* Zoomed diagram will be rendered here */}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
