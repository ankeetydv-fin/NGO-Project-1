import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  groups: [
    { name: 'content', title: 'Content' },
    { name: 'vision', title: 'Vision & Mission' },
    { name: 'pillars', title: 'Pillars' },
    { name: 'values', title: 'Values' },
    { name: 'team', title: 'Team' },
  ],
  fields: [
    defineField({
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'pageBreadcrumb',
      title: 'Breadcrumb',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'pageTagline',
      title: 'Tagline',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'content',
    }),
    defineField({
      name: 'foundingDate',
      title: 'Founding Date',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Statement',
      type: 'text',
      group: 'vision',
    }),
    defineField({
      name: 'missionPoints',
      title: 'Mission Points',
      type: 'array',
      of: [{ type: 'text' }],
      group: 'vision',
    }),
    defineField({
      name: 'pillars',
      title: 'Core Pillars',
      type: 'array',
      group: 'pillars',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', type: 'string', title: 'Icon Name' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'description', type: 'text', title: 'Description' },
        ],
      }],
    }),
    defineField({
      name: 'values',
      title: 'Core Values',
      type: 'array',
      group: 'values',
      of: [{
        type: 'object',
        fields: [
          { name: 'iconName', type: 'string', title: 'Icon Name' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'text', type: 'text', title: 'Description' },
        ],
      }],
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      group: 'team',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'role', type: 'string', title: 'Role' },
          { name: 'initials', type: 'string', title: 'Initials' },
          { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
        ],
      }],
    }),
  ],
})
