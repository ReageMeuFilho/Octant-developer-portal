# Contributing to Octant v2 Developer Portal

Thank you for your interest in contributing to the Octant v2 Developer Portal! This document provides guidelines and instructions for contributing to the project.

---

## Table of Contents

1. [Code of Conduct](#code-of-conduct)
2. [How Can I Contribute?](#how-can-i-contribute)
3. [Development Setup](#development-setup)
4. [Project Structure](#project-structure)
5. [Adding Documentation](#adding-documentation)
6. [Adding Tutorials](#adding-tutorials)
7. [Coding Standards](#coding-standards)
8. [Commit Guidelines](#commit-guidelines)
9. [Pull Request Process](#pull-request-process)
10. [Style Guide](#style-guide)

---

## Code of Conduct

This project follows the Octant community code of conduct. By participating, you are expected to uphold this code. Please report unacceptable behavior to the project maintainers.

**Our Standards:**
- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

---

## How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check existing issues to avoid duplicates.

**When submitting a bug report, include:**
- Clear, descriptive title
- Steps to reproduce the issue
- Expected vs. actual behavior
- Screenshots (if applicable)
- Browser and OS information
- Console errors (if any)

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues.

**When suggesting enhancements, include:**
- Clear description of the proposed feature
- Explanation of why this would be useful
- Examples of how it would work
- Mockups or wireframes (if applicable)

### Contributing Code

We welcome contributions in these areas:

**Documentation:**
- New tutorial pages
- Improved explanations
- Code examples
- Translations

**Features:**
- Interactive code examples
- Search functionality
- Additional UI components
- Performance improvements

**Bug Fixes:**
- Broken links
- Typos
- Layout issues
- Accessibility problems

---

## Development Setup

### Prerequisites

- Node.js 18 or higher
- pnpm 8 or higher
- Git

### Setup Steps

1. **Fork the repository** on GitHub

2. **Clone your fork:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/Octant-developer-portal.git
   cd Octant-developer-portal
   ```

3. **Add upstream remote:**
   ```bash
   git remote add upstream https://github.com/ReageMeuFilho/Octant-developer-portal.git
   ```

4. **Install dependencies:**
   ```bash
   pnpm install
   ```

5. **Start development server:**
   ```bash
   pnpm dev
   ```

6. **Open browser:**
   Navigate to `http://localhost:3000`

### Keeping Your Fork Updated

```bash
# Fetch upstream changes
git fetch upstream

# Merge upstream main into your main
git checkout main
git merge upstream/main

# Push to your fork
git push origin main
```

---

## Project Structure

```
octant-developer-portal/
├── client/
│   ├── public/              # Static assets
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   ├── ui/         # shadcn/ui components
│   │   │   ├── DocsLayout.tsx
│   │   │   └── ErrorBoundary.tsx
│   │   ├── pages/          # Page components
│   │   │   ├── Landing.tsx
│   │   │   ├── Docs.tsx
│   │   │   └── docs/       # Documentation pages
│   │   ├── contexts/       # React contexts
│   │   ├── hooks/          # Custom hooks
│   │   ├── lib/            # Utility functions
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── index.html
│   └── vite.config.ts
├── shared/                  # Shared constants
├── README.md
├── ARCHITECTURE.md
├── DEPLOYMENT.md
├── CONTRIBUTING.md
└── package.json
```

---

## Adding Documentation

### Creating a New Documentation Page

1. **Create component file:**
   ```bash
   # For concept pages
   touch client/src/pages/docs/YourConcept.tsx
   
   # For tutorial pages
   touch client/src/pages/docs/tutorials/YourTutorial.tsx
   
   # For resource pages
   touch client/src/pages/docs/resources/YourResource.tsx
   ```

2. **Use the documentation template:**
   ```typescript
   import DocsLayout from "@/components/DocsLayout";
   import { Card } from "@/components/ui/card";
   import { Badge } from "@/components/ui/badge";
   import { Button } from "@/components/ui/button";
   import { ArrowRight } from "lucide-react";
   import { Link } from "wouter";

   export default function YourPage() {
     return (
       <DocsLayout>
         <div className="space-y-8">
           {/* Header */}
           <div>
             <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
               Category
             </Badge>
             <h1 className="text-5xl font-bold mb-4">
               Page Title
             </h1>
             <p className="text-xl text-muted-foreground leading-relaxed">
               Brief description of the page content.
             </p>
           </div>

           {/* Content sections */}
           <div>
             <h2 className="text-3xl font-bold mb-6">Section Title</h2>
             <p className="text-foreground/90 leading-relaxed">
               Section content...
             </p>
           </div>

           {/* Related resources */}
           <div className="pt-8 border-t border-border/40">
             <h2 className="text-2xl font-bold mb-6">Related Resources</h2>
             {/* Links to related pages */}
           </div>
         </div>
       </DocsLayout>
     );
   }
   ```

3. **Add route to App.tsx:**
   ```typescript
   import YourPage from "./pages/docs/YourPage";
   
   // In Router component:
   <Route path="/docs/your-page" component={YourPage} />
   ```

4. **Add to navigation in DocsLayout.tsx:**
   ```typescript
   const navigation: NavItem[] = [
     {
       title: "Your Category",
       href: "/docs/category",
       items: [
         { title: "Your Page", href: "/docs/your-page" },
       ]
     },
   ];
   ```

---

## Adding Tutorials

### Tutorial Structure

Good tutorials follow this structure:

1. **Introduction** - What will be built and why
2. **Prerequisites** - Required knowledge and tools
3. **Step-by-step instructions** - Clear, numbered steps
4. **Code examples** - Complete, runnable code
5. **Explanation** - Why each step works
6. **Testing** - How to verify it works
7. **Next steps** - Related tutorials and resources

### Tutorial Template

```typescript
export default function YourTutorial() {
  return (
    <DocsLayout>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
            Tutorial
          </Badge>
          <h1 className="text-5xl font-bold mb-4">
            Tutorial Title
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            What you'll learn and build in this tutorial.
          </p>
        </div>

        {/* Prerequisites */}
        <Alert className="bg-primary/10 border-primary/20">
          <Lightbulb className="h-4 w-4 text-primary" />
          <AlertDescription>
            <strong>Prerequisites:</strong> List required knowledge
          </AlertDescription>
        </Alert>

        {/* Steps */}
        <div>
          <h2 className="text-3xl font-bold mb-6">Step 1: Title</h2>
          <p className="text-foreground/90 mb-4">
            Explanation of the step...
          </p>
          
          <Card className="p-6 bg-muted/50 border-border/50">
            <pre className="text-sm font-mono">
              <code>{`// Code example`}</code>
            </pre>
          </Card>
        </div>

        {/* Repeat for each step */}
      </div>
    </DocsLayout>
  );
}
```

### Code Examples Best Practices

- **Complete and runnable** - Include all necessary imports and setup
- **Well-commented** - Explain non-obvious parts
- **Syntax highlighted** - Use proper code blocks
- **Copy-paste ready** - Developers should be able to use directly

---

## Coding Standards

### TypeScript

- **Use TypeScript** for all new code
- **Define interfaces** for component props
- **Avoid `any` type** - use proper types
- **Enable strict mode** in tsconfig.json

```typescript
// Good
interface ButtonProps {
  label: string;
  onClick: () => void;
  variant?: "primary" | "secondary";
}

export function Button({ label, onClick, variant = "primary" }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>;
}

// Bad
export function Button(props: any) {
  return <button onClick={props.onClick}>{props.label}</button>;
}
```

### React

- **Use functional components** with hooks
- **Extract reusable logic** into custom hooks
- **Keep components focused** - single responsibility
- **Use proper naming** - PascalCase for components

```typescript
// Good
export function UserProfile() {
  const { user, loading } = useUser();
  
  if (loading) return <Skeleton />;
  return <div>{user.name}</div>;
}

// Bad
export function userprofile() {
  // Component doing too many things
}
```

### Styling

- **Use Tailwind utilities** - avoid custom CSS when possible
- **Follow design system** - use defined colors, spacing, typography
- **Mobile-first** - start with mobile styles, enhance for desktop
- **Semantic class names** - descriptive and meaningful

```typescript
// Good
<div className="container mx-auto px-6 py-8">
  <h1 className="text-3xl font-bold text-foreground">Title</h1>
</div>

// Bad
<div style={{ padding: "20px", color: "#ffffff" }}>
  <h1>Title</h1>
</div>
```

---

## Commit Guidelines

### Commit Message Format

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat:** New feature
- **fix:** Bug fix
- **docs:** Documentation changes
- **style:** Code style changes (formatting, no logic change)
- **refactor:** Code refactoring
- **test:** Adding or updating tests
- **chore:** Maintenance tasks

### Examples

```
feat(docs): add Aave integration tutorial

Add comprehensive tutorial for integrating Aave lending pools
as a yield source for Octant v2 vaults. Includes code examples,
deployment instructions, and testing guide.

Closes #42
```

```
fix(navigation): resolve broken links in sidebar

Update DocsLayout navigation to use correct paths for
tutorial pages. All sidebar links now work correctly.
```

---

## Pull Request Process

### Before Submitting

1. **Test your changes:**
   ```bash
   pnpm dev    # Test in development
   pnpm build  # Ensure production build works
   pnpm preview # Test production build
   ```

2. **Check code quality:**
   ```bash
   pnpm lint   # Run ESLint
   pnpm type-check # Check TypeScript types
   ```

3. **Update documentation** if needed

4. **Add yourself to contributors** (if first contribution)

### Submitting Pull Request

1. **Create feature branch:**
   ```bash
   git checkout -b feat/your-feature-name
   ```

2. **Make your changes** and commit

3. **Push to your fork:**
   ```bash
   git push origin feat/your-feature-name
   ```

4. **Open Pull Request** on GitHub

5. **Fill out PR template:**
   - Description of changes
   - Related issues
   - Screenshots (if UI changes)
   - Testing performed

### PR Review Process

- Maintainers will review your PR
- Address any requested changes
- Once approved, PR will be merged
- Your contribution will be included in the next release

---

## Style Guide

### Writing Documentation

**Be Clear and Concise:**
- Use simple language
- Short sentences and paragraphs
- Active voice
- Present tense

**Be Helpful:**
- Explain why, not just how
- Anticipate questions
- Provide context
- Link to related resources

**Be Consistent:**
- Follow existing patterns
- Use same terminology
- Match tone and style
- Follow formatting conventions

### Code Comments

```typescript
// Good: Explains why
// Use debouncing to prevent excessive API calls during rapid typing
const debouncedSearch = useMemo(() => debounce(search, 300), []);

// Bad: Explains what (obvious from code)
// Call the search function
search();
```

---

## Questions?

If you have questions about contributing:

- **Open an issue** for general questions
- **Join Discord** for real-time discussion
- **Email maintainers** for private inquiries

---

## Recognition

Contributors will be:
- Listed in the README
- Mentioned in release notes
- Credited in documentation they create

Thank you for helping make the Octant v2 Developer Portal better for everyone!
