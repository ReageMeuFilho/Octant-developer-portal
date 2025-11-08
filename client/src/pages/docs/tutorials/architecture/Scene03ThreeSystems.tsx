import { motion } from 'framer-motion';
import { useState } from 'react';
import { Vault, CheckSquare, Target } from 'lucide-react';

export default function Scene03ThreeSystems() {
  const [selectedSystem, setSelectedSystem] = useState<number | null>(null);

  const systems = [
    {
      icon: Vault,
      title: 'Vault System',
      subtitle: 'Where capital lives and grows',
      details: 'Your capital stays in audited, battle-tested vaults. Earns yield from protocols like Aave and Lido. You can withdraw anytime - no lock-ups.',
    },
    {
      icon: CheckSquare,
      title: 'Staking System',
      subtitle: 'Where governance happens',
      details: 'Stake GLM tokens to participate in governance. Vote on proposals and protocol upgrades. Earn rewards for active participation.',
    },
    {
      icon: Target,
      title: 'Allocation Mechanism',
      subtitle: 'Where community votes on funding',
      details: 'Community members vote on which projects receive funding. Quadratic funding ensures fair distribution. All votes are transparent on-chain.',
    },
  ];

  return (
    <div className="flex items-center justify-center w-full h-full px-4 py-8 overflow-y-auto">
      <div className="max-w-6xl w-full space-y-12">
        {/* Header */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Three Independent Systems</h2>
          <p className="text-xl">
            Critical: These systems{' '}
            <span className="text-red-500 font-bold">DON'T</span> talk to each other
          </p>
          <p className="text-muted-foreground">
            This separation is what makes Octant safe. Click each to understand what it does.
          </p>
        </motion.div>

        {/* Three System Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {systems.map((system, index) => {
            const Icon = system.icon;
            const isSelected = selectedSystem === index;

            return (
              <motion.button
                key={index}
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 + index * 0.15, duration: 0.6 }}
                onClick={() => setSelectedSystem(isSelected ? null : index)}
                className={`relative p-8 rounded-xl border-2 transition-all duration-300 text-left ${
                  isSelected
                    ? 'bg-primary/10 border-primary shadow-lg scale-105'
                    : 'bg-card border-border hover:border-primary/50 hover:shadow-md'
                }`}
              >
                <div className="space-y-4">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      isSelected ? 'bg-primary/20' : 'bg-primary/10'
                    }`}
                  >
                    <Icon
                      className={`w-8 h-8 ${isSelected ? 'text-primary' : 'text-primary/70'}`}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                    <p className="text-sm text-muted-foreground">{system.subtitle}</p>
                  </div>

                  {isSelected && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="pt-4 border-t border-primary/20"
                    >
                      <p className="text-sm leading-relaxed">{system.details}</p>
                    </motion.div>
                  )}

                  <p className="text-xs text-primary font-medium">
                    {isSelected ? 'Click to collapse' : 'Click to learn more'}
                  </p>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom Message */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="text-center text-muted-foreground"
        >
          <p>Explore each system, then click the arrow to continue</p>
        </motion.div>
      </div>
    </div>
  );
}
