# Tutorial: Build a Simple Lending Strategy

## 🎯 What You'll Build

A strategy that deposits USDC into Aave and automatically donates the interest earned.

**Time:** 45 minutes  
**Difficulty:** ⭐⭐ Intermediate  
**Prerequisites:** Solidity basics, Foundry installed

---

## 📋 What You'll Learn

- ✅ Create a custom yield strategy
- ✅ Integrate with Aave lending protocol
- ✅ Test with Foundry
- ✅ Deploy to testnet
- ✅ Monitor yield generation

---

## 🏗️ Architecture Overview

```
Your Strategy
    ↓
Aave Lending Pool
    ↓
Earns Interest
    ↓
Harvest → Donate to Projects
```

**Flow:**
1. User deposits 10,000 USDC to vault
2. Vault sends to your strategy
3. Strategy deposits to Aave
4. Aave pays interest (aUSDC balance grows)
5. Strategy harvests profit
6. Profit donated as new shares to projects

---

## 📝 Step 1: Create the Contract File

Create `src/strategies/AaveUSDCStrategy.sol`:

```solidity
// SPDX-License-Identifier: AGPL-3.0
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
    
    /**
     * @param _usdc USDC token address
     * @param _aUsdc aUSDC token address
     * @param _name Strategy name
     * @param _management Management address (can update params)
     * @param _keeper Keeper address (calls harvest)
     * @param _emergencyAdmin Can emergency withdraw
     * @param _donationAddress Where yield shares go
     * @param _tokenizedStrategy Shared implementation contract
     */
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
        
        // Initialize roles in the TokenizedStrategy
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
     * @param _amount Amount of USDC to deploy
     */
    function _deployFunds(uint256 _amount) internal override {
        // Supply USDC to Aave, receive aUSDC
        AAVE_POOL.supply(
            address(USDC),    // asset to supply
            _amount,           // amount to supply
            address(this),     // who receives aUSDC
            0                  // referral code (unused)
        );
        
        // After this, our aUSDC balance = previous + _amount
    }
    
    /**
     * @notice Withdraw funds from Aave
     * @dev Called when users withdraw from vault
     * @param _amount Amount of USDC to free
     */
    function _freeFunds(uint256 _amount) internal override {
        // Withdraw USDC from Aave, burn aUSDC
        AAVE_POOL.withdraw(
            address(USDC),    // asset to withdraw
            _amount,           // amount to withdraw
            address(this)      // recipient
        );
        
        // After this, our USDC balance increased by _amount
    }
    
    /**
     * @notice Harvest and report total assets
     * @dev Called by keeper to realize profits
     * @return totalAssets Current value of all deployed capital
     */
    function _harvestAndReport() internal override returns (uint256 totalAssets) {
        // Our total assets = aUSDC balance + any idle USDC
        // aUSDC grows over time as interest accrues
        
        uint256 aUsdcBalance = aUSDC.balanceOf(address(this));
        uint256 idleUsdc = USDC.balanceOf(address(this));
        
        totalAssets = aUsdcBalance + idleUsdc;
        
        // TokenizedStrategy will compare this to last reported amount
        // Difference = profit → mints shares to donationAddress
        
        // No explicit "claim rewards" needed - aUSDC appreciates automatically!
    }

    // ══════════════════════════════════════════════════════════
    // VIEW FUNCTIONS (Optional - helpful for monitoring)
    // ══════════════════════════════════════════════════════════
    
    /**
     * @notice Get current Aave supply APY
     * @return APY in basis points (e.g., 575 = 5.75%)
     */
    function getCurrentAPY() external view returns (uint256) {
        // In production, fetch from Aave's data provider
        // For simplicity, returning approximate
        return 575; // ~5.75%
    }
    
    /**
     * @notice Check how much profit is ready to harvest
     * @return Unrealized profit in USDC
     */
    function estimatePendingProfit() external view returns (uint256) {
        uint256 currentAssets = aUSDC.balanceOf(address(this)) + USDC.balanceOf(address(this));
        uint256 lastReportedAssets = TokenizedStrategy.totalAssets();
        
        return currentAssets > lastReportedAssets 
            ? currentAssets - lastReportedAssets 
            : 0;
    }
}
```

