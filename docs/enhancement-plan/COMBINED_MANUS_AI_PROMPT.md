# COMBINED MANUS.AI PROMPT: Octant Portal Enhancement + Reorganization

**Repository:** https://github.com/ReageMeuFilho/Octant-developer-portal  
**Live Site:** https://octant-developer-portal.vercel.app  
**Source Files Branch:** `content-source-files`

---

## 🎯 **Three-Phase Approach**

This combines content enhancement with navigation reorganization in a safe, systematic way.

---

## **PHASE 1: AUDIT & INVENTORY (DO THIS FIRST!)**

### **Task 1.1: Current State Audit**

Document what actually exists on the portal:

```markdown
## Portal Inventory

### Pages That Exist:
- [ ] /docs/getting-started/overview
- [ ] /docs/getting-started/quickstart
- [ ] /docs/tutorials/first-vault
- [ ] /docs/tutorials/aave-integration
- [ ] /docs/tutorials/lido-integration
- [ ] /use-cases/sarah-conservative-investor
- [ ] /docs/diagrams/system-overview
- [ ] ... (complete list)

### Page Status:
For each page, note:
- ✅ Complete (has substantial content)
- ⚠️ Stub (placeholder or "Coming Soon")
- 🔴 Broken (missing or errors)
- 📝 Content depth (word count, code examples)

### Current Navigation Structure:
Document actual nav config (JSON/YAML/MDX file location)

### Broken Links Found:
List all `href="#"` or broken internal links
```

**Deliverable:** `audit-report-phase1.md` with complete inventory

**STOP HERE and report findings before proceeding!**

---

## **PHASE 2: CONTENT ENHANCEMENT**

### **Task 2.1: Add Overview Video to Landing Page**

**Priority:** 🔴 HIGH (Great for user onboarding)

**Video Details:**
- Duration: 2 minutes 35 seconds
- Purpose: Overview of Octant's mission and architecture
- Location: `/public/videos/octant-overview.mp4` (after upload)

**Target Page:** `client/src/pages/docs/getting-started/Overview.tsx` (or similar)

**Implementation:**

1. **Upload Video Assets First:**

```bash
# In portal repo
mkdir -p public/videos
# Copy video file (Wesley will provide)
# Video should be at: public/videos/octant-overview.mp4
# Poster image should be at: public/videos/octant-overview-poster.jpg
```

2. **Insert Video Block:**

**Insertion Point:** Immediately below the H1 and first intro paragraph

**If page supports MDX components (preferred):**

```typescript
<a id="overview-video" />

<div className="not-prose my-6">
  <video
    title="What is Octant?"
    src="/videos/octant-overview.mp4"
    poster="/videos/octant-overview-poster.jpg"
    controls
    preload="metadata"
    className="w-full rounded-lg border border-gray-800"
  >
    <track 
      kind="captions" 
      src="/videos/octant-overview-en.vtt" 
      srcLang="en" 
      label="English" 
    />
    Your browser doesn't support embedded videos. 
    <a href="/videos/octant-overview.mp4" className="text-blue-400 hover:underline">
      Download the video here
    </a>.
  </video>
</div>

<div className="bg-blue-900/20 border border-blue-800 rounded-lg p-4 my-6">
  <p className="text-blue-200">
    🎥 <strong>Watch:</strong> A concise, 2:30 overview of Octant's mission and architecture.
  </p>
</div>

<details className="my-4">
  <summary className="cursor-pointer text-gray-300 hover:text-white">
    Prefer text? Read the short transcript
  </summary>
  <div className="mt-2 text-gray-400 text-sm">
    <em>
      In this 2:30 video, we cover how deposits flow into yield strategies, 
      how profits are routed and split, and how allocations fund public goods. 
      We also outline personas (endowments, DAOs, crypto-native users) and 
      show where to go next: Quickstart, Core Concepts, and Diagram Library.
    </em>
  </div>
</details>
```

**If Markdown only (fallback):**

```markdown
<a id="overview-video"></a>

<div style="margin: 1.25rem 0;">
  <video
    title="What is Octant?"
    src="/videos/octant-overview.mp4"
    poster="/videos/octant-overview-poster.jpg"
    controls
    style="width: 100%; max-width: 100%; height: auto; border-radius: 0.5rem;"
    preload="metadata"
  >
    <track kind="captions" src="/videos/octant-overview-en.vtt" srclang="en" label="English">
    Your browser doesn't support embedded videos. 
    <a href="/videos/octant-overview.mp4">Download the video here</a>.
  </video>
</div>

> 🎥 **Watch:** A concise, 2:30 overview of Octant's mission and architecture.

<details>
  <summary>Prefer text? Read the short transcript</summary>
  <p><em>In this 2:30 video, we cover how deposits flow into yield strategies, how profits are routed and split, and how allocations fund public goods. We also outline personas (endowments, DAOs, crypto-native users) and show where to go next: Quickstart, Core Concepts, and Diagram Library.</em></p>
</details>
```

