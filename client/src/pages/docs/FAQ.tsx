import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function FAQ() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Help & Support
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Frequently Asked Questions
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Common questions about Octant v2, funding vaults, strategies, and allocation mechanisms
          </p>
        </div>

        {/* General Questions */}
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <HelpCircle className="h-6 w-6 text-primary" />
            General Questions
          </h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="q1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is Octant?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Octant is open public infrastructure for sustainable growth, using DeFi primitives to create regenerative funding streams and allocation mechanisms. It transforms treasury assets into continuous ecosystem funding while preserving principal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What are Octant Funding Vaults?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Smart contracts that generate yield through DeFi strategies while preserving the principal. They are ERC-4626-compliant vaults that accept deposits, deploy capital to yield strategies, and direct generated yield to a donation address.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What are the benefits of Octant Funding Vaults?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Vaults provide yield generation, capital preservation, ecosystem funding, and transparent tracking. They enable sustainable growth aligned with community values without depleting treasury reserves.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="q4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How is principal preserved?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Octant v2 separates principal management from yield routing. The principal is never distributed—only generated returns flow to funding mechanisms. The share-to-asset ratio is designed to remain 1:1, ensuring your deposit value is preserved.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Vault Types */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Vault Types</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="v1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is the difference between Dragon Vaults and Collective Funding Vaults?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                <strong>Dragon Vaults</strong> are integrated with Safe multisig wallets and designed for large treasuries and organizations. They provide enhanced security and governance controls.<br/><br/>
                <strong>Collective Funding Vaults</strong> pool capital from multiple participants, making funding accessible for smaller communities and individuals.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="v2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How can I withdraw my deposited principal?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Withdrawal depends on the vault type:<br/><br/>
                • <strong>Standard Vaults</strong>: Allow withdrawals at any time<br/>
                • <strong>Locked Vaults</strong>: Require a cooldown period after initiating a ragequit<br/><br/>
                In both cases, you can redeem your yield-donating tokens 1:1 for the underlying asset (subject to available liquidity).
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="v3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How does the ragequit mechanism work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Ragequit allows users to withdraw from Locked Vaults by initiating a cooldown period. After the cooldown completes, users can access their funds. This mechanism provides an exit option while maintaining vault stability.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Strategies */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Strategies</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="s1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is the difference between Yield Donating Strategies (YDS) and Yield Skimming Strategies (YSS)?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                <strong>Yield Donating Strategies (YDS)</strong> accept base tokens (like USDC) and deploy them to yield-generating protocols. When profit is realized, new shares are minted and sent to the donation address.<br/><br/>
                <strong>Yield Skimming Strategies (YSS)</strong> hold yield-bearing tokens (like stETH or rETH) directly and donate their exchange-rate appreciation. They use a "dragon buffer" mechanism to handle value fluctuations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="s2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What happens if a strategy loses money?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                If a strategy reports a loss, shares representing the loss are burned from the donation address (not from depositors). This preserves the 1:1 share-to-asset ratio for depositors. Your principal remains protected—losses are absorbed by the yield buffer.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="s3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I use multiple strategies in one vault?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Yes! Multi-Strategy Vaults allow you to diversify capital across multiple yield strategies simultaneously. You can configure strategy queues, set maximum debt ratios, and enable automated rebalancing for optimal risk management.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="s4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What protocols can I integrate with?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Octant v2 is designed for composability and supports major DeFi protocols including:<br/><br/>
                • <strong>Lending</strong>: Aave, Compound, Morpho<br/>
                • <strong>Liquid Staking</strong>: Lido (stETH), Rocket Pool (rETH)<br/>
                • <strong>Yield Aggregators</strong>: Sky Compounder, Yearn<br/>
                • <strong>Custom</strong>: Build your own strategy for any protocol
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Allocation Mechanisms */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Allocation Mechanisms</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="a1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What are Allocation Mechanisms?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Smart contracts that handle allocation of funds based on encoded algorithms, such as token-weighted voting, quadratic funding, or quadratic voting. They enable community participation in deciding how yield is distributed to ecosystem projects.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="a2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What happens during a funding round?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                In a funding round, community members vote on how funds deposited into an allocation mechanism contract should be distributed to ecosystem projects. The lifecycle includes: Register → Propose → Vote → Finalize → Queue → Redeem.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="a3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How does Quadratic Funding work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Quadratic Funding (QF) matches individual contributions with community funds using a quadratic formula. It prioritizes projects with broad support over those with few large donors. The matching amount is calculated based on the square root of contributions, amplifying the impact of many small donations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="a4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Can I create custom allocation mechanisms?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Yes! You can build custom Tokenized Allocation Mechanisms (TAMs) by implementing hooks at specific lifecycle stages (e.g., beforeSignupHook, processVoteHook). This allows you to create custom voting logic, eligibility criteria, and distribution formulas.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Payment Splitter */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Payment Splitter</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="p1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is the Payment Splitter?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                A component that distributes funds generated by yield strategies to multiple predefined recipients based on percentage allocations. For example, you might split yield 20% to operations, 30% to treasury, and 50% to an allocation mechanism.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="p2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is the role of operational costs (OpEx)?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                OpEx represents a portion of the yield claimed by capital providers to cover operational expenses. It's typically configured as a percentage in the Payment Splitter and helps sustain the infrastructure that generates the yield.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Technical */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Technical Questions</h2>
          
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="t1" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What blockchains does Octant v2 support?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Octant v2 is deployed on Ethereum Mainnet and Sepolia testnet. The architecture is designed to be chain-agnostic and can be deployed to other EVM-compatible chains in the future.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="t2" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                How does Community Staking work?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Community members stake ecosystem tokens (Dragon Tokens) to earn rewards and participate in funding allocation decisions. Staking can be token-gated and token-weighted, giving more influence to participants with larger stakes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="t3" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                What is the Safe Linear Allowance module?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                A Safe integration allowing users to set up linear token transfers to donation addresses over time. This enables automated recurring donations without requiring manual transactions.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="t4" className="border border-border/50 rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Are the smart contracts audited?
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed pt-2">
                Yes. Octant v2 vaults follow Yearn v3-style patterns and have undergone additional security audits. However, as with all smart contracts, there are inherent risks. Always verify contract addresses on official channels and understand the risks before depositing.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Still Have Questions */}
        <Card className="p-8 bg-gradient-to-br from-primary/20 via-accent/10 to-primary/20 border-primary/30">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Join our Discord community for support, discussions, and to connect with other developers building on Octant v2.
          </p>
          <div className="flex gap-4">
            <a 
              href="https://discord.gg/octant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Join Discord
            </a>
            <a 
              href="https://github.com/golemfoundation/octant" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-muted text-foreground rounded-md hover:bg-muted/80 transition-colors font-semibold"
            >
              View on GitHub
            </a>
          </div>
        </Card>
      </div>
    <AIChatPanel isOpen={isOpen} onClose={closeChat} />
    </DocsLayout>
  );
}
