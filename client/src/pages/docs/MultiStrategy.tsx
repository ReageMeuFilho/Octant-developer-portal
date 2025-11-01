import DocsLayout from "@/components/DocsLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Layers, Shield, TrendingUp, Settings, BarChart3, AlertTriangle } from "lucide-react";
import { Link } from "wouter";

export default function MultiStrategy() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Developer Path
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Multi-Strategy Vaults
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Build sophisticated treasury management systems that balance multiple yield sources with advanced risk management.
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            **Multi-Strategy Vaults** enable treasuries to deploy capital across multiple yield-generating strategies simultaneously. This diversification reduces risk, optimizes returns, and provides flexibility to adapt to changing market conditions. Each strategy can have its own debt allocation, performance targets, and risk parameters.
          </p>

          <Card className="p-6 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 border-accent/20">
            <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Layers className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Risk Diversification</h4>
                  <p className="text-sm text-foreground/80">Spread capital across multiple protocols and strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Exposure Limits</h4>
                  <p className="text-sm text-foreground/80">Set maximum debt ratios per strategy</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Optimized Returns</h4>
                  <p className="text-sm text-foreground/80">Dynamically allocate to best-performing strategies</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Settings className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Flexible Management</h4>
                  <p className="text-sm text-foreground/80">Add, remove, or adjust strategies without disruption</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Architecture */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Architecture</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            A Multi-Strategy Vault consists of a central vault contract that manages multiple strategy contracts. The vault allocates capital (debt) to each strategy based on configured parameters and monitors their performance.
          </p>

          <Card className="p-6 bg-muted/30">
            <h3 className="text-xl font-bold mb-4">Component Structure</h3>
            <pre className="text-sm font-mono bg-background/50 p-4 rounded-md overflow-x-auto">
{`┌─────────────────────────────────────┐
│      Funding Vault (ERC-4626)       │
│  - Manages depositor shares          │
│  - Allocates debt to strategies      │
│  - Tracks total assets               │
└────────────┬────────────────────────┘
             │
      ┌──────┴──────┐
      │   Debt      │
      │ Allocation  │
      └──────┬──────┘
             │
    ┌────────┴────────┐
    │                 │
┌───▼────┐    ┌──────▼───┐    ┌────────▼───┐
│Strategy│    │ Strategy │    │  Strategy  │
│   A    │    │    B     │    │     C      │
│(Aave)  │    │ (Morpho) │    │  (Lido)    │
└────────┘    └──────────┘    └────────────┘
   30%            40%              30%
 (debt ratio)  (debt ratio)    (debt ratio)`}
            </pre>
          </Card>
        </div>

        {/* Strategy Configuration */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Strategy Configuration</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Each strategy in a Multi-Strategy Vault has its own configuration parameters that control risk exposure and performance expectations.
          </p>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">Debt Ratio</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                The **debt ratio** defines the maximum percentage of vault assets that can be allocated to a strategy. This limits exposure to any single protocol or strategy.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`struct StrategyParams {
    uint256 debtRatio;        // Max % of vault assets (in basis points)
    uint256 minDebtPerHarvest; // Minimum debt change to trigger harvest
    uint256 maxDebtPerHarvest; // Maximum debt change per harvest
    uint256 performanceFee;    // Fee taken on profits (in basis points)
    uint256 activation;        // Timestamp when strategy was added
    uint256 lastReport;        // Last time strategy reported
}

// Example: Set Aave strategy to max 30% of vault assets
vault.updateStrategyDebtRatio(aaveStrategy, 3000); // 3000 = 30%`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-3">Performance Fee</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Strategies can charge a performance fee on profits generated. This fee is taken before profits are distributed to the donation address.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Set 10% performance fee for strategy
vault.updateStrategyPerformanceFee(strategy, 1000); // 1000 = 10%

