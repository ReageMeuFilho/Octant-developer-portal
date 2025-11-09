#!/bin/bash

# Create docs folder
mkdir -p docs/enhancement-plan

# Copy files
cp /mnt/c/Users/wrios/Documents/GitHub/Octantv2Core/octant-v2-core/COMBINED_MANUS_AI_PROMPT.md docs/enhancement-plan/
cp /mnt/c/Users/wrios/Documents/GitHub/Octantv2Core/octant-v2-core/VIDEO_UPLOAD_GUIDE.md docs/enhancement-plan/
cp /mnt/c/Users/wrios/Documents/GitHub/Octantv2Core/octant-v2-core/PORTAL_AUDIT_AND_ENHANCEMENT_PLAN.md docs/enhancement-plan/
cp /mnt/c/Users/wrios/Documents/GitHub/Octantv2Core/octant-v2-core/FINAL_IMPLEMENTATION_SUMMARY.md docs/enhancement-plan/
cp /mnt/c/Users/wrios/Documents/GitHub/Octantv2Core/octant-v2-core/START_HERE_WESLEY_CORRECTED.md docs/enhancement-plan/

# Add and commit
git add docs/enhancement-plan/
git commit -m "Add enhancement plan documentation for Manus.ai"
git push origin main

echo "✅ Documentation uploaded successfully!"

