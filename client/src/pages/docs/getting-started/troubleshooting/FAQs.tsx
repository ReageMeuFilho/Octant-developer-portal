import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle,
  CheckCircle,
  Info,
  ExternalLink,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function FAQs() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Troubleshooting
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Answers to the most common questions about Octant v2.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">General Questions</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">What is Octant v2?</h3>
                  <p className="text-muted-foreground">
                    Octant v2 is open public infrastructure for sustainable growth. It transforms treasury assets into continuous funding streams for projects and communities while preserving principal through battle-tested DeFi strategies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Is my principal at risk?</h3>
                  <p className="text-muted-foreground mb-3">
                    No. Octant v2 uses ERC-4626 vaults that maintain a 1:1 share-to-asset ratio. Your principal is preserved and can be withdrawn at any time. Only the <strong>yield</strong> generated from your principal is donated to projects.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-3">
                    <p className="text-sm text-muted-foreground">
                      <strong>Example:</strong> Deposit $10,000 → Earn $500 yield → Donate $300, compound $200 → You can still withdraw your original $10,000
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">What DeFi protocols does Octant support?</h3>
                  <p className="text-muted-foreground">
                    Octant v2 supports any yield-generating protocol through its strategy system. Common integrations include:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Aave:</strong> Lending markets for stablecoins and ETH</li>
                    <li>• <strong>Lido:</strong> Liquid staking for ETH</li>
                    <li>• <strong>Morpho:</strong> Optimized lending rates</li>
                    <li>• <strong>Yearn:</strong> Automated yield farming</li>
                    <li>• <strong>Custom strategies:</strong> Build your own!</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Technical Questions</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">How do I create a custom yield strategy?</h3>
                  <p className="text-muted-foreground mb-3">
                    Extend the base <code>Strategy</code> contract and implement three core functions:
                  </p>
                  <div className="bg-muted p-3 rounded">
                    <pre className="text-sm"><code>{`function _deployFunds(uint256 amount) internal override {
  // Deploy capital to your protocol
}

function _freeFunds(uint256 amount) internal override {
  // Withdraw capital for user redemptions
}

function _harvestAndReport() internal override returns (uint256) {
  // Calculate total assets under management
}`}</code></pre>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">
                    See <Link href="/docs/getting-started/build-first-strategy/tutorial-simple-lending" className="text-primary hover:underline">Tutorial: Simple Lending Strategy</Link> for a complete example.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Can I use multiple strategies in one vault?</h3>
                  <p className="text-muted-foreground">
                    Yes! Octant v2 supports multi-strategy vaults. You can allocate capital across multiple strategies (e.g., 60% to Aave, 40% to Lido) to diversify risk and optimize returns. See <Link href="/docs/getting-started/deploy-production/deploy-multi-strategy-vault" className="text-primary hover:underline">Deploy a Multi-Strategy Vault</Link>.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">How often is yield harvested?</h3>
                  <p className="text-muted-foreground">
                    Harvest frequency depends on your configuration. Common patterns:
                  </p>
                  <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                    <li>• <strong>Time-based:</strong> Every 24 hours, weekly, monthly</li>
                    <li>• <strong>Threshold-based:</strong> When yield exceeds $X amount</li>
                    <li>• <strong>Manual:</strong> Triggered by keeper or governance</li>
                    <li>• <strong>Event-driven:</strong> On deposit/withdrawal</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Integration Questions</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">How do I integrate Octant into my DAO?</h3>
                  <p className="text-muted-foreground">
                    Follow these steps:
                  </p>
                  <ol className="mt-2 space-y-1 text-sm text-muted-foreground list-decimal list-inside">
                    <li>Deploy a Funding Vault for your treasury asset (USDC, ETH, etc.)</li>
                    <li>Choose or create yield strategies</li>
                    <li>Configure donation address (can be a split contract)</li>
                    <li>Set yield split ratio (e.g., 60% donate, 40% compound)</li>
                    <li>Deposit treasury assets and start earning</li>
                  </ol>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <HelpCircle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-lg font-bold mb-2">Can I build a frontend for my vault?</h3>
                  <p className="text-muted-foreground mb-3">
                    Absolutely! Octant v2 provides standard ERC-4626 interfaces that work with any web3 frontend library (wagmi, ethers, viem).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    See <Link href="/docs/getting-started/frontend-integration/build-deposit-withdraw-ui" className="text-primary hover:underline">Build Deposit/Withdraw UI</Link> for a complete React + wagmi example.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Question not answered?</strong> Join our <a href="https://discord.gg/octant" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Discord community</a> or check the <Link href="/docs/getting-started/troubleshooting/get-help" className="text-primary hover:underline">Get Help from Community</Link> page.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/troubleshooting/debugging-guide">
            <Button variant="outline">← Debugging Guide</Button>
          </Link>
          <Link href="/docs/getting-started/troubleshooting/get-help">
            <Button className="gap-2">
              Get Help from Community
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
