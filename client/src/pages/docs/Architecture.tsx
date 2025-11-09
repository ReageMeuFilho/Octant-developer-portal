import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Layers, Database, Split, Users, Shield, Zap, ArrowRight, GitBranch } from "lucide-react";
import { Link } from "wouter";
import { MermaidDiagram } from "@/components/getting-started/MermaidDiagram";
import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function Architecture() {
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
            Architecture
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            High-level system design: vaults, strategies, donation routing, and allocation mechanisms
          </p>
        </div>

        {/* System Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">System Overview</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Octant v2 is architected as a **decentralized funding network** where each node represents a smart contract that either generates a funding stream or transforms and divides it among multiple recipients. The architecture prioritizes capital preservation, composability, and sustainability.
          </p>

          <MermaidDiagram
            code={`graph TB
    A["USER / TREASURY<br/>(Deposits Principal)"]
    B["FUNDING VAULT (ERC-4626)<br/>• Accepts deposits (USDC, DAI, stETH, etc.)<br/>• Issues yield-donating shares to depositor<br/>• Deploys capital to strategies<br/>• Preserves principal (1:1 share-to-asset ratio)"]
    
    subgraph YS["YIELD STRATEGIES"]
        C1["YDS (Aave)<br/>Lend USDC"]
        C2["YSS (stETH)<br/>Hold stETH"]
        C3["Custom<br/>Strategy"]
    end
    
    D["KEEPER NETWORK<br/>• Monitors strategy performance<br/>• Triggers harvest & report<br/>• Mints new shares representing yield"]
    E["DONATION ADDRESS<br/>• Receives newly minted yield shares<br/>• Can be EOA, multisig, or Payment Splitter"]
    
    subgraph PS["PAYMENT SPLITTER"]
        F1["Operations<br/>(20%)"]
        F2["Treasury<br/>(30%)"]
        F3["Allocation<br/>Mechanism<br/>(50%)"]
    end
    
    G["ALLOCATION MECHANISM (TAM)<br/>• Quadratic Funding (QF)<br/>• Quadratic Voting (QV)<br/>• Token-Weighted Voting<br/>• Custom Allocation Logic<br/><br/>Lifecycle: Register → Propose → Vote → Finalize → Redeem"]
    H["ECOSYSTEM PROJECTS<br/>• Open-source development<br/>• Public goods<br/>• Community initiatives"]
    
    A --> B
    B --> YS
    C1 --> D
    C2 --> D
    C3 --> D
    D --> E
    E --> PS
    F1 -.-> H
    F2 -.-> H
    F3 --> G
    G --> H`}
          />
        </div>

        {/* Core Components */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Core Components</h2>
          
          <div className="space-y-6">
            {/* Funding Vaults */}
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Database className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Funding Vaults</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    ERC-4626-compliant vaults that serve as the entry point for capital. Vaults handle deposits, issue shares, and deploy capital to yield strategies.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Key Features:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4">
                        <li>**Standard Vaults**: Allow withdrawals at any time</li>
                        <li>**Locked Vaults**: Require cooldown period (ragequit mechanism)</li>
                        <li>**Dragon Vaults**: Integrated with Safe multisig for large treasuries</li>
                        <li>**Collective Funding Vaults**: Pool capital from multiple participants</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-2">Supported Assets:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4">
                        <li>Base tokens: USDC, DAI, USDT</li>
                        <li>Rebasing yield-bearing: stETH, aUSDC</li>
                        <li>Non-rebasing yield-bearing: wstETH, rETH</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Yield Strategies */}
            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Zap className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Yield Strategies</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Modular contracts that generate yield from DeFi protocols. Strategies inherit from a base architecture and implement specific yield generation logic.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Strategy Types:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4">
                        <li>**Yield Donating Strategies (YDS)**: Accept base tokens, donate profits</li>
                        <li>**Yield Skimming Strategies (YSS)**: Hold yield-bearing tokens, donate appreciation</li>
                        <li>**Multi-Strategy Vaults**: Diversify across multiple strategies</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-2">Architecture Hierarchy:</h4>
                      <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md mt-2 overflow-x-auto">
{`TokenizedStrategy
  └─ YieldDonatingTokenizedStrategy
       └─ BaseStrategy
            └─ BaseHealthCheck
                 └─ Your Custom Strategy`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Payment Splitter */}
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <Split className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Payment Splitter</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Distributes yield to multiple recipients based on predefined percentages. Enables flexible allocation between operations, treasury, and community funding.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Example Configuration:</h4>
                      <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md mt-2">
{`{
  "recipients": [
    { "address": "0x...ops", "percentage": 20 },    // Operations
    { "address": "0x...treasury", "percentage": 30 }, // Treasury
    { "address": "0x...tam", "percentage": 50 }      // Allocation Mechanism
  ]
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            {/* Allocation Mechanisms */}
            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <Users className="h-8 w-8 text-accent flex-shrink-0 mt-1" />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">Tokenized Allocation Mechanisms (TAM)</h3>
                  <p className="text-foreground/90 leading-relaxed mb-4">
                    Smart contracts that enable community participation in funding decisions. TAMs implement various allocation models with on-chain lifecycles.
                  </p>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-primary mb-2">Allocation Models:</h4>
                      <ul className="list-disc list-inside space-y-1 text-foreground/80 ml-4">
                        <li>**Quadratic Funding (QF)**: Match individual contributions with community funds</li>
                        <li>**Quadratic Voting (QV)**: Diminishing returns per vote</li>
                        <li>**Token-Weighted Voting**: Influence proportional to holdings</li>
                        <li>**Custom Mechanisms**: Build your own allocation logic</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-accent mb-2">Lifecycle:</h4>
                      <div className="flex items-center gap-2 flex-wrap mt-2">
                        <Badge variant="outline">Register</Badge>
                        <ArrowRight className="h-4 w-4" />
                        <Badge variant="outline">Propose</Badge>
                        <ArrowRight className="h-4 w-4" />
                        <Badge variant="outline">Vote</Badge>
                        <ArrowRight className="h-4 w-4" />
                        <Badge variant="outline">Finalize</Badge>
                        <ArrowRight className="h-4 w-4" />
                        <Badge variant="outline">Queue</Badge>
                        <ArrowRight className="h-4 w-4" />
                        <Badge variant="outline">Redeem</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Design Principles */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Design Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Capital Preservation</h3>
              <p className="text-sm text-foreground/80">
                Principal is never distributed. Only generated returns flow to funding mechanisms, maintaining 1:1 share-to-asset ratio.
              </p>
            </Card>

            <Card className="p-5">
              <Layers className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Credible Neutrality</h3>
              <p className="text-sm text-foreground/80">
                Protocol doesn't prescribe what to fund; it standardizes how to fund via configurable mechanisms.
              </p>
            </Card>

            <Card className="p-5">
              <Zap className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Sustainability</h3>
              <p className="text-sm text-foreground/80">
                Yield-based funding enables continuous streams without depleting reserves.
              </p>
            </Card>

            <Card className="p-5">
              <GitBranch className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Composability</h3>
              <p className="text-sm text-foreground/80">
                ERC-4626 standard, Safe integration, interoperability with major DeFi protocols.
              </p>
            </Card>

            <Card className="p-5">
              <Database className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Capital Efficiency</h3>
              <p className="text-sm text-foreground/80">
                Captures idle value and redirects toward funding pools, maximizing capital utility.
              </p>
            </Card>

            <Card className="p-5">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Trust Minimized</h3>
              <p className="text-sm text-foreground/80">
                Automated execution reduces manual intervention. Admin functions controlled by trusted teams.
              </p>
            </Card>
          </div>
        </div>

        {/* Security Considerations */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Security & Risk Management</h2>
          
          <Alert className="mb-4 bg-primary/10 border-primary/20">
            <Shield className="h-4 w-4 text-primary" />
            <AlertDescription>
              <strong>Security First:</strong> Vaults follow Yearn v3 patterns and have undergone additional security audits. Strategies have configurable exposure limits.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">Smart Contract Risk</h3>
              <p className="text-sm text-foreground/80">
                While built on audited patterns (Yearn v3, ERC-4626), new contracts may have undiscovered vulnerabilities. Always verify contract addresses on official channels.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">Strategy Risk</h3>
              <p className="text-sm text-foreground/80">
                Direct strategies may face protocol risks, liquidation events, or unexpected governance changes. Diversify across multiple strategies.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">Exposure Limits</h3>
              <p className="text-sm text-foreground/80">
                Strategies have configurable maximum debt ratios to limit exposure. Multi-strategy vaults can rebalance automatically.
              </p>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Explore Further</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/orientation">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Developer Paths →
                </h3>
                <p className="text-foreground/70">
                  Choose your development journey: YDS, YSS, TAM, or Multi-Strategy
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Deploy your first funding vault and see the architecture in action
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
