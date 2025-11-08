import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import DocsLayoutNew from "@/components/DocsLayoutNew";
import { User, Clock } from "lucide-react";

export default function DeFiMasterYield() {
  return (
    <DocsLayoutNew>
      <div className="max-w-4xl mx-auto space-y-16 py-8">
        
        <section className="space-y-8">
          <div className="flex items-center gap-3">
            <Badge variant="secondary">Coming Soon</Badge>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold">
              DeFiMaster
            </h1>
            <p className="text-xl text-muted-foreground">
               Yield Farmer:Advanced yield optimization strategies
            </p>
          </div>

          <Card className="p-6 border-2 border-blue-500">
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 rounded-full border-3 border-blue-500 flex items-center justify-center bg-muted flex-shrink-0">
                <User className="w-12 h-12 text-muted-foreground" />
              </div>
              <div className="space-y-2 flex-1">
                <h2 className="text-2xl font-bold">DeFiMaster</h2>
                <p className="text-lg text-muted-foreground"> Yield Farmer:Advanced yield optimization strategies</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-blue-500/10 border-blue-500 text-center">
            <Clock className="w-16 h-16 mx-auto mb-4 text-blue-500" />
            <h3 className="text-2xl font-bold mb-3">Content Coming Soon</h3>
            <p className="text-lg text-muted-foreground">
              This persona journey is currently being developed. Check back soon for a detailed 4-scene walkthrough including:
            </p>
            <ul className="mt-4 space-y-2 text-left max-w-2xl mx-auto">
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Meet the persona and understand their goals</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Step-by-step implementation guide</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Monthly operations and management workflow</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500">•</span>
                <span>Real-world results and performance metrics</span>
              </li>
            </ul>
          </Card>

          <Card className="p-6">
            <h3 className="text-xl font-bold mb-3">In the meantime, explore other personas:</h3>
            <div className="grid md:grid-cols-2 gap-3">
              <a href="/user-journeys/sarah-conservative" className="text-blue-500 hover:underline">
                → Sarah: Conservative Investor
              </a>
              <a href="/user-journeys/marcus-crypto" className="text-blue-500 hover:underline">
                → Marcus: Crypto Enthusiast
              </a>
            </div>
          </Card>

        </section>

      </div>
    </DocsLayoutNew>
  );
}
