---
description: "Add a new content section to an existing page. Reads the page to determine correct background alternation and generates a matching section block."
user-invocable: true
argument-hint: "[page-path]"
---

## Add a Section to an Existing Page

You are adding a new content section to a page on the Shiv Prabha Foundation website.

### Step 1: Read the target page

Read the page file to understand:
- Current sections and their order
- Background alternation pattern (default -> white -> default -> ...)
- Whether there's a CTA section at the end (always keep CTA last)
- Import statements already present

### Step 2: Ask the user

- **Section title** (heading text)
- **Eyebrow label** (optional small text above heading, e.g., "What We Do")
- **Description** (optional paragraph below heading)
- **Layout type**: grid (2/3/4 col), 50-50 split, full-width text, or custom
- **Where to insert**: before CTA (default), or specify position

### Step 3: Determine the correct background

Look at the section immediately before the insertion point:
- If it's `background="default"`, use `background="white"`
- If it's `background="white"`, use `background="default"`
- Never place two same backgrounds in a row
- If inserting before a CTA (`background="primary"`), use the alternating default/white

### Step 4: Generate the section

#### Grid layout (cards)

```tsx
<Section background="<determined>">
  <Container size="lg">
    <SectionHeading
      label="<eyebrow>"
      title="<title>"
      description="<description>"
    />
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
      {items.map((item, i) => (
        <Card key={i} className="p-6">
          {/* Card content */}
        </Card>
      ))}
    </div>
  </Container>
</Section>
```

#### 50-50 split (image + text)

```tsx
<Section background="<determined>">
  <Container size="lg">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
        <ImagePlaceholder
          src="<image-path>"
          alt="<alt text>"
          fill
          className="object-cover"
        />
      </div>
      <div className="space-y-6">
        <SectionHeading
          label="<eyebrow>"
          title="<title>"
          align="left"
          className="mb-0"
        />
        <p className="text-text-muted leading-relaxed">
          <description>
        </p>
        <Button variant="accent" href="<link>">
          Learn More
        </Button>
      </div>
    </div>
  </Container>
</Section>
```

#### Full-width text

```tsx
<Section background="<determined>">
  <Container size="md">
    <SectionHeading
      label="<eyebrow>"
      title="<title>"
      description="<description>"
    />
    <div className="prose prose-lg max-w-none text-text-muted">
      {/* Rich text content */}
    </div>
  </Container>
</Section>
```

### Step 5: Add missing imports

Check if these are already imported and add any that are missing:
- `Section` from `@/components/layout/Section`
- `Container` from `@/components/layout/Container`
- `SectionHeading` from `@/components/ui/SectionHeading`
- `Button` from `@/components/ui/Button`
- `Card` from `@/components/ui/Card`
- `ImagePlaceholder` from `@/components/ui/ImagePlaceholder`
- Icons from `lucide-react` as needed

### Design rules

- **Alternating backgrounds**: default (off-white) and white MUST alternate
- **CTA stays last**: Insert new sections BEFORE the final CTA section
- **Spacing**: Use default `spacing="md"` unless it's a hero-like section (use `"lg"`)
- **Responsive grids**: Always `grid-cols-1 sm:grid-cols-2 lg:grid-cols-N`
- **Images**: Use `ImagePlaceholder` component, not raw `<Image>`
- **Buttons**: `variant="accent"` (blue) for primary, `variant="outline"` for secondary

### Step 6: Verify

Run `npm run build` after adding the section.
