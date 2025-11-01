import DocsLayout from "@/components/DocsLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { ArrowRight, Wallet, TrendingUp, Split, Users, CheckCircle, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function HowItWorks() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            How It Works
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Understanding the Octant v2 pipeline: from deposit to sustainable yield distribution
          </p>
        </div>

        {/* The Pipeline Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Funding Pipeline</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Octant v2 works as a pipeline where each node represents a smart contract that either generates a funding stream or transforms and divides it among multiple recipients. Here's how capital flows through the system:
          </p>

          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">1</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Wallet className="h-6 w-6 text-primary" />
                    Deposit Assets
                  </h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Users deploy assets into **Octant Funding Vaults**. These vaults are ERC-4626-compliant and support:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>**Base tokens** (non-yield-bearing): USDC, DAI, USDT</li>
                    <li>**Yield-bearing tokens** (rebasing): stETH, aUSDC</li>
                    <li>**Yield-bearing tokens** (non-rebasing): wstETH, rETH</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    When you deposit, you receive **yield-donating tokens** that represent your principal. Your principal remains fully intact and withdrawable at any time (subject to vault type).
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6 border-l-4 border-l-accent bg-gradient-to-r from-accent/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">2</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <TrendingUp className="h-6 w-6 text-accent" />
                    Select Strategy
                  </h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    The vault deploys your assets into a **yield-generating strategy**. Strategies can include:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>**Lending protocols**: Aave, Compound, Morpho</li>
                    <li>**Liquid staking**: Lido (stETH), Rocket Pool (rETH)</li>
                    <li>**Yield aggregators**: Sky Compounder, Yearn</li>
                    <li>**Custom strategies**: Your own yield generation logic</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    Strategies are modular and can be combined in **multi-strategy vaults** for diversification and risk management.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-6 w-6 text-primary" />
                    Generate Yield
                  </h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    The strategy generates yield over time. When profit is realized:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>A network participant called a **keeper** triggers a report</li>
                    <li>The vault calculates the profit (yield minus any losses)</li>
                    <li>New shares are **minted** representing the yield amount</li>
                    <li>These shares are sent to the **donation address** (not to you)</li>
                  </ul>
                  <Alert className="mt-4 bg-primary/10 border-primary/20">
                    <Lightbulb className="h-4 w-4 text-primary" />
                    <AlertDescription>
                      <strong>Key Difference:</strong> In traditional ERC-4626 vaults, yield accrues to your balance. In Octant, yield is diverted to funding purposes—turning yield into a public good.
                    </AlertDescription>
                  </Alert>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6 border-l-4 border-l-accent bg-gradient-to-r from-accent/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-accent">4</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Split className="h-6 w-6 text-accent" />
                    Split & Route
                  </h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    The donation address can be a **Payment Splitter** that distributes funds to multiple recipients:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>**Operations** (OpEx): Cover operational expenses</li>
                    <li>**Community Treasury**: Build reserves for future initiatives</li>
                    <li>**Ecosystem Projects**: Direct funding to specific projects</li>
                    <li>**Allocation Mechanisms**: Route to governance-controlled funding rounds</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    Splits are configurable and can be updated by the vault manager to adapt to changing needs.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-6 border-l-4 border-l-primary bg-gradient-to-r from-primary/10 to-transparent">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">5</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                    <Users className="h-6 w-6 text-primary" />
                    Allocate Funds
                  </h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    If yield is routed to an **Allocation Mechanism**, the community can participate in deciding how funds are distributed:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                    <li>**Quadratic Funding (QF)**: Match individual contributions with community funds</li>
                    <li>**Quadratic Voting (QV)**: Vote on projects with diminishing returns per vote</li>
                    <li>**Token-Weighted Voting**: Influence proportional to token holdings</li>
                    <li>**Custom Mechanisms**: Build your own allocation logic</li>
                  </ul>
                  <p className="text-foreground/90 leading-relaxed mt-3">
                    Allocation rounds have defined lifecycles: register → propose → vote → finalize → queue → redeem.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Principal Preservation */}
        <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-primary/30">
          <h2 className="text-3xl font-bold mb-4">Principal Preservation</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Throughout this entire process, **your principal remains fully intact**. The share-to-asset ratio is designed to stay one-to-one, meaning:
          </p>
          <ul className="list-disc list-inside space-y-2 text-lg text-foreground/80 ml-4">
            <li>You can withdraw your original deposit at any time (subject to vault type)</li>
            <li>Only the yield generated is donated to the funding stream</li>
            <li>If a strategy loses money, the loss is absorbed by the yield buffer (not your principal)</li>
            <li>Your capital is never at risk of being distributed to projects</li>
          </ul>
        </Card>

        {/* Automation & Keepers */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Automation & Keepers</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            Octant v2 is designed for **cost-efficiency and automation**. Wherever possible, execution is automated to reduce manual intervention, errors, and trust requirements:
          </p>
          
          <Card className="p-6 border-border/50">
            <h3 className="text-xl font-bold mb-3">Keeper Network</h3>
            <p className="text-foreground/90 leading-relaxed mb-3">
              Keepers are network participants who trigger strategy reports and harvest yield. They are incentivized through:
            </p>
            <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
              <li>Gas refunds for executing reports</li>
              <li>Small performance fees (configurable)</li>
              <li>Automated monitoring and execution</li>
            </ul>
          </Card>
        </div>

        {/* Example Flow */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Example: USDC Funding Vault</h2>
          <Card className="p-6 bg-muted/50 border-border/50">
            <pre className="text-sm font-mono text-foreground/90 whitespace-pre-wrap">
{`1. Alice deposits 10,000 USDC into a Funding Vault
   → Receives 10,000 yield-donating USDC tokens

2. Vault deploys USDC to Aave lending strategy
   → Earns 5% APY (500 USDC/year)

3. After 1 month, keeper triggers report
   → Strategy reports ~41.67 USDC profit
   → Vault mints 41.67 new shares
   → Shares sent to donation address (not Alice)

4. Donation address is a Payment Splitter
   → 20% to Operations (8.33 USDC)
   → 30% to Community Treasury (12.50 USDC)
   → 50% to Allocation Mechanism (20.84 USDC)

5. Allocation Mechanism runs Quadratic Funding round
   → Community votes on 10 ecosystem projects
   → 20.84 USDC distributed based on votes

6. Alice's principal remains 10,000 USDC
   → She can withdraw anytime
   → Yield continues funding ecosystem`}
            </pre>
          </Card>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/architecture">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Architecture →
                </h3>
                <p className="text-foreground/70">
                  Explore the technical system design and smart contract architecture
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Deploy your first funding vault and see the pipeline in action
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