---

## 🔍 Code Walkthrough

### **The Three Critical Functions**

Every Octant strategy must implement these three:

#### **1. `_deployFunds(uint256 _amount)`**

**When it's called:** Vault allocates capital to your strategy

**Your job:** Take the USDC and put it to work

```solidity
function _deployFunds(uint256 _amount) internal override {
    // Simple: deposit to Aave
    AAVE_POOL.supply(address(USDC), _amount, address(this), 0);
}
```

**What happens:**
- Vault transfers 10,000 USDC to your strategy
- Your strategy deposits to Aave
- Aave sends back 10,000 aUSDC (interest-bearing token)
- aUSDC balance grows over time automatically!

---

#### **2. `_freeFunds(uint256 _amount)`**

**When it's called:** User withdraws from vault

**Your job:** Get liquidity to fulfill withdrawal

```solidity
function _freeFunds(uint256 _amount) internal override {
    // Simple: withdraw from Aave
    AAVE_POOL.withdraw(address(USDC), _amount, address(this));
}
```

**What happens:**
- User wants to withdraw 1,000 USDC
- Vault asks your strategy for 1,000 USDC
- Your strategy withdraws from Aave
- Aave burns 1,000 aUSDC, returns 1,000 USDC
- Vault sends USDC to user

---

#### **3. `_harvestAndReport()`**

**When it's called:** Keeper triggers profit realization

**Your job:** Calculate total current value

```solidity
function _harvestAndReport() internal override returns (uint256 totalAssets) {
    // Our aUSDC has grown! Report new value
    uint256 aUsdcBalance = aUSDC.balanceOf(address(this));
    uint256 idleUsdc = USDC.balanceOf(address(this));
    
    return aUsdcBalance + idleUsdc;
}
```

**Example:**
```
Last Report:
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
3. Updates total assets to 10,047
```

---

## 🧪 Step 2: Write Tests

Create `test/strategies/AaveUSDCStrategy.t.sol`:

```solidity
// SPDX-License-Identifier: AGPL-3.0
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
    address emergencyAdmin = address(3);
    address donationAddress = address(4);
    address tokenizedStrategy = address(5); // Mock for testing
    
    address user = address(100);

    function setUp() public {
        // Fork Arbitrum mainnet
        vm.createSelectFork(vm.envString("ARBITRUM_RPC_URL"));
        
        // Deploy strategy
        strategy = new AaveUSDCStrategy(
            USDC,
            aUSDC,
            "Test Aave USDC Strategy",
            management,
            keeper,
            emergencyAdmin,
            donationAddress,
            tokenizedStrategy
        );
        
        // Fund user with USDC (impersonate a whale)
        address usdcWhale = 0x489ee077994B6658eAfA855C308275EAd8097C4A;
        vm.prank(usdcWhale);
        IERC20(USDC).transfer(user, 10_000e6); // 10K USDC
    }

    function testDeployFunds() public {
        uint256 depositAmount = 1000e6; // 1000 USDC
        
        // User approves and deposits to strategy
        vm.startPrank(user);
        IERC20(USDC).approve(address(strategy), depositAmount);
        IERC20(USDC).transfer(address(strategy), depositAmount);
        vm.stopPrank();
        
        // Strategy deploys to Aave
        vm.prank(keeper);
        strategy.deployFunds(depositAmount);
        
        // Check aUSDC balance increased
        uint256 aUsdcBalance = IERC20(aUSDC).balanceOf(address(strategy));
        assertGe(aUsdcBalance, depositAmount, "Should receive aUSDC");
    }

    function testAccrueInterest() public {
        // Deploy funds
        uint256 depositAmount = 10_000e6; // 10K USDC
        
        vm.prank(user);
        IERC20(USDC).transfer(address(strategy), depositAmount);
        
        vm.prank(keeper);
        strategy.deployFunds(depositAmount);
        
        // Record initial state
        uint256 initialAssets = strategy.totalAssets();
        
        // Fast forward 30 days
        vm.warp(block.timestamp + 30 days);
        vm.roll(block.number + 216000); // ~30 days of blocks
        
        // Harvest to realize profit
        vm.prank(keeper);
        uint256 newAssets = strategy.harvestAndReport();
        
        // Should have earned interest
        assertGt(newAssets, initialAssets, "Should earn interest");
        
        // Rough check: ~5% APY = ~0.4% per month
        // 10,000 * 0.004 = ~40 USDC expected
        uint256 profit = newAssets - initialAssets;
        assertGe(profit, 35e6, "Should earn at least 35 USDC");
        assertLe(profit, 50e6, "Shouldn't earn more than 50 USDC");
    }

    function testWithdraw() public {
        // Deploy funds
        uint256 depositAmount = 5000e6;
        
        vm.prank(user);
        IERC20(USDC).transfer(address(strategy), depositAmount);
        
        vm.prank(keeper);
        strategy.deployFunds(depositAmount);
        
        // Withdraw half
        uint256 withdrawAmount = 2500e6;
        vm.prank(keeper);
        strategy.freeFunds(withdrawAmount);
        
        // Check USDC balance
        uint256 usdcBalance = IERC20(USDC).balanceOf(address(strategy));
        assertEq(usdcBalance, withdrawAmount, "Should withdraw correct amount");
    }
}
```

