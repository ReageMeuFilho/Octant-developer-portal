import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ChevronDown, Factory, TrendingUp, Users, Vote, Shield, BookOpen } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function OctantWikiOverview() {
  const { isOpen, openChat, closeChat } = useChatPanel();
  const [activeScene, setActiveScene] = useState(0);
  const [diagramZoomed, setDiagramZoomed] = useState(false);
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const diagramDefinition = `graph TB
    subgraph "🏭 Deployment Infrastructure"
        VF[VaultFactory<br/>Multistrategy Vaults]
        SF[Strategy Factories<br/>Lido, Morpho, Sky, RocketPool]
        RSF[RegenStakerFactory<br/>WITH/WITHOUT Delegation]
    end
    
    subgraph "💰 Yield Generation Layer"
        YS[YieldSkimmingTokenizedStrategy<br/>src/strategies/yieldSkimming/]
        YD[YieldDonatingStrategies<br/>Sky, Morpho, Lido]
        DTS[DragonTokenizedStrategy<br/>Lockup + Non-transferable]
    end
    
    subgraph "🗳️ Staking & Rewards System"
        RS[RegenStaker<br/>src/regen/RegenStaker.sol]
        RSB[RegenStakerBase<br/>src/regen/RegenStakerBase.sol]
        EPC[RegenEarningPowerCalculator<br/>src/regen/RegenEarningPowerCalculator.sol]
        DSV[DelegationSurrogateVotes<br/>Per-delegatee proxies]
    end
    
    subgraph "🏛️ Governance & Allocation"
        TAM[TokenizedAllocationMechanism<br/>src/mechanisms/]
        QVM[QuadraticVotingMechanism<br/>ProperQF Algorithm]
    end
    
    subgraph "🐉 Safe Integration"
        DR[DragonRouter<br/>Coordination]
        LAS[LinearAllowanceSingleton<br/>src/modules/]
        GS[Gnosis Safe<br/>Multi-sig]
    end
    
    VF -->|deploys| YS
    VF -->|deploys| YD
    SF -->|deploys| YS
    SF -->|deploys| YD
    RSF -->|deploys| RS
    
    RS --> RSB
    RS --> EPC
    RS --> DSV
    
    YS -->|reports yield| DR
    YD -->|donates yield| TAM
    
    RS -->|provides voting power| TAM
    TAM --> QVM
    
    DR --> LAS
    DR --> GS
    GS -->|executes via| DR
    
    style VF fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style SF fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style RSF fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    
    style YS fill:#90EE90,stroke:#228B22,stroke-width:2px
    style YD fill:#90EE90,stroke:#228B22,stroke-width:2px
    style DTS fill:#90EE90,stroke:#228B22,stroke-width:2px
    
    style RS fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style RSB fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style EPC fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style DSV fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    
    style TAM fill:#DDA0DD,stroke:#8B008B,stroke-width:2px
    style QVM fill:#DDA0DD,stroke:#8B008B,stroke-width:2px
    
    style DR fill:#F0E68C,stroke:#DAA520,stroke-width:2px
    style LAS fill:#F0E68C,stroke:#DAA520,stroke-width:2px
    style GS fill:#F0E68C,stroke:#DAA520,stroke-width:2px`;

    const renderDiagram = async () => {
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

        // Render normal size diagram
        if (diagramRef.current) {
          const { svg } = await mermaid.render('octant-wiki-system-diagram', diagramDefinition);
          diagramRef.current.innerHTML = svg;
        }
      } catch (error) {
        console.error('Error rendering Mermaid diagram:', error);
      }
    };

    renderDiagram();
  }, []);

  // Render zoomed diagram when modal opens
  useEffect(() => {
    const renderZoomedDiagram = async () => {
      if (diagramZoomed && zoomedDiagramRef.current) {
        try {
          const mermaid = (await import('mermaid')).default;
          mermaid.initialize({
            startOnLoad: true,
            theme: 'base',
            themeVariables: {
              primaryColor: '#2563eb',
              primaryTextColor: '#000000', // Dark text for better contrast
              primaryBorderColor: '#1e40af',
              lineColor: '#64748b',
              secondaryColor: '#8b5cf6',
              tertiaryColor: '#10b981',
              background: '#0a0a0a',
              mainBkg: '#1a1a1a',
              secondBkg: '#1e1e1e',
              textColor: '#000000', // Dark text for all boxes
              fontSize: '22px', // Balanced size for readability without edge label errors
              nodeBorder: '#333333',
              clusterBkg: '#2a2a2a',
              clusterBorder: '#555555',
              titleColor: '#ffffff'
            },
            flowchart: {
              htmlLabels: true,
              curve: 'basis',
              padding: 20,
              nodeSpacing: 100,
              rankSpacing: 100
            }
          });

          const diagramDefinition = `graph TB
    subgraph "🏭 Deployment Infrastructure"
        VF[VaultFactory<br/>Multistrategy Vaults]
        SF[Strategy Factories<br/>Lido, Morpho, Sky, RocketPool]
        RSF[RegenStakerFactory<br/>WITH/WITHOUT Delegation]
    end
    
    subgraph "💰 Yield Generation Layer"
        YS[YieldSkimmingTokenizedStrategy<br/>src/strategies/yieldSkimming/]
        YD[YieldDonatingStrategies<br/>Sky, Morpho, Lido]
        DTS[DragonTokenizedStrategy<br/>Lockup + Non-transferable]
    end
    
    subgraph "🗳️ Staking & Rewards System"
        RS[RegenStaker<br/>src/regen/RegenStaker.sol]
        RSB[RegenStakerBase<br/>src/regen/RegenStakerBase.sol]
        EPC[RegenEarningPowerCalculator<br/>src/regen/RegenEarningPowerCalculator.sol]
        DSV[DelegationSurrogateVotes<br/>Per-delegatee proxies]
    end
    
    subgraph "🏛️ Governance & Allocation"
        TAM[TokenizedAllocationMechanism<br/>src/mechanisms/]
        QVM[QuadraticVotingMechanism<br/>ProperQF Algorithm]
    end
    
    subgraph "🐉 Safe Integration"
        DR[DragonRouter<br/>Coordination]
        LAS[LinearAllowanceSingleton<br/>src/modules/]
        GS[Gnosis Safe<br/>Multi-sig]
    end
    
    VF -->|deploys| YS
    VF -->|deploys| YD
    SF -->|deploys| YS
    SF -->|deploys| YD
    RSF -->|deploys| RS
    
    RS --> RSB
    RS --> EPC
    RS --> DSV
    
    YS -->|reports yield| DR
    YD -->|donates yield| TAM
    
    RS -->|provides voting power| TAM
    TAM --> QVM
    
    DR --> LAS
    DR --> GS
    GS -->|executes via| DR
    
    style VF fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style SF fill:#e1f5ff,stroke:#0066cc,stroke-width:2px
    style RSF fill:#ffe1f5,stroke:#cc0066,stroke-width:2px
    
    style YS fill:#90EE90,stroke:#228B22,stroke-width:2px
    style YD fill:#90EE90,stroke:#228B22,stroke-width:2px
    style DTS fill:#90EE90,stroke:#228B22,stroke-width:2px
    
    style RS fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style RSB fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style EPC fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    style DSV fill:#FFD700,stroke:#FF8C00,stroke-width:2px
    
    style TAM fill:#DDA0DD,stroke:#8B008B,stroke-width:2px
    style QVM fill:#DDA0DD,stroke:#8B008B,stroke-width:2px
    
    style DR fill:#F0E68C,stroke:#DAA520,stroke-width:2px
    style LAS fill:#F0E68C,stroke:#DAA520,stroke-width:2px
    style GS fill:#F0E68C,stroke:#DAA520,stroke-width:2px`;

          const { svg } = await mermaid.render('octant-wiki-system-diagram-zoomed', diagramDefinition);
          if (zoomedDiagramRef.current) {
            zoomedDiagramRef.current.innerHTML = svg;
          }
        } catch (error) {
          console.error('Error rendering zoomed Mermaid diagram:', error);
        }
      }
    };

    renderZoomedDiagram();
  }, [diagramZoomed]);

  const subsystems = [
    {
      icon: Factory,
      title: "Deployment Infrastructure",
      description: "Standardized factories deploy audited contract instances with parameter validation",
      keyContracts: ["VaultFactory", "StrategyFactories", "RegenStakerFactory"],
      color: "#e1f5ff",
      borderColor: "#0066cc"
    },
    {
      icon: TrendingUp,
      title: "Yield Generation Layer",
      description: "Strategies capture value from DeFi protocols through yield skimming or donating mechanisms",
      keyContracts: ["YieldSkimmingStrategy", "LidoStrategy", "MorphoStrategy"],
      color: "#90EE90",
      borderColor: "#228B22"
    },
    {
      icon: Users,
      title: "Staking & Rewards System",
      description: "Token holders stake assets, delegate voting power, and earn rewards based on earning power",
      keyContracts: ["RegenStaker", "DelegationSurrogates", "EarningPowerCalculator"],
      color: "#FFD700",
      borderColor: "#FF8C00"
    },
    {
      icon: Vote,
      title: "Governance & Allocation",
      description: "Quadratic voting mechanisms enable democratic resource allocation with anti-plutocracy protections",
      keyContracts: ["TokenizedAllocationMechanism", "QuadraticVotingMechanism", "ProperQF"],
      color: "#DDA0DD",
      borderColor: "#8B008B"
    },
    {
      icon: Shield,
      title: "Safe Integration (Dragon Protocol)",
      description: "Gnosis Safe modules coordinate automated multi-protocol operations with time-based spending limits",
      keyContracts: ["DragonRouter", "LinearAllowanceSingleton"],
      color: "#F0E68C",
      borderColor: "#DAA520"
    }
  ];

  return (
    <DocsLayoutNew>
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-7xl">
          {/* Scene 1: Welcome to Octant v2 Core */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Octant Wiki • Scene 1 of 5
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Welcome to Octant v2 Core
            </h1>
            <AskAIButton onClick={openChat} />
            <p className="text-2xl text-muted-foreground mb-8">
              A Regenerative Finance Protocol
            </p>
            <p className="text-xl text-foreground/90 mb-4 leading-relaxed">
              Combining staking, yield generation, and democratic allocation
            </p>

            <div className="space-y-4 text-lg text-foreground/80 leading-relaxed">
              <p>
                The octant-v2-core repository implements a sophisticated regenerative finance protocol built on battle-tested DeFi primitives. 
                This system enables token holders to stake assets with delegation, automatically capture yield from DeFi protocols, and 
                democratically allocate resources through quadratic voting mechanisms.
              </p>
              <p>
                Built on Yearn Finance V3 architecture and implementing ERC-4626 standards, Octant v2 provides institutional-grade 
                infrastructure for decentralized capital coordination.
              </p>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-8 mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2">CONTINUE READING</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Scene 2: System Architecture */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Octant Wiki • Scene 2 of 5
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Complete System Architecture
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Five Subsystems Working in Harmony
            </p>

            <div 
              className="mb-12 p-8 bg-card border-2 border-border rounded-lg cursor-pointer hover:border-primary/50 transition-colors relative group" 
              ref={diagramRef}
              onClick={() => setDiagramZoomed(true)}
              title="Click to view larger diagram"
            >
              {/* Mermaid diagram will be rendered here */}
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-primary/90 text-primary-foreground px-3 py-1 rounded text-sm font-medium">
                🔍 Click to zoom
              </div>
            </div>

            {/* Zoomed Diagram Modal */}
            {diagramZoomed && (
              <div 
                className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-8"
                onClick={() => setDiagramZoomed(false)}
              >
                <div 
                  className="relative w-full max-w-7xl max-h-[90vh] overflow-auto bg-card border-2 border-primary rounded-lg p-8"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setDiagramZoomed(false)}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subsystems.map((subsystem, index) => {
                const Icon = subsystem.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="p-6 bg-card border-2 rounded-lg hover:shadow-lg transition-all"
                    style={{ 
                      borderColor: subsystem.borderColor,
                      backgroundColor: `${subsystem.color}10`
                    }}
                  >
                    <div className="flex items-center mb-4">
                      <div 
                        className="p-3 rounded-lg mr-4"
                        style={{ backgroundColor: subsystem.color }}
                      >
                        <Icon className="w-6 h-6" style={{ color: subsystem.borderColor }} />
                      </div>
                      <h3 className="text-xl font-bold">{subsystem.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">
                      {subsystem.description}
                    </p>
                    <div className="space-y-1">
                      <p className="text-xs font-semibold text-foreground/70 mb-2">Key Contracts:</p>
                      {subsystem.keyContracts.map((contract, i) => (
                        <div key={i} className="text-xs font-mono text-foreground/60 bg-background/50 px-2 py-1 rounded">
                          {contract}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-8 mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2">CONTINUE READING</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Scene 3: Architecture Principles - Part 1 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Octant Wiki • Scene 3 of 5
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Architecture Principles - Part 1
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Factory Pattern & Standardization
            </p>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-blue-400">Factory Pattern</h3>
                <p className="mb-4">
                  Every major component in Octant v2 is deployed through a factory contract. This ensures:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Standardized deployment parameters</li>
                  <li>Consistent security guarantees across instances</li>
                  <li>No need to re-audit each deployment</li>
                  <li>Predictable contract addresses</li>
                </ul>
              </div>

              <div className="p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-green-400">ERC-4626 Compliance</h3>
                <p className="mb-4">
                  All vaults implement the ERC-4626 standard for tokenized vaults, enabling:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Composability with other DeFi protocols</li>
                  <li>Standardized deposit/withdraw interfaces</li>
                  <li>Share-based accounting</li>
                  <li>Predictable yield calculations</li>
                </ul>
              </div>

              <div className="p-6 bg-purple-500/10 border-2 border-purple-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-purple-400">Yearn V3 Architecture</h3>
                <p className="mb-4">
                  Built on Yearn Finance V3 patterns, providing:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Battle-tested strategy management</li>
                  <li>Flexible debt allocation</li>
                  <li>Automated profit reporting</li>
                  <li>Emergency shutdown mechanisms</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-8 mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2">CONTINUE READING</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Scene 4: Architecture Principles - Part 2 */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Octant Wiki • Scene 4 of 5
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Architecture Principles - Part 2
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Security & Governance Models
            </p>

            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <div className="p-6 bg-red-500/10 border-2 border-red-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-red-400">Separation of Concerns</h3>
                <p className="mb-4">
                  The staking system and yield generation system are completely independent:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>No shared state between staking and vaults</li>
                  <li>Isolated risk compartments</li>
                  <li>Independent upgrade paths</li>
                  <li>Cascade failure prevention</li>
                </ul>
              </div>

              <div className="p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-yellow-400">Quadratic Mechanisms</h3>
                <p className="mb-4">
                  Democratic allocation through quadratic voting and funding:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Anti-plutocracy protections (sqrt weighting)</li>
                  <li>ProperQF algorithm for optimal matching</li>
                  <li>Sybil resistance through staking requirements</li>
                  <li>Transparent on-chain execution</li>
                </ul>
              </div>

              <div className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-orange-400">Safe Integration</h3>
                <p className="mb-4">
                  Gnosis Safe modules enable trustless automation:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Time-based spending allowances</li>
                  <li>Multi-signature coordination</li>
                  <li>Automated strategy execution</li>
                  <li>Emergency pause mechanisms</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col items-center justify-center py-8 mb-12"
          >
            <span className="text-sm font-medium text-primary mb-2">CONTINUE READING</span>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronDown className="w-6 h-6 text-primary" />
            </motion.div>
          </motion.div>

          {/* Scene 5: Key Concepts & Terminology */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="inline-block px-3 py-1 mb-6 text-sm font-medium rounded-full bg-primary/10 text-primary border border-primary/20">
              <BookOpen className="inline-block w-4 h-4 mr-2" />
              Octant Wiki • Scene 5 of 5
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Key Concepts & Terminology
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Essential Terms for Understanding Octant v2
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Yield Skimming</h3>
                <p className="text-foreground/80">
                  Strategy captures yield for protocol treasury. The protocol owns the vault shares and receives all profits.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Yield Donating</h3>
                <p className="text-foreground/80">
                  Strategy donates yield to community allocation mechanisms. Users deposit assets, yield goes to public goods funding.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Earning Power</h3>
                <p className="text-foreground/80">
                  Calculated metric determining staking rewards. Based on stake amount, duration, and delegation participation.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Delegation Surrogate</h3>
                <p className="text-foreground/80">
                  Per-delegatee proxy contract holding staked tokens. Enables delegation without transferring token ownership.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Quadratic Voting</h3>
                <p className="text-foreground/80">
                  Voting mechanism where cost scales quadratically. Prevents whale dominance by making bulk votes expensive.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">ProperQF</h3>
                <p className="text-foreground/80">
                  Quadratic funding algorithm with alpha weighting. Optimizes matching pool distribution for maximum impact.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Dragon Protocol</h3>
                <p className="text-foreground/80">
                  Safe module system for automated multi-protocol operations. Enables trustless coordination with spending limits.
                </p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">Linear Allowance</h3>
                <p className="text-foreground/80">
                  Time-based spending limit that refills linearly. Prevents excessive withdrawals while allowing regular operations.
                </p>
              </div>
            </div>

            <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary rounded-lg">
              <h3 className="text-2xl font-bold mb-4">🎯 Key Takeaways</h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Five subsystems work together: Deployment, Yield, Staking, Governance, Safe Integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Built on Yearn V3 architecture with ERC-4626 standard for composability</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Supports both yield skimming (protocol captures) and yield donating (community funding)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Quadratic mechanisms prevent whale dominance in resource allocation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-3">•</span>
                  <span>Safe integration enables trustless automation with spending limits</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
              <h3 className="text-xl font-bold mb-3 text-blue-400">📚 Related Deep Dives</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a href="/docs/octant-wiki/staking-system/regenstaker-core" className="text-primary hover:underline">
                  → Staking System Details
                </a>
                <a href="/docs/octant-wiki/yield-strategies/yield-skimming" className="text-primary hover:underline">
                  → Yield Strategy Mechanics
                </a>
                <a href="/docs/octant-wiki/allocation-mechanisms/tokenized-allocation" className="text-primary hover:underline">
                  → Allocation Mechanisms
                </a>
                <a href="/docs/octant-wiki/dragon-protocol/dragon-router" className="text-primary hover:underline">
                  → Dragon Protocol
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
