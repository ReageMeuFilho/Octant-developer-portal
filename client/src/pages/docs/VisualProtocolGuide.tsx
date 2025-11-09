import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, Lightbulb } from "lucide-react";
import { Link } from "wouter";
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function VisualProtocolGuide() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-purple-500/10 text-purple-400 border-purple-500/20">
            Visual Learning
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Visual Protocol Guide
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed mt-4">
            Master Octant v2 through 10 interactive diagrams. Each visualization breaks down complex flows into simple, color-coded steps.
          </p>
        </div>

        {/* Quick Navigation */}
        <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3 mb-4">
            <Eye className="h-6 w-6 text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-xl font-bold mb-2">Visual Learning Path</h2>
              <p className="text-muted-foreground">
                Follow these diagrams in order for a complete understanding, or jump to specific topics.
              </p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-3 mt-4">
            <Link href="#deposit-withdrawal">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">1.</span> Deposit & Withdrawal Flow
              </Button>
            </Link>
            <Link href="#yield-generation">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">2.</span> Yield Generation Process
              </Button>
            </Link>
            <Link href="#multi-strategy">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">3.</span> Multi-Strategy Vault
              </Button>
            </Link>
            <Link href="#yield-donating">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">4.</span> Yield Donating (YDS)
              </Button>
            </Link>
            <Link href="#yield-skimming">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">5.</span> Yield Skimming (YSS)
              </Button>
            </Link>
            <Link href="#dragon-router">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">6.</span> Dragon Router (Governance)
              </Button>
            </Link>
            <Link href="#share-math">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">7.</span> Share Math & Accounting
              </Button>
            </Link>
            <Link href="#emergency-shutdown">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">8.</span> Emergency Shutdown
              </Button>
            </Link>
            <Link href="#loss-scenario">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">9.</span> Loss Scenario Handling
              </Button>
            </Link>
            <Link href="#proposal-lifecycle">
              <Button variant="outline" className="w-full justify-start text-left h-auto py-2">
                <span className="text-purple-400 font-bold mr-2">10.</span> Proposal Lifecycle
              </Button>
            </Link>
          </div>
        </div>

        {/* Diagram 1: Deposit & Withdrawal */}
        <div id="deposit-withdrawal" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30">
                1. Core Flow
              </Badge>
              <h2 className="text-3xl font-bold">Deposit & Withdrawal Flow</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Understanding how users deposit assets and receive vault shares, then withdraw assets by burning shares.
            </p>
            <Link href="/docs/diagrams/core-concepts/deposit-withdrawal">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 2: Yield Generation */}
        <div id="yield-generation" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                2. Core Flow
              </Badge>
              <h2 className="text-3xl font-bold">Yield Generation Process</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              How vaults deploy capital to strategies, strategies earn yield from DeFi protocols, and profits flow back.
            </p>
            <Link href="/docs/diagrams/core-concepts/yield-generation">
              <Button className="w-full sm:w-auto bg-green-600 hover:bg-green-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 3: Multi-Strategy Vault */}
        <div id="multi-strategy" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
                3. Advanced
              </Badge>
              <h2 className="text-3xl font-bold">Multi-Strategy Vault Architecture</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              How a single vault can allocate capital across multiple strategies with configurable debt ratios and limits.
            </p>
            <Link href="/docs/diagrams/core-concepts/multi-strategy-vault">
              <Button className="w-full sm:w-auto bg-purple-600 hover:bg-purple-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 4: Yield Donating */}
        <div id="yield-donating" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 border-cyan-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                4. Yield Strategy
              </Badge>
              <h2 className="text-3xl font-bold">Yield Donating Strategy (YDS)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              How profits are converted into new vault shares and donated to recipient addresses.
            </p>
            <Link href="/docs/diagrams/yield-mechanisms/yield-donating">
              <Button className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 5: Yield Skimming */}
        <div id="yield-skimming" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-orange-900/20 to-red-900/20 border-orange-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
                5. Yield Strategy
              </Badge>
              <h2 className="text-3xl font-bold">Yield Skimming Strategy (YSS)</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              How profits are extracted as liquid tokens and sent directly to recipients without minting shares.
            </p>
            <Link href="/docs/diagrams/yield-mechanisms/yield-skimming">
              <Button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 6: Dragon Router */}
        <div id="dragon-router" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-red-900/20 to-pink-900/20 border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                6. Governance
              </Badge>
              <h2 className="text-3xl font-bold">Dragon Router & Allocation</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              The governance layer that routes yield donations through allocation mechanisms and splits.
            </p>
            <Link href="/docs/diagrams/governance-allocation/dragon-router">
              <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 7: Share Math */}
        <div id="share-math" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-indigo-900/20 to-purple-900/20 border-indigo-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-indigo-500/20 text-indigo-400 border-indigo-500/30">
                7. Technical
              </Badge>
              <h2 className="text-3xl font-bold">Share Math & Accounting</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              The precise calculations for converting between assets and shares, maintaining the 1:1 ratio.
            </p>
            <Link href="/docs/diagrams/core-concepts/share-math">
              <Button className="w-full sm:w-auto bg-indigo-600 hover:bg-indigo-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 8: Emergency Shutdown */}
        <div id="emergency-shutdown" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-yellow-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-yellow-500/20 text-yellow-400 border-yellow-500/30">
                8. Safety
              </Badge>
              <h2 className="text-3xl font-bold">Emergency Shutdown Procedure</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              How the protocol handles critical situations with safe asset recovery and user protection.
            </p>
            <Link href="/docs/diagrams/core-concepts/emergency-shutdown">
              <Button className="w-full sm:w-auto bg-yellow-600 hover:bg-yellow-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 9: Loss Scenario */}
        <div id="loss-scenario" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-red-900/20 to-orange-900/20 border-red-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-red-500/20 text-red-400 border-red-500/30">
                9. Risk Management
              </Badge>
              <h2 className="text-3xl font-bold">Loss Scenario Handling</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              What happens when a strategy loses money: debt accounting, share dilution, and recovery mechanisms.
            </p>
            <Link href="/docs/diagrams/core-concepts/loss-scenario">
              <Button className="w-full sm:w-auto bg-red-600 hover:bg-red-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Diagram 10: Proposal Lifecycle */}
        <div id="proposal-lifecycle" className="scroll-mt-20">
          <Card className="p-8 bg-gradient-to-br from-pink-900/20 to-purple-900/20 border-pink-500/20">
            <div className="flex items-center gap-3 mb-4">
              <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">
                10. Governance
              </Badge>
              <h2 className="text-3xl font-bold">Proposal Lifecycle & Voting</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              From proposal submission through voting, approval, and execution of governance decisions.
            </p>
            <Link href="/docs/diagrams/governance-allocation/proposal-lifecycle">
              <Button className="w-full sm:w-auto bg-pink-600 hover:bg-pink-700">
                View Interactive Diagram
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* Learning Tips */}
        <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border border-blue-500/20 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <Lightbulb className="h-6 w-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-xl font-bold mb-3">How to Use These Diagrams</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>Start sequential:</strong> Follow diagrams 1-5 to understand core concepts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>Interactive:</strong> Each diagram is fully navigable with clickable nodes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>Color-coded:</strong> Blues = deposits, Greens = yield, Reds = governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>Refer back:</strong> Bookmark this page as your visual reference guide</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-400 font-bold">•</span>
                  <span><strong>Ask AI:</strong> Use the Ask AI button if you need clarification on any diagram</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Ready to Build?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/quickstart">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group h-full">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Build Your First Vault
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Now that you understand the flows, deploy your own vault in 10 minutes
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Start quickstart
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/tutorials/aave-integration">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group h-full">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Build a Strategy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Create a yield strategy that integrates with Aave or Lido
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}

