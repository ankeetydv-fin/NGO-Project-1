import { defineField, defineType } from 'sanity'

export const reportType = defineType({
  name: 'report',
  title: 'Report',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'string',
    }),
    defineField({
      name: 'pages',
      title: 'Pages',
      type: 'string',
    }),
    defineField({
      name: 'size',
      title: 'File Size',
      type: 'string',
    }),
    defineField({
      name: 'reportType',
      title: 'Report Type',
      type: 'string',
      options: {
        list: [
          { title: 'Annual Report', value: 'annual' },
          { title: 'Financial Statement', value: 'financial' },
          { title: 'Impact Assessment', value: 'impact' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'file',
      title: 'PDF File',
      type: 'file',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'reportType',
    },
  },
})
