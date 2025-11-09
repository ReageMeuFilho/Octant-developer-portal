# Octant V2 Quick Reference

> **Keep this page open while building!** 🔖

---

## 🎨 NEW: Visual Protocol Guide

**Learn through diagrams!** We've created 10 comprehensive visual diagrams that explain the entire Octant v2 protocol using Alice/Bob style narratives.

👉 **[View All 10 Diagrams](./3-visual-guide/protocol-diagrams.md)** | **[Quick Index](../diagrams/DIAGRAM_INDEX.md)**

Quick picks:
- [User Deposit & Withdrawal Flow](../diagrams/octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow) - Start here!
- [Yield Generation & Distribution](../diagrams/octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow) - How yield works
- [Quadratic Funding Vote](../diagrams/octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution) - Democratic voting

---

## ⚡ Essential Commands

```bash
# Setup
forge install
forge build
forge test

# Test specific contract
forge test --match-contract MyStrategyTest -vvv

# Deploy
forge script script/Deploy.s.sol --rpc-url $RPC --broadcast

# Verify contract
forge verify-contract $ADDRESS $CONTRACT --chain arbitrum

# Local fork
anvil --fork-url $MAINNET_RPC

# Gas report
forge test --gas-report
```

---

## 📋 Strategy Checklist

When building a new strategy, implement these three functions:

```solidity
// ✅ 1. Deploy capital to earn yield
function _deployFunds(uint256 _amount) internal override {
    // Your code: deposit _amount into external protocol
}

// ✅ 2. Free up capital for withdrawals
function _freeFunds(uint256 _amount) internal override {
    // Your code: withdraw _amount from external protocol
}

// ✅ 3. Report current value
function _harvestAndReport() internal override returns (uint256) {
    // Your code: return total asset value
    return deployedAssets + idleAssets;
}
```

---

## 🏗️ Contract Templates

### **Simple Lending Strategy**

```solidity
pragma solidity ^0.8.20;
import {BaseStrategy} from "@octant/core/BaseStrategy.sol";

contract MyStrategy is BaseStrategy {
    constructor(
        address _asset,
        string memory _name,
        address _tokenizedStrategy
    ) BaseStrategy(_asset, _name, _tokenizedStrategy) {}
    
    function _deployFunds(uint256 amount) internal override {
        // TODO: Deploy to protocol
    }
    
    function _freeFunds(uint256 amount) internal override {
        // TODO: Withdraw from protocol
    }
    
    function _harvestAndReport() internal override returns (uint256) {
        // TODO: Calculate total assets
        return 0;
    }
}
```

### **Test Template**

```solidity
pragma solidity ^0.8.20;
import "forge-std/Test.sol";

contract MyStrategyTest is Test {
    MyStrategy strategy;
    address user = address(100);
    
    function setUp() public {
        vm.createSelectFork("arbitrum");
        strategy = new MyStrategy(...);
    }
    
    function testDeploy() public {
        // TODO: Test deployFunds
    }
    
    function testHarvest() public {
        // TODO: Test harvest after time passes
        vm.warp(block.timestamp + 30 days);
    }
}
```

---

## 📍 Key Addresses

### **Arbitrum Mainnet**

```solidity
USDC:  0xFF970A61A04b1cA14834A43f5dE4533eBDDB5CC8
aUSDC: 0x625E7708f30cA75bfd92586e17077590C60eb4cD
WETH:  0x82aF49447D8a07e3bd95BD0d56f35241523fBab1
stETH: 0x5979D7b546E38E414F7E9822514be443A4800529

AavePool: 0x794a61358D6845594F94dc1DB02A252b5b4814aD
```

### **Arbitrum Sepolia (Testnet)**

```solidity
USDC: 0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d
```

---

## 🔧 Common Patterns

### **Safe ERC20 Operations**

```solidity
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
using SafeERC20 for IERC20;

// ✅ Use safeTransfer
token.safeTransfer(recipient, amount);

// ✅ Use safeApprove
token.safeApprove(spender, amount);
```

### **Check Balance Before Withdraw**

```solidity
function _freeFunds(uint256 amount) internal override {
    uint256 available = externalProtocol.balanceOf(address(this));
    uint256 toWithdraw = amount > available ? available : amount;
    externalProtocol.withdraw(toWithdraw);
}
```

### **Include Idle Assets in Report**

```solidity
function _harvestAndReport() internal override returns (uint256) {
    uint256 deployed = aToken.balanceOf(address(this));
    uint256 idle = asset.balanceOf(address(this));
    return deployed + idle; // ✅ Don't forget idle!
}
```

---

## 🧪 Testing Snippets

### **Give Test Address Tokens**

```solidity
// Method 1: deal cheatcode
deal(USDC, user, 10_000e6);

// Method 2: impersonate whale
address whale = 0x489ee077994B6658eAfA855C308275EAd8097C4A;
vm.prank(whale);
IERC20(USDC).transfer(user, 10_000e6);
```

### **Fast Forward Time**

```solidity
// Advance 30 days
vm.warp(block.timestamp + 30 days);
vm.roll(block.number + 216000); // ~30 days of blocks
```

### **Mock External Call**

```solidity
// Mock return value
vm.mockCall(
    address(externalContract),
    abi.encodeWithSelector(ExternalContract.getPrice.selector),
    abi.encode(1000e18) // Mock price
);
```

