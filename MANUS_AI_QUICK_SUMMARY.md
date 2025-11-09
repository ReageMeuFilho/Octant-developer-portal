# Quick Summary: Ask AI Feature for Manus AI

## 🎯 What You're Getting

I've created **2 comprehensive documents** for Manus AI:

### 1. **MANUS_AI_PROMPT_ASK_AI_FEATURE.md** (Main Implementation Guide)
- **30+ pages** of detailed specifications
- Complete code examples (copy-paste ready)
- Visual specifications matching Stripe exactly
- Step-by-step implementation checklist
- Testing instructions
- Troubleshooting guide

### 2. **FILES_TO_SEND_TO_MANUS_AI.md** (File Checklist)
- Complete list of files to provide
- How to package them
- What's required vs optional
- Message template to send with files

---

## 📊 What Manus AI Will Build

### Visual Implementation

```
┌─────────────────────────────────────────────────────────┐
│ GLOBAL HEADER (Don't modify)                           │
│ [Octant Logo] [Navigation] [Search] [Sign In]          │
└─────────────────────────────────────────────────────────┘
├──────────────┬──────────────────────────────────────────┤
│ LEFT NAV     │ MAIN CONTENT                             │
│              │                                          │
│ • Overview   │ # Page Title                             │
│ • Tutorials  │ [✨ Ask AI] ← ADD THIS BUTTON           │
│ • Reference  │ ─────────────────────────────────        │
│              │                                          │
│              │ Page content here...                     │
│              │                                          │
└──────────────┴──────────────────────────────────────────┘

WHEN CLICKED:
┌────────────────────────┬─────────────────────────────┐
│ MAIN CONTENT (70%)     │ CHAT PANEL (30%)            │
│ (Content remains)      │ ┌─────────────────────────┐ │
│                        │ │ New chat      [+][⛶][✕]│ │
│                        │ └─────────────────────────┘ │
│                        │                             │
│                        │ ⚠️ AI may make mistakes     │
│                        │                             │
│                        │ Ask about Octant...         │
│                        │                             │
│                        │ [Suggested prompts]         │
│                        │                             │
│                        │ [Chat messages stream]      │
│                        │                             │
│                        │ ┌─────────────────────────┐ │
│                        │ │ Ask a question...     ↑ │ │
│                        │ └─────────────────────────┘ │
└────────────────────────┴─────────────────────────────┘
```

---

## ✅ What's Already Complete

### Backend (100% Done)
- ✅ API endpoint: `/api/chat`
- ✅ Pinecone vector search (1,100+ docs)
- ✅ Vercel AI Gateway integration
- ✅ Streaming responses
- ✅ Source citations
- ✅ All documentation loaded

**Manus doesn't need to touch the backend!**

---

## 🎨 What Manus Will Build (Frontend Only)

### 4 Components (~5 hours)

1. **AskAIButton.tsx** (30 min)
   - Light gray button with sparkle icon
   - Positioned below page titles
   - Opens chat panel on click

2. **AIChatPanel.tsx** (2 hours)
   - Slides in from right
   - Header with controls (new, expand, close)
   - Messages area
   - Input field at bottom
   - Exact Stripe styling

3. **ChatMessage.tsx** (30 min)
   - User messages: blue, right-aligned
   - AI messages: gray, left-aligned
   - Source citations

4. **useAIChat.ts** Hook (1 hour)
   - Manages chat state
   - Calls backend API
   - Handles streaming
   - Updates UI in real-time

5. **Integration** (1 hour)
   - Add to docs layout
   - Connect to pages
   - Test everything

---

## 📦 What to Send Manus AI

### Minimum Required (3 items)
1. ✅ `MANUS_AI_PROMPT_ASK_AI_FEATURE.md` - Implementation guide
2. ✅ Backend API file for reference (`app/api/chat/route.ts`)
3. ✅ Stripe screenshots (button + chat panel)

### Recommended (For Better Results)
4. ⭐ Portal structure description
5. ⭐ Architecture documentation
6. ⭐ Dependencies list

---

## 🚀 Implementation Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| Setup | 30 min | Install lucide-react, verify API |
| Components | 2 hours | Build button, panel, messages |
| Integration | 1 hour | Add to layouts, connect pages |
| Testing | 1 hour | Test all functionality |
| Polish | 30 min | Animations, accessibility |
| **Total** | **5 hours** | **Complete feature** |

