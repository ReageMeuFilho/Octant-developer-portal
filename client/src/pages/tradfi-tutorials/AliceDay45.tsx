import { motion } from 'framer-motion';
import { Users, TrendingUp, Code, CheckCircle, Zap, Shield, DollarSign, UserPlus } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function AliceDay45() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: New Capital Enters */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4">
              <Users className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Alice's Journey - Day 45</h2>
            <p className="text-lg text-muted-foreground">Bob Joins the Vault</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Bob Deposits 5,000 DAI
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Another investor joins the vault.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Bob, attracted by the vault's performance, deposits 5,000 DAI on Day 45. 
              The vault now manages 15,041 DAI total (Alice's 10,041 + Bob's 5,000).
            </p>

            {/* Vault State Before */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Vault State Before Bob's Deposit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Assets</div>
                  <div className="text-2xl font-bold">10,041 DAI</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Shares</div>
                  <div className="text-2xl font-bold">10,000</div>
                  <div className="text-sm text-muted-foreground">(all Alice's)</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Share Price</div>
                  <div className="text-2xl font-bold">1.0041 DAI</div>
                </div>
              </div>
            </div>

            {/* Bob's Deposit */}
            <div className="p-8 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-2 border-green-500 rounded-lg">
              <div className="flex items-center justify-center gap-3 mb-6">
                <UserPlus className="w-12 h-12 text-green-600 dark:text-green-400" />
                <h3 className="text-3xl font-bold">Bob's Deposit</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Amount</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">5,000 DAI</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Share Price</div>
                  <div className="text-2xl font-bold">1.0041 DAI</div>
                </div>
                <div className="text-center">
                  <div className="text-sm text-muted-foreground mb-1">Shares Received</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">4,979.57</div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 rounded">
              <h4 className="font-bold text-lg mb-2">Why Fewer Shares?</h4>
              <p>
                Bob buys shares at current NAV (1.0041 DAI per share), not the original 1.0000. 
                He pays for the accumulated profits.
              </p>
            </div>
          </div>
        </section>

        {/* Scene 2: Share Calculation for Late Joiners */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            ERC-4626 Fair Pricing Formula
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Later depositors pay current NAV.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-bl">
                BobDeposit.sol
              </div>
              <pre className="p-6 bg-muted rounded-lg overflow-x-auto border-2 border-border">
                <code className="text-sm">{`// Current vault state
uint256 totalAssets = 10_041 * 1e18;  // 10,041 DAI
uint256 totalShares = 10_000 * 1e18;  // 10,000 shares

// Bob deposits
uint256 bobDeposit = 5_000 * 1e18;    // 5,000 DAI

// ERC-4626 formula: shares = (assets × totalShares) / totalAssets
uint256 bobShares = (bobDeposit × totalShares) / totalAssets;
// bobShares = (5,000 × 10,000) / 10,041 = 4,979.57 shares

// Result: Bob receives fewer shares because he's buying at premium NAV`}</code>
              </pre>
            </div>

            {/* Understanding the Math */}
            <div className="p-8 bg-card border-2 border-border rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Understanding the Math</h3>
              <p className="mb-4">
                Each share is now worth 1.0041 DAI (not 1.0000). Bob's 5,000 DAI buys:
              </p>
              <div className="p-4 bg-muted rounded font-mono text-center text-xl mb-4">
                5,000 ÷ 1.0041 = 4,979.57 shares
              </div>
              <p className="text-lg">
                This is fair: Alice earned the 41 DAI profit over 40 days. 
                Bob shouldn't get that for free by depositing late.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Late depositors buy shares at current NAV (market price)</li>
                <li>Share calculation: (deposit × totalShares) / totalAssets</li>
                <li>Bob gets fewer shares but same proportional value</li>
                <li>Protects early depositors from dilution</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scene 3: Ownership Distribution */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Alice and Bob's Proportional Stakes
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Who owns what percentage of the vault?
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Vault State After */}
            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4 text-center">Vault State After Bob's Deposit</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Assets</div>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400">15,041 DAI</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Total Shares</div>
                  <div className="text-3xl font-bold">14,979.57</div>
                </div>
                <div className="p-4 bg-muted rounded text-center">
                  <div className="text-sm text-muted-foreground mb-1">Share Price</div>
                  <div className="text-2xl font-bold">1.0041 DAI</div>
                  <div className="text-sm text-muted-foreground">(unchanged)</div>
                </div>
              </div>
            </div>

            {/* Ownership Breakdown */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 bg-blue-50 dark:bg-blue-950/20 border-2 border-blue-500 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Alice</h3>
                <div className="text-5xl font-bold text-blue-600 dark:text-blue-400 mb-2">66.7%</div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shares:</span>
                    <span className="font-bold">10,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Value:</span>
                    <span className="font-bold">10,041 DAI</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    Original depositor, accumulated profits
                  </p>
                </div>
              </div>

              <div className="p-8 bg-green-50 dark:bg-green-950/20 border-2 border-green-500 rounded-lg text-center">
                <h3 className="text-2xl font-bold mb-4">Bob</h3>
                <div className="text-5xl font-bold text-green-600 dark:text-green-400 mb-2">33.3%</div>
                <div className="space-y-2 text-left">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shares:</span>
                    <span className="font-bold">4,979.57</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Value:</span>
                    <span className="font-bold">5,000 DAI</span>
                  </div>
                  <p className="text-sm text-muted-foreground pt-2">
                    New depositor, bought at current NAV
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-950/20 dark:to-blue-950/20 border-2 border-purple-200 dark:border-purple-800 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Future Profit Sharing</h3>
              <p>
                From this point forward, Alice and Bob share profits proportionally:
              </p>
              <ul className="mt-3 space-y-2">
                <li><strong>Alice:</strong> 66.7% of future profits</li>
                <li><strong>Bob:</strong> 33.3% of future profits</li>
              </ul>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Alice's ownership: 66.7% (10,000 of 14,979.57 shares)</li>
                <li>Bob's ownership: 33.3% (4,979.57 of 14,979.57 shares)</li>
                <li>Share price same for both: 1.0041 DAI</li>
                <li>Future profits split proportionally</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Scene 4: Manager Reallocates with New Capital */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Deploying Bob's 5,000 DAI
          </h1>
          <p className="text-xl text-center text-muted-foreground">
            Maintaining 40/40/20 allocation strategy.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            {/* Reallocation Table */}
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2 border-border">
                    <th className="text-left p-4 font-bold">Strategy</th>
                    <th className="text-center p-4 font-bold">Previous</th>
                    <th className="text-center p-4 font-bold">Added</th>
                    <th className="text-center p-4 font-bold">New Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Lido</td>
                    <td className="text-center p-4">4,013 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+2,000 DAI</td>
                    <td className="text-center p-4 font-bold">6,013 DAI</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4 font-bold">Morpho</td>
                    <td className="text-center p-4">4,020 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+2,000 DAI</td>
                    <td className="text-center p-4 font-bold">6,020 DAI</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-bold">Sky</td>
                    <td className="text-center p-4">2,008 DAI</td>
                    <td className="text-center p-4 text-green-500 font-bold">+1,000 DAI</td>
                    <td className="text-center p-4 font-bold">3,008 DAI</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Code Block */}
            <div className="relative">
              <div className="absolute top-0 right-0 px-3 py-1 bg-primary text-primary-foreground text-sm rounded-bl">
                Reallocation.sol
              </div>
              <pre className="p-6 bg-muted rounded-lg overflow-x-auto border-2 border-border">
                <code className="text-sm">{`// Manager allocates Bob's capital
vault.updateDebt(lidoStrategy, 6_013 * 1e18);   // Increase by 2,000
vault.updateDebt(morphoStrategy, 6_020 * 1e18); // Increase by 2,000
vault.updateDebt(skyStrategy, 3_008 * 1e18);    // Increase by 1,000

// Total deployed: 15,041 DAI (Alice's 10,041 + Bob's 5,000)`}</code>
              </pre>
            </div>

            <div className="p-6 bg-green-50 dark:bg-green-950/20 border-l-4 border-green-500 rounded">
              <h4 className="font-bold text-lg mb-2 flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                Seamless Scaling
              </h4>
              <p>
                Vault scales smoothly. Bob gets instant diversification without manual DeFi interactions.
              </p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 bg-card border-2 border-primary/20 rounded-lg">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6 text-primary" />
                Key Takeaways
              </h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>New deposits trigger manager reallocation</li>
                <li>Bob's capital gets same diversified exposure as Alice</li>
                <li>Total vault now manages 15,041 DAI across 3 protocols</li>
                <li>Both users share same risk profile going forward</li>
              </ul>
            </div>
          </div>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