---

## 🚨 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| `forge: command not found` | `curl -L https://foundry.paradigm.xyz \| bash && foundryup` |
| `Insufficient balance` | Use `deal()` to give test tokens |
| `ERC20: insufficient allowance` | Add `token.approve()` before transfer |
| `Nonce too high` | Clear cache: `rm -rf cache/` |
| `Contract creation failed` | Add `-vvvv` to see revert reason |

---

## 📊 Useful View Functions

```solidity
// Check strategy state
strategy.totalAssets()          // Total value deployed
strategy.totalIdle()            // Idle assets not earning
strategy.lastReport()           // When last harvest happened

// Check vault state
vault.totalAssets()             // Total vault value
vault.balanceOf(user)           // User's shares
vault.convertToAssets(shares)   // Share → asset value
vault.convertToShares(assets)   // Asset → share count
```

---

## 🔐 Security Checklist

Before production:

- [ ] Reentrancy protection (use `ReentrancyGuard`)
- [ ] Access control (only keeper can harvest)
- [ ] Overflow checks (use Solidity 0.8+)
- [ ] Approve cap (use `safeApprove`)
- [ ] Emergency withdraw implemented
- [ ] Tested on mainnet fork with real tokens
- [ ] Audited by professional firm
- [ ] Monitored with alerts (Tenderly/Defender)

---

## 🎨 Frontend Snippets

### **Read Contract**

```typescript
import { useReadContract } from 'wagmi';

const { data: totalAssets } = useReadContract({
  address: STRATEGY_ADDRESS,
  abi: StrategyABI,
  functionName: 'totalAssets',
});
```

### **Write Contract**

```typescript
import { useWriteContract } from 'wagmi';

const { writeContract } = useWriteContract();

const handleDeposit = () => {
  writeContract({
    address: VAULT_ADDRESS,
    abi: VaultABI,
    functionName: 'deposit',
    args: [amount, userAddress],
  });
};
```

### **Approve + Deposit Pattern**

```typescript
// 1. Check allowance
const allowance = await readContract({
  address: TOKEN_ADDRESS,
  abi: erc20Abi,
  functionName: 'allowance',
  args: [userAddress, VAULT_ADDRESS],
});

// 2. Approve if needed
if (allowance < amount) {
  await writeContract({
    address: TOKEN_ADDRESS,
    abi: erc20Abi,
    functionName: 'approve',
    args: [VAULT_ADDRESS, amount],
  });
}

// 3. Deposit
await writeContract({
  address: VAULT_ADDRESS,
  abi: VaultABI,
  functionName: 'deposit',
  args: [amount, userAddress],
});
```

---

## 📖 Documentation Links

- **Core Docs:** https://docs.v2.octant.build
- **GitHub:** https://github.com/golemfoundation/octant-v2-core
- **Discord:** https://discord.gg/octant
- **Boilerplate:** https://github.com/golemfoundation/octant-v2-hackathon-dapp-boilerplate

---

## 🔗 External Protocol Docs

- **Aave V3:** https://docs.aave.com/developers/
- **Lido:** https://docs.lido.fi/
- **Morpho:** https://docs.morpho.org/
- **Uniswap V3:** https://docs.uniswap.org/
- **ERC-4626:** https://eips.ethereum.org/EIPS/eip-4626

---

## 💡 Pro Tips

### **Gas Optimization**

```solidity
// ❌ Expensive
for (uint i = 0; i < array.length; i++) {
    total += balances[array[i]];
}

// ✅ Cheaper
uint256 length = array.length; // Cache
for (uint i = 0; i < length; ++i) { // Use ++i
    total += balances[array[i]];
}
```

### **Debugging Failed Transactions**

```bash
# Get detailed trace
cast run $TX_HASH --rpc-url $RPC -vvvv

# Decode revert reason
cast call $CONTRACT "functionName(uint256)" $ARG --rpc-url $RPC
```

### **Monitor Events**

```bash
# Watch for specific event
cast logs --address $CONTRACT \
  --from-block latest \
  "HarvestExecuted(uint256,uint256)" \
  --rpc-url $RPC
```

---

## 📱 Quick Setup Script

Save as `setup.sh`:

```bash
#!/bin/bash

# Install Foundry
curl -L https://foundry.paradigm.xyz | bash
foundryup

# Clone boilerplate
git clone https://github.com/golemfoundation/octant-v2-hackathon-dapp-boilerplate
cd octant-v2-hackathon-dapp-boilerplate

# Install deps
forge install
yarn install

# Setup env
cp .env.example .env

# Run tests
forge test

echo "✅ Setup complete!"
```

Run: `bash setup.sh`

---

## 🎯 Deployment Checklist

- [ ] Tests pass on fork
- [ ] Deployed to testnet
- [ ] Tested with real tokens
- [ ] Monitoring set up
- [ ] Emergency contacts notified
- [ ] Multisig configured
- [ ] Roles assigned correctly
- [ ] Documentation updated
- [ ] Audit report reviewed
- [ ] Bug bounty active

---

## 🆘 Emergency Contacts

- **Critical Bugs:** security@octant.build
- **Discord #urgent:** https://discord.gg/octant
- **GitHub Issues:** https://github.com/golemfoundation/octant-v2-core/issues

---

**🔖 Bookmark this page for quick reference while building!**

[⬆️ Back to Top](#)

