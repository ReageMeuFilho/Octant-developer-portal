import DocsLayout from "@/components/DocsLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { 
  Terminal,
  Download,
  Code2,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Copy,
  ExternalLink,
  Lightbulb
} from "lucide-react";
import { Link } from "wouter";

export default function Quickstart() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Quickstart Guide
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Get Started in 10 Minutes
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Deploy your first Octant v2 vault and start generating sustainable ecosystem funding. This guide uses our production-ready React boilerplate with all dependencies pre-configured.
          </p>
        </div>

        {/* Prerequisites */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Prerequisites</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">Node.js & Yarn</h3>
                  <p className="text-sm text-muted-foreground">
                    Node.js 18+ and Yarn package manager installed on your system
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <Download className="h-5 w-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-bold mb-2">MetaMask Wallet</h3>
                  <p className="text-sm text-muted-foreground">
                    Browser wallet extension for interacting with smart contracts
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Step 1: Clone Repository */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 1: Clone the Hackathon Starter Pack</h2>
          <p className="text-foreground/90 mb-4">
            Our starter pack includes React 19, TypeScript, Tailwind CSS, pre-configured smart contract ABIs, and 17 ShadCN UI components styled for Octant's dark theme.
          </p>
          
          <Card className="p-6 bg-muted/50 border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mono text-muted-foreground">Terminal</span>
              <Button variant="ghost" size="sm" className="h-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="text-sm font-mono text-foreground overflow-x-auto">
              <code>{`git clone https://github.com/golemfoundation/octant-v2-hackathon-dapp-boilerplate.git
cd octant-v2-hackathon-dapp-boilerplate`}</code>
            </pre>
          </Card>
        </div>

        {/* Step 2: Install Dependencies */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 2: Install Dependencies</h2>
          <p className="text-foreground/90 mb-4">
            Install all required packages including Wagmi for blockchain interactions, Zustand for state management, and React Hook Form with Zod validation.
          </p>
          
          <Card className="p-6 bg-muted/50 border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mono text-muted-foreground">Terminal</span>
              <Button variant="ghost" size="sm" className="h-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="text-sm font-mono text-foreground">
              <code>yarn install</code>
            </pre>
          </Card>
        </div>

        {/* Step 3: Start Development Server */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 3: Start Development Server</h2>
          <p className="text-foreground/90 mb-4">
            Launch the local development server with hot module replacement for instant feedback.
          </p>
          
          <Card className="p-6 bg-muted/50 border-border/50 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mono text-muted-foreground">Terminal</span>
              <Button variant="ghost" size="sm" className="h-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="text-sm font-mono text-foreground">
              <code>yarn dev</code>
            </pre>
          </Card>

          <Alert className="bg-primary/10 border-primary/20">
            <Lightbulb className="h-4 w-4 text-primary" />
            <AlertDescription className="text-foreground/90">
              Open <strong>http://localhost:5173</strong> in your browser to see your app. All 17 ShadCN UI components are visible on the homepage with interactive demos.
            </AlertDescription>
          </Alert>
        </div>

        {/* Project Structure */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Understanding the Project Structure</h2>
          
          <Card className="p-6 bg-muted/50 border-border/50">
            <pre className="text-sm font-mono text-foreground overflow-x-auto">
              <code>{`src/
├── abis/                # Smart contract ABIs
│   ├── MorphoCompounderStrategyFactory.json
│   ├── SkyCompounderStrategyFactory.json
│   └── YieldDonatingTokenizedStrategy.json
├── components/
│   └── ui/              # ShadCN UI components
├── pages/               # Your app pages/routes
├── lib/
│   └── utils.ts         # Utility functions
├── store.ts             # Zustand global state
└── App.tsx              # Routes and app shell`}</code>
            </pre>
          </Card>
        </div>

        {/* Step 4: Connect to Testnet */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 4: Connect to Ethereum Sepolia Testnet</h2>
          <p className="text-foreground/90 mb-4">
            Configure your MetaMask wallet to connect to the Sepolia test network where you can deploy and test without spending real ETH.
          </p>

          <div className="space-y-4">
            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                Add Sepolia Network to MetaMask
              </h3>
              <div className="space-y-2 text-sm text-muted-foreground ml-7">
                <p>1. Open MetaMask and click the network dropdown</p>
                <p>2. Click "Add Network" or "Add Network Manually"</p>
                <p>3. Enter the following details:</p>
                <div className="bg-muted/50 p-4 rounded-lg mt-2 font-mono text-xs">
                  <div>Network Name: <span className="text-foreground">Sepolia</span></div>
                  <div>RPC URL: <span className="text-foreground">https://rpc.sepolia.org</span></div>
                  <div>Chain ID: <span className="text-foreground">11155111</span></div>
                  <div>Currency Symbol: <span className="text-foreground">ETH</span></div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-3 flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-accent" />
                Get Test ETH from Faucet
              </h3>
              <p className="text-sm text-muted-foreground mb-3 ml-7">
                You'll need Sepolia ETH to pay for gas fees. Get free test ETH from these faucets:
              </p>
              <div className="flex flex-wrap gap-2 ml-7">
                <a href="https://sepoliafaucet.com" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="text-xs">
                    Sepolia Faucet
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
                <a href="https://faucet.quicknode.com/ethereum/sepolia" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="text-xs">
                    QuickNode Faucet
                    <ExternalLink className="ml-2 h-3 w-3" />
                  </Button>
                </a>
              </div>
            </Card>
          </div>
        </div>

        {/* Step 5: Deploy Your First Strategy */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 5: Deploy Your First Strategy</h2>
          <p className="text-foreground/90 mb-4">
            Use the pre-configured ABIs to interact with Octant v2 smart contracts and deploy a yield-generating strategy.
          </p>

          <Card className="p-6 bg-muted/50 border-border/50">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-mono text-muted-foreground">Example: Using Smart Contract ABIs</span>
              <Button variant="ghost" size="sm" className="h-8">
                <Copy className="h-4 w-4" />
              </Button>
            </div>
            <pre className="text-sm font-mono text-foreground overflow-x-auto">
              <code>{`import MorphoABI from '@/abis/MorphoCompounderStrategyFactory.json';
import { useReadContract } from 'wagmi';

function DeployStrategy() {
  const { data } = useReadContract({
    address: '0x...', // Contract address on Sepolia
    abi: MorphoABI,
    functionName: 'createStrategy',
    args: [/* your args */]
  });

  return <div>{/* Your component */}</div>;
}`}</code>
            </pre>
          </Card>
        </div>

        {/* Available Scripts */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Available Scripts</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Card className="p-6 bg-card border-border/50">
              <code className="text-sm font-mono text-primary">yarn dev</code>
              <p className="text-sm text-muted-foreground mt-2">
                Start development server with hot reload
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <code className="text-sm font-mono text-accent">yarn build</code>
              <p className="text-sm text-muted-foreground mt-2">
                Build optimized production bundle
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <code className="text-sm font-mono text-primary">yarn preview</code>
              <p className="text-sm text-muted-foreground mt-2">
                Preview production build locally
              </p>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <code className="text-sm font-mono text-accent">yarn lint</code>
              <p className="text-sm text-muted-foreground mt-2">
                Run ESLint to check code quality
              </p>
            </Card>
          </div>
        </div>

        {/* What's Included */}
        <div>
          <h2 className="text-3xl font-bold mb-6">What's Included in the Starter Pack</h2>
          <div className="grid gap-4">
            <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
              <h3 className="font-bold mb-3">Core Stack</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  React 19 with Vite for lightning-fast development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  TypeScript for type safety
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Tailwind CSS v4 for modern styling
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  React Router v7 for navigation
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-3">State & Forms</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  Zustand for lightweight state management
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  React Hook Form with Zod validation
                </li>
              </ul>
            </Card>

            <Card className="p-6 bg-card border-border/50">
              <h3 className="font-bold mb-3">UI Components</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  17 pre-configured ShadCN UI components
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Lucide React icons library
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Sonner toast notifications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  Custom Octant dark theme
                </li>
              </ul>
            </Card>
          </div>
        </div>

        {/* Next Steps */}
        <div className="pt-8 border-t border-border/40">
          <h2 className="text-2xl font-bold mb-6">Next Steps</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <Link href="/docs/tutorials/strategy-development">
              <Card className="p-6 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:border-primary/40 transition-all cursor-pointer group">
                <Rocket className="h-8 w-8 text-primary mb-3" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                  Strategy Development Tutorial
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Learn how to build a custom yield strategy from scratch
                </p>
                <Button variant="link" className="text-primary p-0 h-auto">
                  Start tutorial
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>

            <Link href="/docs/yield-donating">
              <Card className="p-6 bg-card border-border/50 hover:border-accent/20 transition-all cursor-pointer group">
                <Code2 className="h-8 w-8 text-accent mb-3" />
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors">
                  Yield Donating Strategies
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Explore different yield generation approaches
                </p>
                <Button variant="link" className="text-accent p-0 h-auto">
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Card>
            </Link>
          </div>
        </div>

        {/* Help Section */}
        <Alert className="bg-accent/10 border-accent/20">
          <Lightbulb className="h-4 w-4 text-accent" />
          <AlertDescription className="text-foreground/90">
            <strong>Need Help?</strong> Join our Discord server and use the #builder-support channel to get assistance from the Octant community and core team.
          </AlertDescription>
        </Alert>
      </div>
    </DocsLayout>
  );
}
