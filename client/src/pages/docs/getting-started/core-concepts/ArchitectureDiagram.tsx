import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Vault, TrendingUp, Split } from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function ArchitectureDiagram() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Core Concepts
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Architecture Diagram
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Understanding the architecture of Octant v2 helps you build better integrations and troubleshoot issues effectively.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">System Overview</h2>
          <Card className="p-6 bg-card border-border/50">
            <pre className="text-sm overflow-x-auto">
              <code>{`┌─────────────────────────────────────────────────┐
│                   User Deposits                 │
│                      (USDC)                     │
└──────────────────┬──────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────┐
│              Funding Vault                      │
│         (ERC-4626 Compliant)                    │
│  • Mints shares 1:1 with deposits               │
│  • Routes capital to strategies                 │
│  • Preserves principal                          │
└──────────────────┬──────────────────────────────┘
                   │
        ┌──────────┴──────────┐
        ▼                     ▼
┌──────────────┐      ┌──────────────┐
│  Strategy 1  │      │  Strategy 2  │
│  (Aave)      │      │  (Lido)      │
│  60% capital │      │  40% capital │
└──────┬───────┘      └──────┬───────┘
       │                     │
       └──────────┬──────────┘
                  ▼
        ┌─────────────────┐
        │  Yield Generated │
        └─────────┬────────┘
                  │
        ┌─────────┴─────────┐
        ▼                   ▼
┌──────────────┐    ┌──────────────┐
│  60% Donated │    │ 40% Compounds│
│  to Projects │    │ Back to Vault│
└──────────────┘    └──────────────┘`}</code>
            </pre>
          </Card>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Key Components</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Vault className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Funding Vault</h3>
                  <p className="text-muted-foreground">
                    ERC-4626 compliant vault that accepts user deposits and manages capital allocation across multiple yield strategies.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Yield Strategies</h3>
                  <p className="text-muted-foreground">
                    Smart contracts that deploy capital into DeFi protocols (Aave, Lido, etc.) to generate returns.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Split className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Allocation Mechanism</h3>
                  <p className="text-muted-foreground">
                    Routes generated yield to designated projects and beneficiaries based on configured rules.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
