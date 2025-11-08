import { motion } from 'framer-motion';
import { User, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, Activity, Calendar } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function AliceDay40() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Alice Queries the Vault */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center mb-4">
              <Activity className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Alice's Journey - Day 40</h2>
            <p className="text-lg text-muted-foreground">Retail Investor • Risk-Aware • Looking for predictable yield</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Checking Position After 40 Days
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Profits now fully unlocked.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              10 days have passed since the profit report. Alice wants to confirm her position. 
              She calls <code className="px-2 py-1 bg-muted rounded">convertToAssets()</code> or checks the dashboard UI.
            </p>

            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-bl">
                CheckBalance.sol
              </div>
              <pre className="p-6 bg-muted rounded-lg overflow-x-auto border-2 border-border">
                <code className="text-sm">{`// Alice checks her balance
uint256 shares = vault.balanceOf(alice);  // 10,000 shares
uint256 assets = vault.convertToAssets(shares);
// assets = 10,041 DAI

// Share price
uint256 pricePerShare = assets / shares;
// pricePerShare = 1.0041 DAI per share`}</code>
              </pre>
            </div>

            {/* Dashboard View */}
            <div className="p-8 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Alice's Dashboard</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Shares Owned</div>
                  <div className="text-3xl font-bold">10,000</div>
                  <div className="text-sm text-muted-foreground mt-1">→ Unchanged</div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Current Value</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">10,041 DAI</div>
                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">+0.41%</div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded">
                  <div className="text-sm text-muted-foreground mb-1">Profit (Unlocked)</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">41 DAI</div>
                  <div className="text-sm text-green-600 dark:text-green-400 mt-1">100% available</div>
                </div>

                <div className="p-4 bg-muted rounded">
                  <div className="text-sm text-muted-foreground mb-1">Time Held</div>
                  <div className="text-3xl font-bold">40 days</div>
                  <div className="text-sm text-muted-foreground mt-1">→ Ongoing</div>
                </div>

                <div className="p-4 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-500 rounded col-span-1 md:col-span-2">
                  <div className="text-sm text-muted-foreground mb-1">Annualized APY</div>
                  <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">~3.73%</div>
                  <div className="text-sm text-blue-600 dark:text-blue-400 mt-1">Projected</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Fully Unlocked
              </h4>
              <p>
                All 41 DAI profit is now available for withdrawal. No more unlock restrictions.
              </p>
            </div>
          </div>
        </section>

        {/* Scene 2: Strategy Allocations Remain Active */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Capital Still Deployed and Earning
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Strategies continue generating yield.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Current Strategy Positions */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Current Strategy Positions</h3>
              <div className="space-y-4">
                <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">Lido</h4>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Allocated</div>
                      <div className="text-2xl font-bold">4,013 DAI</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current APY</div>
                      <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">4.1%</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">Morpho</h4>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Allocated</div>
                      <div className="text-2xl font-bold">4,020 DAI</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current APY</div>
                      <div className="text-2xl font-bold text-green-600 dark:text-green-400">6.2%</div>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-amber-50 dark:bg-amber-950/20 border-l-4 border-amber-500 rounded">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="text-xl font-bold">Sky</h4>
                    <span className="px-3 py-1 bg-green-500 text-white text-sm font-bold rounded">Active</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-muted-foreground">Allocated</div>
                      <div className="text-2xl font-bold">2,008 DAI</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-muted-foreground">Current APY</div>
                      <div className="text-2xl font-bold text-amber-600 dark:text-amber-400">5.1%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <p>
              Strategies continue working. The next profit report (likely Day 60) will capture another 30 days of yield. 
              Alice's vault shares will continue appreciating.
            </p>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Profits fully unlocked after 10-day period</li>
                <li>Strategies remain deployed and earning</li>
                <li>Alice can withdraw anytime (receives proportional assets)</li>
                <li>Next reporting cycle already underway</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scene 3: Alice Plans Her Next Move */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Hold or Withdraw?
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Alice decides to hold until Day 90.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Decision Factors */}
            <div className="p-8 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-6 text-center">Alice's Considerations</h3>
              <div className="space-y-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Performance</h4>
                      <p className="text-sm text-muted-foreground">
                        0.41% in 30 days = ~4.92% APY annualized, beating her target
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Risk</h4>
                      <p className="text-sm text-muted-foreground">
                        Three-protocol diversification working as expected
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Liquidity Needs</h4>
                      <p className="text-sm text-muted-foreground">
                        Can let it compound for another 50 days
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1">Market Conditions</h4>
                      <p className="text-sm text-muted-foreground">
                        DeFi yields remain attractive vs TradFi alternatives
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20 border-2 border-blue-500 rounded-lg text-center">
              <Calendar className="w-16 h-16 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
              <h3 className="text-2xl font-bold mb-4">Alice's Decision</h3>
              <p className="text-lg">
                Alice decides to hold until Day 90 to capture a full quarter of yield. 
                She sets a calendar reminder to review her position then.
              </p>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Passive Management
              </h4>
              <p>
                Alice's only action: monitor dashboard occasionally. Vault manager handles everything else.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Alice's strategy: hold for longer-term compounding</li>
                <li>No action required beyond periodic monitoring</li>
                <li>Professional management handles rebalancing automatically</li>
                <li>Plans to withdraw on Day 90 after full quarter</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
