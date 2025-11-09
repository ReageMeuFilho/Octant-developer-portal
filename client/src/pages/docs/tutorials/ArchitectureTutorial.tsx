import { motion } from 'framer-motion';
import { useState } from 'react';
import { Vault, CheckSquare, Target, XCircle, CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function ArchitectureTutorial() {
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
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Meet Sarah Chen */}
        <section className="space-y-8 text-center">
          {/* Portrait */}
          <div className="flex justify-center mb-8">
            <div className="w-64 h-64 rounded-full overflow-hidden bg-primary/10 border-4 border-primary/20 shadow-2xl">
              <img
                src="/sarah-chen-portrait.png"
                alt="Sarah Chen"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-6xl font-bold">
            Meet Sarah Chen
          </h1>

          {/* Title */}
          <p className="text-xl md:text-2xl text-muted-foreground">
            Head of Endowment, Global Water Initiative
          </p>

          {/* Key Fact */}
          <div className="text-2xl md:text-3xl">
            She manages a{' '}
            <span className="text-primary font-bold bg-primary/10 px-4 py-2 rounded-lg">
              $50 million
            </span>{' '}
            endowment.
          </div>

          {/* Mission */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Her mission: Provide clean water to 10 million people by 2030.
          </p>
        </section>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center gap-4 my-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Continue Reading</p>
            <p className="text-lg font-semibold text-foreground">↓ Scroll to continue ↓</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Scene 2: Sarah's Dilemma */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Sarah's Dilemma</h2>
            <p className="text-xl text-muted-foreground">
              She has the money. But the math doesn't work.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Traditional Bonds Card */}
            <div className="bg-red-950/20 border-2 border-red-900/50 rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <XCircle className="w-8 h-8 text-red-500" />
                <h3 className="text-2xl font-bold">Traditional Bonds</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Annual Percentage Yield</p>
                  <p className="text-5xl font-bold text-red-500">3%</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Annual yield from $50M:</p>
                  <p className="text-3xl font-bold">$1.5 million</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Impact:</p>
                  <p className="text-4xl font-bold">15 wells</p>
                  <p className="text-sm text-muted-foreground">@$100K per well</p>
                </div>

                <div className="pt-4 border-t border-red-900/30">
                  <p className="text-red-500 font-bold mb-2">THE PROBLEM:</p>
                  <p className="text-sm">
                    She needs 100+ wells per year to reach 10M people by 2030.
                  </p>
                  <p className="text-lg font-bold mt-2">
                    She's 85 wells short. Every year.
                  </p>
                </div>
              </div>
            </div>

            {/* DeFi with Octant Card */}
            <div className="bg-blue-950/20 border-2 border-blue-900/50 rounded-xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-8 h-8 text-blue-500" />
                <h3 className="text-2xl font-bold">DeFi with Octant</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Annual Percentage Yield</p>
                  <p className="text-5xl font-bold text-blue-500">7%</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Annual yield from $50M:</p>
                  <p className="text-3xl font-bold">$3.5 million</p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Impact:</p>
                  <p className="text-4xl font-bold">35 wells</p>
                  <p className="text-sm text-muted-foreground">@$100K per well</p>
                </div>

                <div className="pt-4 border-t border-blue-900/30">
                  <p className="text-blue-500 font-bold mb-2">THE SOLUTION:</p>
                  <p className="text-sm">
                    More than 2x the impact. Same $50M capital. Same safety.
                  </p>
                  <p className="text-lg font-bold mt-2">
                    She's on track to hit her 2030 goal.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Card */}
          <div className="bg-purple-950/20 border-2 border-purple-900/50 rounded-xl p-8 text-center space-y-6">
            <h3 className="text-2xl font-bold">The Difference Over 7 Years:</h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Additional Wells Built:</p>
                <p className="text-6xl font-bold text-purple-400">
                  <CountUp end={140} duration={2} />
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Additional People Served:</p>
                <p className="text-6xl font-bold text-purple-400">
                  <CountUp end={700000} duration={2} separator="," />
                </p>
              </div>
            </div>

            <p className="text-xl pt-4">
              That's 700,000 people who get clean water...{' '}
              <span className="text-purple-400 font-bold">or don't</span>.
            </p>

            <p className="text-lg text-muted-foreground pt-4">
              But here's the problem: <span className="text-foreground font-bold">DeFi is complex</span>.
            </p>
          </div>
        </section>

        {/* Scroll Indicator */}
        <motion.div 
          className="flex flex-col items-center gap-4 my-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center space-y-2">
            <p className="text-sm text-muted-foreground uppercase tracking-wide">Continue Reading</p>
            <p className="text-lg font-semibold text-foreground">↓ Scroll to continue ↓</p>
          </div>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          >
            <svg className="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </motion.div>

        {/* Scene 3: Three Independent Systems */}
        <section className="space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold">Three Independent Systems</h2>
            <p className="text-xl">
              Critical: These systems{' '}
              <span className="text-red-500 font-bold">DON'T</span> talk to each other
            </p>
            <p className="text-muted-foreground">
              This separation is what makes Octant safe. Click each to understand what it does.
            </p>
          </div>

          {/* Three System Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {systems.map((system, index) => {
              const Icon = system.icon;
              const isSelected = selectedSystem === index;

              return (
                <button
                  key={index}
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
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </DocsLayoutNew>
  );
}
