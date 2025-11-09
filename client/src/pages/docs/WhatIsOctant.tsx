import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, Vault, Split, Vote, Users, Shield, Zap, Layers, TrendingUp } from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function WhatIsOctant() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            What Is Octant v2?
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Open public infrastructure for sustainable growth. Transform treasury assets into continuous ecosystem funding while preserving your principal.
          </p>
        </div>

        {/* Overview */}
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Octant v2 is a decentralized funding network that transforms deployed assets into sustainable funding streams for projects, communities, and operational needs. At its core, it works as a pipeline where users deploy assets in Octant vaults, select a strategy, and the chosen strategy generates yield. Instead of returning this yield to the vault, Octant redirects it into a funding stream that supports various initiatives.
          </p>
          
          <p className="text-lg text-foreground/90 leading-relaxed">
            This approach allows users to **keep their principal fully intact** while contributing only the yield their assets generate, enabling long-term impact without sacrificing capital. Think of it as **"Kickstarter powered by yield"** where you retain your principal and use the generated yield to back initiatives you care about.
          </p>
        </div>

        {/* Core Components */}
        <div>
          <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
            <Layers className="h-8 w-8 text-primary" />
            Core Components
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all">
              <Vault className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Funding Vaults</h3>
              <p className="text-foreground/80 leading-relaxed">
                ERC-4626-compliant vaults that deploy capital into DeFi yield strategies. Support base tokens (USDC, DAI) and yield-bearing tokens (stETH, rETH) for maximum flexibility.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:border-accent/40 transition-all">
              <Split className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Routing & Splitting</h3>
              <p className="text-foreground/80 leading-relaxed">
                Infrastructure for programmatic yield distribution to multiple recipients. Configure percentage allocations to operations, community, ecosystem growth, and more.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-accent/10 to-primary/10 border-accent/20 hover:border-accent/40 transition-all">
              <Vote className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-xl font-bold mb-3">Allocation Mechanisms</h3>
              <p className="text-foreground/80 leading-relaxed">
                Smart contracts implementing various fund allocation models including quadratic funding (QF), quadratic voting (QV), and customizable funding rounds.
              </p>
            </Card>

            <Card className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 hover:border-primary/40 transition-all">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold mb-3">Community Staking</h3>
              <p className="text-foreground/80 leading-relaxed">
                Optional token-staking mechanisms for governance participation and reward distribution. Enable community influence on yield allocation decisions.
              </p>
            </Card>
          </div>
        </div>

        {/* Who Uses Octant */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Who Uses Octant v2?</h2>
          
          <div className="space-y-4">
            <Card className="p-6 border-border/50">
              <h3 className="text-xl font-bold mb-2 text-primary">Treasury Managers</h3>
              <p className="text-foreground/80 leading-relaxed">
                Determine capital allocation to Funding Vaults, select yield-generating strategies aligned with risk profiles, and configure automatic yield splits between predefined recipients.
              </p>
            </Card>

            <Card className="p-6 border-border/50">
              <h3 className="text-xl font-bold mb-2 text-accent">Protocol DAOs</h3>
              <p className="text-foreground/80 leading-relaxed">
                Enable community participation where eligible participants influence allocation of earmarked yield portions using selected models. Participation can be token-gated and token-weighted.
              </p>
            </Card>

            <Card className="p-6 border-border/50">
              <h3 className="text-xl font-bold mb-2 text-primary">Ecosystem Builders</h3>
              <p className="text-foreground/80 leading-relaxed">
                Create sustainable funding streams for open-source development, public goods, and community initiatives without depleting treasury reserves.
              </p>
            </Card>
          </div>
        </div>

        {/* Key Properties */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Key Properties & Design Principles</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Card className="p-5 border-primary/30">
              <Shield className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Capital Preservation</h3>
              <p className="text-sm text-foreground/80">
                Principal is never distributed—only generated returns flow to funding mechanisms, preserving the treasury.
              </p>
            </Card>

            <Card className="p-5 border-accent/30">
              <Zap className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold mb-2">Credible Neutrality</h3>
              <p className="text-sm text-foreground/80">
                Protocol doesn't prescribe what to fund; it standardizes how to fund via configurable splits and mechanisms.
              </p>
            </Card>

            <Card className="p-5 border-primary/30">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Sustainability</h3>
              <p className="text-sm text-foreground/80">
                Yield-based funding enables continuous streams without depleting reserves.
              </p>
            </Card>

            <Card className="p-5 border-accent/30">
              <Layers className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold mb-2">Composability</h3>
              <p className="text-sm text-foreground/80">
                Uses ERC-4626 standard; supports Safe multisig; interoperates with Aave, Morpho, Sky Compounder.
              </p>
            </Card>

            <Card className="p-5 border-primary/30">
              <Vault className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold mb-2">Capital Efficiency</h3>
              <p className="text-sm text-foreground/80">
                Optimized to maximize utility by capturing idle value and redirecting toward funding pools.
              </p>
            </Card>

            <Card className="p-5 border-accent/30">
              <Shield className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold mb-2">Security</h3>
              <p className="text-sm text-foreground/80">
                Vaults follow Yearn v3 patterns with additional audits. Strategies have configurable exposure limits.
              </p>
            </Card>
          </div>
        </div>

        {/* The Vision */}
        <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-primary/30">
          <h2 className="text-3xl font-bold mb-4">The Vision</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-4">
            By separating principal from yield, **Octant v2 enables a sustainable, long-term funding model that empowers communities to support open-source development, public goods, and other impactful initiatives**. Its design allows for flexible allocation methods and prioritizes that the share-to-asset ratio generally remains one-to-one.
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            This architecture creates a robust, transparent funding network that aligns incentives between capital providers and projects, making it possible to channel the power of yield toward meaningful collective impact.
          </p>
        </Card>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/how-it-works">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  How It Works →
                </h3>
                <p className="text-foreground/70">
                  Understand the pipeline from deposit to yield distribution
                </p>
              </Card>
            </Link>

            <Link href="/docs/architecture">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Architecture →
                </h3>
                <p className="text-foreground/70">
                  Explore the technical system design and components
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Deploy your first funding vault in 10 minutes
                </p>
              </Card>
            </Link>

            <Link href="/docs/orientation">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Developer Paths →
                </h3>
                <p className="text-foreground/70">
                  Choose your development journey based on your goals
                </p>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
