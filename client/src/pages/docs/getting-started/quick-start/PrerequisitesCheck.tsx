import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal, Hammer, GitBranch, CheckCircle } from "lucide-react";
import { Link } from "wouter";

export default function PrerequisitesCheck() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Quick Start
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Prerequisites Check
          </h1>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-foreground/90 leading-relaxed">
            Before diving into Octant v2 development, ensure you have the required tools and knowledge installed.
          </p>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Required Tools</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Node.js 18+</h3>
                  <p className="text-muted-foreground mb-3">
                    Required for running the frontend and development tools.
                  </p>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                    <code>node --version{`
# Should show: v18.x.x or higher`}</code>
                  </pre>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Hammer className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Foundry</h3>
                  <p className="text-muted-foreground mb-3">
                    Smart contract development framework for Solidity.
                  </p>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                    <code>forge --version{`
# Should show: forge 0.2.0 or similar`}</code>
                  </pre>
                  <p className="text-sm text-muted-foreground mt-2">
                    Install: <code className="bg-muted px-2 py-1 rounded">curl -L https://foundry.paradigm.xyz | bash && foundryup</code>
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GitBranch className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2">Git</h3>
                  <p className="text-muted-foreground mb-3">
                    Version control for cloning repositories.
                  </p>
                  <pre className="bg-muted p-3 rounded text-sm overflow-x-auto">
                    <code>git --version{`
# Should show: git version 2.x.x`}</code>
                  </pre>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <CheckCircle className="h-4 w-4" />
          <AlertDescription>
            <strong>All set?</strong> Once you have these tools installed, proceed to the next step to set up your development environment.
          </AlertDescription>
        </Alert>

      </div>
    </DocsLayout>
  );
}
