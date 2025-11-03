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
import { ArrowRight, CheckCircle2, Droplet, Clock, Shield, Zap, Users, TrendingUp } from "lucide-react";

export default function FoundationStreamingGrants() {
  return (
    <UseCasesLayout>
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center border border-blue-500/30">
            <Droplet className="h-8 w-8 text-blue-400" />
          </div>
          <div>
            <Badge variant="outline" className="mb-2">USE CASE</Badge>
            <h1 className="text-4xl font-bold">Foundation Streaming Grants</h1>
          </div>
        </div>
        <p className="text-2xl font-semibold text-foreground mb-4">
          The Intention: Fund programs continuously, transparently, and without operational drag
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
          <strong className="text-primary">Meet Daniel, Program Director at the Horizon Global Foundation.</strong>
          <br /><br />
          Every quarter, Daniel faces the same frustration:
          <br /><br />
          <em>"Our grants take months to process. Funds sit idle in accounts. Reporting comes in late, and I can't see impact in real time."</em>
          <br /><br />
          Daniel's intention is simple: create a living, breathing funding stream that delivers steady support to grantees, 
          gives donors transparency, and eliminates back-office friction.
          <br /><br />
          With Octant v2, Daniel turns one-off grants into programmable, auditable streaming disbursements — 
          directly from yield-powered vaults governed by his foundation's policies.
        </AlertDescription>
      </Alert>

      {/* Proof Points */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Proof points at a glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">Transparency on all flows</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">{'<'}1s</div>
            <div className="text-sm text-muted-foreground">Updates and live dashboards</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">0</div>
            <div className="text-sm text-muted-foreground">Manual reports—auto-receipts for auditors</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">Always-on</div>
            <div className="text-sm text-muted-foreground">Funding via yield streams</div>
          </Card>
        </div>
      </div>

      {/* Introducing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introducing Octant v2 Streaming Grants Vault</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Daniel's team creates a Grant Vault that harvests yield from invested assets and continuously routes it to approved projects. 
          Instead of lump-sum disbursements, each project receives a steady stream that can be paused, re-weighted, or expanded by governance vote.
          <br /><br />
          Every recipient wallet, payout, and report is on-chain and instantly auditable.
        </p>
        
        <div className="flex flex-wrap gap-4 mb-8">
          <Link href="/docs/tutorials">
            <Button size="lg" className="gap-2">
              Discover Streaming Grants <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline">
              Read the Grant Mechanism White Paper
            </Button>
          </Link>
        </div>

        {/* Visual Flow Diagram */}
        <Card className="p-8 bg-gradient-to-br from-background to-accent/5 border-primary/20">
          <h3 className="text-xl font-bold mb-6 text-center">Grant Streaming Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">🏦</span>
              </div>
              <div className="font-semibold mb-1">Grant Vault</div>
              <div className="text-xs text-muted-foreground">Store principal, harvest yield</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">💧</span>
              </div>
              <div className="font-semibold mb-1">Streaming Module</div>
              <div className="text-xs text-muted-foreground">Continuous disbursement</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">⚖️</span>
              </div>
              <div className="font-semibold mb-1">Policy Hooks</div>
              <div className="text-xs text-muted-foreground">Compliance enforcement</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">📊</span>
              </div>
              <div className="font-semibold mb-1">Analytics Layer</div>
              <div className="text-xs text-muted-foreground">Impact dashboards</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Designed for Foundation Operations */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Designed for foundation operations</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Continuous Program Support</h3>
            <p className="text-sm text-muted-foreground">
              Replace annual lump-sums with perpetual micro-flows. Adjust pacing instantly based on results.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <CheckCircle2 className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Milestone-Based Unlocks</h3>
            <p className="text-sm text-muted-foreground">
              Attach funding cliffs to deliverables. Octant releases yield only when milestones are verified.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Multi-Donor Pools</h3>
            <p className="text-sm text-muted-foreground">
              Aggregate yield from multiple donors into a shared vault. Each donor retains visibility into impact attribution.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Shield className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Policy Compliance in Code</h3>
            <p className="text-sm text-muted-foreground">
              KYC/KYB rules, sector caps, regional restrictions, and ESG filters enforced automatically by policy hooks.
            </p>
          </Card>
        </div>
      </section>

      {/* Why Foundations Choose Octant v2 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why foundations like Daniel's choose Octant v2</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Mission continuity</div>
                <div className="text-sm text-muted-foreground">Grantees receive stable, predictable flows</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Radical transparency</div>
                <div className="text-sm text-muted-foreground">Real-time dashboards replace PDF reports</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Built-in governance</div>
                <div className="text-sm text-muted-foreground">Committees can vote to pause or re-weight allocations</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Administrative efficiency</div>
                <div className="text-sm text-muted-foreground">No more wire batching or reconciliation headaches</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Impact accountability</div>
                <div className="text-sm text-muted-foreground">Funding tied to milestones, not promises</div>
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
                <span className="text-2xl">🌱</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">ReGen Climate Initiative</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> drip-fund climate projects with milestone checks</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> streaming vault + milestone hook tied to oracles</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> 97% on-time deliverables, 0 manual reviews</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-accent/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏥</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Care Network Fund</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> pool yield from family foundations to fund health clinics</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> multi-donor vault with transparent splits and dashboards</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> 12 donors onboarded, unified impact reports, no accounting disputes</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">EduAccess Grants</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> provide real-time scholarship support for students abroad</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> continuous yield stream with country compliance filter</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> 200 students funded / 24 countries / 100% audit pass</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Building Blocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Building blocks that power Daniel's foundation</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Vaults</div>
                <div className="text-xs text-muted-foreground">Store principal, harvest yield, enforce grant policies</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Streaming Module</div>
                <div className="text-xs text-muted-foreground">Continuous or milestone-based disbursement</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Policy Hooks</div>
                <div className="text-xs text-muted-foreground">Compliance, region, and ESG enforcement</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Governance Hooks</div>
                <div className="text-xs text-muted-foreground">Committee votes auto-update stream weights</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Analytics Layer</div>
                <div className="text-xs text-muted-foreground">Impact dashboards + donor attribution</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Receipt Engine</div>
                <div className="text-xs text-muted-foreground">Per-recipient proofs for auditors</div>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Powered by Ethereum Banner */}
      <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/20 mb-16">
        <div className="text-center">
          <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-2">
            Powered by Ethereum
          </div>
          <h3 className="text-2xl font-bold mb-4">Neutral rails · Transparent execution · Smart governance · Global reach</h3>
        </div>
      </Card>

      {/* Dual CTA */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to get started?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-xl font-bold mb-3">Partner with Octant</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Map your current grant workflows, model your policies, and deploy a pilot vault in days.
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
              Use our Foundry templates and example configs to stand up a streaming grant system for your foundation.
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
            <AccordionTrigger>How are streams funded?</AccordionTrigger>
            <AccordionContent>
              From yield harvested by the vault; principal remains untouched.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can we mix fiat donations and on-chain assets?</AccordionTrigger>
            <AccordionContent>
              Yes — off-chain fiat can be tokenized via trusted custodians and deposited into the vault.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How do we ensure regulatory compliance?</AccordionTrigger>
            <AccordionContent>
              Policy hooks enforce KYC/KYB and jurisdiction rules in code.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Can grantees see their funding status?</AccordionTrigger>
            <AccordionContent>
              Yes — each recipient has a real-time dashboard with stream data.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Can funders pause or redirect flows?</AccordionTrigger>
            <AccordionContent>
              Yes — authorized roles or governance votes can reweight streams instantly.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What chains are supported?</AccordionTrigger>
            <AccordionContent>
              Any EVM chain with supported adapters and policy modules.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Code Snippet */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Optional developer snippet</h2>
        <Card className="p-6 bg-muted/50">
          <pre className="text-sm overflow-x-auto">
            <code>{`Vault grants = Vault(deployVault(BASE_TOKEN));
grants.attachAdapter(address(stableYieldAdapter));
grants.setPolicy(Policy({
  principalImmutable: true,
  roleApprovals: COMMITTEE_ROLE
}));

streamer.create({
  recipient: PROJECT_A,
  weightBps: 5000,
  milestoneOracle: address(verifier)
});`}</code>
          </pre>
        </Card>
      </section>
    </UseCasesLayout>
  );
}
