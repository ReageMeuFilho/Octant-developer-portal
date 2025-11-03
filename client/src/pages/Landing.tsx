import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
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
  Play,
  FileCode,
  Users,
  Rocket,
  Award,
  MessageCircle,
  Twitter,
  Youtube,
  Mail,
  ExternalLink,
  Lightbulb,
  Settings
} from "lucide-react";
import { Link } from "wouter";

export default function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />

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

      {/* Featured Insights */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Featured Insights
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Learn from real-world implementations and comprehensive guides
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/docs/tutorials/first-vault">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Rocket className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    Deploy Your First Vault in 10 Minutes
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Step-by-step guide to launching your first funding vault on testnet
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read tutorial
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/docs/tutorials/quadratic-funding">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    Quadratic Funding for DAOs
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Implement democratic fund allocation with quadratic voting mechanisms
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Read tutorial
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/docs/tutorials/multi-strategy">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <TrendingUp className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    Multi-Strategy Yield Optimization
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    Diversify yield generation across Aave, Morpho, and Spark protocols
                  </p>
                  <div className="flex items-center text-primary text-sm font-medium">
                    Read tutorial
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>

            <Link href="/docs/case-studies/octant">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group h-full">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                    From Treasury to Impact: The Octant Case Study
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    How Golem Foundation transformed idle assets into ecosystem funding
                  </p>
                  <div className="flex items-center text-accent text-sm font-medium">
                    Read case study
                    <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              One Platform to Fund Sustainable Ecosystems
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Launch secure, yield-generating treasury operations with robust SDKs and audited smart contracts
            </p>
          </div>

          {/* Feature Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Blocks className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Funding Vaults</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preserve principal, route yield to your ecosystem automatically. ERC-4626 compliant with battle-tested security.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Allocation Mechanisms</h3>
              <p className="text-muted-foreground leading-relaxed">
                Run transparent grant rounds with on-chain governance. Support for quadratic funding, voting, and custom models.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Multi-Strategy Management</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimize yield across DeFi protocols including Aave, Morpho, and Spark with configurable risk parameters.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Zap className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Payment Splitter</h3>
              <p className="text-muted-foreground leading-relaxed">
                Distribute yield among multiple recipients gas-efficiently with programmable percentage allocations.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-primary/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">Community Staking</h3>
              <p className="text-muted-foreground leading-relaxed">
                Token-gated participation and reward distribution with flexible governance models for your community.
              </p>
            </Card>

            <Card className="p-8 bg-card border-border/50 hover:border-accent/50 transition-all">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-6">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-xl font-bold mb-3">Safe Integration</h3>
              <p className="text-muted-foreground leading-relaxed">
                Seamlessly integrate with Safe multisig wallets for enterprise-grade treasury management and security.
              </p>
            </Card>
          </div>

          {/* Supported By */}
          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6 font-semibold">SUPPORTED BY LEADING PROTOCOLS</p>
            <div className="flex flex-wrap items-center justify-center gap-8">
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">Aave</div>
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">Morpho</div>
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">Safe</div>
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">Ethereum</div>
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">ERC-4626</div>
              <div className="text-2xl font-bold text-muted-foreground/50 hover:text-foreground transition-colors">Lido</div>
            </div>
          </div>
        </div>
      </section>

      {/* Stablecoins & Blockchains */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Stablecoins & Supported Blockchains
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Octant works primarily with USDC and other ERC-20 tokens on Ethereum and leading Layer 2 networks
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-8 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-4">Supported Assets</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">USDC (Circle USD Coin)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">DAI (MakerDAO)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">wstETH (Wrapped Staked ETH)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-foreground">Any ERC-20 Token</span>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-4">Supported Networks</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">Ethereum Mainnet</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">Arbitrum</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">Optimism</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center">
                    <CheckCircle2 className="h-4 w-4 text-accent" />
                  </div>
                  <span className="text-foreground">Base</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Bounties Program */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                Developer Incentives
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Earn Rewards for Building with Octant
              </h2>
              <p className="text-xl text-muted-foreground">
                Get paid to learn, build, and contribute to the Octant ecosystem
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">$500</div>
                <h3 className="font-bold mb-2">Deploy Your First Vault</h3>
                <p className="text-sm text-muted-foreground">
                  Complete the quickstart tutorial and deploy a vault on testnet
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
                <div className="text-3xl font-bold text-accent mb-2">$1,000</div>
                <h3 className="font-bold mb-2">Create a Custom Strategy</h3>
                <p className="text-sm text-muted-foreground">
                  Build and deploy a novel yield strategy with documentation
                </p>
              </Card>

              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
                <div className="text-3xl font-bold text-primary mb-2">$750</div>
                <h3 className="font-bold mb-2">Best DAO Dashboard</h3>
                <p className="text-sm text-muted-foreground">
                  Create the most innovative treasury management interface
                </p>
              </Card>
            </div>

            <div className="text-center">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Join Developer Bounties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Resources Hub */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Build with Confidence
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Everything you need to go from idea to production
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Link href="/docs">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Documentation</h3>
                    <p className="text-sm text-muted-foreground">
                      Complete guides and API references to build with Octant
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/tutorials">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Code2 className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">Tutorials</h3>
                    <p className="text-sm text-muted-foreground">
                      Hands-on examples to get from idea to deployment fast
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/resources/sdks">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <Blocks className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">Sample Apps</h3>
                    <p className="text-sm text-muted-foreground">
                      Working templates and starter kits for real integrations
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/resources/community">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">Community</h3>
                    <p className="text-sm text-muted-foreground">
                      Join our Discord, discuss ideas, and connect with builders
                    </p>
                  </div>
                  <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Join the Developer Community
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Connect with builders, treasury managers, and protocol developers shaping the future of DAO funding
            </p>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Sarah Chen</div>
                  <div className="text-sm text-muted-foreground">Treasury Manager, MetaDAO</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Octant transformed our treasury from a static reserve into a sustainable funding engine. We're now funding 10+ projects monthly without touching principal."
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Code2 className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <div className="font-bold">Alex Rodriguez</div>
                  <div className="text-sm text-muted-foreground">Protocol Developer</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "The ERC-4626 compatibility made integration seamless. We had our first vault deployed in under an hour. The docs are exceptional."
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-bold">Maya Patel</div>
                  <div className="text-sm text-muted-foreground">DeFi Strategist</div>
                </div>
              </div>
              <p className="text-muted-foreground italic">
                "Multi-strategy vaults let us diversify across Aave, Morpho, and Lido while maintaining a single interface. Game-changing for risk management."
              </p>
            </Card>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
            <a href="https://discord.gg/octant" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                <MessageCircle className="mr-2 h-5 w-5" />
                Discord
              </Button>
            </a>
            <a href="https://twitter.com/octant" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                <Twitter className="mr-2 h-5 w-5" />
                Twitter
              </Button>
            </a>
            <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-primary/20 hover:bg-primary/10">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </a>
            <a href="https://youtube.com/@octant" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                <Youtube className="mr-2 h-5 w-5" />
                YouTube
              </Button>
            </a>
          </div>

          {/* Newsletter */}
          <Card className="max-w-2xl mx-auto p-8 bg-gradient-to-br from-primary/10 to-accent/5 border-primary/20">
            <div className="text-center mb-6">
              <Mail className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="text-xl font-bold mb-2">Subscribe to Developer Newsletter</h3>
              <p className="text-muted-foreground">
                Get weekly updates on new features, tutorials, and community highlights
              </p>
            </div>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="your@email.com" 
                className="bg-background/50 border-border/50"
              />
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Subscribe
              </Button>
            </div>
          </Card>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Get Started for Free
            </h2>
            <p className="text-xl text-muted-foreground mb-10">
              Launch your first vault in minutes. No upfront cost.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <Link href="/docs/quickstart">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6">
                  Create Account
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/docs">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-primary/20 hover:bg-primary/10">
                  <BookOpen className="mr-2 h-5 w-5" />
                  View Documentation
                </Button>
              </Link>
            </div>
            <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
              <Lightbulb className="h-4 w-4 text-primary" />
              The first 1,000 testnet transactions are free
            </p>
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
                <li><Link href="/docs/resources/community" className="hover:text-foreground transition-colors">Community</Link></li>
                <li><Link href="/docs/resources/faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
                <li><Link href="/docs/resources/testnet" className="hover:text-foreground transition-colors">Testnet</Link></li>
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
