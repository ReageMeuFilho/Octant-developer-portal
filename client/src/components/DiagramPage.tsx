import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { DiagramData } from '@/data/diagrams';

interface DiagramPageProps {
  diagram: DiagramData;
}

export default function DiagramPage({ diagram }: DiagramPageProps) {
  const [isZoomed, setIsZoomed] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderDiagram = async () => {
      if (diagramRef.current && diagram.mermaidCode) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
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

          const { svg } = await mermaid.render(`diagram-${diagram.slug}`, diagram.mermaidCode);
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
  }, [diagram.mermaidCode, diagram.slug]);

  useEffect(() => {
    const renderZoomedDiagram = async () => {
      if (isZoomed && zoomedDiagramRef.current && diagram.mermaidCode) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
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

          const { svg } = await mermaid.render(`diagram-${diagram.slug}-zoomed`, diagram.mermaidCode);
          if (zoomedDiagramRef.current) {
            zoomedDiagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering zoomed Mermaid diagram:', error);
        }
      }
    };

    renderZoomedDiagram();
  }, [isZoomed, diagram.mermaidCode, diagram.slug]);

  if (diagram.status === 'coming-soon') {
    return (
      <DocsLayoutNew>
        <div className="max-w-4xl mx-auto space-y-8 py-8">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              {diagram.title}
            </h1>
            <Card className="p-8 bg-primary/5 border-primary/20">
              <div className="text-center space-y-4">
                <div className="text-6xl">🚧</div>
                <h2 className="text-2xl font-bold">Coming Soon</h2>
                <p className="text-lg text-muted-foreground">
                  This diagram is currently being developed and will be available soon.
                </p>
              </div>
            </Card>
          </motion.div>
        </div>
      </DocsLayoutNew>
    );
  }

  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-8 py-8">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {diagram.title}
          </h1>

          <div className="space-y-6">
            <div className="text-lg leading-relaxed">
              <h2 className="text-2xl font-bold mb-4">Narrative</h2>
              <p className="text-muted-foreground">{diagram.narrative}</p>
            </div>

            {diagram.mermaidCode && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold">Diagram</h2>
                <div
                  ref={diagramRef}
                  className="bg-card border-2 border-border rounded-lg p-6 cursor-pointer hover:border-primary/50 transition-colors relative group"
                  onClick={() => setIsZoomed(true)}
                  title="Click to view larger diagram"
                >
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                    🔍 Click to zoom
                  </div>
                </div>
              </div>
            )}

            {diagram.keyPoints.length > 0 && (
              <Card className="p-6 bg-primary/5 border-primary/20">
                <h3 className="text-xl font-bold mb-4">Key Points</h3>
                <ul className="space-y-2">
                  {diagram.keyPoints.map((point, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-primary mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            )}
          </div>
        </motion.div>

        {/* Zoomed Diagram Modal */}
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
      </div>
    </DocsLayoutNew>
  );
}
