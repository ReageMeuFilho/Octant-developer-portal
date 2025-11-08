import { motion } from 'framer-motion';
import { User, Code, Layers, Workflow, Box } from 'lucide-react';
import DocsLayoutNew from '@/components/DocsLayoutNew';

export default function TechnicalArchitecture() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        {/* Scene 1: Meet Sarah (Technical Challenge) */}
        <section className="space-y-8 text-center">
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center shadow-2xl">
              <User className="w-24 h-24 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold">
            Meet Sarah (Again)
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground">
            Smart Contract Architect
          </p>

          <div className="text-lg leading-relaxed space-y-4 text-left max-w-3xl mx-auto">
            <p>
              Sarah's been tasked with building Octant's vault system. Her challenge: 
              <strong className="text-primary"> Deploy multiple vaults, each with different strategies, without rewriting the same code</strong>.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <h3 className="text-xl font-bold mb-4">Her Requirements:</h3>
              <ul className="space-y-2 list-disc list-inside">
                <li>Each vault must be ERC-4626 compliant</li>
                <li>Strategies must be pluggable (Aave, Lido, Morpho, etc.)</li>
                <li>No code duplication - use a factory pattern</li>
                <li>Upgradeable without redeploying all vaults</li>
              </ul>
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

        {/* Scene 2: Factory Pattern */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-blue-500/20 flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Factory Pattern</h2>
          </div>

          <p className="text-xl text-muted-foreground">
            Deploy multiple vaults with different strategies using a single factory contract
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Instead of deploying each vault manually, Sarah creates a <strong>VaultFactory</strong> contract. 
              This factory can spawn unlimited vaults, each with custom parameters.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-blue-400">VaultFactory.sol</h3>
                <button className="text-sm text-muted-foreground hover:text-foreground">Copy</button>
              </div>
              <pre className="bg-muted p-4 rounded overflow-x-auto">
                <code className="text-sm font-mono">{`// Factory Pattern: Deploy Multiple Vaults
contract VaultFactory {
    function createVault(
        address strategy,
        address allocation
    ) external returns (address) {
        FundingVault vault = new FundingVault(
            strategy,
            allocation,
            msg.sender
        );
        return address(vault);
    }
}`}</code>
              </pre>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg">
                <h4 className="font-bold text-blue-400 mb-2">Modular</h4>
                <p className="text-sm">Each vault can use different strategies and allocation mechanisms</p>
              </div>
              <div className="p-4 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
                <h4 className="font-bold text-green-400 mb-2">Scalable</h4>
                <p className="text-sm">Deploy unlimited vaults without redeploying factory code</p>
              </div>
              <div className="p-4 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg">
                <h4 className="font-bold text-purple-400 mb-2">Secure</h4>
                <p className="text-sm">Factory validates parameters before deployment</p>
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

        {/* Scene 3: Strategy Interface */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center">
              <Layers className="w-8 h-8 text-purple-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Strategy Interface</h2>
          </div>

          <p className="text-xl text-muted-foreground">
            Pluggable strategies that work with any vault
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Sarah defines a standard <strong>IStrategy</strong> interface. Any protocol (Aave, Lido, Morpho) 
              can implement this interface, making strategies interchangeable.
            </p>

            <div className="p-6 bg-card border-2 border-border rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold text-purple-400">IStrategy.sol</h3>
                <button className="text-sm text-muted-foreground hover:text-foreground">Copy</button>
              </div>
              <pre className="bg-muted p-4 rounded overflow-x-auto">
                <code className="text-sm font-mono">{`interface IStrategy {
    function deposit(uint256 amount) external;
    function withdraw(uint256 amount) external;
    function harvest() external returns (uint256);
    function balanceOf() external view returns (uint256);
}`}</code>
              </pre>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold">Example Implementations:</h3>
              
              <div className="p-4 bg-blue-500/10 border-l-4 border-blue-500 rounded">
                <h4 className="font-bold text-blue-400 mb-2">Aave Strategy</h4>
                <p className="text-sm">Deposits DAI into Aave lending pools, earns interest, harvests rewards</p>
              </div>

              <div className="p-4 bg-purple-500/10 border-l-4 border-purple-500 rounded">
                <h4 className="font-bold text-purple-400 mb-2">Lido Strategy</h4>
                <p className="text-sm">Stakes ETH with Lido, receives stETH, harvests staking rewards</p>
              </div>

              <div className="p-4 bg-green-500/10 border-l-4 border-green-500 rounded">
                <h4 className="font-bold text-green-400 mb-2">Morpho Strategy</h4>
                <p className="text-sm">Optimizes lending rates through Morpho protocol, harvests yield</p>
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

        {/* Scene 4: Dragon Protocol Flow */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
              <Workflow className="w-8 h-8 text-green-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Dragon Protocol Flow</h2>
          </div>

          <p className="text-xl text-muted-foreground">
            How capital flows through the system
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              When a user deposits into an Octant vault, here's what happens behind the scenes:
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-card border-2 border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">1</div>
                <div>
                  <h4 className="font-bold mb-1">User Deposits DAI</h4>
                  <p className="text-sm text-muted-foreground">User calls <code className="bg-muted px-2 py-1 rounded">vault.deposit(10000)</code></p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border-2 border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">2</div>
                <div>
                  <h4 className="font-bold mb-1">Vault Mints Shares</h4>
                  <p className="text-sm text-muted-foreground">ERC-4626 formula calculates shares based on current NAV</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border-2 border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">3</div>
                <div>
                  <h4 className="font-bold mb-1">Strategy Deploys Capital</h4>
                  <p className="text-sm text-muted-foreground">Vault calls <code className="bg-muted px-2 py-1 rounded">strategy.deposit()</code> to allocate funds</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border-2 border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0 text-white font-bold">4</div>
                <div>
                  <h4 className="font-bold mb-1">Yield Accrues</h4>
                  <p className="text-sm text-muted-foreground">Strategy earns yield from underlying protocols (Aave, Lido, etc.)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-card border-2 border-border rounded-lg">
                <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 text-white font-bold">5</div>
                <div>
                  <h4 className="font-bold mb-1">Harvest & Lock Profits</h4>
                  <p className="text-sm text-muted-foreground">Manager calls <code className="bg-muted px-2 py-1 rounded">harvest()</code> to lock gains into vault NAV</p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg">
              <p className="font-semibold text-green-400 mb-2">Key Insight</p>
              <p>The vault never holds strategy-specific tokens. Everything is converted to the base asset (DAI) before updating NAV.</p>
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

        {/* Scene 5: Complete System Architecture */}
        <section className="space-y-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 rounded-full bg-orange-500/20 flex items-center justify-center">
              <Box className="w-8 h-8 text-orange-400" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Complete System Architecture</h2>
          </div>

          <p className="text-xl text-muted-foreground">
            All the pieces working together
          </p>

          <div className="text-lg leading-relaxed space-y-6">
            <p>
              Sarah's final architecture has three modular layers that work independently:
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 bg-blue-500/10 border-2 border-blue-500/30 rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center">
                  <Box className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-blue-400">Vault Layer</h3>
                <p className="text-sm">
                  ERC-4626 compliant vaults handle deposits, withdrawals, and share accounting
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• MultistrategyVaultFactory</li>
                  <li>• MultistrategyVault</li>
                  <li>• ERC-4626 Standard</li>
                </ul>
              </div>

              <div className="p-6 bg-purple-500/10 border-2 border-purple-500/30 rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center">
                  <Layers className="w-6 h-6 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-purple-400">Strategy Layer</h3>
                <p className="text-sm">
                  Pluggable strategies deploy capital to different DeFi protocols
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• IStrategy Interface</li>
                  <li>• Aave Strategy</li>
                  <li>• Lido Strategy</li>
                  <li>• Morpho Strategy</li>
                </ul>
              </div>

              <div className="p-6 bg-green-500/10 border-2 border-green-500/30 rounded-lg space-y-4">
                <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center">
                  <Workflow className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-green-400">Allocation Layer</h3>
                <p className="text-sm">
                  Mechanisms route yield to different destinations (rewards, treasury, etc.)
                </p>
                <ul className="text-xs space-y-1 text-muted-foreground">
                  <li>• IAllocationMechanism</li>
                  <li>• Quadratic Funding</li>
                  <li>• Direct Allocation</li>
                </ul>
              </div>
            </div>

            <div className="p-6 bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg">
              <p className="font-semibold text-yellow-400 mb-2">Why This Architecture Works</p>
              <ul className="space-y-2 text-sm">
                <li>✓ <strong>Modular:</strong> Each layer can be upgraded independently</li>
                <li>✓ <strong>Scalable:</strong> Add new strategies without touching vault code</li>
                <li>✓ <strong>Secure:</strong> Clear separation of concerns reduces attack surface</li>
                <li>✓ <strong>Maintainable:</strong> Teams can work on different layers simultaneously</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </DocsLayoutNew>
  );
}
