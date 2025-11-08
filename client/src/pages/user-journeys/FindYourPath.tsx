import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import DocsLayoutNew from "@/components/DocsLayoutNew";
import { User, TrendingUp, Target, Clock, AlertCircle } from "lucide-react";

export default function FindYourPath() {
  const personas = [
    {
      id: "sarah",
      name: "Sarah Chen",
      title: "Conservative Investor",
      capital: "$50M endowment",
      goal: "Steady 5-6% yield",
      riskTolerance: "Low",
      timeCommitment: "Minimal monitoring",
      approach: "Vault System Only",
      keyTakeaway: "Professional management without complexity",
      link: "/user-journeys/sarah-conservative",
      color: "border-blue-500"
    },
    {
      id: "marcus",
      name: "Marcus Rodriguez",
      title: "Crypto Enthusiast",
      capital: "100K GOV tokens",
      goal: "Governance influence + rewards",
      riskTolerance: "Medium",
      timeCommitment: "Active participant",
      approach: "Staking System with Delegation",
      keyTakeaway: "Earn rewards while expert votes for you",
      link: "/user-journeys/marcus-crypto",
      color: "border-green-500"
    },
    {
      id: "drchen",
      name: "Dr. Chen",
      title: "Sophisticated Investor",
      capital: "$100K USDC + 50K GOV",
      goal: "Maximum returns + influence",
      riskTolerance: "Medium-High",
      timeCommitment: "Weekly reviews",
      approach: "Both Systems Strategically",
      keyTakeaway: "Diversified across yield and governance",
      link: "/user-journeys/drchen-sophisticated",
      color: "border-purple-500"
    },
    {
      id: "protocolx",
      name: "Protocol X Treasury",
      title: "DAO Treasury Manager",
      capital: "$5M treasury",
      goal: "Treasury growth + governance power",
      riskTolerance: "Low (fiduciary duty)",
      timeCommitment: "Monthly reviews",
      approach: "Custom Vault + Multisig Staking",
      keyTakeaway: "Institutional controls with DeFi yields",
      link: "#",
      color: "border-orange-500"
    },
    {
      id: "defimaster",
      name: "DeFiMaster",
      title: "Yield Farmer",
      capital: "$500K USDC",
      goal: "Maximize APY through tactical moves",
      riskTolerance: "High",
      timeCommitment: "Daily monitoring",
      approach: "Tactical Vault Usage",
      keyTakeaway: "Quick in/out when yields are optimal",
      link: "#",
      color: "border-red-500"
    },
    {
      id: "emma",
      name: "Emma Wilson",
      title: "Governance Activist",
      capital: "20K GOV tokens",
      goal: "Direct voting influence",
      riskTolerance: "Medium",
      timeCommitment: "High (research proposals)",
      approach: "Self-Delegated Staking",
      keyTakeaway: "Small holder, big voice",
      link: "#",
      color: "border-pink-500"
    },
    {
      id: "hedgefund",
      name: "Crypto Hedge Fund",
      title: "Institutional Investor",
      capital: "$2M allocation",
      goal: "Yield with compliance reporting",
      riskTolerance: "Low-Medium",
      timeCommitment: "Automated + monthly reports",
      approach: "Enterprise Setup with Roles",
      keyTakeaway: "Multi-sig, role separation, compliance",
      link: "#",
      color: "border-gray-500"
    }
  ];

  return (
    <DocsLayoutNew>
      <div className="max-w-6xl mx-auto space-y-16 py-8">
        
        {/* Hero Section */}
        <section className="space-y-6 text-center">
          <Badge variant="secondary" className="text-sm">User Journeys</Badge>
          <h1 className="text-4xl md:text-5xl font-bold">
            Find Your Octant Journey
          </h1>
          <p className="text-xl text-muted-foreground">
            7 real users, 7 different strategies, same powerful protocol
          </p>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every user has different goals, risk profiles, and capital. See how users like you leverage Octant's vault and staking systems to achieve their objectives.
          </p>
        </section>

        {/* Persona Cards Grid */}
        <section className="space-y-8">
          <h2 className="text-3xl font-bold text-center">Choose Your Path</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {personas.map((persona) => (
              <Card
                key={persona.id}
                className={`p-6 border-2 ${persona.color} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col`}
              >
                {/* Avatar Placeholder */}
                <div className={`w-24 h-24 rounded-full border-3 ${persona.color} mx-auto mb-4 flex items-center justify-center bg-muted`}>
                  <User className="w-12 h-12 text-muted-foreground" />
                </div>

                {/* Name and Title */}
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold">{persona.name}</h3>
                  <Badge variant="secondary" className="mt-2">{persona.title}</Badge>
                </div>

                {/* Profile Stats */}
                <div className="space-y-3 mb-4 flex-1">
                  <div className="flex items-start gap-2 text-sm">
                    <TrendingUp className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Capital</div>
                      <div className="text-muted-foreground">{persona.capital}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm">
                    <Target className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Approach</div>
                      <div className="text-muted-foreground">{persona.approach}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0 text-muted-foreground" />
                    <div>
                      <div className="font-medium">Risk</div>
                      <div className="text-muted-foreground">{persona.riskTolerance}</div>
                    </div>
                  </div>
                </div>

                {/* Key Takeaway */}
                <div className="bg-muted p-3 rounded-lg mb-4 text-sm text-center italic">
                  "{persona.keyTakeaway}"
                </div>

                {/* CTA Button */}
                {persona.link === "#" ? (
                  <Button variant="outline" disabled className="w-full">
                    Coming Soon
                  </Button>
                ) : (
                  <Button asChild className="w-full">
                    <Link href={persona.link}>
                      View {persona.name.split(' ')[0]}'s Journey →
                    </Link>
                  </Button>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Comparison Table */}
        <section className="space-y-6">
          <h2 className="text-3xl font-bold text-center">All Personas at a Glance</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2">
                  <th className="text-left p-4 font-bold">Persona</th>
                  <th className="text-left p-4 font-bold">Capital</th>
                  <th className="text-left p-4 font-bold">System Used</th>
                  <th className="text-left p-4 font-bold">Time Commitment</th>
                  <th className="text-left p-4 font-bold">Risk Level</th>
                  <th className="text-left p-4 font-bold">Primary Goal</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Sarah</td>
                  <td className="p-4">$50M USDC</td>
                  <td className="p-4">Vault Only</td>
                  <td className="p-4">Minimal</td>
                  <td className="p-4">Low</td>
                  <td className="p-4">Stable yield</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Marcus</td>
                  <td className="p-4">100K GOV</td>
                  <td className="p-4">Staking + Delegation</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Governance + rewards</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Dr. Chen</td>
                  <td className="p-4">$100K USDC + 50K GOV</td>
                  <td className="p-4">Both Systems</td>
                  <td className="p-4">Weekly</td>
                  <td className="p-4">Medium-High</td>
                  <td className="p-4">Max returns + influence</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Protocol X</td>
                  <td className="p-4">$5M mixed</td>
                  <td className="p-4">Both (Custom)</td>
                  <td className="p-4">Monthly</td>
                  <td className="p-4">Low</td>
                  <td className="p-4">Treasury growth</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">DeFiMaster</td>
                  <td className="p-4">$500K USDC</td>
                  <td className="p-4">Vault (Tactical)</td>
                  <td className="p-4">Daily</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Maximize APY</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Emma</td>
                  <td className="p-4">20K GOV</td>
                  <td className="p-4">Staking (Self)</td>
                  <td className="p-4">High</td>
                  <td className="p-4">Medium</td>
                  <td className="p-4">Direct voting</td>
                </tr>
                <tr className="border-b hover:bg-muted/50">
                  <td className="p-4 font-medium">Hedge Fund</td>
                  <td className="p-4">$2M</td>
                  <td className="p-4">Vault (Enterprise)</td>
                  <td className="p-4">Automated</td>
                  <td className="p-4">Low-Med</td>
                  <td className="p-4">Compliance + yield</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center space-y-4 py-8">
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Select a persona that matches your profile to see their complete strategy, code examples, and results.
          </p>
        </section>

      </div>
    </DocsLayoutNew>
  );
}
