import { motion } from 'framer-motion';
import { Vault, Vote, Shield, Eye, Code, Clock } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';

// Scene 1: Welcome to Octant Protocol
function Scene01Welcome() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          A New Way to Generate Yield and Govern
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Built for Traditional Finance Professionals
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-center text-foreground max-w-4xl mx-auto leading-relaxed space-y-4"
        >
          <p>
            Octant Protocol brings institutional-grade DeFi infrastructure to endowments, DAOs, and sophisticated investors. 
            If you understand mutual funds and corporate governance, you already understand 80% of how Octant works.
          </p>
          <p>
            This guide will walk you through two completely independent systems that work together to maximize your capital 
            efficiency while maintaining full control.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-12"
        >
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
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg"
        >
          <p className="text-center text-lg font-medium">
            ⚠️ These two systems don't talk to each other - and that's by design for safety.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 2: Two Independent Systems
function Scene02TwoSystems() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-6xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Vault System vs Staking System
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground"
        >
          Understanding the Separation
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-foreground max-w-5xl mx-auto leading-relaxed space-y-6"
        >
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
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="overflow-x-auto"
        >
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
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-8 p-6 bg-red-500/10 border-2 border-red-500/50 rounded-lg"
        >
          <p className="text-center text-lg font-medium">
            🚨 These systems are COMPLETELY SEPARATE. Your vault deposits don't affect your staking positions. 
            This separation is what makes Octant safe - if one system has issues, the other is unaffected.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 3: Key Differences from Traditional Finance
function Scene03KeyDifferences() {
  const differences = [
    {
      icon: Shield,
      title: "No Custodian",
      tradfi: "Your mutual fund is held by Fidelity, Vanguard, etc. They control the assets.",
      octant: "You control your assets via smart contracts. No intermediary can freeze or seize your funds.",
      implication: "More control = More responsibility. Secure your wallet keys.",
      color: "text-blue-500"
    },
    {
      icon: Eye,
      title: "Transparent Operations",
      tradfi: "Fund managers report quarterly. You trust their numbers.",
      octant: "Every transaction is on-chain and verifiable in real-time. You can audit everything.",
      implication: "Full transparency = You can verify, not just trust.",
      color: "text-green-500"
    },
    {
      icon: Code,
      title: "Programmable Money",
      tradfi: "Funds follow rigid regulations. Changes take years.",
      octant: "Smart contracts can be updated (with governance approval). Innovative strategies deploy fast.",
      implication: "Faster innovation = Higher potential returns, but also new risks.",
      color: "text-purple-500"
    },
    {
      icon: Clock,
      title: "24/7 Accessibility",
      tradfi: "Markets close. Transfers take days. Wire deadlines exist.",
      octant: "Blockchain never sleeps. Deposit, withdraw, vote anytime. Instant settlement.",
      implication: "Always available = React to opportunities immediately.",
      color: "text-orange-500"
    }
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
          What Makes Octant Different
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground"
        >
          Important Distinctions to Understand
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-center text-foreground max-w-4xl mx-auto"
        >
          While Octant uses familiar concepts from TradFi, there are critical differences:
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6 mt-8"
        >
          {differences.map((diff, index) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={index}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                className="p-6 bg-card border-2 border-border rounded-lg hover:border-primary/50 transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-primary/10`}>
                    <Icon className={`w-6 h-6 ${diff.color}`} />
                  </div>
                  <h3 className="text-xl font-bold">{diff.title}</h3>
                </div>
                
                <div className="space-y-3">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Traditional Finance:</p>
                    <p className="text-sm text-muted-foreground">{diff.tradfi}</p>
                  </div>
                  
                  <div>
                    <p className="text-sm font-semibold text-primary mb-1">Octant:</p>
                    <p className="text-sm text-foreground">{diff.octant}</p>
                  </div>
                  
                  <div className="pt-2 border-t border-border">
                    <p className="text-sm font-medium text-yellow-500">💡 {diff.implication}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary rounded-lg text-center"
        >
          <p className="text-xl font-bold mb-2">Ready to dive deep?</p>
          <p className="text-lg text-muted-foreground">
            Let's follow Alice's journey through the Vault System →
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function GettingStartedOverview() {
  const scenes = [
    <Scene01Welcome key="scene1" />,
    <Scene02TwoSystems key="scene2" />,
    <Scene03KeyDifferences key="scene3" />
  ];

  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={3}>{scenes}</CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
