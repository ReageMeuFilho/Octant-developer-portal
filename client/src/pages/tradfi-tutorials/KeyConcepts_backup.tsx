import { motion } from 'framer-motion';
import { Calculator, Shield, Lock, Info, AlertTriangle, CheckCircle, ArrowRight } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';

// Scene 1: ERC-4626 - Shares, Assets, NAV
function Scene01ERC4626() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          The Vault Accounting Standard
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Understand how Octant calculates your share of the pie.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            Octant vaults use the <strong>ERC-4626 tokenized vault standard</strong>. Every deposit mints shares 
            proportional to assets contributed. Every withdrawal burns shares and returns assets based on current NAV.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="p-8 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Calculator className="w-8 h-8 text-blue-400" />
            <h3 className="text-2xl font-bold text-blue-400">Formulas</h3>
          </div>
          <div className="space-y-4 font-mono text-lg">
            <div className="p-4 bg-background/50 rounded">
              <p className="text-green-400">shares = (assets × totalSupply) / totalAssets</p>
            </div>
            <div className="p-4 bg-background/50 rounded">
              <p className="text-green-400">assets = (shares × totalAssets) / totalSupply</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            This ensures fairness for early and late depositors. If the vault grows from 10,000 → 10,500 assets, 
            each share is worth <strong className="text-green-400">1.05 DAI</strong>.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-blue-400">Why It Matters</h4>
              <p className="text-base">
                No custom math. The same formula applies to all deposits, keeping valuations consistent.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 2: Delegation Surrogates & Earning Power
function Scene02DelegationSurrogates() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Precision Delegation for Governance
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Custom contract per delegatee keeps risk compartmentalized.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            When you stake governance tokens, the <strong>RegenStaker</strong> contract routes them to a{' '}
            <strong>DelegationSurrogate</strong>. Each delegatee (e.g., Alice) has her own surrogate contract.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="p-8 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-6 text-purple-400">Flow</h3>
          <div className="flex items-center justify-center gap-4 text-lg flex-wrap">
            <div className="px-4 py-2 bg-blue-500/20 rounded-lg font-semibold">Staker</div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="px-4 py-2 bg-purple-500/20 rounded-lg font-semibold">RegenStaker</div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="px-4 py-2 bg-pink-500/20 rounded-lg font-semibold">DelegationSurrogate</div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="px-4 py-2 bg-green-500/20 rounded-lg font-semibold">Voting Power</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">Benefits:</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-card border-2 border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Shield className="w-5 h-5 text-blue-400" />
                <h4 className="font-bold text-blue-400">Custody Separation</h4>
              </div>
              <p className="text-sm">Delegatee cannot touch tokens, only vote.</p>
            </div>
            <div className="p-4 bg-card border-2 border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <h4 className="font-bold text-green-400">Aggregation</h4>
              </div>
              <p className="text-sm">Multiple stakers delegating to the same person share voting power.</p>
            </div>
            <div className="p-4 bg-card border-2 border-border rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Calculator className="w-5 h-5 text-purple-400" />
                <h4 className="font-bold text-purple-400">Earning Power</h4>
              </div>
              <p className="text-sm">Rewards scale with stake duration and amount.</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-green-400">Security Edge</h4>
              <p className="text-base">
                If a delegatee is compromised, your tokens remain safe in the surrogate contract.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 3: Profit Lock & Risk Controls
function Scene03ProfitLock() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          How Octant Protects Against Flash Exploits
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Advanced safety nets keep the vault stable.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            When strategies report profit, Octant locks the gains for <strong className="text-orange-400">10 days</strong>{' '}
            (PROFIT_MAX_UNLOCK_TIME). This prevents malicious actors from depositing just before a profit report 
            and withdrawing immediately.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="p-8 bg-orange-500/10 border-2 border-orange-500/30 rounded-lg"
        >
          <div className="flex items-center gap-3 mb-6">
            <Lock className="w-8 h-8 text-orange-400" />
            <h3 className="text-2xl font-bold text-orange-400">Profit Unlock Timeline</h3>
          </div>
          <div className="flex items-center justify-center gap-4 text-base flex-wrap">
            <div className="text-center">
              <div className="px-6 py-3 bg-red-500/20 rounded-lg font-semibold mb-2">Day 0</div>
              <p className="text-sm text-muted-foreground">Profit reported</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="px-6 py-3 bg-yellow-500/20 rounded-lg font-semibold mb-2">Day 1-9</div>
              <p className="text-sm text-muted-foreground">Unlocking</p>
            </div>
            <ArrowRight className="w-6 h-6 text-muted-foreground" />
            <div className="text-center">
              <div className="px-6 py-3 bg-green-500/20 rounded-lg font-semibold mb-2">Day 10</div>
              <p className="text-sm text-muted-foreground">Fully available</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-2xl font-bold">Risk Controls:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-card border-2 border-border rounded-lg flex items-start gap-3">
              <Lock className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Profit unlock delay</h4>
                <p className="text-sm text-muted-foreground">10-day gradual release</p>
              </div>
            </div>
            <div className="p-4 bg-card border-2 border-border rounded-lg flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Max debt per strategy</h4>
                <p className="text-sm text-muted-foreground">Caps exposure to any single protocol</p>
              </div>
            </div>
            <div className="p-4 bg-card border-2 border-border rounded-lg flex items-start gap-3">
              <Calculator className="w-5 h-5 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Daily allowance checks</h4>
                <p className="text-sm text-muted-foreground">LinearAllowanceExecutor enforces limits</p>
              </div>
            </div>
            <div className="p-4 bg-card border-2 border-border rounded-lg flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-bold mb-1">Whitelisting</h4>
                <p className="text-sm text-muted-foreground">Staking participants must be approved</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            These controls mirror risk committees in TradFi, but execute automatically.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="p-6 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-yellow-400">Key Insight</h4>
              <p className="text-base">
                Earned profits become withdrawable gradually. This rewards long-term participants.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function KeyConcepts() {
  const scenes = [
    <Scene01ERC4626 key="scene1" />,
    <Scene02DelegationSurrogates key="scene2" />,
    <Scene03ProfitLock key="scene3" />
  ];

  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={3}>{scenes}</CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
