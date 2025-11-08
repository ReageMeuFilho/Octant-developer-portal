import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import Mermaid from '@/components/Mermaid';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function VisualGuide() {
  return (
    <DocsLayoutNew>
      <div className="space-y-12">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Visual Guide
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Octant v2 Protocol: Visual Guide
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            10 comprehensive diagrams that explain the Octant v2 protocol mechanisms using step-by-step narratives.
          </p>
        </div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Diagram 1 */}
          <Card className="p-8" id="diagram-1-basic-user-deposit-withdrawal-flow">
            <h2 className="text-3xl font-bold mb-4">Diagram 1: Basic User Deposit & Withdrawal Flow</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> Alice has $10,000 USDC she wants to put to work while maintaining full control of her principal.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`sequenceDiagram
    participant Alice
    participant Vault
    participant Strategy
    
    Note over Alice: Alice has $10,000 USDC
    
    Alice->>Vault: deposit(10,000 USDC)
    Note over Vault: Mints shares based on<br/>current price per share
    Vault->>Alice: Issues 10,000 vault shares
    Note over Alice: Alice receives 10,000 shares<br/>(1:1 ratio on first deposit)
    
    Vault->>Strategy: Deploys funds to earn yield
    Note over Strategy: Funds are working in<br/>Aave, Lido, or other protocols
    
    Note over Alice: 2 months later...<br/>Alice needs her funds back
    
    Alice->>Vault: redeem(10,000 shares)
    Vault->>Strategy: Withdraws assets from strategies
    Strategy-->>Vault: Returns 10,000 USDC
    Vault->>Alice: Returns 10,000 USDC
    
    Note over Alice: Alice gets her principal back<br/>Yield was donated to projects!`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Alice deposits USDC and receives vault shares (like stock certificates)</li>
                <li>Her principal remains safe and withdrawable anytime</li>
                <li>The vault deploys funds to strategies that earn yield</li>
                <li>Alice can redeem her shares for the underlying USDC whenever she wants</li>
                <li>In Octant, the yield is donated to projects, not kept by Alice</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 2 */}
          <Card className="p-8" id="diagram-2-yield-generation-distribution-flow">
            <h2 className="text-3xl font-bold mb-4">Diagram 2: Yield Generation & Distribution Flow</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> Bob deposits $50,000 into an Octant vault. The vault earns yield and splits it between compounding (growing Bob's balance) and donations (funding projects).
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`flowchart TD
    A[👤 Bob Deposits $50,000 USDC] --> B[🏦 Vault Receives Deposit]
    B --> C[📈 Strategy Deploys to DeFi]
    
    C --> D1[Aave Lending Pool<br/>$30,000 @ 6% APY]
    C --> D2[Lido ETH Staking<br/>$20,000 @ 5% APY]
    
    D1 --> E[💰 Monthly Yield Generated]
    D2 --> E
    
    E --> F[Total Yield: $220/month<br/>Aave: $150 + Lido: $70]
    
    F --> G{Yield Split Decision<br/>60% Compound / 40% Donate}
    
    G -->|60% = $132| H[🔄 Compound Back to Vault<br/>Bob's balance grows]
    G -->|40% = $88| I[🎁 Donate to Dragon Router<br/>Flows to projects]
    
    H --> J[Bob's New Balance: $50,132]
    I --> K[Projects receive $88<br/>via allocation mechanism]
    
    style A fill:#e1f5ff
    style J fill:#90EE90
    style K fill:#FFD700`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Bob's deposit is split across multiple strategies for diversification</li>
                <li>Each strategy earns yield from external DeFi protocols</li>
                <li>Yield is split based on vault configuration (e.g., 60/40)</li>
                <li>Compounded portion grows Bob's principal</li>
                <li>Donated portion flows to projects via the Dragon Router and allocation mechanism</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 3 */}
          <Card className="p-8" id="diagram-3-multi-strategy-vault-allocation">
            <h2 className="text-3xl font-bold mb-4">Diagram 3: Multi-Strategy Vault Allocation</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> Carol is a vault manager. She manages a $1M vault and decides how to allocate funds across different strategies to optimize risk and return.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`graph TB
    subgraph "Vault Management"
        A[👤 Carol - Vault Manager]
        B[🏦 Octant Vault<br/>Total: $1,000,000]
    end
    
    A -->|Sets strategy allocations| B
    
    subgraph "Strategy Allocation"
        B -->|40% = $400k<br/>Max Debt: $400k| C1[Strategy 1: Aave USDC<br/>Low Risk - 5% APY]
        B -->|30% = $300k<br/>Max Debt: $300k| C2[Strategy 2: Lido Staking<br/>Medium Risk - 4.5% APY]
        B -->|20% = $200k<br/>Max Debt: $200k| C3[Strategy 3: Morpho<br/>Medium Risk - 6% APY]
        B -->|10% = $100k<br/>Kept as buffer| C4[Idle in Vault<br/>For fast withdrawals]
    end
    
    subgraph "External DeFi Protocols"
        C1 --> D1[Aave Protocol<br/>Earns: $20k/year]
        C2 --> D2[Lido Protocol<br/>Earns: $13.5k/year]
        C3 --> D3[Morpho Protocol<br/>Earns: $12k/year]
    end
    
    subgraph "Withdrawal Queue"
        E[Default Withdrawal Order]
        E --> F1[1. Strategy 1 - Aave]
        E --> F2[2. Strategy 2 - Lido]
        E --> F3[3. Strategy 3 - Morpho]
        E --> F4[4. Idle funds]
    end
    
    style A fill:#FFB6C1
    style B fill:#87CEEB
    style C1 fill:#90EE90
    style C2 fill:#FFD700
    style C3 fill:#FFA500`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Vault manager allocates funds across multiple strategies</li>
                <li>Each strategy has a maximum debt limit for risk management</li>
                <li>Strategies invest in different DeFi protocols with varying risk/return profiles</li>
                <li>Some funds stay idle for quick withdrawals</li>
                <li>Withdrawal queue determines the order strategies are tapped when users withdraw</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 4 */}
          <Card className="p-8" id="diagram-4-yield-donating-strategy">
            <h2 className="text-3xl font-bold mb-4">Diagram 4: Yield Donating Strategy (Discrete Profits)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> A Yield Donating Strategy (like Aave lending) earns discrete profit events. The strategy mints new shares to the Dragon Router equal to the profit amount.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`sequenceDiagram
    participant Keeper
    participant YieldDonatingStrategy
    participant AaveProtocol
    participant DragonRouter
    
    Note over YieldDonatingStrategy: Initial State:<br/>1000 shares outstanding<br/>1000 USDC deployed<br/>Price: 1 USDC per share
    
    Keeper->>YieldDonatingStrategy: harvest()
    YieldDonatingStrategy->>AaveProtocol: Claim accrued interest
    AaveProtocol-->>YieldDonatingStrategy: Returns 50 USDC profit
    
    Note over YieldDonatingStrategy: Strategy now holds:<br/>1050 USDC total
    
    YieldDonatingStrategy->>YieldDonatingStrategy: Calculate profit: 50 USDC
    YieldDonatingStrategy->>YieldDonatingStrategy: Convert profit to shares:<br/>50 USDC → 50 shares
    
    YieldDonatingStrategy->>DragonRouter: Mint 50 new shares
    Note over DragonRouter: Dragon Router receives<br/>50 shares representing the profit
    
    Note over YieldDonatingStrategy: Final State:<br/>1050 shares outstanding<br/>1050 USDC deployed<br/>Price: still ~1 USDC per share<br/><br/>Users: 1000 shares<br/>Dragon Router: 50 shares
    
    Note over YieldDonatingStrategy: Users keep 100% of principal<br/>Yield donated as new shares`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Used for strategies with discrete profit events (Aave, Compound, Morpho)</li>
                <li>When profit is earned, new shares are minted to the Dragon Router</li>
                <li>Users' principal is protected - their shares represent the same USD value</li>
                <li>Dragon Router can redeem its shares for the donated yield</li>
                <li>If there's a loss, Dragon Router shares can be burned first to protect users</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 5 */}
          <Card className="p-8" id="diagram-5-yield-skimming-strategy">
            <h2 className="text-3xl font-bold mb-4">Diagram 5: Yield Skimming Strategy (Appreciating Assets)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> A Yield Skimming Strategy wraps a Liquid Staking Token (LST) like mETH or stETH. As the LST appreciates, the strategy "skims" the appreciation to the Dragon Router.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`sequenceDiagram
    participant User
    participant YieldSkimmingStrategy
    participant LidoProtocol
    participant DragonRouter
    
    Note over YieldSkimmingStrategy: User deposits 100 stETH<br/>Receives 100 shares<br/>stETH value: 100 ETH worth
    
    Note over LidoProtocol: Time passes...<br/>stETH accrues staking rewards<br/>1 stETH now = 1.05 ETH
    
    User->>YieldSkimmingStrategy: Someone calls report()
    YieldSkimmingStrategy->>LidoProtocol: Check stETH value
    LidoProtocol-->>YieldSkimmingStrategy: 100 stETH = 105 ETH worth
    
    Note over YieldSkimmingStrategy: Appreciation detected:<br/>5 ETH worth of yield
    
    YieldSkimmingStrategy->>YieldSkimmingStrategy: Calculate skim amount:<br/>Asset appreciation = 5%
    
    YieldSkimmingStrategy->>DragonRouter: Mint shares representing<br/>the 5 ETH appreciation
    
    Note over DragonRouter: Dragon Router receives shares<br/>worth ~5 ETH of stETH
    
    Note over YieldSkimmingStrategy: User still has:<br/>100 shares = 100 stETH<br/>(worth ~100 ETH equivalent)<br/><br/>Dragon Router has:<br/>~4.76 shares = ~5 ETH worth
    
    Note over YieldSkimmingStrategy: The appreciation is captured<br/>by diluting shares`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Used for liquid staking tokens (LSTs) that appreciate over time</li>
                <li>Strategy wraps the LST (stETH, mETH, etc.)</li>
                <li>As the LST appreciates, strategy "skims" the appreciation</li>
                <li>New shares are minted to Dragon Router representing the skimmed value</li>
                <li>Users' shares still represent their original principal in LST terms</li>
                <li>Different from Yield Donating because the underlying asset itself appreciates</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 6 */}
          <Card className="p-8" id="diagram-6-dragon-router-allocation-flow">
            <h2 className="text-3xl font-bold mb-4">Diagram 6: Dragon Router & Allocation Flow</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> The Dragon Router receives yield shares from strategies and manages the flow to allocation mechanisms where the community votes on which projects receive funding.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`flowchart TD
    subgraph "Yield Sources"
        S1[Strategy 1: Aave<br/>Mints 100 shares]
        S2[Strategy 2: Lido<br/>Mints 75 shares]
        S3[Strategy 3: Morpho<br/>Mints 50 shares]
    end
    
    S1 --> DR[🐉 Dragon Router<br/>Accumulates yield shares]
    S2 --> DR
    S3 --> DR
    
    DR --> |Holds 225 shares total| DR2[Dragon Router Balance:<br/>225 shares from various strategies]
    
    DR2 --> AM[🗳️ Allocation Mechanism<br/>Community Voting System]
    
    subgraph "Allocation Mechanism"
        AM --> Vote[Users vote with their<br/>voting power on projects]
        Vote --> QF[Quadratic Funding<br/>Calculation]
        QF --> Dist[Distribution Phase]
    end
    
    Dist --> P1[Project A: Climate<br/>Receives 40% = 90 shares]
    Dist --> P2[Project B: Education<br/>Receives 35% = 79 shares]
    Dist --> P3[Project C: Open Source<br/>Receives 25% = 56 shares]
    
    P1 --> R1[Project redeems shares<br/>for underlying USDC]
    P2 --> R2[Project redeems shares<br/>for underlying USDC]
    P3 --> R3[Project redeems shares<br/>for underlying USDC]
    
    style DR fill:#FF6347
    style AM fill:#4169E1
    style P1 fill:#32CD32
    style P2 fill:#FFD700
    style P3 fill:#FF69B4`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Dragon Router is the central hub that receives all donated yield</li>
                <li>Multiple strategies send their yield shares to the Dragon Router</li>
                <li>Dragon Router interacts with allocation mechanisms</li>
                <li>Allocation mechanisms use voting (like quadratic funding) to distribute funds</li>
                <li>Projects that win votes receive shares which they can redeem for USDC/ETH</li>
                <li>This creates a democratic, transparent funding system</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 7 */}
          <Card className="p-8" id="diagram-7-quadratic-funding-vote-distribution">
            <h2 className="text-3xl font-bold mb-4">Diagram 7: Quadratic Funding Vote & Distribution</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> Three users (Alice, Bob, Carol) participate in a quadratic funding round to support projects. Small donors have proportionally more influence than large donors.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`flowchart TD
    subgraph "Voting Phase"
        A[👤 Alice<br/>Has 100 voting power<br/>Votes: 64 to Project A<br/>36 to Project B]
        B[👤 Bob<br/>Has 400 voting power<br/>Votes: 400 to Project A]
        C[👤 Carol<br/>Has 100 voting power<br/>Votes: 100 to Project B]
    end
    
    A --> QF[📊 Quadratic Funding Formula<br/>√(sum of √contributions)]
    B --> QF
    C --> QF
    
    subgraph "Calculation for Project A"
        QF --> PA1[Project A Contributions:<br/>Alice: 64, Bob: 400]
        PA1 --> PA2[√64 + √400 = 8 + 20 = 28]
        PA2 --> PA3[28² = 784 QF score]
    end
    
    subgraph "Calculation for Project B"
        QF --> PB1[Project B Contributions:<br/>Alice: 36, Carol: 100]
        PB1 --> PB2[√36 + √100 = 6 + 10 = 16]
        PB2 --> PB3[16² = 256 QF score]
    end
    
    PA3 --> Total[Total QF Score: 1040]
    PB3 --> Total
    
    Total --> Match[Matching Pool: $10,000]
    
    Match --> PA4[Project A gets:<br/>784/1040 × $10,000 = $7,538]
    Match --> PB4[Project B gets:<br/>256/1040 × $10,000 = $2,462]
    
    style A fill:#FFB6C1
    style B fill:#87CEEB  
    style C fill:#90EE90
    style PA4 fill:#FFD700
    style PB4 fill:#FFA500`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Quadratic Funding amplifies the voice of many small donors</li>
                <li>Formula uses square root of contributions to reduce whale dominance</li>
                <li>Project A: Bob is a whale (400 votes) but his influence is reduced</li>
                <li>Project B: Two smaller donors (Alice + Carol) have collective impact</li>
                <li>The sum of square roots is squared to get the final QF score</li>
                <li>Matching pool is distributed proportionally to QF scores</li>
                <li>This prevents plutocracy and encourages broad community support</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 8 */}
          <Card className="p-8" id="diagram-8-proposal-lifecycle">
            <h2 className="text-3xl font-bold mb-4">Diagram 8: Proposal Lifecycle (Create → Vote → Queue → Redeem)</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> A project goes through the full allocation mechanism lifecycle from proposal creation to receiving funds.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`stateDiagram-v2
    [*] --> Pending: Project submits proposal
    
    note right of Pending
        Project: "Clean Water Initiative"
        Wallet: 0x123...
        Status: Waiting for voting period
    end note
    
    Pending --> Active: Voting period starts
    
    note right of Active
        Users can now vote
        Duration: 7 days
        Current votes: accumulating...
    end note
    
    Active --> Defeated: Quorum not reached
    Active --> Succeeded: Quorum reached & votes > 0
    
    note right of Succeeded
        Project received enough votes
        Final tally: 5,420 QF score
        Waiting for finalization
    end note
    
    Succeeded --> Queued: Owner finalizes & queues proposal
    
    note right of Queued
        Shares calculated: 542 shares
        Timelock delay: 2 days
        Can redeem after timelock
    end note
    
    Queued --> Executable: Timelock expires
    
    note right of Executable
        Redemption window: 30 days
        Project can claim 542 shares
        Worth ~$5,420 USDC
    end note
    
    Executable --> Executed: Project redeems shares for USDC
    
    note right of Executed
        Project received: $5,420 USDC
        Shares burned: 542
        Funding complete ✅
    end note
    
    Defeated --> [*]
    Executed --> [*]
    
    Active --> Canceled: Owner cancels proposal
    Pending --> Canceled: Owner cancels proposal
    Canceled --> [*]`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Pending:</strong> Proposal submitted, waiting for voting to start</li>
                <li><strong>Active:</strong> Voting period is open (e.g., 7 days)</li>
                <li><strong>Succeeded:</strong> Proposal passed quorum threshold</li>
                <li><strong>Queued:</strong> Shares allocated, timelock delay begins (e.g., 2 days)</li>
                <li><strong>Executable:</strong> Timelock expired, project can redeem during grace period (e.g., 30 days)</li>
                <li><strong>Executed:</strong> Project successfully redeemed shares for USDC</li>
                <li><strong>Defeated:</strong> Did not reach quorum or receive enough votes</li>
                <li><strong>Canceled:</strong> Proposal was canceled by owner</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 9 */}
          <Card className="p-8" id="diagram-9-lockup-rage-quit-mechanism">
            <h2 className="text-3xl font-bold mb-4">Diagram 9: Lockup & Rage Quit Mechanism</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> David deposits funds with a 6-month lockup for better yield. Later, he needs emergency access, so he initiates a rage quit to gradually withdraw over 3 months.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`sequenceDiagram
    participant David
    participant DragonStrategy
    participant Time
    
    Note over David: Day 0: David wants to commit<br/>for better returns
    
    David->>DragonStrategy: depositWithLockup(10,000 USDC, 180 days)
    DragonStrategy->>David: Issues 10,000 shares<br/>Locked until Day 180
    
    Note over DragonStrategy: Lockup Info:<br/>Locked shares: 10,000<br/>Unlock time: Day 180<br/>Status: Normal lockup
    
    Note over Time: Day 60: Emergency!<br/>David needs funds
    
    David->>DragonStrategy: initiateRageQuit()
    
    Note over DragonStrategy: Rage quit initiated!<br/>New unlock time: Day 150 (90 days)<br/>Status: Rage quit mode
    
    Note over David: David cannot deposit more<br/>during rage quit period
    
    Note over Time: Day 90: 30 days into rage quit<br/>(1/3 of 90-day period)
    
    David->>DragonStrategy: Check withdrawable shares
    DragonStrategy-->>David: 3,333 shares unlocked<br/>(10,000 × 30/90)<br/>6,667 still locked
    
    David->>DragonStrategy: withdraw(3,333 shares)
    DragonStrategy->>David: Returns ~3,333 USDC
    
    Note over Time: Day 120: 60 days into rage quit<br/>(2/3 of 90-day period)
    
    David->>DragonStrategy: Check withdrawable shares  
    DragonStrategy-->>David: 6,667 shares unlocked<br/>(minus already withdrawn)<br/>3,333 available now
    
    David->>DragonStrategy: withdraw(3,333 shares)
    DragonStrategy->>David: Returns ~3,333 USDC
    
    Note over Time: Day 150: Full 90 days elapsed
    
    David->>DragonStrategy: withdraw(remaining 3,334 shares)
    DragonStrategy->>David: Returns ~3,334 USDC
    
    Note over David: David fully exited<br/>Total withdrawn: 10,000 USDC`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Users can lock funds for a minimum period (e.g., 90 or 180 days)</li>
                <li>Lockup shows commitment and may provide benefits</li>
                <li><strong>Rage Quit</strong> is an emergency exit mechanism</li>
                <li>When rage quit is initiated, user cannot deposit more</li>
                <li>Shares unlock linearly over 3 months (90 days)</li>
                <li>User can withdraw proportionally as time passes</li>
                <li>Formula: <code>unlocked = (elapsed time / 90 days) × total locked shares</code></li>
                <li>This prevents users from being permanently trapped while maintaining some commitment period</li>
              </ul>
            </div>
          </Card>

          {/* Diagram 10 */}
          <Card className="p-8" id="diagram-10-trader-dca-mechanism">
            <h2 className="text-3xl font-bold mb-4">Diagram 10: Trader DCA (Dollar-Cost Averaging) Mechanism</h2>
            <p className="text-lg text-muted-foreground mb-6">
              <strong>Narrative:</strong> The Octant protocol needs to convert earned yield (USDC) into GLM tokens over time without creating market manipulation opportunities or giving anyone insider information about when trades happen.
            </p>
            
            <div className="mb-6 p-4 bg-background border border-border rounded-lg">
              <Mermaid code={`sequenceDiagram
    participant Block as Blockchain<br/>(Block N-1)
    participant Searcher as MEV Searcher
    participant Trader as Trader Contract
    participant Oracle as TWAP Oracle
    participant UniV3 as Uniswap V3 Pool
    participant Dragon as Dragon Router
    
    Note over Trader: Setup:<br/>Base token: USDC<br/>Quote token: GLM<br/>Budget: $10,000 for this month<br/>Already spent: $7,000<br/>Remaining: $3,000
    
    Note over Block: Block N-1 mined<br/>Block hash: 0xABCD...
    
    Searcher->>Searcher: Checks: Can we trade at Block N?<br/>Hash % probability = tradeable?
    
    Note over Searcher: blockhash(N-1) % 100 < 20<br/>✅ Yes, we can trade!
    
    Searcher->>Trader: convert(blockHeight: N)
    
    Trader->>Trader: Verify block hash randomness
    Note over Trader: Check spending limits:<br/>- Not exceeding budget<br/>- Not spending too fast<br/>- Respecting deadlines
    
    Trader->>Oracle: getQuoteAmount(USDC: 500)
    Oracle-->>Trader: TWAP price: 1 USDC = 3 GLM<br/>Expected: 1,500 GLM (±2% slippage)
    
    Trader->>UniV3: Transfer 500 USDC<br/>Execute swap with 2% slippage tolerance
    UniV3->>UniV3: Swap 500 USDC → GLM
    UniV3-->>Trader: Returns 1,485 GLM<br/>(within slippage tolerance ✅)
    
    Trader->>Dragon: Transfer 1,485 GLM
    
    Note over Trader: Updated state:<br/>Already spent: $7,500<br/>Remaining budget: $2,500<br/>Next trade: determined by<br/>future block hash (random)
    
    Note over Searcher: Searcher gets MEV<br/>(limited by TWAP protection)
    
    Note over Trader: Key Security Features:<br/>1. Random timing (blockhash)<br/>2. TWAP prevents frontrunning<br/>3. Budget limits prevent exploitation<br/>4. No one knows when next trade happens`} />
            </div>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold mb-3">Key Points:</h3>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li><strong>Purpose:</strong> Convert one token to another (e.g., USDC → GLM) gradually without market manipulation</li>
                <li><strong>Randomness:</strong> Uses blockhash to determine if a trade can happen (no one has advance notice)</li>
                <li><strong>Budget System:</strong> Monthly budgets and spending limits prevent over-trading</li>
                <li><strong>TWAP Oracle:</strong> Uses Time-Weighted Average Price to prevent frontrunning and sandwiching</li>
                <li><strong>MEV Searchers:</strong> Incentivized to execute trades but profits limited by TWAP</li>
                <li><strong>Deadlines:</strong> Ensures budget is spent before period ends</li>
                <li><strong>Slippage Protection:</strong> Trades revert if price moves too far from TWAP</li>
                <li><strong>No Insider Trading:</strong> Even the deployer doesn't know when trades execute</li>
                <li>This is useful for DAOs/protocols that need to regularly convert tokens without giving traders unfair advantages</li>
              </ul>
            </div>
          </Card>

          {/* Summary Table */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">Summary Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-3 font-semibold">#</th>
                    <th className="text-left p-3 font-semibold">Diagram Name</th>
                    <th className="text-left p-3 font-semibold">What It Explains</th>
                    <th className="text-left p-3 font-semibold">Key Users</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border">
                    <td className="p-3">1</td>
                    <td className="p-3">Basic Deposit & Withdrawal</td>
                    <td className="p-3">How users interact with vaults</td>
                    <td className="p-3">End Users</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">2</td>
                    <td className="p-3">Yield Generation & Distribution</td>
                    <td className="p-3">How yield is earned and split</td>
                    <td className="p-3">End Users, Vault Managers</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">3</td>
                    <td className="p-3">Multi-Strategy Vault</td>
                    <td className="p-3">How vaults allocate across strategies</td>
                    <td className="p-3">Vault Managers</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">4</td>
                    <td className="p-3">Yield Donating Strategy</td>
                    <td className="p-3">Discrete profit donation mechanism</td>
                    <td className="p-3">Strategy Developers</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">5</td>
                    <td className="p-3">Yield Skimming Strategy</td>
                    <td className="p-3">LST appreciation capture</td>
                    <td className="p-3">Strategy Developers</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">6</td>
                    <td className="p-3">Dragon Router & Allocation</td>
                    <td className="p-3">How yield flows to projects</td>
                    <td className="p-3">Everyone</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">7</td>
                    <td className="p-3">Quadratic Funding</td>
                    <td className="p-3">Democratic voting system</td>
                    <td className="p-3">Voters, Projects</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">8</td>
                    <td className="p-3">Proposal Lifecycle</td>
                    <td className="p-3">Project funding workflow</td>
                    <td className="p-3">Projects, Governance</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">9</td>
                    <td className="p-3">Lockup & Rage Quit</td>
                    <td className="p-3">Commitment and emergency exit</td>
                    <td className="p-3">Users with locked funds</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-3">10</td>
                    <td className="p-3">Trader DCA</td>
                    <td className="p-3">Automated token conversion</td>
                    <td className="p-3">Protocol Operators</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>

          {/* How to Use */}
          <Card className="p-8">
            <h2 className="text-3xl font-bold mb-6">How to Use These Diagrams</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">For Developers</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Start with Diagrams 1-3 to understand the core vault/strategy system</li>
                  <li>Review Diagrams 4-5 to understand yield donation mechanisms</li>
                  <li>Study Diagrams 6-8 for allocation and governance integration</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">For End Users</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Focus on Diagrams 1, 2, 7, and 9</li>
                  <li>These explain deposits, yield, voting, and lockups</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3">For Integration Partners</h3>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Review Diagrams 3, 6, 8 to understand how to build on Octant</li>
                  <li>Diagram 10 shows the DCA trading integration</li>
                </ul>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </DocsLayoutNew>
  );
}
