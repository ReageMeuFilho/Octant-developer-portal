import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowRight, Lock, TrendingUp, RefreshCw } from 'lucide-react';

export default function Scene03VaultEngine() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Vault Engine</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            How deposits become yield without losing principal
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Step 1 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20">
                <Lock className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">1. Deposit</h3>
                <p className="text-sm text-muted-foreground">
                  Users deposit USDC into the vault
                </p>
              </Card>
            </motion.div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20">
                <TrendingUp className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">2. Deploy</h3>
                <p className="text-sm text-muted-foreground">
                  Vault deploys to Aave, Compound, Lido
                </p>
              </Card>
            </motion.div>

            <div className="hidden md:flex items-center justify-center">
              <ArrowRight className="h-6 w-6 text-muted-foreground" />
            </div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-primary/5 border-primary/20">
                <RefreshCw className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2">3. Harvest</h3>
                <p className="text-sm text-muted-foreground">
                  Yield flows to allocation mechanisms
                </p>
              </Card>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-muted/50 rounded-lg border border-border"
          >
            <h3 className="text-xl font-bold mb-4">Key Insight</h3>
            <p className="text-muted-foreground leading-relaxed">
              The vault never touches the principal. Only the <strong>yield</strong> flows
              to projects. This means Sarah's $50M stays intact while generating continuous
              funding for her clean water initiatives.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
