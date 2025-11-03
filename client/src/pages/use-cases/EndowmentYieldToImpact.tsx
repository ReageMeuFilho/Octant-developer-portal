import UseCasesLayout from "@/components/UseCasesLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Shield, Lock, TrendingUp, FileCheck, Zap, Settings } from "lucide-react";
import { Link } from "wouter";

export default function EndowmentYieldToImpact() {
  return (
    <UseCasesLayout>
      <div className="space-y-16">
        {/* Hero */}
        <div>
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Use Case
          </Badge>
          <div className="text-5xl mb-6">🏛</div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Endowment Yield-to-Impact
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Preserve principal. Stream only yield — continuously or seasonally — with policy-first safeguards and total transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="mailto:contact@octant.build">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Partner with Octant
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
            <Link href="/docs/getting-started">
              <Button size="lg" variant="outline">
                View Docs
              </Button>
            </Link>
          </div>
        </div>

        {/* Proof Points */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Principal erosion (yield-only disbursements)</div>
          </Card>
          <Card className="p-6 text-center bg-accent/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">24/7/365</div>
            <div className="text-sm text-muted-foreground">Programmable windows</div>
          </Card>
          <Card className="p-6 text-center bg-primary/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">&lt;1s</div>
            <div className="text-sm text-muted-foreground">Allocation updates</div>
          </Card>
          <Card className="p-6 text-center bg-accent/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-chain audit trail</div>
          </Card>
        </div>

        {/* Persona Story */}
        <div>
          <h2 className="text-3xl font-bold mb-6">The Intention: Fund a mission forever — without ever touching principal</h2>
          <Card className="p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <p className="text-lg text-foreground/90 leading-relaxed">
              Meet <strong>Sofia</strong>, CIO of a university endowment. Her mandate: protect the corpus and fund programs. With Octant v2, Sofia streams only the harvested yield to scholarships, research, and operations — with donor-restricted sub-vaults, compliance rules, and real-time reporting to the board.
            </p>
          </Card>
        </div>

        {/* Introducing */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Octant v2 Vault Network for Endowments</h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Aggregate assets into an endowment Vault with approved yield adapters (staking, MM, RWA notes). Octant harvests yield, splits it by policy, and streams it to program buckets (scholarships, research, operations). Principal is never disbursed when yield-only mode is enabled.
          </p>
          
          <Card className="p-8 bg-muted/30">
            <h3 className="text-xl font-bold mb-4">Endowment Vault Flow</h3>
            <div className="font-mono text-sm">
              <pre className="overflow-x-auto">
{`┌───────────────────────────────────────────────────────────────┐
│                                                               │
│  Endowment Principal                                          │
│         │                                                     │
│         ▼                                                     │
│  Invest via Policy → Yield Adapters                          │
│         │                                                     │
│         ▼                                                     │
│  Harvested Yield                                             │
│         │                                                     │
│         ▼                                                     │
│  Policy Splitter                                             │
│         ├─────────────┬──────────────┬──────────────┐       │
│         ▼             ▼              ▼              ▼        │
│  Scholarships    Research      Operations      Reserves      │
│                                                               │
└───────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </Card>
        </div>

        {/* Designed For */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Designed for Real Endowment Workflows</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Recurring Program Funding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set quarter/annual seasons with auto-rollover. Programs receive predictable funding without manual intervention.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Donor-Restricted Streams</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tag gifts and enforce spend constraints. Ensure donor intent is honored with on-chain policy enforcement.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Co-Funding Rounds</h3>
              <p className="text-muted-foreground leading-relaxed">
                Automatic matching with partner vaults. Coordinate funding initiatives across multiple endowments.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Time-Bound Initiatives</h3>
              <p className="text-muted-foreground leading-relaxed">
                Spin up TimeBoxed Vaults that sunset automatically. Perfect for special projects with defined end dates.
              </p>
            </Card>

            <Card className="p-6">
              <h3 className="text-xl font-bold mb-3">Board-Ready Reports</h3>
              <p className="text-muted-foreground leading-relaxed">
                On-chain receipts with human-readable exports. Generate compliance reports automatically for board meetings.
              </p>
            </Card>
          </div>
        </div>

        {/* Why Choose */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Why Endowment Leaders Choose Octant v2</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <Lock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Corpus Preservation by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Yield-only mode ensures principal is never touched. Smart contract enforcement provides mathematical certainty.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <Shield className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Policy-First Controls</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set caps, weights, whitelist, and time windows. Every disbursement follows your governance rules.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <FileCheck className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Transparent Receipts</h3>
              <p className="text-muted-foreground leading-relaxed">
                Immutable, verifiable records for every transaction. Audit trails that satisfy the most rigorous compliance requirements.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <TrendingUp className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Composable Yield Sources</h3>
              <p className="text-muted-foreground leading-relaxed">
                Mix staking, money markets, and RWAs. Diversify yield sources while maintaining unified governance.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <Zap className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Operational Simplicity</h3>
              <p className="text-muted-foreground leading-relaxed">
                Fewer wires, fewer manual approvals. Automate routine disbursements while maintaining full control.
              </p>
            </Card>
          </div>
        </div>

        {/* Stories from the Field */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Stories from the Field</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-3">Aurora College Endowment</h3>
              <p className="text-muted-foreground leading-relaxed">
                Six programs funded from yield only; board exports auto-generated quarterly.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/5 to-primary/5">
              <h3 className="text-xl font-bold mb-3">Horizon Health Foundation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Donor-restricted oncology fund; compliant streaming to partner hospitals.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/5 to-accent/5">
              <h3 className="text-xl font-bold mb-3">Atlas University Scholarships</h3>
              <p className="text-muted-foreground leading-relaxed">
                Time-boxed STEM '26 vault; sunsets & archives on schedule.
              </p>
            </Card>
          </div>
        </div>

        {/* Building Blocks */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Building Blocks</h2>
          <Card className="p-8 bg-muted/30">
            <div className="flex flex-wrap gap-3">
              {[
                "Vaults",
                "Strategy/Adapter Registry",
                "Yield Splitter",
                "Streaming Module",
                "Compliance/Policy Hooks",
                "Governance Hooks (committee/Snapshot)",
                "Analytics & Receipts"
              ].map((block) => (
                <Badge key={block} variant="outline" className="text-sm px-4 py-2">
                  {block}
                </Badge>
              ))}
            </div>
          </Card>
        </div>

        {/* Powered by Ethereum */}
        <Card className="p-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 border-primary/30 text-center">
          <h3 className="text-2xl font-bold mb-3">Powered by Ethereum</h3>
          <p className="text-lg text-muted-foreground">
            Neutral rails • Global settlement • Programmable governance
          </p>
        </Card>

        {/* Dual CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h3 className="text-2xl font-bold mb-4">Partner with Octant</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Work with our team to design a custom endowment solution tailored to your governance requirements.
            </p>
            <a href="mailto:contact@octant.build">
              <Button size="lg" className="bg-primary hover:bg-primary/90 w-full">
                Get in Touch
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/30">
            <h3 className="text-2xl font-bold mb-4">Start Building</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Explore our technical documentation and deploy your first yield-only vault.
            </p>
            <Link href="/docs/getting-started">
              <Button size="lg" variant="outline" className="w-full border-accent/30 hover:bg-accent/10">
                View Documentation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </Card>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we require dual approvals for policy changes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Configure multi-step governance hooks (committee + snapshot) before changes execute.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How do donor restrictions work?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Use tagged sub-vaults with policy enforcers that validate spend categories and geography.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we blend ETH staking and RWA yield?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Approve multiple adapters and set max weights/risk envelopes per policy.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What happens in volatile markets?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Policies can buffer yield (reserves) before streaming; principal is never touched in yield-only mode.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we export audits for the board?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Generate human-readable receipts from on-chain data, including allocation diffs and program outcomes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we time-box initiatives?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. TimeBoxed Vaults with start/end date; auto-sunset and archive.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Do we need custody changes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No. Integrate with existing Safes; Octant executes policy logic via on-chain hooks.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What if a recipient loses eligibility?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Pause or reweight streams immediately; changes are auditable.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How do we simulate policy changes?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Dry-run mode shows expected streams and receipts before execution.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Is KYC/AML supported where needed?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Integrate compliance gates at vault entry and recipient whitelists at stream creation.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Developer Snippet */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Developer Snippet</h2>
          <Card className="p-6 bg-muted/50">
            <pre className="text-sm font-mono overflow-x-auto">
{`// Pseudocode: endowment yield-only policy
Vault endowment = Vault(deployVault(PRINCIPAL_TOKEN));
endowment.approveAdapter(address(ethStakingAdapter), 0.6e18);
endowment.approveAdapter(address(rwaNoteAdapter), 0.4e18);
endowment.setPolicy(
  Policy({
    yieldOnly: true,
    weights: [
      {bucket: "Scholarships", bps: 4000},
      {bucket: "Research", bps: 3500},
      {bucket: "Operations", bps: 2000},
      {bucket: "Reserves", bps: 500}
    ],
    caps: [{bucket:"Operations", maxPerEpoch: 50_000e6}],
    approvals: ["CommitteeMultisig", "SnapshotSignal"],
    timeWindows: [{start: Q1_START, end: Q1_END}]
  })
);`}
            </pre>
          </Card>
        </div>
      </div>
    </UseCasesLayout>
  );
}
