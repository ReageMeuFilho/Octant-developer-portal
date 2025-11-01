# Deployment Guide

This guide provides step-by-step instructions for deploying the Octant v2 Developer Portal to various hosting platforms.

---

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Build Process](#build-process)
3. [Deploy to Vercel](#deploy-to-vercel-recommended)
4. [Deploy to Netlify](#deploy-to-netlify)
5. [Deploy to GitHub Pages](#deploy-to-github-pages)
6. [Deploy to Cloudflare Pages](#deploy-to-cloudflare-pages)
7. [Deploy to AWS S3](#deploy-to-aws-s3--cloudfront)
8. [Environment Variables](#environment-variables)
9. [Custom Domain Setup](#custom-domain-setup)
10. [Troubleshooting](#troubleshooting)

---

## Prerequisites

Before deploying, ensure you have:

- Node.js 18+ installed
- pnpm package manager
- Git repository with the portal code
- Account on your chosen hosting platform

---

## Build Process

### Local Build

```bash
# Install dependencies
pnpm install

# Create production build
pnpm build

# Preview production build locally
pnpm preview
```

The build output will be in the `dist/` directory.

### Build Output

```
dist/
├── index.html                 # Entry point
├── assets/
│   ├── index-[hash].js       # Main JavaScript bundle
│   ├── index-[hash].css      # Compiled CSS
│   ├── [component]-[hash].js # Code-split chunks
│   └── ...
└── [static assets]
```

---

## Deploy to Vercel (Recommended)

Vercel provides the best experience for React/Vite applications with automatic deployments, global CDN, and zero configuration.

### Method 1: GitHub Integration (Recommended)

1. **Push code to GitHub** (already done)
   ```bash
   git push origin main
   ```

2. **Import to Vercel:**
   - Go to https://vercel.com/new
   - Click "Import Project"
   - Select your GitHub repository: `ReageMeuFilho/Octant-developer-portal`
   - Vercel auto-detects Vite configuration

3. **Configure (optional):**
   - Project Name: `octant-developer-portal`
   - Framework Preset: Vite (auto-detected)
   - Build Command: `pnpm build` (auto-detected)
   - Output Directory: `dist` (auto-detected)

4. **Deploy:**
   - Click "Deploy"
   - Wait 2-3 minutes for build and deployment
   - Your portal will be live at `https://octant-developer-portal.vercel.app`

### Method 2: Vercel CLI

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Automatic Deployments

Vercel automatically deploys:
- **Production:** Every push to `main` branch
- **Preview:** Every pull request

---

## Deploy to Netlify

### Method 1: Drag and Drop

1. **Build locally:**
   ```bash
   pnpm build
   ```

2. **Deploy:**
   - Go to https://app.netlify.com/drop
   - Drag the `dist` folder onto the page
   - Your site will be live in seconds

### Method 2: GitHub Integration

1. **Connect repository:**
   - Go to https://app.netlify.com/start
   - Click "Import from Git"
   - Select GitHub and authorize
   - Choose `ReageMeuFilho/Octant-developer-portal`

2. **Configure build settings:**
   - Build command: `pnpm build`
   - Publish directory: `dist`
   - Node version: 18

3. **Deploy:**
   - Click "Deploy site"
   - Site will be live at `https://[random-name].netlify.app`

### Method 3: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Initialize site
netlify init

# Deploy
netlify deploy --prod
```

---

## Deploy to GitHub Pages

### Using gh-pages Package

1. **Install gh-pages:**
   ```bash
   pnpm add -D gh-pages
   ```

2. **Add deploy script to package.json:**
   ```json
   {
     "scripts": {
       "deploy": "pnpm build && gh-pages -d dist"
     }
   }
   ```

3. **Configure base path in vite.config.ts:**
   ```typescript
   export default defineConfig({
     base: '/Octant-developer-portal/',
     // ... other config
   });
   ```

4. **Deploy:**
   ```bash
   pnpm deploy
   ```

5. **Enable GitHub Pages:**
   - Go to repository Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

Your site will be live at: `https://reagemeufilho.github.io/Octant-developer-portal/`

---

## Deploy to Cloudflare Pages

### Method 1: Dashboard

1. **Connect repository:**
   - Go to https://dash.cloudflare.com/
   - Navigate to Pages
   - Click "Create a project"
   - Connect to GitHub
   - Select `ReageMeuFilho/Octant-developer-portal`

2. **Configure build:**
   - Framework preset: None
   - Build command: `pnpm build`
   - Build output directory: `dist`
   - Node version: 18

3. **Deploy:**
   - Click "Save and Deploy"
   - Site will be live at `https://octant-developer-portal.pages.dev`

### Method 2: Wrangler CLI

```bash
# Install Wrangler
npm install -g wrangler

# Login
wrangler login

# Deploy
wrangler pages publish dist --project-name=octant-developer-portal
```

---

## Deploy to AWS S3 + CloudFront

### Step 1: Create S3 Bucket

```bash
# Create bucket
aws s3 mb s3://octant-developer-portal

# Enable static website hosting
aws s3 website s3://octant-developer-portal \
  --index-document index.html \
  --error-document index.html
```

### Step 2: Upload Build

```bash
# Build project
pnpm build

# Upload to S3
aws s3 sync dist/ s3://octant-developer-portal \
  --delete \
  --cache-control "public, max-age=31536000, immutable"

# Upload index.html without caching
aws s3 cp dist/index.html s3://octant-developer-portal/index.html \
  --cache-control "public, max-age=0, must-revalidate"
```

### Step 3: Create CloudFront Distribution

1. **Go to CloudFront console**
2. **Create distribution:**
   - Origin: `octant-developer-portal.s3-website-us-east-1.amazonaws.com`
   - Viewer Protocol Policy: Redirect HTTP to HTTPS
   - Compress Objects: Yes
   - Default Root Object: `index.html`

3. **Configure error pages:**
   - 404 → `/index.html` (for client-side routing)
   - 403 → `/index.html`

4. **Deploy:**
   - Wait 10-15 minutes for distribution to deploy
   - Access via CloudFront URL

---

## Environment Variables

The portal uses environment variables for configuration. These are injected at build time.

### Available Variables

```bash
# App Configuration
VITE_APP_TITLE="Octant v2 Developer Portal"
VITE_APP_LOGO="/logo.svg"

# Analytics (optional)
VITE_ANALYTICS_WEBSITE_ID="your-analytics-id"
VITE_ANALYTICS_ENDPOINT="https://analytics.example.com"

# API Endpoints (if needed)
VITE_API_URL="https://api.octant.build"
```

### Setting Variables

**Vercel:**
- Dashboard → Project Settings → Environment Variables
- Add variables for Production, Preview, and Development

**Netlify:**
- Site Settings → Build & Deploy → Environment
- Add variables

**GitHub Actions:**
```yaml
env:
  VITE_APP_TITLE: "Octant v2 Developer Portal"
  VITE_APP_LOGO: "/logo.svg"
```

---

## Custom Domain Setup

### Vercel

1. **Go to Project Settings → Domains**
2. **Add domain:** `docs.octant.build`
3. **Configure DNS:**
   - Type: CNAME
   - Name: `docs`
   - Value: `cname.vercel-dns.com`
4. **Wait for SSL certificate** (automatic)

### Netlify

1. **Go to Site Settings → Domain Management**
2. **Add custom domain:** `docs.octant.build`
3. **Configure DNS:**
   - Type: CNAME
   - Name: `docs`
   - Value: `[your-site].netlify.app`
4. **Enable HTTPS** (automatic with Let's Encrypt)

### Cloudflare Pages

1. **Go to Pages project → Custom Domains**
2. **Add domain:** `docs.octant.build`
3. **DNS automatically configured** (if using Cloudflare DNS)
4. **HTTPS enabled by default**

---

## Troubleshooting

### Build Failures

**Error: "Cannot find module"**
```bash
# Clear node_modules and reinstall
rm -rf node_modules pnpm-lock.yaml
pnpm install
pnpm build
```

**Error: "Out of memory"**
```bash
# Increase Node memory limit
NODE_OPTIONS="--max-old-space-size=4096" pnpm build
```

### Routing Issues

**404 on page refresh:**

The portal uses client-side routing. Configure your host to redirect all requests to `index.html`:

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Netlify:** Create `_redirects` in `public/`:
```
/*    /index.html   200
```

**GitHub Pages:** Use hash routing or configure 404.html

### Performance Issues

**Slow load times:**
- Enable compression (gzip/brotli)
- Use CDN for static assets
- Optimize images (WebP format)
- Enable HTTP/2

**Large bundle size:**
- Analyze bundle: `pnpm build --analyze`
- Remove unused dependencies
- Implement code splitting
- Lazy load components

---

## Deployment Checklist

Before deploying to production:

- [ ] Run `pnpm build` successfully
- [ ] Test production build locally (`pnpm preview`)
- [ ] Verify all links work
- [ ] Check responsive design on mobile
- [ ] Test in different browsers (Chrome, Firefox, Safari)
- [ ] Verify accessibility (keyboard navigation, screen readers)
- [ ] Check performance (Lighthouse score > 90)
- [ ] Configure environment variables
- [ ] Set up custom domain (if applicable)
- [ ] Enable HTTPS
- [ ] Configure analytics (if applicable)
- [ ] Set up monitoring/error tracking

---

## Continuous Deployment

### GitHub Actions Workflow

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 18
      
      - name: Install pnpm
        uses: pnpm/action-setup@v2
        with:
          version: 8
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Build
        run: pnpm build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID }}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID }}
          vercel-args: '--prod'
```

---

## Monitoring and Analytics

### Performance Monitoring

**Vercel Analytics:**
- Automatically enabled for Vercel deployments
- Real User Monitoring (RUM)
- Web Vitals tracking

**Google Lighthouse:**
```bash
# Run Lighthouse audit
npx lighthouse https://your-portal-url.com --view
```

### Error Tracking

**Sentry Integration:**
```typescript
import * as Sentry from "@sentry/react";

Sentry.init({
  dsn: "your-sentry-dsn",
  environment: import.meta.env.MODE,
});
```

---

## Conclusion

The Octant v2 Developer Portal is designed for easy deployment to any modern hosting platform. Vercel is recommended for the best developer experience, but the portal works excellently on Netlify, Cloudflare Pages, GitHub Pages, or any static hosting service.

For questions or issues, please open an issue on the GitHub repository.
