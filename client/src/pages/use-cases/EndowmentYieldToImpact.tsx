import UseCasesLayout from "@/components/UseCasesLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, Building2, Shield, TrendingUp, Clock, Users, Zap } from "lucide-react";

export default function EndowmentYieldToImpact() {
  return (
    <UseCasesLayout>
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
            <Building2 className="h-8 w-8 text-primary" />
          </div>
          <div>
            <Badge variant="outline" className="mb-2">USE CASE</Badge>
            <h1 className="text-4xl font-bold">Endowment Yield-to-Impact</h1>
          </div>
        </div>
        <p className="text-2xl font-semibold text-foreground mb-4">
          The Intention: Fund a mission forever — without ever touching principal
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/docs/quickstart">
            <Button size="lg" className="gap-2">
              Partner with Octant <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </Link>
        </div>
      </div>

      {/* Persona Story */}
      <Alert className="mb-16 bg-primary/5 border-primary/20">
        <AlertDescription className="text-base">
          <strong className="text-primary">Meet Sofia, Chief Investment Officer of a university endowment.</strong>
          <br /><br />
          Every quarter, she faces the same question:
          <br /><br />
          <em>"How can I keep the endowment's principal safe while funding the programs that define our mission?"</em>
          <br /><br />
          Sofia's mandate is simple but unforgiving: preserve capital, generate steady yield, and turn that yield into impact. 
          She can't risk principal drawdowns, but she's also under pressure to fund new initiatives faster and with more transparency.
          <br /><br />
          This is where Octant v2 comes in — programmable, transparent, and policy-first funding rails designed for perpetual capital.
        </AlertDescription>
      </Alert>

      {/* Proof Points */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Proof points at a glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Principal erosion (yield-only disbursements)</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">24/7/365</div>
            <div className="text-sm text-muted-foreground">Programmable funding windows</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">{'<'}1s</div>
            <div className="text-sm text-muted-foreground">Allocation updates on major EVM chains</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-chain transparency & immutable audit trails</div>
          </Card>
        </div>
      </div>

      {/* Introducing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introducing Octant v2 Vault Network for Endowments</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Sofia's team aggregates assets into a compliant, policy-guarded Vault. 
          Each vault invests through approved yield adapters (staking, MM vaults, RWA notes). 
          Octant harvests yield automatically, splits it into streams, and routes it to programs according to governance rules.
          <br /><br />
          When markets move or committees re-prioritize, Sofia can re-weight allocations instantly — without touching principal.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/docs/tutorials">
            <Button size="lg" className="gap-2">
              Discover Vaults <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline">
              Read Whitepaper
            </Button>
          </Link>
        </div>

        {/* Visual Flow Diagram */}
        <Card className="p-8 bg-gradient-to-br from-background to-accent/5 border-primary/20">
          <h3 className="text-xl font-bold mb-6 text-center">Endowment Vault Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">🏛️</span>
              </div>
              <div className="font-semibold mb-1">Endowment Vault</div>
              <div className="text-xs text-muted-foreground">Principal protected, yield harvested</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">⚙️</span>
              </div>
              <div className="font-semibold mb-1">Strategy Adapters</div>
              <div className="text-xs text-muted-foreground">Conservative yield sources</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">🔀</span>
              </div>
              <div className="font-semibold mb-1">Yield Splitter</div>
              <div className="text-xs text-muted-foreground">Route to multiple streams</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">🎯</span>
              </div>
              <div className="font-semibold mb-1">Programs</div>
              <div className="text-xs text-muted-foreground">Continuous funding</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Designed for Real Endowment Workflows */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Designed for real endowment workflows</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Recurring Program Funding</h3>
            <p className="text-sm text-muted-foreground">
              Create quarterly or annual seasons that stream yield to operating programs. Lock principal; vary only distribution weights.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Shield className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Donor-Restricted Streams</h3>
            <p className="text-sm text-muted-foreground">
              Tag donor gifts in sub-vaults with purpose or geography. Octant enforces policy in code.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Co-Funding Rounds (Matching)</h3>
            <p className="text-sm text-muted-foreground">
              Trigger automatic matches when community or partner treasuries pledge to the same causes.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Zap className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Time-Bound Initiatives</h3>
            <p className="text-sm text-muted-foreground">
              Spin up a TimeBoxed Vault for a fixed term (e.g., "STEM Scholarships '26") that sunsets automatically.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Endowment Leaders Choose Octant v2 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why endowment leaders like Sofia choose Octant v2</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Preserve corpus by design</div>
                <div className="text-sm text-muted-foreground">Yield-only distribution logic</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Policy-first controls</div>
                <div className="text-sm text-muted-foreground">Board-approved guardrails baked into smart contracts</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Native accountability</div>
                <div className="text-sm text-muted-foreground">Every allocation and payout verifiable on-chain</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Composable yield sources</div>
                <div className="text-sm text-muted-foreground">Plug into conservative, transparent strategies</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Operational simplicity</div>
                <div className="text-sm text-muted-foreground">Replace manual grant cycles with autonomous flows</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Field Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Stories from the field (demo scenarios)</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Aurora College Endowment</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> fund six programs from yield only</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> one master vault + six tagged streams; quarterly reweights by board vote</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> 0% principal drawdown · 4.2% effective yield · full audit in {'<'} 24 h</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-accent/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Horizon Health Foundation</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> match community giving 1:1 without touching corpus</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> Matching Pool sub-vault triggers automatic matching</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> +38% donor participation · stable yield smoothing</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎯</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Atlas University Scholarships</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> disburse time-bound scholarships with strict use-of-funds</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> TimeBoxed Vault (9 mo) with milestone unlocks</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> zero delays · policy compliance on-chain</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Building Blocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Building blocks (what powers Sofia's workflow)</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Vaults</div>
                <div className="text-xs text-muted-foreground">Separate principal from harvested yield</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Strategy Adapters</div>
                <div className="text-xs text-muted-foreground">Conservative yield sources (staking/LSTs, MM vaults, RWA partners)</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Yield Splitter</div>
                <div className="text-xs text-muted-foreground">Route yield into multiple streams with policies</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Streaming Module</div>
                <div className="text-xs text-muted-foreground">Continuous or scheduled payouts</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Governance Hooks</div>
                <div className="text-xs text-muted-foreground">Link board votes or Snapshot polls to allocation weights</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Compliance & Controls</div>
                <div className="text-xs text-muted-foreground">Hats-style roles, per-recipient caps, pause/resume</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Analytics & Receipts</div>
                <div className="text-xs text-muted-foreground">Real-time dashboards + audit exports</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Powered by Ethereum Banner */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 mb-16">
        <div className="text-center">
          <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Powered by Ethereum (and friends)
          </div>
          <h3 className="text-2xl font-bold mb-4">Neutral rails · Interoperable EVM stack · Programmable value flows · Governance in code</h3>
        </div>
      </Card>

      {/* Dual CTA */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to get started?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-xl font-bold mb-3">Partner with Octant</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Model your policy, map risk bands, select adapters, and simulate seasons.
            </p>
            <Link href="/docs/quickstart">
              <Button size="lg" className="w-full gap-2">
                Partner with Octant <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <h3 className="text-xl font-bold mb-3">Build with Octant</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Try the runnable guide, Foundry templates, and deploy your first Vault in minutes.
            </p>
            <Link href="/docs/tutorials">
              <Button size="lg" variant="outline" className="w-full gap-2">
                Build with Octant <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Card>
        </div>
      </div>

      {/* FAQs */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">FAQs</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How does Octant v2 prevent principal erosion?</AccordionTrigger>
            <AccordionContent>
              Principal and yield are tracked separately; distribution limited to realized yield.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can we keep existing custodians?</AccordionTrigger>
            <AccordionContent>
              Yes — operate via Safe multisig and role registries.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What yield sources are supported?</AccordionTrigger>
            <AccordionContent>
              Staking/LSTs, MM vaults, and approved RWA connectors.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How do we manage volatility?</AccordionTrigger>
            <AccordionContent>
              Diversify adapters, buffer yield, and time-box seasons.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can donors restrict gifts?</AccordionTrigger>
            <AccordionContent>
              Yes — policy-tagged sub-vaults enforce constraints in code.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Can we pause distributions?</AccordionTrigger>
            <AccordionContent>
              Authorized roles can pause streams instantly (on-chain record).
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How do votes influence allocations?</AccordionTrigger>
            <AccordionContent>
              Governance hooks sync Snapshot/Safe results to stream weights.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>What reporting is available for auditors?</AccordionTrigger>
            <AccordionContent>
              Structured receipts (CSV/JSON) and public read-only dashboards.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Code Snippet */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Optional developer snippet (for tutorial)</h2>
        <Card className="p-6 bg-muted/50">
          <pre className="text-sm overflow-x-auto">
            <code>{`// Pseudo-config: Endowment Season Setup (illustrative)
Vault endowment = Vault(deployVault(PRINCIPAL_TOKEN));
endowment.attachAdapter(address(conservativeMMAdapter));
endowment.setPolicy(Policy({
  principalImmutable: true,
  emergencyPauseRole: BOARD_ROLE,
  perRecipientCap: 100_000e18
}));

splitter.configure([
  Stream({recipient: PROGRAM_A, weightBps: 2500}),
  Stream({recipient: PROGRAM_B, weightBps: 2000}),
  Stream({recipient: PROGRAM_C, weightBps: 1500}),
  Stream({recipient: PROGRAM_D, weightBps: 1500}),
  Stream({recipient: PROGRAM_E, weightBps: 1500}),
  Stream({recipient: PROGRAM_F, weightBps: 1000})
]);

season.open(90 days);
season.closeAndExportReceipts();`}</code>
          </pre>
        </Card>
      </section>

      {/* Notes & Disclaimers */}
      <section className="mb-16">
        <Card className="p-6 bg-muted/20 border-muted-foreground/20">
          <h3 className="text-lg font-bold mb-3">Notes & Disclaimers</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Product features may vary by chain and adapter.</li>
            <li>Yield sources carry risk; choose conservative strategies aligned to policy.</li>
            <li>Stories are illustrative tutorial demos.</li>
          </ul>
        </Card>
      </section>
    </UseCasesLayout>
  );
}
