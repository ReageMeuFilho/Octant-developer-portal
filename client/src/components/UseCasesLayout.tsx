import { Link, useLocation } from "wouter";
import Navigation from "./Navigation";
import { ChevronRight, Home } from "lucide-react";
import { ReactNode } from "react";

interface UseCasesLayoutProps {
  children: ReactNode;
}

export default function UseCasesLayout({ children }: UseCasesLayoutProps) {
  const [location] = useLocation();

  const navItems = [
    { href: "/use-cases", label: "Overview", emoji: "📋" },
    { href: "/use-cases/endowment-yield-to-impact", label: "Endowment Yield-to-Impact", emoji: "🏛" },
    { href: "/use-cases/foundation-streaming-grants", label: "Foundation Streaming Grants", emoji: "💧" },
    { href: "/use-cases/dao-programmable-treasury", label: "DAO Programmable Treasury", emoji: "⚙️" },
  ];

  const getCurrentPageTitle = () => {
    const currentItem = navItems.find(item => item.href === location);
    return currentItem?.label || "Use Cases";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-6 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="h-4 w-4" />
            Home
          </Link>
          <ChevronRight className="h-4 w-4" />
          <Link href="/use-cases" className="hover:text-foreground transition-colors">
            Use Cases
          </Link>
          {location !== "/use-cases" && (
            <>
              <ChevronRight className="h-4 w-4" />
              <span className="text-foreground">{getCurrentPageTitle()}</span>
            </>
          )}
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Navigation */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="lg:sticky lg:top-24 space-y-2">
              <h3 className="font-bold text-sm text-muted-foreground uppercase tracking-wider mb-4">
                Use Cases
              </h3>
              {navItems.map((item) => (
                <Link key={item.href} href={item.href}>
                  <div
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all cursor-pointer ${
                      location === item.href
                        ? "bg-primary/10 text-primary border-l-4 border-l-primary font-medium"
                        : "text-muted-foreground hover:bg-accent/10 hover:text-foreground border-l-4 border-l-transparent"
                    }`}
                  >
                    <span className="text-xl">{item.emoji}</span>
                    <span className="text-sm">{item.label}</span>
                  </div>
                </Link>
              ))}
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 max-w-4xl">
            {children}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border/40 mt-24">
        <div className="container mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-bold mb-4">Documentation</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <Link href="/docs" className="block hover:text-foreground transition-colors">
                  Getting Started
                </Link>
                <Link href="/docs/quickstart" className="block hover:text-foreground transition-colors">
                  Quickstart
                </Link>
                <Link href="/docs/tutorials" className="block hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Use Cases</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                {navItems.map((item) => (
                  <Link key={item.href} href={item.href} className="block hover:text-foreground transition-colors">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <div className="space-y-2 text-sm text-muted-foreground">
                <a href="https://github.com/golemfoundation/octant" target="_blank" rel="noopener noreferrer" className="block hover:text-foreground transition-colors">
                  GitHub
                </a>
                <Link href="/docs/faq" className="block hover:text-foreground transition-colors">
                  FAQ
                </Link>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">About</h4>
              <p className="text-sm text-muted-foreground">
                Octant v2 — Open infrastructure for sustainable ecosystem funding
              </p>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
            © 2025 Octant v2. Built with ❤️ for the Ethereum ecosystem.
          </div>
        </div>
      </footer>
    </div>
  );
}
