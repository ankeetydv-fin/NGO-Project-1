## 18) Agent Build Sequence

Use this step-by-step order with the coding agent.

### Step 1: Foundation
Create the project structure, install dependencies, configure Tailwind, TypeScript, routing, and base layout.

### Step 2: Design system
Implement colors, typography, spacing, buttons, cards, and section wrappers.

### Step 3: Global layout
Build navbar, footer, page container, and responsive shell.

### Step 4: Home page
Create hero, mission, impact stats, programs, donation CTA, stories, trust blocks, and footer.

### Step 5: Supporting pages
Build About, Programs, Donate, Reports, Volunteer, Contact.

### Step 6: Content integration
Connect static content first, then CMS.

### Step 7: Forms and payment
Add volunteer form, contact form, and donation/payment flow.

### Step 8: SEO and accessibility
Add metadata, structured data, alt text, headings, contrast, keyboard support.

### Step 9: Optimization
Improve performance, image loading, and mobile responsiveness.

### Step 10: Final polish
Refine spacing, copy, animations, and consistency.

---

## 19) Exact Prompt Pack for the Agent

### Prompt 1 — Project setup
```txt
Create a production-ready NGO/foundation website using Next.js, TypeScript, and Tailwind CSS, framer motion etc newest technologies.

Build the project structure first with reusable components, layout files, shared styles, and content folders.

Do not generate random pages yet. First set up the foundation, routing, and design system.

The website must be inspired by modern, trustworthy nonprofit websites and should prioritize credibility, donations, volunteering, transparency, and storytelling.



Use the design principles, colors, fonts, and structure defined in the ngo_website_design_brief_and_agent_prompt_pack.md file.

Build the site as a modern, responsive, high-conversion NGO/foundation website with:
- clean UI
- smooth animations
- trust-building elements
- clear impact communication
- donation & volunteer CTAs
- mobile-first layout


```

### Prompt 2 — Design system
```txt
Now create the visual design system for the NGO website.

Use a warm, trustworthy, accessible nonprofit style with:
- primary blue
- secondary teal
- orange CTA accent
- off-white backgrounds
- readable sans-serif typography
- soft shadows
- rounded cards
- clean spacing

Define reusable tokens for colors, typography, spacing, button styles, border radius, and component surfaces.

according to  the ngo_website_design_brief_and_agent_prompt_pack.md file.

```

### Prompt 3 — Global layout
```txt
Build the global layout system.

Create a responsive sticky navbar, footer, page wrapper, CTA button styles, and section container components.

The navbar should support home, about, programs, impact, donate, volunteer, reports, and contact.

The layout must be mobile-first, accessible, and consistent across all pages.

 according to  the ngo_website_design_brief_and_agent_prompt_pack.md file.

```

### Prompt 4 — Homepage
```txt
Build the homepage of the NGO website.

Include these sections in order:
- hero section with headline, subtext, and donation CTA
- trust bar with partner logos or credibility markers
- mission summary
- impact statistics
- programs preview
- donation CTA section
- story/testimonial section
- transparency/report section
- volunteer section
- latest updates/blog preview
- footer

Use a clean modern nonprofit visual style with strong hierarchy and subtle motion.
```

### Prompt 5 — Supporting pages
```txt
Build the remaining core pages for the NGO website:
About Us, Mission & Vision, Programs, Impact, Donate, Volunteer, Stories/Blog, Reports, Gallery, and Contact.

Each page should reuse the same design system and layout patterns.

Keep the content structured, easy to scan, and optimized for trust-building and conversion.
```

### Prompt 6 — Donations and forms
```txt
Add donation and contact-related functionality.

Create donation CTAs, donation amount options, recurring donation UI, volunteer form, and contact form.

Make the UX simple, trustworthy, and conversion-focused.

actually this NGO is India based so I think the content and the language should be in Indian context.
and the money should be in INR. rupees.
```

### Prompt 7 — CMS and content management
```txt
Prepare the website for CMS integration.

Separate content from UI components.

Create content-driven components for pages, stats, testimonials, program cards, reports, FAQs, and stories.

Structure the code so NGO staff can later update content easily without editing core UI code.
```

### Prompt 8 — SEO and polish
```txt
Add SEO, accessibility, performance optimization, and final polish.

Include metadata, semantic headings, alt text, clean URLs, mobile responsiveness, and smooth but subtle animations.

Optimize the site for fast loading and strong presentation on all screen sizes.

not only this I want simple website only matters is the performance fast loading remove unnecessary animations and any other things. remove heavy packages. remove unused dependencies. remove any unused empty files and optimize the code.

```

---

## 20) Final Rule for Building

Do not ask the agent to build everything in one prompt.

Use the prompts in sequence.

First build foundation.
Then design system.
Then layout.
Then homepage.
Then other pages.
Then forms.
Then CMS.
Then SEO and polish.

That is how the project stays controllable.

