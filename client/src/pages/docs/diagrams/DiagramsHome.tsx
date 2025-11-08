import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Zap, Network, Code2 } from 'lucide-react';

export default function DiagramsHome() {
  return (
    <DocsLayoutNew>
      <div className="space-y-12">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Diagrams
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Octant v2 Visual Diagrams
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive visual guides to understand every aspect of the Octant v2 protocol through narrative-driven diagrams.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Hero Section */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-xl bg-primary/20 flex items-center justify-center">
                <Network className="h-8 w-8 text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">10 Comprehensive Diagrams</h2>
                <p className="text-muted-foreground">Learn through Alice, Bob, and Carol's journeys</p>
              </div>
            </div>
            <p className="text-lg mb-6">
              Each diagram uses character-driven narratives to explain complex DeFi concepts in an easy-to-understand way. From basic deposits to advanced yield mechanisms, we've got you covered.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/docs/diagrams/start-here">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors flex items-center gap-2">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </button>
              </Link>
              <Link href="/docs/diagrams/visual-guide">
                <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                  View All Diagrams
                </button>
              </Link>
            </div>
          </Card>

          {/* Quick Access Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Link href="/docs/diagrams/start-here">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Start Here</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  New to the diagrams? Begin your journey here
                </p>
                <div className="flex items-center text-sm text-primary">
                  Get started
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/diagrams/visual-guide">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Network className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Visual Guide</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  All 10 diagrams in one comprehensive guide
                </p>
                <div className="flex items-center text-sm text-accent">
                  View diagrams
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/diagrams/diagram-index">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Quick Index</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Find diagrams by role, complexity, or topic
                </p>
                <div className="flex items-center text-sm text-primary">
                  Browse index
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/diagrams/table-of-contents">
              <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-accent/50">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                  <Code2 className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Table of Contents</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Complete navigation with all resources
                </p>
                <div className="flex items-center text-sm text-accent">
                  View all
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Card>
            </Link>
          </div>

          {/* Featured Diagrams */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">⭐ Featured Diagrams</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Diagram 1</Badge>
                  <h3 className="text-xl font-bold mb-2">Basic User Deposit & Withdrawal</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Perfect starting point! Learn how Alice deposits $10,000 USDC and can withdraw anytime.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">⭐ Easy</Badge>
                    <Badge variant="outline" className="text-xs">5 min</Badge>
                  </div>
                </Card>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Diagram 2</Badge>
                  <h3 className="text-xl font-bold mb-2">Yield Generation & Distribution</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Understand how Bob's deposit earns yield and how it's split between growth and donations.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">⭐ Easy</Badge>
                    <Badge variant="outline" className="text-xs">5 min</Badge>
                  </div>
                </Card>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Diagram 6</Badge>
                  <h3 className="text-xl font-bold mb-2">Dragon Router & Allocation</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    See how yield flows from strategies through the Dragon Router to fund projects.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                    <Badge variant="outline" className="text-xs">10 min</Badge>
                  </div>
                </Card>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">Diagram 7</Badge>
                  <h3 className="text-xl font-bold mb-2">Quadratic Funding</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Learn how democratic voting amplifies small donors and prevents whale dominance.
                  </p>
                  <div className="flex gap-2">
                    <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                    <Badge variant="outline" className="text-xs">15 min</Badge>
                  </div>
                </Card>
              </Link>
            </div>
          </Card>

          {/* Learning Paths */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">🎓 Choose Your Learning Path</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <div className="text-4xl mb-3">👤</div>
                <h3 className="text-xl font-bold mb-2">I'm New to Octant</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start with the basics: deposits, yield, and voting
                </p>
                <p className="text-xs text-muted-foreground mb-4">~20 minutes</p>
                <Link href="/docs/diagrams/start-here">
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold">
                    Start Learning
                  </button>
                </Link>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <div className="text-4xl mb-3">💻</div>
                <h3 className="text-xl font-bold mb-2">I'm a Developer</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Deep dive into vault architecture and yield mechanisms
                </p>
                <p className="text-xs text-muted-foreground mb-4">~60 minutes</p>
                <Link href="/docs/diagrams/start-here">
                  <button className="w-full px-4 py-2 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors text-sm font-semibold">
                    Start Learning
                  </button>
                </Link>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <div className="text-4xl mb-3">🏛️</div>
                <h3 className="text-xl font-bold mb-2">I'm a Project/DAO</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to receive funding through Octant
                </p>
                <p className="text-xs text-muted-foreground mb-4">~30 minutes</p>
                <Link href="/docs/diagrams/start-here">
                  <button className="w-full px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors text-sm font-semibold">
                    Start Learning
                  </button>
                </Link>
              </div>
            </div>
          </Card>

          {/* What Makes This Special */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">✨ What Makes These Diagrams Special</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-start gap-3">
                <div className="text-3xl">📖</div>
                <div>
                  <h3 className="font-semibold mb-1">Narrative-Driven</h3>
                  <p className="text-sm text-muted-foreground">Each diagram tells a story with real characters like Alice, Bob, and Carol</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎯</div>
                <div>
                  <h3 className="font-semibold mb-1">Multi-Audience</h3>
                  <p className="text-sm text-muted-foreground">Designed for end users, developers, and governance participants</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">🔄</div>
                <div>
                  <h3 className="font-semibold mb-1">Comprehensive</h3>
                  <p className="text-sm text-muted-foreground">Covers 90% of protocol functionality across 10 detailed diagrams</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">⚡</div>
                <div>
                  <h3 className="font-semibold mb-1">Interactive</h3>
                  <p className="text-sm text-muted-foreground">Rendered with Mermaid for clear, maintainable visualizations</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">📊</div>
                <div>
                  <h3 className="font-semibold mb-1">Step-by-Step</h3>
                  <p className="text-sm text-muted-foreground">Follow along as concepts build from simple to advanced</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-3xl">🎨</div>
                <div>
                  <h3 className="font-semibold mb-1">Visual Learning</h3>
                  <p className="text-sm text-muted-foreground">Complex DeFi concepts made easy through visual storytelling</p>
                </div>
              </div>
            </div>
          </Card>

          {/* CTA */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Explore?</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Start your journey through the Octant v2 protocol with our comprehensive visual guides.
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/docs/diagrams/start-here">
                <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Start Here
                </button>
              </Link>
              <Link href="/docs/diagrams/visual-guide">
                <button className="px-8 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                  View All Diagrams
                </button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </DocsLayoutNew>
  );
}
