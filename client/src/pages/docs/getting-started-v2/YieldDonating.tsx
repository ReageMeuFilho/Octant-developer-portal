import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function GettingStartedYieldDonating() {
  const { openChat } = useChatPanel();

  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Yield Donating Strategy</h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground">
            Deep dive into active reward harvesting strategies
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Yield Donating Strategies</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Actively harvest and donate DeFi rewards
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Yield Donating Strategies (YDS) actively harvest rewards from DeFi protocols and donate 100% of profits to configured recipients. These strategies are ideal for protocols that distribute rewards as separate tokens (COMP, AAVE, MORPHO, etc.).
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    A[Deploy Capital] --> B[Earn Rewards]
    B --> C[Harvest Rewards]
    C --> D[Swap to Base Asset]
    D --> E[Donate to Recipients]`}
          />

          <CalloutBox
            type="info"
            text="**Key Concept:** YDS strategies require periodic keeper calls to harvest rewards. This is different from Yield Skimming strategies which passively capture appreciation."
          />
        </motion.section>
      </div>
    </DocsLayoutNew>
  );
}
