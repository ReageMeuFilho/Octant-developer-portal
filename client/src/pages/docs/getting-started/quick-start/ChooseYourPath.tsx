import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  BookOpen, 
  Code, 
  ArrowRight,
  Info,
  Clock
} from "lucide-react";
import { Link } from "wouter";

export default function ChooseYourPath() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Quick Start
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Choose Your Path
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Select the learning path that best matches your experience level and learning style.
          </p>
        </div>

        {/* Learning Paths */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Three Ways to Get Started</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Path A: "Show Me Working Code"</h3>
                    <Badge variant="outline" className="text-xs">⚡ 5 minutes</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Perfect if you learn by exploring running code first. Jump straight into a working demo and experiment.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="/docs/getting-started/environment-setup/clone-run-demo">
                      <Button className="gap-2">
                        Clone & Run Demo
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-6 w-6 text-accent" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Path B: "Explain First, Then Code"</h3>
                    <Badge variant="outline" className="text-xs">📚 15 minutes</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Perfect if you want to understand architecture before coding. Learn the concepts, then build with confidence.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="/docs/getting-started/core-concepts/octant-in-3-minutes">
                      <Button variant="outline" className="gap-2">
                        Start with Core Concepts
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50 hover:border-primary/50 transition-colors">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl font-bold">Path C: "I Just Need the Contracts"</h3>
                    <Badge variant="outline" className="text-xs">🏗️ 30 minutes</Badge>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Perfect if you're familiar with DeFi and want to dive in. Skip the intro and start building your strategy.
                  </p>
                  <div className="flex items-center gap-2">
                    <Link href="/docs/getting-started/build-first-strategy/tutorial-simple-lending">
                      <Button variant="outline" className="gap-2">
                        Build Your First Strategy
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Skill Level Guide */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Which Path is Right for You?</h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Zap className="h-4 w-4 text-primary" />
                Path A
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• New to Octant</li>
                <li>• Learn by doing</li>
                <li>• Want quick results</li>
                <li>• Prefer examples</li>
              </ul>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                Path B
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• New to DeFi</li>
                <li>• Want full context</li>
                <li>• Prefer theory first</li>
                <li>• Building for production</li>
              </ul>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2 flex items-center gap-2">
                <Code className="h-4 w-4 text-primary" />
                Path C
              </h3>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• DeFi experience</li>
                <li>• Know ERC-4626</li>
                <li>• Skip the basics</li>
                <li>• Just need contracts</li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Time Commitment */}
        <Alert className="bg-primary/5 border-primary/20">
          <Clock className="h-4 w-4" />
          <AlertDescription>
            <strong>Time Commitment:</strong> Path A takes 5 minutes to get started. Path B takes 15 minutes to understand concepts. Path C takes 30 minutes to build your first strategy. All paths lead to the same destination - a working Octant v2 integration.
          </AlertDescription>
        </Alert>

        {/* Next Steps */}
        <div className="flex items-center gap-4 pt-4">
          <Link href="/docs/getting-started/quick-start/what-youll-build">
            <Button variant="outline">← Back: What You'll Build</Button>
          </Link>
          <Link href="/docs/getting-started/quick-start/prerequisites-check">
            <Button variant="outline">Next: Prerequisites Check →</Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
