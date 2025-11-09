# Visual Protocol Guide

Learn Octant v2 through visual diagrams and step-by-step narratives.

## 🎨 Why Visual Learning?

Complex DeFi protocols are easier to understand with visual aids. Our diagram-based tutorials use familiar characters (Alice, Bob, Carol) to walk you through each mechanism.

## 📊 10 Core Diagrams

We've created 10 comprehensive diagrams that cover the entire Octant v2 protocol:

### **Foundation Concepts** (Start Here!)

#### 1. [Basic User Deposit & Withdrawal Flow](../../diagrams/octant-v2-visual-guide.md#diagram-1-basic-user-deposit--withdrawal-flow)
> *Alice deposits $10,000 and can withdraw anytime*

Learn how users interact with Octant vaults, receive shares, and maintain full control of their principal.

#### 2. [Yield Generation & Distribution Flow](../../diagrams/octant-v2-visual-guide.md#diagram-2-yield-generation--distribution-flow)
> *Bob's yield is split: 60% compounds, 40% donates*

Understand how vaults earn yield from DeFi protocols and split it between growth and impact.

#### 3. [Multi-Strategy Vault Allocation](../../diagrams/octant-v2-visual-guide.md#diagram-3-multi-strategy-vault-allocation)
> *Carol manages $1M across 4 different strategies*

See how vault managers allocate funds across multiple strategies for diversification and risk management.

---

### **Advanced Strategy Mechanisms**

#### 4. [Yield Donating Strategy](../../diagrams/octant-v2-visual-guide.md#diagram-4-yield-donating-strategy-discrete-profits)
> *Aave earns $50 interest → mints 50 shares to Dragon Router*

Technical deep-dive into how discrete profit events (Aave, Compound) donate yield by minting shares.

#### 5. [Yield Skimming Strategy](../../diagrams/octant-v2-visual-guide.md#diagram-5-yield-skimming-strategy-appreciating-assets)
> *stETH appreciates 5% → Dragon Router receives shares worth 5%*

Learn how liquid staking tokens (LSTs) donate yield through appreciation skimming.

---

### **Governance & Allocation**

#### 6. [Dragon Router & Allocation Flow](../../diagrams/octant-v2-visual-guide.md#diagram-6-dragon-router--allocation-flow)
> *Yield flows from strategies → Dragon Router → Allocation Mechanism → Projects*

Understand the central hub that routes donated yield to community-chosen projects.

#### 7. [Quadratic Funding Vote & Distribution](../../diagrams/octant-v2-visual-guide.md#diagram-7-quadratic-funding-vote--distribution)
> *Many small donors > One whale*

See how quadratic funding prevents plutocracy and amplifies community voices.

#### 8. [Proposal Lifecycle](../../diagrams/octant-v2-visual-guide.md#diagram-8-proposal-lifecycle-create--vote--queue--redeem)
> *From proposal → voting → queuing → execution*

Follow a project through the complete funding workflow with timelocks and grace periods.

---

### **Special Features**

#### 9. [Lockup & Rage Quit Mechanism](../../diagrams/octant-v2-visual-guide.md#diagram-9-lockup--rage-quit-mechanism)
> *David locks for 6 months, then emergency exits over 90 days*

Learn about voluntary lockups and the safety valve for emergency withdrawals.

#### 10. [Trader DCA Mechanism](../../diagrams/octant-v2-visual-guide.md#diagram-10-trader-dca-dollar-cost-averaging-mechanism)
> *Convert USDC → GLM at random times with TWAP protection*

Understand the decentralized, manipulation-resistant token conversion system.

---

## 🚀 Recommended Learning Paths

### **Path 1: New to DeFi**
1. Start with Diagram 1 (Basic Deposit/Withdrawal)
2. Read Diagram 2 (Yield Generation)
3. Explore Diagram 7 (Voting)
4. Check Diagram 9 (Lockups) if relevant

### **Path 2: DeFi Developer**
1. Skim Diagrams 1-2 (likely familiar)
2. Focus on Diagrams 3-5 (Strategy architecture)
3. Study Diagrams 6, 8 (Integration points)
4. Review Diagram 10 (Trading infrastructure)

### **Path 3: Project/DAO Treasury**
1. Review Diagram 1 (User flow)
2. Understand Diagram 6 (Dragon Router)
3. Master Diagram 7 (Quadratic Funding)
4. Follow Diagram 8 (How to receive funding)

### **Path 4: Complete Deep Dive**
Work through all 10 diagrams in order for comprehensive understanding.

---

## 📖 How to Use These Diagrams

### **In Documentation**
All diagrams use Mermaid syntax and render automatically on:
- GitHub (markdown preview)
- GitBook, Docusaurus, MkDocs
- Most modern documentation platforms

### **For Presentations**
- Convert Mermaid to SVG/PNG using [Mermaid Live Editor](https://mermaid.live/)
- Embed in slides, articles, or tutorials
- Use the narratives as presentation scripts

### **For Video Content**
- Each diagram includes a story (narrative)
- Use these as video storyboards
- Record voiceovers explaining each step

### **For Onboarding**
- Share relevant diagrams based on user role
- Use as training materials for new team members
- Include in user documentation

---

## 💡 Interactive Elements (Coming Soon)

We're working on:
- [ ] Interactive web version with clickable elements
- [ ] Animated versions showing state transitions
- [ ] Sandbox environment to try flows yourself
- [ ] Video walkthroughs of each diagram
- [ ] Multi-language translations

---

## 🤝 Feedback & Contributions

**Found these helpful?** Let us know which diagrams worked best!

**Something unclear?** Open an issue describing what's confusing.

**Want to contribute?** 
- Add new diagrams for specific use cases
- Translate narratives to other languages
- Create video versions
- Build interactive demos

---

## 📚 Next Steps

After reviewing the diagrams:

1. **[Set Up Your Environment](../1-quick-start/what-youll-build.md)** - Get your dev environment ready
2. **[Read Core Concepts](../2-core-concepts/octant-in-3-minutes.md)** - Deeper technical explanations
3. **[Build Your First Strategy](../4-build-first-strategy/tutorial-simple-lending.md)** - Hands-on tutorial
4. **[Deploy to Testnet](#)** - See it work live

---

## 📁 File Location

All diagrams are located at: `docs/diagrams/octant-v2-visual-guide.md`

You can:
- Link directly to specific sections
- Fork and customize for your use case
- Embed in your own documentation

---

**Ready to dive deeper?** → [View All 10 Diagrams](../../diagrams/octant-v2-visual-guide.md)

**Prefer reading?** → [Core Concepts Text Guide](../2-core-concepts/octant-in-3-minutes.md)

**Want to build?** → [Build Your First Strategy](../4-build-first-strategy/tutorial-simple-lending.md)






