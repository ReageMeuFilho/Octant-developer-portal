import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Navigation() {
  const [useCasesOpen, setUseCasesOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setUseCasesOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setUseCasesOpen(false);
    }, 200);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
          
          {/* TOP NAVIGATION - Phase 3 Reorganized (currently hidden for judging, remove 'hidden' class to show) */}
          <div className="hidden md:flex items-center gap-8">
            {/* Overview */}
            <Link href="/docs/getting-started/overview" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Overview
            </Link>

            {/* Developer Guide */}
            <Link href="/docs/quickstart" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Developer Guide
            </Link>

            {/* Architecture & Diagrams */}
            <Link href="/docs/diagrams" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Architecture & Diagrams
            </Link>

            {/* Use Cases & Personas Dropdown */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
                Use Cases & Personas
                <ChevronDown className={`h-4 w-4 transition-transform ${useCasesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {useCasesOpen && (
                <div 
                  className="absolute top-full left-0 mt-2 w-[600px] bg-background border border-border/40 rounded-lg shadow-xl p-6 z-50"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-8">
                    {/* Left Column - Use Cases */}
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                        USE CASES
                      </div>
                      <div className="space-y-1">
                        <Link href="/use-cases/endowment-yield-to-impact">
                          <div className="px-3 py-3 hover:bg-accent/10 cursor-pointer transition-colors rounded-lg group">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">🏛</span>
                              <div className="flex-1">
                                <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                                  Endowment Yield-to-Impact
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Preserve principal, stream only yield
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/use-cases/foundation-streaming-grants">
                          <div className="px-3 py-3 hover:bg-accent/10 cursor-pointer transition-colors rounded-lg group">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">💧</span>
                              <div className="flex-1">
                                <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                                  Foundation Streaming Grants
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Milestone-based funding flows
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>

                        <Link href="/use-cases/dao-programmable-treasury">
                          <div className="px-3 py-3 hover:bg-accent/10 cursor-pointer transition-colors rounded-lg group">
                            <div className="flex items-start gap-3">
                              <span className="text-2xl">⚙️</span>
                              <div className="flex-1">
                                <div className="font-semibold text-sm group-hover:text-primary transition-colors">
                                  DAO Programmable Treasury
                                </div>
                                <div className="text-xs text-muted-foreground mt-1">
                                  Epoch-based public goods funding
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </div>

                    {/* Right Column - Case Studies */}
                    <div>
                      <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-4">
                        CASE STUDIES
                      </div>
                      <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg p-4 border border-primary/20">
                        <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                          <span className="text-4xl">🏛</span>
                        </div>
                        <div className="text-xs text-muted-foreground mb-2">
                          Learn about how organizations use Octant
                        </div>
                        <Link href="/docs/case-studies/octant">
                          <div className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group">
                            Explore case studies
                            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Reference */}
            <Link href="/docs/getting-started/glossary" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Reference
            </Link>

            {/* Resources */}
            <Link href="/docs/resources/faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>

            {/* GitHub */}
            <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              GitHub
            </a>
          </div>
          
          {/* Get Started button also hidden for judging */}
          <Link href="/docs" className="hidden">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}
