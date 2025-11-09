# 📦 Complete File List for Manus AI

## What to Send to Manus AI

Send these files so Manus AI has everything needed to build the "Ask AI" feature.

---

## 📋 CHECKLIST

### ✅ Primary Files (MUST SEND)

#### 1. Main Prompt
- [ ] `MANUS_AI_PROMPT_ASK_AI_FEATURE.md` ← **START HERE**
  - Complete implementation guide
  - Visual specifications
  - Code examples
  - Testing instructions

---

### 📚 Backend Reference Files (For Context)

#### 2. Backend API (Already Built - For Reference)
- [ ] `lib/ai.ts` - Vercel AI SDK setup
- [ ] `lib/pinecone.ts` - Pinecone connection
- [ ] `lib/prompts.ts` - AI system prompts
- [ ] `app/api/chat/route.ts` - Chat API endpoint

**Note**: These files are COMPLETE and WORKING. Manus just needs to connect the frontend to them.

---

#### 3. Documentation Guides (For Understanding)
- [ ] `docs/AI_CHAT_WITH_VERCEL_GATEWAY.md` - Complete architecture guide
- [ ] `docs/CONTENT_INGESTION_GUIDE.md` - How content is loaded
- [ ] `docs/ENHANCED_KNOWLEDGE_WITH_DEEPWIKI.md` - DeepWiki integration
- [ ] `docs/AI_CHAT_ARCHITECTURE.md` - System architecture

**Note**: These explain how the backend works. Helps Manus understand the full system.

---

### 🎨 Design References (CRITICAL)

#### 4. Screenshots
You need to provide screenshots of Stripe's implementation:

- [ ] **Screenshot 1**: Stripe "Ask AI" button location (below page title)
- [ ] **Screenshot 2**: Stripe chat panel (initial state)
- [ ] **Screenshot 3**: Stripe chat panel with messages
- [ ] **Screenshot 4**: Stripe chat panel expanded
- [ ] **Screenshot 5**: Stripe chat panel on mobile (optional)

**How to get these:**
1. Go to: https://stripe.com/docs/payments/accept-a-payment
2. Click "Ask AI" button
3. Take screenshots of:
   - Button placement
   - Chat panel closed
   - Chat panel with messages
   - Chat panel expanded

**OR**: Send the screenshots you already showed me in our conversation.

---

### 🏗️ Portal Structure Information

#### 5. Your Current Portal Details

Create a file called `PORTAL_STRUCTURE.md` with this information:

```markdown
# Octant Portal Structure

## Framework
- Next.js 14+ (App Router)
- TypeScript
- Tailwind CSS

## Current Layout Structure

\`\`\`
app/
├── layout.tsx                    ← Root layout (global header)
├── page.tsx                      ← Homepage
├── docs/
│   ├── layout.tsx                ← Docs layout (left nav + main content)
│   ├── quickstart/
│   │   └── page.tsx              ← Quickstart page
│   └── getting-started/
│       ├── overview/
│       │   └── page.tsx
│       └── [other pages]/
│           └── page.tsx
└── api/
    └── chat/
        └── route.ts              ← Backend API (COMPLETE)
\`\`\`

## Where to Add "Ask AI" Button
- Location: Inside `<main>` content area
- Position: Right after `<h1>` page title
- Component: `<AskAIButton onClick={openChat} />`

## Pages That Need Button
- [x] All pages under `/docs/`
- [ ] Optional: Homepage
- [ ] Optional: Other sections
```

**Note**: Adjust this to match your actual structure.

---

### 💾 Content Reference (Optional)

#### 6. Sample Content Files (For AI Context)

Pick 2-3 example files to show what content the AI will reference:

- [ ] `getting-started-overview.json` - Tutorial example
- [ ] `deepwiki-content/overview.md` - DeepWiki example
- [ ] `FINAL_PROMPT_FOR_MANUS_AI.txt` - Master knowledge file

**Note**: These show Manus what content the AI has access to. Don't need to send all 1,100 chunks!

---

### 🔧 Configuration Files

#### 7. Package Dependencies

Create `DEPENDENCIES.md`:

```markdown
# Dependencies Needed

## Already Installed
- `next` - Framework
- `react` - UI library
- `tailwindcss` - Styling
- `@pinecone-database/pinecone` - Vector DB
- `ai` - Vercel AI SDK
- `@ai-sdk/openai` - OpenAI integration

## Need to Install
\`\`\`bash
npm install lucide-react
\`\`\`

## Environment Variables (Already Set)
- `PINECONE_API_KEY` ✅
- `PINECONE_INDEX_NAME` ✅
- Vercel AI Gateway uses Vercel token ✅
```

---

### 📱 Design System Info

#### 8. Your Design Tokens (Optional)

If you have custom colors/spacing, create `DESIGN_TOKENS.md`:

```markdown
# Octant Design System

## Colors
- Primary: `#...` (your brand color)
- Background: `#...`
- Text: `#...`

## Spacing
- Use Tailwind defaults

## Fonts
- Main: [Your font family]

