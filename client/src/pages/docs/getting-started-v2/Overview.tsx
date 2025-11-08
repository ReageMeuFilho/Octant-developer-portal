import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { CardGrid } from '@/components/getting-started/CardGrid';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';

export default function GettingStartedOverview() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Octant v2 Overview</h1>
          <p className="text-xl text-muted-foreground">
            A comprehensive introduction to Octant v2's architecture, funding pipeline, and core principles
          </p>
        </div>

        {/* Scene 1 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">What is Octant v2?</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            A decentralized funding network powered by DeFi yield
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="mb-4 leading-relaxed">
              Octant v2 is a modular, open-source protocol that transforms idle treasury assets into continuous funding for public goods, ecosystem projects, and community initiatives. Unlike traditional grant programs that require upfront capital allocation, Octant generates funding from DeFi yield—allowing organizations to support causes while preserving their principal.
            </p>
            <p className="mb-4 leading-relaxed">
              At its core, Octant v2 is a composable funding infrastructure built on three pillars: Funding Vaults (capital management), Yield Strategies (profit generation), and Allocation Mechanisms (democratic distribution). This architecture enables DAOs, foundations, and protocols to create sustainable funding streams without depleting their treasuries.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Vault',
                title: 'Funding Vaults',
                description: 'ERC-4626 vaults that accept deposits and allocate capital across multiple yield strategies. Users receive vault shares representing their claim on deposited assets.',
                badge: 'Core'
              },
              {
                icon: 'TrendingUp',
                title: 'Yield Strategies',
                description: 'Smart contracts that deploy capital into DeFi protocols (Lido, Aave, Morpho) to generate yield, then donate 100% of profits to configured recipients.',
                badge: 'Core'
              },
              {
                icon: 'Vote',
                title: 'Allocation Mechanisms',
                description: 'Governance systems (Quadratic Funding, Conviction Voting) that allow communities to democratically decide how donated yield is distributed across projects.',
                badge: 'Core'
              },
              {
                icon: 'Users',
                title: 'Community Staking',
                description: 'Optional token-gating layer where users stake governance tokens to earn "earning power" and participate in allocation decisions.',
                badge: 'Optional'
              }
            ]}
          />

          <CalloutBox
            type="info"
            text="**Key Insight:** Octant v2 separates capital management (vaults) from profit generation (strategies) from distribution (allocation mechanisms). This modularity allows each component to be upgraded, replaced, or customized independently."
          />
        </motion.section>

        {/* Scene 2 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">The Funding Pipeline</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            From deposit to impact: How capital flows through Octant
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="mb-4 leading-relaxed">
              Understanding Octant v2 requires following the money. Here's the complete journey of capital through the system, from initial deposit to final project funding.
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    subgraph "1. Capital Entry"
        A[User Deposits 100K DAI]
        B[Receives 100K Vault Shares]
    end
    
    subgraph "2. Strategy Allocation"
        C[Vault Manager Allocates]
        D[30K to Lido Strategy]
        E[40K to Aave Strategy]
        F[30K to Morpho Strategy]
    end
    
    subgraph "3. Yield Generation"
        G[Lido: 1.2K profit]
        H[Aave: 2.4K profit]
        I[Morpho: 1.8K profit]
        J[Total: 5.4K profit]
    end
    
    subgraph "4. Profit Donation"
        K[Strategies Donate to Allocation Mechanism]
    end
    
    subgraph "5. Community Allocation"
        L[Stakers Vote on Distribution]
        M[Quadratic Funding Applied]
    end
    
    subgraph "6. Project Funding"
        N[Project A: 2.2K]
        O[Project B: 1.9K]
        P[Project C: 1.3K]
    end
    
    A --> B
    B --> C
    C --> D
    C --> E
    C --> F
    D --> G
    E --> H
    F --> I
    G --> J
    H --> J
    I --> J
    J --> K
    K --> L
    L --> M
    M --> N
    M --> O
    M --> P
    
    style A fill:#e1f5ff
    style J fill:#ffd700
    style M fill:#ffe1f5
    style N fill:#d4f1d4
    style O fill:#d4f1d4
    style P fill:#d4f1d4`}
          />

          <CalloutBox
            type="success"
            text="**Capital Preservation:** Users can withdraw their original 100K DAI anytime. The 5.4K profit is donated, but principal remains 1:1 redeemable."
          />
        </motion.section>

        {/* Scene 3 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Core Principles</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            The design philosophy behind Octant v2
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="mb-4 leading-relaxed">
              Octant v2 is built on five foundational principles that guide every architectural decision and ensure the protocol remains secure, composable, and aligned with its mission of sustainable public goods funding.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Shield',
                title: '1. Principal Preservation',
                description: 'Users must always be able to withdraw their original deposited amount (1:1 ratio). Profits are donated, not reinvested. Share price remains constant at 1.0.\n\n**Why it matters:** Removes risk barrier for conservative depositors. Your capital is never at risk from donation mechanics.',
              },
              {
                icon: 'Blocks',
                title: '2. Modularity & Composability',
                description: 'Every component (vaults, strategies, allocation mechanisms) implements standard interfaces (ERC-4626, ITokenizedStrategy, IAllocationMechanism). Components can be mixed, matched, and upgraded independently.\n\n**Why it matters:** Enables innovation without breaking existing integrations. New strategies can be added without touching vault code.',
              },
              {
                icon: 'Users',
                title: '3. Democratic Allocation',
                description: 'Funding distribution decisions are made by communities, not centralized managers. Quadratic Funding prevents plutocracy (1 whale ≠ 1000 small donors).\n\n**Why it matters:** Ensures funding flows to projects with broad community support, not just those favored by large token holders.',
              },
              {
                icon: 'Eye',
                title: '4. Transparency & Verifiability',
                description: 'All capital flows, profit calculations, and allocation decisions happen on-chain. Anyone can audit where funds came from, how much profit was generated, and where it was distributed.\n\n**Why it matters:** Builds trust with depositors and recipients. No black boxes or hidden fees.',
              },
              {
                icon: 'Zap',
                title: '5. Gas Efficiency & Scalability',
                description: 'Strategies use battle-tested patterns (Yearn V3 Tokenized Strategy). Profit locking prevents manipulation. Health checks prevent anomalous reports.\n\n**Why it matters:** Reduces operational costs for DAOs. Enables sustainable long-term operation.',
              },
            ]}
          />
        </motion.section>

        {/* Scene 4 */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Use Cases & Applications</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Real-world applications of Octant v2
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="mb-4 leading-relaxed">
              Octant v2's flexible architecture supports a wide range of funding models. Here are the most common deployment patterns and their real-world applications.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Building2',
                title: 'DAO Treasury Management',
                description: '**Use Case:** Protocol X has $50M in stablecoins earning 0%. They deploy to Octant, generate $2.5M/year in yield, and use Quadratic Funding to let token holders allocate it to ecosystem projects.\n\n**Result:** Treasury preserved, community engaged, ecosystem funded.',
                badge: 'Popular'
              },
              {
                icon: 'Heart',
                title: 'Foundation Grant Programs',
                description: '**Use Case:** Ethereum Foundation wants to fund public goods without depleting endowment. They deposit $100M, earn $5M/year, and use conviction voting to reward long-term contributors.\n\n**Result:** Perpetual funding stream without touching principal.',
                badge: 'Popular'
              },
              {
                icon: 'Coins',
                title: 'Protocol Revenue Sharing',
                description: '**Use Case:** DeFi protocol generates $10M/year in fees. Instead of burning or distributing to token holders, they route 50% to Octant vault, let community vote on allocation.\n\n**Result:** Sustainable ecosystem growth, community ownership.',
              },
              {
                icon: 'Users',
                title: 'Community-Owned Funding',
                description: '**Use Case:** 1000 individuals pool $10K each ($10M total) into shared vault. Yield ($500K/year) funds projects they collectively vote on.\n\n**Result:** Grassroots funding without relying on whales or VCs.',
              },
            ]}
          />

          <CalloutBox
            type="info"
            text="**Next Steps:** Explore the [Core Components](/docs/getting-started/components) page to understand each piece of the architecture in detail, or jump to [Developer Orientation](/docs/getting-started/developer-orientation) to start building."
          />
        </motion.section>

        {/* Next Steps */}
        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Dive Deeper?</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span><strong>Next:</strong> <a href="/docs/getting-started/components" className="text-primary hover:underline">Core Components</a> - Deep dive into Funding Vaults, Yield Strategies, and Allocation Mechanisms</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span><strong>For Developers:</strong> <a href="/docs/getting-started/developer-orientation" className="text-primary hover:underline">Developer Orientation</a> - Choose your path and start building</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span><strong>Security:</strong> <a href="/docs/getting-started/security" className="text-primary hover:underline">Security & Risks</a> - Understand the risk model and mitigation strategies</span>
            </li>
          </ul>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
