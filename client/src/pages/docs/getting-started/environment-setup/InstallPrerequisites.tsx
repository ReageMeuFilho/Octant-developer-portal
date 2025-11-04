import DocsLayout from "@/components/DocsLayoutNew";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Terminal,
  Download,
  CheckCircle,
  AlertTriangle,
  ArrowRight,
  ExternalLink
} from "lucide-react";
import { Link } from "wouter";

export default function InstallPrerequisites() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Environment Setup
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Install Prerequisites
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Set up your development environment with the required tools and dependencies.
          </p>
        </div>

        <Alert className="bg-primary/5 border-primary/20">
          <Terminal className="h-4 w-4" />
          <AlertDescription>
            <strong>Estimated time:</strong> 15-20 minutes | <strong>Difficulty:</strong> Beginner
          </AlertDescription>
        </Alert>

        <div>
          <h2 className="text-3xl font-bold mb-6">Required Tools</h2>
          <div className="grid gap-6">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Download className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">1. Node.js (v18+)</h3>
                  <p className="text-muted-foreground mb-4">
                    Required for running the frontend and development tools.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-sm font-mono mb-2">Check if installed:</p>
                    <pre className="text-sm"><code>node --version
# Should show: v18.x.x or higher</code></pre>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Install:</p>
                    <pre className="text-sm"><code># macOS (using Homebrew)
brew install node@18

# Ubuntu/Debian
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt-get install -y nodejs

# Windows
# Download from https://nodejs.org/</code></pre>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">2. Foundry</h3>
                  <p className="text-muted-foreground mb-4">
                    Smart contract development framework for Solidity. Includes forge, cast, and anvil.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-sm font-mono mb-2">Check if installed:</p>
                    <pre className="text-sm"><code>forge --version
# Should show: forge 0.2.0 or similar</code></pre>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Install:</p>
                    <pre className="text-sm"><code># All platforms
curl -L https://foundry.paradigm.xyz | bash
foundryup</code></pre>
                  </div>
                  <a 
                    href="https://book.getfoundry.sh/getting-started/installation" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-sm text-primary hover:underline flex items-center gap-1 mt-2"
                  >
                    Full installation guide <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-3">3. Git</h3>
                  <p className="text-muted-foreground mb-4">
                    Version control for cloning repositories and managing code.
                  </p>
                  <div className="bg-muted p-4 rounded-lg mb-4">
                    <p className="text-sm font-mono mb-2">Check if installed:</p>
                    <pre className="text-sm"><code>git --version
# Should show: git version 2.x.x</code></pre>
                  </div>
                  <div className="bg-muted p-4 rounded-lg">
                    <p className="text-sm font-mono mb-2">Install:</p>
                    <pre className="text-sm"><code># macOS
brew install git

# Ubuntu/Debian
sudo apt-get install git

# Windows
# Download from https://git-scm.com/</code></pre>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Optional but Recommended</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2">VS Code</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Popular code editor with excellent Solidity support
              </p>
              <a 
                href="https://code.visualstudio.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline flex items-center gap-1"
              >
                Download <ExternalLink className="h-3 w-3" />
              </a>
            </Card>

            <Card className="p-4 bg-card border-border/50">
              <h3 className="font-bold mb-2">Solidity Extension</h3>
              <p className="text-sm text-muted-foreground mb-2">
                Syntax highlighting and IntelliSense for Solidity
              </p>
              <p className="text-sm text-muted-foreground">
                Search "Solidity" in VS Code extensions
              </p>
            </Card>
          </div>
        </div>

        <div>
          <h2 className="text-3xl font-bold mb-6">Verification</h2>
          <Card className="p-6 bg-muted border-border/50">
            <p className="text-sm font-mono mb-3">Run these commands to verify everything is installed:</p>
            <pre className="text-sm overflow-x-auto"><code>{`# Check Node.js
node --version

# Check npm
npm --version

# Check Foundry
forge --version
cast --version
anvil --version

# Check Git
git --version

# All commands should return version numbers without errors`}</code></pre>
          </Card>
        </div>

        <Alert className="bg-yellow-500/10 border-yellow-500/20">
          <AlertTriangle className="h-4 w-4 text-yellow-500" />
          <AlertDescription>
            <strong>Troubleshooting:</strong> If any command fails, revisit the installation steps above or check the official documentation for your operating system.
          </AlertDescription>
        </Alert>

        <div className="flex items-center justify-between pt-4">
          <Link href="/docs/getting-started/core-concepts/yield-types">
            <Button variant="outline">← Yield Types Guide</Button>
          </Link>
          <Link href="/docs/getting-started/environment-setup/clone-run-demo">
            <Button className="gap-2">
              Clone & Run Demo
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </DocsLayout>
  );
}
