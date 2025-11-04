import { ReactNode, useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
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
  MessageCircle,
  ThumbsUp,
  ThumbsDown,
  ExternalLink,
  ChevronDown,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_LOGO, APP_TITLE } from "@/const";
import Navigation from "@/components/Navigation";

interface DocsLayoutProps {
  children: ReactNode;
}

interface NavItem {
  title: string;
  href: string;
  icon?: any;
}

interface TabConfig {
  id: string;
  label: string;
  icon: any;
  sections: {
    title: string;
    items: NavItem[];
  }[];
}

// Define all tabs with their context-specific navigation
const tabsConfig: TabConfig[] = [
  {
    id: "getting-started",
    label: "Getting Started",
    icon: Home,
    sections: [
      {
        title: "Quick Start",
        items: [
          { title: "What You'll Build", href: "/docs/getting-started/quick-start/what-youll-build" },
          { title: "Choose Your Path", href: "/docs/getting-started/quick-start/choose-your-path" },
          { title: "Prerequisites Check", href: "/docs/getting-started/quick-start/prerequisites-check" },
        ]
      },
      {
        title: "Core Concepts",
        items: [
          { title: "Octant in 3 Minutes", href: "/docs/getting-started/core-concepts/octant-in-3-minutes" },
          { title: "Architecture Diagram", href: "/docs/getting-started/core-concepts/architecture-diagram" },
          { title: "Key Components Explained", href: "/docs/getting-started/core-concepts/key-components" },
          { title: "Yield Types: Visual Guide", href: "/docs/getting-started/core-concepts/yield-types" },
        ]
      },
      {
        title: "Environment Setup",
        items: [
          { title: "Install Prerequisites", href: "/docs/getting-started/environment-setup/install-prerequisites" },
          { title: "Clone & Run Demo", href: "/docs/getting-started/environment-setup/clone-run-demo" },
          { title: "Connect Your Wallet", href: "/docs/getting-started/environment-setup/connect-wallet" },
          { title: "Get Test Tokens", href: "/docs/getting-started/environment-setup/get-test-tokens" },
        ]
      },
      {
        title: "Build Your First Strategy",
        items: [
          { title: "Tutorial: Simple Lending Strategy", href: "/docs/getting-started/build-first-strategy/tutorial-simple-lending" },
          { title: "Tutorial: Staking Strategy", href: "/docs/getting-started/build-first-strategy/tutorial-staking" },
          { title: "Understanding Donations vs Skimming", href: "/docs/getting-started/build-first-strategy/donations-vs-skimming" },
          { title: "Testing Your Strategy", href: "/docs/getting-started/build-first-strategy/testing-strategy" },
        ]
      },
      {
        title: "Deploy to Production",
        items: [
          { title: "Testing Checklist", href: "/docs/getting-started/deploy-production/testing-checklist" },
          { title: "Deploy on Testnet", href: "/docs/getting-started/deploy-production/deploy-testnet" },
          { title: "Deploy a Multi-Strategy Vault", href: "/docs/getting-started/deploy-production/deploy-multi-strategy" },
          { title: "Monitoring & Maintenance", href: "/docs/getting-started/deploy-production/monitoring-maintenance" },
        ]
      },
      {
        title: "Frontend Integration",
        items: [
          { title: "Connect the Boilerplate", href: "/docs/getting-started/frontend-integration/connect-boilerplate" },
          { title: "Build Deposit/Withdraw UI", href: "/docs/getting-started/frontend-integration/deposit-withdraw-ui" },
          { title: "Real-Time Updates", href: "/docs/getting-started/frontend-integration/real-time-updates" },
          { title: "Production Best Practices", href: "/docs/getting-started/frontend-integration/production-best-practices" },
        ]
      },
      {
        title: "Advanced Topics",
        items: [
          { title: "Allocation Mechanisms", href: "/docs/getting-started/advanced-topics/allocation-mechanisms" },
          { title: "Community Staking", href: "/docs/getting-started/advanced-topics/community-staking" },
          { title: "Superfluid Streaming", href: "/docs/getting-started/advanced-topics/superfluid-streaming" },
          { title: "Multi-Strategy Rebalancing", href: "/docs/getting-started/advanced-topics/multi-strategy-rebalancing" },
        ]
      },
      {
        title: "Troubleshooting & Support",
        items: [
          { title: "Common Errors & Solutions", href: "/docs/getting-started/troubleshooting/common-errors" },
          { title: "Debugging Guide", href: "/docs/getting-started/troubleshooting/debugging-guide" },
          { title: "FAQs", href: "/docs/getting-started/troubleshooting/faqs" },
          { title: "Get Help from Community", href: "/docs/getting-started/troubleshooting/get-help" },
        ]
      }
    ]
  },
  {
    id: "core-concepts",
    label: "Core Concepts",
    icon: BookOpen,
    sections: [
      {
        title: "Fundamentals",
        items: [
          { title: "What is Octant v2", href: "/docs/what-is-octant" },
          { title: "How It Works", href: "/docs/how-it-works" },
          { title: "Architecture", href: "/docs/architecture" },
          { title: "Glossary", href: "/docs/glossary" },
        ]
      }
    ]
  },
  {
    id: "developer-paths",
    label: "Developer Paths",
    icon: Code2,
    sections: [
      {
        title: "Strategy Types",
        items: [
          { title: "Yield Donating Strategies", href: "/docs/yield-donating" },
          { title: "Yield Skimming Strategies", href: "/docs/yield-skimming" },
          { title: "Allocation Mechanisms", href: "/docs/allocation-mechanisms" },
          { title: "Multi-Strategy Vaults", href: "/docs/multi-strategy" },
        ]
      }
    ]
  },
  {
    id: "tutorials",
    label: "Tutorials",
    icon: Zap,
    sections: [
      {
        title: "Getting Started",
        items: [
          { title: "Deploy Your First Vault", href: "/docs/tutorials/first-vault" },
          { title: "Strategy Development", href: "/docs/tutorials/strategy-development" },
        ]
      },
      {
        title: "DeFi Integrations",
        items: [
          { title: "Aave Integration", href: "/docs/tutorials/aave-integration" },
          { title: "Lido Integration", href: "/docs/tutorials/lido-integration" },
        ]
      },
      {
        title: "Advanced",
        items: [
          { title: "Quadratic Funding", href: "/docs/tutorials/quadratic-funding" },
          { title: "Multi-Strategy Setup", href: "/docs/tutorials/multi-strategy" },
        ]
      }
    ]
  },
  {
    id: "reference",
    label: "Reference",
    icon: FileCode,
    sections: [
      {
        title: "API Documentation",
        items: [
          { title: "Funding Vault API", href: "/docs/api/funding-vault" },
          { title: "Allocation Mechanism API", href: "/docs/api/allocation-mechanism" },
          { title: "Payment Splitter API", href: "/docs/api/payment-splitter" },
        ]
      }
    ]
  },
  {
    id: "resources",
    label: "Resources",
    icon: Blocks,
    sections: [
      {
        title: "Developer Resources",
        items: [
          { title: "Testnet Information", href: "/docs/resources/testnet" },
          { title: "SDKs & Libraries", href: "/docs/resources/sdks" },
          { title: "Community", href: "/docs/resources/community" },
          { title: "FAQ", href: "/docs/resources/faq" },
        ]
      },
      {
        title: "Use Cases",
        items: [
          { title: "Endowment Yield-to-Impact", href: "/use-cases/endowment-yield-to-impact" },
          { title: "Foundation Streaming Grants", href: "/use-cases/foundation-streaming-grants" },
          { title: "DAO Programmable Treasury", href: "/use-cases/dao-programmable-treasury" },
        ]
      }
    ]
  },
];

