import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Shield, 
  Blocks, 
  TrendingUp, 
  Code2, 
  Wallet, 
  Zap,
  CheckCircle2,
  Github,
  BookOpen,
  Play
} from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">O</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Octant v2
              </span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Documentation
              </Link>
              <Link href="/docs/quickstart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Quickstart
              </Link>
              <Link href="/docs/tutorials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Tutorials
              </Link>
              <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                GitHub
              </a>
            </div>
            <Link href="/docs">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
        <div className="container mx-auto px-6 py-24 md:py-32 relative">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
              Open Public Infrastructure for Sustainable Growth
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent leading-tight">
              Turn Treasury Assets into Continuous Ecosystem Funding
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto leading-relaxed">
              Deploy capital. Preserve principal. Fund your community—automatically. Built on battle-tested DeFi infrastructure with enterprise-grade security.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <Link href="/docs/quickstart">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 group">
                  Start Building – Free
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 group border-primary/20 hover:bg-primary/10">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 group border-accent/20 hover:bg-accent/10">
                <Play className="mr-2 h-5 w-5" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Audited</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>ERC-4626 Standard</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-primary" />
                <span>Safe Multisig Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4 text-primary" />
                <span>Battle-Tested DeFi</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Capital Preservation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Octant v2 separates principal management from yield routing. Vaults follow Yearn v3-style patterns with additional audits, and strategies have configurable exposure limits to protect your treasury.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Blocks className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Neutral, Standardized, Composable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Built on widely used primitives – ERC-4626 vaults and Safe-managed treasuries – Octant v2 integrates cleanly with DeFi tools such as Aave, Morpho, or compounders.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-card-foreground">Sustainable & Efficient by Default</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yield-based funding creates continuous streams without depleting reserves, capturing value that would otherwise sit idle and redirecting it to funding pools.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Developer Paths Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Four Ways to Build
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Whether you're a yield optimizer or governance architect, there's a path for you
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Yield Donating Strategies</h3>
                  <p className="text-muted-foreground mb-4">
                    Connect any DeFi protocol to generate yield-derived ecosystem funding. Integrate Aave, Compound, Lido, or any yield source.
                  </p>
                  <Link href="/docs/yield-donating">
                    <Button variant="link" className="text-primary p-0 h-auto group/btn">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Wallet className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Yield Skimming Strategies</h3>
                  <p className="text-muted-foreground mb-4">
                    Deploy yield-bearing tokens and capture their exchange rate appreciation. Use wstETH, rETH, and other rebasing tokens.
                  </p>
                  <Link href="/docs/yield-skimming">
                    <Button variant="link" className="text-accent p-0 h-auto group/btn">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <Code2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Tokenized Allocation Mechanisms</h3>
                  <p className="text-muted-foreground mb-4">
                    Create systems for communities to decide fund distribution. Build voting, governance, or data-driven allocation.
                  </p>
                  <Link href="/docs/allocation-mechanisms">
                    <Button variant="link" className="text-primary p-0 h-auto group/btn">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-accent/50 transition-all duration-300 group">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                  <Blocks className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-card-foreground">Multi-Strategy Vaults</h3>
                  <p className="text-muted-foreground mb-4">
                    Create vaults that incorporate multiple strategies with advanced risk management and diversification.
                  </p>
                  <Link href="/docs/multi-strategy">
                    <Button variant="link" className="text-accent p-0 h-auto group/btn">
                      Learn more
                      <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Build the Future of DAO Funding?
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Join developers building sustainable funding infrastructure for Web3 ecosystems
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/docs/quickstart">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  Start Building Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10">
                  <Github className="mr-2 h-5 w-5" />
                  View on GitHub
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/40 py-12 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">O</span>
                </div>
                <span className="text-lg font-bold">Octant v2</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Open public infrastructure for sustainable ecosystem growth
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Documentation</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link href="/docs" className="hover:text-foreground transition-colors">Getting Started</Link></li>
                <li><Link href="/docs/quickstart" className="hover:text-foreground transition-colors">Quickstart</Link></li>
                <li><Link href="/docs/tutorials" className="hover:text-foreground transition-colors">Tutorials</Link></li>
                <li><Link href="/docs/api" className="hover:text-foreground transition-colors">API Reference</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">GitHub</a></li>
                <li><Link href="/docs/community" className="hover:text-foreground transition-colors">Community</Link></li>
                <li><Link href="/docs/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/docs/testnet" className="hover:text-foreground transition-colors">Testnet</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="https://octant.app" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Octant v1</a></li>
                <li><a href="https://golemfoundation.org" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Golem Foundation</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            <p>© 2025 Octant, a Golem Foundation project. Built for the Web3 community.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
