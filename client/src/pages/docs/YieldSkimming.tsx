import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, TrendingUp, Shield, Zap, Activity } from "lucide-react";
import { Link } from "wouter";

export default function YieldSkimming() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            Developer Path
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Yield Skimming Strategies (YSS)
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deploy yield-bearing tokens and capture their exchange rate appreciation to generate sustainable ecosystem funding.
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            **Yield Skimming Strategies** hold yield-bearing tokens (like stETH, rETH, or aUSDC) directly and donate their exchange-rate appreciation. Unlike Yield Donating Strategies that deploy base tokens, YSS strategies simply hold rebasing or appreciating tokens and "skim" the yield as it accrues.
          </p>

          <Card className="p-6 bg-gradient-to-br from-accent/10 via-primary/5 to-accent/10 border-accent/20">
            <h3 className="text-xl font-bold mb-4">Key Characteristics</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Yield-Bearing Input</h4>
                  <p className="text-sm text-foreground/80">Accepts tokens that appreciate over time (stETH, rETH, wstETH)</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Shield className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Dragon Buffer</h4>
                  <p className="text-sm text-foreground/80">Handles temporary value decreases without burning shares</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Zap className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Passive Yield</h4>
                  <p className="text-sm text-foreground/80">No active deployment—yield accrues automatically</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Activity className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Exchange Rate Tracking</h4>
                  <p className="text-sm text-foreground/80">Monitors token appreciation relative to base asset</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* How It Works */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">1. Token Holding</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                The vault receives deposits of yield-bearing tokens (e.g., stETH) and holds them directly. No active deployment to other protocols is needed—the tokens appreciate automatically.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Example: stETH Strategy
function _deployFunds(uint256 _amount) internal override {
    // No deployment needed - stETH appreciates automatically
    // Just hold the tokens in the strategy
}`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-3">2. Exchange Rate Appreciation</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                As the underlying protocol generates yield, the exchange rate of the yield-bearing token increases. For example, 1 stETH becomes worth more ETH over time due to staking rewards.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Track exchange rate appreciation
function _harvestAndReport() internal override returns (uint256) {
    // Get current token balance
    uint256 currentBalance = yieldToken.balanceOf(address(this));
    
    // Get current exchange rate (e.g., stETH to ETH)
    uint256 currentRate = getExchangeRate();
    
    // Calculate value in base asset
    uint256 currentValue = (currentBalance * currentRate) / 1e18;
    
    // Profit = current value - initial value
    uint256 profit = currentValue > totalDeployed 
        ? currentValue - totalDeployed 
        : 0;
    
    return profit;
}`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-xl font-bold mb-3">3. Dragon Buffer Mechanism</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                The **dragon buffer** is a key innovation that handles temporary value decreases without burning shares. It prevents unnecessary share burning during normal market fluctuations or temporary slashing events.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// Dragon buffer prevents premature share burning
uint256 public dragonBuffer;  // Accumulated losses
uint256 public constant BUFFER_THRESHOLD = 100e18;  // 100 tokens

