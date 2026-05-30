import { defineField, defineType } from 'sanity'

export const volunteerPageType = defineType({
  name: 'volunteerPage',
  title: 'Volunteer Page',
  type: 'document',
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageSubtitle',
      title: 'Page Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'pageBreadcrumb',
      title: 'Breadcrumb',
      type: 'string',
    }),
    defineField({
      name: 'roles',
      title: 'Volunteer Roles',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', type: 'string', title: 'Icon Name' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'location', type: 'string', title: 'Location' },
          { name: 'commitment', type: 'string', title: 'Commitment' },
          { name: 'description', type: 'text', title: 'Description' },
        ],
      }],
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'communityCount',
      title: 'Community Count',
      type: 'string',
    }),
    defineField({
      name: 'communityLabel',
      title: 'Community Label',
      type: 'string',
    }),
    defineField({
      name: 'communityDescription',
      title: 'Community Description',
      type: 'text',
    }),
    defineField({
      name: 'formInterestOptions',
      title: 'Form Interest Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'formAvailabilityOptions',
      title: 'Form Availability Options',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
})
