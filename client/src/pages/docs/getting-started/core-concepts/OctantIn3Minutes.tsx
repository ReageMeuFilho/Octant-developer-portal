import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Vault,
  TrendingUp,
  Users,
  Coins,
  ArrowRight,
  Clock,
  CheckCircle,
  Info
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function OctantIn3Minutes() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Octant in 3 Minutes
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            A quick introduction to how Octant v2 transforms idle treasury assets into sustainable funding streams.
          </p>
        </div>

        {/* Time indicator */}
        <Alert className="bg-primary/5 border-primary/20">
          <Clock className="h-4 w-4" />
          <AlertDescription>
            <strong>Reading time:</strong> 3 minutes | <strong>Difficulty:</strong> Beginner
          </AlertDescription>
        </Alert>

        {/* The Problem */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Problem</h2>
          <Card className="p-6 bg-card border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              DAOs, foundations, and communities hold billions in treasury assets. These funds sit idle, earning nothing, while projects desperately need sustainable funding.
            </p>
            <p className="text-muted-foreground">
              <strong>Example:</strong> A DAO has $10M USDC in its treasury. Instead of earning 5% APY ($500k/year), it sits idle earning $0.
            </p>
          </Card>
        </div>

        {/* The Solution */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Octant Solution</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Octant v2 lets you deploy treasury assets into battle-tested DeFi protocols to earn yield, then route that yield to projects and communities—all while preserving your principal.
            </p>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works (4 Steps)</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Vault className="h-5 w-5 text-primary" />
                    Deposit Assets
                  </h3>
                  <p className="text-muted-foreground">
                    Users deposit stablecoins (USDC, DAI) or ETH into a <strong>Funding Vault</strong>. They receive shares representing their deposit (like a receipt).
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    Deploy to Strategies
                  </h3>
                  <p className="text-muted-foreground">
                    The vault deploys capital into <strong>Yield Strategies</strong> (Aave lending, Lido staking, etc.). These are smart contracts that earn returns from proven DeFi protocols.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Coins className="h-5 w-5 text-primary" />
                    Generate Yield
                  </h3>
                  <p className="text-muted-foreground">
                    Strategies earn yield over time. For example, Aave might earn 5% APY on USDC deposits. This yield is harvested periodically.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    Route to Projects
                  </h3>
                  <p className="text-muted-foreground">
                    Yield is split: some goes to projects you choose (donations), some compounds back into the vault (grows your principal). You decide the split ratio.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Real Example */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Real-World Example</h2>
          <Card className="p-6 bg-muted border-border/50">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Initial State:</p>
                <p className="text-lg font-mono">DAO Treasury: $10,000,000 USDC (idle)</p>
              </div>
              
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">After Deploying to Octant:</p>
                <ul className="space-y-2 text-foreground/90">
                  <li>• Deposit $10M into Funding Vault</li>
                  <li>• Vault deploys 60% to Aave ($6M), 40% to Lido ($4M)</li>
                  <li>• Combined APY: ~5.5%</li>
                  <li>• Annual yield: $550,000</li>
                </ul>
              </div>

              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">Yield Distribution (60/40 split):</p>
                <ul className="space-y-2 text-foreground/90">
                  <li>• <strong>$330,000/year</strong> → Donated to open-source projects</li>
                  <li>• <strong>$220,000/year</strong> → Compounds back (treasury grows to $10.22M)</li>
                  <li>• <strong>Principal preserved:</strong> DAO can withdraw original $10M anytime</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        {/* Key Benefits */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Principal Preserved</h3>
                  <p className="text-sm text-muted-foreground">Your original deposit is never at risk from yield distribution</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Sustainable Funding</h3>
                  <p className="text-sm text-muted-foreground">Projects receive continuous funding, not one-time grants</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Battle-Tested DeFi</h3>
                  <p className="text-sm text-muted-foreground">Strategies use proven protocols (Aave, Lido) with billions in TVL</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Flexible Allocation</h3>
                  <p className="text-sm text-muted-foreground">Choose how yield is split between donations and compounding</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Ready to dive deeper?</strong> Continue to <Link href="/docs/getting-started/core-concepts/key-components" className="text-primary hover:underline">Key Components Explained</Link> to understand the architecture, or jump to <Link href="/docs/getting-started/build-first-strategy/tutorial-simple-lending" className="text-primary hover:underline">Build Your First Strategy</Link> to start coding.
          </AlertDescription>
        </Alert>

        {/* Navigation */}
        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/quick-start/choose-your-path">
            <Button variant="outline">← Choose Your Path</Button>
          </Link>
          <Link href="/docs/getting-started/core-concepts/architecture-diagram">
            <Button className="gap-2">
              Architecture Diagram
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
