import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Menu, 
  X, 
  Search, 
  Home,
  BookOpen,
  Code2,
  Zap,
  Wallet,
  Blocks,
  FileCode,
  HelpCircle,
  Github,
  MessageCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

interface DocsLayoutProps {
  children: ReactNode;
}

interface NavItem {
  title: string;
  href: string;
  icon?: any;
  items?: NavItem[];
}

const navigation: NavItem[] = [
  {
    title: "Getting Started",
    href: "/docs",
    icon: Home,
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Developer Orientation", href: "/docs/orientation" },
      { title: "Quickstart Guide", href: "/docs/quickstart" },
    ]
  },
  {
    title: "Core Concepts",
    href: "/docs/concepts",
    icon: BookOpen,
    items: [
      { title: "What is Octant v2", href: "/docs/what-is-octant" },
      { title: "How It Works", href: "/docs/how-it-works" },
      { title: "Architecture", href: "/docs/architecture" },
      { title: "Glossary", href: "/docs/glossary" },
    ]
  },
  {
    title: "Developer Paths",
    href: "/docs/paths",
    icon: Code2,
    items: [
      { title: "Yield Donating Strategies", href: "/docs/yield-donating" },
      { title: "Yield Skimming Strategies", href: "/docs/yield-skimming" },
      { title: "Allocation Mechanisms", href: "/docs/allocation-mechanisms" },
      { title: "Multi-Strategy Vaults", href: "/docs/multi-strategy" },
    ]
  },
  {
    title: "Tutorials",
    href: "/docs/tutorials",
    icon: Zap,
    items: [
      { title: "Deploy Your First Vault", href: "/docs/tutorials/first-vault" },
      { title: "Strategy Development", href: "/docs/tutorials/strategy-development" },
      { title: "Integrate with Aave", href: "/docs/tutorials/aave-integration" },
      { title: "Integrate with Lido", href: "/docs/tutorials/lido-integration" },
    ]
  },
  {
    title: "API Reference",
    href: "/docs/api",
    icon: FileCode,
    items: [
      { title: "Funding Vault", href: "/docs/api/funding-vault" },
      { title: "Tokenized Strategy", href: "/docs/api/tokenized-strategy" },
      { title: "Allocation Mechanisms", href: "/docs/api/allocation" },
      { title: "Payment Splitter", href: "/docs/api/payment-splitter" },
    ]
  },
  {
    title: "Resources",
    href: "/docs/resources",
    icon: Blocks,
    items: [
      { title: "Testnet Resources", href: "/docs/resources/testnet" },
      { title: "SDKs & Tools", href: "/docs/resources/sdks" },
      { title: "Community", href: "/docs/resources/community" },
      { title: "FAQ", href: "/docs/resources/faq" },
    ]
  },
];

export default function DocsLayout({ children }: DocsLayoutProps) {
  const [location] = useLocation();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const isActive = (href: string) => {
    if (href === "/docs" && location === "/docs") return true;
    if (href !== "/docs" && location.startsWith(href)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Top Navigation */}
      <nav className="border-b border-border/40 backdrop-blur-sm sticky top-0 z-50 bg-background/95">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link href="/" className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <span className="text-lg font-bold text-primary-foreground">O</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Octant v2
                </span>
              </Link>
              <span className="text-sm text-muted-foreground hidden md:block">Documentation</span>
            </div>
            
            <div className="flex items-center gap-4">
              <div className="hidden md:flex items-center gap-2">
                <a 
                  href="https://github.com/golemfoundation/octant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a 
                  href="https://discord.gg/octant" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setSidebarOpen(!sidebarOpen)}
              >
                {sidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="flex gap-8">
          {/* Sidebar */}
          <aside className={cn(
            "w-64 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto",
            "md:block",
            sidebarOpen ? "block fixed inset-0 z-40 bg-background p-6 top-20" : "hidden"
          )}>
            {/* Search */}
            <div className="mb-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search docs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 bg-muted/50 border-border/50"
                />
              </div>
            </div>

            {/* Navigation */}
            <nav className="space-y-6">
              {navigation.map((section) => (
                <div key={section.href}>
                  <Link href={section.href}>
                    <div className={cn(
                      "flex items-center gap-2 text-sm font-semibold mb-2 px-3 py-2 rounded-md transition-colors",
                      isActive(section.href) 
                        ? "text-primary bg-primary/10" 
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}>
                      {section.icon && <section.icon className="h-4 w-4" />}
                      {section.title}
                    </div>
                  </Link>
                  {section.items && (
                    <ul className="space-y-1 ml-6">
                      {section.items.map((item) => (
                        <li key={item.href}>
                          <Link href={item.href}>
                            <div className={cn(
                              "text-sm px-3 py-1.5 rounded-md transition-colors",
                              isActive(item.href)
                                ? "text-primary font-medium bg-primary/10"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                            )}>
                              {item.title}
                            </div>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </nav>

            {/* Help Section */}
            <div className="mt-8 p-4 bg-card border border-border/50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <HelpCircle className="h-4 w-4 text-primary" />
                <span className="text-sm font-semibold">Need Help?</span>
              </div>
              <p className="text-xs text-muted-foreground mb-3">
                Join our Discord for support and community discussions.
              </p>
              <a 
                href="https://discord.gg/octant" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline" className="w-full text-xs">
                  Join Discord
                </Button>
              </a>
            </div>
          </aside>

          {/* Main Content */}
          <main className="flex-1 min-w-0">
            <div className="max-w-4xl">
              {children}
            </div>
          </main>

          {/* Table of Contents (Right Sidebar) */}
          <aside className="w-56 flex-shrink-0 sticky top-24 h-[calc(100vh-8rem)] overflow-y-auto hidden xl:block">
            <div className="text-sm">
              <div className="font-semibold mb-4 text-foreground">On This Page</div>
              <ul className="space-y-2 text-muted-foreground">
                <li className="hover:text-foreground transition-colors cursor-pointer">Overview</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Key Features</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Getting Started</li>
                <li className="hover:text-foreground transition-colors cursor-pointer">Examples</li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