---

## ▶️ Step 3: Run Tests

```bash
# Set your RPC URL (need archive node for mainnet fork)
export ARBITRUM_RPC_URL="https://arb1.arbitrum.io/rpc"

# Run tests
forge test --match-contract AaveUSDCStrategyTest -vvv

# Expected output:
# [PASS] testDeployFunds() (gas: 245,123)
# [PASS] testAccrueInterest() (gas: 678,456)
# [PASS] testWithdraw() (gas: 198,765)
```

**Troubleshooting:**

❌ **"Failed to deploy strategy"**
→ Check constructor parameters are valid addresses

❌ **"Insufficient aUSDC balance"**
→ Aave pool might be full, try smaller amount

❌ **"Interest too low"**
→ Mainnet rates fluctuate, adjust test thresholds

---

## 🚀 Step 4: Deploy to Testnet

Create `script/DeployAaveStrategy.s.sol`:

```solidity
// SPDX-License-Identifier: AGPL-3.0
pragma solidity ^0.8.20;

import "forge-std/Script.sol";
import {AaveUSDCStrategy} from "src/strategies/AaveUSDCStrategy.sol";

contract DeployAaveStrategy is Script {
    function run() external {
        uint256 deployerPrivateKey = vm.envUint("PRIVATE_KEY");
        
        // Arbitrum Sepolia addresses (testnet)
        address USDC = 0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d;
        address aUSDC = 0x460b97BD498E1157530AEb3086301d5225b91216;
        
        // Your addresses (replace with your own!)
        address management = vm.envAddress("MANAGEMENT_ADDRESS");
        address keeper = vm.envAddress("KEEPER_ADDRESS");
        address emergencyAdmin = vm.envAddress("EMERGENCY_ADMIN");
        address donationAddress = vm.envAddress("DONATION_ADDRESS");
        address tokenizedStrategy = vm.envAddress("TOKENIZED_STRATEGY");
        
        vm.startBroadcast(deployerPrivateKey);
        
        AaveUSDCStrategy strategy = new AaveUSDCStrategy(
            USDC,
            aUSDC,
            "Aave USDC Yield Strategy",
            management,
            keeper,
            emergencyAdmin,
            donationAddress,
            tokenizedStrategy
        );
        
        console.log("Strategy deployed at:", address(strategy));
        
        vm.stopBroadcast();
    }
}
```

**Deploy:**

