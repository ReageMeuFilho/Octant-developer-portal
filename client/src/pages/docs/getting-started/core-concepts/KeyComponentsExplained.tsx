import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Vault,
  TrendingUp,
  Split,
  Layers,
  Shield,
  Coins,
  ArrowRight,
  Info
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function KeyComponentsExplained() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Key Components Explained
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deep dive into the smart contracts and architecture that power Octant v2.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">The Three Core Components</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Vault className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">1. Funding Vault</h3>
                  <p className="text-muted-foreground mb-4">
                    The Funding Vault is an <strong>ERC-4626 compliant</strong> smart contract that serves as the main entry point for users. It accepts deposits, mints shares, and manages capital allocation.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Key Functions:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <code>deposit(uint256 assets)</code> - Accept user deposits</li>
                      <li>• <code>withdraw(uint256 assets)</code> - Return principal to users</li>
                      <li>• <code>totalAssets()</code> - Report total vault value</li>
                      <li>• <code>convertToShares(uint256 assets)</code> - Calculate share value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">2. Yield Strategies</h3>
                  <p className="text-muted-foreground mb-4">
                    Strategies are smart contracts that deploy capital into DeFi protocols (Aave, Lido, Morpho, etc.) to generate yield. Each strategy implements three core functions.
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Required Implementation:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• <code>_deployFunds(uint256)</code> - Deploy capital to protocol</li>
                      <li>• <code>_freeFunds(uint256)</code> - Withdraw capital for user redemptions</li>
                      <li>• <code>_harvestAndReport()</code> - Calculate total asset value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Split className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">3. Allocation Mechanism</h3>
                  <p className="text-muted-foreground mb-4">
                    Routes generated yield to designated recipients. Can be a simple address, a split contract, or a complex allocation system (quadratic funding, community voting, etc.).
                  </p>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Common Patterns:</p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Direct donation to single address</li>
                      <li>• Split contract (multiple recipients with percentages)</li>
                      <li>• Quadratic funding rounds</li>
                      <li>• Community governance voting</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">How They Work Together</h2>
          <Card className="p-6 bg-muted border-border/50">
            <pre className="text-sm overflow-x-auto">
              <code>{`User deposits 10,000 USDC
    ↓
Funding Vault mints 10,000 shares (1:1 ratio)
    ↓
Vault allocates capital to strategies:
  • 60% (6,000 USDC) → Aave Strategy
  • 40% (4,000 USDC) → Lido Strategy
    ↓
Strategies deploy to protocols:
  • Aave Strategy calls aavePool.supply(6000)
  • Lido Strategy calls lido.stake(4000)
    ↓
Time passes, yield accrues...
    ↓
Harvest is triggered:
  • Aave earned 25 USDC
  • Lido earned 16.67 USDC
  • Total yield: 41.67 USDC
    ↓
Yield is split (60/40 config):
  • 25 USDC → Donated to allocation mechanism
  • 16.67 USDC → Compounds back into vault
    ↓
Vault value grows to 10,016.67 USDC
User can still withdraw original 10,000 USDC`}</code>
            </pre>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Additional Components</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Access Control</h3>
                  <p className="text-sm text-muted-foreground">Role-based permissions for keepers, managers, and governance</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Multi-Strategy Support</h3>
                  <p className="text-sm text-muted-foreground">Vaults can deploy to multiple strategies simultaneously</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <Coins className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Fee Management</h3>
                  <p className="text-sm text-muted-foreground">Configurable performance and management fees</p>
                </div>
              </div>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <div className="flex items-start gap-3">
                <Info className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold mb-1">Emergency Controls</h3>
                  <p className="text-sm text-muted-foreground">Pause functionality and emergency withdrawal mechanisms</p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Ready to build?</strong> Now that you understand the components, proceed to <Link href="/docs/getting-started/environment-setup/install-prerequisites" className="text-primary hover:underline">Install Prerequisites</Link> to set up your development environment.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/core-concepts/architecture-diagram">
            <Button variant="outline">← Architecture Diagram</Button>
          </Link>
          <Link href="/docs/getting-started/core-concepts/yield-types">
            <Button className="gap-2">
              Yield Types Guide
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
