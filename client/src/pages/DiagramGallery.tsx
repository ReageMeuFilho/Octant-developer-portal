import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink, Maximize2 } from 'lucide-react';
// Using simple conditional modal like Octant Wiki instead of Dialog component
import { Link } from 'wouter';
import DocsLayoutNew from '@/components/DocsLayoutNew';

interface DiagramCardProps {
  title: string;
  description: string;
  diagramDefinition: string;
  link: string;
  isDark?: boolean;
}

function DiagramCard({ title, description, diagramDefinition, link, isDark = true }: DiagramCardProps) {
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Render normal diagram
  useEffect(() => {
    const renderDiagram = async () => {
      if (diagramRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: isDark ? 'dark' : 'base',
            themeVariables: {
              primaryColor: '#2563eb',
              primaryTextColor: isDark ? '#fff' : '#000',
              primaryBorderColor: '#1e40af',
              lineColor: '#64748b',
              secondaryColor: '#8b5cf6',
              tertiaryColor: '#10b981',
              background: isDark ? '#0a0a0a' : '#ffffff',
              mainBkg: isDark ? '#1a1a1a' : '#e1f5ff',
              secondBkg: isDark ? '#1e1e1e' : '#ffe1f5',
              textColor: isDark ? '#ffffff' : '#000000',
              fontSize: '14px'
            }
          });

          const { svg } = await mermaid.render(`diagram-${title.replace(/\s+/g, '-')}`, diagramDefinition);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering diagram:', error);
        }
      }
    };

    renderDiagram();
  }, [diagramDefinition, title, isDark]);

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
              primaryColor: '#2563eb',
              primaryTextColor: '#000000',
              primaryBorderColor: '#1e40af',
              lineColor: '#64748b',
              secondaryColor: '#8b5cf6',
              tertiaryColor: '#10b981',
              background: '#ffffff',
              mainBkg: '#e1f5ff',
              secondBkg: '#ffe1f5',
              textColor: '#000000',
              fontSize: '18px',
              nodeBorder: '#333333',
              clusterBkg: '#f5f5f5',
              clusterBorder: '#555555',
              titleColor: '#000000'
            },
            flowchart: {
              htmlLabels: true,
              curve: 'basis',
              padding: 20,
              nodeSpacing: 100,
              rankSpacing: 100
            }
          });

          const zoomedDiagramDef = diagramDefinition;
          const { svg } = await mermaid.render(`diagram-${title.replace(/\s+/g, '-')}-zoomed-${Date.now()}`, zoomedDiagramDef);
          if (zoomedDiagramRef.current) {
            zoomedDiagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering zoomed diagram:', error);
        }
      }
    };

    if (isZoomed) {
      renderZoomedDiagram();
    }
  }, [isZoomed, diagramDefinition, title]);

  return (
    <>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-card border-2 border-border rounded-lg overflow-hidden"
      >
        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-muted-foreground mb-4">{description}</p>
          
          <div className="relative group mb-4">
            <div 
              className="p-4 bg-background border border-border rounded-lg cursor-pointer hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
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
              aria-label={`Click or press Enter to expand ${title} diagram`}
            >
              {/* Mermaid diagram will be rendered here */}
            </div>
            <button
              onClick={() => setIsZoomed(true)}
              className="absolute top-2 right-2 p-2 bg-background/80 hover:bg-background border border-border rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
              aria-label="Expand diagram"
            >
              <Maximize2 className="w-4 h-4" />
            </button>
          </div>

          <Link href={link}>
            <a className="inline-flex items-center gap-2 text-primary hover:underline">
              View full tutorial <ExternalLink className="w-4 h-4" />
            </a>
          </Link>
        </div>
      </motion.div>

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
          </div>
        </div>
      )}
    </>
  );
}

export default function DiagramGallery() {
  const diagrams = [
    {
      title: "System Architecture Overview",
      description: "Complete view of Octant Protocol's independent Vault and Staking systems",
      diagramDefinition: `graph TB
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
    style U2 fill:#fff4e1,stroke:#ff9900,stroke-width:2px`,
      link: "/tradfi-tutorials/system-overview-diagram"
    },
    {
      title: "Capital Flow from Vault to Protocols",
      description: "How a MultistrategyVault allocates capital across DeFi protocols",
      diagramDefinition: `graph LR
    V[MultistrategyVault<br/>10,000 DAI] -->|updateDebt 4,000| LS[Lido Strategy]
    V -->|updateDebt 4,000| MS[Morpho Strategy]
    V -->|updateDebt 2,000| SS[Sky Strategy]
    
    LS -->|convert & stake| LP[Lido Protocol<br/>stETH]
    MS -->|lend| MP[Morpho Protocol<br/>Lending Pool]
    SS -->|deposit| SP[Sky Protocol<br/>DSR]
    
    style V fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style LS fill:#90EE90,stroke:#228B22,stroke-width:2px
    style MS fill:#90EE90,stroke:#228B22,stroke-width:2px
    style SS fill:#90EE90,stroke:#228B22,stroke-width:2px
    style LP fill:#ADD8E6,stroke:#4682B4,stroke-width:2px
    style MP fill:#ADD8E6,stroke:#4682B4,stroke-width:2px
    style SP fill:#ADD8E6,stroke:#4682B4,stroke-width:2px`,
      link: "/tradfi-tutorials/alice-day2"
    }
  ];

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
              Diagram Gallery
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Visual guides to understanding Octant Protocol's architecture and capital flows. 
              Click any diagram to view it in full size.
            </p>
          </motion.div>

          <div className="grid gap-8 mb-12">
            {diagrams.map((diagram, index) => (
              <DiagramCard key={index} {...diagram} />
            ))}
          </div>

          {/* Interactive Features */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6">Interactive Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">🖱️ Click to Expand</h3>
                <p className="text-muted-foreground">
                  Click on any diagram or the expand button to view it in full screen with enhanced readability
                </p>
              </div>
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">⌨️ Keyboard Shortcuts</h3>
                <p className="text-muted-foreground">
                  Press <kbd className="px-2 py-1 bg-muted rounded">Enter</kbd> on a focused diagram to expand, 
                  <kbd className="px-2 py-1 bg-muted rounded ml-1">ESC</kbd> to close modal
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
