import { motion } from 'framer-motion';
import { User, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, AlertTriangle, Clock } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function AliceDay30() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: 30 Days of Yield Accrual */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center mb-4">
              <TrendingUp className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Alice's Journey - Day 30</h2>
            <p className="text-lg text-muted-foreground">Retail Investor • Risk-Aware • Looking for predictable yield</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Strategies Produce Returns
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Lido, Morpho, and Sky each contribute.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              After 30 days, each strategy has generated returns:
            </p>

            <div className="grid grid-cols-1 gap-4">
              <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Lido</h3>
                    <p className="text-muted-foreground">4,000 DAI → 4,013 DAI</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">+13 DAI</div>
                    <div className="text-sm text-muted-foreground">0.33% monthly</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Morpho</h3>
                    <p className="text-muted-foreground">4,000 DAI → 4,020 DAI</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">+20 DAI</div>
                    <div className="text-sm text-muted-foreground">0.5% monthly</div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-bold">Sky</h3>
                    <p className="text-muted-foreground">2,000 DAI → 2,008 DAI</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-500">+8 DAI</div>
                    <div className="text-sm text-muted-foreground">0.42% monthly</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-500 rounded-lg text-center">
              <div className="text-sm text-muted-foreground mb-2">Total Vault Assets</div>
              <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">10,041 DAI</div>
              <div className="text-xl font-semibold text-green-600 dark:text-green-400">Total Profit: +41 DAI</div>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Consistent Returns
              </h4>
              <p>
                All three strategies performing as expected. No anomalies detected.
              </p>
            </div>
          </div>
        </section>

        {/* Scene 2: Manager Triggers Profit Reporting */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Calling processReport()
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Locking profits and updating vault accounting.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              The vault manager (or automated keeper) calls <code className="px-2 py-1 bg-muted rounded">processReport()</code> on each strategy. This function:
            </p>

            <ol className="list-decimal list-inside space-y-2 ml-4">
              <li>Asks strategy: 'How much do you have now?'</li>
              <li>Calculates profit: current - allocated</li>
              <li>Locks profit for PROFIT_MAX_UNLOCK_TIME (10 days)</li>
              <li>Gradually unlocks over time</li>
            </ol>

            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-bl">
                ProcessReport.sol
              </div>
              <pre className="p-6 bg-muted rounded-lg overflow-x-auto border-2 border-border">
                <code className="text-sm">{`// Manager reports each strategy
vault.processReport(address(lidoStrategy));
// Lido reports: 4,013 DAI (profit: 13 DAI)

vault.processReport(address(morphoStrategy));
// Morpho reports: 4,020 DAI (profit: 20 DAI)

vault.processReport(address(skyStrategy));
// Sky reports: 2,008 DAI (profit: 8 DAI)

// Total profit: 41 DAI locked for 10-day unlock period`}</code>
              </pre>
            </div>

            {/* Profit Lock Mechanism */}
            <div className="p-8 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Why Lock Profits for 10 Days?</h3>
              <p className="mb-4">Prevents 'flash deposit' attacks:</p>
              <ol className="list-decimal list-inside space-y-2 ml-4 mb-6">
                <li>Attacker deposits huge amount right before profit report</li>
                <li>Captures profit proportional to deposit</li>
                <li>Immediately withdraws</li>
                <li>Result: Steals value from long-term holders</li>
              </ol>
              <p className="font-bold mb-4">Solution: Lock profits, unlock gradually over 10 days. Rewards long-term participants.</p>
              <div className="p-4 bg-muted rounded font-mono text-sm">
                unlocked_profit(t) = total_profit × min(t, 10 days) / 10 days
              </div>
            </div>

            <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Profit Lock Period
              </h4>
              <p>
                Profits unlock linearly over 10 days. Full value available on Day 40.
              </p>
            </div>
          </div>
        </section>

        {/* Scene 3: Alice's Share Value Increases */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            NAV Update: 10,000 → 10,041 DAI
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Share count stays same, value per share increases.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Alice checks her position:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground">Shares owned</div>
                  <div className="text-2xl font-bold">10,000</div>
                  <div className="text-sm text-muted-foreground">(unchanged)</div>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground">Share value</div>
                  <div className="text-2xl font-bold">1.0041 DAI</div>
                  <div className="text-sm text-green-500">was 1.000</div>
                </div>
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground">Total value</div>
                  <div className="text-2xl font-bold">10,041 DAI</div>
                </div>
                <div className="p-4 bg-green-50 dark:bg-green-950/20 rounded border-2 border-green-500">
                  <div className="text-sm text-muted-foreground">Profit</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">+41 DAI</div>
                  <div className="text-sm text-muted-foreground">0.41% in 30 days ≈ 4.92% APY</div>
                </div>
              </div>
            </div>

            {/* Comparison Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-bold">Metric</th>
                    <th className="text-center p-4 font-bold">Day 1</th>
                    <th className="text-center p-4 font-bold">Day 30</th>
                    <th className="text-center p-4 font-bold">Change</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4">Alice's Shares</td>
                    <td className="text-center p-4">10,000</td>
                    <td className="text-center p-4">10,000</td>
                    <td className="text-center p-4 text-muted-foreground">Unchanged</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Vault Total Assets</td>
                    <td className="text-center p-4">10,000 DAI</td>
                    <td className="text-center p-4">10,041 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+41 DAI</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4">Share Price (NAV)</td>
                    <td className="text-center p-4">1.0000 DAI</td>
                    <td className="text-center p-4">1.0041 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+0.41%</td>
                  </tr>
                  <tr>
                    <td className="p-4">Alice's Value</td>
                    <td className="text-center p-4">10,000 DAI</td>
                    <td className="text-center p-4">10,041 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+41 DAI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* TradFi Analogy */}
            <div className="p-8 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-2xl font-bold mb-4 text-center">The Mutual Fund Analogy</h3>
              <p className="text-lg">
                Like how mutual fund shares stay constant (you own 100 shares) but NAV increases from $100/share → $100.41/share. 
                Your account value grew from $10,000 → $10,041 without buying more shares.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Share COUNT stays constant (10,000)</li>
                <li>Share VALUE increases as vault assets grow</li>
                <li>NAV (Net Asset Value) = Total Assets / Total Shares</li>
                <li>Alice's profit is reflected in increased NAV, not share count</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scene 4: Waiting for Profit Unlock */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            The 10-Day Unlock Schedule
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Why Alice can't withdraw full profit yet.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Unlock Timeline */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Profit Unlock Timeline</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-muted rounded">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-muted-foreground" />
                    <span className="font-bold">Day 30</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">0% unlocked</div>
                    <div className="text-sm text-muted-foreground">10,000 DAI available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="font-bold">Day 32</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">20% unlocked</div>
                    <div className="text-sm text-muted-foreground">10,008 DAI available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-amber-500" />
                    <span className="font-bold">Day 35</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">50% unlocked</div>
                    <div className="text-sm text-muted-foreground">10,020 DAI available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-muted rounded">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-green-500" />
                    <span className="font-bold">Day 38</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold">80% unlocked</div>
                    <div className="text-sm text-muted-foreground">10,033 DAI available</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-bold">Day 40</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-green-600 dark:text-green-400">100% unlocked</div>
                    <div className="text-sm font-bold text-green-600 dark:text-green-400">10,041 DAI available</div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Alice understands the unlock period protects long-term holders like her. She plans to check back on Day 40 when 
              profits are fully available. In the meantime, strategies continue generating yield for the next reporting period.
            </p>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Fair to All
              </h4>
              <p>
                The unlock mechanism ensures flash depositors can't exploit profit reports. Long-term holders are protected.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Profits locked for 10 days (PROFIT_MAX_UNLOCK_TIME)</li>
                <li>Unlocks linearly: 10% per day</li>
                <li>Protects long-term holders from flash deposit attacks</li>
                <li>Strategies continue earning during unlock period</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
