import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export default function Scene04DragonProtocol() {
  const steps = [
    { title: 'Deposit', description: 'User deposits USDC' },
    { title: 'Strategy', description: 'Funds deployed to Aave' },
    { title: 'Harvest', description: 'Yield collected automatically' },
    { title: 'Dragon Buffer', description: '40% held for donations' },
    { title: 'Distribute', description: 'Yield sent to projects' }
  ];

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-6xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Dragon Protocol Flow
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Automated yield routing with dragon buffer for smooth distributions
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          {steps.map((step, index) => (
            <div key={index} className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.4 }}
                className="flex flex-col items-center"
              >
                <div className="w-32 h-32 rounded-lg bg-primary/10 border-2 border-primary/30 flex flex-col items-center justify-center p-4">
                  <div className="text-3xl font-bold text-primary mb-2">{index + 1}</div>
                  <div className="text-sm font-bold text-center">{step.title}</div>
                  <div className="text-xs text-muted-foreground text-center mt-1">
                    {step.description}
                  </div>
                </div>
              </motion.div>
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + index * 0.2, duration: 0.4 }}
                >
                  <ArrowRight className="w-6 h-6 text-primary hidden md:block" />
                </motion.div>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