// When strategy reports 100 ETH profit:
// - 10 ETH goes to strategy manager
// - 90 ETH minted as shares to donation address`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">Debt Limits</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Control how much debt can be added or removed from a strategy in a single transaction. This prevents sudden large movements that could impact protocol liquidity.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Set min/max debt changes per harvest
vault.updateStrategyMinDebtPerHarvest(strategy, 10_000e18);  // Min 10k USDC
vault.updateStrategyMaxDebtPerHarvest(strategy, 100_000e18); // Max 100k USDC`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Debt Management */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Debt Management</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            The vault continuously manages debt allocation across strategies, ensuring each strategy stays within its configured limits while optimizing overall returns.
          </p>

          <div className="space-y-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Adding Debt to a Strategy</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                When a strategy has capacity and is performing well, the vault can allocate more capital to it.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`function updateStrategyDebt(address strategy) external onlyKeeper {
    StrategyParams storage params = strategies[strategy];
    
    // Calculate current debt and target debt
    uint256 currentDebt = strategyDebt[strategy];
    uint256 targetDebt = (totalAssets() * params.debtRatio) / 10000;
    
    if (targetDebt > currentDebt) {
        // Add debt to strategy
        uint256 debtIncrease = min(
            targetDebt - currentDebt,
            params.maxDebtPerHarvest
        );
        
        // Transfer assets to strategy
        asset.transfer(strategy, debtIncrease);
        strategyDebt[strategy] += debtIncrease;
        
        emit DebtUpdated(strategy, currentDebt + debtIncrease);
    }
}`}
              </pre>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Removing Debt from a Strategy</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                When a strategy is underperforming or needs to be wound down, the vault can withdraw capital.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`function reduceStrategyDebt(address strategy, uint256 amount) external onlyGovernance {
    uint256 currentDebt = strategyDebt[strategy];
    require(amount <= currentDebt, "Exceeds current debt");
    
    // Request withdrawal from strategy
    IStrategy(strategy).withdraw(amount);
    
    // Update debt tracking
    strategyDebt[strategy] -= amount;
    
    emit DebtReduced(strategy, strategyDebt[strategy]);
}`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Rebalancing */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Rebalancing Strategies</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Over time, strategy performance diverges and debt ratios drift from targets. Rebalancing reallocates capital to maintain desired exposure levels and optimize returns.
          </p>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Rebalancing Process</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-bold mb-2">1. Assess Current State</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Calculate current debt ratios for all strategies and compare to targets.
                </p>
                <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`// Current state:
Aave:   50% (target: 30%) → Over-allocated
Morpho: 20% (target: 40%) → Under-allocated
Lido:   30% (target: 30%) → Balanced`}
                </pre>
              </div>

              <div>
                <h4 className="font-bold mb-2">2. Withdraw from Over-Allocated</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Pull capital from strategies that exceed their target allocation.
                </p>
                <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`// Withdraw 20% from Aave (50% → 30%)
vault.reduceStrategyDebt(aaveStrategy, excessAmount);`}
                </pre>
              </div>

              <div>
                <h4 className="font-bold mb-2">3. Deploy to Under-Allocated</h4>
                <p className="text-sm text-foreground/80 mb-3">
                  Allocate freed capital to strategies below their target.
                </p>
                <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`// Add 20% to Morpho (20% → 40%)
