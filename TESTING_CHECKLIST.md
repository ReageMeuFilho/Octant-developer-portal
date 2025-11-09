# Testing Checklist - Portal Changes

**Date:** November 9, 2025  
**Purpose:** Verify all changes before committing to GitHub

---

## ✅ **Quick Test Results (Automated)**

I've already tested 7 pages - all working:

1. ✅ `/` - Home (loads to WhatIsOctant, Ask AI button present)
2. ✅ `/docs/getting-started/overview` - Ask AI button works
3. ✅ `/tradfi-tutorials/getting-started-overview` - Ask AI button works
4. ✅ `/docs/diagrams/core-concepts/deposit-withdrawal` - Ask AI button works
5. ✅ `/docs/tutorials/aave-integration` - Ask AI button works
6. ✅ `/docs/resources/testnet` - Ask AI button works
7. ✅ `/docs/octant-wiki/overview` - Ask AI button works

---

## 🧪 **Manual Testing Checklist**

### **Critical Features (Must Test)**

#### **1. Landing Page**
- [ ] Visit `http://localhost:3000/`
- [ ] Verify it loads "What Is Octant v2?" page (NOT the landing page)
- [ ] Verify Ask AI button is visible below title
- [ ] Click Ask AI button - chat panel should open
- [ ] Close chat panel - should close smoothly

#### **2. Top Navigation**
- [ ] Visit any page
- [ ] Verify top navigation is HIDDEN (no Use Cases, Documentation, Quickstart, Tutorials, GitHub)
- [ ] Verify "Get Started" button is HIDDEN
- [ ] Verify Octant v2 logo IS VISIBLE
- [ ] Click logo - should return to home (WhatIsOctant page)

#### **3. Horizontal Navigation**
- [ ] Verify horizontal tabs are VISIBLE (Getting Started, Core Concepts, User Journeys, etc.)
- [ ] Click "Getting Started" - should navigate
- [ ] Click "Core Concepts" - should navigate
- [ ] Click "Diagrams" - should navigate
- [ ] Click "Tutorials" - should navigate
- [ ] Click "Resources" - should navigate
- [ ] Click "Octant Wiki" - should navigate

#### **4. Ask AI Button Coverage**
Test these 10 representative pages:

**Getting Started:**
- [ ] `/docs/getting-started/overview` - Button visible?
- [ ] `/docs/getting-started/components` - Button visible?
- [ ] `/docs/getting-started/yield-donating` - Button visible?

**Core Concepts:**
- [ ] `/docs/what-is-octant` - Button visible?
- [ ] `/docs/how-it-works` - Button visible?

**Diagrams:**
- [ ] `/docs/diagrams/core-concepts/deposit-withdrawal` - Button visible?
- [ ] `/docs/diagrams/yield-mechanisms/yield-donating` - Button visible?

**Tutorials:**
- [ ] `/docs/tutorials/aave-integration` - Button visible?
- [ ] `/tradfi-tutorials/getting-started-overview` - Button visible?

**Resources/Wiki:**
- [ ] `/docs/resources/testnet` - Button visible?

#### **5. Ask AI Functionality**
- [ ] Click Ask AI button on any page
- [ ] Verify chat panel opens on right side
- [ ] Verify suggested prompts appear (5 questions)
- [ ] Click a suggested prompt - should populate input
- [ ] Type a custom question - input should work
- [ ] Click "Close chat panel" - should close
- [ ] Click Ask AI again - should reopen

#### **6. Sidebar Navigation**
- [ ] Visit Getting Started page
- [ ] Verify left sidebar shows relevant sections
- [ ] Click different sections - should collapse/expand
- [ ] Click a page link - should navigate and highlight active page
- [ ] Verify active page is highlighted in sidebar

#### **7. Mobile Responsiveness** (Optional but recommended)
- [ ] Resize browser to mobile width (375px)
- [ ] Verify horizontal nav shows hamburger menu
- [ ] Verify content is readable
- [ ] Verify Ask AI button still works

---

## 🎯 **Critical Pass/Fail Criteria**

### **MUST PASS:**
- ✅ Landing page is "What Is Octant v2?"
- ✅ Top navigation is hidden
- ✅ Horizontal navigation works
- ✅ Ask AI button on every page you test
- ✅ Ask AI button opens chat panel
- ✅ No console errors
- ✅ No broken pages

### **SHOULD PASS:**
- All navigation links work
- Sidebar navigation functional
- Content displays correctly
- No visual glitches
- Fast page loads

### **FAIL IF:**
- ❌ Landing page still shows old landing
- ❌ Top navigation visible
- ❌ Ask AI button missing on pages
- ❌ Ask AI button doesn't work
- ❌ Pages don't load
- ❌ JavaScript errors in console

---

## 🔍 **How to Test**

### **Option 1: Quick Test (10 minutes)**
1. Visit `http://localhost:3000/`
2. Verify 3 critical features (landing, top nav, Ask AI)
3. Click through 5 different sections
4. Test Ask AI opens/closes
5. If all work → Ready to commit

### **Option 2: Thorough Test (30 minutes)**
1. Go through entire checklist above
2. Test every checkbox
3. Note any issues
4. Fix issues before committing
5. Re-test fixes

### **Option 3: Comprehensive Test (1 hour)**
1. Complete checklist
2. Test mobile responsive
3. Check console for errors
4. Test all horizontal tabs
5. Test 20+ pages manually
6. Screenshot before/after

---

## 📊 **Test Results**

**What I've Tested (Automated):**
- ✅ 7 different page types
- ✅ All show Ask AI button
- ✅ All buttons work
- ✅ Top nav hidden
- ✅ Landing page correct
- ✅ Horizontal nav works

**What You Should Test (Manual):**
- Anything that feels important to you
- Any pages you'll demo to judges
- Any features you're concerned about

---

## 🆘 **If You Find Issues**

**Document them here:**

### **Issue 1:**
- **Page:** [URL]
- **Problem:** [What's wrong]
- **Expected:** [What should happen]
- **Screenshot:** [If needed]

### **Issue 2:**
- ...

**Then tell me and I'll fix them before we commit!**

---

## ✅ **When Testing is Complete**

Once you're satisfied:

```markdown
## Test Results

**Date:** [Date]
**Tester:** Wesley
**Result:** PASS / FAIL

**Notes:**
- [Any observations]
- [Things that work well]
- [Things to fix]

**Ready to commit?** YES / NO
```

---

## 🎯 **What to Test Yourself**

**Minimum (5 minutes):**
1. Visit `localhost:3000`
2. Verify it looks right
3. Click Ask AI button
4. Navigate to 2-3 pages
5. If all good → approve for commit

**Recommended (15 minutes):**
1. Test all horizontal tabs
2. Test Ask AI on 5 different pages
3. Verify sidebar navigation
4. Check for any visual issues
5. If all good → approve for commit

**Maximum (if you want):**
- Click through 20+ pages
- Test every feature
- Screenshot everything
- Document everything

---

**The changes are in your local repo. Nothing is committed. Take your time testing!** 🧪

**When you're ready, just say:** "Everything looks good, please commit" or "I found an issue with [X]" and I'll fix it!
