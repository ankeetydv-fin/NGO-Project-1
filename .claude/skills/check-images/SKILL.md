---
description: "Find all image placeholders (SVGs) and missing images across the codebase. Produces an inventory grouped by page for photo-shoot planning."
user-invocable: true
---

## Image Placeholder Inventory

Scan the codebase to find which images need real photos.

### Step 1: Extract all image references from code

Search all `.tsx` files for image paths:

```bash
grep -rn '/images/' E:/NGO-Project-1/src/ --include='*.tsx' -h | grep -oP '(?<=src=["'"'"']|src=\{["'"'"']|require\()["'"'"']?/images/[^\s"'"'"'`}>]+' | sort -u
```

Also search for `ImagePlaceholder` usage:

```bash
grep -rn 'ImagePlaceholder' E:/NGO-Project-1/src/ --include='*.tsx' -A2
```

### Step 2: List actual files on disk

```bash
find E:/NGO-Project-1/public/images/ -type f | sed 's|E:/NGO-Project-1/public||' | sort
```

### Step 3: Categorize

For each image reference found in code:

1. **Exists as real photo** (.jpg, .jpeg, .png, .webp) -> READY
2. **Exists as SVG placeholder** (.svg) -> NEEDS PHOTO
3. **Does not exist on disk** -> MISSING

### Step 4: Group by page

For each `.tsx` file that references images, report:

```
### /about page
| Image Path | Status | Used In |
|------------|--------|---------|
| /images/about/story.jpg | NEEDS PHOTO | ImagePlaceholder in story section |
| /images/about/team.jpg | MISSING | <Image> in team grid |

### /programs page
| Image Path | Status | Used In |
|------------|--------|---------|
| /images/programs/education.svg | NEEDS PHOTO | Program section |
```

### Step 5: Summary

```
## Image Inventory Summary

- Total image references: X
- Ready (real photos): X
- Need photos (SVG placeholders): X
- Missing entirely: X

### Pages needing the most photos:
1. /about — 6 placeholders
2. /programs — 4 placeholders
3. /impact — 3 placeholders
```

This gives the user a clear shopping list for their next photo shoot.
