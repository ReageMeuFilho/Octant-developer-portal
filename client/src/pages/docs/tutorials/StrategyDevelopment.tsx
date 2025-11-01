import DocsLayout from "@/components/DocsLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Code2,
  Blocks,
  CheckCircle2,
  Copy,
  AlertTriangle,
  Lightbulb
} from "lucide-react";

export default function StrategyDevelopment() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Tutorial
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Strategy Development Tutorial
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Learn how to build a rewards-donating strategy that deploys USDC into a Spark savings vault, earns from the Sky Savings Rate, and directs all rewards to a configurable external address.
          </p>
        </div>

        {/* Disclaimer */}
        <Alert className="bg-accent/10 border-accent/20">
          <AlertTriangle className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground/90">
            <strong>R&D Prototype:</strong> This is presented for informational purposes only. It is not a product or service offering and should not be considered financial or legal advice.
          </AlertDescription>
        </Alert>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-4">What We're Building</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            The <code className="text-sm font-mono bg-muted px-2 py-1 rounded">SavingsUsdcStrategy</code> is a rewards-donating strategy that:
          </p>
          <div className="space-y-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/90">Deploys USDC into a Spark savings vault</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/90">Earns yield from the Sky Savings Rate</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/90">Directs all rewards to a configurable external address</span>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <span className="text-foreground/90">Maintains 1:1 redemption for underlying USDC</span>
            </div>
          </div>
        </div>

        {/* The Modular Architecture */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Modular Architecture</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Before diving into the strategy code, let's understand the Octant v2 vault architecture. Through an inheritance chain, we get sophisticated vault functionality "for free."
          </p>

          <Card className="p-6 bg-muted/50 border-border/50">
            <pre className="text-sm font-mono text-foreground overflow-x-auto">
              <code>{`SavingsUsdcStrategy ← Our contract that users interact with
      ↓ inherits from
BaseHealthCheck ← Adds configurable safety bounds checking
      ↓ inherits from    
BaseStrategy ← Delegates to YieldDonatingTokenizedStrategy
      ↓ uses
YieldDonatingTokenizedStrategy ← Mints new shares to Donation Address
      ↓ inherits from
TokenizedStrategy ← Contains all ERC-4626 implementation`}</code>
            </pre>
          </Card>

          <div className="mt-6 space-y-4">
            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-primary" />
                TokenizedStrategy
              </h3>
              <p className="text-sm text-muted-foreground">
                A sophisticated base that handles all complex vault operations—share accounting, deposits, withdrawals, ERC-4626 compliance, access control, and emergency functions.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-accent" />
                YieldDonatingTokenizedStrategy
              </h3>
              <p className="text-sm text-muted-foreground">
                A specialized implementation that mints new shares to the donation address based on all rewards calculated on report().
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-primary" />
                BaseStrategy
              </h3>
              <p className="text-sm text-muted-foreground">
                Adds the delegation pattern that lets us customize reward generation logic.
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-accent" />
                BaseHealthCheck
              </h3>
              <p className="text-sm text-muted-foreground">
                Adds configurable safety rails with upper and lower bounds on reward harvests to prevent oracle manipulation or MEV attacks.
              </p>
            </Card>
          </div>

          <Alert className="bg-primary/10 border-primary/20 mt-6">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground/90">
              <strong>Think of this like building with Lego blocks.</strong> This inheritance structure means we only need to implement four functions to get a fully functional strategy that can handle millions in deposits.
            </AlertDescription>
          </Alert>
        </div>

        {/* Setting Up Our Strategy */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Setting Up Our Strategy</h2>
          <p className="text-foreground/90 leading-relaxed mb-4">
            Our constructor defines the key roles and ensures we're working with the right assets:
          </p>

          <Card className="p-6 bg-muted/50 border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mono text-muted-foreground">Constructor</span>
              <Button variant="ghost" size="sm" className="h-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="text-sm font-mono text-foreground overflow-x-auto">
              <code>{`constructor(
    address _asset,
    string memory _name,
    address _management,
    address _keeper,
    address _emergencyAdmin,
    address _donationAddress,
    address _tokenizedStrategyAddress
) BaseHealthCheck(/* parameters */) {
    if (_asset != USDC) {
        revert UnsupportedAsset(_asset);
    }
    
    IERC20(_asset).approve(USDC_VAULT, type(uint256).max);
}`}</code>
            </pre>
          </Card>

          <div className="mt-6">
            <h3 className="text-xl font-bold mb-4">Role Assignments</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <Card className="p-4 bg-card border-border/50">
                <h4 className="font-bold text-sm mb-2">Management</h4>
                <p className="text-xs text-muted-foreground">
                  Primary administrator who can change roles, intervene when safety bounds are hit, and redirect rewards
                </p>
              </Card>

              <Card className="p-4 bg-card border-border/50">
                <h4 className="font-bold text-sm mb-2">Keeper</h4>
                <p className="text-xs text-muted-foreground">
                  Calls report() to harvest and distribute rewards—can be automated via Gelato
                </p>
              </Card>

              <Card className="p-4 bg-card border-border/50">
                <h4 className="font-bold text-sm mb-2">Emergency Administrator</h4>
                <p className="text-xs text-muted-foreground">
                  Can shut down strategy and perform emergency withdrawals—perfect for 24/7 monitoring
                </p>
              </Card>

              <Card className="p-4 bg-card border-border/50">
                <h4 className="font-bold text-sm mb-2">Donation Address</h4>
                <p className="text-xs text-muted-foreground">
                  Receives newly minted shares redeemable for underlying USDC rewards
                </p>
              </Card>
            </div>
          </div>
        </div>

        {/* Integration in Four Functions */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Integration in Four Functions</h2>
          <p className="text-foreground/90 leading-relaxed mb-6">
            Spark's USDC savings vault is an ERC-4626 vault—just like Octant v2 Strategies. This means integrating with external DeFi sources becomes almost trivial. Our strategy needs to handle four core actions:
          </p>

          {/* Function 1: Deploy Funds */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">1. Deploying User Funds</h3>
            <p className="text-foreground/90 mb-4">
              When users deposit USDC into our strategy, we need to put that money to work immediately:
            </p>

            <Card className="p-6 bg-muted/50 border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono text-muted-foreground">_deployFunds()</span>
                <Button variant="ghost" size="sm" className="h-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm font-mono text-foreground">
                <code>{`function _deployFunds(uint256 _amount) internal override {
    IERC4626(USDC_VAULT).deposit(_amount, address(this));
}`}</code>
              </pre>
            </Card>

            <p className="text-sm text-muted-foreground mt-4">
              That's it—one simple line to deploy funds because both our strategy and Spark's vault speak the same ERC-4626 language. The TokenizedStrategy base contract handles all the complexity of minting shares, updating accounting, and tracking user balances.
            </p>
          </div>

          {/* Function 2: Free Funds */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">2. Freeing User Funds</h3>
            <p className="text-foreground/90 mb-4">
              When users want their money back, we reverse the process:
            </p>

            <Card className="p-6 bg-muted/50 border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono text-muted-foreground">_freeFunds()</span>
                <Button variant="ghost" size="sm" className="h-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm font-mono text-foreground">
                <code>{`function _freeFunds(uint256 _amount) internal override {
    IERC4626(USDC_VAULT).withdraw(_amount, address(this), address(this));
}`}</code>
              </pre>
            </Card>

            <p className="text-sm text-muted-foreground mt-4">
              Again, the ERC-4626 standard makes withdrawal as simple as deployment. The base contract handles burning user shares and calculating exactly how much USDC they should receive.
            </p>
          </div>

          {/* Function 3: Harvest and Report */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">3. Calculating and Distributing Rewards</h3>
            <p className="text-foreground/90 mb-4">
              This is where the magic happens—converting rewards into public goods funding:
            </p>

            <Card className="p-6 bg-muted/50 border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono text-muted-foreground">_harvestAndReport()</span>
                <Button variant="ghost" size="sm" className="h-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm font-mono text-foreground overflow-x-auto">
                <code>{`function _harvestAndReport() internal view override returns (uint256 _totalAssets) {
    uint256 shares = IERC4626(USDC_VAULT).balanceOf(address(this));
    uint256 vaultAssets = IERC4626(USDC_VAULT).convertToAssets(shares);
    uint256 idleAssets = IERC20(USDC).balanceOf(address(this));
    
    _totalAssets = vaultAssets + idleAssets;
}`}</code>
              </pre>
            </Card>

            <p className="text-sm text-muted-foreground mt-4">
              We don't need to manually track rewards or handle complex accounting. We simply report our current position value, and the TokenizedStrategy calculates the difference. Any rewards are automatically converted to new shares and donated to the specified donation address.
            </p>
          </div>

          {/* Function 4: Available Deposit Limit */}
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">4. Respecting Upstream Limits</h3>
            <p className="text-foreground/90 mb-4">
              Finally, we need to respect the Spark vault's deposit capacity:
            </p>

            <Card className="p-6 bg-muted/50 border-border/50">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-mono text-muted-foreground">availableDepositLimit()</span>
                <Button variant="ghost" size="sm" className="h-8">
                  <Copy className="h-4 w-4" />
                </Button>
              </div>
              <pre className="text-sm font-mono text-foreground">
                <code>{`function availableDepositLimit(address) public view override returns (uint256) {
    return IERC4626(USDC_VAULT).maxDeposit(address(this));
}`}</code>
              </pre>
            </Card>

            <p className="text-sm text-muted-foreground mt-4">
              This prevents failed transactions by checking the upstream vault's available capacity before users attempt deposits. We're essentially proxying Spark's limits to our users transparently.
            </p>
          </div>
        </div>

        {/* How It All Flows Together */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It All Flows Together</h2>
          
          <div className="space-y-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">When a User Deposits:</h3>
              <ol className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>User calls <code className="bg-muted px-2 py-0.5 rounded">deposit()</code> on our SavingsUsdcStrategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>TokenizedStrategy handles vault logic—validating amounts, calculating shares, checking limits</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>TokenizedStrategy calls our <code className="bg-muted px-2 py-0.5 rounded">_deployFunds()</code> to put money to work in Spark's vault</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>Shares are minted to the user automatically based on their deposit</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
              <h3 className="text-xl font-bold mb-4">When a User Withdraws:</h3>
              <ol className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="font-bold text-accent">1.</span>
                  <span>User calls <code className="bg-muted px-2 py-0.5 rounded">withdraw()</code> on our SavingsUsdcStrategy</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">2.</span>
                  <span>TokenizedStrategy calculates how many shares to burn and how much USDC they should receive</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">3.</span>
                  <span>TokenizedStrategy calls our <code className="bg-muted px-2 py-0.5 rounded">_freeFunds()</code> to pull the exact amount from Spark's vault</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-accent">4.</span>
                  <span>User receives their USDC, and their shares are burned</span>
                </li>
              </ol>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="text-xl font-bold mb-4">When Rewards Are Reported:</h3>
              <ol className="space-y-2 text-sm text-foreground/90">
                <li className="flex gap-3">
                  <span className="font-bold text-primary">1.</span>
                  <span>Keeper calls <code className="bg-muted px-2 py-0.5 rounded">report()</code> on our SavingsUsdcStrategy (can be automated)</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">2.</span>
                  <span>TokenizedStrategy calls our <code className="bg-muted px-2 py-0.5 rounded">_harvestAndReport()</code> to get current total value</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">3.</span>
                  <span>Rewards are calculated as the difference between current value and previous value</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">4.</span>
                  <span>New shares representing rewards are minted and sent to the donation address</span>
                </li>
                <li className="flex gap-3">
                  <span className="font-bold text-primary">5.</span>
                  <span>BaseHealthCheck ensures rewards are within acceptable bounds</span>
                </li>
              </ol>
            </Card>
          </div>
        </div>

        {/* Conclusion */}
        <div className="pt-8 border-t border-border/40">
          <Alert className="bg-primary/10 border-primary/20">
            <Code2 className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground/90">
              <strong>The Power of Modular Design:</strong> This strategy demonstrates that you don't need hundreds of lines of code or deep protocol expertise to become an Octant Strategist. The inheritance chain gives you vault functionality, safety measures, and operational infrastructure so you can focus purely on your unique DeFi integration.
            </AlertDescription>
          </Alert>
        </div>
      </div>
    </DocsLayout>
  );
}
