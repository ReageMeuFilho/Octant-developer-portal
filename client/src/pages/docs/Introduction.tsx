import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Blocks, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Info,
  AlertTriangle
} from "lucide-react";
import { Link } from "wouter";

export default function Introduction() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Introduction
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            What is Octant v2?
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Octant v2 is open public infrastructure for sustainable growth. It transforms treasury assets into continuous funding streams for projects and communities while preserving principal through battle-tested DeFi strategies.
          </p>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Octant v2 utilizes a set of smart contracts and tooling for routing on-chain <strong>yield</strong> to projects and funding mechanisms. Users allocate assets to <strong>Funding Vaults</strong>, select DeFi protocols for yield strategies, define a donation address, and optionally run <strong>allocation rounds</strong> where a group of users or a community can help direct distributions.
          </p>
        </div>

        {/* Core Components */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Core Components</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Blocks className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Funding Vaults</h3>
                  <p className="text-muted-foreground">
                    ERC-4626-compliant vaults that deploy capital into DeFi yield strategies. These vaults handle user deposits, strategy execution, and yield distribution while maintaining a 1:1 share-to-asset ratio for principal preservation.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Routing & Splitting Contracts</h3>
                  <p className="text-muted-foreground">
                    Infrastructure for programmatic yield distribution to multiple recipients. Donation addresses can be configured as splits with percentage allocations to operations, community, ecosystem growth, and more.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Allocation Mechanisms</h3>
                  <p className="text-muted-foreground">
                    Smart contracts implementing various fund allocation models such as quadratic funding (QF), quadratic voting (QV), and other customizable funding rounds. These enable community-driven decision-making for yield distribution.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Community Staking Contracts</h3>
                  <p className="text-muted-foreground">
                    Optional token-staking mechanisms for governance participation and reward distribution. Participation can be token-gated and token-weighted to align incentives with community goals.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Key Design Principles */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Key Design Principles</h2>
          <div className="space-y-4">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Capital Preservation
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Octant v2 separates principal management from yield routing. The principal is not distributed; only generated returns flow to funding mechanisms, preserving the treasury. This ensures long-term sustainability without depleting reserves.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-accent" />
                Credible Neutrality
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                The protocol does not prescribe <em>what</em> to fund; it standardizes <em>how</em> to fund via configurable splits and allocation mechanisms. This enables diverse use cases while maintaining protocol neutrality.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                Sustainability
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Yield-based funding enables continuous streams without depleting reserves. By capturing value that would otherwise sit idle and redirecting it toward funding pools, Octant v2 creates perpetual funding mechanisms.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-accent" />
                Standards and Composability
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Uses ERC-4626 standard for vaults, supports Safe multisig treasuries, and interoperates with common DeFi primitives like Aave, Morpho, and Sky Compounder. This ensures seamless integration with existing DeFi infrastructure.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security
              </h3>
              <p className="text-foreground/90 leading-relaxed">
                Vaults follow Yearn v3-style patterns and have undergone additional security audits. Strategies have configurable exposure limits to manage risk and protect user funds.
              </p>
            </Card>
          </div>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-foreground/90 leading-relaxed mb-4">
              Octant v2 acts as a decentralized funding network that transforms deployed assets into sustainable funding streams. At its core, it works as a pipeline:
            </p>
            
            <div className="bg-card border border-border/50 rounded-lg p-6 my-6">
              <div className="flex items-center gap-4 text-sm font-mono">
                <span className="text-primary font-semibold">Treasury Assets</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-accent font-semibold">Octant Vault</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-primary font-semibold">Yield Strategy</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-accent font-semibold">Yield Generated</span>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
                <span className="text-primary font-semibold">Funding Stream</span>
              </div>
            </div>

            <ol className="space-y-4 list-decimal list-inside text-foreground/90">
              <li className="leading-relaxed">
                <strong>Users deploy assets</strong> in Octant funding vaults and receive yield-donating tokens representing their principal
              </li>
              <li className="leading-relaxed">
                <strong>Select a strategy</strong> that generates yield through DeFi protocols (Aave, Lido, Morpho, etc.)
              </li>
              <li className="leading-relaxed">
                <strong>Strategy generates yield</strong> which is captured and converted into new vault shares
              </li>
              <li className="leading-relaxed">
                <strong>Yield shares are minted</strong> to the donation address instead of returning to users
              </li>
              <li className="leading-relaxed">
                <strong>Donation address distributes</strong> funds directly to projects or through allocation mechanisms (QF, QV)
              </li>
            </ol>

            <Alert className="mt-6 bg-accent/10 border-accent/20">
              <Info className="h-4 w-4 text-accent" />
              <AlertDescription className="text-foreground/90">
                <strong>Key Difference from Traditional Vaults:</strong> In most ERC-4626 vaults, yield accrues to the depositor's balance. Octant v2 instead diverts the yield to funding purposes, effectively turning yield into a public good. This creates something akin to a "Kickstarter powered by yield."
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Security & Risk */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Security & Risk for Users</h2>
          <div className="space-y-4">
            <Alert className="bg-destructive/10 border-destructive/20">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-foreground/90">
                <strong>Smart Contract Risk:</strong> While Octant built contracts based on audited Yearn v3 patterns and ERC-4626 standards, new contracts may have undiscovered vulnerabilities. Always verify contract addresses on official channels.
              </AlertDescription>
            </Alert>

            <Alert className="bg-destructive/10 border-destructive/20">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-foreground/90">
                <strong>Strategy Risk:</strong> Direct strategies (e.g., ETH staking, Aave) may face protocol risks, liquidation events, or unexpected governance changes. Understand the underlying protocols before deploying capital.
              </AlertDescription>
            </Alert>

            <Alert className="bg-destructive/10 border-destructive/20">
              <AlertTriangle className="h-4 w-4 text-destructive" />
              <AlertDescription className="text-foreground/90">
                <strong>Impermanent Loss:</strong> If a strategy involves LP tokens (e.g., Uniswap pools), price fluctuations may lead to impermanent loss compared to holding assets separately.
              </AlertDescription>
            </Alert>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/quickstart">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Deploy your first vault in 5 minutes
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Get started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/concepts/how-it-works">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Deep Dive: Architecture
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand the technical architecture
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
