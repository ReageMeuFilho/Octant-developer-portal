import { motion } from 'framer-motion';
import { Vault, Vote, Shield, Eye, Code, Clock } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function GettingStartedOverview() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Welcome to Octant Protocol */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            A New Way to Generate Yield and Govern
          </h1>

          <p className="text-xl text-center text-muted-foreground max-w-3xl mx-auto">
            Built for Traditional Finance Professionals
          </p>

          <div className="text-lg text-center text-foreground max-w-4xl mx-auto leading-relaxed space-y-4">
            <p>
              Octant Protocol brings institutional-grade DeFi infrastructure to endowments, DAOs, and sophisticated investors. 
              If you understand mutual funds and corporate governance, you already understand 80% of how Octant works.
            </p>
            <p>
              This guide will walk you through two completely independent systems that work together to maximize your capital 
              efficiency while maintaining full control.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            <div className="p-8 bg-card border-2 border-border rounded-lg hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-blue-500/10">
                  <Vault className="w-8 h-8 text-blue-500" />
                </div>
                <h3 className="text-2xl font-bold">Vault System</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Like a professionally-managed mutual fund that deploys your capital across multiple DeFi protocols
              </p>
            </div>

            <div className="p-8 bg-card border-2 border-border rounded-lg hover:border-primary/50 transition-all">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 rounded-lg bg-green-500/10">
                  <Vote className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold">Staking System</h3>
              </div>
              <p className="text-muted-foreground text-lg">
                Like owning corporate stock with voting rights and dividend payments
              </p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg">
            <p className="text-center text-lg font-medium">
              ⚠️ These two systems don't talk to each other - and that's by design for safety.
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

        {/* Scene 2: Two Independent Systems */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Vault System vs Staking System
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Understanding the Separation
          </p>

          <div className="text-lg text-foreground max-w-5xl mx-auto leading-relaxed space-y-6">
            <p>Think of Octant as having two separate bank accounts:</p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-blue-400">Left Side: The Vault Bank</h3>
                <p className="text-muted-foreground">
                  You deposit capital (like USDC or DAI), and professional managers invest it across battle-tested 
                  DeFi protocols (Lido, Morpho, Sky). You earn yield. You can withdraw anytime.
                </p>
              </div>

              <div className="p-6 bg-pink-500/10 border-2 border-pink-500/50 rounded-lg">
                <h3 className="text-xl font-bold mb-3 text-pink-400">Right Side: The Voting Rights Bank</h3>
                <p className="text-muted-foreground">
                  You deposit governance tokens, delegate your voting power to experts (or vote yourself), and earn 
                  rewards from the protocol treasury. Your tokens stay yours.
                </p>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-border">
                  <th className="text-left p-4 font-bold">Aspect</th>
                  <th className="text-left p-4 font-bold text-blue-400">Vault System</th>
                  <th className="text-left p-4 font-bold text-pink-400">Staking System</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Purpose</td>
                  <td className="p-4 text-muted-foreground">Generate yield from DeFi</td>
                  <td className="p-4 text-muted-foreground">Participate in governance + earn rewards</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">What you deposit</td>
                  <td className="p-4 text-muted-foreground">Stablecoins (USDC, DAI)</td>
                  <td className="p-4 text-muted-foreground">Governance tokens</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">What you receive</td>
                  <td className="p-4 text-muted-foreground">Vault shares (like mutual fund shares)</td>
                  <td className="p-4 text-muted-foreground">Deposit ID + voting power</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">How you earn</td>
                  <td className="p-4 text-muted-foreground">DeFi protocol yields (4-6% APY)</td>
                  <td className="p-4 text-muted-foreground">Protocol treasury rewards (variable)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4 font-medium">Risk profile</td>
                  <td className="p-4 text-muted-foreground">Smart contract + DeFi protocol risk</td>
                  <td className="p-4 text-muted-foreground">Smart contract + delegation risk</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Liquidity</td>
                  <td className="p-4 text-muted-foreground">Withdraw anytime (subject to protocol liquidity)</td>
                  <td className="p-4 text-muted-foreground">Withdraw anytime</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 bg-red-500/10 border-2 border-red-500/50 rounded-lg">
            <p className="text-center text-lg font-medium">
              🚨 These systems are COMPLETELY SEPARATE. Your vault deposits don't affect your staking positions. 
              This separation is what makes Octant safe - if one system has issues, the other is unaffected.
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

        {/* Scene 3: Key Differences from Traditional Finance */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            What Makes Octant Different
          </h1>

          <p className="text-xl text-center text-muted-foreground">
            Important Distinctions to Understand
          </p>

          <p className="text-lg text-center text-foreground max-w-4xl mx-auto">
            If you're coming from traditional finance, here are the key mental model shifts you need to make:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-card border-2 border-blue-500/30 rounded-lg space-y-4">
              <div className="flex items-center gap-3">
                <Shield className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-bold">No Custodian</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                  <p className="text-sm font-medium text-orange-400 mb-1">In TradFi:</p>
                  <p className="text-sm">Your mutual fund is held by Fidelity, Vanguard, etc. They control the assets.</p>
                </div>
                <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                  <p className="text-sm font-medium text-blue-400 mb-1">In Octant:</p>
                  <p className="text-sm">You control your assets via smart contracts. No intermediary can freeze or seize your funds.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                  <p className="text-sm font-medium text-yellow-400 mb-1">Implication:</p>
                  <p className="text-sm">More control = More responsibility. Secure your wallet keys.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border-2 border-green-500/30 rounded-lg space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="w-8 h-8 text-green-500" />
                <h3 className="text-xl font-bold">Transparent Operations</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                  <p className="text-sm font-medium text-orange-400 mb-1">In TradFi:</p>
                  <p className="text-sm">Fund managers report quarterly. You trust their numbers.</p>
                </div>
                <div className="p-4 bg-green-500/10 border-l-4 border-green-500 rounded">
                  <p className="text-sm font-medium text-green-400 mb-1">In Octant:</p>
                  <p className="text-sm">Every transaction is on-chain and verifiable in real-time. You can audit everything.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                  <p className="text-sm font-medium text-yellow-400 mb-1">Implication:</p>
                  <p className="text-sm">Full transparency = You can verify, not just trust.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border-2 border-purple-500/30 rounded-lg space-y-4">
              <div className="flex items-center gap-3">
                <Code className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-bold">Programmable Money</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                  <p className="text-sm font-medium text-orange-400 mb-1">In TradFi:</p>
                  <p className="text-sm">Funds follow rigid regulations. Changes take years.</p>
                </div>
                <div className="p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded">
                  <p className="text-sm font-medium text-purple-400 mb-1">In Octant:</p>
                  <p className="text-sm">Smart contracts can be updated (with governance approval). Innovative strategies deploy fast.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                  <p className="text-sm font-medium text-yellow-400 mb-1">Implication:</p>
                  <p className="text-sm">Faster innovation = Higher potential returns, but also new risks.</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-card border-2 border-orange-500/30 rounded-lg space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="w-8 h-8 text-orange-500" />
                <h3 className="text-xl font-bold">24/7 Accessibility</h3>
              </div>
              <div className="space-y-3">
                <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                  <p className="text-sm font-medium text-orange-400 mb-1">In TradFi:</p>
                  <p className="text-sm">Markets close. Transfers take days. Wire deadlines exist.</p>
                </div>
                <div className="p-4 bg-orange-500/10 border-l-4 border-orange-500 rounded">
                  <p className="text-sm font-medium text-orange-400 mb-1">In Octant:</p>
                  <p className="text-sm">Blockchain never sleeps. Deposit, withdraw, vote anytime. Instant settlement.</p>
                </div>
                <div className="p-4 bg-yellow-500/10 border-l-4 border-yellow-500 rounded">
                  <p className="text-sm font-medium text-yellow-400 mb-1">Implication:</p>
                  <p className="text-sm">Always available = React to opportunities immediately.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
            <p className="text-center text-lg font-medium">
              ✅ Ready to dive deep? Let's follow Alice's journey through the Vault System →
            </p>
          </div>
        </section>
      </div>
    </DocsLayoutNew>
  );
}
