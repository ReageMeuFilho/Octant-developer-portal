import { motion } from 'framer-motion';
import { Vault, Vote, Shield, Gavel, ArrowRight, Info, CheckCircle } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';

// Scene 1: Vault System = Asset Management Fund
function Scene01VaultSystem() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Same playbook, new infrastructure.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          If you understand mutual funds, you understand Octant vaults.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            Think of Octant's vaults as mutual funds that live on-chain. Investors deposit stablecoins, 
            receive shares representing proportional ownership, and the vault manager allocates capital to multiple strategies.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-orange-500/10 border-2 border-orange-500/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">In TradFi:</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>You give $10,000 to a mutual fund</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>Fund manager buys stocks, bonds, real estate</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>You receive fund shares</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>NAV updates daily</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">In Octant:</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p>You deposit 10,000 DAI</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p>Vault manager allocates across Lido, Morpho, Sky</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p>You receive ERC-20 vault shares</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                <p>NAV updates continuously</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-green-400">Key Difference</h4>
              <p className="text-base">
                Instead of waiting for statements, every position is visible in real time on-chain.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 2: Staking System = Corporate Stock with Proxy Voting
function Scene02StakingSystem() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Stake, delegate, earn—all familiar concepts.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Owning company shares looks a lot like staking governance tokens.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-orange-500/10 border-2 border-orange-500/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">In TradFi:</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>Buy shares</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>Get voting rights</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>Assign proxy</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                <p>Receive dividends</p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-pink-500/10 border-2 border-pink-500/30 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-pink-400">In Octant:</h3>
            <div className="space-y-3 text-base">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <p>Stake GOV tokens</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <p>Get voting power</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <p>Delegate to expert voters</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                <p>Earn protocol rewards</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            Delegation surrogate contracts act like transfer agents, holding tokens while your chosen delegate votes. 
            Rewards accrue over time, just like dividends.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-blue-400">Delegation = Proxy Voting</h4>
              <p className="text-base">
                You retain ownership, but someone else can vote on your behalf.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 3: Separation of Systems = Separate Custodians
function Scene03Separation() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Two accounts, two purposes, one mission.
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Octant mirrors best practices in traditional asset segregation.
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="prose prose-invert max-w-none"
        >
          <p className="text-lg leading-relaxed">
            Imagine having capital with Fidelity and voting shares with Computershare. They serve different purposes, 
            maintain separate ledgers, and never cross-contaminate.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Octant enforces the same discipline:
          </p>
          <ul className="text-lg space-y-2 mt-4">
            <li><strong>Vault System</strong> → capital deployment & yield</li>
            <li><strong>Staking System</strong> → governance & rewards</li>
          </ul>
          <p className="text-lg leading-relaxed mt-4">
            This architectural separation reduces systemic risk. If one system encounters an issue, 
            your assets in the other remain untouched.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
              <h3 className="text-2xl font-bold text-blue-400">Vault System Custody</h3>
            </div>
            <p className="text-base">
              Smart contracts hold stablecoins. Strategies deployed via audited code.
            </p>
          </div>

          <div className="p-6 bg-pink-500/10 border-2 border-pink-500/30 rounded-lg">
            <div className="flex items-center gap-3 mb-4">
              <Gavel className="w-8 h-8 text-pink-400" />
              <h3 className="text-2xl font-bold text-pink-400">Staking System Custody</h3>
            </div>
            <p className="text-base">
              Delegation surrogates hold governance tokens. Voting power stays intact.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg"
        >
          <div className="flex items-start gap-4">
            <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-lg font-bold mb-2 text-green-400">Your Advantage</h4>
              <p className="text-base">
                Operate both accounts simultaneously. Optimize capital and influence independently.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function TradFiAnalogies() {
  const scenes = [
    <Scene01VaultSystem key="scene1" />,
    <Scene02StakingSystem key="scene2" />,
    <Scene03Separation key="scene3" />
  ];

  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={3}>{scenes}</CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
