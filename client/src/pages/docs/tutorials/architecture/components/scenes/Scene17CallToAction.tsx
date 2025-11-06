import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowRight, Book, Code, Rocket } from 'lucide-react';
import { Link } from 'wouter';

export default function Scene17CallToAction() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Build?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            You now understand how Octant v2 turns treasury assets into continuous
            ecosystem funding. Let's start building.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <Book className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Read the Docs</h3>
              <p className="text-muted-foreground mb-4">
                Explore comprehensive guides and API references
              </p>
              <Link href="/docs/quickstart">
                <Button variant="outline" className="w-full">
                  View Documentation <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow">
              <Code className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Try a Tutorial</h3>
              <p className="text-muted-foreground mb-4">
                Build your first vault or strategy step-by-step
              </p>
              <Link href="/docs/tutorials/first-vault">
                <Button variant="outline" className="w-full">
                  Start Tutorial <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="p-6 h-full hover:shadow-lg transition-shadow bg-primary/5 border-primary/20">
              <Rocket className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Deploy Now</h3>
              <p className="text-muted-foreground mb-4">
                Get started with our quickstart guide
              </p>
              <Link href="/docs/getting-started/quick-start/what-youll-build">
                <Button className="w-full">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-muted-foreground">
            Questions? Join our{' '}
            <a href="https://discord.gg/octant" className="text-primary hover:underline">
              Discord community
            </a>
            {' '}or check out the{' '}
            <a href="https://github.com/golemfoundation/octant-v2" className="text-primary hover:underline">
              GitHub repository
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
