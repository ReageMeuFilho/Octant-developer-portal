import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { CardGrid } from '@/components/getting-started/CardGrid';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { ComparisonTable } from '@/components/getting-started/ComparisonTable';

export default function GettingStartedComponents() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Core Components</h1>
          <p className="text-xl text-muted-foreground">
            Detailed breakdown of Octant v2's four core components
          </p>
        </div>

        {/* Scene 1: Funding Vaults */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Component 1: Funding Vaults</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            ERC-4626 vaults that preserve principal while donating yield
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              **Funding Vaults** are the entry point for users. They're ERC-4626-compliant vaults that accept deposits, issue shares, and manage capital allocation across multiple yield strategies.

**Key Features:**
- **Standard Interface:** ERC-4626 compliant (deposit, withdraw, mint, redeem)
- **Principal Preservation:** Share price remains 1:1 - you can always withdraw your original deposit
- **Multi-Strategy:** Managers allocate capital across multiple strategies for diversification
- **Yield Donation:** All profits are donated instead of reinvested
- **Flexible Management:** Vault managers control strategy allocation, debt limits, withdrawal queues

**How it works:**
1. User deposits 1000 DAI → receives 1000 vault shares
2. Manager allocates capital to strategies (e.g., 40% Lido, 40% Aave, 20% Morpho)
3. Strategies earn yield and donate profits
4. User can always redeem 1000 shares for 1000 DAI (principal preserved)

**Critical Difference:** Unlike traditional yield-bearing vaults where your shares appreciate (from 1.0 to 1.05), Octant vaults maintain 1:1 ratio by donating yield instead of compounding it.
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    subgraph "User Actions"
        U1[Alice deposits 1000 DAI]
        U2[Alice receives 1000 shares]
    end
    
    subgraph "Vault Management"
        V[Funding Vault<br/>Total: 1000 DAI]
        M[Manager allocates:<br/>400 to Lido<br/>400 to Aave<br/>200 to Morpho]
    end
    
    subgraph "Yield Generation"
        S1[Lido Strategy: +20 DAI]
        S2[Aave Strategy: +15 DAI]
        S3[Morpho Strategy: +10 DAI]
    end
    
    subgraph "Impact"
        D[45 DAI donated to causes]
    end
    
    U1 --> U2
    U2 --> V
    V --> M
    M --> S1
    M --> S2
    M --> S3
    S1 --> D
    S2 --> D
    S3 --> D
    
    style U1 fill:#e1f5ff
    style U2 fill:#e1f5ff
    style V fill:#e1f5ff
    style M fill:#ffd700
    style S1 fill:#ffe1f5
    style S2 fill:#ffe1f5
    style S3 fill:#ffe1f5
    style D fill:#d4f1d4`}
          />

          <div className="my-8">
            <div className="p-6 bg-muted/30 border-2 border-muted rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Vault Interaction Example</span>
                <span className="text-xs text-muted-foreground">solidity</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.18;

import {IERC4626} from "@openzeppelin/token/ERC20/extensions/ERC4626.sol";

contract UserInteraction {
    IERC4626 public vault;
    
    function depositToVault(uint256 amount) external {
        DAI.approve(address(vault), amount);
        
        uint256 shares = vault.deposit(amount, msg.sender);
        
        assert(shares == amount);
    }
    
    function withdrawFromVault(uint256 shares) external {
        uint256 assets = vault.redeem(shares, msg.sender, msg.sender);
        
        assert(assets == shares);
    }
    
    function checkExchangeRate() external view returns (uint256) {
        uint256 totalAssets = vault.totalAssets();
        uint256 totalSupply = vault.totalSupply();
        
        return (totalAssets * 1e18) / totalSupply; // Returns 1e18 (1.0)
    }
}`}</code>
              </pre>
            </div>
          </div>

          <CalloutBox
            type="success"
            text="**User Benefit:** You get DeFi yield exposure + philanthropic impact while maintaining full liquidity and principal safety."
          />
          <CalloutBox
            type="info"
            text="**ERC-4626 Standard:** Octant vaults are fully compatible with any ERC-4626 integration (wallets, aggregators, analytics)."
          />
        </motion.section>

        {/* Scene 2: Yield Strategies */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Component 2: Yield Strategies</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Deploy capital to DeFi protocols and donate profits
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              **Yield Strategies** are smart contracts that deploy capital into external DeFi protocols, generate returns, and donate 100% of profits to configured recipients.

**Two Types:**

**1. Yield Donating Strategies (YDS):**
- Active reward harvesting (claim COMP, AAVE, MORPHO tokens)
- Requires periodic keeper calls to harvest
- Examples: Compound, Aave V3, Morpho Blue with incentives

**2. Yield Skimming Strategies (YSS):**
- Passive appreciation capture (stETH, sDAI exchange rate growth)
- No active harvesting needed
- Examples: Lido stETH, Maker sDAI, Rocket Pool rETH

**Configurable Parameters:**
- **Debt Limits:** Maximum capital a strategy can deploy
- **Health Checks:** Bounds on acceptable profit/loss reporting
- **Donation Recipient:** Where profits are sent
- **Performance Fees:** Optional fees for strategists (typically 0-10%)

**Built on Yearn V3:** All strategies inherit battle-tested Yearn v3 tokenized strategy patterns for security and reliability.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Zap',
                title: 'Lido stETH Strategy (YSS)',
                description: '**Type:** Yield Skimming\n**Asset:** ETH → stETH\n**Yield:** ETH staking rewards (~3.5% APY)\n**Mechanism:** stETH appreciates vs ETH, strategy skims appreciation\n**Status:** Production (Live)',
                badge: 'Popular'
              },
              {
                icon: 'TrendingUp',
                title: 'Morpho Blue Strategy (YDS)',
                description: '**Type:** Yield Donating\n**Asset:** USDC, DAI\n**Yield:** Lending APY + MORPHO incentives\n**Mechanism:** Claims MORPHO tokens, swaps to underlying, donates\n**Status:** Production (Live)',
                badge: 'High APY'
              },
              {
                icon: 'DollarSign',
                title: 'Maker sDAI Strategy (YSS)',
                description: '**Type:** Yield Skimming\n**Asset:** DAI → sDAI\n**Yield:** Dai Savings Rate (~5-8% APY)\n**Mechanism:** sDAI appreciates vs DAI, strategy skims appreciation\n**Status:** Production (Live)',
                badge: 'Stable'
              },
              {
                icon: 'Shield',
                title: 'Aave V3 Strategy (YDS)',
                description: '**Type:** Yield Donating\n**Asset:** USDC, USDT, DAI\n**Yield:** Supply APY + stkAAVE rewards\n**Mechanism:** Claims stkAAVE, waits cooldown, swaps, donates\n**Status:** Production (Live)',
                badge: 'Battle-tested'
              }
            ]}
          />

          <CalloutBox
            type="info"
            text="**Manager Control:** Vault managers decide which strategies to use, how much to allocate to each, and can adjust allocations based on market conditions."
          />
          <CalloutBox
            type="warning"
            text="**Risk:** Each strategy carries the risk of its underlying protocol (smart contract bugs, exploits, liquidity issues). Diversification across strategies mitigates this."
          />
        </motion.section>

        {/* Scene 3: Allocation Mechanisms */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Component 3: Allocation Mechanisms</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Democratic funding distribution via voting and governance
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              **Allocation Mechanisms** are governance systems that decide how donated yield is distributed across projects, causes, or recipients.

**Default: Quadratic Funding (QF)**
Octant's default mechanism is quadratic funding, which prevents "whale" dominance by weighting the number of contributors rather than total amount.

**Formula:** Match = (√vote₁ + √vote₂ + ... + √voteₙ)²

**Example:**
- Project A: 1 whale votes 10,000 tokens → Match: √10,000 = 100
- Project B: 100 people vote 100 tokens each → Match: (√100 × 100)² = 10,000
- **Result:** Project B gets 100x more matching funds despite same total votes!

**Alternative Models Supported:**
- **Alpha-Weighted:** Blend of quadratic and linear (configurable α parameter)
- **Conviction Voting:** Votes gain weight over time (rewards commitment)
- **Custom Mechanisms:** Build your own using ITokenizedAllocationMechanism interface

**Token-Gated Participation (Optional):**
Communities can require staking governance tokens to participate in allocation decisions, adding a layer of skin-in-the-game.
            </p>
          </div>

          <ComparisonTable
            columns={['Mechanism', 'Best For', 'Key Feature', 'Anti-Plutocracy']}
            rows={[
              ['Quadratic Funding', 'Public goods, open-source', 'Rewards broad community support', 'High'],
              ['Alpha-Weighted (α=0.5)', 'Balanced governance', 'Blends capital + community', 'Medium'],
              ['Linear Voting', 'Capital efficiency focus', 'Token-weighted', 'Low'],
              ['Conviction Voting', 'Long-term alignment', 'Time-weighted commitment', 'Medium'],
              ['Custom', 'Specialized use cases', 'Fully programmable', 'Varies']
            ]}
          />

          <div className="my-8">
            <div className="p-6 bg-muted/30 border-2 border-muted rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Allocation Mechanism Interface</span>
                <span className="text-xs text-muted-foreground">solidity</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.18;

interface ITokenizedAllocationMechanism {
    
    function receiveDonation(uint256 amount) external;
    
    function vote(uint256 projectId, uint256 amount) external;
    
    function distributeMatching() external;
    
    function getVotingPower(address user) external view returns (uint256);
}

contract SimpleQF is ITokenizedAllocationMechanism {
    
    mapping(uint256 => uint256) public projectVotes;
    mapping(uint256 => mapping(address => uint256)) public userVotes;
    uint256 public matchingPool;
    
    function receiveDonation(uint256 amount) external override {
        matchingPool += amount;
    }
    
    function vote(uint256 projectId, uint256 amount) external override {
        userVotes[projectId][msg.sender] += amount;
        projectVotes[projectId] += amount;
    }
    
    function distributeMatching() external override {
    }
    
    function getVotingPower(address user) external view override returns (uint256) {
        return stakingContract.getEarningPower(user);
    }
}`}</code>
              </pre>
            </div>
          </div>

          <CalloutBox
            type="success"
            text="**Community Empowerment:** Allocation mechanisms let communities collectively decide funding priorities, not just protocol governance."
          />
        </motion.section>

        {/* Scene 4: Community Staking */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Component 4: Community Staking (Optional)</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Token-gated participation and earning power calculation
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed whitespace-pre-line">
              **Community Staking (RegenStaker)** is an optional component that enables token-gated participation in allocation decisions.

**How it works:**
1. Users stake governance tokens (e.g., GLM) in RegenStaker contract
2. Staked tokens earn "earning power" (voting weight)
3. Earning power is used to vote in allocation mechanisms
4. Users can delegate their earning power to other addresses

**Earning Power Calculation:**
Typically follows a sub-linear curve to prevent plutocracy:
- **Formula:** earningPower = √(stakedAmount) × timeFactor
- **Result:** 100 tokens staked ≠ 100x power of 1 token (more like 10x)

**Key Features:**
- **Delegation:** Stake tokens but delegate voting power
- **Delegation Surrogates:** Per-delegatee proxy contracts for custody segregation
- **Whitelist:** Only approved allocation mechanisms can query staking data
- **No Lock-up (Octant default):** Unstake anytime without penalty

**Use Cases:**
- **Token-Gated Allocation:** Only stakers can vote on funding
- **Reputation Systems:** Earning power as reputation metric
- **DAO Governance:** Link treasury funding to governance participation
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    subgraph "User Actions"
        U1[Alice stakes 10,000 GLM]
        U2[Alice delegates to Bob]
    end
    
    subgraph "Staking System"
        RS[RegenStaker]
        DS[Delegation Surrogate<br/>for Bob]
        EP[Earning Power Calculator]
    end
    
    subgraph "Allocation"
        AM[Allocation Mechanism]
        V[Bob votes with<br/>Alice's earning power]
    end
    
    U1 --> RS
    RS --> DS
    U2 --> DS
    RS --> EP
    EP --> AM
    DS --> AM
    AM --> V
    
    style U1 fill:#e1f5ff
    style U2 fill:#e1f5ff
    style RS fill:#ffe1f5
    style DS fill:#ffe1f5
    style EP fill:#ffd700
    style AM fill:#e1f5ff
    style V fill:#d4f1d4`}
          />

          <div className="my-8">
            <div className="p-6 bg-muted/30 border-2 border-muted rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-semibold">Staking Interaction</span>
                <span className="text-xs text-muted-foreground">solidity</span>
              </div>
              <pre className="text-sm overflow-x-auto">
                <code>{`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.18;

interface IRegenStaker {
    function stake(uint256 amount) external;
    
    function unstake(uint256 amount) external;
    
    function delegate(address delegatee) external;
    
    function getEarningPower(address user) external view returns (uint256);
}

contract StakingExample {
    IRegenStaker public staker;
    
    function stakeTokens(uint256 amount) external {
        GLM.approve(address(staker), amount);
        staker.stake(amount);
        
        uint256 power = staker.getEarningPower(msg.sender);
    }
    
    function delegateToBob(address bob) external {
        staker.delegate(bob);
        
    }
    
    function unstakeTokens(uint256 amount) external {
        staker.unstake(amount);
    }
}`}</code>
              </pre>
            </div>
          </div>

          <CalloutBox
            type="info"
            text="**Optional:** Staking is NOT required to use Octant vaults. It's only needed for token-gated allocation participation."
          />
          <CalloutBox
            type="success"
            text="**Flexibility:** Users can stake, delegate, and unstake at any time (no mandatory lock-up in Octant's default implementation)."
          />
        </motion.section>

        {/* Next Steps */}
        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Explore Each Component</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Routing & Splitting** - Learn how yield is distributed to multiple recipients</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Yield Donating Strategy** - Deep dive into active reward harvesting</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Yield Skimming Strategy** - Understand passive appreciation capture</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Allocation Mechanisms** - Explore quadratic funding and custom voting models</span>
            </li>
          </ul>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
