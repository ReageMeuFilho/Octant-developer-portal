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
import { ArrowRight, CheckCircle2, Settings, Shield, TrendingUp, Clock, Users, Zap, Vote } from "lucide-react";

export default function DAOProgrammableTreasury() {
  return (
    <UseCasesLayout>
      {/* Hero Section */}
      <div className="mb-16">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center border border-primary/30">
            <Settings className="h-8 w-8 text-primary" />
          </div>
          <div>
            <Badge variant="outline" className="mb-2">USE CASE</Badge>
            <h1 className="text-4xl font-bold">DAO Programmable Treasury</h1>
          </div>
        </div>
        <p className="text-2xl font-semibold text-foreground mb-4">
          The Intention: Align protocol growth with public impact
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
          <strong className="text-primary">Meet Ravi, Treasury Steward for the Nova Protocol DAO.</strong>
          <br /><br />
          Each epoch, Ravi faces pressure from token holders:
          <br /><br />
          <em>"How do we use our treasury to fund ecosystem growth without dumping tokens or creating politics?"</em>
          <br /><br />
          His intention: design a sustainable, capture-resistant system that channels protocol yield into builders and public goods — automatically, transparently, and governed by the community.
          <br /><br />
          Octant v2 turns that vision into reality by making protocol treasuries programmable — so governance can focus on priorities, not manual distribution.
        </AlertDescription>
      </Alert>

      {/* Proof Points */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6 text-center">Proof points at a glance</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">1 Click</div>
            <div className="text-sm text-muted-foreground">yield-to-PGF allocation</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">0</div>
            <div className="text-sm text-muted-foreground">custodial risk – DAO retains control</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-primary/20">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-sm text-muted-foreground">on-chain governance logic</div>
          </Card>
          <Card className="p-6 text-center bg-card/50 border-accent/20">
            <div className="text-3xl font-bold text-accent mb-2">Cross-chain</div>
            <div className="text-sm text-muted-foreground">ready via modular adapters</div>
          </Card>
        </div>
      </div>

      {/* Introducing Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introducing Octant v2 Programmable Treasury for DAOs</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Ravi sets up a DAO Treasury Vault that connects yield sources (staking, LSTs, stable vaults) to PGF allocations.
          Community votes on funding weights; Octant executes them automatically via hooks — no multisig required.
          <br /><br />
          Every epoch, yield flows to approved builders, research teams, and ecosystem projects — fully visible on-chain.
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
          <h3 className="text-xl font-bold mb-6 text-center">DAO Treasury Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">🏦</span>
              </div>
              <div className="font-semibold mb-1">DAO Treasury Vault</div>
              <div className="text-xs text-muted-foreground">Protocol assets + yield sources</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">🗳️</span>
              </div>
              <div className="font-semibold mb-1">Community Votes</div>
              <div className="text-xs text-muted-foreground">Snapshot/on-chain governance</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">⚡</span>
              </div>
              <div className="font-semibold mb-1">Epoch Manager</div>
              <div className="text-xs text-muted-foreground">Auto-execute allocations</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">🚀</span>
              </div>
              <div className="font-semibold mb-1">Builders & Projects</div>
              <div className="text-xs text-muted-foreground">Continuous funding</div>
            </div>
          </div>
        </Card>
      </section>

      {/* Designed for Decentralized Ecosystem Funding */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Designed for decentralized ecosystem funding</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Epoch-Based Allocations</h3>
            <p className="text-sm text-muted-foreground">
              Distribute yield each epoch to voted projects; weights auto-reset on next round.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Vote className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Quadratic Voting Integration</h3>
            <p className="text-sm text-muted-foreground">
              Plug Octant's allocation mechanism into community voting modules.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Users className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Multi-Vault Treasury</h3>
            <p className="text-sm text-muted-foreground">
              Segment strategic, operational, and PGF funds for clear accountability.
            </p>
          </Card>

          <Card className="p-6 bg-card/50">
            <Shield className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">On-Chain Transparency</h3>
            <p className="text-sm text-muted-foreground">
              Every vote, allocation, and payout recorded immutably.
            </p>
          </Card>
        </div>
      </section>

      {/* Why DAOs Choose Octant v2 */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Why DAOs like Ravi's choose Octant v2</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Sustainability</div>
                <div className="text-sm text-muted-foreground">Distribute yield, not principal or emissions</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Capture-resistance</div>
                <div className="text-sm text-muted-foreground">Neutral mechanisms, not manual decisions</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Automation</div>
                <div className="text-sm text-muted-foreground">Epoch logic handles finalization and payouts</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Governance Synergy</div>
                <div className="text-sm text-muted-foreground">Snapshot, Safe, or custom on-chain votes plug directly in</div>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
              <div>
                <div className="font-semibold mb-1">Composability</div>
                <div className="text-sm text-muted-foreground">Integrates with Superfluid, Gitcoin, or other PGF platforms</div>
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
                <span className="text-2xl">🏛️</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Nova Protocol DAO</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> redirect treasury yield to public goods</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> DAO Vault + Quadratic Voting hook + streaming module</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> 90% less admin time · every payout verifiable · zero token dump impact</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-accent/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏗️</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Atlas L2 Builders Fund</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> reward ecosystem developers with sustainable flows</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> Epoch allocations + governance vote sync via Snapshot</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> predictable monthly rewards · 0 missed payouts</span>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🌐</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Orbit Public Goods Collective</h3>
              </div>
            </div>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-semibold text-primary">Intention:</span>
                <span className="text-muted-foreground"> coordinate multi-DAO funding of shared infra</span>
              </div>
              <div>
                <span className="font-semibold text-accent">Setup:</span>
                <span className="text-muted-foreground"> cross-DAO vault federation via shared policy hooks</span>
              </div>
              <div>
                <span className="font-semibold text-primary">Outcome:</span>
                <span className="text-muted-foreground"> transparent funding of 6 infra projects across 3 DAOs</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Building Blocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Building blocks that power Ravi's DAO</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Vaults</div>
                <div className="text-xs text-muted-foreground">Core treasury modules that harvest yield and isolate principal</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Governance Hooks</div>
                <div className="text-xs text-muted-foreground">Plug community votes into allocation weights</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Epoch Manager</div>
                <div className="text-xs text-muted-foreground">Handles vote finalization and timelock for payouts</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Streaming Module</div>
                <div className="text-xs text-muted-foreground">Ongoing builder payouts with on-chain visibility</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Quorum & Finalization Guards</div>
                <div className="text-xs text-muted-foreground">Ensure fair tallying and timelocks</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Transparency Layer</div>
                <div className="text-xs text-muted-foreground">Public dashboards and receipt exports</div>
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
          <h3 className="text-2xl font-bold mb-4">Open rails · Immutable governance · Programmable money · Composability with PGF ecosystem</h3>
        </div>
      </Card>

      {/* Dual CTA */}
      <div className="mb-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Ready to get started?</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <h3 className="text-xl font-bold mb-3">Partner with Octant</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Let our team help design your DAO's PGF policy and run a pilot vault.
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
              Access the tutorial and Foundry mix to deploy a programmable treasury within minutes.
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
            <AccordionTrigger>How is Octant different from a multisig treasury?</AccordionTrigger>
            <AccordionContent>
              Policy and execution are encoded on-chain; no manual signing needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can our DAO choose which yield strategies to use?</AccordionTrigger>
            <AccordionContent>
              Yes — swap adapters anytime based on risk appetite and governance votes.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>How are allocations decided?</AccordionTrigger>
            <AccordionContent>
              Via voting hooks (Snapshot, on-chain modules) that update weights automatically.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>Can builders track their funding?</AccordionTrigger>
            <AccordionContent>
              Yes — public dashboards show stream status and audit records.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>Is cross-DAO funding possible?</AccordionTrigger>
            <AccordionContent>
              Yes — Vaults can be federated or mirrored across DAOs via shared policies.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>What happens if governance fails to finalize a round?</AccordionTrigger>
            <AccordionContent>
              The Epoch Manager can auto-finalize using fallback rules or roll funds forward.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Code Snippet */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Optional developer snippet</h2>
        <Card className="p-6 bg-muted/50">
          <pre className="text-sm overflow-x-auto">
            <code>{`Vault daoVault = Vault(deployVault(BASE_TOKEN));
daoVault.attachAdapter(address(yieldAdapter));
daoVault.setGovernanceHook(address(quadraticVotingHook));

epochManager.createEpoch({
  duration: 30 days,
  quorum: 20_000,
  gracePeriod: 7 days
});`}</code>
          </pre>
        </Card>
      </section>

      {/* Notes & Disclaimers */}
      <section className="mb-16">
        <Card className="p-6 bg-muted/20 border-muted-foreground/20">
          <h3 className="text-lg font-bold mb-3">Notes & Disclaimers</h3>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside">
            <li>Features may vary by DAO and chain.</li>
            <li>Yield strategies carry risk; select governance-approved adapters.</li>
            <li>Demo stories are illustrative for the tutorial.</li>
          </ul>
        </Card>
      </section>
    </UseCasesLayout>
  );
}