export default function DocsLayoutNew({ children }: DocsLayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  const [helpfulVote, setHelpfulVote] = useState<"yes" | "no" | null>(null);

  // Determine active tab based on current location
  const getActiveTab = () => {
    if (location.startsWith("/docs/getting-started")) return "getting-started";
    if (location.startsWith("/docs/tutorials")) return "tutorials";
    if (location.startsWith("/docs/api")) return "reference";
    if (location.startsWith("/docs/resources") || location.startsWith("/use-cases")) return "resources";
    if (location.startsWith("/docs/yield") || location.startsWith("/docs/allocation") || location.startsWith("/docs/multi-strategy")) return "developer-paths";
    if (location.startsWith("/docs/what-is") || location.startsWith("/docs/how-it") || location.startsWith("/docs/architecture") || location.startsWith("/docs/glossary")) return "core-concepts";
    return "getting-started";
  };

  const activeTabId = getActiveTab();
  const activeTab = tabsConfig.find(tab => tab.id === activeTabId) || tabsConfig[0];

  const toggleSection = (sectionTitle: string) => {
    setCollapsedSections(prev => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle]
    }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {/* Use shared Navigation component from landing page */}
      <Navigation />
      
      {/* Documentation-specific header with tabs */}
      <header className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-12 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-muted-foreground">Documentation</span>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Horizontal Top Navigation Tabs */}
        <div className="border-t">
          <div className="container">
            <nav className="flex gap-1 overflow-x-auto">
              {tabsConfig.map((tab) => {
                const Icon = tab.icon;
                const isActive = tab.id === activeTabId;
                return (
                  <Link key={tab.id} href={tab.sections[0].items[0].href}>
                    <button
                      className={cn(
                        "flex items-center gap-2 px-4 py-3 text-sm font-medium border-b-2 transition-colors whitespace-nowrap",
                        isActive
                          ? "border-primary text-primary"
                          : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/50"
                      )}
                    >
                      <Icon className="h-4 w-4" />
                      {tab.label}
                    </button>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b bg-background">
          <div className="container py-4">
            <nav className="space-y-1">
              {activeTab.sections.map((section) => (
                <div key={section.title}>
                  <div className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                    {section.title}
                  </div>
                  {section.items.map((item) => (
                    <Link key={item.href} href={item.href}>
                      <button
                        onClick={() => setMobileMenuOpen(false)}
                        className={cn(
                          "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                          location === item.href
                            ? "bg-primary/10 text-primary font-medium"
                            : "text-foreground hover:bg-muted"
                        )}
                      >
                        {item.title}
                      </button>
                    </Link>
                  ))}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <div className="container flex-1 flex">
        {/* Context-Aware Left Sidebar */}
        <aside className="hidden md:block w-64 flex-shrink-0 border-r sticky top-28 h-[calc(100vh-7rem)] overflow-y-auto py-6">
          <nav className="space-y-6">
            {activeTab.sections.map((section) => {
              const isCollapsed = collapsedSections[section.title];
              return (
                <div key={section.title}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-center justify-between w-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {section.title}
                    {isCollapsed ? (
                      <ChevronRight className="h-4 w-4" />
                    ) : (
                      <ChevronDown className="h-4 w-4" />
                    )}
                  </button>
                  {!isCollapsed && (
                    <div className="space-y-1 mt-1">
                      {section.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <button
                            className={cn(
                              "w-full text-left px-3 py-2 text-sm rounded-md transition-colors",
                              location === item.href
                                ? "bg-primary/10 text-primary font-medium"
                                : "text-foreground hover:bg-muted"
                            )}
                          >
                            {item.title}
                          </button>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 py-6 px-8">
          <div className="max-w-4xl mx-auto">
            {children}

            {/* Resources Panel */}
            <Card className="mt-16 p-6 bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
              <h3 className="text-lg font-bold mb-4">Developer Resources</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <Link href="/docs/tutorials">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Code2 className="h-4 w-4" />
                    Browse Sample Projects
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="/docs/resources/testnet">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Zap className="h-4 w-4" />
                    Test Your Integration
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="/docs/resources/sdks">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Blocks className="h-4 w-4" />
                    Build with SDKs
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </Link>
                <Link href="/docs/resources/community">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <MessageCircle className="h-4 w-4" />
                    Developer Community
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </Link>
                <a href="https://github.com/octant" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <Github className="h-4 w-4" />
                    Partner Directory
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </a>
                <Link href="/docs/resources/faq">
                  <Button variant="ghost" className="w-full justify-start gap-2">
                    <HelpCircle className="h-4 w-4" />
                    Support Site
                    <ExternalLink className="h-3 w-3 ml-auto" />
                  </Button>
                </Link>
              </div>
            </Card>

            {/* Feedback & Support Footer */}
            <div className="mt-12 pt-8 border-t space-y-6">
              {/* Was this helpful? */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Was this page helpful?</span>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant={helpfulVote === "yes" ? "default" : "outline"}
                    onClick={() => setHelpfulVote("yes")}
                    className="gap-2"
                  >
                    <ThumbsUp className="h-4 w-4" />
                    Yes
                  </Button>
                  <Button
                    size="sm"
                    variant={helpfulVote === "no" ? "default" : "outline"}
                    onClick={() => setHelpfulVote("no")}
                    className="gap-2"
                  >
                    <ThumbsDown className="h-4 w-4" />
                    No
                  </Button>
                </div>
              </div>

              {/* Quick Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <Link href="/docs/resources/community">
                  <Button variant="link" className="h-auto p-0">Contact Support</Button>
                </Link>
                <span className="text-muted-foreground">·</span>
                <a href="https://github.com/octant" target="_blank" rel="noopener noreferrer">
                  <Button variant="link" className="h-auto p-0">View Changelog</Button>
                </a>
                <span className="text-muted-foreground">·</span>
                <Link href="/docs/quickstart">
                  <Button variant="link" className="h-auto p-0">Contact Partnerships</Button>
                </Link>
              </div>

              {/* Newsletter Signup */}
              <Card className="p-6 bg-muted/50">
                <h4 className="font-semibold mb-2">Subscribe to Developer Newsletter</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Get updates on new features, tutorials, and community events.
                </p>
                <div className="flex gap-2">
                  <Input placeholder="Enter your email" type="email" />
                  <Button>Sign up</Button>
                </div>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
