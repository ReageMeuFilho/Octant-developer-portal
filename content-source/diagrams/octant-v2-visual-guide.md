# Octant v2 Protocol: Visual Guide
## 10 Educational Diagrams

This document provides 10 comprehensive diagrams that explain the Octant v2 protocol mechanisms using step-by-step narratives.

---

## Diagram 1: Basic User Deposit & Withdrawal Flow

**Narrative:** Alice has $10,000 USDC she wants to put to work while maintaining full control of her principal.

```mermaid
sequenceDiagram
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
    
    Note over Alice: Alice gets her principal back<br/>Yield was donated to projects!
```

**Key Points:**
- Alice deposits USDC and receives vault shares (like stock certificates)
- Her principal remains safe and withdrawable anytime
- The vault deploys funds to strategies that earn yield
- Alice can redeem her shares for the underlying USDC whenever she wants
- In Octant, the yield is donated to projects, not kept by Alice

---

## Diagram 2: Yield Generation & Distribution Flow

**Narrative:** Bob deposits $50,000 into an Octant vault. The vault earns yield and splits it between compounding (growing Bob's balance) and donations (funding projects).

```mermaid
flowchart TD
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
    style K fill:#FFD700
```

**Key Points:**
- Bob's deposit is split across multiple strategies for diversification
- Each strategy earns yield from external DeFi protocols
- Yield is split based on vault configuration (e.g., 60/40)
- Compounded portion grows Bob's principal
- Donated portion flows to projects via the Dragon Router and allocation mechanism

---

## Diagram 3: Multi-Strategy Vault Allocation

**Narrative:** Carol is a vault manager. She manages a $1M vault and decides how to allocate funds across different strategies to optimize risk and return.

```mermaid
graph TB
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
    style C3 fill:#FFA500
```

**Key Points:**
- Vault manager allocates funds across multiple strategies
- Each strategy has a maximum debt limit for risk management
- Strategies invest in different DeFi protocols with varying risk/return profiles
- Some funds stay idle for quick withdrawals
- Withdrawal queue determines the order strategies are tapped when users withdraw

---

## Diagram 4: Yield Donating Strategy (Discrete Profits)

**Narrative:** A Yield Donating Strategy (like Aave lending) earns discrete profit events. The strategy mints new shares to the Dragon Router equal to the profit amount.

```mermaid
sequenceDiagram
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
    
    Note over YieldDonatingStrategy: Users keep 100% of principal<br/>Yield donated as new shares
```

**Key Points:**
- Used for strategies with discrete profit events (Aave, Compound, Morpho)
- When profit is earned, new shares are minted to the Dragon Router
- Users' principal is protected - their shares represent the same USD value
- Dragon Router can redeem its shares for the donated yield
- If there's a loss, Dragon Router shares can be burned first to protect users

---

## Diagram 5: Yield Skimming Strategy (Appreciating Assets)

**Narrative:** A Yield Skimming Strategy wraps a Liquid Staking Token (LST) like mETH or stETH. As the LST appreciates, the strategy "skims" the appreciation to the Dragon Router.

```mermaid
sequenceDiagram
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
    
    Note over YieldSkimmingStrategy: The appreciation is captured<br/>by diluting shares
```

**Key Points:**
- Used for liquid staking tokens (LSTs) that appreciate over time
- Strategy wraps the LST (stETH, mETH, etc.)
- As the LST appreciates, strategy "skims" the appreciation
- New shares are minted to Dragon Router representing the skimmed value
- Users' shares still represent their original principal in LST terms
- Different from Yield Donating because the underlying asset itself appreciates

---

## Diagram 6: Dragon Router & Allocation Flow

**Narrative:** The Dragon Router receives yield shares from strategies and manages the flow to allocation mechanisms where the community votes on which projects receive funding.

```mermaid
flowchart TD
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
    style P3 fill:#FF69B4
```

**Key Points:**
- Dragon Router is the central hub that receives all donated yield
- Multiple strategies send their yield shares to the Dragon Router
- Dragon Router interacts with allocation mechanisms
- Allocation mechanisms use voting (like quadratic funding) to distribute funds
- Projects that win votes receive shares which they can redeem for USDC/ETH
- This creates a democratic, transparent funding system

---

## Diagram 7: Quadratic Funding Vote & Distribution

**Narrative:** Three users (Alice, Bob, Carol) participate in a quadratic funding round to support projects. Small donors have proportionally more influence than large donors.

```mermaid
flowchart TD
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
    style PB4 fill:#FFA500
```

**Key Points:**
- Quadratic Funding amplifies the voice of many small donors
- Formula uses square root of contributions to reduce whale dominance
- Project A: Bob is a whale (400 votes) but his influence is reduced
- Project B: Two smaller donors (Alice + Carol) have collective impact
- The sum of square roots is squared to get the final QF score
- Matching pool is distributed proportionally to QF scores
- This prevents plutocracy and encourages broad community support

---

## Diagram 8: Proposal Lifecycle (Create → Vote → Queue → Redeem)

**Narrative:** A project goes through the full allocation mechanism lifecycle from proposal creation to receiving funds.

```mermaid
stateDiagram-v2
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
    Canceled --> [*]
```

**Key Points:**
- **Pending**: Proposal submitted, waiting for voting to start
- **Active**: Voting period is open (e.g., 7 days)
- **Succeeded**: Proposal passed quorum threshold
- **Queued**: Shares allocated, timelock delay begins (e.g., 2 days)
- **Executable**: Timelock expired, project can redeem during grace period (e.g., 30 days)
- **Executed**: Project successfully redeemed shares for USDC
- **Defeated**: Did not reach quorum or receive enough votes
- **Canceled**: Proposal was canceled by owner

---

## Diagram 9: Lockup & Rage Quit Mechanism

**Narrative:** David deposits funds with a 6-month lockup for better yield. Later, he needs emergency access, so he initiates a rage quit to gradually withdraw over 3 months.

```mermaid
sequenceDiagram
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
    
    Note over David: David fully exited<br/>Total withdrawn: 10,000 USDC
```

**Key Points:**
- Users can lock funds for a minimum period (e.g., 90 or 180 days)
- Lockup shows commitment and may provide benefits
- **Rage Quit** is an emergency exit mechanism
- When rage quit is initiated, user cannot deposit more
- Shares unlock linearly over 3 months (90 days)
- User can withdraw proportionally as time passes
- Formula: `unlocked = (elapsed time / 90 days) × total locked shares`
- This prevents users from being permanently trapped while maintaining some commitment period

---

## Diagram 10: Trader DCA (Dollar-Cost Averaging) Mechanism

**Narrative:** The Octant protocol needs to convert earned yield (USDC) into GLM tokens over time without creating market manipulation opportunities or giving anyone insider information about when trades happen.

```mermaid
sequenceDiagram
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
    
    Note over Trader: Key Security Features:<br/>1. Random timing (blockhash)<br/>2. TWAP prevents frontrunning<br/>3. Budget limits prevent exploitation<br/>4. No one knows when next trade happens
```

**Key Points:**
- **Purpose**: Convert one token to another (e.g., USDC → GLM) gradually without market manipulation
- **Randomness**: Uses blockhash to determine if a trade can happen (no one has advance notice)
- **Budget System**: Monthly budgets and spending limits prevent over-trading
- **TWAP Oracle**: Uses Time-Weighted Average Price to prevent frontrunning and sandwiching
- **MEV Searchers**: Incentivized to execute trades but profits limited by TWAP
- **Deadlines**: Ensures budget is spent before period ends
- **Slippage Protection**: Trades revert if price moves too far from TWAP
- **No Insider Trading**: Even the deployer doesn't know when trades execute
- This is useful for DAOs/protocols that need to regularly convert tokens without giving traders unfair advantages

---

## Summary Table

| # | Diagram Name | What It Explains | Key Users |
|---|-------------|------------------|-----------|
| 1 | Basic Deposit & Withdrawal | How users interact with vaults | End Users |
| 2 | Yield Generation & Distribution | How yield is earned and split | End Users, Vault Managers |
| 3 | Multi-Strategy Vault | How vaults allocate across strategies | Vault Managers |
| 4 | Yield Donating Strategy | Discrete profit donation mechanism | Strategy Developers |
| 5 | Yield Skimming Strategy | LST appreciation capture | Strategy Developers |
| 6 | Dragon Router & Allocation | How yield flows to projects | Everyone |
| 7 | Quadratic Funding | Democratic voting system | Voters, Projects |
| 8 | Proposal Lifecycle | Project funding workflow | Projects, Governance |
| 9 | Lockup & Rage Quit | Commitment and emergency exit | Users with locked funds |
| 10 | Trader DCA | Automated token conversion | Protocol Operators |

---

## How to Use These Diagrams

**For Developers:**
- Start with Diagrams 1-3 to understand the core vault/strategy system
- Review Diagrams 4-5 to understand yield donation mechanisms
- Study Diagrams 6-8 for allocation and governance integration

**For End Users:**
- Focus on Diagrams 1, 2, 7, and 9
- These explain deposits, yield, voting, and lockups

**For Integration Partners:**
- Review Diagrams 3, 6, 8 to understand how to build on Octant
- Diagram 10 shows the DCA trading integration

**For Documentation:**
- These diagrams can be embedded in tutorials
- Each diagram has a self-contained narrative
- Mermaid syntax can be rendered in GitHub, GitBook, Docusaurus, etc.

---

## Next Steps

1. **Embed in Portal**: Add these to your documentation portal
2. **Interactive Version**: Consider adding interactive elements
3. **Video Tutorials**: Use these as storyboards for video explainers
4. **Translations**: Translate narratives to other languages
5. **User Testing**: Get feedback on which diagrams are most helpful

---

**Generated for Octant v2 Core Documentation**  
**Last Updated:** 2024  
**License:** MIT






