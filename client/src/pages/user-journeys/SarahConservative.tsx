import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DocsLayoutNew from "@/components/DocsLayoutNew";
import { User, Target, AlertCircle, TrendingUp, Clock, CheckCircle, ArrowDown } from "lucide-react";
import { Streamdown } from "streamdown";

export default function SarahConservative() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Meet Sarah */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 1 of 4</Badge>
            <span className="text-sm text-muted-foreground">Meet Sarah</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Managing $50M with Institutional Discipline
            </h1>
            <p className="text-xl text-muted-foreground">
              Traditional finance veteran seeking better yields
            </p>
          </div>

          {/* Character Card */}
          <Card className="p-6 border-2 border-blue-500">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full border-3 border-blue-500 flex items-center justify-center bg-muted flex-shrink-0">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-2xl font-bold">Sarah Chen</h2>
                <p className="text-lg text-muted-foreground">Head of Endowment, Global Water Initiative</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div>
                    <div className="text-sm font-medium">Capital</div>
                    <div className="text-muted-foreground">$50 million USDC</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Experience</div>
                    <div className="text-muted-foreground">20 years in TradFi, first time in DeFi</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Goals */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-6 h-6" />
              Sarah's Goals
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Generate 5-6% annual yield (vs 3% bonds)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Maintain capital safety (fiduciary duty)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Transparent reporting for board</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Minimal operational overhead</span>
              </li>
            </ul>
          </div>

          {/* Constraints */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Constraints
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>Cannot afford to lose principal</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>No interest in crypto governance</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>Board requires quarterly reports</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-5 h-5 mt-0.5 text-orange-500 flex-shrink-0" />
                <span>Must explain strategy to non-technical trustees</span>
              </li>
            </ul>
          </div>

          {/* Sarah's Thinking */}
          <Card className="p-6 bg-blue-500/10 border-blue-500">
            <p className="text-lg italic">
              "If I can generate 5-6% instead of 3% bonds, that's an extra $1.5M annually. That's 15 more water wells per year. But I need confidence this won't blow up."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Sarah Chen</p>
          </Card>

          {/* Why Octant */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Why Octant?</h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Multi-strategy diversification (Lido, Morpho, Sky) reduces single-protocol risk</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Professional vault management (no manual DeFi interactions)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Transparent on-chain reporting (board can verify everything)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Battle-tested protocols with billions in TVL</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Can withdraw anytime if needed for grants</span>
              </li>
            </ul>
          </div>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-lg mb-2">✓ Perfect Fit</h4>
            <p>Vault system designed for exactly Sarah's use case: institutional capital, professional management, transparent yields.</p>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 2: Implementation */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 2 of 4</Badge>
            <span className="text-sm text-muted-foreground">Sarah's Implementation</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Step-by-Step Vault Deployment</h2>
            <p className="text-xl text-muted-foreground">From board approval to active deployment</p>
          </div>

          {/* Implementation Steps */}
          <div className="space-y-6">
            {/* Step 1 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Board Approval</h3>
                  <p className="text-muted-foreground">Present Octant to board with risk analysis</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Show multi-protocol diversification</li>
                    <li>• Explain ERC-4626 standard (industry compliance)</li>
                    <li>• Present audit reports</li>
                    <li>• Demonstrate on-chain transparency</li>
                  </ul>
                  <Card className="p-3 bg-green-500/10 border-green-500">
                    <p className="font-medium">Outcome: Board approves 10% allocation ($5M) as pilot</p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Step 2 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Setup Multi-Sig</h3>
                  <p className="text-muted-foreground">Configure Gnosis Safe with 3-of-5 board members</p>
                  <Card className="p-3 bg-blue-500/10 border-blue-500">
                    <p className="font-medium">Security: Requires board majority for any vault operations</p>
                  </Card>
                </div>
              </div>
            </Card>

            {/* Step 3 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Deposit via Multi-Sig</h3>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                    <pre className="text-sm">
                      <code>{`// Executed via Gnosis Safe (3-of-5 signatures required)

// Step 1: Approve vault to spend USDC
USDC.approve(address(vault), 5_000_000 * 1e6);  // $5M

// Step 2: Deposit into vault
uint256 shares = vault.deposit(
    5_000_000 * 1e6,  // $5M USDC
    sarahMultisig      // Receiver (Safe address)
);

// Result: Safe receives 5,000,000 vault shares
// Represents $5M at current NAV`}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 4 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Manager Allocates</h3>
                  <p className="text-muted-foreground">Vault manager (authorized by board) executes allocation</p>
                  <div className="grid grid-cols-3 gap-4 mt-3">
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold">$2.5M</div>
                      <div className="text-sm text-muted-foreground">Morpho (50%)</div>
                      <div className="text-xs mt-1">Safest lending</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold">$1.5M</div>
                      <div className="text-sm text-muted-foreground">Sky (30%)</div>
                      <div className="text-xs mt-1">Stable savings rate</div>
                    </Card>
                    <Card className="p-4 text-center">
                      <div className="text-2xl font-bold">$1M</div>
                      <div className="text-sm text-muted-foreground">Lido (20%)</div>
                      <div className="text-xs mt-1">Liquid staking</div>
                    </Card>
                  </div>
                  <p className="text-sm text-muted-foreground">Conservative: 80% in stable strategies (Morpho + Sky), 20% in staking</p>
                </div>
              </div>
            </Card>

            {/* Step 5 */}
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Setup Monitoring</h3>
                  <p className="text-muted-foreground">Configure dashboard alerts and monthly reporting</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Daily: Check vault NAV</li>
                    <li>• Weekly: Review strategy performance</li>
                    <li>• Monthly: Generate board report</li>
                    <li>• Quarterly: Full audit and rebalancing review</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-blue-500/10 border-blue-500">
            <h4 className="font-bold text-lg mb-2">ℹ Multi-Sig Security</h4>
            <p>All operations require 3 of 5 board signatures. No single person can move funds.</p>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 3: Monthly Operations */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 3 of 4</Badge>
            <span className="text-sm text-muted-foreground">Sarah's Monthly Operations</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Ongoing Management Workflow</h2>
            <p className="text-xl text-muted-foreground">What Sarah does each month</p>
          </div>

          {/* Monthly Tasks */}
          <div className="space-y-6">
            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Day 5: Review Performance</h3>
                  <p className="text-muted-foreground">Check vault dashboard</p>
                  <ul className="space-y-1 text-sm">
                    <li>• Current NAV vs last month</li>
                    <li>• Individual strategy APYs</li>
                    <li>• Gas costs incurred</li>
                    <li>• Any rebalancing actions taken</li>
                  </ul>
                  <Badge variant="outline">Time: 30 minutes</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Day 15: Board Report Generation</h3>
                  <p className="text-muted-foreground">Generate compliance report</p>
                  <div className="bg-muted p-4 rounded-lg overflow-x-auto mt-3">
                    <pre className="text-sm">
                      <code>{`// Automated reporting script
const report = {
  date: new Date(),
  vaultAddress: '0x742d...F4E8',
  
  holdings: {
    totalAssets: await vault.totalAssets(),
    morphoAllocation: await vault.strategies(morpho).currentDebt,
    skyAllocation: await vault.strategies(sky).currentDebt,
    lidoAllocation: await vault.strategies(lido).currentDebt
  },
  
  performance: {
    initialDeposit: 5_000_000,
    currentValue: await vault.convertToAssets(shares),
    monthlyProfit: currentValue - lastMonthValue,
    monthlyReturn: (monthlyProfit / lastMonthValue) * 100
  }
};

sendToBoard(report);`}</code>
                    </pre>
                  </div>
                  <Badge variant="outline">Time: 1 hour</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">Day 20: Rebalancing Decision</h3>
                  <p className="text-muted-foreground">Review strategy APYs, decide if rebalancing needed</p>
                  <ul className="space-y-1 text-sm">
                    <li>• If Morpho APY drops below Sky APY by &gt;1%, consider rebalancing</li>
                    <li>• If any strategy shows security concerns, reduce allocation</li>
                    <li>• If total vault APY falls below 4.5%, consider alternatives</li>
                  </ul>
                  <Badge variant="outline">Time: 45 minutes</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-8 h-8 text-primary flex-shrink-0" />
                <div className="space-y-3 flex-1">
                  <h3 className="text-xl font-bold">As Needed: Grant Withdrawals</h3>
                  <p className="text-muted-foreground">Withdraw funds for water well construction</p>
                  <ol className="space-y-1 text-sm list-decimal list-inside">
                    <li>Board approves grant amount via vote</li>
                    <li>Sarah initiates withdrawal via Safe</li>
                    <li>3 of 5 board members sign</li>
                    <li>Funds withdrawn proportionally from strategies</li>
                    <li>USDC sent to grant recipient</li>
                  </ol>
                  <Badge variant="outline">Frequency: Quarterly or as needed</Badge>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-lg mb-3">Key Takeaways</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Minimal overhead: ~3 hours per month for $50M management</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Automated reporting reduces board communication burden</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Multi-sig ensures no single point of failure</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Can withdraw for grants anytime without penalty</span>
              </li>
            </ul>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 4: Results */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 4 of 4</Badge>
            <span className="text-sm text-muted-foreground">Sarah's First Year Results</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Endowment Performance Review</h2>
            <p className="text-xl text-muted-foreground">Comparing Octant to traditional alternatives</p>
          </div>

          {/* Annual Results */}
          <Card className="p-6">
            <h3 className="text-2xl font-bold mb-6">12-Month Performance</h3>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <div className="text-sm text-muted-foreground">Initial Deposit</div>
                <div className="text-3xl font-bold">$5,000,000</div>
                <div className="text-xs text-muted-foreground">Month 0</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Final Value</div>
                <div className="text-3xl font-bold text-green-500">$5,260,000</div>
                <div className="text-xs text-muted-foreground">Month 12</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Total Profit</div>
                <div className="text-3xl font-bold">$260,000</div>
                <div className="text-xs text-green-500">5.2% APY ✓</div>
              </div>
              <div>
                <div className="text-sm text-muted-foreground">Withdrawals Made</div>
                <div className="text-3xl font-bold">3 grants</div>
                <div className="text-xs text-muted-foreground">$150K total for wells</div>
              </div>
            </div>
          </Card>

          {/* Comparison Table */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">What Sarah Would Have Earned Elsewhere</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Option</th>
                    <th className="text-right p-3 font-bold">After 12 Months</th>
                    <th className="text-right p-3 font-bold">Profit</th>
                    <th className="text-right p-3 font-bold">APY</th>
                    <th className="text-right p-3 font-bold">vs Octant</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">US Treasury Bonds</td>
                    <td className="p-3 text-right">$5,150,000</td>
                    <td className="p-3 text-right">$150K</td>
                    <td className="p-3 text-right">3.0%</td>
                    <td className="p-3 text-right text-red-500">-$110K</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Money Market Fund</td>
                    <td className="p-3 text-right">$5,175,000</td>
                    <td className="p-3 text-right">$175K</td>
                    <td className="p-3 text-right">3.5%</td>
                    <td className="p-3 text-right text-red-500">-$85K</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">High-Yield Savings</td>
                    <td className="p-3 text-right">$5,200,000</td>
                    <td className="p-3 text-right">$200K</td>
                    <td className="p-3 text-right">4.0%</td>
                    <td className="p-3 text-right text-red-500">-$60K</td>
                  </tr>
                  <tr className="border-b bg-green-500/10 font-bold">
                    <td className="p-3">Octant Vault (actual)</td>
                    <td className="p-3 text-right">$5,260,000</td>
                    <td className="p-3 text-right">$260K</td>
                    <td className="p-3 text-right">5.2%</td>
                    <td className="p-3 text-right text-green-500">Baseline</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Impact Calculation */}
          <Card className="p-6 bg-blue-500/10 border-blue-500">
            <h3 className="text-2xl font-bold mb-4">Real-World Impact</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span>Extra yield vs best TradFi alternative:</span>
                <span className="font-bold text-xl">$110,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Cost per water well:</span>
                <span className="font-bold">$100,000</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Additional wells funded:</span>
                <span className="font-bold text-2xl text-green-500">1 extra well</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Additional people served:</span>
                <span className="font-bold text-2xl text-green-500">5,000 people</span>
              </div>
            </div>
            <Card className="p-4 mt-4 bg-background">
              <p className="italic text-lg">
                "That extra $110K is 5,000 people with clean water who wouldn't have it otherwise. DeFi yields = real-world impact."
              </p>
              <p className="text-sm text-muted-foreground mt-2">— Sarah Chen</p>
            </Card>
          </Card>

          {/* Board Feedback */}
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-green-500/10 border-green-500">
              <h4 className="font-bold text-lg mb-3">Board Positives</h4>
              <ul className="space-y-2 text-sm">
                <li>✓ Beat target APY (5.2% vs 5-6% goal)</li>
                <li>✓ Transparent reporting satisfied fiduciary requirements</li>
                <li>✓ No security incidents or losses</li>
                <li>✓ Withdrawals processed smoothly for grants</li>
                <li>✓ Lower overhead than actively managing TradFi bonds</li>
              </ul>
            </Card>
            <Card className="p-6 bg-orange-500/10 border-orange-500">
              <h4 className="font-bold text-lg mb-3">Board Concerns</h4>
              <ul className="space-y-2 text-sm">
                <li>⚠️ Smart contract risk (mitigated by audits and diversification)</li>
                <li>⚠️ Regulatory uncertainty (monitoring developments)</li>
                <li>⚠️ Gas costs (~$500 total for year, negligible at scale)</li>
              </ul>
            </Card>
          </div>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-xl mb-2">Board Decision</h4>
            <p className="text-lg">Board approves increasing allocation to $15M (30% of endowment)</p>
          </Card>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-xl mb-3">✓ Mission Accomplished</h4>
            <p className="mb-4">Conservative investor achieved superior yields with institutional controls. Proof that DeFi can serve traditional finance use cases.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Sarah achieved 5.2% APY vs 3-4% TradFi alternatives</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Extra $110K = 1 additional water well = 5,000 people served</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Minimal overhead: ~3 hours per month</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Board satisfied with transparency and results</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Scaling allocation to $15M in year 2</span>
              </li>
            </ul>
          </Card>

        </section>

      </div>
    </DocsLayoutNew>
  );
}
