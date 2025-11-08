import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function TableOfContents() {
  return (
    <DocsLayoutNew>
      <div className="space-y-12">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Complete Navigation
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Table of Contents
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Complete navigation organized by diagram number, role, learning goal, complexity level, and topic.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Main Navigation */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">📚 Main Navigation</h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link href="/docs/diagrams/start-here">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <h3 className="text-xl font-bold mb-2">Start Here</h3>
                  <p className="text-sm text-muted-foreground">Entry point for the diagram system</p>
                </Card>
              </Link>
              <Link href="/docs/diagrams/visual-guide">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <h3 className="text-xl font-bold mb-2">Visual Guide</h3>
                  <p className="text-sm text-muted-foreground">All 10 diagrams in one place</p>
                </Card>
              </Link>
              <Link href="/docs/diagrams/diagram-index">
                <Card className="p-6 hover:shadow-lg transition-all cursor-pointer border-border/50 hover:border-primary/50">
                  <h3 className="text-xl font-bold mb-2">Diagram Index</h3>
                  <p className="text-sm text-muted-foreground">Quick reference table</p>
                </Card>
              </Link>
            </div>
          </Card>

          {/* All 10 Diagrams */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">📊 All 10 Diagrams</h2>
            <div className="space-y-6">
              {/* Core User Flows */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Core User Flows</h3>
                <div className="space-y-3">
                  <Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">1</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Basic User Deposit & Withdrawal Flow</h4>
                          <p className="text-sm text-muted-foreground mb-2">Alice deposits $10,000 USDC, receives vault shares, and can withdraw anytime</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐ Easy</Badge>
                            <Badge variant="outline" className="text-xs">End Users</Badge>
                            <Badge variant="outline" className="text-xs">5 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">2</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Yield Generation & Distribution Flow</h4>
                          <p className="text-sm text-muted-foreground mb-2">Bob's $50,000 deposit earns yield, split 60/40 between compounding and donations</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐ Easy</Badge>
                            <Badge variant="outline" className="text-xs">End Users</Badge>
                            <Badge variant="outline" className="text-xs">5 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Vault & Strategy Management */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Vault & Strategy Management</h3>
                <div className="space-y-3">
                  <Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">3</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Multi-Strategy Vault Allocation</h4>
                          <p className="text-sm text-muted-foreground mb-2">Carol manages a $1M vault across 4 different strategies with varying risk profiles</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                            <Badge variant="outline" className="text-xs">Vault Managers</Badge>
                            <Badge variant="outline" className="text-xs">10 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Yield Mechanisms */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Yield Mechanisms</h3>
                <div className="space-y-3">
                  <Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy">
                    <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-accent/10 text-accent border-accent/20">4</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Yield Donating Strategy (Discrete Profits)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Aave lending strategy earns discrete profits and mints shares to Dragon Router</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐⭐ Advanced</Badge>
                            <Badge variant="outline" className="text-xs">Developers</Badge>
                            <Badge variant="outline" className="text-xs">15 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy">
                    <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-accent/10 text-accent border-accent/20">5</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Yield Skimming Strategy (Appreciating Assets)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Liquid staking tokens (stETH, mETH) appreciate and strategy skims the yield</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐⭐ Advanced</Badge>
                            <Badge variant="outline" className="text-xs">Developers</Badge>
                            <Badge variant="outline" className="text-xs">15 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Governance & Allocation */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-primary">Governance & Allocation</h3>
                <div className="space-y-3">
                  <Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">6</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Dragon Router & Allocation Flow</h4>
                          <p className="text-sm text-muted-foreground mb-2">Yield flows from strategies through Dragon Router to projects via voting</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                            <Badge variant="outline" className="text-xs">Everyone</Badge>
                            <Badge variant="outline" className="text-xs">10 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">7</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Quadratic Funding Vote & Distribution</h4>
                          <p className="text-sm text-muted-foreground mb-2">Democratic voting system that amplifies small donors and reduces whale dominance</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                            <Badge variant="outline" className="text-xs">Voters</Badge>
                            <Badge variant="outline" className="text-xs">15 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/docs/diagrams/visual-guide#diagram-8-proposal-lifecycle">
                    <div className="p-4 border border-border rounded-lg hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">8</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Proposal Lifecycle (Create → Vote → Queue → Redeem)</h4>
                          <p className="text-sm text-muted-foreground mb-2">Complete project funding workflow from proposal submission to receiving funds</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                            <Badge variant="outline" className="text-xs">Projects</Badge>
                            <Badge variant="outline" className="text-xs">10 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              {/* Advanced Features */}
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-accent">Advanced Features</h3>
                <div className="space-y-3">
                  <Link href="/docs/diagrams/visual-guide#diagram-9-lockup-rage-quit-mechanism">
                    <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-primary/10 text-primary border-primary/20">9</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Lockup & Rage Quit Mechanism</h4>
                          <p className="text-sm text-muted-foreground mb-2">David locks funds for 6 months, then uses emergency exit to withdraw over 90 days</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐ Moderate</Badge>
                            <Badge variant="outline" className="text-xs">Long-term Users</Badge>
                            <Badge variant="outline" className="text-xs">10 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link href="/docs/diagrams/visual-guide#diagram-10-trader-dca-mechanism">
                    <div className="p-4 border border-border rounded-lg hover:border-accent/50 transition-colors cursor-pointer">
                      <div className="flex items-start gap-3">
                        <Badge className="bg-accent/10 text-accent border-accent/20">10</Badge>
                        <div className="flex-1">
                          <h4 className="font-semibold mb-1">Trader DCA (Dollar-Cost Averaging) Mechanism</h4>
                          <p className="text-sm text-muted-foreground mb-2">Random-timing token conversion (USDC → GLM) with anti-manipulation features</p>
                          <div className="flex gap-2 flex-wrap">
                            <Badge variant="outline" className="text-xs">⭐⭐⭐ Advanced</Badge>
                            <Badge variant="outline" className="text-xs">Protocol Ops</Badge>
                            <Badge variant="outline" className="text-xs">15 min</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommended Learning Paths */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">🎓 Recommended Learning Paths</h2>
            <div className="space-y-4">
              <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">🌟 Path 1: New to Octant (20 min)</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for end users who want to understand the basics</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Diagram 1: Deposits (3 min)</li>
                  <li>Diagram 2: Yield (3 min)</li>
                  <li>Diagram 7: Voting (8 min)</li>
                  <li>Diagram 9: Lockups (6 min) - optional</li>
                </ol>
              </div>

              <div className="p-6 border border-accent/20 rounded-lg bg-accent/5">
                <h3 className="text-xl font-semibold mb-3">💻 Path 2: Developer (60 min)</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for building strategies or integrating Octant</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Diagrams 1-2: Basics (5 min review)</li>
                  <li>Diagram 3: Vault Architecture (5 min)</li>
                  <li>Diagram 4: Yield Donating (7 min)</li>
                  <li>Diagram 5: Yield Skimming (7 min)</li>
                  <li>Diagram 6: Dragon Router (5 min)</li>
                  <li>Diagram 10: Trading (8 min) - optional</li>
                </ol>
              </div>

              <div className="p-6 border border-primary/20 rounded-lg bg-primary/5">
                <h3 className="text-xl font-semibold mb-3">🏛️ Path 3: Project/DAO (30 min)</h3>
                <p className="text-sm text-muted-foreground mb-4">Perfect for organizations seeking funding</p>
                <ol className="list-decimal list-inside space-y-2 text-sm">
                  <li>Diagram 2: Yield Overview (3 min)</li>
                  <li>Diagram 6: Dragon Router (5 min)</li>
                  <li>Diagram 7: Quadratic Funding (8 min)</li>
                  <li>Diagram 8: Proposal Process (5 min)</li>
                </ol>
              </div>
            </div>
          </Card>

          {/* Stats */}
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
            <h2 className="text-3xl font-bold mb-6">📈 Stats</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">10</div>
                <div className="text-sm text-muted-foreground">Total Diagrams</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">60</div>
                <div className="text-sm text-muted-foreground">Minutes (all diagrams)</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">90%</div>
                <div className="text-sm text-muted-foreground">Protocol Coverage</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-accent mb-2">3</div>
                <div className="text-sm text-muted-foreground">Diagram Types</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DocsLayoutNew>
  );
}
