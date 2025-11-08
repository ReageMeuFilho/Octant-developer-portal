import { motion } from 'framer-motion';
import { Calculator, Shield, Lock, Info } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function KeyConcepts() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: ERC-4626 - Shares, Assets, NAV */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            The Vault Accounting Standard
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Understand how Octant calculates your share of the pie.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Octant vaults use the <strong>ERC-4626 tokenized vault standard</strong>. Every deposit mints shares 
              proportional to assets contributed. Every withdrawal burns shares and returns assets based on current NAV.
            </p>

            <div className="p-8 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
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
            </div>

            <p>
              This ensures fairness for early and late depositors. If the vault grows from 10,000 → 10,500 assets, 
              each share is worth <strong className="text-green-400">1.05 DAI</strong>.
            </p>

            <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-blue-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-blue-400 mb-2">Why It Matters</p>
                  <p>No custom math. The same formula applies to all deposits, keeping valuations consistent.</p>
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

        {/* Scene 2: Delegation Surrogates & Earning Power */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Delegation Surrogates: Your Voting Proxy
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Stake once, delegate anytime, earn continuously.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              When you stake governance tokens in Octant, they're held by a <strong>delegation surrogate contract</strong>. 
              This contract acts like a transfer agent—it holds your tokens while you choose who votes on your behalf.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-4">
              <h3 className="text-xl font-bold">How It Works</h3>
              <ol className="space-y-3 list-decimal list-inside">
                <li>You deposit governance tokens into the staking contract</li>
                <li>The contract deploys a unique surrogate for your deposit</li>
                <li>You choose a delegate (or vote yourself)</li>
                <li>The surrogate delegates voting power to your chosen address</li>
                <li>Rewards accrue based on your "earning power"</li>
              </ol>
            </div>

            <div className="p-8 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="w-8 h-8 text-purple-400" />
                <h3 className="text-2xl font-bold text-purple-400">Earning Power Formula</h3>
              </div>
              <div className="space-y-4 font-mono text-lg">
                <div className="p-4 bg-background/50 rounded">
                  <p className="text-green-400">earningPower = stakedAmount × lockDuration × delegationBonus</p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                Longer locks and active delegation increase your share of protocol rewards.
              </p>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-green-400 mb-2">Key Benefit</p>
                  <p>You can change delegates instantly without unstaking. Your tokens never leave your control.</p>
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

        {/* Scene 3: Profit Lock Mechanism */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Profit Lock: Protecting Your Gains
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Earned yield stays earned, even if strategies fail later.
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Octant vaults implement a <strong>profit lock mechanism</strong> to ensure that once yield is realized, 
              it can't be erased by subsequent losses. This is critical for multi-strategy vaults.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-4">
              <h3 className="text-xl font-bold">How Profit Lock Works</h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                  <p className="text-sm font-medium text-blue-400 mb-1">Step 1: Harvest</p>
                  <p className="text-sm">The vault manager calls <code className="bg-muted px-2 py-1 rounded">harvest()</code> on a strategy. Profits are converted to the base asset (e.g., DAI).</p>
                </div>
                <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                  <p className="text-sm font-medium text-blue-400 mb-1">Step 2: Lock</p>
                  <p className="text-sm">Harvested profits are added to <code className="bg-muted px-2 py-1 rounded">totalAssets</code>. The vault's NAV increases permanently.</p>
                </div>
                <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                  <p className="text-sm font-medium text-blue-400 mb-1">Step 3: Protect</p>
                  <p className="text-sm">Even if a strategy later reports a loss, locked profits remain in <code className="bg-muted px-2 py-1 rounded">totalAssets</code>. Shareholders don't lose past gains.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border-2 border-border rounded-lg space-y-4">
              <h3 className="text-xl font-bold">Example Scenario</h3>
              <div className="space-y-3">
                <div className="p-4 bg-muted/50 rounded">
                  <p className="text-sm"><strong>Day 1:</strong> Vault has 10,000 DAI across 3 strategies</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded">
                  <p className="text-sm"><strong>Day 30:</strong> Strategy A earns 500 DAI. Manager harvests → totalAssets = 10,500 DAI (locked)</p>
                </div>
                <div className="p-4 bg-red-500/10 rounded">
                  <p className="text-sm"><strong>Day 45:</strong> Strategy B loses 200 DAI due to market conditions</p>
                </div>
                <div className="p-4 bg-green-500/10 rounded">
                  <p className="text-sm"><strong>Result:</strong> totalAssets = 10,300 DAI. The 500 DAI profit from Strategy A is still locked. Shareholders only lost 200 DAI, not 500.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg">
              <div className="flex items-start gap-4">
                <Lock className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-yellow-400 mb-2">Why This Matters</p>
                  <p>Without profit locking, a single bad strategy could erase gains from all other strategies. This mechanism isolates losses while preserving wins.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </DocsLayoutNew>
  );
}