3. **Add Sidebar Link:**

In navigation config, add under Overview section:

```typescript
{
  label: '🎥 Overview Video',
  href: '/docs/getting-started/overview#overview-video'
}
```

Position: Immediately after "What is Octant?"

4. **Add Optional CTA Card (Bottom of Page):**

```typescript
<div className="mt-12 bg-gradient-to-r from-blue-900/30 to-purple-900/30 border border-blue-800 rounded-lg p-6">
  <h3 className="text-xl font-bold mb-2">New to Octant?</h3>
  <p className="text-gray-300 mb-4">
    Watch the <strong>2:30 overview video</strong> to see how deposits 
    become impact and where to go next.
  </p>
  <a 
    href="/docs/getting-started/overview#overview-video"
    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
  >
    🎥 Watch Overview Video
  </a>
</div>
```

**Requirements:**
- ✅ No autoplay, no muted, no loop
- ✅ Controls enabled
- ✅ Responsive (100% width)
- ✅ Poster image for preview
- ✅ Anchor link for direct navigation
- ✅ Fallback for unsupported browsers

---

### **Task 2.2: Fix Broken Links (CRITICAL)**

**Files to scan:** All `.tsx` files in `client/src/pages/docs/`

**Find and fix:**
```typescript
// ❌ WRONG - Empty anchors
<a href="#">Install Tools</a>
<a href="#">Next Tutorial</a>

// ✅ CORRECT - React Router Links
import { Link } from 'react-router-dom';

<Link to="/docs/getting-started/installation">Install Tools</Link>
<Link to="/docs/tutorials/lido-integration">Next Tutorial</Link>
```

**Action:** Search for `href="#"` and replace with actual paths based on your audit.

---

### **Task 2.3: Enhance Aave Tutorial**

**Source:** `content-source-files` branch → `content-source/getting-started/4-build-first-strategy/tutorial-simple-lending.md`

**Target:** `client/src/pages/docs/tutorials/AaveIntegration.tsx`

**Requirements:**
1. Full Solidity contract code with explanations
2. Step-by-step instructions (create, test, deploy, monitor)
3. ⚠️ Security warnings (CRITICAL - add prominent warning box)
4. Breadcrumbs navigation
5. Code blocks with copy buttons
6. Navigation footer (Previous/Next)

**Template structure:**
```typescript
import { Link } from 'react-router-dom';
import { DocsLayout } from '@/components/DocsLayout';
import { CodeBlock } from '@/components/CodeBlock';
import { Callout } from '@/components/Callout';

export default function AaveIntegration() {
  return (
    <DocsLayout
      title="Build a Simple Lending Strategy"
      description="Deploy USDC to Aave and donate interest"
    >
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link to="/docs">Docs</Link> → 
        <Link to="/docs/tutorials">Tutorials</Link> → 
        <span>Aave Integration</span>
      </nav>

      {/* Time & Difficulty */}
      <div className="flex gap-3 mb-6">
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
          ⏱️ 45 minutes
        </span>
        <span className="px-3 py-1 bg-gray-800 rounded-full text-sm">
          ⭐⭐ Intermediate
        </span>
      </div>

      {/* Prerequisites */}
      <Callout type="info" title="Prerequisites">
        <ul>
          <li><Link to="/docs/getting-started/installation">Environment Setup</Link></li>
          <li>Basic Solidity knowledge</li>
          <li>Foundry experience</li>
        </ul>
      </Callout>

      {/* Main Content */}
      <div className="prose prose-invert max-w-none space-y-12">
        {/* Convert markdown content to React components */}
        {/* Include all steps, code examples, explanations */}
      </div>

      {/* SECURITY WARNING - CRITICAL! */}
      <Callout type="warning" title="⚠️ Security Warning" className="my-8">
        <p className="font-bold mb-3">
          This tutorial code is for EDUCATIONAL purposes only.
        </p>
        <p>Before deploying to mainnet with real funds:</p>
        <ol className="list-decimal list-inside space-y-2">
          <li>Get professional security audit ($20k-$50k)</li>
          <li>Achieve &gt;95% test coverage</li>
          <li>Start with limited TVL ($10k-$100k)</li>
          <li>Monitor for 2-4 weeks before scaling</li>
        </ol>
        <p className="mt-3 font-bold">
          ⚠️ DeFi transactions are IRREVERSIBLE. Test thoroughly!
        </p>
      </Callout>

      {/* Navigation Footer */}
      <div className="flex justify-between mt-12 pt-8 border-t border-gray-800">
        <Link to="/docs/tutorials/first-vault" className="btn-secondary">
          ← Previous: First Vault
        </Link>
        <Link to="/docs/tutorials/lido-integration" className="btn-primary">
          Next: Lido Integration →
        </Link>
      </div>
    </DocsLayout>
  );
}
```

