---
description: "Run a full codebase health check — TypeScript type checking, ESLint, production build, and broken image detection. Use before/after major changes or when the user asks to check for errors."
user-invocable: true
---

## Full Codebase Audit

Run these checks sequentially. Stop and report immediately if any step fails.

### Step 1: TypeScript Type Check

```bash
cd E:/NGO-Project-1 && npx tsc --noEmit 2>&1
```

Report: number of errors found (0 = PASS).

### Step 2: ESLint

```bash
cd E:/NGO-Project-1 && npm run lint 2>&1
```

Report: number of warnings/errors (0 = PASS).

### Step 3: Production Build

```bash
cd E:/NGO-Project-1 && npm run build 2>&1
```

Report: BUILD SUCCESS or BUILD FAILED with error details.

### Step 4: Broken Image Check

Search all `.tsx` files for image references and cross-reference with `public/images/`:

```bash
# Find all image references in code
grep -rn '/images/' E:/NGO-Project-1/src/ --include='*.tsx' | grep -oP '/images/[^\s"'"'"'`]+' | sort -u

# List actual image files
find E:/NGO-Project-1/public/images/ -type f | sed 's|E:/NGO-Project-1/public||' | sort -u
```

Compare the two lists. Report:
- Images referenced in code that exist on disk: OK
- Images referenced in code that are MISSING: BROKEN
- Images on disk that are not referenced: UNUSED

### Final Report

Present results in this format:

```
## Audit Results

| Check           | Status | Details       |
|-----------------|--------|---------------|
| TypeScript      | PASS   | 0 errors      |
| ESLint          | PASS   | 0 warnings    |
| Build           | PASS   | Build success |
| Images          | PASS   | 12/12 exist   |

Total issues: 0
```

If any check fails, include the first 10 error lines and suggest fixes.