function _processReport(uint256 currentValue) internal {
    if (currentValue < totalDeployed) {
        // Temporary loss - add to buffer instead of burning
        uint256 loss = totalDeployed - currentValue;
        dragonBuffer += loss;
        
        // Only burn if buffer exceeds threshold
        if (dragonBuffer > BUFFER_THRESHOLD) {
            uint256 toBurn = dragonBuffer;
            dragonBuffer = 0;
            _burnShares(toBurn);
        }
    } else {
        // Profit - first pay down buffer, then mint
        uint256 profit = currentValue - totalDeployed;
        
        if (dragonBuffer > 0) {
            uint256 bufferPayment = min(profit, dragonBuffer);
            dragonBuffer -= bufferPayment;
            profit -= bufferPayment;
        }
        
        if (profit > 0) {
            _mintShares(profit);
        }
    }
}`}
              </pre>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-xl font-bold mb-3">4. Yield Distribution</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                When appreciation exceeds the dragon buffer, new shares are minted to the donation address. The buffer ensures only sustained gains are distributed, not temporary fluctuations.
              </p>
            </Card>
          </div>
        </div>

        {/* Dragon Buffer Deep Dive */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Dragon Buffer: Deep Dive</h2>
          
          <Alert className="mb-6 bg-accent/10 border-accent/20">
            <Shield className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Why Dragon Buffer?</strong> Yield-bearing tokens can experience temporary value decreases due to market volatility, slashing events, or exchange rate fluctuations. The dragon buffer absorbs these temporary losses, preventing unnecessary share burning and maintaining stability.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Scenario 1: Temporary Loss</h3>
              <p className="text-sm text-foreground/80 mb-3">
                stETH value drops 2% due to market volatility. Instead of burning shares, the loss is added to the dragon buffer. When value recovers, the buffer is paid down before minting new shares.
              </p>
              <pre className="text-xs font-mono bg-muted/50 p-3 rounded-md">
{`Day 1: 100 stETH worth 100 ETH → Buffer: 0
Day 2: 100 stETH worth 98 ETH  → Buffer: 2 ETH (loss absorbed)
Day 3: 100 stETH worth 102 ETH → Buffer: 0 (paid down), Mint: 2 ETH shares`}
              </pre>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Scenario 2: Sustained Loss</h3>
              <p className="text-sm text-foreground/80 mb-3">
                If losses accumulate beyond the buffer threshold (e.g., 100 ETH), shares are burned from the donation address to maintain the 1:1 ratio for depositors.
              </p>
              <pre className="text-xs font-mono bg-muted/50 p-3 rounded-md">
{`Buffer accumulates: 50 ETH → 75 ETH → 105 ETH
Threshold exceeded → Burn 105 ETH worth of shares
Buffer reset to 0`}
              </pre>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2">Scenario 3: Continuous Growth</h3>
              <p className="text-sm text-foreground/80 mb-3">
                stETH appreciates steadily. After paying down any buffer, excess profit is minted as new shares to the donation address.
              </p>
              <pre className="text-xs font-mono bg-muted/50 p-3 rounded-md">
{`Week 1: +2 ETH → Buffer: 0, Mint: 2 ETH shares
Week 2: +3 ETH → Buffer: 0, Mint: 3 ETH shares
Week 3: +2.5 ETH → Buffer: 0, Mint: 2.5 ETH shares`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Example Strategy */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Example: Lido stETH Strategy</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Here's a complete example of a Yield Skimming Strategy for Lido's stETH:
          </p>

          <Card className="p-6">
            <pre className="text-sm font-mono bg-muted/50 p-4 rounded-md overflow-x-auto">
{`// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.18;

import {BaseStrategy} from "./BaseStrategy.sol";
import {IStETH} from "./interfaces/IStETH.sol";

