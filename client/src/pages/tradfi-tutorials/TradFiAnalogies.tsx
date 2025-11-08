import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Info, Shield, Gavel } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function TradFiAnalogies() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Vault System = Mutual Fund */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Same playbook, new infrastructure.
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            If you understand mutual funds, you understand Octant vaults.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Think of Octant's vaults as mutual funds that live on-chain. Investors deposit stablecoins, receive shares representing proportional ownership, and vault managers allocate capital across multiple DeFi protocols.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-orange-400">In TradFi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>You give $10,000 to a mutual fund</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Fund manager buys stocks, bonds, real estate</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>You receive fund shares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>NAV updates daily</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-blue-400">In Octant</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>You deposit 10,000 DAI to a vault</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>Vault manager allocates across Lido, Morpho, Sky</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>You receive ERC-20 vault shares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                    <span>NAV updates continuously</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-400 mb-2">Key Difference</p>
                  <p>Instead of waiting for statements, every position is visible real-time on-chain.</p>
                </div>
              </div>
            </div>
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

        {/* Scene 2: Staking System = Corporate Stock + Voting */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Stake, delegate, earn—all familiar concepts.
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Owning company shares looks a lot like staking governance tokens.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Octant's staking system mirrors corporate governance. Token holders deposit governance tokens, delegate voting power to experts (or vote themselves), and earn rewards from the protocol treasury.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-orange-400">In TradFi</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Buy shares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Get voting rights</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Assign proxy</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-orange-400 flex-shrink-0 mt-1" />
                    <span>Receive dividends</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-pink-500/10 border-2 border-pink-500/50 rounded-lg space-y-4">
                <h3 className="text-xl font-bold text-pink-400">In Octant</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span>Stake GOV tokens</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span>Get voting power</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span>Delegate to expert voters</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-pink-400 flex-shrink-0 mt-1" />
                    <span>Earn protocol rewards</span>
                  </li>
                </ul>
              </div>
            </div>

            <p>
              Delegation surrogate contracts act like transfer agents, holding tokens while your chosen delegate votes. 
              Rewards accrue over time, just like dividends.
            </p>

            <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-400 mb-2">Delegation = Proxy Voting</p>
                  <p>You retain ownership, but someone else can vote on your behalf.</p>
                </div>
              </div>
            </div>
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

        {/* Scene 3: Separation of Systems */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Two accounts, two purposes, one mission.
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Octant mirrors best practices in traditional asset segregation.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Imagine having capital with Fidelity and voting shares with Computershare. They serve different purposes, 
              maintain separate ledgers, and never cross-contaminate.
            </p>
            <p>
              Octant enforces the same discipline:
            </p>
            <ul className="space-y-2 ml-6">
              <li><strong>Vault System</strong> → capital deployment & yield</li>
              <li><strong>Staking System</strong> → governance & rewards</li>
            </ul>
            <p>
              This architectural separation reduces systemic risk. If one system encounters an issue, 
              your assets in the other remain untouched.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-8 h-8 text-blue-400" />
                  <h3 className="text-xl font-bold text-blue-400">Vault System Custody</h3>
                </div>
                <p>
                  Smart contracts hold stablecoins. Strategies deployed via audited code.
                </p>
              </div>

              <div className="p-6 bg-pink-500/10 border-2 border-pink-500/50 rounded-lg">
                <div className="flex items-center gap-3 mb-4">
                  <Gavel className="w-8 h-8 text-pink-400" />
                  <h3 className="text-xl font-bold text-pink-400">Staking System Custody</h3>
                </div>
                <p>
                  Delegation surrogates hold governance tokens. Voting power stays intact.
                </p>
              </div>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
              <div className="flex items-start gap-4">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-400 mb-2">Your Advantage</p>
                  <p>Operate both accounts simultaneously. Optimize capital and influence independently.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayoutNew>
  );
}
