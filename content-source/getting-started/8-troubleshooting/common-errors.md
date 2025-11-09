# Common Errors & Solutions

## 🔧 Quick Troubleshooting Guide

> **Tip:** Use Ctrl+F to search for your specific error message

---

## 📦 Environment Setup Errors

### ❌ `forge: command not found`

**Problem:** Foundry not installed or not in PATH

**Solution:**
```bash
# Install Foundry
curl -L https://foundry.paradigm.xyz | bash

# Restart terminal, then:
foundryup

# Verify installation
forge --version
```

---

### ❌ `node: command not found` or wrong version

**Problem:** Node.js not installed or outdated

**Solution:**
```bash
# Check current version
node --version

# Need v18+? Install via nvm:
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
nvm install 18
nvm use 18

# Verify
node --version  # Should show v18.x.x or higher
```

---

### ❌ `yarn: command not found`

**Problem:** Yarn not enabled

**Solution:**
```bash
# Enable corepack (built into Node 16+)
corepack enable

# Verify
yarn --version
```

---

## 🔗 Contract Compilation Errors

### ❌ `Error: Could not find solc version`

**Problem:** Solidity compiler version mismatch

**Solution:**
```bash
# Check your foundry.toml
cat foundry.toml

# Should have:
[profile.default]
solc_version = "0.8.20"

# Install specific version
foundryup -v 0.8.20

# Or update foundry.toml to match installed version
```

---

### ❌ `ParserError: Source not found`

**Problem:** Import path incorrect

**Solution:**
```solidity
// ❌ Wrong
import "@octant/BaseStrategy.sol";

// ✅ Correct
import {BaseStrategy} from "@octant/core/BaseStrategy.sol";

// Or check your remappings in foundry.toml:
// @octant/=lib/octant-v2-core/src/
```

---

### ❌ `DeclarationError: Undeclared identifier`

**Problem:** Missing dependency or wrong interface

**Example Error:**
```
Error: Undeclared identifier "IERC20"
```

**Solution:**
```solidity
// Add missing import
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

// Or install dependency
forge install OpenZeppelin/openzeppelin-contracts
```

---

## 🧪 Testing Errors

### ❌ `Error: Failed to fork network`

**Problem:** RPC URL invalid or archive node required

**Solution:**
```bash
# Check your .env
cat .env

# Need archive RPC for mainnet forks
# ❌ Won't work:
ARBITRUM_RPC=https://arb1.arbitrum.io/rpc

# ✅ Use these (archive nodes):
ARBITRUM_RPC=https://arbitrum-mainnet.infura.io/v3/YOUR_KEY
# Or
ARBITRUM_RPC=https://arb-mainnet.g.alchemy.com/v2/YOUR_KEY

# Test connection
curl -X POST $ARBITRUM_RPC \
  -H "Content-Type: application/json" \
  -d '{"jsonrpc":"2.0","method":"eth_blockNumber","params":[],"id":1}'
```

---

### ❌ `Error: Insufficient balance`

**Problem:** Test address doesn't have tokens on fork

**Solution:**
```solidity
// Use deal() cheatcode to give tokens
function setUp() public {
    vm.createSelectFork("arbitrum");
    
    // Give 10,000 USDC to user
    address USDC = 0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8;
    deal(USDC, user, 10_000e6);
    
    // Or impersonate a whale
    address usdcWhale = 0x489ee077994B6658eAfA855C308275EAd8097C4A;
    vm.prank(usdcWhale);
    IERC20(USDC).transfer(user, 10_000e6);
}
```

---

### ❌ Test passes locally but fails in CI

**Problem:** Block number / timestamp sensitivity

**Solution:**
```solidity
// ❌ Fragile (depends on current block)
function testHarvest() public {
    vm.warp(1700000000); // Specific timestamp
    // ...
}

// ✅ Robust (relative time)
function testHarvest() public {
    uint256 startTime = block.timestamp;
    vm.warp(startTime + 30 days);
    // ...
}
```

---

## 🚀 Deployment Errors

### ❌ `Error: Insufficient funds for gas`

**Problem:** Deployer wallet needs ETH for gas

**Solution:**
```bash
# Check balance
cast balance $YOUR_ADDRESS --rpc-url $RPC_URL

# Get testnet ETH from faucets:
# Arbitrum Sepolia: https://faucet.quicknode.com/arbitrum/sepolia
# Ethereum Sepolia: https://sepoliafaucet.com/

# Or bridge from mainnet
```

---

### ❌ `Error: Contract creation failed`

**Problem:** Constructor reverted

**Solution:**
```bash
# Get detailed error
forge script script/Deploy.s.sol \
  --rpc-url $RPC_URL \
  --broadcast \
  -vvvv  # <-- Add maximum verbosity

# Common causes:
# 1. Invalid constructor parameter (address(0))
# 2. Required approval not set
# 3. Dependent contract not deployed yet

# Fix example:
// ❌ Wrong order
strategy = new Strategy(vault);
vault = new Vault();

// ✅ Correct order
vault = new Vault();
strategy = new Strategy(address(vault));
```

---

### ❌ `Error: Nonce too high` or `Nonce too low`

