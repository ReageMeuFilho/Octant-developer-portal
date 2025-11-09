# What You'll Build

## 🎯 In This Guide

By the end of this tutorial, you'll have built and deployed:

1. **A Yield Strategy** - Automatically generates returns from DeFi protocols
2. **A Funding Vault** - Accepts deposits and deploys them to your strategy  
3. **An Allocation System** - Routes yield to your chosen projects
4. **A Frontend Dashboard** - Lets users interact with your vault

**Time to Complete:** 2-3 hours (first time) | 30 minutes (experienced)

---

## 🎨 What It Looks Like

### For End Users:
```
┌─────────────────────────────────────┐
│  💰 Your Vault Dashboard            │
├─────────────────────────────────────┤
│  Balance: $10,000                   │
│  Current APY: 5.7%                  │
│  Yield Donated: $47.50 (this month) │
│                                     │
│  [Deposit More]  [Withdraw]         │
│                                     │
│  📊 Where Your Money Works:         │
│  • Aave Lending: $6,000 (60%)      │
│  • Lido Staking: $4,000 (40%)      │
│                                     │
│  🌱 Where Yield Goes:                │
│  • Clean Water Project: $28.50     │
│  • Open Source Dev: $19.00         │
└─────────────────────────────────────┘
```

### Under The Hood:
```
User Deposit ($10,000)
    ↓
Vault (Holds Shares)
    ↓
Strategy 1: Aave Lending ($6,000) → Earns $28.50/month
Strategy 2: Lido Staking ($4,000) → Earns $19.00/month
    ↓
Yield Router
    ↓
60% Compounds Back → Grows vault
40% Donated → Projects you choose
```

---

## 🎓 What You'll Learn

### **Beginner Track** (Start here if new to Web3)
- ✅ How blockchain vaults work
- ✅ Basic Solidity contract structure
- ✅ Deploying to a test network
- ✅ Building a simple React UI

### **Intermediate Track** (DeFi experience)
- ✅ ERC-4626 vault standard
- ✅ Yield strategy patterns
- ✅ Smart contract testing with Foundry
- ✅ Multi-strategy allocation

### **Advanced Track** (Production-ready)
- ✅ Security best practices
- ✅ Gas optimization techniques
- ✅ Monitoring and automation
- ✅ Custom allocation mechanisms

---

## 🚦 Choose Your Starting Point

### **Path A: "Show Me Working Code"** ⚡
→ Jump to [Clone & Run Demo](#) (5 minutes)  
Perfect if you learn by exploring running code first.

### **Path B: "Explain First, Then Code"** 📚
→ Start with [Core Concepts](#) (15 minutes)  
Perfect if you want to understand architecture before coding.

### **Path C: "I Just Need the Contracts"** 🏗️
→ Skip to [Build Your First Strategy](#) (30 minutes)  
Perfect if you're familiar with DeFi and want to dive in.

---

## 📋 Prerequisites Check

Before starting, make sure you have:

```bash
# Check Node.js version (need 18+)
node --version
# Should show: v18.x.x or higher

# Check if Foundry is installed
forge --version
# Should show: forge 0.2.0 or similar

# Check Git
git --version
# Should show: git version 2.x.x
```

**Missing something?** → Go to [Install Tools](#)

**All set?** → Continue to [Core Concepts](#) or [Quick Demo](#)

---

## 🎯 Real-World Use Cases

### What People Build with Octant:

**1. Endowment Funds**
> "Our $50M university endowment earns 5% yield ($2.5M/year). We donate 40% ($1M) to student projects while growing the principal."

**2. DAO Treasuries**  
> "Our gaming DAO put $10M idle USDC to work. Yield funds tournament prizes without touching the treasury."

**3. Public Goods Funding**
> "Community members deposit ETH. Yield supports open-source developers through quadratic funding votes."

**4. Perpetual Grants**
> "Instead of one-time grants, we provide 'yield streams' - projects receive funding as long as our capital is deployed."

---

## ⏱️ Time Commitment

| Section | Time | Difficulty |
|---------|------|-----------|
| Quick Demo | 5 min | ⭐ Easy |
| Core Concepts | 15 min | ⭐ Easy |
| Environment Setup | 20 min | ⭐⭐ Moderate |
| First Strategy | 45 min | ⭐⭐ Moderate |
| Testing | 30 min | ⭐⭐⭐ Advanced |
| Deployment | 30 min | ⭐⭐⭐ Advanced |
| Frontend | 45 min | ⭐⭐ Moderate |

**Total: ~3 hours** for complete beginner  
**Total: ~1 hour** if you skip explanations and dive into code

---

## 💬 Need Help?

- **Stuck?** → [Troubleshooting Guide](#)
- **Questions?** → [Discord Community](https://discord.gg/octant)
- **Bug?** → [GitHub Issues](https://github.com/golemfoundation/octant-v2-core)

---

**Ready to start? Pick your path above! 👆**

