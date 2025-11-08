import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { CardGrid } from '@/components/getting-started/CardGrid';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { ComparisonTable } from '@/components/getting-started/ComparisonTable';

export default function GettingStartedSecurity() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Security & Risks</h1>
          <p className="text-xl text-muted-foreground">
            Understanding risks and implementing mitigation strategies
          </p>
        </div>

        {/* Scene 1: Understanding Risks */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Security & Risk Considerations</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            What you need to know before deploying capital
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              Like all DeFi protocols, Octant v2 carries risks that users must understand. While the protocol is built on battle-tested patterns and has undergone security audits, no system is entirely risk-free.

**Five Main Risk Categories:**

**1. Smart Contract Risk**
Octant contracts or underlying strategy contracts could have undiscovered vulnerabilities, bugs, or exploits.

**2. Strategy Risk**
External protocols (Lido, Aave, Morpho, etc.) may face:
- Protocol insolvency or hacks
- Governance attacks
- Oracle manipulation
- Unexpected parameter changes

**3. Impermanent Loss (LP Strategies)**
If strategies involve liquidity provision (Uniswap, Curve), price divergence can cause impermanent loss.

**4. Liquidity Risk**
Strategies may not be able to withdraw funds quickly enough for user redemptions during:
- Protocol congestion
- Liquidity crunches
- Market volatility

**5. Regulatory Risk**
Legal/regulatory changes could impact:
- DeFi protocol operations
- DAO governance
- Donation recipients
- User participation
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Bug',
                title: 'Smart Contract Risk',
                description: '**Severity:** High\n**Impact:** Total loss of funds\n**Likelihood:** Low (audited, battle-tested)\n\n**Examples:**\n- Reentrancy attacks\n- Logic bugs in vault accounting\n- Strategy implementation errors\n- Proxy upgrade vulnerabilities',
                badge: 'Critical'
              },
              {
                icon: 'AlertTriangle',
                title: 'Strategy Risk',
                description: '**Severity:** Medium-High\n**Impact:** Partial to total loss\n**Likelihood:** Medium (depends on protocol)\n\n**Examples:**\n- Aave liquidity crisis\n- Lido slashing events\n- Morpho market insolvency\n- Protocol governance attacks',
                badge: 'High'
              },
              {
                icon: 'TrendingDown',
                title: 'Impermanent Loss',
                description: '**Severity:** Low-Medium\n**Impact:** Reduced returns\n**Likelihood:** High (for LP strategies)\n\n**Examples:**\n- USDC/ETH pool price divergence\n- Stablecoin de-pegging\n- Asymmetric price movements\n\n**Note:** Most Octant strategies are single-sided (no IL)',
                badge: 'LP Only'
              },
              {
                icon: 'Droplet',
                title: 'Liquidity Risk',
                description: '**Severity:** Low-Medium\n**Impact:** Delayed withdrawals\n**Likelihood:** Low (managed actively)\n\n**Examples:**\n- Aave utilization at 100%\n- Morpho market illiquidity\n- Bank run scenarios\n- Protocol pauses',
                badge: 'Medium'
              },
              {
                icon: 'Scale',
                title: 'Regulatory Risk',
                description: '**Severity:** Low-High (jurisdiction-dependent)\n**Impact:** Operational restrictions\n**Likelihood:** Unknown (evolving landscape)\n\n**Examples:**\n- DeFi regulations\n- DAO legal status changes\n- Tax treatment updates\n- Sanctions/compliance',
                badge: 'Evolving'
              }
            ]}
          />

          <CalloutBox
            type="warning"
            text="**Never invest more than you can afford to lose.** DeFi carries inherent risks, and Octant does not eliminate these risks - it manages them through diversification and battle-tested patterns."
          />
          <CalloutBox
            type="info"
            text="**Security Measures:** Octant uses Yearn v3 patterns (audited), configurable health checks, exposure limits, emergency pause mechanisms, and multi-sig governance."
          />
        </motion.section>

        {/* Scene 2: Risk Mitigation Strategies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Best Practices for Risk Mitigation</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            How to minimize exposure and protect your capital
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              While risks cannot be eliminated, they can be substantially reduced through smart practices and proper configuration.

**User-Level Mitigation:**

**1. Start Small**
Begin with a small deposit to test the system before committing significant capital.

**2. Diversify Across Strategies**
Don't allocate 100% to one strategy. Spread across multiple protocols (Lido, Aave, Morpho, Sky).

**3. Set Conservative Limits**
Vault managers should set exposure limits per strategy (e.g., max 40% to any single protocol).

**4. Use Multi-Sig Governance**
Require multiple signatures for critical operations (add/remove strategies, change parameters).

**5. Monitor Actively**
Watch for unusual events (high gas fees, protocol pauses, governance proposals).

**Protocol-Level Protections:**

**1. Health Checks**
Configurable bounds prevent reporting anomalous profit/loss (e.g., reject greater than 10% profit per report).

**2. Emergency Pause**
Managers can pause deposits/withdrawals if vulnerabilities discovered.

**3. Withdrawal Queues**
Prioritize liquid strategies for withdrawals to optimize gas and liquidity.

**4. Audits & Formal Verification**
Contracts audited by reputable firms, formal verification for critical components.
            </p>
          </div>

          <ComparisonTable
            columns={['Strategy', 'Risk Level', 'Mitigation', 'Implementation']}
            rows={[
              ['Start Small', 'All Risks', 'Limit exposure during testing', 'Deploy <5% of treasury initially'],
              ['Diversify', 'Strategy Risk', 'Spread across protocols', 'Max 40% per strategy, 3+ strategies'],
              ['Exposure Limits', 'Strategy Risk', 'Cap per-protocol allocation', 'Set debt limits in vault config'],
              ['Multi-Sig', 'Governance Risk', 'Require consensus for changes', '3-of-5 or 4-of-7 multi-sig'],
              ['Health Checks', 'Exploit Risk', 'Reject anomalous behavior', 'Max 10% profit/loss per report'],
              ['Emergency Pause', 'Critical Risk', 'Halt operations if needed', 'Manager-controlled pause()'],
              ['Monitor', 'All Risks', 'Track protocol events', 'Tenderly alerts, Discord bots'],
              ['Insurance', 'Smart Contract Risk', 'Cover potential losses', 'Nexus Mutual, InsurAce policies']
            ]}
          />

          <div className="my-8">
            <div className="p-6 bg-muted/30 border-2 border-muted rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Risk Mitigation Configuration</span>
                <span className="text-xs text-muted-foreground">solidity</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.18;

contract VaultRiskMitigation {
    
    function setStrategyDebtLimit(
        address strategy,
        uint256 maxDebt
    ) external onlyManager {
        uint256 maxAllocation = (vault.totalAssets() * 4000) / 10000; // 40%
        require(maxDebt <= maxAllocation, "Exceeds allocation limit");
        
        vault.setStrategyDebtLimit(strategy, maxDebt);
    }
    
    function setHealthCheck(
        address strategy,
        address healthCheck
    ) external onlyManager {
        IStrategy(strategy).setHealthCheck(healthCheck);
    }
    
    function emergencyPause() external onlyManager {
        vault.pause();
        
        emit EmergencyPaused(msg.sender, block.timestamp);
    }
    
    function setWithdrawalQueue(
        address[] memory strategies
    ) external onlyManager {
        vault.setWithdrawalQueue(strategies);
    }
    
    modifier onlyManager() {
        require(
            msg.sender == gnosisSafe,
            "Only multi-sig can manage"
        );
        _;
    }
    
    function checkStrategyHealth(address strategy) external view returns (bool) {
        uint256 currentValue = IStrategy(strategy).totalAssets();
        uint256 totalDebt = vault.strategyDebt(strategy);
        
        if (currentValue < (totalDebt * 9000) / 10000) {
            emit HealthWarning(strategy, currentValue, totalDebt);
            return false;
        }
        return true;
    }
}`}</code>
              </pre>
            </div>
          </div>

          <CalloutBox
            type="success"
            text="**Best Practice:** Combine multiple mitigation strategies. Diversification + exposure limits + health checks + multi-sig = robust risk management."
          />
          <CalloutBox
            type="warning"
            text="**Stay Informed:** Join Octant Discord/Telegram for real-time updates on protocol events, audits, and security incidents."
          />
          <CalloutBox
            type="info"
            text="**Insurance:** Consider purchasing DeFi insurance (Nexus Mutual, InsurAce) for additional protection against smart contract exploits."
          />
        </motion.section>

        {/* Risk Disclaimer */}
        <div className="mt-16 p-8 bg-red-500/10 border-2 border-red-500/30 rounded-lg">
          <h2 className="text-2xl font-bold mb-4 text-red-400">Risk Disclaimer</h2>
          <p className="leading-relaxed whitespace-pre-line text-sm">
            Octant v2 is experimental software. While built on battle-tested patterns and audited, it carries inherent risks. Users should:
- Understand all risks before depositing
- Never invest more than they can afford to lose
- Conduct their own due diligence
- Consult legal/financial advisors
- Monitor their positions actively

The protocol does not guarantee returns, principal preservation in all scenarios, or immunity from smart contract exploits. Use at your own risk.
          </p>
        </div>

        {/* Next Steps */}
        <div className="mt-8 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Proceed?</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Developer Orientation** - Start building with proper security considerations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Integration Guides** - Follow our step-by-step tutorial with security best practices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**DeepWiki** - Dive deep into technical security mechanisms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Audits** - Review our security audit reports (link in documentation)</span>
            </li>
          </ul>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