**Problem:** Transaction nonce out of sync

**Solution:**
```bash
# Check current nonce
cast nonce $YOUR_ADDRESS --rpc-url $RPC_URL

# Reset Foundry nonce cache
rm -rf cache/

# Or use --legacy flag
forge script script/Deploy.s.sol \
  --rpc-url $RPC_URL \
  --broadcast \
  --legacy
```

---

## 💰 Strategy Logic Errors

### ❌ `Error: ERC20: transfer amount exceeds balance`

**Problem:** Strategy trying to withdraw more than available

**Solution:**
```solidity
function _freeFunds(uint256 _amount) internal override {
    // ❌ Wrong - don't assume full balance available
    AAVE_POOL.withdraw(address(USDC), _amount, address(this));
    
    // ✅ Correct - check available first
    uint256 available = aUSDC.balanceOf(address(this));
    uint256 toWithdraw = _amount > available ? available : _amount;
    AAVE_POOL.withdraw(address(USDC), toWithdraw, address(this));
}
```

---

### ❌ Harvest reports wrong `totalAssets`

**Problem:** Not accounting for idle tokens

**Solution:**
```solidity
function _harvestAndReport() internal override returns (uint256) {
    // ❌ Wrong - missing idle balance
    return aUSDC.balanceOf(address(this));
    
    // ✅ Correct - include all assets
    uint256 deployed = aUSDC.balanceOf(address(this));
    uint256 idle = USDC.balanceOf(address(this));
    return deployed + idle;
}
```

---

### ❌ No shares minted on harvest

**Problem:** Reported assets = last reported (no profit detected)

**Solution:**
```solidity
// Debug:
function _harvestAndReport() internal override returns (uint256) {
    uint256 current = aUSDC.balanceOf(address(this));
    uint256 last = TokenizedStrategy.totalAssets();
    
    console.log("Current:", current);
    console.log("Last:", last);
    console.log("Profit:", current - last);
    
    return current;
}

// Common causes:
// 1. Not enough time passed (wait 24+ hours)
// 2. APY too low (test with larger amounts)
// 3. Already harvested recently (check lastReport timestamp)
```

---

## 🌐 Frontend Integration Errors

### ❌ `Error: Unsupported chain ID`

**Problem:** Wallet connected to wrong network

**Solution:**
```typescript
// In your wagmi config
import { arbitrum, arbitrumSepolia } from 'wagmi/chains';

const config = createConfig({
  chains: [arbitrum, arbitrumSepolia],
  transports: {
    [arbitrum.id]: http(),
    [arbitrumSepolia.id]: http(),
  },
});

// Add network switch button
function NetworkSwitch() {
  const { chain } = useNetwork();
  const { switchNetwork } = useSwitchNetwork();
  
  if (chain?.id !== arbitrum.id) {
    return (
      <button onClick={() => switchNetwork?.(arbitrum.id)}>
        Switch to Arbitrum
      </button>
    );
  }
}
```

---

### ❌ `Error: Cannot read contract`

**Problem:** ABI mismatch or wrong address

**Solution:**
```typescript
// ❌ Wrong
import StrategyABI from './abis/Strategy.json';
const data = useReadContract({
  address: '0x123...', // Wrong address
  abi: StrategyABI.abi, // Wrong path
  functionName: 'totalAssets',
});

// ✅ Correct
import StrategyABI from './abis/AaveUSDCStrategy.json';
const STRATEGY_ADDRESS = '0xYourDeployedAddress';

const { data, isError, error } = useReadContract({
  address: STRATEGY_ADDRESS,
  abi: StrategyABI, // JSON already has 'abi' field
  functionName: 'totalAssets',
});

// Debug
if (isError) console.error('Contract read error:', error);
```

---

### ❌ Transaction reverts with no error message

**Problem:** Low-level revert without string

**Solution:**
```typescript
// Add better error handling
import { useSimulateContract, useWriteContract } from 'wagmi';

function DepositButton() {
  // 1. Simulate first
  const { data: simulateData } = useSimulateContract({
    address: VAULT_ADDRESS,
    abi: VaultABI,
    functionName: 'deposit',
    args: [amount, userAddress],
  });
  
  // 2. Write only if simulation succeeds
  const { writeContract } = useWriteContract();
  
  const handleDeposit = async () => {
    if (!simulateData) {
      alert('Transaction would fail. Check allowance and balance.');
      return;
    }
    
    writeContract(simulateData.request);
  };
  
  return <button onClick={handleDeposit}>Deposit</button>;
}
```

---

## 🔐 Security / Permission Errors

### ❌ `Error: Caller is not authorized`

**Problem:** Wrong role or missing permission

**Solution:**
```solidity
// Check who's calling
function harvest() external {
    // ❌ Wrong - anyone can call
    _harvestAndReport();
    
    // ✅ Correct - only keeper
    require(msg.sender == TokenizedStrategy.keeper(), "Not keeper");
    _harvestAndReport();
}

// Or use TokenizedStrategy's built-in check
function harvest() external {
    TokenizedStrategy.requireKeeper(msg.sender);
    _harvestAndReport();
}
```

---

