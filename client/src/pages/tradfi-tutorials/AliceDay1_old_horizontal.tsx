import { motion } from 'framer-motion';
import { User, DollarSign, CheckCircle, ArrowRight, Info, AlertCircle } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';
import CardNavigationWrapper from '@/components/CardNavigationWrapper';
import { Button } from '@/components/ui/button';

// Scene 1: Alice Discovers the Vault
function Scene01AliceDiscovers() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
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

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Her Challenge: Making Idle Capital Work
        </motion.h1>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-foreground leading-relaxed space-y-6"
        >
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

          <p className="text-center text-xl font-medium">
            Then she hears about Octant's <span className="text-primary">MultistrategyVault</span> that generates{' '}
            <span className="text-green-500 font-bold">5-7% APY</span> from DeFi protocols. But she's skeptical.
          </p>

          <div className="p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg">
            <p className="text-lg italic text-center">
              "Where does the yield actually come from? I'm not gambling my savings on some ponzi scheme."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-4"
        >
          <p className="text-lg font-semibold">The vault manager explains:</p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
              <h4 className="font-bold mb-2 text-blue-400">Lido Strategy (ETH Staking)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Stake Ethereum, earn rewards from network validators. Current APY: ~4%.
              </p>
              <p className="text-xs text-muted-foreground">
                Risk: Smart contract risk + ETH price volatility (but vault uses stETH, so less exposed).
              </p>
            </div>

            <div className="p-4 bg-purple-500/10 border-2 border-purple-500/50 rounded-lg">
              <h4 className="font-bold mb-2 text-purple-400">Morpho Strategy (Lending)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Lend stablecoins to borrowers who pay interest. Current APY: ~6%.
              </p>
              <p className="text-xs text-muted-foreground">
                Risk: Borrower default (mitigated by overcollateralization) + smart contract risk.
              </p>
            </div>

            <div className="p-4 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
              <h4 className="font-bold mb-2 text-green-400">Sky Strategy (Savings Rate)</h4>
              <p className="text-sm text-muted-foreground mb-2">
                Deposit in MakerDAO's savings protocol, earn from protocol surplus. Current APY: ~5%.
              </p>
              <p className="text-xs text-muted-foreground">
                Risk: Smart contract risk.
              </p>
            </div>
          </div>

          <div className="p-6 bg-card border-2 border-primary rounded-lg">
            <p className="text-lg">
              "Your 10,000 DAI gets split across these three. If Lido has issues, 60-70% of your funds are still safe in Morpho and Sky."
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg"
        >
          <h3 className="text-xl font-bold mb-3 text-green-400">Alice decides to deposit. She's comfortable because:</h3>
          <ol className="space-y-2 list-decimal list-inside text-muted-foreground">
            <li>She understands WHERE the yield comes from (real economic activity, not token printing)</li>
            <li>Diversification across three protocols reduces risk</li>
            <li>She can withdraw anytime</li>
            <li>The protocols are battle-tested (billions in TVL)</li>
          </ol>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 2: The Deposit Transaction
