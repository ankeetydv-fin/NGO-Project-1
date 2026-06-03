import { defineField, defineType } from 'sanity'

export const programType = defineType({
  name: 'program',
  title: 'Program',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'details', title: 'Details & Stats' },
    { name: 'styling', title: 'Styling' },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: 'content',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'content',
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isActive',
      title: 'Is Active',
      type: 'boolean',
      group: 'content',
      initialValue: true,
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'iconName',
      title: 'Icon Name (Lucide)',
      type: 'string',
      group: 'details',
      description: 'e.g. GraduationCap, HeartPulse, Droplets, Wheat, Home, Baby',
    }),
    defineField({
      name: 'stats',
      title: 'Stat Numbers',
      type: 'array',
      group: 'details',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', type: 'string', title: 'Label' },
          { name: 'value', type: 'string', title: 'Value' },
        ],
      }],
    }),
    defineField({
      name: 'highlights',
      title: 'Highlights',
      type: 'array',
      group: 'details',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'color',
      title: 'Text Color Class',
      type: 'string',
      group: 'styling',
      description: 'e.g. text-primary, text-accent-orange, text-accent-green, text-secondary',
    }),
    defineField({
      name: 'bg',
      title: 'Background Color Class',
      type: 'string',
      group: 'styling',
      description: 'e.g. bg-primary/10, bg-accent-orange/10, bg-accent-green/10, bg-secondary/10',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'image',
    },
  },
})
