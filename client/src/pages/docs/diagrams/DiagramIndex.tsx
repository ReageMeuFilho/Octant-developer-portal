import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'wouter';

export default function DiagramIndex() {
  return (
    <DocsLayoutNew>
      <div className="space-y-12">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Quick Reference
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Octant v2 Diagram Index
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Quick reference for all available diagrams. Click to jump directly to any diagram.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* All Diagrams Table */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">📊 All Diagrams (Quick Links)</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold">#</th>
                    <th className="text-left p-3 font-semibold">Diagram</th>
                    <th className="text-left p-3 font-semibold">Narrative Summary</th>
                    <th className="text-left p-3 font-semibold">Complexity</th>
                    <th className="text-left p-3 font-semibold">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">1</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">User Deposit & Withdrawal</td>
                    <td className="p-3 text-sm text-muted-foreground">Alice deposits $10k, gets shares, withdraws anytime</td>
                    <td className="p-3">⭐ Easy</td>
                    <td className="p-3">End Users</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">2</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Yield Generation & Split</td>
                    <td className="p-3 text-sm text-muted-foreground">Bob's $50k earns yield, splits 60/40</td>
                    <td className="p-3">⭐ Easy</td>
                    <td className="p-3">End Users</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">3</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Multi-Strategy Vault</td>
                    <td className="p-3 text-sm text-muted-foreground">Carol manages $1M across 4 strategies</td>
                    <td className="p-3">⭐⭐ Moderate</td>
                    <td className="p-3">Vault Managers</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy">
                        <Badge className="bg-accent/10 text-accent border-accent/20 cursor-pointer">4</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Yield Donating Strategy</td>
                    <td className="p-3 text-sm text-muted-foreground">Aave strategy mints shares to Dragon Router</td>
                    <td className="p-3">⭐⭐⭐ Advanced</td>
                    <td className="p-3">Developers</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy">
                        <Badge className="bg-accent/10 text-accent border-accent/20 cursor-pointer">5</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Yield Skimming Strategy</td>
                    <td className="p-3 text-sm text-muted-foreground">stETH appreciation → diluted shares</td>
                    <td className="p-3">⭐⭐⭐ Advanced</td>
                    <td className="p-3">Developers</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">6</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Dragon Router Flow</td>
                    <td className="p-3 text-sm text-muted-foreground">Yield → Dragon Router → Projects</td>
                    <td className="p-3">⭐⭐ Moderate</td>
                    <td className="p-3">Everyone</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">7</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Quadratic Funding</td>
                    <td className="p-3 text-sm text-muted-foreground">Many small donors &gt; One whale</td>
                    <td className="p-3">⭐⭐ Moderate</td>
                    <td className="p-3">Voters</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-8-proposal-lifecycle">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">8</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Proposal Lifecycle</td>
                    <td className="p-3 text-sm text-muted-foreground">Create → Vote → Queue → Execute</td>
                    <td className="p-3">⭐⭐ Moderate</td>
                    <td className="p-3">Projects</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-9-lockup-rage-quit-mechanism">
                        <Badge className="bg-primary/10 text-primary border-primary/20 cursor-pointer">9</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Lockup & Rage Quit</td>
                    <td className="p-3 text-sm text-muted-foreground">David locks 6 months, emergency exits in 90 days</td>
                    <td className="p-3">⭐⭐ Moderate</td>
                    <td className="p-3">Long-term Users</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-muted/50">
                    <td className="p-3">
                      <Link href="/docs/diagrams/visual-guide#diagram-10-trader-dca-mechanism">
                        <Badge className="bg-accent/10 text-accent border-accent/20 cursor-pointer">10</Badge>
                      </Link>
                    </td>
                    <td className="p-3 font-semibold">Trader DCA</td>
                    <td className="p-3 text-sm text-muted-foreground">Random-timing USDC → GLM conversion</td>
                    <td className="p-3">⭐⭐⭐ Advanced</td>
                    <td className="p-3">Protocol Ops</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* By Role */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">👥 By Role</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-4">End User (I want to deposit and vote)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow" className="hover:text-primary">Diagram 1: Deposit & Withdrawal</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow" className="hover:text-primary">Diagram 2: Yield Flow</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution" className="hover:text-primary">Diagram 7: Voting</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-9-lockup-rage-quit-mechanism" className="hover:text-primary">Diagram 9: Lockups</Link> (if using lockups)</li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Project/DAO (I want to receive funding)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow" className="hover:text-primary">Diagram 6: Dragon Router</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution" className="hover:text-primary">Diagram 7: Voting System</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-8-proposal-lifecycle" className="hover:text-primary">Diagram 8: Proposal Lifecycle</Link></li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Vault Manager (I manage a vault)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow" className="hover:text-primary">Diagram 2: Yield Flow</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation" className="hover:text-primary">Diagram 3: Multi-Strategy Allocation</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy" className="hover:text-primary">Diagram 4: Yield Donating</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy" className="hover:text-primary">Diagram 5: Yield Skimming</Link></li>
                </ol>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Strategy Developer (I build strategies)</h3>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation" className="hover:text-primary">Diagram 3: Vault Architecture</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy" className="hover:text-primary">Diagram 4: Yield Donating Implementation</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy" className="hover:text-primary">Diagram 5: Yield Skimming Implementation</Link></li>
                </ol>
              </div>
            </div>
          </Card>

          {/* By Complexity */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">📈 By Complexity</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">⭐ Easy (Start Here!)</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-1-basic-user-deposit-withdrawal-flow" className="hover:text-primary">Diagram 1: User Deposit & Withdrawal</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-2-yield-generation-distribution-flow" className="hover:text-primary">Diagram 2: Yield Generation</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">⭐⭐ Moderate</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-3-multi-strategy-vault-allocation" className="hover:text-primary">Diagram 3: Multi-Strategy Vault</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-6-dragon-router-allocation-flow" className="hover:text-primary">Diagram 6: Dragon Router</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-7-quadratic-funding-vote-distribution" className="hover:text-primary">Diagram 7: Quadratic Funding</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-8-proposal-lifecycle" className="hover:text-primary">Diagram 8: Proposal Lifecycle</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-9-lockup-rage-quit-mechanism" className="hover:text-primary">Diagram 9: Lockup & Rage Quit</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">⭐⭐⭐ Advanced (For Developers)</h3>
                <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/docs/diagrams/visual-guide#diagram-4-yield-donating-strategy" className="hover:text-primary">Diagram 4: Yield Donating Strategy</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-5-yield-skimming-strategy" className="hover:text-primary">Diagram 5: Yield Skimming Strategy</Link></li>
                  <li><Link href="/docs/diagrams/visual-guide#diagram-10-trader-dca-mechanism" className="hover:text-primary">Diagram 10: Trader DCA</Link></li>
                </ul>
              </div>
            </div>
          </Card>

          {/* Learning Paths */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">🔄 Learning Paths</h2>
            <div className="space-y-6">
              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Path 1: Complete Beginner</h3>
                <p className="text-sm text-muted-foreground mb-4">Goal: Understand Octant from user perspective (~30 minutes)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Basic Deposit & Withdrawal (5 min)</li>
                  <li>Yield Generation (5 min)</li>
                  <li>Voting System (10 min)</li>
                </ol>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Path 2: DeFi User</h3>
                <p className="text-sm text-muted-foreground mb-4">Goal: Understand advanced features (~30 minutes)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Skim Diagrams 1-2 (quick review)</li>
                  <li>Multi-Strategy Vault (10 min)</li>
                  <li>Dragon Router Flow (10 min)</li>
                  <li>Lockup & Rage Quit (10 min)</li>
                </ol>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Path 3: Developer</h3>
                <p className="text-sm text-muted-foreground mb-4">Goal: Understand architecture and build strategies (~90 minutes)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>User Flow (quick review)</li>
                  <li>Multi-Strategy Architecture (15 min)</li>
                  <li>Yield Donating Strategy (20 min)</li>
                  <li>Yield Skimming Strategy (20 min)</li>
                  <li>Dragon Router Integration (15 min)</li>
                </ol>
              </div>

              <div className="p-6 border border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">Path 4: Project/DAO Treasury</h3>
                <p className="text-sm text-muted-foreground mb-4">Goal: Understand how to receive funding (~45 minutes)</p>
                <ol className="list-decimal list-inside space-y-2 text-sm text-muted-foreground">
                  <li>Yield Flow Overview (5 min)</li>
                  <li>Dragon Router & Allocation (10 min)</li>
                  <li>Quadratic Funding Mechanics (15 min)</li>
                  <li>Proposal Lifecycle (15 min)</li>
                </ol>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DocsLayoutNew>
  );
}