vault.updateStrategyDebt(morphoStrategy);`}
                </pre>
              </div>
            </div>
          </Card>

          <Alert className="mt-6 bg-accent/10 border-accent/20">
            <BarChart3 className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Automated Rebalancing:</strong> Use keeper bots to monitor debt ratios and trigger rebalancing when thresholds are exceeded. This maintains optimal allocation without manual intervention.
            </AlertDescription>
          </Alert>
        </div>

        {/* Adding/Removing Strategies */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Adding & Removing Strategies</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Adding a New Strategy</h3>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`function addStrategy(
    address strategy,
    uint256 debtRatio,
    uint256 minDebtPerHarvest,
    uint256 maxDebtPerHarvest,
    uint256 performanceFee
) external onlyGovernance {
    require(strategy != address(0), "Invalid address");
    require(debtRatio <= 10000, "Invalid ratio");
    require(
        totalDebtRatio + debtRatio <= 10000,
        "Exceeds 100%"
    );
    
    strategies[strategy] = StrategyParams({
        debtRatio: debtRatio,
        minDebtPerHarvest: minDebtPerHarvest,
        maxDebtPerHarvest: maxDebtPerHarvest,
        performanceFee: performanceFee,
        activation: block.timestamp,
        lastReport: block.timestamp
    });
    
    totalDebtRatio += debtRatio;
    emit StrategyAdded(strategy, debtRatio);
}`}
              </pre>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-4">Removing a Strategy</h3>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`function revokeStrategy(address strategy) 
    external 
    onlyGovernance 
{
    StrategyParams storage params = strategies[strategy];
    
    // Set debt ratio to 0
    totalDebtRatio -= params.debtRatio;
    params.debtRatio = 0;
    
    // Withdraw all funds
    uint256 debt = strategyDebt[strategy];
    if (debt > 0) {
        IStrategy(strategy).withdraw(debt);
        strategyDebt[strategy] = 0;
    }
    
    emit StrategyRevoked(strategy);
}`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Risk Management */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Risk Management</h2>
          
          <Alert className="mb-6 bg-red-500/10 border-red-500/20">
            <AlertTriangle className="h-4 w-4 text-red-500" />
            <AlertDescription className="text-foreground/90">
              <strong>Emergency Shutdown:</strong> Multi-Strategy Vaults include emergency shutdown mechanisms to protect capital in case of critical vulnerabilities or market events.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">1. Diversification Limits</h3>
              <p className="text-sm text-foreground/80">
                Never allocate more than 40% of vault assets to a single strategy. Spread risk across at least 3-5 different protocols.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">2. Health Checks</h3>
              <p className="text-sm text-foreground/80">
                Implement health checks that validate strategy performance before finalizing reports. Reject reports that show unexpected losses.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">3. Gradual Allocation</h3>
              <p className="text-sm text-foreground/80">
                When adding new strategies, start with small allocations (5-10%) and increase gradually after observing performance.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">4. Emergency Withdrawal</h3>
              <p className="text-sm text-foreground/80">
                Ensure all strategies implement emergency withdrawal functions that can quickly return capital to the vault.
              </p>
            </Card>
          </div>
        </div>

        {/* Example Configuration */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Example: Balanced Treasury Configuration</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Here's a real-world example of a diversified Multi-Strategy Vault configuration for a DAO treasury:
          </p>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Configuration</h3>
            <div className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4 bg-primary/5 border-primary/20">
                  <h4 className="font-bold text-primary mb-2">Aave USDC</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Debt Ratio:</span>
                      <span className="font-mono">30%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Perf Fee:</span>
                      <span className="font-mono">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Risk:</span>
                      <Badge variant="outline" className="text-xs">Low</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-accent/5 border-accent/20">
                  <h4 className="font-bold text-accent mb-2">Morpho USDC</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Debt Ratio:</span>
                      <span className="font-mono">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Perf Fee:</span>
                      <span className="font-mono">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Risk:</span>
                      <Badge variant="outline" className="text-xs">Low</Badge>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-primary/5 border-primary/20">
                  <h4 className="font-bold text-primary mb-2">Lido stETH</h4>
                  <div className="text-sm space-y-1">
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Debt Ratio:</span>
                      <span className="font-mono">25%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Perf Fee:</span>
                      <span className="font-mono">5%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-foreground/70">Risk:</span>
                      <Badge variant="outline" className="text-xs">Medium</Badge>
                    </div>
                  </div>
                </Card>
              </div>

              <div className="pt-4 border-t border-border/40">
                <div className="flex justify-between items-center">
                  <span className="font-bold">Total Allocated:</span>
                  <span className="text-2xl font-bold text-primary">80%</span>
                </div>
                <p className="text-sm text-foreground/70 mt-2">
                  20% kept as buffer for withdrawals and rebalancing
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          
          <Alert className="mb-4 bg-accent/10 border-accent/20">
            <Lightbulb className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Start Conservative:</strong> Begin with lower debt ratios and proven strategies. Increase allocation gradually as confidence grows.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">1. Maintain Liquidity Buffer</h3>
              <p className="text-sm text-foreground/80">
                Keep 10-20% of vault assets unallocated to handle withdrawals without forcing strategy exits.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">2. Monitor Strategy Health</h3>
              <p className="text-sm text-foreground/80">
                Set up automated monitoring for strategy performance, protocol TVL changes, and unusual activity.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">3. Regular Rebalancing</h3>
              <p className="text-sm text-foreground/80">
                Rebalance weekly or when debt ratios drift more than 5% from targets.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">4. Document Strategy Selection</h3>
              <p className="text-sm text-foreground/80">
                Maintain clear documentation of why each strategy was selected, its risk profile, and performance expectations.
              </p>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/multi-strategy">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Multi-Strategy Setup Tutorial →
                </h3>
                <p className="text-foreground/70">
                  Build a complete multi-strategy vault with rebalancing logic
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Set up your development environment and explore examples
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
