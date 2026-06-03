import { defineField, defineType } from 'sanity'

export const impactPageType = defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
  initialValue: {
    pageTitle: 'Our Impact',
    pageBreadcrumb: 'Making a Difference',
    stats: [
      { _key: 'stat-1', iconName: 'Calendar', value: '2025', label: 'First Families Saved', color: 'text-primary', bg: 'bg-primary/10' },
      { _key: 'stat-2', iconName: 'Target', value: '3', label: 'Vital Life-saving Programs', color: 'text-primary', bg: 'bg-primary/10' },
      { _key: 'stat-3', iconName: 'Shield', value: '100%', label: 'Direct-to-Family Funding', color: 'text-primary', bg: 'bg-primary/10' },
    ],
    outcomes: [
      { _key: 'outcome-1', title: 'Keeping Kids in School', items: ['Placing textbook packs, writing slates, and schoolbags directly into children\'s hands', 'Setting up community learning corners so children have a safe, quiet space to study', 'Matching struggling students with mentors to guide them away from child labor', 'Providing emergency school-fee stipends to keep poverty from cutting education short'] },
      { _key: 'outcome-2', title: 'Clean Water & Survival Care', items: ['Distributing nutrition kits and hygiene packs to families in remote village blocks', 'Training mothers in life-saving clean water storage and basic sanitation', 'Drilling safe, clean water wells so women don\'t have to walk miles for muddy water', 'Deploying volunteer doctors to diagnose and treat sick infants before it\'s too late'] },
      { _key: 'outcome-3', title: 'Grassroots Sports & Opportunity', items: ['Equipping passionate, barefoot youth with proper running shoes and sports gear', 'Building simple, safe playfields where children can run, practice, and learn discipline', 'Providing healthy meals and training stipends to nurture raw athletic talents', 'Creating direct pathways for talented village kids to join official district leagues'] },
    ],
  },
  fields: [
    defineField({
      name: 'stats',
      title: 'Impact Statistics',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', type: 'string', title: 'Icon Name' },
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'color', type: 'string', title: 'Text Color Class' },
          { name: 'bg', type: 'string', title: 'Background Color Class' },
        ],
      }],
    }),
    defineField({
      name: 'outcomes',
      title: 'Program Outcomes',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'items', type: 'array', of: [{ type: 'string' }], title: 'Items' },
        ],
      }],
    }),
    defineField({
      name: 'stories',
      title: 'Impact Stories',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'quote', type: 'text', title: 'Quote' },
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'location', type: 'string', title: 'Location' },
        ],
      }],
    }),
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
    }),
    defineField({
      name: 'pageBreadcrumb',
      title: 'Breadcrumb',
      type: 'string',
    }),
  ],
})
