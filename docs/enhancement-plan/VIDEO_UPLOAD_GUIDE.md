# Video Upload Guide for Octant Portal

**Video:** 2 minutes 35 seconds overview
**Goal:** Add to Overview page at https://octant-developer-portal.vercel.app

---

## 🎬 **Step 1: Prepare Your Video**

### **Check File Size**

```bash
# On your computer, check the video size
ls -lh /path/to/your/octant-overview.mp4
```

**Target:** Under 50MB for GitHub hosting

**If over 50MB**, compress it:

```bash
# Install ffmpeg if needed:
# Windows: https://ffmpeg.org/download.html
# Mac: brew install ffmpeg
# Linux/WSL: sudo apt install ffmpeg

# Compress video (reduce file size, maintain quality)
ffmpeg -i octant-overview.mp4 -vcodec h264 -crf 28 -preset slow octant-overview-compressed.mp4

# Check new size
ls -lh octant-overview-compressed.mp4
```

---

## 📸 **Step 2: Create Poster Image (Thumbnail)**

```bash
# Extract a frame at 2 seconds for poster image
ffmpeg -i octant-overview.mp4 -ss 00:00:02 -vframes 1 octant-overview-poster.jpg

# Or extract a frame at a specific interesting moment
ffmpeg -i octant-overview.mp4 -ss 00:00:15 -vframes 1 octant-overview-poster.jpg
```

---

## ⬆️ **Step 3: Upload to Portal Repository**

### **Option A: Via Terminal (Recommended)**

```bash
# Navigate to portal repo
cd /mnt/c/Users/wrios/Documents/GitHub/Octant-developer-portal

# Create videos directory
mkdir -p public/videos

# Copy video file (adjust path to where your video is)
cp /mnt/c/Users/wrios/Downloads/octant-overview.mp4 public/videos/
cp /mnt/c/Users/wrios/Downloads/octant-overview-poster.jpg public/videos/

# Verify files are there
ls -lh public/videos/

# Add to git
git add public/videos/

# Commit
git commit -m "Add overview video and poster image"

# Push to GitHub
git push origin main
```

### **Option B: Via File Explorer (Easier)**

1. Open File Explorer
2. Navigate to: `C:\Users\wrios\Documents\GitHub\Octant-developer-portal`
3. Create folder: `public\videos` (if doesn't exist)
4. Copy your video file there: `octant-overview.mp4`
5. Copy poster image there: `octant-overview-poster.jpg`
6. Open terminal in that directory
7. Run:
```bash
git add public/videos/
git commit -m "Add overview video and poster image"
git push origin main
```

---

## ✅ **Step 4: Verify Upload**

After pushing to GitHub:

1. **Check GitHub:** 
   - Go to: https://github.com/ReageMeuFilho/Octant-developer-portal
   - Navigate to `public/videos/`
   - You should see your video and poster files

2. **Check Vercel Deployment:**
   - Wait 2-3 minutes for Vercel to deploy
   - Visit: `https://octant-developer-portal.vercel.app/videos/octant-overview.mp4`
   - Should download or play the video

---

## 🎯 **Video URLs After Upload**

Once deployed, your video will be accessible at:

```
Video: https://octant-developer-portal.vercel.app/videos/octant-overview.mp4
Poster: https://octant-developer-portal.vercel.app/videos/octant-overview-poster.jpg
```

These are the URLs Manus.ai will use in the portal code.

---

## 📋 **Checklist**

Before uploading:
- [ ] Video is under 50MB (or compressed)
- [ ] Poster image created (JPG format)
- [ ] Files named correctly:
  - `octant-overview.mp4`
  - `octant-overview-poster.jpg`

After uploading:
- [ ] Files in `public/videos/` folder
- [ ] Committed to git
- [ ] Pushed to GitHub
- [ ] Verified on GitHub
- [ ] Verified video URL works on Vercel

---

## 🆘 **Troubleshooting**

### **Video File Too Large for GitHub**

If your video is over 100MB, GitHub will reject it. Solutions:

**1. Compress More Aggressively:**
```bash
ffmpeg -i octant-overview.mp4 -vcodec h264 -crf 32 -preset fast -s 1280x720 octant-overview-small.mp4
```

**2. Use Git LFS (Large File Storage):**
```bash
# Install Git LFS
git lfs install

# Track video files
git lfs track "*.mp4"

# Add and commit
git add .gitattributes
git add public/videos/octant-overview.mp4
git commit -m "Add overview video with Git LFS"
git push origin main
```

**3. Use External Hosting:**
- Upload to YouTube (unlisted)
- Use Cloudflare R2 (free)
- Use Vercel Blob (paid)

---

### **Video Not Playing on Portal**

Check:
- [ ] File extension is `.mp4` (not `.mov`, `.avi`, etc.)
- [ ] Video codec is H.264 (most compatible)
- [ ] File path is correct: `/videos/octant-overview.mp4`
- [ ] File actually deployed to Vercel (check logs)

---

## 🚀 **Next Steps**

Once your video is uploaded and accessible:

1. ✅ Verify URL works: `https://octant-developer-portal.vercel.app/videos/octant-overview.mp4`
2. ✅ Tell Manus.ai: "Video uploaded and ready at /videos/octant-overview.mp4"
3. ✅ Manus.ai will integrate it into the Overview page per the combined prompt

---

## 💡 **Pro Tips**

### **Optimize for Web:**

```bash
# Create web-optimized version
ffmpeg -i octant-overview.mp4 \
  -vcodec h264 \
  -acodec aac \
  -strict -2 \
  -movflags +faststart \
  -crf 23 \
  -preset medium \
  octant-overview-web.mp4
```

The `-movflags +faststart` makes the video start playing before it's fully downloaded!

### **Create Multiple Qualities (Optional):**

```bash
# HD version (1080p)
ffmpeg -i octant-overview.mp4 -s 1920x1080 -c:v h264 -crf 23 octant-overview-1080p.mp4

# SD version (720p) - smaller file
ffmpeg -i octant-overview.mp4 -s 1280x720 -c:v h264 -crf 28 octant-overview-720p.mp4

# Mobile version (480p) - smallest
ffmpeg -i octant-overview.mp4 -s 854x480 -c:v h264 -crf 32 octant-overview-480p.mp4
```

Then use adaptive quality in the player!

---

**Ready to upload your video?** Follow Steps 1-4 above! 🎬

