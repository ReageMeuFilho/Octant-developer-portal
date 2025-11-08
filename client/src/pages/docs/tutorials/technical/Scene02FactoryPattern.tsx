import { motion } from 'framer-motion';
import { Code2, Copy } from 'lucide-react';
import { useState } from 'react';

export default function Scene02FactoryPattern() {
  const [copied, setCopied] = useState(false);

  const code = `// Factory Pattern: Deploy Multiple Vaults
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
}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex items-center justify-center w-full h-full px-4">
      <div className="max-w-5xl w-full space-y-8">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Factory Pattern
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-xl text-center text-muted-foreground max-w-3xl mx-auto"
        >
          Deploy multiple vaults with different strategies using a single factory contract
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="relative"
        >
          <div className="bg-card border border-border rounded-lg overflow-hidden">
            <div className="flex items-center justify-between px-4 py-2 bg-muted border-b border-border">
              <div className="flex items-center gap-2">
                <Code2 className="w-4 h-4" />
                <span className="text-sm font-mono">VaultFactory.sol</span>
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-2 px-3 py-1 text-sm bg-primary/10 hover:bg-primary/20 rounded transition-colors"
              >
                <Copy className="w-3 h-3" />
                {copied ? 'Copied!' : 'Copy'}
              </button>
            </div>
            <pre className="p-4 overflow-x-auto">
              <code className="text-sm font-mono">{code}</code>
            </pre>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="grid md:grid-cols-3 gap-4"
        >
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-bold mb-2">Modular</h3>
            <p className="text-sm text-muted-foreground">
              Each vault can use different strategies and allocation mechanisms
            </p>
          </div>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-bold mb-2">Scalable</h3>
            <p className="text-sm text-muted-foreground">
              Deploy unlimited vaults without redeploying factory code
            </p>
          </div>
          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <h3 className="font-bold mb-2">Secure</h3>
            <p className="text-sm text-muted-foreground">
              Factory validates parameters before deployment
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
