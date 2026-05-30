import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'trust', title: 'Trust Bar' },
    { name: 'mission', title: 'Mission' },
    { name: 'donation', title: 'Donation Tiers' },
  ],
  fields: [
    defineField({
      name: 'heroBadge',
      title: 'Hero Badge Text',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSlides',
      title: 'Hero Slides',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          { name: 'id', type: 'string', title: 'Slide ID' },
          { name: 'title', type: 'string', title: 'Title' },
          { name: 'subtitle', type: 'string', title: 'Subtitle' },
          { name: 'description', type: 'text', title: 'Description' },
          { name: 'image', type: 'image', title: 'Image', options: { hotspot: true } },
          { name: 'ctaText', type: 'string', title: 'CTA Text' },
          { name: 'ctaLink', type: 'string', title: 'CTA Link' },
        ],
      }],
    }),
    defineField({
      name: 'heroStats',
      title: 'Hero Stats',
      type: 'array',
      group: 'hero',
      of: [{
        type: 'object',
        fields: [
          { name: 'value', type: 'string', title: 'Value' },
          { name: 'label', type: 'string', title: 'Label' },
        ],
      }],
    }),
    defineField({
      name: 'recentDonation',
      title: 'Recent Donation',
      type: 'object',
      group: 'hero',
      fields: [
        { name: 'amount', type: 'string', title: 'Amount' },
        { name: 'donor', type: 'string', title: 'Donor' },
        { name: 'time', type: 'string', title: 'Time' },
      ],
    }),
    defineField({
      name: 'trustPartners',
      title: 'Trust Partners',
      type: 'array',
      group: 'trust',
      of: [{
        type: 'object',
        fields: [
          { name: 'name', type: 'string', title: 'Name' },
          { name: 'iconName', type: 'string', title: 'Icon Name' },
        ],
      }],
    }),
    defineField({
      name: 'missionLabel',
      title: 'Mission Label',
      type: 'string',
      group: 'mission',
    }),
    defineField({
      name: 'missionHeadline',
      title: 'Mission Headline',
      type: 'string',
      group: 'mission',
    }),
    defineField({
      name: 'missionHighlightedText',
      title: 'Mission Highlighted Text',
      type: 'string',
      group: 'mission',
    }),
    defineField({
      name: 'missionDescription',
      title: 'Mission Description',
      type: 'text',
      group: 'mission',
    }),
    defineField({
      name: 'missionText',
      title: 'Mission Statement',
      type: 'text',
      group: 'mission',
    }),
    defineField({
      name: 'visionText',
      title: 'Vision Statement',
      type: 'text',
      group: 'mission',
    }),
    defineField({
      name: 'donationTiers',
      title: 'Donation Tiers',
      type: 'array',
      group: 'donation',
      of: [{
        type: 'object',
        fields: [
          { name: 'amount', type: 'number', title: 'Amount (₹)' },
          { name: 'impact', type: 'string', title: 'Impact Description' },
        ],
      }],
    }),
  ],
})