---

### **Task 2.4: Add Visual Protocol Guide (NEW PAGE)**

**Source:** `content-source-files` branch → `content-source/getting-started/3-visual-guide/protocol-diagrams.md`

**Create:** `client/src/pages/docs/getting-started/VisualGuide.tsx`

**Requirements:**
1. Install `react-mermaid` if not already: `pnpm add react-mermaid`
2. Create `MermaidDiagram.tsx` component
3. Add all 10 diagrams from source file
4. Add navigation between diagrams
5. Add "Key Points" callouts for each diagram

**Add route:**
```typescript
// client/src/App.tsx
<Route path="/docs/getting-started/visual-guide" element={<VisualGuide />} />
```

---

### **Task 2.5: Add Breadcrumb Navigation Component**

**Create:** `client/src/components/Breadcrumbs.tsx`

```typescript
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-400 mb-8">
      <Link to="/" className="hover:text-gray-200">Home</Link>
      {items.map((item, index) => (
        <div key={index} className="flex items-center space-x-2">
          <ChevronRight size={14} />
          {item.href ? (
            <Link to={item.href} className="hover:text-gray-200">
              {item.label}
            </Link>
          ) : (
            <span className="text-gray-200 font-medium">{item.label}</span>
          )}
        </div>
      ))}
    </nav>
  );
}
```

**Apply to all pages:**
```typescript
<Breadcrumbs items={[
  { label: 'Docs', href: '/docs' },
  { label: 'Tutorials', href: '/docs/tutorials' },
  { label: 'Aave Integration' }
]} />
```

---

### **Task 2.6: Enhance Code Block Component**

**Update or create:** `client/src/components/CodeBlock.tsx`

Add copy-to-clipboard functionality with visual feedback.

---

## **PHASE 3: NAVIGATION REORGANIZATION**

**ONLY DO THIS AFTER Phase 2 is complete and approved!**

### **Task 3.1: Backup Current Navigation**

```bash
# Create backup
mkdir -p backups
cp [current-nav-config-file] backups/nav-$(date +%Y%m%d-%H%M%S).json
```

---

### **Task 3.2: Implement New Navigation Structure**

Based on ChatGPT's proposal with adjustments from Phase 1 audit.

#### **Top Navigation (Horizontal Bar)**

Update labels only (keep all URLs unchanged):

```typescript
const topNav = [
  { label: 'Overview', href: '/docs/getting-started/overview' },
  { label: 'Developer Guide', href: '/docs/tutorials' },
  { label: 'Architecture & Diagrams', href: '/docs/diagrams' },
  { label: 'Use Cases & Personas', href: '/use-cases' },
  { label: 'Reference', href: '/docs/reference' },
  { label: 'Resources', href: '/docs/resources' },
  { label: 'GitHub', href: 'https://github.com/golemfoundation/octant-v2-core' }
];
```

---

#### **Left Sidebar (Collapsible Groups)**

