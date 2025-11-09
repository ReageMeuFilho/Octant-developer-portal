import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  AlertTriangle,
  CheckCircle,
  XCircle,
  Info,
  Terminal,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function CommonErrors() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Troubleshooting
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Common Errors & Solutions
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quick reference for resolving the most frequent issues when building with Octant v2.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Contract Deployment Errors</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "Insufficient funds for gas"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">Error: sender doesn\'t have enough funds to send tx</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> Your wallet doesn\'t have enough ETH to pay for transaction gas fees.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Get testnet ETH from a faucet (Sepolia, Goerli)</li>
                      <li>• Check your wallet balance: <code>cast balance YOUR_ADDRESS</code></li>
                      <li>• Ensure you\'re on the correct network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "Contract creation code storage out of gas"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">EvmError: OutOfGas</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> Contract bytecode is too large (&gt;24KB) or gas limit is too low.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Enable optimizer in foundry.toml: <code>optimizer = true</code></li>
                      <li>• Increase optimizer runs: <code>optimizer_runs = 200</code></li>
                      <li>• Split large contracts into smaller modules</li>
                      <li>• Use libraries for reusable code</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Strategy Integration Errors</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "ERC4626: deposit more than max"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">ERC4626ExceededMaxDeposit(address receiver, uint256 assets, uint256 max)</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> Trying to deposit more than the vault\'s maximum deposit limit.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Check vault\'s max deposit: <code>vault.maxDeposit(address)</code></li>
                      <li>• Reduce deposit amount to stay within limits</li>
                      <li>• Check if vault is paused or has deposit caps</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "Strategy harvest failed"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">Strategy: harvest failed with revert</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> Strategy\'s harvest function reverted, often due to oracle issues or protocol changes.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Check if underlying protocol is operational</li>
                      <li>• Verify oracle price feeds are up-to-date</li>
                      <li>• Test harvest in isolation: <code>forge test --match-test testHarvest -vvv</code></li>
                      <li>• Check for slippage protection settings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Frontend Integration Errors</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "User rejected transaction"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">MetaMask: User denied transaction signature</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> User clicked "Reject" in wallet popup.
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Handle rejection gracefully in UI</li>
                      <li>• Show clear error message to user</li>
                      <li>• Provide "Try Again" button</li>
                      <li>• Don\'t treat as critical error</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <XCircle className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Error: "Wrong network"</h3>
                  <div className="bg-muted p-3 rounded mb-3">
                    <code className="text-sm">ChainMismatchError: Chain mismatch</code>
                  </div>
                  <p className="text-muted-foreground mb-3">
                    <strong>Cause:</strong> User\'s wallet is connected to wrong network (e.g., mainnet instead of testnet).
                  </p>
                  <div className="bg-primary/5 border border-primary/20 rounded p-4">
                    <p className="text-sm font-semibold mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4 text-primary" />
                      Solution:
                    </p>
                    <ul className="text-sm space-y-1 text-muted-foreground">
                      <li>• Detect network mismatch before transactions</li>
                      <li>• Prompt user to switch networks</li>
                      <li>• Use wagmi\'s <code>useSwitchChain</code> hook</li>
                      <li>• Show clear network indicator in UI</li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Still stuck?</strong> Check the <Link href="/docs/getting-started/troubleshooting/debugging-guide" className="text-primary hover:underline">Debugging Guide</Link> for advanced troubleshooting techniques, or visit the <Link href="/docs/getting-started/troubleshooting/faqs" className="text-primary hover:underline">FAQs</Link> for more common issues.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/advanced-topics/multi-strategy-rebalancing">
            <Button variant="outline">← Multi-Strategy Rebalancing</Button>
          </Link>
          <Link href="/docs/getting-started/troubleshooting/debugging-guide">
            <Button className="gap-2">
              Debugging Guide
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
