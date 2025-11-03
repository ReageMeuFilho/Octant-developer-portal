import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Navigation() {
  const [useCasesOpen, setUseCasesOpen] = useState(false);

  return (
    <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/80">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                <span className="text-lg font-bold text-primary-foreground">O</span>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Octant v2
              </span>
            </div>
          </Link>
          
          <div className="hidden md:flex items-center gap-8">
            {/* Use Cases Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setUseCasesOpen(true)}
              onMouseLeave={() => setUseCasesOpen(false)}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Use Cases
                <ChevronDown className={`h-4 w-4 transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {useCasesOpen && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-background border border-border/40 rounded-lg shadow-lg py-2 z-50">
                  <Link href="/use-cases">
                    <div className="px-4 py-2 hover:bg-accent/10 cursor-pointer transition-colors">
                      <div className="font-medium text-sm">Overview</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Explore all use cases</div>
                    </div>
                  </Link>
                  <Link href="/use-cases/endowment-yield-to-impact">
                    <div className="px-4 py-2 hover:bg-accent/10 cursor-pointer transition-colors">
                      <div className="font-medium text-sm">🏛 Endowment Yield-to-Impact</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Preserve principal, stream yield</div>
                    </div>
                  </Link>
                  <Link href="/use-cases/foundation-streaming-grants">
                    <div className="px-4 py-2 hover:bg-accent/10 cursor-pointer transition-colors">
                      <div className="font-medium text-sm">💧 Foundation Streaming Grants</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Milestone-based funding flows</div>
                    </div>
                  </Link>
                  <Link href="/use-cases/dao-programmable-treasury">
                    <div className="px-4 py-2 hover:bg-accent/10 cursor-pointer transition-colors">
                      <div className="font-medium text-sm">⚙️ DAO Programmable Treasury</div>
                      <div className="text-xs text-muted-foreground mt-0.5">Epoch-based public goods funding</div>
                    </div>
                  </Link>
                </div>
              )}
            </div>

            <Link href="/docs" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Documentation
            </Link>
            <Link href="/docs/quickstart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Quickstart
            </Link>
            <Link href="/docs/tutorials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Tutorials
            </Link>
            <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
          
          <Link href="/docs">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