```typescript
const sidebarNav = {
  'Overview': {
    collapsed: false,
    items: [
      { label: 'What is Octant?', href: '/docs/getting-started/overview' },
      { label: 'Core Principles', href: '/docs/getting-started/core-principles' },
      { label: 'How Yield Becomes Impact', href: '/docs/getting-started/funding-pipeline' },
      { label: 'Key Components', href: '/docs/getting-started/components' },
      { label: 'Security & Risks', href: '/docs/getting-started/security-and-risks' },
      { label: 'Developer Orientation', href: '/docs/getting-started/developer-orientation' }
    ]
  },

  'Core Concepts': {
    collapsed: false,
    groups: [
      {
        label: 'Yield Mechanisms',
        items: [
          { label: 'Yield Donating (YDS)', href: '/docs/getting-started/yield-donating' },
          { label: 'Yield Skimming (YSS)', href: '/docs/getting-started/yield-skimming' },
          { label: 'Strategy Decision Tree', href: '/docs/getting-started/strategy-decision-tree' }
          // Hide if stub: { label: 'Harvest Cycle', href: '/docs/getting-started/harvest-cycle', draft: true }
        ]
      },
      {
        label: 'Routing & Distribution',
        items: [
          { label: 'Routing & Splitting', href: '/docs/getting-started/routing-and-splitting' },
          { label: 'Allocation Mechanisms', href: '/docs/getting-started/allocation-mechanisms' }
        ]
      },
      {
        label: 'Governance',
        items: [
          { label: 'Dragon Router', href: '/docs/diagrams/governance-allocation/dragon-router' },
          { label: 'Proposal Lifecycle', href: '/docs/diagrams/governance-allocation/proposal-lifecycle' }
        ]
      }
    ]
  },

  'Architecture & Diagrams': {
    collapsed: false,
    groups: [
      {
        label: 'System Overview',
        items: [
          { label: 'System Overview', href: '/docs/diagrams/getting-started/system-overview' },
          { label: 'Deposit & Withdrawal', href: '/docs/diagrams/core-concepts/deposit-withdrawal' },
          { label: 'Yield Generation', href: '/docs/diagrams/core-concepts/yield-generation' },
          { label: 'Multi-Strategy Vault', href: '/docs/diagrams/core-concepts/multi-strategy-vault' }
        ]
      },
      {
        label: 'Yield Mechanisms',
        items: [
          { label: 'Yield Donating', href: '/docs/diagrams/yield-mechanisms/yield-donating' },
          { label: 'Yield Skimming', href: '/docs/diagrams/yield-mechanisms/yield-skimming' }
        ]
      },
      {
        label: 'Governance & Allocation',
        items: [
          { label: 'Dragon Router', href: '/docs/diagrams/governance-allocation/dragon-router' },
          { label: 'Proposal Lifecycle', href: '/docs/diagrams/governance-allocation/proposal-lifecycle' }
        ]
      }
    ]
  },

  'Developer Guide': {
    collapsed: false,
    groups: [
      {
        label: 'Quickstart Path',
        items: [
          { label: 'Get Started in 10 Minutes', href: '/docs/tutorials/quickstart' },
          { label: 'Environment Setup', href: '/docs/tutorials/installation' },
          { label: 'Visual Protocol Guide', href: '/docs/getting-started/visual-guide' }  // NEW!
        ]
      },
      {
        label: 'Strategy Development',
        items: [
          { label: 'Aave V3 Strategy (YDS)', href: '/docs/tutorials/aave-integration' },
          { label: 'Lido stETH Strategy (YSS)', href: '/docs/tutorials/lido-integration' }
        ]
      },
      {
        label: 'Testing & Security',
        items: [
          { label: 'Security Checklist', href: '/docs/getting-started/security-and-risks' },
          { label: 'Troubleshooting', href: '/docs/tutorials/troubleshooting' }  // NEW if created
        ]
      }
    ]
  },

  'Use Cases & Personas': {
    collapsed: true,
    groups: [
      {
        label: 'Personas',
        items: [
          { label: 'Sarah: Conservative Investor', href: '/use-cases/sarah-conservative-investor' },
          { label: 'Dr. Chen: Sophisticated Investor', href: '/use-cases/dr-chen-sophisticated-investor' },
          { label: 'Marcus: Crypto Enthusiast', href: '/use-cases/marcus-crypto-enthusiast' }
          // Only include if pages exist - check audit results
        ]
      },
      {
        label: 'Use Cases',
        items: [
          { label: 'Endowment Yield-to-Impact', href: '/use-cases/endowment-yield-to-impact' },
          { label: 'Foundation Streaming Grants', href: '/use-cases/foundation-streaming-grants' },
          { label: 'DAO Programmable Treasury', href: '/use-cases/dao-programmable-treasury' }
          // Only include if pages exist
        ]
      }
    ]
  },

  'Reference': {
    collapsed: true,
    items: [
      { label: 'Main Glossary', href: '/docs/reference/main-glossary' }
      // Add others if they exist
    ]
  },

  'Resources': {
    collapsed: true,
    items: [
      { label: 'FAQ', href: '/docs/resources/faq' },
      { label: 'Community & Support', href: '/docs/resources/community' }
      // Only include existing pages
    ]
  }
};
```

---

### **Task 3.3: Hide "Coming Soon" Pages**

For any page that is a stub or shows "Coming Soon":

