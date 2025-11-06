import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, DollarSign } from 'lucide-react';

export default function Scene01Challenge() {
  const data = [
    { name: 'Traditional Bonds', value: 3.0, amount: 1500000 },
    { name: 'DeFi with Octant', value: 5.7, amount: 2850000 }
  ];

  return (
    <section className="min-h-screen flex items-center py-20 bg-background">
      <div className="container mx-auto grid md:grid-cols-2 gap-12 px-4">
        {/* LEFT: Narrative */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Sarah's Challenge</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Sarah manages a <span className="font-mono font-bold text-primary">$50 million</span> endowment 
            for clean water projects.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            Traditional bonds give her 3% — that's $1.5 million a year.
          </p>
          <p className="text-lg mb-4 leading-relaxed">
            But she needs to preserve capital AND fund projects. The math doesn't work.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            What if there was a system that could safely earn 5.7%?
          </p>
        </motion.div>

        {/* RIGHT: Chart */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Annual Returns on $50M
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  content={({ active, payload }) => {
                    if (active && payload && payload.length) {
                      return (
                        <Card className="p-3">
                          <p className="font-semibold">{payload[0].payload.name}</p>
                          <p className="text-2xl font-bold text-primary">{payload[0].payload.value}% APY</p>
                          <p className="text-muted-foreground">
                            ${(payload[0].payload.amount / 1000000).toFixed(1)}M per year
                          </p>
                        </Card>
                      );
                    }
                    return null;
                  }}
                />
                <Bar dataKey="value" fill="hsl(var(--primary))" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
            
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-sm font-semibold text-muted-foreground mb-1 flex items-center gap-2">
                <DollarSign className="h-4 w-4" />
                Opportunity Cost
              </p>
              <p className="text-3xl font-bold text-primary">
                $1.35M per year
              </p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