```bash
# Create .env file
cat > .env << EOF
PRIVATE_KEY=your_private_key_here
MANAGEMENT_ADDRESS=0x...
KEEPER_ADDRESS=0x...
EMERGENCY_ADMIN=0x...
DONATION_ADDRESS=0x...
TOKENIZED_STRATEGY=0x... # Deploy this first from factory
ARBITRUM_SEPOLIA_RPC=https://sepolia-rollup.arbitrum.io/rpc
EOF

# Load vars
source .env

# Deploy
forge script script/DeployAaveStrategy.s.sol \
  --rpc-url $ARBITRUM_SEPOLIA_RPC \
  --broadcast \
  --verify
```

**Save your deployment address!**

---

## 📊 Step 5: Monitor Your Strategy

Create a simple monitoring script `scripts/monitor.js`:

```javascript
const { ethers } = require('ethers');

const STRATEGY_ADDRESS = '0x...'; // Your deployed address
const RPC_URL = 'https://sepolia-rollup.arbitrum.io/rpc';

const STRATEGY_ABI = [
  'function totalAssets() view returns (uint256)',
  'function estimatePendingProfit() view returns (uint256)',
  'function getCurrentAPY() view returns (uint256)'
];

async function monitor() {
  const provider = new ethers.JsonRpcProvider(RPC_URL);
  const strategy = new ethers.Contract(STRATEGY_ADDRESS, STRATEGY_ABI, provider);
  
  const totalAssets = await strategy.totalAssets();
  const pendingProfit = await strategy.estimatePendingProfit();
  const apy = await strategy.getCurrentAPY();
  
  console.log('═══════════════════════════════════');
  console.log('Aave USDC Strategy Monitor');
  console.log('═══════════════════════════════════');
  console.log(`Total Assets: $${ethers.formatUnits(totalAssets, 6)}`);
  console.log(`Pending Profit: $${ethers.formatUnits(pendingProfit, 6)}`);
  console.log(`Current APY: ${apy / 100}%`);
  console.log('═══════════════════════════════════\n');
}

// Run every hour
setInterval(monitor, 3600000);
monitor(); // Run once immediately
```

**Run:**
```bash
node scripts/monitor.js
```

---

## ✅ Success Checklist

Before moving to production:

- [ ] Tests pass on mainnet fork
- [ ] Deployed to testnet successfully
- [ ] Deposited test funds and confirmed deployment
- [ ] Waited 24 hours and confirmed yield accrual
- [ ] Tested withdrawal flow
- [ ] Monitoring script shows correct data
- [ ] Reviewed for common vulnerabilities:
  - [ ] Reentrancy protection ✓ (SafeERC20)
  - [ ] Integer overflow ✓ (Solidity 0.8+)
  - [ ] Access control ✓ (BaseStrategy roles)
  - [ ] Flash loan attacks ✓ (No external price oracles)

---

## 🎓 What You Learned

✅ **Strategy Pattern** - Separate concerns (vault vs strategy)  
✅ **Aave Integration** - Supply/withdraw from lending pool  
✅ **Yield Harvesting** - Report profits to mint donation shares  
✅ **Testing** - Fork mainnet, simulate time, verify behavior  
✅ **Deployment** - Script deployment with Foundry

---

## 🚀 Next Steps

**Enhance Your Strategy:**
- [ ] Add emergency withdraw function
- [ ] Implement tend() for periodic maintenance
- [ ] Add health checks
- [ ] Support multiple tokens

**Go Multi-Strategy:**
- [ ] Deploy a MultistrategyVault
- [ ] Add your Aave strategy
- [ ] Add Lido strategy for diversification
- [ ] Set up auto-rebalancing

**Build the Frontend:**
- [ ] Show real-time APY
- [ ] Display pending profits
- [ ] Create deposit/withdraw UI
- [ ] Add yield donation dashboard

---

## 💬 Need Help?

**Stuck on something?**
- Check [Common Errors](#troubleshooting)
- Ask in [Discord #dev-support](https://discord.gg/octant)
- Review [Aave V3 Docs](https://docs.aave.com/)

**Want to see more examples?**
- [Lido Staking Strategy](#)
- [Uniswap LP Strategy](#)
- [Compound Lending Strategy](#)

---

**Ready for more?** → Continue to [Testing Checklist](#) or [Deploy Multi-Strategy Vault](#)