```typescript
// In your nav config
{ 
  label: 'Harvest Cycle', 
  href: '/docs/getting-started/harvest-cycle',
  draft: true  // Hides from nav but keeps file
}
```

Or if using a separate drafts system:
```typescript
const drafts = [
  '/docs/getting-started/harvest-cycle',
  '/docs/diagrams/governance-allocation/payment-splitter',
  // ... all stub pages
];

// Filter from nav
items: items.filter(item => !drafts.includes(item.href))
```

---

### **Task 3.4: Validate Mermaid Diagrams**

Check all diagram pages:
```bash
# Find pages with Mermaid syntax errors
grep -r "Syntax error in text" client/src/pages/docs/diagrams/
```

For broken diagram pages:
- If diagram-only: set `draft: true` (hide from nav)
- If mixed content: leave visible but add note about diagram being updated

---

### **Task 3.5: Add Cross-Linking**

At bottom of Core Concepts pages, add:

```typescript
<div className="mt-12 pt-8 border-t border-gray-800">
  <h3 className="text-xl font-bold mb-4">Next Steps</h3>
  <div className="grid md:grid-cols-3 gap-4">
    <div>
      <h4 className="font-semibold mb-2">📖 Learn More</h4>
      <Link to="/docs/tutorials/aave-integration">Build Aave Strategy →</Link>
    </div>
    <div>
      <h4 className="font-semibold mb-2">📊 See Diagram</h4>
      <Link to="/docs/diagrams/yield-mechanisms/yield-donating">Visual Guide →</Link>
    </div>
    <div>
      <h4 className="font-semibold mb-2">📚 Reference</h4>
      <Link to="/docs/reference/main-glossary#yds">Glossary: YDS →</Link>
    </div>
  </div>
</div>
```

---

## **SAFEGUARDS (Throughout All Phases)**

### **MUST NOT:**
- ❌ Change CSS, colors, fonts, spacing, layout
- ❌ Change, delete, or redirect any existing URL
- ❌ Overwrite working Markdown/MDX content
- ❌ Remove working links
- ❌ Delete any files

### **MUST DO:**
- ✅ Create backups before changes
- ✅ Test all links after changes
- ✅ Verify no 404s introduced
- ✅ Keep all existing pages accessible
- ✅ Document all changes in CHANGELOG.md

---

## **DELIVERABLES**

### **After Phase 1:**
- `audit-report-phase1.md` - Complete portal inventory
- Stop and get approval before Phase 2

### **After Phase 2:**
- Enhanced tutorial pages with complete content
- New Visual Guide page
- Breadcrumbs component
- Enhanced CodeBlock component
- All broken links fixed
- `CHANGELOG-phase2.md`

### **After Phase 3:**
- Reorganized navigation structure
- `backups/nav-[timestamp].json`
- Updated nav config file
- Draft status applied to stub pages
- `CHANGELOG-phase3.md`

---

## **TESTING CHECKLIST**

After each phase:

### **Phase 1:**
- [ ] Audit report is complete and accurate
- [ ] All existing pages documented
- [ ] Current nav structure documented
- [ ] Broken links identified

### **Phase 2:**
- [ ] All `href="#"` links fixed
- [ ] Aave tutorial is comprehensive
- [ ] Visual Guide page works
- [ ] Mermaid diagrams render
- [ ] Code copy buttons work
- [ ] Breadcrumbs on all pages
- [ ] No new 404s introduced
- [ ] Mobile responsive

### **Phase 3:**
- [ ] Nav structure matches specification
- [ ] All URLs still work
- [ ] "Coming Soon" pages hidden
- [ ] Top nav labels updated
- [ ] Sidebar groups collapsible
- [ ] Breadcrumbs reflect new structure
- [ ] Cross-links added
- [ ] No CSS/style changes
- [ ] Backup created

---

## **PRIORITY ORDER**

1. **Phase 1 (Audit)** - 1-2 days
2. **Phase 2 (Content)** - 1 week  
3. **Phase 3 (Nav)** - 2-3 days

**Total Timeline:** ~2 weeks

---

## **QUESTIONS TO RESOLVE BEFORE STARTING**

1. What's the actual nav config file location? (e.g., `nav.config.ts`, `sidebar.json`, etc.)
2. Are shadcn/ui components already available?
3. Is `react-mermaid` already installed?
4. Which pages from ChatGPT's list actually exist?
5. Should we create missing pages or just reorganize what exists?

---

**BEGIN WITH PHASE 1 AUDIT AND REPORT FINDINGS BEFORE PROCEEDING!**

