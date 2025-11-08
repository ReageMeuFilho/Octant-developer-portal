export interface DiagramData {
  id: string;
  title: string;
  slug: string;
  category: string;
  narrative: string;
  mermaidCode: string;
  keyPoints: string[];
  status: 'available' | 'coming-soon';
}

export const diagramsData: Record<string, DiagramData> = {
  'deposit-withdrawal': {
    id: '01',
    title: 'Deposit & Withdrawal',
    slug: 'deposit-withdrawal',
    category: 'core-concepts',
    narrative: "Alice has $10,000 USDC she wants to put to work while maintaining full control of her principal.",
    mermaidCode: `sequenceDiagram
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
    
    Note over Alice: Alice gets her principal back<br/>Yield was donated to projects!`,
    keyPoints: [
      "Alice deposits USDC and receives vault shares (like stock certificates)",
      "Her principal remains safe and withdrawable anytime",
      "The vault deploys funds to strategies that earn yield",
      "Alice can redeem her shares for the underlying USDC whenever she wants",
      "In Octant, the yield is donated to projects, not kept by Alice"
    ],
    status: 'available'
  },
  'yield-generation': {
    id: '02',
    title: 'Yield Generation',
    slug: 'yield-generation',
    category: 'core-concepts',
    narrative: "Bob deposits $50,000 into an Octant vault. The vault earns yield and splits it between compounding (growing Bob's balance) and donations (funding projects).",
    mermaidCode: `flowchart TD
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
    style K fill:#FFD700`,
    keyPoints: [
      "Bob's deposit is split across multiple strategies for diversification",
      "Each strategy earns yield from external DeFi protocols",
      "Yield is split based on vault configuration (e.g., 60/40)",
      "Compounded portion grows Bob's principal",
      "Donated portion flows to projects via the Dragon Router and allocation mechanism"
    ],
    status: 'available'
  },
  'multi-strategy-vault': {
    id: '03',
    title: 'Multi-Strategy Vault',
    slug: 'multi-strategy-vault',
    category: 'core-concepts',
    narrative: "Carol is a vault manager. She manages a $1M vault and decides how to allocate funds across different strategies to optimize risk and return.",
    mermaidCode: `graph TB
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
    style C3 fill:#FFA500`,
    keyPoints: [
      "Vault manager allocates funds across multiple strategies",
      "Each strategy has a maximum debt limit for risk management",
      "Strategies invest in different DeFi protocols with varying risk/return profiles",
      "Some funds stay idle for quick withdrawals",
      "Withdrawal queue determines the order strategies are tapped when users withdraw"
    ],
    status: 'available'
  },
  'emergency-shutdown': {
    id: '11',
    title: 'Emergency Shutdown',
    slug: 'emergency-shutdown',
    category: 'core-concepts',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'loss-scenario': {
    id: '12',
    title: 'Loss Scenario',
    slug: 'loss-scenario',
    category: 'core-concepts',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'share-math': {
    id: '30',
    title: 'Share Math',
    slug: 'share-math',
    category: 'core-concepts',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'yield-donating': {
    id: '04',
    title: 'Yield Donating',
    slug: 'yield-donating',
    category: 'yield-mechanisms',
    narrative: "A Yield Donating Strategy (like Aave lending) earns discrete profit events. The strategy mints new shares to the Dragon Router equal to the profit amount.",
    mermaidCode: `sequenceDiagram
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
    
    Note over YieldDonatingStrategy: Users keep 100% of principal<br/>Yield donated as new shares`,
    keyPoints: [
      "Used for strategies with discrete profit events (Aave, Compound, Morpho)",
      "When profit is earned, new shares are minted to the Dragon Router",
      "Users' principal is protected - their shares represent the same USD value",
      "Dragon Router can redeem its shares for the donated yield",
      "If there's a loss, Dragon Router shares can be burned first to protect users"
    ],
    status: 'available'
  },
  'yield-skimming': {
    id: '05',
    title: 'Yield Skimming',
    slug: 'yield-skimming',
    category: 'yield-mechanisms',
    narrative: "A Yield Skimming Strategy wraps a Liquid Staking Token (LST) like mETH or stETH. As the LST appreciates, the strategy 'skims' the appreciation to the Dragon Router.",
    mermaidCode: `sequenceDiagram
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
    
    Note over YieldSkimmingStrategy: The appreciation is captured<br/>by diluting shares`,
    keyPoints: [
      "Used for liquid staking tokens (LSTs) that appreciate over time",
      "Strategy wraps the LST (stETH, mETH, etc.)",
      "As the LST appreciates, strategy 'skims' the appreciation",
      "New shares are minted to Dragon Router representing the skimmed value",
      "Users' shares still represent their original principal in LST terms",
      "Different from Yield Donating because the underlying asset itself appreciates"
    ],
    status: 'available'
  },
  'harvest-cycle': {
    id: '15',
    title: 'Harvest Cycle',
    slug: 'harvest-cycle',
    category: 'yield-mechanisms',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'debt-management': {
    id: '16',
    title: 'Debt Management',
    slug: 'debt-management',
    category: 'yield-mechanisms',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'strategy-decision-tree': {
    id: '33',
    title: 'Strategy Decision Tree',
    slug: 'strategy-decision-tree',
    category: 'yield-mechanisms',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'dragon-router': {
    id: '06',
    title: 'Dragon Router',
    slug: 'dragon-router',
    category: 'governance-allocation',
    narrative: "The Dragon Router receives yield shares from strategies and manages the flow to allocation mechanisms where the community votes on which projects receive funding.",
    mermaidCode: `flowchart TD
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
    style P3 fill:#FF69B4`,
    keyPoints: [
      "Dragon Router is the central hub that receives all donated yield",
      "Multiple strategies send their yield shares to the Dragon Router",
      "Dragon Router interacts with allocation mechanisms",
      "Allocation mechanisms use voting (like quadratic funding) to distribute funds",
      "Projects that win votes receive shares which they can redeem for USDC/ETH",
      "This creates a democratic, transparent funding system"
    ],
    status: 'available'
  },
  'quadratic-funding': {
    id: '07',
    title: 'Quadratic Funding',
    slug: 'quadratic-funding',
    category: 'governance-allocation',
    narrative: "Three users (Alice, Bob, Carol) participate in a quadratic funding round to support projects. Small donors have proportionally more influence than large donors.",
    mermaidCode: `flowchart TD
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
    style PB4 fill:#FFA500`,
    keyPoints: [
      "Quadratic Funding amplifies the voice of many small donors",
      "Formula uses square root of contributions to reduce whale dominance",
      "Project A: Bob is a whale (400 votes) but his influence is reduced",
      "Project B: Two smaller donors (Alice + Carol) have collective impact",
      "The sum of square roots is squared to get the final QF score",
      "Matching pool is distributed proportionally to QF scores",
      "This prevents plutocracy and encourages broad community support"
    ],
    status: 'available'
  },
  'proposal-lifecycle': {
    id: '08',
    title: 'Proposal Lifecycle',
    slug: 'proposal-lifecycle',
    category: 'governance-allocation',
    narrative: "A project goes through the full allocation mechanism lifecycle from proposal creation to receiving funds.",
    mermaidCode: `stateDiagram-v2
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
    Canceled --> [*]`,
    keyPoints: [
      "Pending: Proposal submitted, waiting for voting to start",
      "Active: Voting period is open (e.g., 7 days)",
      "Succeeded: Proposal passed quorum threshold",
      "Queued: Shares allocated, timelock delay begins (e.g., 2 days)",
      "Executable: Timelock expired, project can redeem during grace period (e.g., 30 days)",
      "Executed: Project successfully redeemed shares for USDC",
      "Defeated: Did not reach quorum or receive enough votes",
      "Canceled: Proposal was canceled by owner"
    ],
    status: 'available'
  },
  'access-control': {
    id: '13',
    title: 'Access Control',
    slug: 'access-control',
    category: 'governance-allocation',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'payment-splitter': {
    id: '25',
    title: 'Payment Splitter',
    slug: 'payment-splitter',
    category: 'governance-allocation',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'lockup-rage-quit': {
    id: '09',
    title: 'Lockup & Rage Quit',
    slug: 'lockup-rage-quit',
    category: 'advanced-features',
    narrative: "David deposits funds with a 6-month lockup for better yield. Later, he needs emergency access, so he initiates a rage quit to gradually withdraw over 3 months.",
    mermaidCode: `sequenceDiagram
    participant David
    participant DragonStrategy
    participant Time
    
    Note over David: Day 0: David wants to commit<br/>for better returns
    
    David->>DragonStrategy: depositWithLockup(10,000 USDC, 180 days)
    DragonStrategy->>David: Issues 10,000 shares<br/>Locked until Day 180
    
    Note over DragonStrategy: Lockup Info:<br/>Locked shares: 10,000<br/>Unlock time: Day 180<br/>Status: Normal lockup
    
    Note over Time: Day 60: Emergency!<br/>David needs funds
    
    David->>DragonStrategy: initiateRageQuit()
    DragonStrategy->>David: Rage quit initiated<br/>Gradual unlock starts
    
    Note over DragonStrategy: New Status:<br/>Rage quit active<br/>Unlock period: 90 days<br/>Daily unlock: 111 shares
    
    Note over Time: Day 90: 30 days later
    
    David->>DragonStrategy: withdraw()
    DragonStrategy->>David: Withdraws 3,333 shares<br/>(30 days × 111 shares/day)
    
    Note over Time: Day 150: 90 days after rage quit
    
    David->>DragonStrategy: withdraw()
    DragonStrategy->>David: Withdraws remaining 6,667 shares<br/>Rage quit complete`,
    keyPoints: [
      "Lockup periods offer better yield in exchange for commitment",
      "Rage quit allows early exit but with a gradual unlock period",
      "Shares unlock linearly over the rage quit period (e.g., 90 days)",
      "User can withdraw unlocked shares at any time during rage quit",
      "Protects the protocol from sudden large withdrawals",
      "Balances user flexibility with protocol stability"
    ],
    status: 'available'
  },
  'trader-dca': {
    id: '10',
    title: 'Trader DCA',
    slug: 'trader-dca',
    category: 'advanced-features',
    narrative: "Emma wants to dollar-cost average (DCA) into ETH using her vault yield. Instead of receiving USDC yield, she automatically converts it to ETH over time.",
    mermaidCode: `sequenceDiagram
    participant Emma
    participant Vault
    participant DCAModule
    participant DEX
    
    Note over Emma: Emma has 50,000 USDC<br/>in the vault
    
    Emma->>DCAModule: setupDCA(target: ETH, frequency: weekly)
    Note over DCAModule: DCA Config:<br/>Convert yield to ETH<br/>Every 7 days
    
    Note over Vault: Week 1: Vault earns<br/>$100 yield for Emma
    
    Vault->>DCAModule: Yield available: $100
    DCAModule->>DEX: Swap $100 USDC for ETH
    DEX-->>DCAModule: Returns 0.04 ETH
    DCAModule->>Emma: Sends 0.04 ETH
    
    Note over Emma: Emma's ETH balance: 0.04 ETH
    
    Note over Vault: Week 2: Vault earns<br/>$100 yield for Emma
    
    Vault->>DCAModule: Yield available: $100
    DCAModule->>DEX: Swap $100 USDC for ETH
    DEX-->>DCAModule: Returns 0.038 ETH<br/>(price changed)
    DCAModule->>Emma: Sends 0.038 ETH
    
    Note over Emma: Emma's ETH balance: 0.078 ETH<br/>DCA smooths price volatility`,
    keyPoints: [
      "Automatically converts yield to target asset (ETH, BTC, etc.)",
      "DCA reduces impact of price volatility",
      "Configurable frequency (daily, weekly, monthly)",
      "No need to manually claim and swap",
      "Ideal for long-term accumulation strategies",
      "Can be combined with other vault features"
    ],
    status: 'available'
  },
  'hats-protocol': {
    id: '14',
    title: 'Hats Protocol',
    slug: 'hats-protocol',
    category: 'advanced-features',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'safe-module': {
    id: '19',
    title: 'Safe Module',
    slug: 'safe-module',
    category: 'advanced-features',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'passport': {
    id: '20',
    title: 'Passport',
    slug: 'passport',
    category: 'advanced-features',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'linear-allowance': {
    id: '21',
    title: 'Linear Allowance',
    slug: 'linear-allowance',
    category: 'advanced-features',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'factory-deployment': {
    id: '22',
    title: 'Factory Deployment',
    slug: 'factory-deployment',
    category: 'deployment-integration',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'clone-deployment': {
    id: '23',
    title: 'Clone Deployment',
    slug: 'clone-deployment',
    category: 'deployment-integration',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'external-integration': {
    id: '24',
    title: 'External Integration',
    slug: 'external-integration',
    category: 'deployment-integration',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'cross-vault-aggregation': {
    id: '26',
    title: 'Cross-Vault Aggregation',
    slug: 'cross-vault-aggregation',
    category: 'deployment-integration',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'first-time-user': {
    id: '27',
    title: 'First-Time User',
    slug: 'first-time-user',
    category: 'user-journeys',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'power-user': {
    id: '28',
    title: 'Power User',
    slug: 'power-user',
    category: 'user-journeys',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'dao-treasury': {
    id: '29',
    title: 'DAO Treasury',
    slug: 'dao-treasury',
    category: 'user-journeys',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'octant-vs-traditional': {
    id: '34',
    title: 'Octant vs Traditional',
    slug: 'octant-vs-traditional',
    category: 'user-journeys',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },

  'withdrawal-queue': {
    id: '17',
    title: 'Withdrawal Queue',
    slug: 'withdrawal-queue',
    category: 'operations-edge-cases',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'vault-migration': {
    id: '18',
    title: 'Vault Migration',
    slug: 'vault-migration',
    category: 'operations-edge-cases',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'health-monitoring': {
    id: '36',
    title: 'Health Monitoring',
    slug: 'health-monitoring',
    category: 'operations-edge-cases',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'failed-withdrawal': {
    id: '38',
    title: 'Failed Withdrawal',
    slug: 'failed-withdrawal',
    category: 'operations-edge-cases',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
  'slippage-protection': {
    id: '40',
    title: 'Slippage Protection',
    slug: 'slippage-protection',
    category: 'operations-edge-cases',
    narrative: 'Coming soon',
    mermaidCode: '',
    keyPoints: [],
    status: 'coming-soon'
  },
};
