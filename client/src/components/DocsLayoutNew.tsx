import { ReactNode, useState, useEffect } from "react";
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
  Users,
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
  ChevronRight,
  Network
} from "lucide-react";
import { cn } from "@/lib/utils";
import { APP_LOGO, APP_TITLE } from "@/const";
import Navigation from "@/components/Navigation";
import { useChatPanel } from "@/hooks/useChatPanel";
import { AIChatPanel } from "@/components/AIChatPanel";
import { AskAIButton } from "@/components/AskAIButton";
import { Breadcrumbs } from "@/components/Breadcrumbs";

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
// Phase 3: Reorganized per user preference
const tabsConfig: TabConfig[] = [
  // 1) OVERVIEW
  {
    id: "overview",
    label: "Overview",
    icon: Home,
    sections: [
      {
        title: "Introduction",
        items: [
          { title: "What is Octant?", href: "/docs/what-is-octant" },
          { title: "How It Works", href: "/docs/how-it-works" },
          { title: "Key Components", href: "/docs/getting-started/components" },
          { title: "Security & Risks", href: "/docs/getting-started/security" },
          { title: "Developer Orientation", href: "/docs/getting-started/developer-orientation" },
        ]
      }
    ]
  },
  // 2) ARCHITECTURE & DIAGRAMS
  {
    id: "diagrams",
    label: "Architecture & Diagrams",
    icon: Network,
    sections: [
      {
        title: "System Overview",
        items: [
          { title: "Visual Protocol Guide", href: "/docs/visual-protocol-guide" },
          { title: "Deposit & Withdrawal", href: "/docs/diagrams/core-concepts/deposit-withdrawal" },
          { title: "Yield Generation", href: "/docs/diagrams/core-concepts/yield-generation" },
          { title: "Multi-Strategy Vault", href: "/docs/diagrams/core-concepts/multi-strategy-vault" },
          { title: "Emergency Shutdown", href: "/docs/diagrams/core-concepts/emergency-shutdown" },
          { title: "Loss Scenario", href: "/docs/diagrams/core-concepts/loss-scenario" },
          { title: "Share Math", href: "/docs/diagrams/core-concepts/share-math" },
        ]
      },
      {
        title: "Yield Mechanisms",
        items: [
          { title: "Yield Donating", href: "/docs/diagrams/yield-mechanisms/yield-donating" },
          { title: "Yield Skimming", href: "/docs/diagrams/yield-mechanisms/yield-skimming" },
          { title: "Strategy Decision Tree", href: "/docs/diagrams/yield-mechanisms/strategy-decision-tree" },
        ]
      },
      {
        title: "Governance & Allocation",
        items: [
          { title: "Dragon Router", href: "/docs/diagrams/governance-allocation/dragon-router" },
          { title: "Proposal Lifecycle", href: "/docs/diagrams/governance-allocation/proposal-lifecycle" },
        ]
      }
    ]
  },
  // 3) TUTORIALS (TradFi)
  {
    id: "tutorials",
    label: "Tutorials",
    icon: Zap,
    sections: [
      {
        title: "For TradFi Professionals",
        items: [
          { title: "Getting Started Overview", href: "/tradfi-tutorials/getting-started-overview" },
          { title: "TradFi Analogies", href: "/tradfi-tutorials/tradfi-analogies" },
          { title: "Key Concepts", href: "/tradfi-tutorials/key-concepts" },
          { title: "Alice's Journey - Day 1", href: "/tradfi-tutorials/alice-day1" },
          { title: "Alice's Journey - Day 2", href: "/tradfi-tutorials/alice-day2" },
          { title: "Alice's Journey - Day 30", href: "/tradfi-tutorials/alice-day30" },
          { title: "Alice's Journey - Day 40", href: "/tradfi-tutorials/alice-day40" },
          { title: "Alice's Journey - Day 45", href: "/tradfi-tutorials/alice-day45" },
          { title: "Alice's Journey - Day 90", href: "/tradfi-tutorials/alice-day90" },
          { title: "Vault System Summary", href: "/tradfi-tutorials/vault-system-summary" },
          { title: "System Overview Diagram", href: "/tradfi-tutorials/system-overview-diagram" },
        ]
      },
      {
        title: "Getting Started",
        items: [
          { title: "Interactive Architecture", href: "/docs/tutorials/architecture" },
          { title: "Technical Architecture", href: "/docs/tutorials/technical" },
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
  // 4) USE CASES & PERSONAS
  {
    id: "use-cases",
    label: "Use Cases & Personas",
    icon: Users,
    sections: [
      {
        title: "Personas",
        items: [
          { title: "Find Your Path", href: "/user-journeys/find-your-path" },
          { title: "Sarah: Conservative Investor", href: "/user-journeys/sarah-conservative" },
          { title: "Dr. Chen: Sophisticated Investor", href: "/user-journeys/dr-chen-sophisticated" },
          { title: "Marcus: Crypto Enthusiast", href: "/user-journeys/marcus-crypto" },
          { title: "DeFiMaster: Yield Farmer", href: "/user-journeys/defimaster-yield" },
          { title: "Emma: Governance Activist", href: "/user-journeys/emma-governance" },
          { title: "Hedge Fund: Institutional", href: "/user-journeys/hedge-fund-institutional" },
          { title: "Protocol X: DAO Treasury", href: "/user-journeys/protocol-x-dao" },
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
  // 5) DEVELOPER GUIDE (Merged with Core Concepts)
  {
    id: "developer-guide",
    label: "Developer Guide",
    icon: Code2,
    sections: [
      {
        title: "Quickstart",
        items: [
          { title: "Get Started in 10 Minutes", href: "/docs/quickstart" },
          { title: "Integration Guides", href: "/docs/getting-started/integration-guides" },
        ]
      },
      {
        title: "Strategy Development",
        items: [
          { title: "Aave V3 Strategy (YDS)", href: "/docs/tutorials/aave-integration" },
          { title: "Lido stETH Strategy", href: "/docs/tutorials/lido-integration" },
        ]
      },
      {
        title: "Yield Mechanisms",
        items: [
          { title: "Yield Donating (YDS)", href: "/docs/getting-started/yield-donating" },
          { title: "Yield Skimming (YSS)", href: "/docs/getting-started/yield-skimming" },
          { title: "Strategy Decision Tree", href: "/docs/diagrams/yield-mechanisms/strategy-decision-tree" },
        ]
      },
      {
        title: "Distribution",
        items: [
          { title: "Routing & Splitting", href: "/docs/getting-started/routing-splitting" },
          { title: "Allocation Mechanisms", href: "/docs/getting-started/allocation-mechanisms" },
        ]
      },
      {
        title: "Governance",
        items: [
          { title: "Dragon Router", href: "/docs/diagrams/governance-allocation/dragon-router" },
          { title: "Proposal Lifecycle", href: "/docs/diagrams/governance-allocation/proposal-lifecycle" },
        ]
      },
      {
        title: "Testing & Security",
        items: [
          { title: "Security & Risk Checklist", href: "/docs/getting-started/security" },
        ]
      }
    ]
  },
  // 6) RESOURCES (includes Main Glossary)
  {
    id: "resources",
    label: "Resources",
    icon: Blocks,
    sections: [
      {
        title: "Resources",
        items: [
          { title: "Main Glossary", href: "/docs/getting-started/glossary" },
          { title: "FAQ", href: "/docs/resources/faq" },
          { title: "Testnet Information", href: "/docs/resources/testnet" },
          { title: "SDKs & Libraries", href: "/docs/resources/sdks" },
          { title: "Community & Support", href: "/docs/resources/community" },
        ]
      }
    ]
  },
  // 7) OCTANT WIKI
  {
    id: "octant-wiki",
    label: "Octant Wiki",
    icon: BookOpen,
    sections: [
      {
        title: "Staking",
        items: [
          { title: "Overview", href: "/docs/octant-wiki/overview" },
          { title: "Introduction", href: "/docs/octant-wiki/staking/introduction" },
          { title: "Delegation", href: "/docs/octant-wiki/staking/delegation" },
          { title: "Earning Power", href: "/docs/octant-wiki/staking/earning-power" },
          { title: "Reward Distribution", href: "/docs/octant-wiki/staking/reward-distribution" },
          { title: "Access Control", href: "/docs/octant-wiki/staking/access-control" },
          { title: "Advanced Operations", href: "/docs/octant-wiki/staking/advanced-operations" },
          { title: "State Management", href: "/docs/octant-wiki/staking/state-management" },
          { title: "Integration", href: "/docs/octant-wiki/staking/integration" },
          { title: "Reference", href: "/docs/octant-wiki/staking/reference" },
        ]
      }
    ]
  }
];

// OLD CONFIG REMOVED - Phase 3 reorganization complete
// All sections now follow the ChatGPT proposal structure

export default function DocsLayoutNew({ children }: DocsLayoutProps) {
  const [location] = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  // Initialize collapsed sections - all sections start undefined (expanded by default)
  const [collapsedSections, setCollapsedSections] = useState<Record<string, boolean>>({});
  
  const [helpfulVote, setHelpfulVote] = useState<"yes" | "no" | null>(null);
  
  const { isOpen: isChatOpen, isExpanded, openChat, closeChat } = useChatPanel();

  // Auto-expand parent section when a child page is active
  useEffect(() => {
    const activeTabId = getActiveTab();
    const activeTab = tabsConfig.find(tab => tab.id === activeTabId);
    if (!activeTab) return;

    // Find which section contains the current page
    activeTab.sections.forEach(section => {
      const hasActivePage = section.items.some(item => item.href === location);
      if (hasActivePage) {
        // Expand this section (false means expanded)
        setCollapsedSections(prev => ({
          ...prev,
          [section.title]: false
        }));
      }
    });
  }, [location]);

  // Determine active tab based on current location - Phase 3 reorganization
  const getActiveTab = () => {
    // Octant Wiki
    if (location.startsWith("/docs/octant-wiki")) return "octant-wiki";
    
    // Tutorials (TradFi)
    if (location.startsWith("/tradfi-tutorials")) return "tutorials";
    
    // Architecture & Diagrams
    if (location.startsWith("/docs/diagrams") || location.startsWith("/docs/visual-protocol-guide")) return "diagrams";
    
    // Developer Guide (includes former Core Concepts: yield mechanisms, governance, distribution)
    if (location.startsWith("/docs/quickstart") || 
        location.startsWith("/docs/tutorials/aave") || 
        location.startsWith("/docs/tutorials/lido") ||
        location.startsWith("/docs/getting-started/yield") || 
        location.startsWith("/docs/getting-started/routing") || 
        location.startsWith("/docs/getting-started/allocation")) return "developer-guide";
    
    // Resources (includes Main Glossary)
    if (location.startsWith("/docs/resources") || 
        location === "/docs/getting-started/glossary" || 
        location === "/docs/glossary") return "resources";
    
    // Use Cases & Personas - Show proper personas/use cases sidebar
    if (location.startsWith("/user-journeys") || location.startsWith("/use-cases")) return "use-cases";
    
    // Overview (What is Octant, How It Works, Components, Security, Dev Orientation)
    if (location.startsWith("/docs/what-is") || 
        location.startsWith("/docs/how-it") || 
        location.startsWith("/docs/architecture") ||
        location.startsWith("/docs/getting-started/components") ||
        location.startsWith("/docs/getting-started/security") ||
        location.startsWith("/docs/getting-started/developer-orientation") ||
        location.startsWith("/docs/getting-started/overview")) return "overview";
    
    // Default to overview
    return "overview";
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
                <div key={section.title} className="m-0 p-0" style={{ marginLeft: 0, paddingLeft: 0 }}>
                  <h3 className="px-3 py-2 text-sm font-semibold text-muted-foreground">
                    {section.title}
                  </h3>
                  <div className="ml-3">
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
                <div key={section.title} className="m-0 p-0" style={{ marginLeft: 0, paddingLeft: 0 }}>
                  <button
                    onClick={() => toggleSection(section.title)}
                    className="flex items-start justify-between w-full ml-0 pl-0 pr-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <span className="flex-1 text-left">
                      {section.title}
                    </span>
                    {isCollapsed ? (
                      <ChevronRight className="h-4 w-4 flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-4 w-4 flex-shrink-0" />
                    )}
                  </button>
                  {!isCollapsed && (
                    <div className="space-y-1 mt-1">
                      {section.items.map((item) => (
                        <Link key={item.href} href={item.href}>
                          <button
                            className={cn(
                              "w-full text-left pl-6 pr-3 py-2 text-sm rounded-md transition-colors",
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

        {/* Main Content - Squeezes when chat opens */}
        <main className={`flex-1 py-6 px-8 transition-all duration-300 ${
          isChatOpen && !isExpanded ? 'mr-[400px]' : 'mr-0'
        }`}>
          <div className="max-w-4xl mx-auto">
            <Breadcrumbs />
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
      
      {/* AI Chat Panel - Renders once globally */}
      <AIChatPanel isOpen={isChatOpen} onClose={closeChat} />
    </div>
  );
}

