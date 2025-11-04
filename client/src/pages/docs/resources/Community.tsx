import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Link } from "wouter";

export default function Community() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Documentation
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Community & Support
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Join our Discord, connect with builders, and get help from the Octant developer community.
          </p>
        </div>

        <Alert className="bg-primary/10 border-primary/20">
          <Lightbulb className="h-4 w-4 text-primary" />
          <AlertDescription className="text-foreground/90">
            <strong>Coming Soon:</strong> This documentation page is currently being developed. Check back soon for comprehensive guides and examples.
          </AlertDescription>
        </Alert>

        <div>
          <h2 className="text-3xl font-bold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/quickstart">
              <Card className="p-6 bg-card border-border/50 hover:border-primary/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Quickstart Guide
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Get your development environment set up in 10 minutes
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Get started
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/orientation">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Developer Orientation
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Choose your development path and explore what you can build
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  Explore paths
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>
      </div>
    </DocsLayout>
  );
}
