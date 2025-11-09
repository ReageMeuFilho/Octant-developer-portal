import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb, Users, Vote, TrendingUp, CheckCircle, Clock, Gift } from "lucide-react";
import { Link } from "wouter";
import { useState } from 'react';
import { AskAIButton } from '@/components/AskAIButton';
import { AIChatPanel } from '@/components/AIChatPanel';
import { useChatPanel } from '@/hooks/useChatPanel';

export default function AllocationMechanisms() {
  const { isOpen, openChat, closeChat } = useChatPanel();

  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Developer Path
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Tokenized Allocation Mechanisms (TAM)
          </h1>
          <AskAIButton onClick={openChat} />
          <p className="text-xl text-muted-foreground leading-relaxed">
            Create systems for communities to decide how funds are distributed through voting, governance, or data-driven models.
          </p>
        </div>

        {/* Overview */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Overview</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            **Tokenized Allocation Mechanisms** are smart contracts that implement various fund allocation models, allowing communities to vote or decide how yield from Funding Vaults should be distributed to ecosystem projects. TAMs enable credibly neutral, transparent, and programmable allocation of resources.
          </p>

          <Card className="p-6 bg-gradient-to-br from-primary/10 via-accent/5 to-primary/10 border-primary/20">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <Users className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Community Participation</h4>
                  <p className="text-sm text-foreground/80">Enable stakeholders to vote on funding decisions</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Vote className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Multiple Models</h4>
                  <p className="text-sm text-foreground/80">QF, QV, token-weighted, or custom allocation logic</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <TrendingUp className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">On-Chain Lifecycle</h4>
                  <p className="text-sm text-foreground/80">Defined stages from registration to redemption</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold mb-1">Transparent & Auditable</h4>
                  <p className="text-sm text-foreground/80">All votes and allocations recorded on-chain</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* TAM Lifecycle */}
        <div>
          <h2 className="text-3xl font-bold mb-6">TAM Lifecycle</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            Every Tokenized Allocation Mechanism follows a structured lifecycle with defined stages. This ensures predictable behavior and enables communities to participate at the right times.
          </p>

          <div className="space-y-4">
            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Register</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Community members register to participate in the allocation round. This may involve token-gating, KYC, or other eligibility criteria.
                  </p>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function register() external {
    require(block.timestamp >= registrationStart, "Not started");
    require(block.timestamp < registrationEnd, "Registration closed");
    require(!isRegistered[msg.sender], "Already registered");
    
    // Optional: Check token balance for token-gating
    require(dragonToken.balanceOf(msg.sender) >= minTokens, "Insufficient tokens");
    
    isRegistered[msg.sender] = true;
    emit UserRegistered(msg.sender);
}`}
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-accent">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Propose</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Projects submit proposals for funding. Each proposal includes project details, funding request, and recipient address.
                  </p>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`struct Proposal {
    address recipient;
    uint256 requestedAmount;
    string metadata;  // IPFS hash with project details
    uint256 totalVotes;
    bool finalized;
}

function submitProposal(
    address _recipient,
    uint256 _amount,
    string memory _metadata
) external {
    require(block.timestamp >= proposalStart, "Not started");
    require(block.timestamp < proposalEnd, "Proposals closed");
    
    proposals.push(Proposal({
        recipient: _recipient,
        requestedAmount: _amount,
        metadata: _metadata,
        totalVotes: 0,
        finalized: false
    }));
    
    emit ProposalSubmitted(proposals.length - 1, _recipient);
}`}
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Vote</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Registered participants vote on proposals. Voting power can be equal, token-weighted, or quadratic.
                  </p>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function vote(uint256 proposalId, uint256 amount) external {
    require(isRegistered[msg.sender], "Not registered");
    require(block.timestamp >= votingStart, "Voting not started");
    require(block.timestamp < votingEnd, "Voting ended");
    require(!hasVoted[msg.sender][proposalId], "Already voted");
    
    // Quadratic voting: cost = amount^2
    uint256 cost = amount * amount;
    require(votingPower[msg.sender] >= cost, "Insufficient voting power");
    
    votingPower[msg.sender] -= cost;
    proposals[proposalId].totalVotes += amount;
    hasVoted[msg.sender][proposalId] = true;
    
    emit VoteCast(msg.sender, proposalId, amount);
}`}
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-accent">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Finalize</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    After voting ends, results are calculated and allocations are determined based on the mechanism's formula (QF, QV, etc.).
                  </p>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function finalize() external {
    require(block.timestamp >= votingEnd, "Voting not ended");
    require(!isFinalized, "Already finalized");
    
    uint256 totalFunds = fundingPool.balanceOf(address(this));
    
    // Calculate allocations based on votes
    for (uint256 i = 0; i < proposals.length; i++) {
        uint256 allocation = calculateAllocation(i, totalFunds);
        proposals[i].finalAllocation = allocation;
    }
    
    isFinalized = true;
    emit RoundFinalized(totalFunds);
}`}
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-primary">5</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Queue</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Approved allocations are queued for distribution. This stage may include a timelock for governance review.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-lg font-bold text-accent">6</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-2">Redeem</h3>
                  <p className="text-foreground/90 leading-relaxed mb-3">
                    Projects claim their allocated funds. Funds are transferred from the TAM contract to project recipients.
                  </p>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function redeem(uint256 proposalId) external {
    require(isFinalized, "Not finalized");
    require(block.timestamp >= redeemStart, "Redeem not started");
    
    Proposal storage proposal = proposals[proposalId];
    require(msg.sender == proposal.recipient, "Not recipient");
    require(!proposal.redeemed, "Already redeemed");
    require(proposal.finalAllocation > 0, "No allocation");
    
    proposal.redeemed = true;
    fundingToken.transfer(proposal.recipient, proposal.finalAllocation);
    
    emit FundsRedeemed(proposalId, proposal.recipient, proposal.finalAllocation);
}`}
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Allocation Models */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Allocation Models</h2>
          
          <div className="space-y-6">
            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-3">Quadratic Funding (QF)</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Matches individual contributions with community funds using a quadratic formula. Prioritizes projects with broad support over those with few large donors.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Formula:</h4>
                  <Card className="p-4 bg-muted/30">
                    <pre className="text-sm font-mono">
{`Matching Amount = α × (Σ√contribution_i)²

Where:
- α (alpha) = matching pool multiplier
- contribution_i = individual contribution to project
- Σ = sum across all contributors`}
                    </pre>
                  </Card>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Example:</h4>
                  <div className="text-sm text-foreground/80 space-y-2">
                    <p>**Project A**: 100 contributors × $10 each = $1,000 raised</p>
                    <p>**Project B**: 10 contributors × $100 each = $1,000 raised</p>
                    <p className="font-bold text-primary mt-3">
                      QF Match: Project A receives MORE matching funds despite same total, because it has broader support!
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Implementation:</h4>
                  <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function calculateQFAllocation(uint256 proposalId) internal view returns (uint256) {
    uint256 sqrtSum = 0;
    
    // Sum square roots of all contributions
    for (uint256 i = 0; i < contributions[proposalId].length; i++) {
        sqrtSum += sqrt(contributions[proposalId][i]);
    }
    
    // Square the sum and multiply by alpha
    uint256 matchingAmount = (sqrtSum * sqrtSum * alpha) / PRECISION;
    
    return matchingAmount;
}`}
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-accent">
              <h3 className="text-2xl font-bold mb-3">Quadratic Voting (QV)</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                A voting mechanism where the cost of each additional vote increases quadratically. Prevents vote concentration and encourages broader participation.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h4 className="font-bold mb-2">Cost Formula:</h4>
                  <Card className="p-4 bg-muted/30">
                    <pre className="text-sm font-mono">
{`Cost = votes²

