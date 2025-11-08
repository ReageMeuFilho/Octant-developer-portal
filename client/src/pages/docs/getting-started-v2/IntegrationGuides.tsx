import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { CardGrid } from '@/components/getting-started/CardGrid';
import { CalloutBox } from '@/components/getting-started/CalloutBox';

export default function GettingStartedIntegrationGuides() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Integration Guides</h1>
          <p className="text-xl text-muted-foreground">
            Step-by-step tutorials for integrating Octant v2 into your project
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Integration Guides</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Complete walkthrough for building with Octant v2
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              This guide provides step-by-step instructions for integrating Octant v2 components into your DeFi application. Whether you're building yield strategies, allocation mechanisms, or multi-strategy vaults, these tutorials will help you get started quickly.
            </p>
          </div>

          <CardGrid
            cards={[
              {
                icon: 'Code',
                title: 'Setup Development Environment',
                description: 'Install dependencies, configure tooling, and set up your local development environment for Octant v2 development.',
                badge: 'Step 1'
              },
              {
                icon: 'Wrench',
                title: 'Build Your First Strategy',
                description: 'Create a simple yield donating strategy that wraps an existing DeFi protocol and donates profits.',
                badge: 'Step 2'
              },
              {
                icon: 'TestTube',
                title: 'Testing & Deployment',
                description: 'Write comprehensive tests, deploy to testnet, and verify your strategy works correctly.',
                badge: 'Step 3'
              },
              {
                icon: 'Rocket',
                title: 'Production Deployment',
                description: 'Deploy to mainnet, configure monitoring, and set up operational procedures.',
                badge: 'Step 4'
              }
            ]}
          />

          <CalloutBox
            type="info"
            text="**Prerequisites:** Familiarity with Solidity, Foundry/Hardhat, and basic DeFi concepts (ERC-4626, yield farming)."
          />
        </motion.section>

        <div className="mt-16 p-8 bg-muted rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Next Steps</h2>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Explore detailed strategy examples in the documentation</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Join the developer community on Discord</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-primary">→</span>
              <span>Review the security best practices guide</span>
            </li>
          </ul>
        </div>
      </div>
    </DocsLayoutNew>
  );
}
