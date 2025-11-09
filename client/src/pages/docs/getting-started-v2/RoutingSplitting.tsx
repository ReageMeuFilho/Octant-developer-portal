import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { MermaidDiagram } from '@/components/getting-started/MermaidDiagram';
import { CalloutBox } from '@/components/getting-started/CalloutBox';
import { AskAIButton } from '@/components/AskAIButton';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function GettingStartedRoutingSplitting() {
  const { openChat } = useChatPanel();

  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Routing & Splitting</h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground">
            Distribute yield across multiple recipients
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Routing & Splitting Contracts</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Split donated yield across multiple causes
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Routing and Splitting contracts allow you to distribute donated yield across multiple recipients according to predefined percentages or dynamic allocation rules. This enables complex funding structures where yield supports multiple causes simultaneously.
            </p>
          </div>

          <MermaidDiagram
            code={`graph TB
    A[Donated Yield] --> B[Splitter Contract]
    B --> C[40% to Project A]
    B --> D[30% to Project B]
    B --> E[30% to Project C]`}
          />

          <CalloutBox
            type="info"
            text="**Use Case:** DAOs can use splitters to fund multiple ecosystem initiatives from a single yield source."
          />
        </motion.section>
      </div>
    </DocsLayoutNew>
  );
}
