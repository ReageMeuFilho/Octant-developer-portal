import { motion } from 'framer-motion';
import { User, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, Maximize2 } from 'lucide-react';
// Using simple conditional modal like Octant Wiki instead of Dialog component
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { useEffect, useRef, useState } from 'react';

export default function AliceDay2() {
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  const diagramDefinition = `graph LR
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
    style SP fill:#ADD8E6,stroke:#4682B4,stroke-width:2px`;

  // Render normal diagram
  useEffect(() => {
    const renderDiagram = async () => {
      if (diagramRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
              primaryColor: '#e1f5ff',
              primaryTextColor: '#000',
              primaryBorderColor: '#0066cc',
              lineColor: '#228B22',
              secondaryColor: '#90EE90',
              tertiaryColor: '#ADD8E6',
              fontSize: '14px'
            }
          });

          const { svg } = await mermaid.render('alice-day2-diagram', diagramDefinition);
          if (diagramRef.current) {
            diagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          // Silently ignore Mermaid edge label positioning errors - they don't affect rendering
          if (error instanceof Error && !error.message.includes('Could not find a suitable point')) {
            console.error('Error rendering Mermaid diagram:', error);
          }
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
              secondaryColor: '#90EE90',
              secondaryTextColor: '#000000',
              tertiaryColor: '#ADD8E6',
              tertiaryTextColor: '#000000',
              fontSize: '18px',
              background: 'transparent',
              mainBkg: '#e1f5ff',
              secondBkg: '#90EE90',
              tertiaryBkg: '#ADD8E6',
              textColor: '#000000',
              edgeLabelBackground: 'transparent',
              labelTextColor: '#ffffff',
              edgeLabelColor: '#ffffff'
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
          const { svg } = await mermaid.render('alice-day2-diagram-zoomed-' + Date.now(), zoomedDiagramDef);
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
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary rounded-full mb-6">
              <User className="w-5 h-5" />
              <span className="font-semibold">Alice's Journey - Day 2</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Deploying a Multi-Strategy Vault
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Alice learns how to deploy a vault that automatically allocates capital across multiple DeFi protocols 
              to maximize yield while maintaining diversification.
            </p>
          </motion.div>

          {/* Scene 1: The Challenge */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-12 p-8 bg-card border-2 border-border rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <TrendingUp className="w-8 h-8 text-primary" />
              The Challenge: Diversifying Yield Sources
            </h2>
            <p className="text-lg text-muted-foreground mb-4">
              After successfully deploying her first single-strategy vault, Alice realizes she wants to diversify her yield sources. 
              Instead of putting all her capital into one protocol, she wants to split it across Lido (staking), Morpho (lending), 
              and Sky (savings).
            </p>
            <div className="p-4 bg-yellow-50 dark:bg-yellow-950/20 border-l-4 border-yellow-500 rounded">
              <p className="font-medium">
                💡 <strong>Key Insight:</strong> A multi-strategy vault acts like a mutual fund - it automatically manages capital allocation 
                across multiple strategies, rebalancing as needed.
              </p>
            </div>
          </motion.div>

          {/* Scene 2: Understanding Capital Flow */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Zap className="w-8 h-8 text-primary" />
              Understanding Capital Flow
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              When Alice deposits 10,000 DAI into her MultistrategyVault, the vault automatically allocates it across three strategies. 
              Each strategy then deploys the capital to its respective DeFi protocol.
            </p>
            
            <div className="relative group">
              <div 
                className="p-8 bg-card border-2 border-border rounded-lg cursor-pointer hover:border-primary transition-colors focus:outline-none focus:ring-2 focus:ring-primary"
                onClick={() => setIsZoomed(true)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsZoomed(true);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label="Click to expand diagram"
              >
                <h3 className="text-xl font-bold mb-4 text-center">Capital Flow from Vault to Protocols</h3>
                <div ref={diagramRef} />
              </div>
              <button
                onClick={() => setIsZoomed(true)}
                className="absolute top-4 right-4 p-2 bg-primary text-primary-foreground rounded-md opacity-0 group-hover:opacity-100 transition-opacity"
                aria-label="Expand diagram"
              >
                <Maximize2 className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded mt-6">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Capital Now Working
              </h4>
              <ul className="space-y-2 text-muted-foreground">
                <li>• <strong>4,000 DAI</strong> → Lido Strategy → Staking ETH (4% APY)</li>
                <li>• <strong>4,000 DAI</strong> → Morpho Strategy → Lending (6% APY)</li>
                <li>• <strong>2,000 DAI</strong> → Sky Strategy → Savings (5% APY)</li>
              </ul>
            </div>
          </motion.div>

          {/* Scene 3: Deployment Code */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mb-12 p-8 bg-card border-2 border-border rounded-lg"
          >
            <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
              <Code className="w-8 h-8 text-primary" />
              Deployment Code
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Alice uses the VaultFactory to deploy her multi-strategy vault with three strategies configured:
            </p>
            <pre className="bg-muted p-6 rounded-lg overflow-x-auto">
              <code className="text-sm">{`// Deploy MultistrategyVault with 3 strategies
const vaultFactory = await ethers.getContractAt("VaultFactory", VAULT_FACTORY_ADDRESS);

const tx = await vaultFactory.deployVault(
  "Alice's Diversified Vault", // name
  "ADV",                        // symbol
  DAI_ADDRESS,                  // asset (DAI)
  [
    LIDO_STRATEGY_ADDRESS,      // Strategy 1: Lido
    MORPHO_STRATEGY_ADDRESS,    // Strategy 2: Morpho
    SKY_STRATEGY_ADDRESS        // Strategy 3: Sky
  ],
  [4000, 4000, 2000]            // Allocation: 40%, 40%, 20%
);

await tx.wait();
console.log("✅ Multi-strategy vault deployed!");`}</code>
            </pre>
          </motion.div>

          {/* Scene 4: Key Benefits */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
              <Shield className="w-8 h-8 text-primary" />
              Key Benefits of Multi-Strategy Vaults
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Risk Diversification</h3>
                <p className="text-muted-foreground">
                  Capital spread across multiple protocols reduces single-point-of-failure risk
                </p>
              </div>
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimized Yield</h3>
                <p className="text-muted-foreground">
                  Automatically rebalances to capture the best yields across protocols
                </p>
              </div>
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Gas Efficiency</h3>
                <p className="text-muted-foreground">
                  Single deposit/withdrawal transaction handles all strategies
                </p>
              </div>
            </div>
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.6 }}
            className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-2 border-primary/20 rounded-lg"
          >
            <h2 className="text-2xl font-bold mb-4">What's Next?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Alice has successfully deployed a multi-strategy vault! In the next chapter, she'll learn how to monitor 
              performance, rebalance allocations, and add new strategies dynamically.
            </p>
            <div className="flex gap-4">
              <a 
                href="/tradfi-tutorials/alice-day30" 
                className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                Continue to Day 30 →
              </a>
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
