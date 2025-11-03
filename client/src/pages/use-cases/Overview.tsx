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
import { ArrowRight, Shield, Zap, Eye, Blocks } from "lucide-react";
import { Link } from "wouter";

export default function UseCasesOverview() {
  return (
    <UseCasesLayout>
      <div className="space-y-16">
        {/* Hero */}
        <div>
          <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
            Use Cases
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Funding the Future — Three Ways to Power Sustainable Impact with Octant v2
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-8">
            Explore how endowments, foundations, and DAOs use Octant v2 to turn yield into impact — safely, transparently, and programmatically.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90"
              onClick={() => document.getElementById('persona-grid')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Explore Use Cases
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Link href="/docs/getting-started">
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </Link>
          </div>
        </div>

        {/* Metrics Strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">24/7</div>
            <div className="text-sm text-muted-foreground">Programmable funding windows</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">&lt;1s</div>
            <div className="text-sm text-muted-foreground">Allocation updates on major EVM chains</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">0%</div>
            <div className="text-sm text-muted-foreground">Principal erosion (yield-only options)</div>
          </Card>
          <Card className="p-6 text-center bg-gradient-to-br from-accent/5 to-primary/5 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-muted-foreground">On-chain transparency</div>
          </Card>
        </div>

        {/* Introducing */}
        <div>
          <h2 className="text-3xl font-bold mb-6">What Octant v2 unlocks</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Octant v2 turns capital into programmable, policy-first funding streams. You decide the rules; Octant executes them on neutral, transparent rails.
          </p>
        </div>

        {/* Persona Grid */}
        <div id="persona-grid">
          <h2 className="text-3xl font-bold mb-8">Choose Your Path</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/use-cases/endowment-yield-to-impact">
              <Card className="p-8 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group h-full">
                <div className="text-5xl mb-4">🏛</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Endowment Yield-to-Impact
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Preserve principal; stream only yield to programs, scholarships, or research. Policy-first guardrails ensure compliance and clarity.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/use-cases/foundation-streaming-grants">
              <Card className="p-8 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group h-full">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  Foundation Streaming Grants
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Turn static grants into living flows tied to milestones and outcomes, with real-time visibility and fewer manual reports.
                </p>
                <Button variant="link" className="text-accent p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/use-cases/dao-programmable-treasury">
              <Card className="p-8 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group h-full">
                <div className="text-5xl mb-4">⚙️</div>
                <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  DAO Programmable Treasury
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Fund public goods and builders with epoch-based, on-chain allocations powered by protocol yield — no multisig bottlenecks.
                </p>
                <Button variant="link" className="text-primary p-0 h-auto group-hover:translate-x-1 transition-transform">
                  Explore
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>

        {/* Mermaid Diagram */}
        <div>
          <h2 className="text-3xl font-bold mb-6">How It Works</h2>
          <Card className="p-8 bg-muted/30">
            <div className="font-mono text-sm">
              <pre className="overflow-x-auto">
{`┌─────────────────────────────────────────────────────────────────────┐
│                                                                     │
│  Deposit/Connect Assets                                            │
│         │                                                           │
│         ▼                                                           │
│  Yield Adapters (staking, RWA, MM)                                │
│         │                                                           │
│         ▼                                                           │
│  Octant Vault Harvests Yield                                       │
│         │                                                           │
│         ▼                                                           │
│  Governance / Policy Allocations                                   │
│         │                                                           │
│         ▼                                                           │
│  Streams to Programs/Recipients                                    │
│         │                                                           │
│         ▼                                                           │
│  On-chain Transparency & Analytics                                 │
│                                                                     │
└─────────────────────────────────────────────────────────────────────┘`}
              </pre>
            </div>
          </Card>
        </div>

        {/* Benefits Grid */}
        <div>
          <h2 className="text-3xl font-bold mb-8">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Yield-Only Funding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Preserve your principal while streaming only harvested yield to programs and initiatives. Never touch the corpus.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <Zap className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Programmable Allocations</h3>
              <p className="text-muted-foreground leading-relaxed">
                Set policy rules, weights, caps, and time windows. Octant executes automatically according to your governance decisions.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <Eye className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Transparent by Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Every allocation, stream, and policy change is recorded on-chain with immutable audit trails and human-readable receipts.
              </p>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <Blocks className="h-8 w-8 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Composable with DeFi</h3>
              <p className="text-muted-foreground leading-relaxed">
                Integrate with Aave, Morpho, Lido, and other battle-tested protocols. Mix and match yield sources to optimize returns.
              </p>
            </Card>
          </div>
        </div>

        {/* Dual CTA */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/30">
            <h3 className="text-2xl font-bold mb-4">Partner with Octant</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Work with our team to design and deploy a custom funding solution for your organization.
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
              Dive into our documentation and start building your first vault in minutes.
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
                Is Octant v2 custodial?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                No. Policies and execution are on-chain; assets stay in approved vaults/safes under your control.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we fund from yield only?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Configure "yield-only mode" to disburse only harvested yield while preserving principal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                What yield sources are supported?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Staking, money-market vaults, and compliant RWAs via adapters. You approve the set.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                How are allocations decided?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Via governance hooks: committee votes, Snapshot, or policy rules (weights, caps, time windows).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border border-border/40 rounded-lg px-6">
              <AccordionTrigger className="text-left font-semibold hover:no-underline">
                Can we pause or reweight streams?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes. Updates propagate near-instantly according to your governance/policy model.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </UseCasesLayout>
  );
}