function Scene02DepositTransaction() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Alice Makes Her First Deposit
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground"
        >
          Two Smart Contract Calls
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-foreground"
        >
          <p className="mb-6">
            Alice opens her wallet (MetaMask) and prepares to interact with the Octant MultistrategyVault. 
            In DeFi, depositing requires two steps:
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-[#1E1E1E] border-2 border-border rounded-lg overflow-hidden"
        >
          <div className="flex items-center justify-between p-4 bg-muted/50 border-b border-border">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-sm text-muted-foreground font-mono">AliceDeposit.sol</span>
            </div>
            <Button variant="outline" size="sm">Copy</Button>
          </div>
          <div className="p-6 font-mono text-sm overflow-x-auto">
            <pre className="text-foreground">
{`// Step 1: Alice approves the vault to spend her DAI
// (This is like signing a form allowing the vault to debit your account)
asset.approve(address(vault), 10_000 * 1e18); // 10,000 DAI

// Step 2: Alice deposits into the vault
// (This actually transfers the funds and mints shares)
uint256 shares = vault.deposit(10_000 * 1e18, alice);

// Result: Alice receives 10,000 vault shares (1:1 ratio for first deposit)`}
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <Info className="w-6 h-6 text-blue-500" />
              <h3 className="text-lg font-bold text-blue-400">Why Two Steps?</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              The approve() step is a security feature. It prevents the vault from taking more than you authorize. 
              You're essentially saying: "Vault, you can take UP TO 10,000 DAI from me, but no more."
            </p>
          </div>

          <div className="p-6 bg-green-500/10 border-2 border-green-500/50 rounded-lg">
            <div className="flex items-center gap-3 mb-3">
              <CheckCircle className="w-6 h-6 text-green-500" />
              <h3 className="text-lg font-bold text-green-400">Transaction Successful!</h3>
            </div>
            <div className="text-sm text-muted-foreground space-y-1">
              <p>• DAI Balance: 0 (transferred to vault)</p>
              <p>• Vault Shares: 10,000 (proof of ownership)</p>
              <p>• Transaction cost: ~$5 in gas fees</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="p-6 bg-card border-2 border-border rounded-lg"
        >
          <h3 className="text-lg font-bold mb-3">Technical Details:</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <p className="text-muted-foreground mb-1">Gas Used:</p>
              <p className="font-mono">~180,000 gas</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Gas Cost:</p>
              <p className="font-mono">~$5 USD (at 25 gwei)</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Transaction Time:</p>
              <p className="font-mono">15-30 seconds (1-2 Ethereum blocks)</p>
            </div>
            <div>
              <p className="text-muted-foreground mb-1">Contract Calls:</p>
              <p className="font-mono text-xs">ERC20.approve() + MultistrategyVault.deposit()</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 3: What Happens Under the Hood
function Scene03UnderTheHood() {
  const steps = [
    {
      step: 1,
      title: "Token Transfer",
      description: "Alice's 10,000 DAI moved from her wallet (0xAlice...) to the vault contract (0x742d...F4E8)",
      technical: "ERC20 transfer() function called internally by deposit()"
    },
    {
      step: 2,
      title: "Share Calculation",
      description: "Vault calculates: shares = (assets * totalSupply) / totalAssets\n\nFor first deposit: shares = (10,000 * 0) / 0 = 10,000 shares (1:1 ratio)",
      technical: "This is the ERC-4626 standard formula. Future deposits will get fewer/more shares based on vault performance."
    },
    {
      step: 3,
      title: "Share Minting",
      description: "Vault mints 10,000 new share tokens and assigns them to Alice's address",
      technical: "These shares are themselves ERC-20 tokens! Alice can transfer them, but she won't - they represent her claim on the vault."
    },
    {
      step: 4,
      title: "Idle Funds",
      description: "Right now, Alice's 10,000 DAI sits IDLE in the vault contract. It's not earning anything yet.",
      technical: "The vault manager (a human or smart contract) needs to call updateDebt() to deploy funds to strategies. This is deliberate - managers assess market conditions before deploying."
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
          Behind the Scenes: Smart Contract Magic
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground"
        >
          Following the Money Flow
        </motion.p>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="text-lg text-center"
        >
          Let's trace exactly what happened when Alice clicked 'Confirm' on that transaction:
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          {steps.map((item, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.8 + index * 0.15, duration: 0.6 }}
              className="relative pl-12"
            >
              <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center font-bold text-lg">
                {item.step}
              </div>
              
              {index < steps.length - 1 && (
                <div className="absolute left-5 top-10 w-0.5 h-full bg-border"></div>
              )}
              
              <div className="p-6 bg-card border-2 border-border rounded-lg">
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-foreground mb-3 whitespace-pre-line">{item.description}</p>
                <div className="p-3 bg-muted/50 rounded border-l-4 border-primary">
                  <p className="text-sm text-muted-foreground italic">{item.technical}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="p-6 bg-yellow-500/10 border-2 border-yellow-500/50 rounded-lg"
        >
          <h3 className="text-lg font-bold mb-2 text-yellow-500">💡 Key Insight</h3>
          <p className="text-foreground">
            Alice's 10,000 DAI is now in the vault, but NOT YET invested. She owns 100% of the vault (10,000 of 10,000 shares). 
            Her shares are like stock certificates proving ownership.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

// Scene 4: The TradFi Analogy
function Scene04TradFiAnalogy() {
  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-6xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          What This Looks Like in Traditional Finance
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground"
        >
          Bridging the Mental Model
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-6"
        >
          {/* Traditional Finance */}
          <div className="p-6 bg-orange-500/10 border-2 border-orange-500/50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-orange-400">Traditional Finance</h3>
            <h4 className="text-lg font-semibold mb-3">Alice's Vanguard Account</h4>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Alice logs into Vanguard.com</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Transfers $10,000 from her bank to Vanguard</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Sees $10,000 'cash' in her Vanguard account</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Buys 100 shares of VFIAX mutual fund at $100/share</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-orange-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Money now 'invested' but still shows as 100 shares in her account</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Custody:</p>
                <p>Vanguard holds the assets. Alice trusts Vanguard.</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Proof:</p>
                <p>Account statement (digital or paper)</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Liquidity:</p>
                <p>Sell shares → wait T+1 settlement → withdraw (3-5 business days to bank)</p>
              </div>
            </div>
          </div>

          {/* Octant DeFi */}
          <div className="p-6 bg-blue-500/10 border-2 border-blue-500/50 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-blue-400">Octant DeFi</h3>
            <h4 className="text-lg font-semibold mb-3">Alice's Vault Deposit</h4>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Alice connects wallet to Octant app</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Approves vault to spend her DAI</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Deposits 10,000 DAI into vault</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Receives 10,000 vault shares (ERC-20 tokens)</p>
              </div>
              <div className="flex items-start gap-3">
                <ArrowRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                <p className="text-sm">Funds sit idle until manager deploys to strategies</p>
              </div>
            </div>

            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Custody:</p>
                <p>Smart contract holds the assets. Alice holds the private keys. No intermediary.</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Proof:</p>
                <p>Vault share tokens in her wallet + on-chain transaction history</p>
              </div>
              <div>
                <p className="font-semibold text-muted-foreground mb-1">Liquidity:</p>
                <p>Redeem shares → instant on-chain settlement → DAI back in wallet (seconds to minutes)</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-2 gap-4"
        >
          <div className="p-4 bg-card border-2 border-border rounded-lg">
            <h4 className="font-bold mb-2">Custody</h4>
            <p className="text-sm text-muted-foreground">
              In TradFi, Vanguard can freeze your account. In DeFi, only YOU control your wallet. No one can stop you from withdrawing.
            </p>
          </div>
          <div className="p-4 bg-card border-2 border-border rounded-lg">
            <h4 className="font-bold mb-2">Transparency</h4>
            <p className="text-sm text-muted-foreground">
              In TradFi, you trust Vanguard's reporting. In DeFi, you can verify every transaction on Etherscan. Full transparency.
            </p>
          </div>
          <div className="p-4 bg-card border-2 border-border rounded-lg">
            <h4 className="font-bold mb-2">Settlement</h4>
            <p className="text-sm text-muted-foreground">
              In TradFi, settlement takes days. In DeFi, it's instant (within one block, ~12 seconds on Ethereum).
            </p>
          </div>
          <div className="p-4 bg-card border-2 border-border rounded-lg">
            <h4 className="font-bold mb-2">Operating Hours</h4>
            <p className="text-sm text-muted-foreground">
              TradFi: 9am-4pm ET, weekdays only. DeFi: 24/7/365. Deposit on Christmas at 3am? No problem.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="p-8 bg-gradient-to-r from-primary/10 to-purple-500/10 border-2 border-primary rounded-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-center">The Perfect Analogy</h3>
          <p className="text-lg text-foreground leading-relaxed">
            Depositing into the Octant Vault is like transferring money into a mutual fund account. You get 'shares' proving you own 
            a portion of the fund. The fund manager then decides how to invest those dollars across stocks, bonds, and other assets. 
            You can redeem your shares anytime to get your money back (plus or minus gains/losses).
          </p>
          <p className="text-lg text-muted-foreground mt-4 leading-relaxed">
            The only difference? In Octant, the 'mutual fund' is a smart contract, the 'shares' are ERC-20 tokens, and the 'investments' 
            are DeFi protocols. Everything else works the same.
          </p>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="text-center p-6 bg-card border-2 border-border rounded-lg"
        >
          <p className="text-lg font-medium">
            Tomorrow (Day 2), the vault manager will allocate Alice's funds to strategies. Let's see what happens →
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default function AliceDay1() {
  const scenes = [
    <Scene01AliceDiscovers key="scene1" />,
    <Scene02DepositTransaction key="scene2" />,
    <Scene03UnderTheHood key="scene3" />,
    <Scene04TradFiAnalogy key="scene4" />
  ];

  return (
    <DocsLayoutNew>
      <CardNavigationWrapper totalScenes={4}>{scenes}</CardNavigationWrapper>
    </DocsLayoutNew>
  );
}
