# Diagram 30: ERC-4626 Share Math Deep Dive

## 🚧 Coming Soon

This diagram will provide a visual, step-by-step explanation of ERC-4626 share mathematics.

### What It Will Cover:

- Initial deposit (1:1 ratio)
- Share price calculation
- Yield impact on share price
- Loss impact on share price
- Deposit after yield accrual
- Withdrawal calculations
- Rounding and precision

### Narrative Preview:

*"Alice deposits $100k when the vault is empty. She gets 100k shares at $1.00 per share. The vault earns $5k yield. Bob deposits $50k. How many shares does Bob get? Let's visualize the math..."*

---

## 📊 Planned Diagram Type

`flowchart TD` with mathematical formulas visualized

---

## 🔑 Key Topics to Cover

- `convertToShares()` formula
- `convertToAssets()` formula
- Price per share calculation
- Yield dilution mechanics
- Rounding (Floor vs Ceiling)
- Edge cases (first depositor, inflation attack protection)

### Example Calculations:

```
Initial State:
totalAssets = 0
totalShares = 0

Alice deposits 100k:
shares = 100k (special case: first deposit)
totalAssets = 100k
totalShares = 100k
PPS = 1.00

After 5k yield:
totalAssets = 105k
totalShares = 100k
PPS = 1.05

Bob deposits 50k:
shares = 50k / 1.05 = 47,619 shares
totalAssets = 155k
totalShares = 147,619
PPS = 1.05 (unchanged)
```

---

## 📚 Related Topics

- **[Deposit & Withdrawal](../../octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow)** - User perspective
- **[Yield Generation](../../octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)** - Impact on shares
- **[Loss Scenario](./12-loss-scenario.md)** - Negative impact on PPS

---

## 🔗 Smart Contract References

- `TokenizedStrategy.sol`: Share conversion functions
- `MultistrategyVault.sol`: ERC-4626 implementation
- EIP-4626 Standard

---

**Status:** 🚧 Coming Soon  
**Target:** Phase 2  
**Part of:** Octant v2 Diagram Tutorial






