# Octant v2 Diagram Index

Quick reference for all available diagrams. Click to jump directly to any diagram.

---

## 📊 All Diagrams (Quick Links)

| # | Diagram | Narrative Summary | Complexity | Best For |
|---|---------|-------------------|------------|----------|
| [1](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow) | **User Deposit & Withdrawal** | Alice deposits $10k, gets shares, withdraws anytime | ⭐ Easy | End Users |
| [2](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow) | **Yield Generation & Split** | Bob's $50k earns yield, splits 60/40 | ⭐ Easy | End Users |
| [3](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation) | **Multi-Strategy Vault** | Carol manages $1M across 4 strategies | ⭐⭐ Moderate | Vault Managers |
| [4](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits) | **Yield Donating Strategy** | Aave strategy mints shares to Dragon Router | ⭐⭐⭐ Advanced | Developers |
| [5](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets) | **Yield Skimming Strategy** | stETH appreciation → diluted shares | ⭐⭐⭐ Advanced | Developers |
| [6](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow) | **Dragon Router Flow** | Yield → Dragon Router → Projects | ⭐⭐ Moderate | Everyone |
| [7](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution) | **Quadratic Funding** | Many small donors > One whale | ⭐⭐ Moderate | Voters |
| [8](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem) | **Proposal Lifecycle** | Create → Vote → Queue → Execute | ⭐⭐ Moderate | Projects |
| [9](./octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism) | **Lockup & Rage Quit** | David locks 6 months, emergency exits in 90 days | ⭐⭐ Moderate | Long-term Users |
| [10](./octant-v2-visual-guide.md#diagram-10-trader-dca-dollar-cost-averaging-mechanism) | **Trader DCA** | Random-timing USDC → GLM conversion | ⭐⭐⭐ Advanced | Protocol Ops |

---

## 🎯 By Use Case

### I want to understand...

#### **How users interact with Octant**
→ [Diagram 1: User Deposit & Withdrawal](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow)

#### **Where yield comes from and where it goes**
→ [Diagram 2: Yield Generation & Distribution](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)

#### **How to vote on projects**
→ [Diagram 7: Quadratic Funding Vote](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution)

#### **How projects receive funding**
→ [Diagram 8: Proposal Lifecycle](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem)

#### **How vault managers allocate funds**
→ [Diagram 3: Multi-Strategy Vault](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)

#### **How strategies donate yield (technical)**
→ [Diagram 4: Yield Donating](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits) & [Diagram 5: Yield Skimming](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets)

#### **How the Dragon Router works**
→ [Diagram 6: Dragon Router & Allocation Flow](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow)

#### **How lockups and emergency exits work**
→ [Diagram 9: Lockup & Rage Quit](./octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism)

#### **How automated trading works**
→ [Diagram 10: Trader DCA](./octant-v2-visual-guide.md#diagram-10-trader-dca-dollar-cost-averaging-mechanism)

---

## 👥 By Role

### **End User** (I want to deposit and vote)
1. [Diagram 1: Deposit & Withdrawal](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow)
2. [Diagram 2: Yield Flow](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)
3. [Diagram 7: Voting](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution)
4. [Diagram 9: Lockups](./octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism) (if using lockups)

### **Project/DAO** (I want to receive funding)
1. [Diagram 6: Dragon Router](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow)
2. [Diagram 7: Voting System](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution)
3. [Diagram 8: Proposal Lifecycle](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem)

### **Vault Manager** (I manage a vault)
1. [Diagram 2: Yield Flow](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)
2. [Diagram 3: Multi-Strategy Allocation](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)
3. [Diagram 4: Yield Donating](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits)
4. [Diagram 5: Yield Skimming](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets)

### **Strategy Developer** (I build strategies)
1. [Diagram 3: Vault Architecture](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)
2. [Diagram 4: Yield Donating Implementation](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits)
3. [Diagram 5: Yield Skimming Implementation](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets)

### **Integration Partner** (I want to build on Octant)
1. [Diagram 6: Dragon Router](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow)
2. [Diagram 8: Allocation Mechanism](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem)
3. [Diagram 10: Trading Infrastructure](./octant-v2-visual-guide.md#diagram-10-trader-dca-dollar-cost-averaging-mechanism)

---

## 📈 By Complexity

### ⭐ Easy (Start Here!)
- [Diagram 1: User Deposit & Withdrawal](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow)
- [Diagram 2: Yield Generation](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)

### ⭐⭐ Moderate
- [Diagram 3: Multi-Strategy Vault](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)
- [Diagram 6: Dragon Router](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow)
- [Diagram 7: Quadratic Funding](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution)
- [Diagram 8: Proposal Lifecycle](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem)
- [Diagram 9: Lockup & Rage Quit](./octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism)

### ⭐⭐⭐ Advanced (For Developers)
- [Diagram 4: Yield Donating Strategy](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits)
- [Diagram 5: Yield Skimming Strategy](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets)
- [Diagram 10: Trader DCA](./octant-v2-visual-guide.md#diagram-10-trader-dca-dollar-cost-averaging-mechanism)

---

## 🔄 Learning Paths

### Path 1: Complete Beginner
**Goal:** Understand Octant from user perspective

1. [Basic Deposit & Withdrawal](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow) (5 min)
2. [Yield Generation](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow) (5 min)
3. [Voting System](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution) (10 min)
4. Read: [Core Concepts](../getting-started/2-core-concepts/octant-in-3-minutes.md)

**Time:** ~30 minutes

---

### Path 2: DeFi User
**Goal:** Understand advanced features

1. Skim [Diagrams 1-2](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow) (quick review)
2. [Multi-Strategy Vault](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation) (10 min)
3. [Dragon Router Flow](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow) (10 min)
4. [Lockup & Rage Quit](./octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism) (10 min)

**Time:** ~30 minutes

---

### Path 3: Developer
**Goal:** Understand architecture and build strategies

1. [User Flow](./octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow) (quick review)
2. [Multi-Strategy Architecture](./octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation) (15 min)
3. [Yield Donating Strategy](./octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits) (20 min)
4. [Yield Skimming Strategy](./octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets) (20 min)
5. [Dragon Router Integration](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow) (15 min)
6. Code: [Build Your First Strategy](../getting-started/4-build-first-strategy/tutorial-simple-lending.md)

**Time:** ~90 minutes

---

### Path 4: Project/DAO Treasury
**Goal:** Understand how to receive funding

1. [Yield Flow Overview](./octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow) (5 min)
2. [Dragon Router & Allocation](./octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow) (10 min)
3. [Quadratic Funding Mechanics](./octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution) (15 min)
4. [Proposal Lifecycle](./octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem) (15 min)

**Time:** ~45 minutes

---

## 📚 Additional Resources

- **[Full Visual Guide](./octant-v2-visual-guide.md)** - All 10 diagrams in one document
- **[Protocol Diagrams Overview](../getting-started/3-visual-guide/protocol-diagrams.md)** - Detailed guide
- **[Core Concepts](../getting-started/2-core-concepts/octant-in-3-minutes.md)** - Text-based explanation
- **[Build Tutorial](../getting-started/4-build-first-strategy/tutorial-simple-lending.md)** - Hands-on coding

---

## 🎨 Diagram Types Used

- **Sequence Diagrams**: Show interactions over time (Diagrams 1, 4, 5, 9, 10)
- **Flowcharts**: Show decision flows and data movement (Diagrams 2, 3, 6, 7)
- **State Diagrams**: Show lifecycle and state transitions (Diagram 8)

All diagrams use [Mermaid syntax](https://mermaid.js.org/) and render automatically on GitHub and most documentation platforms.

---

**Need help?** Ask in [Discord](https://discord.gg/octant) or check [Troubleshooting](../getting-started/8-troubleshooting/common-errors.md)






