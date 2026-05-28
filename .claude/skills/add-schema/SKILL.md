---
description: "Add a new Sanity CMS schema with server action. Use when the user needs a new data type (e.g., events, donations, blog posts). Creates schema, registers it, and wires up the server action."
user-invocable: true
argument-hint: "[schema-name]"
---

## Add a New Sanity Schema + Server Action

You are adding a new document type to the Sanity CMS backend for the Shiv Prabha Foundation website.

### Step 1: Gather information

Ask the user for:
- **Schema name** (camelCase, e.g., `event`, `blogPost`, `donation`)
- **Display title** (e.g., "Event", "Blog Post")
- **Fields** needed (name, type, required?)
- **Status options** (e.g., draft/published, new/reviewed)
- **Whether a server action is needed** (for form submissions)
- **Whether a page is needed** (for the form UI)

### Step 2: Create the schema file

Create `src/sanity/schemaTypes/<name>.ts` following this pattern:

```ts
import { defineField, defineType } from 'sanity'

export const <name>Type = defineType({
  name: '<name>',
  title: '<Display Title>',
  type: 'document',
  icon: () => '<emoji>',  // Pick a relevant emoji
  fields: [
    defineField({
      name: 'fieldName',
      title: 'Field Title',
      type: 'string',       // string | text | number | boolean | datetime | image | array | reference
      validation: (Rule) => Rule.required(),
    }),
    // Add more fields...
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Reviewed', value: 'reviewed' },
          { title: 'Archived', value: 'archived' },
        ],
      },
      initialValue: 'new',
    }),
  ],
  preview: {
    select: {
      title: 'name',        // or whatever the primary display field is
      subtitle: 'status',
    },
  },
})
```

### Step 3: Register the schema

Edit `src/sanity/schemaTypes/index.ts`:

1. Add import: `import { <name>Type } from './<name>'`
2. Add to the `types` array: `<name>Type,`

### Step 4: Create server action (if needed)

Create `src/app/actions/<name>.ts` following this pattern:

```ts
"use server"

import { getWriteClient } from "@/sanity/lib/client"

interface <Name>FormData {
  fieldName: string
  // ... other fields
}

export async function submit<Name>(data: <Name>FormData) {
  // Validate required fields
  if (!data.fieldName?.trim()) return { error: "Field Name is required" }

  // Validate email if present
  if (data.email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }
  }

  try {
    const client = getWriteClient()
    await client.create({
      _type: "<name>",
      fieldName: data.fieldName.trim(),
      // ... other fields
      submittedAt: new Date().toISOString(),
      status: "new",
    })
    return { success: true }
  } catch (error) {
    console.error("Failed to submit <name>:", error)
    return { error: "Something went wrong. Please try again later." }
  }
}
```

### Step 5: Verify

Run `npm run build` to check for type errors and ensure the schema registers correctly.

### Notes
- Always use `getWriteClient()` for mutations (not the read-only `client`)
- Always validate inputs before writing to Sanity
- Always trim string inputs and lowercase emails
- Always include `submittedAt` and `status` fields for form submissions
- Use `defineField` and `defineType` from sanity (not plain objects)
