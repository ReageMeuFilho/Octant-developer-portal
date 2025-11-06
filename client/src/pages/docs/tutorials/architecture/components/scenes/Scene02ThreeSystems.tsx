import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Vault, Users, Target } from 'lucide-react';

export default function Scene02ThreeSystems() {
  const systems = [
    {
      icon: Vault,
      title: 'Funding Vaults',
      description: 'Accept deposits, deploy to yield strategies, preserve capital',
      color: 'text-blue-500'
    },
    {
      icon: Users,
      title: 'Community Staking',
      description: 'Lock GLM tokens, earn voting power, participate in governance',
      color: 'text-purple-500'
    },
    {
      icon: Target,
      title: 'Allocation Mechanisms',
      description: 'Distribute yield to projects via quadratic funding or custom logic',
      color: 'text-green-500'
    }
  ];

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
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Three Interconnected Systems</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Octant v2 combines three powerful primitives that work together to create
            sustainable ecosystem funding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {systems.map((system, index) => (
            <motion.div
              key={system.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 h-full hover:shadow-lg transition-shadow">
                <system.icon className={`h-12 w-12 ${system.color} mb-4`} />
                <h3 className="text-2xl font-bold mb-4">{system.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {system.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
