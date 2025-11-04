import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Rocket,
  Code2,
  Zap,
  TrendingUp,
  Users,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Link } from "wouter";

export default function Tutorials() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Tutorials
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Hands-On Tutorials
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Step-by-step guides to help you build with Octant v2. From deploying your first vault to implementing advanced multi-strategy systems, these tutorials provide practical, runnable examples.
          </p>
        </div>

        {/* Getting Started Tutorials */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Getting Started</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/docs/tutorials/first-vault">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    Deploy Your First Vault in 10 Minutes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Complete walkthrough from setup to deployment on Sepolia testnet. Perfect for developers new to Octant v2.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      <span>Environment setup</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      <span>Smart contract deployment</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-primary" />
                      <span>Testing and verification</span>
                    </div>
                  </div>
                  <Button variant="link" className="text-primary p-0 h-auto justify-start">
                    Start tutorial
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>

            <Link href="/docs/tutorials/strategy-development">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-accent transition-colors">
                    Strategy Development Tutorial
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Learn the modular architecture by building a Spark USDC savings strategy with only four functions.
                  </p>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      <span>Inheritance patterns</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      <span>ERC-4626 integration</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <CheckCircle2 className="h-3 w-3 text-accent" />
                      <span>Reward distribution</span>
                    </div>
                  </div>
                  <Button variant="link" className="text-accent p-0 h-auto justify-start">
                    Start tutorial
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* DeFi Integration Tutorials */}
        <div>
          <h2 className="text-3xl font-bold mb-6">DeFi Protocol Integrations</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/docs/tutorials/aave-integration">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Integrate with Aave
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect Aave lending pools as a yield source for your vault with this comprehensive integration guide.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/tutorials/lido-integration">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Zap className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Integrate with Lido
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Use Lido liquid staking to generate yield from staked ETH for sustainable ecosystem funding.
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>

        {/* Advanced Tutorials */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Advanced Topics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Link href="/docs/tutorials/quadratic-funding">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Quadratic Funding for DAOs
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Implement democratic fund allocation with quadratic voting mechanisms for your community.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/tutorials/multi-strategy">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Multi-Strategy Yield Optimization
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Diversify yield generation across Aave, Morpho, and Spark protocols with advanced risk management.
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Need Help?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/quickstart">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide
                </h3>
                <p className="text-sm text-muted-foreground">
                  Set up your development environment in 10 minutes
                </p>
              </Card>
            </Link>

            <Link href="/docs/resources/community">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Join the Community
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get help from developers and the Octant team on Discord
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