### ❌ `Error: ERC20: insufficient allowance`

**Problem:** Forgot to approve spending

**Solution:**
```solidity
// In strategy constructor
constructor(...) {
    // ✅ Approve external protocol
    USDC.approve(address(AAVE_POOL), type(uint256).max);
}

// In frontend
const handleDeposit = async () => {
  // 1. Check allowance
  const allowance = await USDC.allowance(userAddress, VAULT_ADDRESS);
  
  // 2. Approve if needed
  if (allowance < amount) {
    await USDC.approve(VAULT_ADDRESS, amount);
  }
  
  // 3. Deposit
  await vault.deposit(amount, userAddress);
};
```

---

## 🐛 Common Logic Bugs

### ❌ Decimal precision errors

**Problem:** Token decimals mismatch

```solidity
// Example: USDC (6 decimals) + DAI (18 decimals)

// ❌ Wrong
uint256 totalValue = usdcAmount + daiAmount; // Mixing decimals!

// ✅ Correct - normalize to same decimals
uint256 usdcNormalized = usdcAmount * 1e12; // 6 → 18 decimals
uint256 totalValue = usdcNormalized + daiAmount;
```

---

### ❌ Division by zero

**Problem:** Not checking for zero values

```solidity
// ❌ Wrong
function calculateAPY() public view returns (uint256) {
    return (profit * 365 days) / timeElapsed; // What if timeElapsed = 0?
}

// ✅ Correct
function calculateAPY() public view returns (uint256) {
    if (timeElapsed == 0) return 0;
    return (profit * 365 days) / timeElapsed;
}
```

---

### ❌ Reentrancy attacks

**Problem:** External calls before state updates

```solidity
// ❌ Vulnerable
function withdraw(uint256 amount) external {
    externalCall(); // Could re-enter!
    balance[msg.sender] -= amount;
}

// ✅ Safe - use ReentrancyGuard
import {ReentrancyGuard} from "@openzeppelin/contracts/security/ReentrancyGuard.sol";

contract MyStrategy is BaseStrategy, ReentrancyGuard {
    function withdraw(uint256 amount) external nonReentrant {
        balance[msg.sender] -= amount; // Update state first
        externalCall(); // Then call external
    }
}
```

---

## 📊 Performance Issues

### ❌ High gas costs

**Problem:** Inefficient operations

**Solution:**
```solidity
// ❌ Expensive - multiple storage reads
function expensiveCalculation() public view returns (uint256) {
    uint256 total = 0;
    for (uint i = 0; i < users.length; i++) {
        total += balances[users[i]]; // SLOAD every iteration
    }
    return total;
}

// ✅ Optimized - cache in memory
function cheapCalculation() public view returns (uint256) {
    uint256 total = 0;
    uint256 length = users.length; // Cache array length
    for (uint i = 0; i < length; i++) {
        uint256 balance = balances[users[i]]; // Cache in memory
        total += balance;
    }
    return total;
}
```

---

### ❌ Tenderly fork slow

**Problem:** Too many state reads

**Solution:**
```javascript
// Use batch calls
const multicall = new Contract(MULTICALL_ADDRESS, MULTICALL_ABI, provider);

// ❌ Slow - sequential calls
const balance1 = await strategy.totalAssets();
const balance2 = await strategy.estimatePendingProfit();
const apy = await strategy.getCurrentAPY();

// ✅ Fast - batch call
const calls = [
  strategy.interface.encodeFunctionData('totalAssets'),
  strategy.interface.encodeFunctionData('estimatePendingProfit'),
  strategy.interface.encodeFunctionData('getCurrentAPY'),
];

const [results] = await multicall.aggregate(calls);
```

---

## 🆘 Still Stuck?

### **Before Asking for Help:**

1. ✅ Read the full error message (scroll up in terminal)
2. ✅ Try on a fresh fork/testnet
3. ✅ Check your .env file for typos
4. ✅ Verify contract addresses are correct
5. ✅ Run with maximum verbosity (`-vvvv`)

### **Where to Get Help:**

**Discord #dev-support**
- Fastest responses
- Active community
- Share code snippets

**GitHub Issues**
- For bug reports
- Feature requests
- Reproducible examples

**Stack Exchange**
- General Solidity questions
- Use tags: `solidity`, `foundry`, `defi`

### **How to Ask Good Questions:**

❌ **Bad:** "My contract doesn't work, help!"

✅ **Good:** 
```
Problem: Strategy reverts on harvest()
Environment: Arbitrum mainnet fork, Foundry
Error: "ERC20: transfer amount exceeds balance"
Code: [link to GitHub gist]
What I tried: [list your debugging steps]
```

---

## 📚 Additional Resources

- [Foundry Book](https://book.getfoundry.sh/) - Complete Foundry docs
- [Solidity Patterns](https://fravoll.github.io/solidity-patterns/) - Best practices
- [ERC-4626 Guide](https://eip2535diamonds.substack.com/p/understanding-erc-4626) - Vault standard
- [Aave V3 Docs](https://docs.aave.com/developers/getting-started/readme) - Protocol integration

---

**Fixed your issue?** Consider contributing to this guide! → [Edit on GitHub](#)

