import { motion } from 'framer-motion';
import { useState } from 'react';
import { Layers, Database, Target } from 'lucide-react';

export default function Scene05CompleteSystem() {
  const [selectedLayer, setSelectedLayer] = useState<number | null>(null);

  const layers = [
    {
      icon: Database,
      title: 'Vault Layer',
      description: 'ERC-4626 compliant vaults accept deposits and issue shares',
      color: 'text-blue-500'
    },
    {
      icon: Layers,
      title: 'Strategy Layer',
      description: 'Pluggable strategies deploy capital to DeFi protocols',
      color: 'text-green-500'
    },
    {
      icon: Target,
      title: 'Allocation Layer',
      description: 'Mechanisms route yield to projects (QF, direct, streaming)',
      color: 'text-purple-500'
    }
  ];

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Complete System Architecture
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Three modular layers working together
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid gap-4"
        >
          {layers.map((layer, index) => {
            const Icon = layer.icon;
            const isSelected = selectedLayer === index;
            return (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.2, duration: 0.6 }}
                onClick={() => setSelectedLayer(isSelected ? null : index)}
                className={`p-6 bg-card border-2 rounded-lg cursor-pointer transition-all ${
                  isSelected ? 'border-primary scale-105' : 'border-border hover:border-primary/50'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${layer.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-2">{layer.title}</h3>
                    <p className="text-muted-foreground">{layer.description}</p>
                    {isSelected && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        className="mt-4 pt-4 border-t border-border"
                      >
                        <p className="text-sm">
                          Click to collapse
                        </p>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
