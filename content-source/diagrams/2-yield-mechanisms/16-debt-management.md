# Diagram 16: Debt Management & Rebalancing

## 🚧 Coming Soon

This diagram will explain how vault managers allocate and rebalance debt across strategies.

### What It Will Cover:

- Current debt vs max debt
- Updating debt allocations
- Rebalancing between strategies
- Debt ratio optimization
- Profit/loss impact on debt

### Narrative Preview:

*"Carol manages a $1M vault with 3 strategies. Aave's rate dropped to 3%, while Morpho jumped to 8%. She decides to rebalance: moving $200k from Aave to Morpho. Here's the complete debt management process..."*

---

## 📊 Planned Diagram Type

`sequenceDiagram` - Showing rebalancing flow between strategies

---

## 🔑 Key Topics to Cover

- Setting max debt limits
- Current debt tracking
- Debt reduction (freeing funds)
- Debt increase (deploying funds)
- Profit impact on debt
- Loss impact on debt
- Rebalancing best practices

---

## 📚 Related Topics

- **[Multi-Strategy Vault](../../octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)** - Strategy allocation
- **[Harvest Cycle](./15-harvest-cycle.md)** - Reporting and accounting
- **[Loss Scenario](../1-core-concepts/12-loss-scenario.md)** - Debt impact from losses

---

## 🔗 Smart Contract References

- `MultistrategyVault.sol`: `updateDebt()` function
- `DebtManagementLib.sol`: Debt calculation logic
- `StrategyManagementLib.sol`: Strategy management

---

**Status:** 🚧 Coming Soon  
**Target:** Phase 2  
**Part of:** Octant v2 Diagram Tutorial






