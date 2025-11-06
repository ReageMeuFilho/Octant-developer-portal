import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { ArrowDown, ArrowRight } from 'lucide-react';

export default function Scene13DataFlow() {
  return (
    <section className="min-h-screen flex items-center py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Complete Data Flow</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From treasury deposit to project funding in one visual
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {/* Treasury */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-blue-500/10 border-blue-500/20">
                <h3 className="text-xl font-bold mb-2">Treasury Assets</h3>
                <p className="text-muted-foreground">$50M USDC deposited</p>
              </Card>
            </motion.div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Vault */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-purple-500/10 border-purple-500/20">
                <h3 className="text-xl font-bold mb-2">Funding Vault</h3>
                <p className="text-muted-foreground">Deploys to yield strategies</p>
              </Card>
            </motion.div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Yield */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-green-500/10 border-green-500/20">
                <h3 className="text-xl font-bold mb-2">Yield Generation</h3>
                <p className="text-muted-foreground">5.7% APY = $2.85M/year</p>
              </Card>
            </motion.div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Allocation */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-orange-500/10 border-orange-500/20">
                <h3 className="text-xl font-bold mb-2">Allocation Mechanism</h3>
                <p className="text-muted-foreground">Quadratic funding distributes to projects</p>
              </Card>
            </motion.div>

            <div className="flex justify-center">
              <ArrowDown className="h-8 w-8 text-muted-foreground" />
            </div>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 bg-primary/5 border-primary/20 text-center">
                  <p className="font-bold">Project A</p>
                  <p className="text-sm text-muted-foreground">$950K</p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20 text-center">
                  <p className="font-bold">Project B</p>
                  <p className="text-sm text-muted-foreground">$1.2M</p>
                </Card>
                <Card className="p-4 bg-primary/5 border-primary/20 text-center">
                  <p className="font-bold">Project C</p>
                  <p className="text-sm text-muted-foreground">$700K</p>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
