import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Maximize2 } from 'lucide-react';
// Using simple conditional modal like Octant Wiki instead of Dialog component
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function SystemOverviewDiagram() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const diagramDefinition = `graph TB
    subgraph "Users"
        U1[Alice<br/>Has both vault shares<br/>AND staked tokens]
        U2[Bob<br/>Has both vault shares<br/>AND staked tokens]
    end
    
    subgraph "Vault System - Asset Management"
        VF[MultistrategyVaultFactory<br/>👔 Creates new vault instances]
        V[MultistrategyVault<br/>💰 Your 'mutual fund' account]
        S1[Lido Strategy<br/>📊 Stake ETH, earn 4% APY]
        S2[Morpho Strategy<br/>📊 Lend assets, earn 6% APY]
        S3[Sky Strategy<br/>📊 Savings protocol, earn 5% APY]
        
        VF -->|1. Deploy| V
        V -->|2. Allocate funds| S1
        V -->|2. Allocate funds| S2
        V -->|2. Allocate funds| S3
        
        S1 -->|3. Report profit| V
        S2 -->|3. Report profit| V
        S3 -->|3. Report profit| V
    end
    
    subgraph "Staking System - Governance & Rewards"
        RSF[RegenStakerFactory<br/>👔 Creates new staker instances]
        RS[RegenStaker<br/>🗳️ Your 'voting rights' account]
        DS1[DelegationSurrogate Alice<br/>🏦 Escrow for Alice's delegators]
        DS2[DelegationSurrogate Bob<br/>🏦 Escrow for Bob's delegators]
        EPC[EarningPowerCalculator<br/>🧮 Calculates reward weights]
        
        RSF -->|1. Deploy| RS
        RS -->|2. Create per delegatee| DS1
        RS -->|2. Create per delegatee| DS2
        RS -->|3. Uses| EPC
    end
    
    U1 -->|Deposit for yield| V
    U2 -->|Deposit for yield| V
    U1 -->|Stake for rewards+voting| RS
    U2 -->|Stake for rewards+voting| RS
    
    V -.->|❌ NO CONNECTION<br/>Completely separate!| RS
    
    style VF fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style V fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style S1 fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style S2 fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style S3 fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    
    style RSF fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    style RS fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    style DS1 fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    style DS2 fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    style EPC fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    
    style U1 fill:#fff4e1,stroke:#ff9900,stroke-width:2px
    style U2 fill:#fff4e1,stroke:#ff9900,stroke-width:2px`;

  // Render normal diagram
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

          const { svg } = await mermaid.render('system-overview-diagram', diagramDefinition);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering Mermaid diagram:', error);
        }
      }
    };

    renderDiagram();
  }, []);

  // Render zoomed diagram when modal opens
  useEffect(() => {
    const renderZoomedDiagram = async () => {
      if (isZoomed && zoomedDiagramRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
              primaryColor: '#e1f5ff',
              primaryTextColor: '#000000',
              primaryBorderColor: '#0066cc',
              lineColor: '#ffffff',
              secondaryColor: '#ffe1f5',
              secondaryTextColor: '#000000',
              tertiaryColor: '#fff4e1',
              tertiaryTextColor: '#000000',
              background: 'transparent',
              mainBkg: '#e1f5ff',
              secondBkg: '#ffe1f5',
              tertiaryBkg: '#fff4e1',
              textColor: '#000000',
              fontSize: '18px',
              nodeBorder: '#333333',
              clusterBkg: 'transparent',
              clusterBorder: '#ffffff',
              edgeLabelBackground: 'transparent',
              labelTextColor: '#ffffff',
              edgeLabelColor: '#ffffff'
            },
            flowchart: {
              htmlLabels: true,
              curve: 'basis',
              padding: 30,
              nodeSpacing: 150,
              rankSpacing: 150
            }
          });

          // Re-define diagram inside useEffect to ensure fresh rendering
          const zoomedDiagramDef = diagramDefinition;
          const { svg } = await mermaid.render('system-overview-diagram-zoomed-' + Date.now(), zoomedDiagramDef);
          if (zoomedDiagramRef.current) {
            zoomedDiagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          // Silently ignore Mermaid edge label positioning errors - they don't affect rendering
          if (error instanceof Error && !error.message.includes('Could not find a suitable point')) {
            console.error('Error rendering zoomed Mermaid diagram:', error);
          }
        }
      }
    };

    if (isZoomed) {
      renderZoomedDiagram();
    }
  }, [isZoomed, diagramDefinition]);

  return (
    <DocsLayoutNew>
      <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            System Architecture: Independent Components
          </h1>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            This diagram shows the complete Octant Protocol architecture, highlighting the critical separation between 
            the Vault System (asset management) and the Staking System (governance & rewards). Understanding this separation 
            is key to understanding Octant's safety model.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg"
        >
          <p className="text-lg text-center font-medium">
            Octant Protocol consists of two completely independent systems that don't communicate with each other. 
            This architectural decision is deliberate - it prevents cascade failures and isolates risk.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-12 relative group"
        >
          <div 
            className="p-8 bg-card border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsZoomed(true)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setIsZoomed(true);
              }
            }}
            ref={diagramRef}
            tabIndex={0}
            role="button"
            aria-label="Click to expand diagram"
          />
          <button
            onClick={() => setIsZoomed(true)}
            className="absolute top-4 right-4 p-2 bg-primary text-primary-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
            aria-label="Expand diagram"
          >
            <Maximize2 className="w-5 h-5" />
          </button>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-6">Legend</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <div className="w-full h-2 bg-[#e1f5ff] border-2 border-[#0066cc] rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Vault System Components (Blue)</h3>
              <p className="text-muted-foreground">
                Asset management layer - where your capital generates yield
              </p>
            </div>
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <div className="w-full h-2 bg-[#ffe1f5] border-2 border-[#cc0066] rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Staking System Components (Pink)</h3>
              <p className="text-muted-foreground">
                Governance layer - where you participate in protocol decisions
              </p>
            </div>
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <div className="w-full h-2 bg-[#fff4e1] border-2 border-[#ff9900] rounded mb-4" />
              <h3 className="text-xl font-semibold mb-2">Users (Orange)</h3>
              <p className="text-muted-foreground">
                You! Can interact with both systems independently
              </p>
            </div>
          </div>
        </motion.div>
      </div>
      </div>

      {/* Zoomed Diagram Modal - Simple conditional rendering like Octant Wiki */}
      {isZoomed && (
        <div 
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
          onClick={() => setIsZoomed(false)}
        >
          <div 
            className="relative w-full max-w-7xl max-h-[90vh] overflow-auto bg-gray-900 border-2 border-primary rounded-lg p-8"
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
            <style>{`
              /* Style Mermaid edge labels for readability on dark background */
              .edgeLabel,
              .labelBkg {
                background-color: transparent !important;
              }
              .edgeLabel p {
                color: #ffffff !important;
                padding: 0 0.5rem;
              }
            `}</style>
          </div>
        </div>
      )}
    </DocsLayoutNew>
  );
}
