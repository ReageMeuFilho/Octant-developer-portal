import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { XCircle, CheckCircle } from 'lucide-react';

export default function Scene02TheDilemma() {
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
          <h2 className="text-4xl md:text-5xl font-bold">Sarah's Dilemma</h2>
          <p className="text-xl text-muted-foreground">
            She has the money. But the math doesn't work.
          </p>
        </motion.div>

        {/* Comparison Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Traditional Bonds Card */}
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="bg-red-950/20 border-2 border-red-900/50 rounded-xl p-8 space-y-6"
          >
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
          </motion.div>

          {/* DeFi with Octant Card */}
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="bg-blue-950/20 border-2 border-blue-900/50 rounded-xl p-8 space-y-6"
          >
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
          </motion.div>
        </div>

        {/* Impact Card */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="bg-purple-950/20 border-2 border-purple-900/50 rounded-xl p-8 text-center space-y-6"
        >
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
        </motion.div>
      </div>
    </div>
  );
}
