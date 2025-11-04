import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Zap,
  Wallet,
  Code2,
  Blocks,
  ArrowRight,
  MessageCircle
} from "lucide-react";
import { Link } from "wouter";

export default function Orientation() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Developer Orientation
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Choose Your Development Path
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Octant v2 helps web3 ecosystems fund their growth sustainably by serving as connective tissue between DeFi and diverse allocation mechanisms. Whether you're a relentless yield hound or a decentralized governance wizard, there's boundless opportunity for you on the protocol.
          </p>
        </div>

        {/* Introduction */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Octant v2 is designed to be modular and extensible, allowing developers to build in multiple areas depending on their expertise and interests. Let's explore the four main development paths available.
          </p>
        </div>

        {/* Development Paths */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Four Ways to Build</h2>

          {/* Path 1: Yield Donating */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">1. Yield Donating Strategies</h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  Connect any DeFi protocol to generate yield-derived ecosystem funding. This path involves integrating established yield sources like Aave, Compound, Lido, or any other protocol into Octant v2's vault infrastructure.
                </p>
                <div className="bg-card/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold mb-2">Build here if:</p>
                  <p className="text-sm text-muted-foreground">
                    You want to integrate Aave, Compound, Lido, or any yield source into Octant v2 and have experience with DeFi protocol integrations.
                  </p>
                </div>
                <Link href="/docs/yield-donating">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Dive In: Yield Donating Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Path 2: Yield Skimming */}
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Wallet className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">2. Yield Skimming Strategies</h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  Deploy yield-bearing tokens and capture their exchange rate appreciation to generate ecosystem funding. This approach leverages tokens like wstETH and rETH that accrue value over time through rebasing or exchange rate mechanisms.
                </p>
                <div className="bg-card/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold mb-2">Build here if:</p>
                  <p className="text-sm text-muted-foreground">
                    You want to use yield-bearing tokens like wstETH, rETH with Octant v2 and understand how rebasing tokens and exchange rate appreciation work.
                  </p>
                </div>
                <Link href="/docs/yield-skimming">
                  <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                    Dive In: Yield Skimming Strategy
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Path 3: Allocation Mechanisms */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Code2 className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">3. Tokenized Allocation Mechanisms</h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  Create systems for communities to decide how funds are distributed. This path enables you to build innovative governance models, voting systems, or data-driven allocation algorithms that determine where yield flows.
                </p>
                <div className="bg-card/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold mb-2">Build here if:</p>
                  <p className="text-sm text-muted-foreground">
                    You have ideas for voting, governance, or data-driven funding allocation to bring to Octant v2, such as quadratic funding, conviction voting, or reputation-based systems.
                  </p>
                </div>
                <Link href="/docs/allocation-mechanisms">
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                    Dive In: Tokenized Allocation Mechanisms
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          {/* Path 4: Multi-Strategy Vaults */}
          <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 transition-all">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <Blocks className="h-8 w-8 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-3">4. Multi-Strategy Vaults</h3>
                <p className="text-foreground/90 mb-4 leading-relaxed">
                  Create vaults that incorporate multiple strategies with advanced risk management. This advanced path involves building sophisticated treasury management systems that can balance multiple yield sources, manage risk exposure, and optimize returns.
                </p>
                <div className="bg-card/50 p-4 rounded-lg mb-4">
                  <p className="text-sm font-semibold mb-2">Build here if:</p>
                  <p className="text-sm text-muted-foreground">
                    You see opportunities for strategy diversification for communities using Octant v2 and have experience with portfolio management and risk assessment.
                  </p>
                </div>
                <Link href="/docs/multi-strategy">
                  <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                    Dive In: Multi-Strategy Vaults
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Getting Help */}
        <div className="pt-8 border-t border-border/40">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Join the Builder Community</h3>
                <p className="text-muted-foreground mb-4">
                  Connect with other developers, get technical support, and share your progress with the Octant community.
                </p>
                <a href="https://discord.gg/octant" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                    Join Octant Discord → #builder-support
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </div>
            </div>
          </Card>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Ready to Start Building?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/quickstart">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide
                </h3>
                <p className="text-sm text-muted-foreground">
                  Get your development environment set up in 10 minutes
                </p>
              </Card>
            </Link>

            <Link href="/docs/tutorials/strategy-development">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Strategy Development Tutorial
                </h3>
                <p className="text-sm text-muted-foreground">
                  Build your first yield strategy step-by-step
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
