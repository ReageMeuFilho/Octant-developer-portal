import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Code,
  Terminal,
  CheckCircle,
  Info,
  ArrowRight,
  FileCode
} from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function TutorialSimpleLending() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Build Your First Strategy
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Tutorial: Simple Lending Strategy
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Build a complete yield strategy that deploys USDC to Aave lending markets.
          </p>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            <strong>Time:</strong> 30 minutes | <strong>Difficulty:</strong> Intermediate | <strong>Prerequisites:</strong> Solidity basics, Foundry installed
          </AlertDescription>
        </Alert>

        <div>
          <h2 className="text-3xl font-bold mb-6">What You\'ll Build</h2>
          <Card className="p-6 bg-card border-border/50">
            <p className="text-foreground/90 mb-4">
              A production-ready yield strategy that:
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Accepts USDC deposits from a Funding Vault</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Deploys capital to Aave v3 lending pool</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Earns yield from lending interest</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Handles user withdrawals automatically</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>Reports accurate asset values for vault accounting</span>
              </li>
            </ul>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Step 1: Set Up Project</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm overflow-x-auto"><code>{`# Clone the Octant v2 core repository
git clone https://github.com/golemfoundation/octant-v2-core.git
cd octant-v2-core

# Install dependencies
forge install

# Create a new strategy file
touch src/strategies/AaveLendingStrategy.sol`}</code></pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Step 2: Implement the Strategy</h2>
          <Card className="p-6 bg-card border-border/50">
            <div className="flex items-start gap-3 mb-4">
              <FileCode className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="font-semibold mb-2">src/strategies/AaveLendingStrategy.sol</p>
                <p className="text-sm text-muted-foreground">Complete strategy implementation</p>
              </div>
            </div>
            <div className="bg-muted p-4 rounded-lg overflow-x-auto">
              <pre className="text-sm"><code>{`// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import {BaseStrategy} from "../base/BaseStrategy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {IPool} from "@aave/core-v3/contracts/interfaces/IPool.sol";

contract AaveLendingStrategy is BaseStrategy {
    using SafeERC20 for IERC20;

    IPool public immutable aavePool;
    IERC20 public immutable aToken;

    constructor(
        address _vault,
        address _asset,
        address _aavePool,
        address _aToken
    ) BaseStrategy(_vault, _asset) {
        aavePool = IPool(_aavePool);
        aToken = IERC20(_aToken);
    }

    /// @notice Deploy funds to Aave lending pool
    function _deployFunds(uint256 amount) internal override {
        // Approve Aave pool to spend our USDC
        asset.forceApprove(address(aavePool), amount);
        
        // Supply USDC to Aave, receive aTokens
        aavePool.supply(address(asset), amount, address(this), 0);
    }

    /// @notice Withdraw funds from Aave for user redemptions
    function _freeFunds(uint256 amount) internal override {
        // Withdraw USDC from Aave, burn aTokens
        aavePool.withdraw(address(asset), amount, address(this));
    }

    /// @notice Calculate total assets under management
    function _harvestAndReport() internal view override returns (uint256) {
        // aToken balance represents our total assets in Aave
        // (principal + accrued interest)
        return aToken.balanceOf(address(this));
    }

    /// @notice Emergency function to withdraw all funds
    function emergencyWithdraw() external onlyVault {
        uint256 balance = aToken.balanceOf(address(this));
        if (balance > 0) {
            aavePool.withdraw(address(asset), type(uint256).max, address(this));
        }
    }
}`}</code></pre>
            </div>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Step 3: Write Tests</h2>
          <div className="bg-muted p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm"><code>{`// test/AaveLendingStrategy.t.sol
pragma solidity ^0.8.20;

import {Test} from "forge-std/Test.sol";
import {AaveLendingStrategy} from "../src/strategies/AaveLendingStrategy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AaveLendingStrategyTest is Test {
    AaveLendingStrategy strategy;
    address constant USDC = 0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48;
    address constant AAVE_POOL = 0x87870Bca3F3fD6335C3F4ce8392D69350B4fA4E2;
    address constant AUSDC = 0x98C23E9d8f34FEFb1B7BD6a91B7FF122F4e16F5c;

    function setUp() public {
        // Fork mainnet for testing
        vm.createSelectFork("https://eth-mainnet.g.alchemy.com/v2/YOUR_KEY");
        
        strategy = new AaveLendingStrategy(
            address(this), // vault
            USDC,
            AAVE_POOL,
            AUSDC
        );
    }

    function testDeployFunds() public {
        // Get some USDC
        deal(USDC, address(strategy), 1000e6);
        
        // Deploy to Aave
        strategy.deployFunds(1000e6);
        
        // Check aToken balance
        assertGt(IERC20(AUSDC).balanceOf(address(strategy)), 0);
    }

    function testHarvestReportsAccurateValue() public {
        deal(USDC, address(strategy), 1000e6);
        strategy.deployFunds(1000e6);
        
        // Fast forward time to accrue interest
        vm.warp(block.timestamp + 365 days);
        
        uint256 totalAssets = strategy.harvestAndReport();
        
        // Should have earned interest
        assertGt(totalAssets, 1000e6);
    }
}`}</code></pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Step 4: Run Tests</h2>
          <div className="bg-muted p-4 rounded-lg">
            <pre className="text-sm"><code>{`# Run all tests
forge test

# Run with verbose output
forge test -vvv

# Run specific test
forge test --match-test testDeployFunds -vvv`}</code></pre>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Key Concepts Explained</h2>
          <div className="grid gap-4">
            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                _deployFunds()
              </h3>
              <p className="text-sm text-muted-foreground">
                Called when the vault wants to deploy capital. Approves Aave pool and supplies USDC. Receives aTokens in return.
              </p>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                _freeFunds()
              </h3>
              <p className="text-sm text-muted-foreground">
                Called when users withdraw. Withdraws USDC from Aave by burning aTokens.
              </p>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                _harvestAndReport()
              </h3>
              <p className="text-sm text-muted-foreground">
                Returns total asset value. aToken balance automatically includes accrued interest.
              </p>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Info className="h-4 w-4" />
          <AlertDescription>
            <strong>Next steps:</strong> Deploy your strategy to testnet following the <Link href="/docs/getting-started/deploy-production/deploy-on-testnet" className="text-primary hover:underline">Deploy on Testnet</Link> guide, or build a <Link href="/docs/getting-started/build-first-strategy/tutorial-staking-strategy" className="text-primary hover:underline">Staking Strategy</Link> for ETH.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/environment-setup/get-test-tokens">
            <Button variant="outline">← Get Test Tokens</Button>
          </Link>
          <Link href="/docs/getting-started/build-first-strategy/tutorial-staking-strategy">
            <Button className="gap-2">
              Tutorial: Staking Strategy
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
