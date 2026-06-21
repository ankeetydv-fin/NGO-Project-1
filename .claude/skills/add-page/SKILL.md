---
description: "Scaffold a new page for the NGO website. Use when the user wants to add a new page/route. Creates layout.tsx with metadata and page.tsx with PageBanner, Sections, and CTA following the project's established patterns."
user-invocable: true
argument-hint: "[page-name]"
---

## Add a New Page

You are adding a new page to the Shiv Prabha Foundation NGO website (Next.js 16, App Router, Tailwind CSS v4).

### Step 1: Gather information

Ask the user for:
- **Page slug** (e.g., `events`, `blog`, `partners`)
- **Page title** (e.g., "Events", "Our Partners")
- **Tagline** (short subtitle shown in the banner)
- **Number of content sections** (default: 3)
- **Whether the page needs a form** (if yes, also create a server action)

### Step 2: Create the route directory

Create files at `src/app/(site)/<slug>/`:

### Step 3: Create layout.tsx

Follow this exact pattern:

```tsx
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "<Page Title>",
  description: "<SEO description mentioning Shiv Prabha Foundation and the page topic>",
};

export default function <PageName>Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
```

### Step 4: Create page.tsx

Follow this structure. The page must be a `"use client"` component.

```tsx
"use client";

import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
// Import icons from lucide-react as needed

export default function <PageName>Page() {
  return (
    <>
      <PageBanner
        title="<Page Title>"
        tagline="<Tagline>"
        breadcrumb="<BREADCRUMB TEXT>"
      />

      {/* Section 1: default background */}
      <Section background="default">
        <Container size="lg">
          <SectionHeading
            label="<eyebrow label>"
            title="<Section Title>"
            description="<optional description>"
          />
          {/* Content here */}
        </Container>
      </Section>

      {/* Section 2: white background (alternating) */}
      <Section background="white">
        <Container size="lg">
          <SectionHeading
            label="<eyebrow label>"
            title="<Section Title>"
          />
          {/* Content here */}
        </Container>
      </Section>

      {/* Continue alternating backgrounds: default -> white -> default -> ... */}

      {/* Final CTA Section */}
      <Section background="primary" spacing="lg">
        <Container size="lg" className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg text-surface/80 max-w-2xl mx-auto mb-8">
            Join us in our mission to transform lives across India.
          </p>
          <Button variant="secondary" size="lg" href="/contact">
            Get in Touch
          </Button>
        </Container>
      </Section>
    </>
  );
}
```

### Design rules to follow

- **Background alternation**: Always alternate `background="default"` (off-white) and `background="white"` between sections. Never use two of the same in a row.
- **CTA section**: Use `background="primary"` (amber) with `spacing="lg"` for the final call-to-action.
- **Buttons**: Use `variant="accent"` (blue #2563EB) for primary actions. Use `variant="outline"` for secondary.
- **Grids**: Use `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8` for card grids.
- **Icons**: Import from `lucide-react`. Use icon circles: `w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary`.
- **Content data**: If the page has significant static content, create a content file in `src/content/` and export typed data.
- **Responsive**: Always use `sm:` breakpoints for mobile-first. Minimum: `text-3xl sm:text-4xl md:text-5xl` for headings.
- **No subtitle on banner**: Per project convention, do NOT pass `subtitle` to PageBanner. Use `title` and `tagline` only.

### Step 5: Add to navigation (if needed)

If the user wants the page in the nav, update the `navLinks` array in `src/content/site.ts`.

### Step 6: Verify

Run `npm run build` to check for errors.
