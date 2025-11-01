import DocsLayout from "@/components/DocsLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowRight, 
  Zap, 
  Wallet, 
  Code2, 
  Blocks,
  BookOpen,
  Rocket,
  FileCode,
  HelpCircle
} from "lucide-react";
import { Link } from "wouter";

export default function Docs() {
  return (
    <DocsLayout>
      <div className="space-y-12">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Documentation
          </Badge>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Octant v2 Developer Portal
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Build sustainable funding infrastructure for Web3 ecosystems. Octant v2 transforms treasury assets into continuous funding streams while preserving principal through battle-tested DeFi strategies.
          </p>
        </div>

        {/* Quick Start Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/30 transition-colors">
                <Rocket className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Quickstart Guide</h3>
                <p className="text-muted-foreground mb-4">
                  Get started in 5 minutes. Deploy your first vault and start generating sustainable funding.
                </p>
                <Link href="/docs/quickstart">
                  <Button variant="link" className="text-primary p-0 h-auto group/btn">
                    Start building
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20 hover:border-accent/40 transition-all group">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/30 transition-colors">
                <BookOpen className="h-6 w-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-2">Core Concepts</h3>
                <p className="text-muted-foreground mb-4">
                  Understand the architecture, design principles, and key components of Octant v2.
                </p>
                <Link href="/docs/what-is-octant">
                  <Button variant="link" className="text-accent p-0 h-auto group/btn">
                    Learn the basics
                    <ArrowRight className="ml-1 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>

        {/* Developer Paths */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Choose Your Path</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/yield-donating">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      Yield Donating Strategies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Connect DeFi protocols like Aave, Compound, or Lido to generate yield-derived funding
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/yield-skimming">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Wallet className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      Yield Skimming Strategies
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Deploy yield-bearing tokens and capture exchange rate appreciation
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/allocation-mechanisms">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                      Tokenized Allocation Mechanisms
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Build voting, governance, or data-driven fund allocation systems
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>

            <Link href="/docs/multi-strategy">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/50 transition-all cursor-pointer group">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Blocks className="h-5 w-5 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                      Multi-Strategy Vaults
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Create vaults with multiple strategies and advanced risk management
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* Additional Resources */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Additional Resources</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/docs/api">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <FileCode className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">API Reference</h3>
                <p className="text-sm text-muted-foreground">
                  Complete API documentation for all contracts and interfaces
                </p>
              </Card>
            </Link>

            <Link href="/docs/tutorials">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <Code2 className="h-8 w-8 text-accent mb-3" />
                <h3 className="font-bold mb-2 group-hover:text-accent transition-colors">Tutorials</h3>
                <p className="text-sm text-muted-foreground">
                  Step-by-step guides with runnable code examples
                </p>
              </Card>
            </Link>

            <Link href="/docs/resources/faq">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <HelpCircle className="h-8 w-8 text-primary mb-3" />
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">FAQ</h3>
                <p className="text-sm text-muted-foreground">
                  Answers to common questions and troubleshooting
                </p>
              </Card>
            </Link>
          </div>
        </div>

        {/* Web3 Basics Callout */}
        <Card className="p-8 bg-gradient-to-br from-accent/10 to-accent/5 border-accent/20">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
              <BookOpen className="h-6 w-6 text-accent" />
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">New to Web3?</h3>
              <p className="text-muted-foreground mb-4">
                Our documentation includes inline explanations of Web3 concepts, detailed setup guides for wallets and testnets, and terminology bridges to help traditional developers get started quickly.
              </p>
              <Link href="/docs/orientation">
                <Button variant="outline" className="border-accent/20 hover:bg-accent/10">
                  Developer Orientation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </Card>
      </div>
    </DocsLayout>
  );
}
