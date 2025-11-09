import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, CheckCircle2, AlertTriangle, Code2, Play, TestTube } from "lucide-react";
import { Link } from "wouter";
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';
import { CodeBlock } from '@/components/CodeBlock';

export default function AaveIntegrationEnhanced() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-blue-500/10 text-blue-400 border-blue-500/20">
            Intermediate Tutorial
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Build a Simple Lending Strategy
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed mt-4">
            Create a strategy that deposits USDC into Aave V3 and automatically donates the interest earned.
          </p>
          
          {/* Meta Info */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">⏱️ Time:</span>
              <span className="text-sm font-medium">45 minutes</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">📊 Difficulty:</span>
              <span className="text-sm font-medium">⭐⭐ Intermediate</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-muted-foreground">🛠️ Prerequisites:</span>
              <span className="text-sm font-medium">Solidity basics, Foundry installed</span>
            </div>
          </div>
        </div>

        {/* What You'll Learn */}
        <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/20">
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <CheckCircle2 className="h-6 w-6 text-green-400" />
            What You'll Learn
          </h2>
          <ul className="space-y-2">
            {[
              "Create a custom yield strategy",
              "Integrate with Aave lending protocol",
              "Test with Foundry",
              "Deploy to testnet",
              "Monitor yield generation"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <CheckCircle2 className="h-5 w-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Architecture Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Architecture Overview</h2>
          <Card className="p-6 bg-card border-border/50">
            <pre className="text-sm text-muted-foreground font-mono mb-6">
{`Your Strategy
    ↓
Aave Lending Pool
    ↓
Earns Interest
    ↓
Harvest → Donate to Projects`}
            </pre>
            
            <div className="space-y-3">
              <h3 className="font-bold text-lg mb-3">Flow:</h3>
              {[
                "User deposits 10,000 USDC to vault",
                "Vault sends to your strategy",
                "Strategy deposits to Aave",
                "Aave pays interest (aUSDC balance grows)",
                "Strategy harvests profit",
                "Profit donated as new shares to projects"
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Badge className="bg-blue-500/20 text-blue-400 border-blue-500/30 flex-shrink-0">
                    {i + 1}
                  </Badge>
                  <span className="text-muted-foreground">{step}</span>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Step 1: Create the Contract */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-500/30">
              Step 1
            </Badge>
            <h2 className="text-3xl font-bold">Create the Contract File</h2>
          </div>
          
          <p className="text-muted-foreground mb-6">
            Create <code className="px-2 py-1 bg-muted rounded">src/strategies/AaveUSDCStrategy.sol</code>:
          </p>

          <CodeBlock
            filename="src/strategies/AaveUSDCStrategy.sol"
            language="solidity"
            code={`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import {BaseStrategy} from "@octant/core/BaseStrategy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

// Aave V3 interfaces
interface IPool {
    function supply(address asset, uint256 amount, address onBehalfOf, uint16 referralCode) external;
    function withdraw(address asset, uint256 amount, address to) external returns (uint256);
}

/**
 * @title Aave USDC Lending Strategy
 * @notice Deposits USDC into Aave V3, donates interest earned
 * @dev Implements YieldDonating pattern - mints shares on harvest
 */
contract AaveUSDCStrategy is BaseStrategy {
    using SafeERC20 for IERC20;

    // ══════════════════════════════════════════════════════════
    // IMMUTABLES & CONSTANTS
    // ══════════════════════════════════════════════════════════
    
    /// @notice Aave V3 Pool address (Arbitrum mainnet)
    IPool public constant AAVE_POOL = IPool(0x794a61358D6845594F94dc1DB02A252b5b4814aD);
    
    /// @notice Interest-bearing aUSDC token
    IERC20 public immutable aUSDC;
    
    /// @notice Underlying USDC token
    IERC20 public immutable USDC;

    // ══════════════════════════════════════════════════════════
    // CONSTRUCTOR
    // ══════════════════════════════════════════════════════════
    
    constructor(
        address _usdc,
        address _aUsdc,
        string memory _name,
        address _management,
        address _keeper,
        address _emergencyAdmin,
        address _donationAddress,
        address _tokenizedStrategy
    ) BaseStrategy(_usdc, _name, _tokenizedStrategy) {
        USDC = IERC20(_usdc);
        aUSDC = IERC20(_aUsdc);
        
        _initializeStrategy(_management, _keeper, _emergencyAdmin, _donationAddress);
        
        // Approve Aave pool to spend our USDC
        USDC.approve(address(AAVE_POOL), type(uint256).max);
    }

    // ══════════════════════════════════════════════════════════
    // REQUIRED OVERRIDES (Core Strategy Logic)
    // ══════════════════════════════════════════════════════════
    
    /**
     * @notice Deploy funds to Aave
     * @dev Called automatically when vault allocates capital
     */
    function _deployFunds(uint256 _amount) internal override {
        AAVE_POOL.supply(address(USDC), _amount, address(this), 0);
    }
    
    /**
     * @notice Withdraw funds from Aave
     * @dev Called when users withdraw from vault
     */
    function _freeFunds(uint256 _amount) internal override {
        AAVE_POOL.withdraw(address(USDC), _amount, address(this));
    }
    
    /**
     * @notice Harvest and report total assets
     * @dev Called by keeper to realize profits
     */
    function _harvestAndReport() internal override returns (uint256 totalAssets) {
        uint256 aUsdcBalance = aUSDC.balanceOf(address(this));
        uint256 idleUsdc = USDC.balanceOf(address(this));
        
        totalAssets = aUsdcBalance + idleUsdc;
    }
}`}
          />
        </div>

        {/* Code Walkthrough */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Code Walkthrough</h2>
          
          <Alert className="mb-6">
            <Lightbulb className="h-4 w-4" />
            <AlertDescription>
              <strong>The Three Critical Functions:</strong> Every Octant strategy must implement these three core functions.
            </AlertDescription>
          </Alert>

          <div className="space-y-8">
            {/* Function 1 */}
            <Card className="p-6 bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/20">
              <h3 className="text-xl font-bold mb-4">1. _deployFunds(uint256 _amount)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-1">When it's called:</p>
                  <p className="text-muted-foreground">Vault allocates capital to your strategy</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-blue-400 mb-1">Your job:</p>
                  <p className="text-muted-foreground">Take the USDC and put it to work</p>
                </div>

                <CodeBlock
                  language="solidity"
                  code={`function _deployFunds(uint256 _amount) internal override {
    // Simple: deposit to Aave
    AAVE_POOL.supply(address(USDC), _amount, address(this), 0);
}`}
                />

                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="font-semibold mb-2">What happens:</p>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Vault transfers 10,000 USDC to your strategy</li>
                    <li>• Your strategy deposits to Aave</li>
                    <li>• Aave sends back 10,000 aUSDC (interest-bearing token)</li>
                    <li>• aUSDC balance grows over time automatically!</li>
                  </ul>
                </div>
              </div>
            </Card>

            {/* Function 2 */}
            <Card className="p-6 bg-gradient-to-br from-green-900/20 to-blue-900/20 border-green-500/20">
              <h3 className="text-xl font-bold mb-4">2. _freeFunds(uint256 _amount)</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-green-400 mb-1">When it's called:</p>
                  <p className="text-muted-foreground">User withdraws from vault</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-green-400 mb-1">Your job:</p>
                  <p className="text-muted-foreground">Get liquidity to fulfill withdrawal</p>
                </div>

                <CodeBlock
                  language="solidity"
                  code={`function _freeFunds(uint256 _amount) internal override {
    // Simple: withdraw from Aave
    AAVE_POOL.withdraw(address(USDC), _amount, address(this));
}`}
                />
              </div>
            </Card>

            {/* Function 3 */}
            <Card className="p-6 bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/20">
              <h3 className="text-xl font-bold mb-4">3. _harvestAndReport()</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-purple-400 mb-1">When it's called:</p>
                  <p className="text-muted-foreground">Keeper triggers profit realization</p>
                </div>
                
                <div>
                  <p className="text-sm font-semibold text-purple-400 mb-1">Your job:</p>
                  <p className="text-muted-foreground">Calculate total current value</p>
                </div>

                <CodeBlock
                  language="solidity"
                  code={`function _harvestAndReport() internal override returns (uint256 totalAssets) {
    // Our aUSDC has grown! Report new value
    uint256 aUsdcBalance = aUSDC.balanceOf(address(this));
    uint256 idleUsdc = USDC.balanceOf(address(this));
    
    return aUsdcBalance + idleUsdc;
}`}
                />

                <div className="bg-muted/30 rounded-lg p-4">
                  <p className="font-semibold mb-2">Example:</p>
                  <pre className="text-xs font-mono text-muted-foreground">
{`Last Report:
- Deployed: 10,000 USDC
- Reported: 10,000 aUSDC

30 Days Later (harvest called):
- aUSDC balance: 10,047 (grew from interest!)
- Idle USDC: 0
- Total: 10,047

Profit = 10,047 - 10,000 = 47 USDC

TokenizedStrategy automatically:
1. Mints 47 shares
2. Sends to donationAddress
3. Updates total assets to 10,047`}
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Step 2: Tests */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              Step 2
            </Badge>
            <h2 className="text-3xl font-bold">Write Tests</h2>
          </div>

          <p className="text-muted-foreground mb-6">
            Create <code className="px-2 py-1 bg-muted rounded">test/strategies/AaveUSDCStrategy.t.sol</code>:
          </p>

          <CodeBlock
            filename="test/strategies/AaveUSDCStrategy.t.sol"
            language="solidity"
            code={`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import "forge-std/Test.sol";
import {AaveUSDCStrategy} from "src/strategies/AaveUSDCStrategy.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract AaveUSDCStrategyTest is Test {
    AaveUSDCStrategy public strategy;
    
    // Arbitrum mainnet addresses
    address constant USDC = 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8;
    address constant aUSDC = 0x625E7708f30cA75bfd92586e17077590C60eb4cD;
    
    address management = address(1);
    address keeper = address(2);
    address donationAddress = address(4);
    
    function setUp() public {
        // Fork Arbitrum mainnet
        vm.createSelectFork(vm.envString("ARBITRUM_RPC_URL"));
        
        strategy = new AaveUSDCStrategy(
            USDC, aUSDC, "Test Strategy",
            management, keeper, donationAddress
        );
    }

    function testAccrueInterest() public {
        uint256 depositAmount = 10_000e6; // 10K USDC
        
        // Deploy funds
        vm.prank(keeper);
        strategy.deployFunds(depositAmount);
        
        uint256 initialAssets = strategy.totalAssets();
        
        // Fast forward 30 days
        vm.warp(block.timestamp + 30 days);
        
        // Harvest to realize profit
        vm.prank(keeper);
        uint256 newAssets = strategy.harvestAndReport();
        
        // Should have earned interest (~5% APY = ~0.4% per month)
        assertGt(newAssets, initialAssets);
        
        uint256 profit = newAssets - initialAssets;
        assertGe(profit, 35e6); // At least 35 USDC
    }
}`}
          />
        </div>

        {/* Run Tests */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-orange-500/20 text-orange-400 border-orange-500/30">
              Step 3
            </Badge>
            <h2 className="text-3xl font-bold">Run Tests</h2>
          </div>

          <CodeBlock
            filename="terminal"
            language="bash"
            code={`# Set your RPC URL
export ARBITRUM_RPC_URL="https://arb1.arbitrum.io/rpc"

# Run tests
forge test --match-contract AaveUSDCStrategyTest -vv

# Run with gas report
forge test --match-contract AaveUSDCStrategyTest --gas-report`}
          />

          <Alert className="mt-6 bg-green-900/20 border-green-800">
            <CheckCircle2 className="h-4 w-4 text-green-400" />
            <AlertDescription className="text-green-200">
              <strong>Expected output:</strong> All tests pass. You should see interest accrual working correctly!
            </AlertDescription>
          </Alert>
        </div>

        {/* Deploy to Testnet */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <Badge className="bg-pink-500/20 text-pink-400 border-pink-500/30">
              Step 4
            </Badge>
            <h2 className="text-3xl font-bold">Deploy to Testnet</h2>
          </div>

          <CodeBlock
            filename="script/DeployAaveStrategy.s.sol"
            language="solidity"
            code={`// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {AaveUSDCStrategy} from "src/strategies/AaveUSDCStrategy.sol";

contract DeployAaveStrategy is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        // Arbitrum testnet addresses
        address USDC = 0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d;
        address aUSDC = 0x724dc807b04555b71ed48a6896b6F41593b8C637;
        
        vm.startBroadcast(deployerPrivateKey);
        
        AaveUSDCStrategy strategy = new AaveUSDCStrategy(
            USDC,
            aUSDC,
            "Aave USDC Lending Strategy",
            msg.sender,  // management
            msg.sender,  // keeper
            msg.sender,  // donationAddress
        );
        
        console.log("Strategy deployed at:", address(strategy));
        
        vm.stopBroadcast();
    }
}`}
          />

          <CodeBlock
            filename="terminal"
            language="bash"
            code={`# Deploy
forge script script/DeployAaveStrategy.s.sol:DeployAaveStrategy \\
  --rpc-url $ARBITRUM_TESTNET_RPC \\
  --broadcast \\
  --verify

# Save the deployed address!`}
          />
        </div>

        {/* Security Warning */}
        <Alert className="bg-red-900/20 border-red-800">
          <AlertTriangle className="h-4 w-4 text-red-400" />
          <AlertDescription className="text-red-200">
            <strong>Security Checklist Before Mainnet:</strong>
            <ul className="mt-2 space-y-1">
              <li>✓ Full audit by reputable firm</li>
              <li>✓ Start with small deposit limits</li>
              <li>✓ Test emergency withdrawal</li>
              <li>✓ Monitor for 30+ days on testnet</li>
              <li>✓ Set up automated monitoring alerts</li>
            </ul>
          </AlertDescription>
        </Alert>

        {/* Next Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-6">What's Next?</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/lido-integration">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group h-full">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Build a Lido Strategy
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to integrate with Lido's staked ETH for yield generation
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  View tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/visual-protocol-guide">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group h-full">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Visual Protocol Guide
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Understand the full system with 10 interactive diagrams
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  Explore diagrams
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </div>
      <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}

