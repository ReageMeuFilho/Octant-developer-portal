import { motion } from 'framer-motion';
import { User, DollarSign, CheckCircle, Code, TrendingUp, Building2, Coins, Shield } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function AliceDay1() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Alice Discovers the Vault */}
        <section className="space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-center mb-8"
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4">
              <User className="w-16 h-16 text-white" />
            </div>
            <h2 className="text-3xl font-bold">Meet Alice</h2>
            <p className="text-lg text-muted-foreground">Retail Investor • Risk-Averse • Seeking Stable Yield</p>
          </motion.div>

          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Her Challenge: Making Idle Capital Work
          </h1>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Alice is a retail investor with <strong>10,000 DAI</strong> (a stablecoin pegged to the US dollar - think of it as digital cash). 
              She's been holding it in her wallet earning nothing, watching inflation erode its value.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Her traditional options:</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                  <span>Bank savings account</span>
                  <span className="text-red-500 font-medium">0.5% APY (laughable)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                  <span>Money market fund</span>
                  <span className="text-orange-500 font-medium">2-3% APY (barely beats inflation)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-muted/50 rounded">
                  <span>High-yield savings</span>
                  <span className="text-yellow-500 font-medium">4% APY (requires locking funds)</span>
                </div>
              </div>
            </div>

            <p>
              Then she hears about Octant's MultistrategyVault that generates <span className="text-green-500 font-bold">5-7% APY</span> from DeFi protocols. But she's skeptical.
            </p>

            <div className="p-6 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg italic text-center">
              <p className="text-lg">"Where does the yield actually come from? I'm not gambling my savings on some ponzi scheme."</p>
            </div>

            <p className="font-semibold text-xl">The vault manager explains:</p>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-6 bg-card border-2 border-blue-500/30 rounded-lg space-y-3">
                <h4 className="text-lg font-bold text-blue-400">Lido Strategy (ETH Staking)</h4>
                <p className="text-sm">Stake Ethereum, earn rewards from network validators. Current APY: ~4%.</p>
                <p className="text-xs text-muted-foreground">Risk: Smart contract risk + ETH price volatility (but vault uses stETH, so less exposed).</p>
              </div>
              
              <div className="p-6 bg-card border-2 border-purple-500/30 rounded-lg space-y-3">
                <h4 className="text-lg font-bold text-purple-400">Morpho Strategy (Lending)</h4>
                <p className="text-sm">Lend stablecoins to borrowers who pay interest. Current APY: ~6%.</p>
                <p className="text-xs text-muted-foreground">Risk: Borrower default (mitigated by overcollateralization) + smart contract risk.</p>
              </div>
              
              <div className="p-6 bg-card border-2 border-green-500/30 rounded-lg space-y-3">
                <h4 className="text-lg font-bold text-green-400">Sky Strategy (Savings Rate)</h4>
                <p className="text-sm">Deposit in MakerDAO's savings protocol, earn from protocol surplus. Current APY: ~5%.</p>
                <p className="text-xs text-muted-foreground">Risk: Smart contract risk.</p>
              </div>
            </div>

            <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
              <p className="text-center italic">"Your 10,000 DAI gets split across these three. If Lido has issues, 60-70% of your funds are still safe in Morpho and Sky."</p>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Alice decides to deposit. She's comfortable because:</h3>
              <ol className="space-y-2 list-decimal list-inside">
                <li>She understands WHERE the yield comes from (real economic activity, not token printing)</li>
                <li>Diversification across three protocols reduces risk</li>
                <li>She can withdraw anytime</li>
                <li>The protocols are battle-tested (billions in TVL)</li>
              </ol>
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

        {/* Scene 2: The Deposit Transaction */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Alice Makes Her First Deposit
          </h1>
          
          <h2 className="text-2xl font-semibold text-center text-muted-foreground">
            Two Smart Contract Calls
          </h2>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Alice opens her MetaMask wallet and navigates to the Octant dApp. She clicks "Deposit 10,000 DAI" and sees two transaction prompts. 
              This is standard for any DeFi deposit—first authorize, then execute.
            </p>

            <div className="p-6 bg-muted/30 border-2 border-muted rounded-lg font-mono text-sm space-y-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-muted-foreground">VaultDeposit.sol</span>
                <button className="text-xs text-blue-400 hover:text-blue-300">Copy</button>
              </div>
              <pre className="text-green-400">
{`// Step 1: Alice approves the vault to spend her DAI
asset.approve(vaultAddress, 10000e18);

// Step 2: Alice deposits DAI into the vault
vault.deposit(
  10000e18,  // amount in DAI
  alice      // recipient of shares
);

// Result: Alice receives 10,000 vault shares
// (1:1 ratio because she's the first depositor)`}
              </pre>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Why Two Steps?
                </h4>
                <p className="text-sm">
                  The approval step is a security feature. Alice explicitly authorizes the vault contract to move her DAI. 
                  Without this, no contract could touch her funds—even if she wanted it to.
                </p>
              </div>
              
              <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg space-y-3">
                <h4 className="text-lg font-bold flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Transaction Successful!
                </h4>
                <p className="text-sm">
                  Alice's wallet now shows 10,000 vault shares (ERC-20 tokens). These represent her proportional ownership of the vault's assets. 
                  As the vault earns yield, each share becomes worth more DAI.
                </p>
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

        {/* Scene 3: Behind the Scenes */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Behind the Scenes: Smart Contract Magic
          </h1>
          
          <h2 className="text-2xl font-semibold text-center text-muted-foreground">
            Following the Money Flow
          </h2>

          <div className="text-lg leading-relaxed space-y-8">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">Token Transfer</h3>
                  <p>The vault contract calls <code className="bg-muted px-2 py-1 rounded">asset.transferFrom(alice, vault, 10000e18)</code>, moving DAI from Alice's wallet to the vault's treasury.</p>
                  <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                    <p className="text-sm"><strong>Technical Detail:</strong> This is an ERC-20 token transfer. The DAI contract updates its internal ledger: Alice's balance decreases by 10,000, vault's balance increases by 10,000.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">Share Calculation</h3>
                  <p>The vault calculates how many shares to mint using the ERC-4626 formula:</p>
                  <div className="p-4 bg-muted/30 border-2 border-muted rounded font-mono text-sm">
                    <code>shares = (assets × totalSupply) / totalAssets</code>
                  </div>
                  <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                    <p className="text-sm"><strong>For Alice:</strong> Since she's the first depositor, totalSupply = 0 and totalAssets = 0. The formula defaults to 1:1, so she gets 10,000 shares.</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">Share Minting</h3>
                  <p>The vault mints 10,000 ERC-20 share tokens and sends them to Alice's address.</p>
                  <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                    <p className="text-sm"><strong>Technical Detail:</strong> These shares are themselves ERC-20 tokens. Alice can see them in her wallet, transfer them, or even trade them on a DEX (though most users just hold them to earn yield).</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div className="flex-1 space-y-2">
                  <h3 className="text-xl font-bold">Strategy Allocation</h3>
                  <p>The vault manager (either manually or via automated rebalancing) allocates the 10,000 DAI across the three strategies according to the vault's allocation policy.</p>
                  <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                    <p className="text-sm"><strong>Example Split:</strong> 3,000 DAI → Lido (30%), 4,000 DAI → Morpho (40%), 3,000 DAI → Sky (30%). Each strategy contract receives its allocation and starts generating yield.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
              <h3 className="text-xl font-bold mb-3">Key Insight</h3>
              <p>
                Alice doesn't interact with Lido, Morpho, or Sky directly. The vault contract handles all the complexity. 
                She just holds shares and watches her balance grow as strategies report profits.
              </p>
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

        {/* Scene 4: TradFi Analogy */}
        <section className="space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            What This Looks Like in Traditional Finance
          </h1>
          
          <h2 className="text-2xl font-semibold text-center text-muted-foreground">
            Bridging the Mental Model
          </h2>

          <div className="text-lg leading-relaxed space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 bg-orange-500/10 border-2 border-orange-500/30 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-orange-400">Traditional Finance</h3>
                <h4 className="text-lg font-semibold">Alice's Vanguard Account</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Alice writes a $10,000 check to Vanguard</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Vanguard deposits it in their bank</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Fund manager buys stocks, bonds, real estate</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>Alice receives account statement showing 10,000 shares</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-orange-400">→</span>
                    <span>NAV (Net Asset Value) updates once per day after market close</span>
                  </li>
                </ul>
                <div className="space-y-2 pt-4 border-t border-orange-500/30">
                  <p className="font-semibold">Custody:</p>
                  <p className="text-sm">Vanguard holds your money. You trust them not to lose it.</p>
                  <p className="font-semibold mt-3">Proof:</p>
                  <p className="text-sm">Monthly PDF statements. You can't verify holdings in real-time.</p>
                  <p className="font-semibold mt-3">Liquidity:</p>
                  <p className="text-sm">Withdraw anytime, but settlement takes 2-3 business days.</p>
                </div>
              </div>

              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg space-y-4">
                <h3 className="text-2xl font-bold text-blue-400">Octant DeFi</h3>
                <h4 className="text-lg font-semibold">Alice's Vault Deposit</h4>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Alice approves vault contract to spend her DAI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Vault contract transfers DAI from Alice's wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Vault allocates across Lido, Morpho, Sky strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>Alice receives 10,000 ERC-20 vault shares in her wallet</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400">→</span>
                    <span>NAV updates continuously (every Ethereum block, ~12 seconds)</span>
                  </li>
                </ul>
                <div className="space-y-2 pt-4 border-t border-blue-500/30">
                  <p className="font-semibold">Custody:</p>
                  <p className="text-sm">Smart contract holds funds. No human can access them outside programmed rules.</p>
                  <p className="font-semibold mt-3">Proof:</p>
                  <p className="text-sm">Every transaction is on-chain. You can verify vault holdings on Etherscan anytime.</p>
                  <p className="font-semibold mt-3">Liquidity:</p>
                  <p className="text-sm">Withdraw anytime, settlement in seconds (one blockchain transaction).</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="p-6 bg-card border-2 border-border rounded-lg space-y-2">
                <h4 className="text-lg font-bold">Custody</h4>
                <p className="text-sm text-muted-foreground">TradFi: Vanguard holds your money</p>
                <p className="text-sm">DeFi: Smart contract holds funds, no human intermediary</p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg space-y-2">
                <h4 className="text-lg font-bold">Transparency</h4>
                <p className="text-sm text-muted-foreground">TradFi: Quarterly reports, delayed data</p>
                <p className="text-sm">DeFi: Real-time on-chain verification</p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg space-y-2">
                <h4 className="text-lg font-bold">Settlement</h4>
                <p className="text-sm text-muted-foreground">TradFi: 2-3 business days</p>
                <p className="text-sm">DeFi: Seconds (one transaction)</p>
              </div>

              <div className="p-6 bg-card border-2 border-border rounded-lg space-y-2">
                <h4 className="text-lg font-bold">Operating Hours</h4>
                <p className="text-sm text-muted-foreground">TradFi: 9am-5pm weekdays</p>
                <p className="text-sm">DeFi: 24/7/365, no holidays</p>
              </div>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
              <h3 className="text-xl font-bold mb-3">The Bottom Line</h3>
              <p>
                Alice's DeFi experience mirrors her TradFi mutual fund workflow, but with programmable guarantees instead of institutional trust. 
                She trades counterparty risk (trusting Vanguard) for smart contract risk (trusting audited code).
              </p>
            </div>
          </div>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
