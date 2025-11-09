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
          
          {/* TOP NAVIGATION HIDDEN - Only horizontal tabs below nav bar are shown */}
          <div style={{ display: 'none' }}>
            {/* All top navigation links hidden for cleaner UI */}
          </div>
        </div>
      </div>
    </nav>
  );
}
