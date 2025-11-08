import { motion } from 'framer-motion';
import { BookOpen, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, ArrowRight, Calendar } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { Link } from 'wouter';

export default function VaultSystemSummary() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Header */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-4">
              <BookOpen className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Vault System Summary</h2>
            <p className="text-lg text-muted-foreground">Complete Journey Recap</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Vault System: Complete Journey Recap
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Consolidating everything learned from Alice's 90-day experience
          </p>
        </section>

        {/* Quick Reference Card */}
        <div className="p-8 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-950/20 dark:to-purple-950/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-lg">
          <h3 className="text-2xl font-bold mb-6 text-center">Vault System Quick Reference</h3>
          <div className="space-y-3">
            <p><strong>Purpose:</strong> Generate yield from DeFi protocols with professional management</p>
            <p><strong>User Flow:</strong> Deposit → Receive shares → Manager allocates → Earn yield → Withdraw</p>
            <p><strong>Key Innovation:</strong> Multi-strategy diversification in single deposit</p>
            <p><strong>Security:</strong> ERC-4626 standard, profit locks, role-based access</p>
            <p><strong>Liquidity:</strong> Withdraw anytime (subject to strategy liquidity)</p>
            <p><strong>Target APY:</strong> 5-7% on stablecoins (varies with DeFi market rates)</p>
          </div>
        </div>

        {/* Timeline */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">The Complete Vault Journey</h2>
          <p className="text-xl text-center text-muted-foreground">Alice's 90-Day Timeline</p>

          <div className="space-y-4">
            {[
              { day: "Day 1", event: "Alice deposits 10,000 DAI, receives 10,000 shares", link: "/tradfi-tutorials/alice-day1" },
              { day: "Day 2", event: "Manager allocates to Lido/Morpho/Sky (40/40/20)", link: "/tradfi-tutorials/alice-day2" },
              { day: "Day 30", event: "First profit report: +41 DAI (locked for 10 days)", link: "/tradfi-tutorials/alice-day30" },
              { day: "Day 40", event: "Profits unlocked, Alice checks balance: 10,041 DAI", link: "/tradfi-tutorials/alice-day40" },
              { day: "Day 45", event: "Bob joins with 5,000 DAI", link: "/tradfi-tutorials/alice-day45" },
              { day: "Day 90", event: "Alice withdraws everything: 10,147 DAI", link: "/tradfi-tutorials/alice-day90" }
            ].map((milestone, index) => (
              <Link key={index} href={milestone.link}>
                <div className="p-6 bg-card border-2 border-border rounded-lg hover:border-primary transition-colors cursor-pointer">
                  <div className="flex items-start gap-4">
                    <div className="w-20 flex-shrink-0">
                      <div className="px-3 py-1 bg-primary text-primary-foreground rounded font-bold text-center">
                        {milestone.day}
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-lg">{milestone.event}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground flex-shrink-0 mt-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Key Mechanisms */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Key Mechanisms Explained</h2>

          <div className="space-y-4">
            {[
              {
                mechanism: "ERC-4626 Share Calculation",
                formula: "shares = (assets × totalShares) / totalAssets",
                purpose: "Fair pricing for deposits at current NAV"
              },
              {
                mechanism: "Multi-Strategy Allocation",
                formula: "vault.updateDebt(strategy, amount)",
                purpose: "Diversify risk across multiple DeFi protocols"
              },
              {
                mechanism: "Profit Reporting",
                formula: "vault.processReport(strategy)",
                purpose: "Calculate and lock profits for gradual unlock"
              },
              {
                mechanism: "Profit Unlock Period",
                formula: "PROFIT_MAX_UNLOCK_TIME = 10 days",
                purpose: "Prevent flash deposit attacks"
              },
              {
                mechanism: "Proportional Withdrawal",
                formula: "Pull from each strategy: assets × (strategyDebt / totalDebt)",
                purpose: "Maintain allocation balance for remaining users"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">{item.mechanism}</h3>
                <div className="p-3 bg-muted rounded font-mono text-sm mb-3">
                  {item.formula}
                </div>
                <p className="text-muted-foreground">{item.purpose}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Security Features */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Security Features Highlighted</h2>

          <div className="p-8 bg-card border-2 border-border rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "ERC-4626 standard compliance (ecosystem compatibility)",
                "Multi-strategy diversification (reduced protocol risk)",
                "Profit lock period (flash attack protection)",
                "Role-based access control (only authorized managers allocate)",
                "Strategy debt limits (prevent overallocation)",
                "Proportional withdrawals (maintain vault balance)"
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-950/20 rounded">
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* When to Use */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">When to Use the Vault System</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                useCase: "Idle Stablecoin Capital",
                scenario: "You have USDC/DAI earning nothing",
                solution: "Deposit in vault for 5-7% APY with professional management"
              },
              {
                useCase: "Risk-Averse Investors",
                scenario: "Want DeFi yields but concerned about protocol risk",
                solution: "Multi-strategy diversification reduces single-protocol exposure"
              },
              {
                useCase: "Passive Income Seekers",
                scenario: "Don't want to manage DeFi positions manually",
                solution: "Vault manager handles everything - just deposit and monitor"
              },
              {
                useCase: "Treasury Management",
                scenario: "DAO/protocol wants yield on idle treasury",
                solution: "Deploy custom vault instance via factory for institutional control"
              }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-primary">{item.useCase}</h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Scenario:</div>
                    <p>{item.scenario}</p>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-muted-foreground mb-1">Solution:</div>
                    <p className="text-green-600 dark:text-green-400">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Functions Reference */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Key Functions Reference</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold">Function</th>
                  <th className="text-left p-4 font-bold">Purpose</th>
                  <th className="text-center p-4 font-bold">Caller</th>
                  <th className="text-center p-4 font-bold">Gas</th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    function: "deposit(assets, receiver)",
                    purpose: "Deposit assets, receive shares at current NAV",
                    caller: "Anyone",
                    gasEstimate: "~150k"
                  },
                  {
                    function: "withdraw(assets, receiver, owner)",
                    purpose: "Burn shares, receive assets",
                    caller: "Share owner",
                    gasEstimate: "~200k"
                  },
                  {
                    function: "redeem(shares, receiver, owner)",
                    purpose: "Burn specific share amount, receive proportional assets",
                    caller: "Share owner",
                    gasEstimate: "~200k"
                  },
                  {
                    function: "updateDebt(strategy, targetDebt)",
                    purpose: "Allocate or withdraw funds from strategy",
                    caller: "DEBT_MANAGER",
                    gasEstimate: "~300k"
                  },
                  {
                    function: "processReport(strategy)",
                    purpose: "Calculate profit/loss, update NAV",
                    caller: "REPORTING_MANAGER",
                    gasEstimate: "~180k"
                  }
                ].map((item, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="p-4 font-mono text-sm">{item.function}</td>
                    <td className="p-4">{item.purpose}</td>
                    <td className="text-center p-4">{item.caller}</td>
                    <td className="text-center p-4 font-mono text-sm">{item.gasEstimate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Next Steps */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Next Steps</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Explore Staking System",
                description: "Learn how the staking system works for governance participation and rewards",
                link: "#"
              },
              {
                title: "System Architecture Diagrams",
                description: "Visual deep-dive into how vault, strategies, and protocols connect",
                link: "/tradfi-tutorials/system-overview-diagram"
              },
              {
                title: "Real-World Scenarios",
                description: "See how different user types (conservative, sophisticated, institutional) use the vault system",
                link: "#"
              },
              {
                title: "Octant Wiki: Yield Strategies",
                description: "Technical deep-dive into strategy implementations and value debt tracking",
                link: "/docs/octant-wiki/yield-strategies/overview"
              }
            ].map((item, index) => (
              <Link key={index} href={item.link}>
                <div className="p-6 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border-2 border-blue-200 dark:border-blue-800 rounded-lg hover:border-blue-500 transition-colors cursor-pointer h-full">
                  <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                    {item.title}
                    <ArrowRight className="w-5 h-5" />
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Final Summary */}
        <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-500 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">🎉 You've Completed the Vault System Tutorial!</h3>
          <p className="text-lg mb-4">
            You now understand how Alice deposited 10,000 DAI, earned 147 DAI over 90 days (5.88% APY), 
            and successfully withdrew—all while the vault manager handled the complex DeFi interactions.
          </p>
          <p className="text-muted-foreground">
            Ready to explore more? Check out the Octant Wiki for technical deep-dives, 
            or browse the Developer Paths for integration guides.
          </p>
        </div>

      </div>
    </DocsLayoutNew>
  );
}
