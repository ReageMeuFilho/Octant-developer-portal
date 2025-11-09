import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function GettingStartedYieldSkimming() {
  const { openChat } = useChatPanel();

  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Yield Skimming Strategy</h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground">
            Understanding passive appreciation capture strategies
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Yield Skimming Strategies</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Passively capture exchange rate appreciation
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Yield Skimming Strategies (YSS) work with yield-bearing tokens like stETH, sDAI, and wstETH. Instead of harvesting external rewards, these strategies capture the appreciation of the yield-bearing token's exchange rate relative to the underlying asset.
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    A[Wrap to Yield Token] --> B[Token Appreciates]
    B --> C[Calculate Profit]
    C --> D[Skim Appreciation]
    D --> E[Donate Profit]`}
          />

          <CalloutBox
            type="success"
            text="**Advantage:** YSS strategies are more gas-efficient than YDS because they don't require active harvesting transactions."
          />
        </motion.section>
      </div>
    </DocsLayoutNew>
  );
}
