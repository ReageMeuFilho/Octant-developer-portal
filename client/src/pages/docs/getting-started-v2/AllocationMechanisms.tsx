import { motion } from 'framer-motion';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { ComparisonTable } from '@/components/getting-started/ComparisonTable';
import { CalloutBox } from '@/components/getting-started/CalloutBox';

export default function GettingStartedAllocationMechanisms() {
  return (
    <DocsLayoutNew>
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Getting Started - Allocation Mechanisms</h1>
          <p className="text-xl text-muted-foreground">
            Democratic funding distribution systems
          </p>
        </div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-2">Tokenized Allocation Mechanisms</h2>
          <h3 className="text-xl text-muted-foreground mb-6">
            Community-driven funding distribution
          </h3>

          <div className="prose prose-lg max-w-none mb-8">
            <p className="leading-relaxed">
              Allocation Mechanisms are governance systems that allow communities to democratically decide how donated yield is distributed. Octant v2 supports multiple allocation models including Quadratic Funding, Conviction Voting, and custom mechanisms.
            </p>
          </div>

          <ComparisonTable
            columns={['Mechanism', 'Best For', 'Anti-Plutocracy', 'Complexity']}
            rows={[
              ['Quadratic Funding', 'Public goods', 'High', 'Medium'],
              ['Conviction Voting', 'Long-term projects', 'Medium', 'High'],
              ['Linear Voting', 'Token-weighted', 'Low', 'Low'],
              ['Custom', 'Specialized needs', 'Varies', 'High']
            ]}
          />

          <CalloutBox
            type="success"
            text="**Quadratic Funding:** Prevents whale dominance by weighting the number of contributors rather than total amount contributed."
          />
        </motion.section>
      </div>
    </DocsLayoutNew>
  );
}