---

## ✅ Acceptance Criteria

Feature is DONE when:

### Visual ✅
- [ ] Button matches Stripe exactly
- [ ] Chat panel slides from right
- [ ] Colors, spacing, fonts match
- [ ] Animations smooth (300ms)

### Functional ✅
- [ ] Button opens panel
- [ ] Can send/receive messages
- [ ] Responses stream word-by-word
- [ ] Sources display correctly
- [ ] Expand/collapse works
- [ ] Close button works

### Technical ✅
- [ ] Uses existing `/api/chat`
- [ ] No console errors
- [ ] Works on all doc pages
- [ ] Mobile responsive
- [ ] Keyboard accessible

---

## 🎯 Key Specifications

### Button Location
- ❌ NOT in global header
- ✅ INSIDE main content area
- ✅ RIGHT BELOW page title
- ✅ VISIBLE on all doc pages

### Chat Panel
- ✅ Slides from RIGHT
- ✅ 400px width (expandable)
- ✅ Full height
- ✅ White background
- ✅ Stripe-style design

### Features
- ✅ Streaming responses
- ✅ Source citations
- ✅ Suggested prompts
- ✅ New chat button
- ✅ Expand/collapse
- ✅ Close button

---

## 💡 What Makes This Easy for Manus

### 1. Backend is Complete
- No API work needed
- Just call existing endpoint
- All documentation already loaded

### 2. Code Examples Provided
- Every component has full code
- Copy-paste ready
- TypeScript + Tailwind CSS

### 3. Clear Specifications
- Exact measurements
- Color codes
- Animation timings
- Stripe screenshots

### 4. Testing Guide Included
- Step-by-step tests
- Expected behaviors
- Troubleshooting tips

---

## 📧 Message Template for Manus AI

```
Hi Manus,

Please implement the "Ask AI" feature for our Octant documentation portal.

WHAT TO BUILD:
- "Ask AI" button (below page titles)
- Chat panel (slides from right)
- Matches Stripe's design exactly

WHAT'S PROVIDED:
✅ Complete specs (MANUS_AI_PROMPT_ASK_AI_FEATURE.md)
✅ Working backend API (no changes needed)
✅ Stripe design reference (screenshots)

TIME ESTIMATE: 5 hours

START HERE: Read MANUS_AI_PROMPT_ASK_AI_FEATURE.md

Thanks!
```

---

## 🔍 Before Sending to Manus

### Quick Review Checklist

- [ ] Read `MANUS_AI_PROMPT_ASK_AI_FEATURE.md`
- [ ] Verify backend API is deployed
- [ ] Gather Stripe screenshots
- [ ] Document portal structure
- [ ] List dependencies
- [ ] Package files (ZIP or repo link)
- [ ] Write message to Manus

**Everything ready?** Send to Manus AI! 🚀

---

## 📞 What If Manus Has Questions?

**Common Questions & Answers:**

**Q: "Where should the button go?"**  
A: Section 1 of main prompt - below page title, inside main content

**Q: "What should the chat panel look like?"**  
A: Section 3 of main prompt + Stripe screenshots

**Q: "How do I call the backend?"**  
A: Section 4, Step 4 in main prompt - complete useAIChat hook

**Q: "What dependencies do I need?"**  
A: Just `lucide-react` - everything else is installed

**Q: "How long will this take?"**  
A: 5 hours total (see timeline above)

---

## ✨ The Result

After Manus completes this:

**Users can:**
1. Visit any doc page
2. Click "Ask AI" below title
3. Chat panel slides in
4. Ask questions like "How do yield strategies work?"
5. Get expert answers with sources
6. Expand to full screen if needed
7. Close when done

**AI will:**
- Search 1,100+ documentation chunks
- Find most relevant content
- Generate accurate answers
- Cite sources
- Stream responses in real-time

**All using Stripe's beautiful, proven UI!** 🎨

---

## 🎉 You're Ready!

**Next Steps:**
1. Review `MANUS_AI_PROMPT_ASK_AI_FEATURE.md`
2. Check `FILES_TO_SEND_TO_MANUS_AI.md` 
3. Package files
4. Send to Manus AI
5. Wait ~5 hours
6. Test the feature
7. Launch! 🚀

---

**Questions?** Everything is documented in the main prompt. Good luck! 💪

