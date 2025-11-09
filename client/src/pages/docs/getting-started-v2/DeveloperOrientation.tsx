import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { CardGrid } from '@/components/getting-started/CardGrid';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { ComparisonTable } from '@/components/getting-started/ComparisonTable';

export default function GettingStartedDeveloperOrientation() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Developer Orientation</h1>
          <p className="text-xl text-muted-foreground">
            A guide for developers on how to begin building with Octant v2
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Developer Orientation: Building on Octant v2</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Your starting point for creating impact-driven DeFi applications
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Octant v2 is a modular, composable protocol designed for developers who want to build funding mechanisms powered by DeFi yield. Whether you're creating yield strategies, allocation systems, or multi-strategy vaults, Octant v2 provides the building blocks you need.
            </p>
            <p className="leading-relaxed">
              This guide will orient you to the different components you can work with and help you identify the right starting point for your project.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Coins',
                title: 'Yield Strategies',
                description: 'Deploy capital into DeFi protocols and donate profits to causes',
                badge: 'Most Common'
              },
              {
                icon: 'Vote',
                title: 'Allocation Mechanisms',
                description: 'Build custom voting and funding distribution systems',
                badge: 'Advanced'
              },
              {
                icon: 'Vault',
                title: 'Multi-Strategy Vaults',
                description: 'Create vaults that split capital across multiple strategies',
                badge: 'Complex'
              },
              {
                icon: 'Users',
                title: 'Staking Systems',
                description: 'Token-gated participation with delegation and earning power',
                badge: 'Optional'
              }
            ]}
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Path 1: Yield Donating Strategies (YDS)</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Create vaults that actively harvest and donate yield
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Yield Donating Strategies are the most common starting point for developers. These strategies wrap existing DeFi protocols (like Spark, Aave, Morpho) and donate all harvested rewards to a configured address.
            </p>
          </div>

          <MermaidDiagram
            code={'graph LR\n    A[User Deposits USDC] --> B[Strategy Deploys to Spark]\n    B --> C[Earns sDAI Rewards]\n    C --> D[Strategy Harvests]\n    D --> E[Donates to Cause]'}
          />

          <CalloutBox
            type="info"
            text="**Required Functions:** \`_deployFunds()\`, \`_freeFunds()\`, \`_harvestAndReport()\`, \`_totalDeployed()\`"
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Path 2: Yield Skimming Strategies (YSS)</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Capture appreciation from yield-bearing tokens
          </h3>

          <ComparisonTable
            columns={['Feature', 'Yield Donating (YDS)', 'Yield Skimming (YSS)']}
            rows={[
              ['Asset Type', 'Standard ERC-20', 'Yield-bearing tokens'],
              ['Yield Source', 'External rewards (COMP, AAVE)', 'Exchange rate appreciation'],
              ['Harvesting', 'Active (requires transaction)', 'Passive (automatic)'],
              ['Gas Efficiency', 'Lower (harvest calls)', 'Higher (no harvest)'],
              ['Examples', 'Spark, Aave, Morpho', 'Lido stETH, Maker sDAI']
            ]}
          />

          <CalloutBox
            type="warning"
            text="**Critical:** Yield Skimming strategies must track \`totalDebt\` (principal) separately from current value to calculate profit"
          />
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Path 3 & 4: Allocation Mechanisms & Vaults</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Building governance and vault orchestration systems
          </h3>

          <CardGrid
            cards={[
              {
                icon: 'Vote',
                title: 'Allocation Mechanisms',
                description: '**What you build:** Custom voting/funding distribution systems\n\n**Technical requirements:**\n- Implement \`ITokenizedAllocationMechanism\` interface\n- Handle donation receipts from strategies\n- Execute distribution logic (quadratic, linear, etc.)\n- Emit allocation events for transparency',
                badge: 'Advanced'
              },
              {
                icon: 'Vault',
                title: 'Multi-Strategy Vaults',
                description: '**What you build:** Vaults that split deposits across strategies\n\n**Technical requirements:**\n- Extend \`MultistrategyVault\` base contract\n- Implement debt management across strategies\n- Handle withdrawal queues and liquidity\n- Set exposure limits per strategy',
                badge: 'Complex'
              }
            ]}
          />

          <CalloutBox
            type="info"
            text="**Recommended Learning Path:** Start with Yield Strategies → Build Allocation Mechanism → Create Multi-Strategy Vault"
          />
        </motion.section>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Building?</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Tutorial:** Follow our Strategy Development Tutorial for a complete walkthrough</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Documentation:** Read the Yield Donating Strategy deep dive</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Code:** Explore example strategies on GitHub</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>**Community:** Join our Discord to ask questions and share your builds</span>
            </li>
          </ul>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