Examples:
- 1 vote costs 1 credit
- 2 votes cost 4 credits
- 3 votes cost 9 credits
- 10 votes cost 100 credits`}
                    </pre>
                  </Card>
                </div>

                <div>
                  <h4 className="font-bold mb-2">Why It Works:</h4>
                  <p className="text-sm text-foreground/80">
                    Quadratic cost creates diminishing returns, making it expensive to concentrate votes on a single option. This encourages voters to spread their influence across multiple projects they support.
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-l-4 border-l-primary">
              <h3 className="text-2xl font-bold mb-3">Token-Weighted Voting</h3>
              <p className="text-foreground/90 leading-relaxed mb-4">
                Voting power proportional to token holdings. Simple and transparent, but can lead to plutocracy if not balanced with other mechanisms.
              </p>
              <pre className="text-sm font-mono bg-muted/50 p-3 rounded-md overflow-x-auto">
{`function getVotingPower(address user) public view returns (uint256) {
    return governanceToken.balanceOf(user);
}`}
              </pre>
            </Card>
          </div>
        </div>

        {/* Custom Hooks */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Custom Hooks</h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            TAMs support custom hooks at each lifecycle stage, enabling you to implement custom logic, eligibility criteria, or allocation formulas.
          </p>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-4">Available Hooks</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">Hook</Badge>
                <div>
                  <code className="text-sm font-mono text-primary">beforeSignupHook()</code>
                  <p className="text-sm text-foreground/80">Validate eligibility before registration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">Hook</Badge>
                <div>
                  <code className="text-sm font-mono text-primary">afterSignupHook()</code>
                  <p className="text-sm text-foreground/80">Execute logic after successful registration</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">Hook</Badge>
                <div>
                  <code className="text-sm font-mono text-primary">processVoteHook()</code>
                  <p className="text-sm text-foreground/80">Custom vote processing and validation</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Badge variant="outline" className="mt-1">Hook</Badge>
                <div>
                  <code className="text-sm font-mono text-primary">beforeFinalizeHook()</code>
                  <p className="text-sm text-foreground/80">Pre-finalization checks and calculations</p>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Use Cases */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Common Use Cases</h2>
          
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-5">
              <Gift className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Ecosystem Grants</h3>
              <p className="text-sm text-foreground/80">
                Distribute funding to open-source projects, public goods, and community initiatives
              </p>
            </Card>

            <Card className="p-5">
              <Users className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">DAO Treasury Management</h3>
              <p className="text-sm text-foreground/80">
                Enable community governance over treasury allocation decisions
              </p>
            </Card>

            <Card className="p-5">
              <TrendingUp className="h-8 w-8 text-primary mb-3" />
              <h3 className="font-bold text-lg mb-2">Retroactive Funding</h3>
              <p className="text-sm text-foreground/80">
                Reward past contributions based on community assessment of impact
              </p>
            </Card>

            <Card className="p-5">
              <Clock className="h-8 w-8 text-accent mb-3" />
              <h3 className="font-bold text-lg mb-2">Recurring Rounds</h3>
              <p className="text-sm text-foreground/80">
                Run quarterly or monthly allocation rounds with consistent rules
              </p>
            </Card>
          </div>
        </div>

        {/* Best Practices */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Best Practices</h2>
          
          <Alert className="mb-4 bg-primary/10 border-primary/20">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertDescription>
              <strong>Sybil Resistance:</strong> Implement token-gating, KYC, or other mechanisms to prevent single actors from creating multiple identities.
            </AlertDescription>
          </Alert>

          <div className="space-y-4">
            <Card className="p-5">
              <h3 className="font-bold mb-2">1. Set Clear Timelines</h3>
              <p className="text-sm text-foreground/80">
                Define start and end times for each lifecycle stage. Give participants sufficient time to register, propose, and vote.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">2. Implement Sybil Resistance</h3>
              <p className="text-sm text-foreground/80">
                Use token-gating, proof-of-humanity, or other mechanisms to ensure one person = one vote (or proportional influence).
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">3. Test Allocation Formulas</h3>
              <p className="text-sm text-foreground/80">
                Simulate various voting scenarios to ensure your allocation formula produces expected results and doesn't have edge cases.
              </p>
            </Card>

            <Card className="p-5">
              <h3 className="font-bold mb-2">4. Enable Transparency</h3>
              <p className="text-sm text-foreground/80">
                Emit events for all key actions. Consider building a frontend dashboard to visualize votes and allocations in real-time.
              </p>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/quadratic-funding">
              <Card className="p-6 border-primary/30 hover:border-primary/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  Quadratic Funding Tutorial →
                </h3>
                <p className="text-foreground/70">
                  Build a complete QF allocation mechanism with custom hooks
                </p>
              </Card>
            </Link>

            <Link href="/docs/quickstart">
              <Card className="p-6 border-accent/30 hover:border-accent/60 transition-all cursor-pointer group">
                <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
                  Quickstart Guide →
                </h3>
                <p className="text-foreground/70">
                  Set up your development environment and explore TAM examples
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
