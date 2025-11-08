import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DocsLayoutNew from "@/components/DocsLayoutNew";
import { User, Target, AlertCircle, TrendingUp, CheckCircle, ArrowDown, Vote, Award } from "lucide-react";

export default function MarcusCrypto() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Meet Marcus */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 1 of 4</Badge>
            <span className="text-sm text-muted-foreground">Meet Marcus</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              Crypto Native Seeking Influence
            </h1>
            <p className="text-xl text-muted-foreground">
              Deep into protocols, wants to shape Octant's future
            </p>
          </div>

          {/* Character Card */}
          <Card className="p-6 border-2 border-green-500">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full border-3 border-green-500 flex items-center justify-center bg-muted flex-shrink-0">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-2xl font-bold">Marcus Rodriguez</h2>
                <p className="text-lg text-muted-foreground">Crypto Enthusiast & Protocol Contributor</p>
                <div className="grid grid-cols-2 gap-3 mt-4">
                  <div>
                    <div className="text-sm font-medium">Capital</div>
                    <div className="text-muted-foreground">100,000 GOV tokens</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">Experience</div>
                    <div className="text-muted-foreground">5 years in crypto, active in multiple DAOs</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Goals */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Target className="w-6 h-6" />
              Marcus's Goals
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Influence Octant protocol decisions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Earn rewards from treasury distributions</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Support regenerative finance mission</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Delegate to experts (don't have time to research every proposal)</span>
              </li>
            </ul>
          </div>

          {/* Marcus's Thinking */}
          <Card className="p-6 bg-green-500/10 border-green-500">
            <p className="text-lg italic">
              "I have 100K GOV tokens sitting idle. I want them working for the protocol AND earning me rewards, but I don't have time to research every governance proposal. I trust VitalikFan.eth to vote wisely."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Marcus Rodriguez</p>
          </Card>

          {/* Recommended Approach */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Recommended Approach</h3>
            <Card className="p-6">
              <div className="space-y-4">
                <div>
                  <div className="text-sm font-medium text-muted-foreground">System</div>
                  <div className="text-xl font-bold">Staking System with Delegation</div>
                </div>
                <div>
                  <div className="text-sm font-medium text-muted-foreground">Strategy</div>
                  <div className="text-lg">Stake all 100K GOV, delegate voting power to trusted expert</div>
                </div>
                <div className="space-y-2">
                  <div className="text-sm font-medium text-muted-foreground">Benefits</div>
                  <ul className="space-y-1">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Earn staking rewards from protocol treasury</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Expert votes on Marcus's behalf (VitalikFan.eth)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Maintain custody (Marcus still owns tokens)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                      <span>Can withdraw anytime if needed</span>
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-blue-500/10 border-blue-500">
            <h4 className="font-bold text-lg mb-2">ℹ Delegation ≠ Giving Away Tokens</h4>
            <p>Marcus retains full ownership. VitalikFan.eth gets voting power, not tokens. Marcus can revoke delegation anytime.</p>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 2: Staking Transaction */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 2 of 4</Badge>
            <span className="text-sm text-muted-foreground">Marcus Stakes and Delegates</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">The Staking Transaction</h2>
            <p className="text-xl text-muted-foreground">Deploying surrogate and delegating votes</p>
          </div>

          {/* Code Block */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Stake 100,000 GOV tokens</h3>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Marcus approves RegenStaker
GOV.approve(address(regenStaker), 100_000 * 1e18);

// Marcus stakes, delegating to VitalikFan.eth
Staker.DepositIdentifier depositId = regenStaker.stake(
    100_000 * 1e18,           // amount
    vitalikFan_eth,            // delegatee (expert voter)
    marcus                     // claimer (Marcus keeps rewards)
);

// Result:
// - depositId = 42 (Marcus's deposit identifier)
// - 100K GOV transferred to DelegationSurrogate(VitalikFan)
// - VitalikFan.eth voting power += 100,000
// - Marcus retains ownership and reward rights`}</code>
              </pre>
            </div>
          </div>

          {/* What Happened */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Under the Hood</h3>
            <Card className="p-6">
              <ol className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">1.</span>
                  <span>RegenStaker checks if VitalikFan.eth already has a surrogate</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">2.</span>
                  <span>If not, deploys DelegationSurrogateVotes via CREATE2</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">3.</span>
                  <span>Transfers Marcus's 100K GOV to the surrogate</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">4.</span>
                  <span>Surrogate calls GOV.delegate(VitalikFan.eth)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">5.</span>
                  <span>VitalikFan.eth voting power increases by 100K</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary flex-shrink-0">6.</span>
                  <span>Marcus receives depositId for tracking and claiming rewards</span>
                </li>
              </ol>
            </Card>
          </div>

          {/* Token Custody Diagram */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Token Custody After Marcus Stakes</h3>
            <Card className="p-6 bg-muted">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Card className="p-4 flex-1 bg-yellow-500/20 border-yellow-500">
                    <div className="font-bold">Marcus's Wallet</div>
                    <div className="text-sm text-muted-foreground">GOV: 0</div>
                    <div className="text-sm text-muted-foreground">Staked: 100K</div>
                  </Card>
                  <div className="text-2xl">→</div>
                  <Card className="p-4 flex-1 bg-purple-500/20 border-purple-500">
                    <div className="font-bold">DelegationSurrogate</div>
                    <div className="text-sm text-muted-foreground">VitalikFan.eth</div>
                    <div className="text-sm text-muted-foreground">Holds: 100K GOV</div>
                  </Card>
                  <div className="text-2xl">→</div>
                  <Card className="p-4 flex-1 bg-green-500/20 border-green-500">
                    <div className="font-bold">VitalikFan.eth</div>
                    <div className="text-sm text-muted-foreground">Voting Power: 100K</div>
                  </Card>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  ↑ Ownership remains with Marcus
                </div>
              </div>
            </Card>
          </div>

          {/* Key Takeaways */}
          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-lg mb-3">Key Takeaways</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Marcus's tokens held in DelegationSurrogate, not VitalikFan.eth's wallet</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>VitalikFan.eth receives voting power, not tokens</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Marcus retains ownership and can withdraw anytime</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>depositId = 42 used for claiming rewards and withdrawals</span>
              </li>
            </ul>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 3: Governance Participation */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 3 of 4</Badge>
            <span className="text-sm text-muted-foreground">Marcus Participates in Governance (Passively)</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Voting Through His Delegate</h2>
            <p className="text-xl text-muted-foreground">How VitalikFan.eth votes with Marcus's power</p>
          </div>

          {/* First Proposal */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Vote className="w-6 h-6" />
              Week 1: First Proposal
            </h3>
            <Card className="p-6 bg-blue-500/10 border-blue-500">
              <div className="space-y-3">
                <div>
                  <Badge variant="secondary">Proposal #47</Badge>
                  <h4 className="text-lg font-bold mt-2">Should we increase maxBumpTip from 1000 to 2000?</h4>
                  <p className="text-sm text-muted-foreground">Proposal to increase bump incentives for keepers</p>
                </div>
              </div>
            </Card>

            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-6">
                <h4 className="font-bold mb-3">Voting Power Distribution</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>VitalikFan.eth (direct)</span>
                    <span className="font-bold">50,000</span>
                  </div>
                  <div className="flex justify-between">
                    <span>VitalikFan.eth (delegated)</span>
                    <span className="font-bold">150,000</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Total Power</span>
                    <span className="font-bold text-green-500">200,000</span>
                  </div>
                  <div className="text-sm text-muted-foreground pt-2">
                    Marcus's 100K = 50% of delegated power
                  </div>
                </div>
              </Card>

              <Card className="p-6">
                <h4 className="font-bold mb-3">Voting Process</h4>
                <ol className="space-y-2 text-sm">
                  <li>1. VitalikFan.eth researches proposal</li>
                  <li>2. VitalikFan.eth decides to vote YES</li>
                  <li>3. Casts 200,000 votes YES (includes Marcus's 100K)</li>
                  <li>4. Marcus doesn't vote directly</li>
                  <li className="font-bold text-green-500">5. Proposal passes: 1,050,000 YES vs 950,000 NO</li>
                </ol>
              </Card>
            </div>

            <Card className="p-6 bg-green-500/10 border-green-500">
              <p className="italic">
                Marcus sees notification: "Proposal #47 passed. Your delegatee (VitalikFan.eth) voted YES with your power." Marcus didn't need to research or vote, but his tokens participated.
              </p>
            </Card>
          </div>

          {/* After 6 Months */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">After 6 Months</h3>
            <Card className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Participation Stats</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Proposals voted</span>
                      <span className="font-bold">24</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Marcus direct votes</span>
                      <span className="font-bold">0</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Via VitalikFan.eth</span>
                      <span className="font-bold text-green-500">24</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">VitalikFan's Decisions</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>YES votes</span>
                      <span className="font-bold text-green-500">12</span>
                    </div>
                    <div className="flex justify-between">
                      <span>NO votes</span>
                      <span className="font-bold text-red-500">10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>ABSTAIN</span>
                      <span className="font-bold text-gray-500">2</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t">
                <p className="text-sm">Marcus reviews VitalikFan's history: <span className="font-bold text-green-500">~90% agreement</span> with decisions</p>
              </div>
            </Card>
          </div>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-lg mb-3">Key Takeaways</h4>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Marcus participates in 24 proposals without voting directly</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>VitalikFan.eth makes informed decisions using Marcus's delegated power</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Marcus retains option to revoke delegation if disagreements arise</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Passive governance participation while maintaining influence</span>
              </li>
            </ul>
          </Card>

          <div className="flex justify-center py-8">
            <ArrowDown className="w-8 h-8 text-muted-foreground animate-bounce" />
          </div>
        </section>

        {/* Scene 4: Rewards and Results */}
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Scene 4 of 4</Badge>
            <span className="text-sm text-muted-foreground">Marcus's Rewards and Results</span>
          </div>

          <div className="space-y-4">
            <h2 className="text-4xl font-bold">6-Month Performance</h2>
            <p className="text-xl text-muted-foreground">Governance participation pays off</p>
          </div>

          {/* Reward Distribution */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              <Award className="w-6 h-6" />
              Treasury Reward Distributions
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Epoch</th>
                    <th className="text-right p-3 font-bold">Total Rewards</th>
                    <th className="text-right p-3 font-bold">Marcus's Share</th>
                    <th className="text-right p-3 font-bold">Marcus Earned</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Epoch 1</td>
                    <td className="p-3 text-right">500,000 GOV</td>
                    <td className="p-3 text-right">5%</td>
                    <td className="p-3 text-right font-bold text-green-500">25,000 GOV</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Epoch 2</td>
                    <td className="p-3 text-right">500,000 GOV</td>
                    <td className="p-3 text-right">5%</td>
                    <td className="p-3 text-right font-bold text-green-500">25,000 GOV</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Epoch 3</td>
                    <td className="p-3 text-right">500,000 GOV</td>
                    <td className="p-3 text-right">5%</td>
                    <td className="p-3 text-right font-bold text-green-500">25,000 GOV</td>
                  </tr>
                  <tr className="bg-green-500/10 font-bold">
                    <td className="p-3" colSpan={3}>Total Earned (6 months)</td>
                    <td className="p-3 text-right text-green-500 text-xl">75,000 GOV</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-muted-foreground">Marcus has 100K of ~2M total staked = 5% of all rewards</p>
          </div>

          {/* Claiming Rewards */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Marcus Claims Rewards Weekly</h3>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm">
                <code>{`// Marcus claims accumulated rewards
uint256 earned = regenStaker.earned(depositId);  // Check amount
uint256 claimed = regenStaker.claimReward(depositId);

// Result: GOV tokens transferred to Marcus's wallet
// Staked balance unchanged (still 100K in surrogate)
// Can claim again next week`}</code>
              </pre>
            </div>
            <div className="flex gap-4 text-sm">
              <Badge variant="outline">Frequency: Weekly (automated script)</Badge>
              <Badge variant="outline">Gas: ~$3 per claim at 25 gwei</Badge>
            </div>
          </div>

          {/* Final Results */}
          <Card className="p-6 bg-green-500/10 border-green-500">
            <h3 className="text-2xl font-bold mb-6">Marcus's 6-Month Results</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold mb-3">Initial Position</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Staked</span>
                    <span className="font-bold">100,000 GOV</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Value</span>
                    <span className="font-bold">~$50,000</span>
                  </div>
                  <div className="text-xs text-muted-foreground">(at $0.50/GOV)</div>
                </div>
              </div>
              <div>
                <h4 className="font-bold mb-3">Final Position</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Still Staked</span>
                    <span className="font-bold">100,000 GOV</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Rewards Claimed</span>
                    <span className="font-bold text-green-500">75,000 GOV</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="font-bold">Total GOV</span>
                    <span className="font-bold text-green-500">175,000 GOV</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Total Value</span>
                    <span className="font-bold text-green-500">~$87,500</span>
                  </div>
                  <div className="flex justify-between text-xl">
                    <span className="font-bold">Gain</span>
                    <span className="font-bold text-green-500">$37,500 (75%!)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t">
              <h4 className="font-bold mb-3">Governance Impact</h4>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-green-500">24</div>
                  <div className="text-sm text-muted-foreground">Proposals voted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">✓</div>
                  <div className="text-sm text-muted-foreground">Shaped protocol</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-green-500">90%</div>
                  <div className="text-sm text-muted-foreground">Agreement rate</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Marcus's Reaction */}
          <Card className="p-6 bg-green-500/10 border-green-500">
            <p className="text-lg italic">
              "I'm earning massive rewards AND influencing the protocol without doing all the research myself. Best of both worlds. Plus, I still own my original 100K GOV if I ever want to sell."
            </p>
            <p className="text-sm text-muted-foreground mt-2">— Marcus Rodriguez</p>
          </Card>

          {/* Comparison Chart */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Marcus vs Alternative Strategies</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b-2">
                    <th className="text-left p-3 font-bold">Strategy</th>
                    <th className="text-right p-3 font-bold">Result</th>
                    <th className="text-center p-3 font-bold">Governance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Hold Idle</td>
                    <td className="p-3 text-right">100K GOV (0% growth)</td>
                    <td className="p-3 text-center text-red-500">None</td>
                  </tr>
                  <tr className="border-b hover:bg-muted/50">
                    <td className="p-3">Sell for Stablecoins</td>
                    <td className="p-3 text-right">$50K → $52,600 (5.2% in vault)</td>
                    <td className="p-3 text-center text-red-500">Lost</td>
                  </tr>
                  <tr className="bg-green-500/10 font-bold">
                    <td className="p-3">Stake in Octant (Marcus's choice)</td>
                    <td className="p-3 text-right text-green-500">175K GOV (75% growth)</td>
                    <td className="p-3 text-center text-green-500">✓ 24 proposals</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <Card className="p-6 bg-green-500/10 border-green-500">
            <h4 className="font-bold text-xl mb-3">✓ Delegation Win</h4>
            <p className="mb-4">Marcus gets best of both worlds: governance influence without research burden, plus substantial rewards.</p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Marcus earned 75,000 GOV (75% return) in 6 months</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Participated in 24 governance proposals via delegation</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Minimal time commitment (~1 hour/month reviewing delegate decisions)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Retained full ownership and withdrawal rights</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-5 h-5 mt-0.5 text-green-500 flex-shrink-0" />
                <span>Planning to stake for another year</span>
              </li>
            </ul>
          </Card>

        </section>

      </div>
    </DocsLayoutNew>
  );
}
