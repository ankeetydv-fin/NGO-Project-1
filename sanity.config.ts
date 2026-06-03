import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { schema } from './src/sanity/schemaTypes'
import type { StructureBuilder } from 'sanity/structure'

const singletonListItem = (S: StructureBuilder, id: string, title: string) =>
  S.listItem()
    .id(id)
    .title(title)
    .child(
      S.document()
        .id(id)
        .schemaType(id)
        .documentId(id)
    )

export default defineConfig({
  basePath: '/studio',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || '',
  schema,
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .id('root')
          .title('Content')
          .items([
            // ── Singleton Pages ──
            S.divider(),
            S.listItem()
              .id('pages')
              .title('Pages')
              .child(
                S.list()
                  .id('pages-list')
                  .title('Pages')
                  .items([
                    singletonListItem(S, 'homepage', 'Homepage'),
                    singletonListItem(S, 'about', 'About Page'),
                    singletonListItem(S, 'impactPage', 'Impact Page'),
                    singletonListItem(S, 'volunteerPage', 'Volunteer Page'),
                    singletonListItem(S, 'siteSettings', 'Site Settings'),
                  ])
              ),

            S.divider(),

            // ── Collections ──
            S.listItem()
              .id('collections')
              .title('Collections')
              .child(
                S.list()
                  .id('collections-list')
                  .title('Collections')
                  .items([
                    S.documentTypeListItem('program').title('Programs'),
                    S.documentTypeListItem('story').title('Stories'),
                    S.documentTypeListItem('testimonial').title('Testimonials'),
                    S.documentTypeListItem('report').title('Reports'),
                    S.documentTypeListItem('galleryItem').title('Gallery Items'),
                    S.documentTypeListItem('faqItem').title('FAQ Items'),
                  ])
              ),

            S.divider(),

            // ── Form Submissions (read-only) ──
            S.listItem()
              .id('submissions')
              .title('Form Submissions')
              .child(
                S.list()
                  .id('submissions-list')
                  .title('Form Submissions')
                  .items([
                    S.documentTypeListItem('contactMessage').title('Contact Messages'),
                    S.documentTypeListItem('volunteerApplication').title('Volunteer Applications'),
                    S.documentTypeListItem('newsletterSubscriber').title('Newsletter Subscribers'),
                    S.documentTypeListItem('donation').title('Donations'),
                  ])
              ),
          ]),
    }),
  ],
})