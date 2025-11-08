import { motion } from 'framer-motion';
import { User, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, LogOut, Award } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function AliceDay90() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Time to Exit */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center mb-4">
              <LogOut className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Alice's Journey - Day 90</h2>
            <p className="text-lg text-muted-foreground">Retail Investor • Risk-Aware • Looking for predictable yield</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Alice Decides to Withdraw Everything
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            After 90 days, she's ready to cash out.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Alice has held her position for 90 days. The vault has continued earning, and multiple profit reports have increased the NAV.
            </p>

            {/* Current Vault State */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Current Vault State</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Total Assets</div>
                  <div className="text-2xl font-bold">15,200 DAI</div>
                  <div className="text-sm text-muted-foreground">Alice + Bob + yield</div>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Alice's Shares</div>
                  <div className="text-2xl font-bold">10,000</div>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Total Shares</div>
                  <div className="text-2xl font-bold">14,979.57</div>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Share Price</div>
                  <div className="text-2xl font-bold">~1.0147 DAI</div>
                </div>
              </div>
            </div>

            {/* Alice's Calculation */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-500 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Alice's Expected Withdrawal</h3>
              <div className="p-4 bg-white/50 dark:bg-black/20 rounded mb-4">
                <div className="text-sm text-muted-foreground mb-2">Formula</div>
                <div className="font-mono text-lg">assets = (shares / totalShares) × totalAssets</div>
              </div>
              <div className="p-4 bg-white/50 dark:bg-black/20 rounded mb-6">
                <div className="text-sm text-muted-foreground mb-2">Calculation</div>
                <div className="font-mono text-xl">(10,000 / 14,979.57) × 15,200 = 10,147 DAI</div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded text-center">
                  <div className="text-sm text-muted-foreground">Initial Deposit</div>
                  <div className="text-3xl font-bold">10,000 DAI</div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded text-center border-2 border-green-500">
                  <div className="text-sm text-muted-foreground">Total Profit</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">+147 DAI</div>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded text-center">
                  <div className="text-sm text-muted-foreground">Return (90 days)</div>
                  <div className="text-2xl font-bold">1.47%</div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded text-center border-2 border-green-500">
                  <div className="text-sm text-muted-foreground">Annualized APY</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">~5.88%</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Exceeded Target
              </h4>
              <p>
                Alice's ~5.88% APY beats her original TradFi alternatives (3-4% bonds/savings).
              </p>
            </div>
          </div>
        </section>

        {/* Scene 2: Executing redeem() */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            The Withdrawal Transaction
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Burning shares, returning assets.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-bl">
                AliceWithdraw.sol
              </div>
              <pre className="p-6 bg-muted rounded-lg overflow-x-auto border-2 border-border">
                <code className="text-sm">{`// Alice redeems all her shares
uint256 assetsReceived = vault.redeem(
    10_000 * 1e18,  // shares to burn
    alice,          // receiver
    alice,          // owner
    0,              // maxLoss (0 = no loss accepted)
    new address[](0) // no custom strategies
);

// Result: assetsReceived = 10,147 DAI
// Alice's wallet: +10,147 DAI
// Vault total shares: 14,979.57 → 4,979.57 (Alice's burned)
// Bob now owns 100% of remaining vault`}</code>
              </pre>
            </div>

            {/* Behind the Scenes */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Behind the Scenes</h3>
              <div className="space-y-4">
                {[
                  {
                    step: 1,
                    action: "Vault calculates assets owed",
                    detail: "(10,000 / 14,979.57) × 15,200 = 10,147 DAI"
                  },
                  {
                    step: 2,
                    action: "Vault calls withdraw() on each strategy proportionally",
                    detail: "Lido: ~40%, Morpho: ~40%, Sky: ~20% of 10,147"
                  },
                  {
                    step: 3,
                    action: "Strategies unwind positions from protocols",
                    detail: "Lido unstakes ETH, Morpho withdraws from lending, Sky exits DSR"
                  },
                  {
                    step: 4,
                    action: "Strategies return DAI to vault",
                    detail: "Total: 10,147 DAI accumulated in vault"
                  },
                  {
                    step: 5,
                    action: "Vault burns Alice's 10,000 shares",
                    detail: "Reduces totalSupply: 14,979.57 → 4,979.57"
                  },
                  {
                    step: 6,
                    action: "Vault transfers 10,147 DAI to Alice",
                    detail: "Alice receives her principal + profits"
                  }
                ].map((item) => (
                  <div key={item.step} className="p-4 bg-muted rounded">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                        {item.step}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold mb-1">{item.action}</h4>
                        <p className="text-sm text-muted-foreground">{item.detail}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-lg mb-2">Pro-Rata Withdrawal</h4>
              <p>
                Vault pulls funds from each strategy proportionally to maintain allocation balance for remaining users.
              </p>
            </div>
          </div>
        </section>

        {/* Scene 3: Final Accounting */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Alice's Complete Journey
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            90 days of DeFi yield generation.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Final Results */}
            <div className="p-8 bg-gradient-to-br from-amber-50 to-yellow-50 dark:from-amber-950/20 dark:to-yellow-950/20 border-2 border-amber-500 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <Award className="w-12 h-12 text-amber-600 dark:text-amber-400" />
                <h3 className="text-3xl font-bold">Alice's Results</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded">
                  <div className="text-sm text-muted-foreground">Initial Deposit (Day 1)</div>
                  <div className="text-2xl font-bold">10,000 DAI</div>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded">
                  <div className="text-sm text-muted-foreground">Final Withdrawal (Day 90)</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">10,147 DAI</div>
                </div>
                <div className="p-4 bg-green-100 dark:bg-green-900/30 rounded border-2 border-green-500">
                  <div className="text-sm text-muted-foreground">Total Profit</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">+147 DAI</div>
                  <div className="text-sm text-green-600 dark:text-green-400">1.47%</div>
                </div>
                <div className="p-4 bg-white/50 dark:bg-black/20 rounded">
                  <div className="text-sm text-muted-foreground">Time Period</div>
                  <div className="text-2xl font-bold">90 days</div>
                  <div className="text-sm text-muted-foreground">Quarter</div>
                </div>
                <div className="p-4 bg-amber-100 dark:bg-amber-900/30 rounded border-2 border-amber-500 col-span-1 md:col-span-2">
                  <div className="text-sm text-muted-foreground text-center">Annualized Return</div>
                  <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 text-center">~5.88% APY</div>
                  <div className="text-sm text-amber-600 dark:text-amber-400 text-center">Beats TradFi alternatives</div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-bold">Option</th>
                    <th className="text-center p-4 font-bold">Initial</th>
                    <th className="text-center p-4 font-bold">After 90 Days</th>
                    <th className="text-center p-4 font-bold">Profit</th>
                    <th className="text-center p-4 font-bold">APY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">Bank Savings (0.5%)</td>
                    <td className="text-center p-4">10,000</td>
                    <td className="text-center p-4">10,012</td>
                    <td className="text-center p-4">12</td>
                    <td className="text-center p-4">0.5%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Money Market (3%)</td>
                    <td className="text-center p-4">10,000</td>
                    <td className="text-center p-4">10,074</td>
                    <td className="text-center p-4">74</td>
                    <td className="text-center p-4">3.0%</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">High-Yield Savings (4%)</td>
                    <td className="text-center p-4">10,000</td>
                    <td className="text-center p-4">10,099</td>
                    <td className="text-center p-4">99</td>
                    <td className="text-center p-4">4.0%</td>
                  </tr>
                  <tr className="bg-green-50 dark:bg-green-950/20 border-2 border-green-500">
                    <td className="p-4 font-bold">Octant Vault (actual)</td>
                    <td className="text-center p-4 font-bold">10,000</td>
                    <td className="text-center p-4 font-bold text-green-600 dark:text-green-400">10,147</td>
                    <td className="text-center p-4 font-bold text-green-600 dark:text-green-400">147</td>
                    <td className="text-center p-4 font-bold text-green-600 dark:text-green-400">5.88%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Alice's Reflections */}
            <div className="p-8 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Alice's Reflections</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-lg mb-3 text-green-600 dark:text-green-400">Positives</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Beat TradFi alternatives by 2-3x</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Transparent reporting gave confidence</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Diversified strategies reduced risk</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>Withdrawal was smooth and immediate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span>No micromanagement required</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-3 text-amber-600 dark:text-amber-400">Concerns</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠️</span>
                      <span>Gas fees (~$15 total across deposit/withdraw)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠️</span>
                      <span>Learning curve for wallet/DeFi concepts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-500 flex-shrink-0">⚠️</span>
                      <span>Smart contract risk (mitigated by audits)</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded text-center">
                <p className="font-bold">
                  Plans to redeposit after evaluating Q2 DeFi yields. Considering increasing position to $25k.
                </p>
              </div>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Alice's 90-day journey: 10,000 → 10,147 DAI</li>
                <li>5.88% APY beats traditional alternatives</li>
                <li>Professional management delivered results without user intervention</li>
                <li>Successful DeFi onboarding experience for TradFi professional</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scene 4: Vault Continues with Bob */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Bob Now Sole Vault Participant
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            The vault continues operating seamlessly.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Bob's New Position */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Bob's New Position</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground">Total Assets</div>
                  <div className="text-2xl font-bold">5,053 DAI</div>
                  <div className="text-sm text-muted-foreground">15,200 - 10,147 withdrawn</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground">Bob's Shares</div>
                  <div className="text-2xl font-bold">4,979.57</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded text-center">
                  <div className="text-sm text-muted-foreground">Ownership</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">100%</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground">Share Price</div>
                  <div className="text-2xl font-bold">~1.0147 DAI</div>
                </div>
              </div>
              <p className="mt-4 text-center text-muted-foreground">
                Bob continues earning from the strategies Alice helped fund
              </p>
            </div>

            <div className="p-6 bg-muted rounded">
              <h4 className="font-bold text-lg mb-3">The vault continues operating:</h4>
              <ul className="space-y-2 list-disc list-inside">
                <li>Strategies remain deployed in Lido, Morpho, Sky</li>
                <li>Periodic reports continue</li>
                <li>Bob earns proportional profits</li>
                <li>New users can join anytime</li>
                <li>Same protections apply</li>
              </ul>
            </div>

            {/* TradFi Analogy */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">Like a Mutual Fund</h3>
              <p className="text-lg">
                When you redeem mutual fund shares, the fund continues for other investors. Your exit doesn't shut down the fund. 
                Octant vaults work the same way—designed for continuous operation with users entering and exiting over time.
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-lg mb-2">Vault Lifecycle</h4>
              <p>
                Vaults are designed to operate indefinitely with users joining and leaving continuously. No minimum participants required.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Alice's withdrawal doesn't affect vault operations</li>
                <li>Bob continues earning with same strategy exposure</li>
                <li>Vault designed for continuous multi-user operation</li>
                <li>Each user's journey is independent</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
