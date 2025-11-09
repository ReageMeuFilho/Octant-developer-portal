import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { GlossarySection } from '@/components/getting-started/GlossarySection';
import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function GettingStartedGlossary() {
  const { openChat } = useChatPanel();

  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Main Glossary</h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground">
            Comprehensive terminology reference for Octant v2
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Octant v2 Glossary</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Key terms and concepts
          </h3>

          <GlossarySection
            category="Core Concepts"
            icon="BookOpen"
            terms={[
              {
                term: 'Funding Vault',
                definition: 'ERC-4626 compliant vault that accepts deposits and allocates capital across multiple yield strategies while preserving principal.',
                category: 'Core'
              },
              {
                term: 'Yield Strategy',
                definition: 'Smart contract that deploys capital into DeFi protocols to generate yield and donates 100% of profits to configured recipients.',
                category: 'Core'
              },
              {
                term: 'Allocation Mechanism',
                definition: 'Governance system that decides how donated yield is distributed across projects, causes, or recipients.',
                category: 'Core'
              },
              {
                term: 'Principal Preservation',
                definition: 'Core principle ensuring users can always withdraw their original deposited amount (1:1 ratio). Profits are donated, not reinvested.',
                category: 'Core'
              },
              {
                term: 'Quadratic Funding',
                definition: 'Allocation mechanism that prevents whale dominance by weighting the number of contributors rather than total amount.',
                category: 'Governance'
              },
              {
                term: 'Earning Power',
                definition: 'Voting weight calculated from staked tokens, typically following a sub-linear curve to prevent plutocracy.',
                category: 'Governance'
              }
            ]}
          />
        </motion.section>
      </div>
    </DocsLayoutNew>
  );
}