contract LidoStEthStrategy is BaseStrategy {
    IStETH public immutable stETH;
    uint256 public dragonBuffer;
    uint256 public constant BUFFER_THRESHOLD = 100 ether;
    
    constructor(
        address _stETH,
        string memory _name
    ) BaseStrategy(_stETH, _name) {
        stETH = IStETH(_stETH);
    }
    
    // No deployment needed - just hold stETH
    function _deployFunds(uint256 _amount) internal override {
        // stETH appreciates automatically through rebasing
    }
    
    // No withdrawal needed - stETH is already liquid
    function _freeFunds(uint256 _amount) internal override {
        // Funds are already free
    }
    
    // Calculate profit based on exchange rate appreciation
    function _harvestAndReport() 
        internal 
        override 
        returns (uint256 _totalAssets) 
    {
        uint256 stEthBalance = stETH.balanceOf(address(this));
        
        // Get current ETH value of stETH
        uint256 ethValue = stETH.getPooledEthByShares(
            stETH.sharesOf(address(this))
        );
        
        _totalAssets = ethValue;
        
        // Handle dragon buffer logic
        if (_totalAssets < totalDeployed) {
            uint256 loss = totalDeployed - _totalAssets;
            dragonBuffer += loss;
            
            if (dragonBuffer > BUFFER_THRESHOLD) {
                // Significant sustained loss - burn shares
                emit DragonBufferExceeded(dragonBuffer);
                dragonBuffer = 0;
            }
        } else {
            uint256 profit = _totalAssets - totalDeployed;
            
            // Pay down buffer first
            if (dragonBuffer > 0) {
                uint256 bufferPayment = profit < dragonBuffer 
                    ? profit 
                    : dragonBuffer;
                dragonBuffer -= bufferPayment;
                profit -= bufferPayment;
            }
            
            // Remaining profit is available for distribution
            _totalAssets = totalDeployed + profit;
        }
    }
    
    event DragonBufferExceeded(uint256 amount);
}`}
            </pre>
          </Card>
        </div>

        {/* Supported Tokens */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Supported Yield-Bearing Tokens</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-accent">Liquid Staking Tokens</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Tokens representing staked ETH that earn staking rewards
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>stETH (Lido)</span>
                  <Badge variant="outline">Rebasing</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>wstETH (Wrapped stETH)</span>
                  <Badge variant="outline">Non-rebasing</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>rETH (Rocket Pool)</span>
                  <Badge variant="outline">Non-rebasing</Badge>
                </div>
              </div>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold text-lg mb-2 text-primary">Lending Tokens</h3>
              <p className="text-sm text-foreground/80 mb-3">
                Interest-bearing tokens from lending protocols
              </p>
              <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                  <span>aUSDC (Aave)</span>
                  <Badge variant="outline">Rebasing</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>cUSDC (Compound)</span>
                  <Badge variant="outline">Non-rebasing</Badge>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>maUSDC (Morpho)</span>
                  <Badge variant="outline">Non-rebasing</Badge>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          
          <Alert className="mb-4 bg-accent/10 border-accent/20">
            <Lightbulb className="h-4 w-4 text-accent" />
            <AlertDescription>
              <strong>Buffer Configuration:</strong> Set buffer thresholds based on token volatility and expected slashing risk. Higher volatility = larger buffer.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">1. Choose Appropriate Buffer Size</h3>
              <p className="text-sm text-foreground/80">
                For stETH: 50-100 ETH buffer handles normal volatility. For more volatile tokens, increase accordingly.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">2. Monitor Exchange Rates</h3>
              <p className="text-sm text-foreground/80">
                Track exchange rate oracles and set up alerts for significant deviations or slashing events.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">3. Handle Rebasing vs Non-Rebasing</h3>
              <p className="text-sm text-foreground/80">
                Rebasing tokens (stETH, aUSDC) change balance automatically. Non-rebasing (wstETH, rETH) change exchange rate. Implement accordingly.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">4. Test Buffer Logic</h3>
              <p className="text-sm text-foreground/80">
                Thoroughly test buffer accumulation, paydown, and threshold scenarios before mainnet deployment.
              </p>
            </Card>
          </div>
        </div>

        {/* YDS vs YSS Comparison */}
        <div>
          <h2 className="text-3xl font-bold mb-6">YDS vs YSS: When to Use Each</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 border-primary/30">
              <h3 className="text-xl font-bold mb-3 text-primary">Use YDS When:</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• You have base tokens (USDC, DAI, USDT)</li>
                <li>• You want active yield generation</li>
                <li>• You need flexibility in protocol choice</li>
                <li>• You want to implement custom strategies</li>
              </ul>
            </Card>

            <Card className="p-6 border-accent/30">
              <h3 className="text-xl font-bold mb-3 text-accent">Use YSS When:</h3>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li>• You already hold yield-bearing tokens</li>
                <li>• You want passive yield accrual</li>
                <li>• You need buffer protection from volatility</li>
                <li>• You prefer simpler implementation</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/lido-integration">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Lido Integration Tutorial →
                </h3>
                <p className="text-foreground/70">
                  Build a complete YSS strategy for Lido's stETH with dragon buffer
                </p>
              </Card>
            </Link>

            <Link href="/docs/yield-donating">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Yield Donating Strategies →
                </h3>
                <p className="text-foreground/70">
                  Compare with YDS approach for base token deployment
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
