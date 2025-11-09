import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';
import { ArrowRight, BookOpen, Zap, Users, Code2 } from 'lucide-react';

export default function StartHere() {
  return (
    <DocsLayoutNew>
      <div className="space-y-12">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Start Here
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Octant v2 Visual Guide
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Welcome! This guide will help you navigate the complete diagram system for understanding Octant v2.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* What You're Looking At */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-4">🎯 What You're Looking At</h2>
            <p className="text-lg text-muted-foreground mb-4">
              I've created a <strong>complete diagram-based tutorial system</strong> with <strong>10 comprehensive diagrams</strong> covering every major aspect of the Octant v2 protocol.
            </p>
            <p className="text-lg text-muted-foreground">
              Each diagram uses <strong>Alice/Bob style narratives</strong> (like "Alice deposits $10,000...") to make complex DeFi concepts easy to understand.
            </p>
          </Card>

          {/* Quick Start Options */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">🚀 Quick Start (Pick One)</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/docs/diagrams/visual-guide">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <BookOpen className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">View All 10 Diagrams</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        See all diagrams right now in one comprehensive guide
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        Get started
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/docs/diagrams/diagram-index">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-accent/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                      <Zap className="h-6 w-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">Quick Index</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        I know what I'm looking for - show me the quick reference
                      </p>
                      <div className="flex items-center text-sm text-accent">
                        Browse index
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>

              <Link href="/docs/diagrams/table-of-contents">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer group border-border/50 hover:border-primary/50">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">Complete Navigation</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        I want the full table of contents with all resources
                      </p>
                      <div className="flex items-center text-sm text-primary">
                        View all
                        <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Card>
              </Link>
            </div>
          </Card>

          {/* The 10 Diagrams */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">📊 The 10 Diagrams</h2>
            <p className="text-muted-foreground mb-6">Here's what's available (click to jump directly):</p>
            <div className="space-y-4">
              <Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">1</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">User Deposit & Withdrawal ⭐</h3>
                      <p className="text-sm text-muted-foreground">Alice deposits $10k, gets shares, withdraws anytime</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">2</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Yield Generation & Distribution ⭐</h3>
                      <p className="text-sm text-muted-foreground">Bob's deposit earns yield, split 60/40 between growth and donation</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">3</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Multi-Strategy Vault</h3>
                      <p className="text-sm text-muted-foreground">Carol manages $1M across 4 different strategies</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-accent/10 text-accent border-accent/20">4</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Yield Donating Strategy 🔧</h3>
                      <p className="text-sm text-muted-foreground">How Aave lending donates profit by minting shares</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-accent/10 text-accent border-accent/20">5</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Yield Skimming Strategy 🔧</h3>
                      <p className="text-sm text-muted-foreground">How stETH appreciation is captured and donated</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">6</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Dragon Router & Allocation ⭐</h3>
                      <p className="text-sm text-muted-foreground">How yield flows from strategies to projects</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">7</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Quadratic Funding Vote ⭐</h3>
                      <p className="text-sm text-muted-foreground">How democratic voting prevents whale dominance</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-8-proposal-lifecycle">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">8</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Proposal Lifecycle</h3>
                      <p className="text-sm text-muted-foreground">From proposal creation to project receiving funds</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-9-lockup-rage-quit-mechanism">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-primary/10 text-primary border-primary/20">9</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Lockup & Rage Quit</h3>
                      <p className="text-sm text-muted-foreground">How lockups work and emergency exit mechanism</p>
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="/docs/diagrams/visual-guide#diagram-10-trader-dca-mechanism">
                <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                  <div className="flex items-start gap-3">
                    <Badge className="bg-accent/10 text-accent border-accent/20">10</Badge>
                    <div>
                      <h3 className="font-semibold mb-1">Trader DCA 🔧</h3>
                      <p className="text-sm text-muted-foreground">Random-timing token conversion with anti-manipulation</p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </Card>

          {/* Choose Your Path */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">🎓 Choose Your Path</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Path 1: I'm New to Octant</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Perfect for end users who want to understand the basics. (~20 min)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Diagram 1: Deposits (3 min)</li>
                  <li>Diagram 2: Yield (3 min)</li>
                  <li>Diagram 7: Voting (8 min)</li>
                  <li>Diagram 9: Lockups (6 min) <em>optional</em></li>
                </ol>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Code2 className="h-5 w-5 text-accent" />
                  </div>
                  <h3 className="text-xl font-bold">Path 2: I'm a Developer</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Perfect for building strategies or integrating Octant. (~60 min)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Diagrams 1-2: Basics (5 min review)</li>
                  <li>Diagram 3: Vault Architecture (5 min)</li>
                  <li>Diagram 4: Yield Donating (7 min)</li>
                  <li>Diagram 5: Yield Skimming (7 min)</li>
                  <li>Diagram 6: Dragon Router (5 min)</li>
                </ol>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Path 3: I'm a Project/DAO</h3>
                </div>
                <p className="text-sm text-muted-foreground mb-4">Perfect for organizations seeking funding. (~30 min)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Diagram 2: Yield Overview (3 min)</li>
                  <li>Diagram 6: Dragon Router (5 min)</li>
                  <li>Diagram 7: Quadratic Funding (8 min)</li>
                  <li>Diagram 8: Proposal Process (5 min)</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* What Makes This Special */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">✨ What Makes This Special</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Narrative-Driven</h3>
                  <p className="text-sm text-muted-foreground">Not just boxes - tells a story</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Character-Based</h3>
                  <p className="text-sm text-muted-foreground">Alice, Bob, Carol make it relatable</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Comprehensive</h3>
                  <p className="text-sm text-muted-foreground">Covers the entire protocol</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Multi-Audience</h3>
                  <p className="text-sm text-muted-foreground">For users, developers, and governance</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Production-Ready</h3>
                  <p className="text-sm text-muted-foreground">Use immediately in your portal</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="text-2xl">✅</div>
                <div>
                  <h3 className="font-semibold mb-1">Maintainable</h3>
                  <p className="text-sm text-muted-foreground">Plain text Mermaid (not images)</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Ready to Start */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-4">🎉 You're Ready!</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Choose your starting point and dive into the Octant v2 protocol:
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/docs/diagrams/visual-guide">
                <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  View All Diagrams
                </button>
              </Link>
              <Link href="/docs/diagrams/diagram-index">
                <button className="px-6 py-3 bg-accent text-accent-foreground rounded-lg font-semibold hover:bg-accent/90 transition-colors">
                  Quick Index
                </button>
              </Link>
              <Link href="/docs/diagrams/table-of-contents">
                <button className="px-6 py-3 border border-border rounded-lg font-semibold hover:bg-muted transition-colors">
                  Table of Contents
                </button>
              </Link>
            </div>
          </Card>
        </motion.div>
      </div>
    </DocsLayoutNew>
  );
}
