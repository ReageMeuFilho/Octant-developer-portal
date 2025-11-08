import { useState, useEffect, useRef } from "react";
import mermaid from "mermaid";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card } from "@/components/ui/card";
import { ChevronDown } from "lucide-react";
import DocsLayoutNew from "@/components/DocsLayoutNew";

export default function StakingIntroduction() {
  const [currentScene, setCurrentScene] = useState(1);
  const totalScenes = 3;
  const diagramRef = useRef<HTMLDivElement>(null);
  const zoomedDiagramRef = useRef<HTMLDivElement>(null);
  const [isZoomed, setIsZoomed] = useState(false);

  // Mermaid diagram for Scene 1
  const systemArchitectureDiagram = `graph TB
    subgraph "User Layer"
        USER[User/Depositor]
        CLAIMER[Claimer<br/>Trusted Agent]
    end
    
    subgraph "Staking Variants"
        RS[RegenStaker<br/>WITH_DELEGATION]
        RSWOD[RegenStakerWithoutDelegate...<br/>WITHOUT_DELEGATION]
    end
    
    subgraph "Shared Base"
        RSB[RegenStakerBase<br/>Abstract Base]
        STAKER[Staker<br/>ScopeLift Library]
    end
    
    subgraph "Supporting Components"
        EPC[RegenEarningPowerCalculator]
        WL1[Staker Whitelist]
        WL2[Contribution Whitelist]
        WL3[Allocation Mechanism<br/>Whitelist]
    end
    
    subgraph "Integration Points"
        DSV[DelegationSurrogateVotes<br/>deploys via CREATE2]
        TAM[TokenizedAllocationMechanism<br/>contributes rewards]
    end
    
    USER -->|stake| RS
    USER -->|stake| RSWOD
    CLAIMER -->|claimReward<br/>compoundRewards<br/>contribute| RS
    CLAIMER -->|claimReward<br/>compoundRewards<br/>contribute| RSWOD
    
    RS --> RSB
    RSWOD --> RSB
    RSB --> STAKER
    
    RS -->|deploys via CREATE2| DSV
    RSWOD -.->|uses address(this)| RSWOD
    
    RS -->|queries earning power| EPC
    RSWOD -->|queries earning power| EPC
    
    RSB -->|checks access| WL1
    RSB -->|checks access| WL2
    RSB -->|checks whitelisted<br/>SECURITY CRITICAL| WL3
    
    RSB -->|contributes rewards| TAM
    
    `;

  // Mermaid diagram for Scene 3
  const decisionTreeDiagram = `graph TD
    START[Deploying RegenStaker<br/>Which variant?]
    
    START --> Q1{Does token implement<br/>IERC20Delegates?}
    
    Q1 -->|Yes| Q2{Do you need<br/>voting/governance<br/>capability?}
    Q1 -->|No<br/>Standard ERC20| WITHOUT
    
    Q2 -->|Yes| Q3{High transaction<br/>volume expected?}
    Q2 -->|No| WITHOUT
    
    Q3 -->|Yes<br/>Optimize gas| WITH[Use RegenStaker<br/>WITH_DELEGATION]
    Q3 -->|No<br/>Low volume| EITHER[Either variant works<br/>Choose based on simplicity]
    
    WITH --> RESULT1[✓ Deploy surrogates<br/>✓ Higher initial gas<br/>✓ Voting enabled<br/>✓ Gas amortized across users]
    
    WITHOUT[Use RegenStakerWithout...<br/>WITHOUT_DELEGATION]
    WITHOUT --> RESULT2[✓ Direct custody<br/>✓ Lower gas costs<br/>✓ No voting capability<br/>✓ Simpler architecture]
    
    EITHER --> RESULT3[Consider tradeoffs:<br/>• Complexity vs simplicity<br/>• Gas vs features<br/>• Future governance needs]
    
    `;

  useEffect(() => {
    mermaid.initialize({
      startOnLoad: true,
      theme: "base",
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
        fontSize: '14px',
        fontFamily: "ui-sans-serif, system-ui, sans-serif"
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
        nodeSpacing: 100,
        rankSpacing: 100,
        curve: "basis",
      },
    });

    const renderDiagram = async () => {
      if (diagramRef.current) {
        diagramRef.current.innerHTML = "";
        const diagram = currentScene === 1 ? systemArchitectureDiagram : currentScene === 3 ? decisionTreeDiagram : "";
        if (diagram) {
          const { svg } = await mermaid.render(`mermaid-scene-${currentScene}`, diagram);
          diagramRef.current.innerHTML = svg;
        }
      }
    };

    renderDiagram();
  }, [currentScene]);

  useEffect(() => {
    if (isZoomed && zoomedDiagramRef.current) {
      mermaid.initialize({
        startOnLoad: true,
        theme: "base",
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
          fontSize: '22px',
          fontFamily: "ui-sans-serif, system-ui, sans-serif"
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
          nodeSpacing: 100,
          rankSpacing: 100,
          curve: "basis",
        },
      });

      const renderZoomedDiagram = async () => {
        if (zoomedDiagramRef.current) {
          zoomedDiagramRef.current.innerHTML = "";
          const diagram = currentScene === 1 ? systemArchitectureDiagram : currentScene === 3 ? decisionTreeDiagram : "";
          if (diagram) {
            const { svg } = await mermaid.render(`mermaid-zoomed-scene-${currentScene}`, diagram);
            zoomedDiagramRef.current.innerHTML = svg;
          }
        }
      };

      renderZoomedDiagram();
    }
  }, [isZoomed, currentScene]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const sceneHeight = windowHeight;

      const newScene = Math.min(
        totalScenes,
        Math.floor(scrollPosition / sceneHeight) + 1
      );
      setCurrentScene(newScene);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">

      {/* Scene 1: RegenStaker Overview */}
      <section className="space-y-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              RegenStaker: Token Staking with Earning Power
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Core Component for Protocol Participation
            </h2>
            <p className="text-xl text-muted-foreground">
              Token staking, reward distribution, and earning power management
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg leading-relaxed">
              The RegenStaker staking system is the primary entry point for users to participate in the Octant Protocol's regenerative finance mechanisms. It handles token staking, reward distribution, delegation, and earning power calculations.
            </p>
            <p className="text-lg leading-relaxed">
              The system serves multiple purposes: it enables users to earn rewards from the protocol treasury, delegate voting power to trusted experts, and contribute rewards to allocation mechanisms for democratic funding decisions.
            </p>
          </div>

          {/* Capabilities Grid */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">What RegenStaker Provides</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  feature: "Token Staking",
                  description: "Accept ERC20 token deposits with configurable minimum stake amounts and whitelist controls",
                  code: "src/regen/RegenStakerBase.sol"
                },
                {
                  feature: "Reward Distribution",
                  description: "Continuous drip-rate distribution with checkpoint-based accounting for precise reward allocation",
                  code: "src/regen/RegenStakerBase.sol:364-387"
                },
                {
                  feature: "Earning Power Management",
                  description: "Flexible earning power calculation via external calculator contracts with bump incentive mechanism",
                  code: "src/regen/RegenEarningPowerCalculator.sol"
                },
                {
                  feature: "Delegation Support",
                  description: "Optional voting power delegation through deterministic surrogate contracts (CREATE2)",
                  code: "src/regen/RegenStaker.sol:127-138"
                },
                {
                  feature: "Access Control",
                  description: "Multi-tier whitelist system for stakers, contributors, and allocation mechanisms",
                  code: "src/regen/RegenStakerBase.sol:80-88"
                },
                {
                  feature: "Same-Token Protection",
                  description: "Validates reward notifications when REWARD_TOKEN == STAKE_TOKEN to prevent accounting corruption",
                  code: "src/regen/RegenStakerWithoutDelegateSurrogateVotes.sol:95-113"
                }
              ].map((capability, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                  <h4 className="text-lg font-bold mb-2 text-primary">{capability.feature}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{capability.description}</p>
                  <code className="text-xs bg-muted px-2 py-1 rounded">{capability.code}</code>
                </Card>
              ))}
            </div>
          </div>

          {/* System Architecture Diagram */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">RegenStaker System Architecture</h3>
            <p className="text-muted-foreground">High-level view showing both variants and their integration points</p>
            <div 
              ref={diagramRef} 
              className="bg-card border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow relative group"
              onClick={() => setIsZoomed(true)}
            >
              <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Click to zoom
              </div>
            </div>
          </div>

          {/* Key Takeaways */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              {[
                "Two variants: RegenStaker (with delegation) and RegenStakerWithoutDelegateSurrogateVotes (without)",
                "Shared base implementation (RegenStakerBase) provides common functionality",
                "Multi-tier whitelist system controls access to different operations",
                "Earning power determines reward allocation and voting weight",
                "Same-token protection prevents accounting corruption when REWARD == STAKE",
                "Integration with allocation mechanisms enables democratic resource distribution"
              ].map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm">CONTINUE READING</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Scene 2: Variant Comparison */}
      <section className="min-h-screen flex flex-col justify-center py-20 bg-muted/30">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Variant Comparison: WITH vs WITHOUT Delegation
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Choosing the Right Staking Variant
            </h2>
            <p className="text-xl text-muted-foreground">
              Two architectures optimized for different token types and use cases
            </p>
          </div>

          <p className="text-lg leading-relaxed">
            The staking system provides two variants optimized for different token types. The primary distinction lies in delegation support and token custody architecture. Understanding which variant to use depends on your token's capabilities and your protocol's governance requirements.
          </p>

          {/* Feature Matrix Table */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Feature Matrix</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-left font-bold">Feature</th>
                    <th className="border border-border p-3 text-left font-bold">RegenStaker</th>
                    <th className="border border-border p-3 text-left font-bold">RegenStakerWithoutDelegateSurrogateVotes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    ["Delegation Support", "✓ Full IERC20Staking delegation", "✗ Not supported"],
                    ["Token Custody", "Surrogate contracts per delegatee", "Main contract directly"],
                    ["Surrogate Deployment", "✓ Per-delegatee via CREATE2", "✗ Uses address(this)"],
                    ["Voting Capability", "✓ Via delegated surrogates", "✗ Not available"],
                    ["Gas Cost (First Delegatee)", "~250k-350k (deployment)", "Lower (no deployment)"],
                    ["Gas Cost (Subsequent)", "Lower (reuse surrogate)", "Consistent"],
                    ["Same-Token Protection", "Base Staker check sufficient", "Enhanced validation required"],
                    ["Integration Complexity", "Higher (surrogate management)", "Lower (direct custody)"],
                    ["Use Case", "Governance tokens (e.g., GLM)", "Simple staking tokens"]
                  ].map((row, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? "bg-muted/30" : ""}>
                      <td className="border border-border p-3 font-medium">{row[0]}</td>
                      <td className="border border-border p-3">{row[1]}</td>
                      <td className="border border-border p-3">{row[2]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>Code References:</p>
              <code className="block bg-muted px-2 py-1 rounded">src/regen/RegenStaker.sol:22-37</code>
              <code className="block bg-muted px-2 py-1 rounded">src/regen/RegenStakerWithoutDelegateSurrogateVotes.sol:20-41</code>
            </div>
          </div>

          {/* Key Differences */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Key Differences</h3>
            <div className="space-y-4">
              {[
                {
                  aspect: "Token Custody Location",
                  with: "Tokens held in per-delegatee DelegationSurrogateVotes contracts deployed via CREATE2",
                  without: "Tokens held directly in main RegenStaker contract at address(this)",
                  implication: "WITH_DELEGATION enables true voting power delegation; WITHOUT reduces gas costs"
                },
                {
                  aspect: "First Stake Gas Cost",
                  with: "250k-350k gas (includes surrogate deployment if first to delegate to this delegatee)",
                  without: "~150k gas (no surrogate deployment)",
                  implication: "WITHOUT variant more economical for high-frequency, non-governance use cases"
                },
                {
                  aspect: "Same-Token Validation",
                  with: "Inherits Staker.sol validation checking REWARD_TOKEN.balanceOf(address(this))",
                  without: "Enhanced validation: required = totalStaked + totalRewards - totalClaimedRewards + amount",
                  implication: "WITHOUT variant requires stricter checks since stakes are in main contract",
                  code: "src/regen/RegenStakerWithoutDelegateSurrogateVotes.sol:95-113"
                }
              ].map((diff, idx) => (
                <Card key={idx} className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-primary">{diff.aspect}</h4>
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold">WITH_DELEGATION:</span> {diff.with}
                    </div>
                    <div>
                      <span className="font-semibold">WITHOUT_DELEGATION:</span> {diff.without}
                    </div>
                    <div className="pt-2 border-t border-border">
                      <span className="font-semibold text-muted-foreground">Implication:</span> {diff.implication}
                    </div>
                    {diff.code && (
                      <code className="block bg-muted px-2 py-1 rounded mt-2">{diff.code}</code>
                    )}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Warning Callout */}
          <Card className="p-6 bg-yellow-500/10 border-yellow-500/30">
            <h4 className="text-lg font-bold mb-2 flex items-center gap-2">
              <span>⚠️</span>
              <span>Security Note</span>
            </h4>
            <p>Both variants require allocation mechanism whitelist validation. This is SECURITY CRITICAL and cannot be disabled.</p>
          </Card>

          {/* Scroll Indicator */}
          <div className="flex flex-col items-center gap-2 text-muted-foreground animate-bounce">
            <span className="text-sm">CONTINUE READING</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Scene 3: Decision Tree */}
      <section className="space-y-8">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent">
              Variant Selection Decision Tree
            </h1>
            <h2 className="text-3xl font-semibold text-foreground">
              Which Variant Should You Deploy?
            </h2>
            <p className="text-xl text-muted-foreground">
              Decision framework for selecting the appropriate staking architecture
            </p>
          </div>

          {/* Decision Tree Diagram */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Variant Selection Decision Tree</h3>
            <div 
              ref={currentScene === 3 ? diagramRef : undefined}
              className="bg-card border rounded-lg p-6 cursor-pointer hover:shadow-lg transition-shadow relative group"
              onClick={() => setIsZoomed(true)}
            >
              <div className="absolute top-4 right-4 text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                🔍 Click to zoom
              </div>
            </div>
          </div>

          {/* Use Case Examples */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Use Case Examples</h3>
            <div className="space-y-4">
              {[
                {
                  scenario: "Governance Token (GLM)",
                  tokenType: "IERC20Delegates",
                  needsVoting: true,
                  expectedVolume: "High (community participation)",
                  recommendation: "RegenStaker (WITH_DELEGATION)",
                  rationale: "Enables voting power delegation while amortizing surrogate deployment costs across many users"
                },
                {
                  scenario: "Simple Staking Reward Token",
                  tokenType: "Standard ERC20",
                  needsVoting: false,
                  expectedVolume: "Medium",
                  recommendation: "RegenStakerWithoutDelegateSurrogateVotes",
                  rationale: "Lower gas costs, simpler architecture, no governance requirements"
                },
                {
                  scenario: "DAO Treasury Staking",
                  tokenType: "IERC20Delegates",
                  needsVoting: true,
                  expectedVolume: "Low (single large stake)",
                  recommendation: "Either variant",
                  rationale: "Low volume means gas savings minimal; choose based on operational simplicity vs governance needs"
                }
              ].map((example, idx) => (
                <Card key={idx} className="p-6">
                  <h4 className="text-lg font-bold mb-3 text-primary">{example.scenario}</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="font-semibold">Token Type:</span> {example.tokenType}
                    </div>
                    <div>
                      <span className="font-semibold">Needs Voting:</span> {example.needsVoting ? "Yes" : "No"}
                    </div>
                    <div>
                      <span className="font-semibold">Expected Volume:</span> {example.expectedVolume}
                    </div>
                    <div>
                      <span className="font-semibold text-green-600">Recommendation:</span> {example.recommendation}
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-border">
                    <span className="font-semibold">Rationale:</span> {example.rationale}
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Key Takeaways */}
          <Card className="p-6 bg-primary/5 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Takeaways</h3>
            <ul className="space-y-2">
              {[
                "WITH_DELEGATION: Use for governance tokens requiring voting capability",
                "WITHOUT_DELEGATION: Use for simple reward staking with lower gas costs",
                "Decision factors: Token interface, governance needs, transaction volume",
                "Both variants share RegenStakerBase core functionality"
              ].map((takeaway, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{takeaway}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Zoom Modal */}
      <Dialog open={isZoomed} onOpenChange={setIsZoomed}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-auto">
          <DialogHeader>
            <DialogTitle>
              {currentScene === 1 ? "RegenStaker System Architecture" : "Variant Selection Decision Tree"}
            </DialogTitle>
          </DialogHeader>
          <div 
            ref={zoomedDiagramRef} 
            className="w-full"
            onClick={(e) => e.stopPropagation()}
          />
        </DialogContent>
      </Dialog>
    </div>
    </DocsLayoutNew>
  );
}
