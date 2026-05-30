import { defineField, defineType } from 'sanity'

export const impactPageType = defineType({
  name: 'impactPage',
  title: 'Impact Page',
  type: 'document',
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
