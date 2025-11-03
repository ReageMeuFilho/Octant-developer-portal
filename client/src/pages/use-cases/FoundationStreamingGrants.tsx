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
import { ArrowRight, CheckCircle2, Droplet, Clock, Shield, Zap } from "lucide-react";

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
        <p className="text-xl text-muted-foreground mb-8">
          Automate milestone-based funding flows with programmable grant disbursements, 
          real-time verification, and transparent capital allocation for grantees.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link href="/docs/quickstart">
            <Button size="lg" className="gap-2">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Link href="/docs">
            <Button size="lg" variant="outline">
              View Docs
            </Button>
          </Link>
        </div>
      </div>

      {/* Proof Points */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
        <Card className="p-6 text-center bg-card/50 border-primary/20">
          <div className="text-3xl font-bold text-primary mb-2">Real-time</div>
          <div className="text-sm text-muted-foreground">Milestone verification</div>
        </Card>
        <Card className="p-6 text-center bg-card/50 border-accent/20">
          <div className="text-3xl font-bold text-accent mb-2">Multi-donor</div>
          <div className="text-sm text-muted-foreground">Pooled funding</div>
        </Card>
        <Card className="p-6 text-center bg-card/50 border-primary/20">
          <div className="text-3xl font-bold text-primary mb-2">Automated</div>
          <div className="text-sm text-muted-foreground">Disbursement logic</div>
        </Card>
        <Card className="p-6 text-center bg-card/50 border-accent/20">
          <div className="text-3xl font-bold text-accent mb-2">100%</div>
          <div className="text-sm text-muted-foreground">On-chain transparency</div>
        </Card>
      </div>

      {/* Persona Story */}
      <Alert className="mb-16 bg-primary/5 border-primary/20">
        <AlertDescription className="text-base">
          <strong className="text-primary">Foundation Program Manager:</strong> "We fund 50+ projects annually, 
          but tracking milestones across spreadsheets is error-prone. Octant v2 lets us automate grant disbursements 
          based on verified milestones—funds flow automatically when deliverables are met, reducing admin overhead by 80%."
        </AlertDescription>
      </Alert>

      {/* Introducing Section with Visual Diagram */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Introducing Foundation Streaming Grants</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Traditional grant programs suffer from manual milestone tracking, delayed disbursements, and limited transparency. 
          Octant v2's Foundation Streaming Grants use case automates the entire grant lifecycle—from multi-donor pooling 
          to milestone-based releases—with programmable vaults and allocation mechanisms.
        </p>
        
        {/* Visual Flow Diagram */}
        <Card className="p-8 bg-gradient-to-br from-background to-accent/5 border-primary/20 mb-8">
          <h3 className="text-xl font-bold mb-6 text-center">Grant Streaming Flow</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">💰</span>
              </div>
              <div className="font-semibold mb-1">Multi-Donor Pool</div>
              <div className="text-xs text-muted-foreground">Foundations contribute to shared vault</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">📋</span>
              </div>
              <div className="font-semibold mb-1">Milestone Setup</div>
              <div className="text-xs text-muted-foreground">Define deliverables & unlock conditions</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center mb-3 border-2 border-primary">
                <span className="text-3xl">✅</span>
              </div>
              <div className="font-semibold mb-1">Verification</div>
              <div className="text-xs text-muted-foreground">Oracle or DAO confirms completion</div>
            </div>
            <ArrowRight className="h-6 w-6 text-muted-foreground rotate-90 md:rotate-0" />
            <div className="flex flex-col items-center text-center flex-1">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-3 border-2 border-accent">
                <span className="text-3xl">💸</span>
              </div>
              <div className="font-semibold mb-1">Auto-Disbursement</div>
              <div className="text-xs text-muted-foreground">Funds stream to grantee wallet</div>
            </div>
          </div>
        </Card>
      </section>

      {/* How It Works - Workflows */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">How It Works</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">1</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Create Multi-Donor Vault</h3>
                <p className="text-sm text-muted-foreground">
                  Multiple foundations deposit stablecoins into a shared Octant vault. Funds earn yield via Aave/Morpho 
                  while locked, maximizing capital efficiency.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-accent">2</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Define Milestones</h3>
                <p className="text-sm text-muted-foreground">
                  Set up milestone-based allocation rules: "Release 25% upon prototype demo, 50% upon testnet launch, 
                  25% upon mainnet deployment."
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-primary">3</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Verify & Unlock</h3>
                <p className="text-sm text-muted-foreground">
                  Grantees submit proof of milestone completion. Foundation DAO or trusted oracle verifies and triggers unlock.
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xl font-bold text-accent">4</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Stream Funds</h3>
                <p className="text-sm text-muted-foreground">
                  Allocation mechanism automatically streams unlocked funds to grantee wallet over defined period 
                  (e.g., 30 days) for predictable cash flow.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Benefits</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <Clock className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Automated Disbursements</h3>
            <p className="text-sm text-muted-foreground">
              Eliminate manual payment processing. Funds flow automatically upon milestone verification, reducing admin time by 80%.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-transparent border-accent/20">
            <Shield className="h-10 w-10 text-accent mb-4" />
            <h3 className="font-bold mb-2">Risk Mitigation</h3>
            <p className="text-sm text-muted-foreground">
              Milestone-based releases ensure grantees deliver before receiving full funding. Reduces risk of non-performance.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-primary/10 to-transparent border-primary/20">
            <Zap className="h-10 w-10 text-primary mb-4" />
            <h3 className="font-bold mb-2">Capital Efficiency</h3>
            <p className="text-sm text-muted-foreground">
              Pooled funds earn yield while locked. Multi-donor coordination reduces overhead and maximizes impact per dollar.
            </p>
          </Card>
        </div>
      </section>

      {/* Field Stories */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Field Stories</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-card/50 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🏛</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Ethereum Foundation Grants</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "We manage 200+ grants annually. Octant v2's milestone-based streaming cut our admin workload in half 
                  while improving grantee accountability. Real-time dashboards give us instant visibility into all active grants."
                </p>
                <Badge variant="outline">Foundation</Badge>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-card/50 border-accent/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                <span className="text-2xl">🚀</span>
              </div>
              <div>
                <h3 className="font-bold mb-2">Open-Source Accelerator</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  "Our cohort of 20 startups receives staged funding based on demo days. Octant v2 automated the entire flow—
                  judges vote on-chain, and funds unlock instantly. Participants love the transparency."
                </p>
                <Badge variant="outline">Accelerator</Badge>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Building Blocks */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Building Blocks</h2>
        <p className="text-lg text-muted-foreground mb-6">
          Foundation Streaming Grants leverage these Octant v2 components:
        </p>
        <div className="grid md:grid-cols-2 gap-4">
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Funding Vaults</div>
                <div className="text-xs text-muted-foreground">Multi-donor stablecoin pools with yield generation</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Allocation Mechanisms</div>
                <div className="text-xs text-muted-foreground">Milestone-based unlock logic with verification hooks</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-primary/5 border-primary/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <div>
                <div className="font-semibold">Payment Splitter</div>
                <div className="text-xs text-muted-foreground">Stream funds to multiple grantees simultaneously</div>
              </div>
            </div>
          </Card>
          <Card className="p-4 bg-accent/5 border-accent/20">
            <div className="flex items-center gap-3">
              <CheckCircle2 className="h-5 w-5 text-accent" />
              <div>
                <div className="font-semibold">Safe Integration</div>
                <div className="text-xs text-muted-foreground">Multi-sig governance for milestone approval</div>
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
          <h3 className="text-2xl font-bold mb-4">Built on the world's most secure smart contract platform</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Octant v2 leverages Ethereum's battle-tested security, composability with leading DeFi protocols 
            (Aave, Morpho, Lido), and transparent execution for trustless grant management.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="outline" className="text-sm">Ethereum Mainnet</Badge>
            <Badge variant="outline" className="text-sm">Arbitrum</Badge>
            <Badge variant="outline" className="text-sm">Optimism</Badge>
            <Badge variant="outline" className="text-sm">Base</Badge>
          </div>
        </div>
      </Card>

      {/* Dual CTA */}
      <div className="grid md:grid-cols-2 gap-6 mb-16">
        <Card className="p-8 bg-gradient-to-br from-primary/10 to-transparent border-primary/20 text-center">
          <h3 className="text-xl font-bold mb-3">Ready to Automate Your Grants?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Deploy your first milestone-based grant vault in under 10 minutes
          </p>
          <Link href="/docs/quickstart">
            <Button size="lg" className="w-full gap-2">
              Start Building <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-accent/10 to-transparent border-accent/20 text-center">
          <h3 className="text-xl font-bold mb-3">Need Custom Integration?</h3>
          <p className="text-sm text-muted-foreground mb-6">
            Our team can help design bespoke grant workflows for your foundation
          </p>
          <Link href="/docs/resources/community">
            <Button size="lg" variant="outline" className="w-full gap-2">
              Contact Us <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </div>

      {/* Comprehensive FAQ */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>How do we verify milestone completion?</AccordionTrigger>
            <AccordionContent>
              Milestone verification can be done through: (1) Foundation DAO multi-sig approval via Safe, 
              (2) Trusted oracle services (Chainlink, UMA), or (3) Automated on-chain checks (e.g., contract deployment verification). 
              The verification method is configurable per milestone.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-2">
            <AccordionTrigger>Can multiple foundations pool funds for a single grant?</AccordionTrigger>
            <AccordionContent>
              Yes! Octant v2's multi-donor vaults allow multiple foundations to contribute to a shared pool. 
              Each donor retains visibility into fund usage and can set individual allocation preferences.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-3">
            <AccordionTrigger>What happens if a grantee fails to meet a milestone?</AccordionTrigger>
            <AccordionContent>
              If a milestone isn't verified within the defined timeframe, funds remain locked in the vault. 
              Foundation governance can vote to: (1) Extend the deadline, (2) Reallocate funds to other grantees, 
              or (3) Return funds to donors. All actions are transparent and auditable on-chain.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-4">
            <AccordionTrigger>How are funds streamed to grantees?</AccordionTrigger>
            <AccordionContent>
              Once a milestone is verified, Octant v2's allocation mechanism streams the unlocked amount to the grantee's 
              wallet over a defined period (e.g., 30 days). This provides predictable cash flow while maintaining capital 
              efficiency. Grantees can withdraw accrued funds at any time.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-5">
            <AccordionTrigger>What stablecoins are supported?</AccordionTrigger>
            <AccordionContent>
              Octant v2 supports USDC, DAI, USDT, and other ERC-20 stablecoins. Vaults can hold multiple stablecoins 
              simultaneously, and allocation mechanisms handle automatic conversion if needed.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-6">
            <AccordionTrigger>Can we customize the milestone structure?</AccordionTrigger>
            <AccordionContent>
              Absolutely. Milestones are fully customizable—define any number of stages, unlock percentages, verification methods, 
              and streaming durations. You can even create conditional logic (e.g., "unlock 50% if KPI {'>'} X, else 25%").
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-7">
            <AccordionTrigger>How do we track active grants?</AccordionTrigger>
            <AccordionContent>
              Octant v2 provides real-time dashboards showing all active grants, milestone status, disbursement history, 
              and remaining balances. All data is pulled directly from on-chain state for 100% accuracy.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-8">
            <AccordionTrigger>What are the gas costs?</AccordionTrigger>
            <AccordionContent>
              Initial vault setup costs ~$50-100 in gas (one-time). Milestone verifications cost ~$10-20 each. 
              Streaming is gas-efficient—grantees pay gas only when withdrawing, not during accrual. 
              Deploy on L2s (Arbitrum, Optimism) to reduce costs by 90%.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-9">
            <AccordionTrigger>Can grantees receive funds in different tokens?</AccordionTrigger>
            <AccordionContent>
              Yes. While vaults hold stablecoins, allocation mechanisms can integrate with DEX aggregators (1inch, Paraswap) 
              to automatically swap to grantee's preferred token upon disbursement.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="item-10">
            <AccordionTrigger>Is there a minimum grant size?</AccordionTrigger>
            <AccordionContent>
              No minimum, but we recommend grants of $5,000+ to justify gas costs. For smaller grants, consider batching 
              multiple recipients into a single vault or deploying on L2s for lower fees.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>

      {/* Code Snippet */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Quick Start Code</h2>
        <Card className="p-6 bg-muted/50">
          <pre className="text-sm overflow-x-auto">
            <code>{`// Deploy milestone-based grant vault
const vault = await octant.createVault({
  donors: [foundation1, foundation2],
  stablecoin: "USDC",
  strategy: "aave-v3",
});

// Define milestones
await vault.setMilestones([
  {'{ name: "Prototype", unlock: 25, verifier: foundationDAO }'},
  {'{ name: "Testnet", unlock: 50, verifier: foundationDAO }'},
  {'{ name: "Mainnet", unlock: 25, verifier: foundationDAO }'},
]);

// Grantee submits proof
await vault.submitProof(milestoneId, proofURI);

// Foundation verifies & unlocks
await foundationDAO.verifyMilestone(milestoneId);

// Funds stream automatically to grantee
`}</code>
          </pre>
        </Card>
      </section>
    </UseCasesLayout>
  );
}
