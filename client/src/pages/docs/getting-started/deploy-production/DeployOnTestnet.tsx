import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Rocket,
  Terminal,
  CheckCircle,
  AlertTriangle,
  Info,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

export default function DeployOnTestnet() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Deploy to Production
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Deploy on Testnet
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deploy your Funding Vault and strategies to Sepolia testnet for safe testing before mainnet.
          </p>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            <strong>Time:</strong> 20 minutes | <strong>Cost:</strong> ~0.01 Sepolia ETH | <strong>Prerequisites:</strong> Completed strategy development
          </AlertDescription>
        </Alert>

        <div>
          <h2 className="text-3xl font-bold mb-6">Pre-Deployment Checklist</h2>
          <Card className="p-6 bg-card border-border/50">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Strategy tests passing</p>
                  <p className="text-sm text-muted-foreground">Run <code>forge test</code> - all tests should pass</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Testnet ETH in wallet</p>
                  <p className="text-sm text-muted-foreground">Get from Sepolia faucet</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold">Environment configured</p>
                  <p className="text-sm text-muted-foreground">Private key and RPC URL ready</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Deployment Steps</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3">1. Deploy Funding Vault</h3>
              <p className="text-muted-foreground mb-3">
                Deploy the main vault contract that will hold user deposits.
              </p>
              <div className="bg-muted p-3 rounded">
                <pre className="text-sm"><code>forge create src/FundingVault.sol:FundingVault \
  --rpc-url sepolia \
  --private-key \$PRIVATE_KEY \
  --constructor-args \$USDC_ADDRESS "Octant USDC Vault" "octUSDC"</code></pre>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3">2. Deploy Strategy</h3>
              <p className="text-muted-foreground mb-3">
                Deploy your yield strategy (e.g., Aave lending strategy).
              </p>
              <div className="bg-muted p-3 rounded">
                <pre className="text-sm"><code>forge create src/strategies/AaveLendingStrategy.sol:AaveLendingStrategy \
  --rpc-url sepolia \
  --private-key \$PRIVATE_KEY \
  --constructor-args \$VAULT_ADDRESS \$USDC_ADDRESS \$AAVE_POOL \$AUSDC</code></pre>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="text-xl font-bold mb-3">3. Add Strategy to Vault</h3>
              <p className="text-muted-foreground mb-3">
                Connect the strategy to the vault with allocation percentage.
              </p>
              <div className="bg-muted p-3 rounded">
                <pre className="text-sm"><code>cast send \$VAULT_ADDRESS \
  "addStrategy(address,uint256)" \
  \$STRATEGY_ADDRESS 10000 \
  --rpc-url sepolia \
  --private-key \$PRIVATE_KEY</code></pre>
              </div>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Next:</strong> Build a frontend for your vault with <Link href="/docs/getting-started/frontend-integration/build-deposit-withdraw-ui" className="text-primary hover:underline">Build Deposit/Withdraw UI</Link>.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/deploy-production/testing-checklist">
            <Button variant="outline">← Testing Checklist</Button>
          </Link>
          <Link href="/docs/getting-started/deploy-production/deploy-multi-strategy-vault">
            <Button className="gap-2">
              Deploy Multi-Strategy Vault
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
