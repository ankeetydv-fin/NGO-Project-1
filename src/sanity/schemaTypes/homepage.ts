import { defineField, defineType } from 'sanity'

export const homepageType = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  initialValue: {
    heroBadge: 'Shiv Prabha Foundation • Real People. Real Lives. Immediate Action.',
    heroSlides: [
      { _key: 'slide-1', id: 'slide-1', subtitle: 'Rani used to walk 5 km under a scorching sun for a single bucket of muddy water.', title: 'Clean Water is Survival', description: 'No mother should have to watch her children drink water that will make them sick. We build wells directly in forgotten village blocks, bringing clean water and safety right to their doorstep.', ctaText: 'Build a Well Now', ctaLink: '/donate?cause=water' },
      { _key: 'slide-2', id: 'slide-2', subtitle: 'A little girl reads under a flickering streetlamp because her home has no light.', title: 'Keep a Child in School', description: 'Without basic pens, notebooks, and support, children are forced out of classrooms and into manual labor. We get supplies directly to children so they can stay in school and write their own future.', ctaText: 'Send School Books Now', ctaLink: '/donate?cause=education' },
      { _key: 'slide-3', id: 'slide-3', subtitle: 'He plays barefoot on rocky soil, dreaming of wearing real shoes.', title: 'Nurture Raw Athletic Talent', description: 'Underprivileged children with immense champion potential play in the dirt with broken gear. We give them real athletic kits, shoes, and direct coaching so they can run, compete, and escape poverty.', ctaText: 'Equip a Young Champion', ctaLink: '/donate?cause=sports' },
    ],
    heroStats: [
      { _key: 'stat-1', value: '2025', label: 'Year We Began Rescuing Lives' },
      { _key: 'stat-2', value: '3', label: 'Core Lifelines we Provide' },
      { _key: 'stat-3', value: '100%', label: 'Direct-to-Child Grassroots Action' },
    ],
    recentDonation: { amount: '₹2,500', donor: 'Anonymous', time: 'Just now' },
    trustPartners: [
      { _key: 'trust-1', name: 'NITI Aayog', iconName: 'Building2' },
      { _key: 'trust-2', name: 'UNICEF India', iconName: 'Globe' },
      { _key: 'trust-3', name: 'Tata Trusts', iconName: 'Handshake' },
      { _key: 'trust-4', name: 'Give India', iconName: 'Shield' },
      { _key: 'trust-5', name: 'CSR Partners', iconName: 'Award' },
    ],
    missionLabel: 'Our Urgent Mission',
    missionHeadline: 'No child should be left in the dark,',
    missionHighlightedText: 'waiting for help to arrive.',
    missionDescription: "We don't wait for endless committee meetings or red tape. Founded on February 13, 2025, we are on the ground in India's most neglected village blocks. We deliver clean drinking water, protect families from deadly preventable sickness, and put learning books and sports gear directly into the hands of children who have nothing.",
    missionText: 'To rescue children from hunger, ignorance, and neglect by delivering clean water wells, school supplies, and athletic training directly to families who need them today.',
    visionText: 'A society where no family is left without drinking water, no child drops out of school to survive, and every rural talent has a chance to play and win.',
    donationTiers: [
      { _key: 'tier-1', amount: 500, impact: 'Provides full sets of textbooks and pens for 5 children so they can stay in school' },
      { _key: 'tier-2', amount: 1000, impact: 'Delivers an emergency nutrition and hygiene pack to keep 2 families safe from disease' },
      { _key: 'tier-3', amount: 2500, impact: 'Sponsors a complete athletic kit and proper running shoes for a talented rural runner' },
      { _key: 'tier-4', amount: 5000, impact: 'Funds all school desks, writing slates, and books for a village classroom block' },
      { _key: 'tier-5', amount: 10000, impact: 'Builds a safe water filtration setup for 50 families to drink without fear' },
    ],
  },
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
