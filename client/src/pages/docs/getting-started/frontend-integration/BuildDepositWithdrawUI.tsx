import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Code,
  Layers,
  CheckCircle,
  Info,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function BuildDepositWithdrawUI() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Frontend Integration
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Build Deposit/Withdraw UI
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create a React frontend with wagmi for users to interact with your Funding Vault.
          </p>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Code className="h-4 w-4" />
          <AlertDescription>
            <strong>Stack:</strong> React + TypeScript + wagmi + viem | <strong>Time:</strong> 45 minutes
          </AlertDescription>
        </Alert>

        <div>
          <h2 className="text-3xl font-bold mb-6">What You\'ll Build</h2>
          <Card className="p-6 bg-card border-border/50">
            <p className="text-foreground/90 mb-4">
              A complete vault interface with:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Wallet connection (MetaMask, WalletConnect)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Real-time vault stats (TVL, APY, balance)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Deposit flow with approval</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Withdraw flow with calculations</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Transaction status handling</span>
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Setup Project</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm"><code>npm create vite@latest octant-vault-ui -- --template react-ts
cd octant-vault-ui
npm install wagmi viem @tanstack/react-query
npm install @rainbow-me/rainbowkit</code></pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Deposit Component Example</h2>
          <Card className="p-6 bg-card border-border/50">
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm"><code>{`import { useWriteContract } from 'wagmi'
import { parseUnits } from 'viem'

export function DepositForm() {
  const { writeContract } = useWriteContract()

  const handleDeposit = async (amount: string) => {
    await writeContract({
      address: VAULT_ADDRESS,
      abi: VAULT_ABI,
      functionName: 'deposit',
      args: [parseUnits(amount, 6), userAddress],
    })
  }

  return (
    <div>
      <input type="number" placeholder="Amount" />
      <button onClick={() => handleDeposit(amount)}>
        Deposit
      </button>
    </div>
  )
}`}</code></pre>
            </div>
          </Card>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Next:</strong> Add <Link href="/docs/getting-started/frontend-integration/real-time-updates" className="text-primary hover:underline">Real-Time Updates</Link> or review <Link href="/docs/getting-started/frontend-integration/production-best-practices" className="text-primary hover:underline">Production Best Practices</Link>.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/frontend-integration/connect-boilerplate">
            <Button variant="outline">← Connect Boilerplate</Button>
          </Link>
          <Link href="/docs/getting-started/frontend-integration/real-time-updates">
            <Button className="gap-2">
              Real-Time Updates
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