## Match Stripe For Chat UI
- Use Stripe's exact colors for chat panel
- Button can use your brand colors
```

**Note**: If you don't have this, Manus will use Stripe's colors.

---

## 📦 HOW TO PACKAGE FILES

### Option 1: GitHub Repository (Recommended)

```bash
# Create a branch with all files
git checkout -b feature/ask-ai-implementation

# Add all necessary files
git add MANUS_AI_PROMPT_ASK_AI_FEATURE.md
git add lib/ai.ts lib/pinecone.ts lib/prompts.ts
git add app/api/chat/route.ts
git add docs/*.md

# Commit
git commit -m "Add Ask AI feature specifications for Manus AI"

# Push
git push origin feature/ask-ai-implementation

# Share repository URL with Manus AI
```

**Best option**: Give Manus AI access to your repository.

---

### Option 2: ZIP File

```bash
# Create a directory
mkdir octant-ask-ai-files

# Copy all files
cp MANUS_AI_PROMPT_ASK_AI_FEATURE.md octant-ask-ai-files/
cp -r lib/ octant-ask-ai-files/
cp -r app/api/chat/ octant-ask-ai-files/
cp -r docs/ octant-ask-ai-files/
# Add screenshots folder
cp -r screenshots/ octant-ask-ai-files/

# Create ZIP
zip -r octant-ask-ai-files.zip octant-ask-ai-files/

# Send to Manus AI
```

---

### Option 3: Google Drive / Dropbox

1. Create folder: "Octant Ask AI Implementation"
2. Upload all files listed above
3. Add screenshots folder
4. Share folder link with Manus AI

---

## 📝 QUICK CHECKLIST

Before sending to Manus AI, verify you have:

### Must-Have (Critical)
- [x] Main prompt file (`MANUS_AI_PROMPT_ASK_AI_FEATURE.md`)
- [x] Backend API files (for reference)
- [x] Stripe screenshots (5 images minimum)
- [x] Portal structure description

### Should-Have (Important)
- [ ] Documentation guides (architecture, setup)
- [ ] Dependencies list
- [ ] Sample content files

### Nice-to-Have (Optional)
- [ ] Design system documentation
- [ ] Video walkthrough of Stripe implementation
- [ ] Your brand guidelines

---

## 📧 MESSAGE TO SEND WITH FILES

```
Hi Manus AI,

I need you to implement an "Ask AI" feature in our Octant documentation portal, 
exactly matching Stripe's implementation.

WHAT YOU'RE BUILDING:
- "Ask AI" button positioned below page titles (not in header)
- Chat panel that slides in from the right
- Connects to our existing backend API (already built and working)
- Must match Stripe's design exactly (screenshots attached)

WHAT'S PROVIDED:
✅ Complete implementation guide (MANUS_AI_PROMPT_ASK_AI_FEATURE.md)
✅ Working backend API (no changes needed)
✅ Stripe design references (screenshots)
✅ Portal structure information

WHAT YOU NEED TO BUILD:
- Frontend UI components (button, chat panel, messages)
- Integration with existing API
- Stripe-matching design and animations
- Mobile responsive layout

TIME ESTIMATE: 5 hours

Please review the main prompt file (MANUS_AI_PROMPT_ASK_AI_FEATURE.md) first.
It contains complete specifications, code examples, and testing instructions.

Let me know if you need any clarification!

Thanks!
```

---

## 🎯 MINIMUM REQUIRED FILES

If Manus AI says "too many files," send just these:

### Absolute Minimum (3 files)
1. `MANUS_AI_PROMPT_ASK_AI_FEATURE.md` - Implementation guide
2. `app/api/chat/route.ts` - Backend API reference
3. `screenshots/` folder - Stripe design reference

These 3 are enough to build the feature!

---

## ✅ VERIFICATION

Before sending, check:

- [ ] Main prompt file opens and is readable
- [ ] All code files have proper syntax highlighting
- [ ] Screenshots are clear and visible
- [ ] No sensitive data (API keys, passwords) in files
- [ ] File names are descriptive
- [ ] Files are organized in folders

---

## 🚀 READY TO SEND?

### Quick Start Command

```bash
# Create a simple package
mkdir manus-ai-package
cp MANUS_AI_PROMPT_ASK_AI_FEATURE.md manus-ai-package/
cp app/api/chat/route.ts manus-ai-package/backend-api.ts
cp -r stripe-screenshots/ manus-ai-package/
tar -czf manus-ai-package.tar.gz manus-ai-package/
```

**Send**: `manus-ai-package.tar.gz` to Manus AI

---

## 📞 Questions?

**Missing a file?** Check if it's truly needed. The main prompt has most code examples inline.

**Don't have screenshots?** I can describe them in detail, but visual reference is better.

**Portal structure unclear?** Just describe your current setup in a README.

**Manus asks for clarification?** Refer them to specific sections in the main prompt.

---

## 🎁 BONUS: Pre-made Package

I can create a pre-packaged bundle with:
- All necessary files
- Organized folder structure
- README with setup instructions
- Example screenshots placeholders

Just let me know!

---

**Everything Manus AI needs is in these files. Good luck!** 🚀

