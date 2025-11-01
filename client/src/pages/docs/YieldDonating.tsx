import DocsLayout from "@/components/DocsLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Code2, Zap, Shield, GitBranch } from "lucide-react";
import { Link } from "wouter";

export default function YieldDonating() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Developer Path
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Yield Donating Strategies (YDS)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Connect any DeFi protocol to generate yield-derived ecosystem funding through Octant v2's vault infrastructure.
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            **Yield Donating Strategies** accept a single ERC-20 token (like USDC, DAI, or USDT) and deploy it to yield-generating DeFi protocols. When the strategy reports profit, new shares are minted and sent to the donation address. On loss, shares are burned from the donation address to maintain the 1:1 share-to-asset ratio for depositors.
          </p>

          <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Base Token Input</h4>
                  <p className="text-sm text-foreground/80">Accepts non-yield-bearing tokens (USDC, DAI, USDT)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Principal Protection</h4>
                  <p className="text-sm text-foreground/80">Depositor shares maintain 1:1 ratio with assets</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <GitBranch className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Profit Minting</h4>
                  <p className="text-sm text-foreground/80">New shares minted to donation address on gains</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Code2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Loss Burning</h4>
                  <p className="text-sm text-foreground/80">Shares burned from donation address on losses</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-3">1. Capital Deployment</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                The vault receives USDC deposits and deploys them to your YDS strategy. The strategy then lends the USDC to a protocol like Aave, Compound, or Morpho to earn yield.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Example: Aave USDC Strategy
function _deployFunds(uint256 _amount) internal override {
    // Approve Aave pool to spend USDC
    asset.approve(address(aavePool), _amount);
    
    // Supply USDC to Aave
    aavePool.supply(address(asset), _amount, address(this), 0);
    
    // Receive aUSDC in return (yield-bearing)
}` }
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">2. Yield Accumulation</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                As the protocol generates yield, your strategy's balance increases. The strategy tracks this profit internally and reports it to the vault when triggered by a keeper.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Calculate current profit
function _harvestAndReport() internal override returns (uint256) {
    // Get current aUSDC balance
    uint256 currentBalance = aToken.balanceOf(address(this));
    
    // Calculate profit (current - deployed)
    uint256 profit = currentBalance > totalDeployed 
        ? currentBalance - totalDeployed 
        : 0;
    
    return profit;
}`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-3">3. Profit Distribution</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                When the strategy reports profit, the vault mints new shares representing the yield and sends them to the donation address. Depositors' shares remain unchanged, preserving their principal.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Vault mints shares to donation address
function _processProfit(uint256 profit) internal {
    // Calculate shares to mint
    uint256 sharesToMint = convertToShares(profit);
    
    // Mint to donation address
    _mint(donationAddress, sharesToMint);
    
    // Depositors' shares unchanged (principal preserved)
}`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">4. Loss Handling</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                If the strategy reports a loss (e.g., from liquidation or protocol exploit), shares are burned from the donation address to maintain the 1:1 ratio for depositors.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Vault burns shares from donation address
function _processLoss(uint256 loss) internal {
    // Calculate shares to burn
    uint256 sharesToBurn = convertToShares(loss);
    
    // Burn from donation address (not depositors)
    _burn(donationAddress, sharesToBurn);
    
    // Depositors protected from loss
}`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Architecture */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Strategy Architecture</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            YDS strategies inherit from a base architecture that provides common functionality like health checks, role management, and reporting mechanisms.
          </p>

          <Card className="p-6 bg-muted/30">
            <h3 className="text-xl font-bold mb-4">Inheritance Chain</h3>
            <pre className="text-sm font-mono bg-background/50 p-4 rounded-md overflow-x-auto">
{`TokenizedStrategy (Yearn v3)
  └─ YieldDonatingTokenizedStrategy
       └─ BaseStrategy
            └─ BaseHealthCheck
                 └─ YourCustomStrategy (e.g., AaveUsdcStrategy)`}
            </pre>
          </Card>
        </div>

        {/* Example Strategy */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Example: Aave USDC Strategy</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Here's a complete example of a Yield Donating Strategy that lends USDC to Aave:
          </p>

          <Card className="p-6">
            <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import {BaseStrategy} from "./BaseStrategy.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AaveUsdcStrategy is BaseStrategy {
    IPool public immutable aavePool;
    IERC20 public immutable aToken;
    
    constructor(
        address _asset,
        string memory _name,
        address _aavePool,
        address _aToken
    ) BaseStrategy(_asset, _name) {
        aavePool = IPool(_aavePool);
        aToken = IERC20(_aToken);
    }
    
    // Deploy funds to Aave
    function _deployFunds(uint256 _amount) internal override {
        asset.approve(address(aavePool), _amount);
        aavePool.supply(address(asset), _amount, address(this), 0);
    }
    
    // Withdraw funds from Aave
    function _freeFunds(uint256 _amount) internal override {
        aavePool.withdraw(address(asset), _amount, address(this));
    }
    
    // Calculate total assets (USDC + aUSDC value)
    function _harvestAndReport() 
        internal 
        override 
        returns (uint256 _totalAssets) 
    {
        // aToken balance automatically includes accrued interest
        _totalAssets = aToken.balanceOf(address(this));
    }
    
    // Emergency withdraw all funds
    function _emergencyWithdraw(uint256 _amount) internal override {
        aavePool.withdraw(address(asset), _amount, address(this));
    }
}`}
            </pre>
          </Card>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-primary">Lending Protocols</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Lend stablecoins to Aave, Compound, or Morpho to earn interest
              </p>
              <Badge variant="outline" className="text-xs">Aave</Badge>
              <Badge variant="outline" className="text-xs ml-2">Compound</Badge>
              <Badge variant="outline" className="text-xs ml-2">Morpho</Badge>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-accent">Yield Aggregators</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Deploy to optimized yield strategies via Yearn or similar aggregators
              </p>
              <Badge variant="outline" className="text-xs">Yearn</Badge>
              <Badge variant="outline" className="text-xs ml-2">Beefy</Badge>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-primary">Stablecoin Protocols</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Deposit DAI into Sky Protocol's savings rate module
              </p>
              <Badge variant="outline" className="text-xs">Sky (MakerDAO)</Badge>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-accent">Custom Strategies</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Build custom yield generation logic for any DeFi protocol
              </p>
              <Badge variant="outline" className="text-xs">Your Protocol</Badge>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          
          <Alert className="mb-4 bg-primary/10 border-primary/20">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertDescription>
              <strong>Security First:</strong> Always implement health checks, emergency withdrawal mechanisms, and exposure limits in your strategies.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">1. Implement Health Checks</h3>
              <p className="text-sm text-foreground/80">
                Use BaseHealthCheck to validate strategy performance before finalizing reports. Set acceptable profit/loss thresholds.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">2. Set Exposure Limits</h3>
              <p className="text-sm text-foreground/80">
                Configure maximum debt ratios to limit capital exposure to any single strategy or protocol.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">3. Test Thoroughly</h3>
              <p className="text-sm text-foreground/80">
                Deploy to testnet first. Test deposit, withdrawal, profit reporting, and loss scenarios before mainnet deployment.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">4. Monitor Performance</h3>
              <p className="text-sm text-foreground/80">
                Set up keeper monitoring and alerts for strategy performance, health check failures, and unusual activity.
              </p>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/strategy-development">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Strategy Development Tutorial →
                </h3>
                <p className="text-foreground/70">
                  Step-by-step guide to building and deploying your first YDS strategy
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Set up your development environment and deploy your first vault
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
