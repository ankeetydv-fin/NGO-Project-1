import { defineField, defineType } from 'sanity'

export const volunteerPageType = defineType({
  name: 'volunteerPage',
  title: 'Volunteer Page',
  type: 'document',
  initialValue: {
    pageTitle: 'Join the Frontlines',
    pageSubtitle: 'Your hands can dig a well. Your voice can teach a child. Join 200+ volunteers standing up for families in need right now.',
    pageBreadcrumb: 'Volunteer With Us',
    roles: [
      { _key: 'role-1', iconName: 'GraduationCap', title: 'Teach a Child', location: 'Rajasthan & MP Villages', commitment: '10 hrs/week', description: 'Sit beside a child who has never owned a book. Teach them to read, write, and see a future beyond poverty and labor.' },
      { _key: 'role-2', iconName: 'HeartPulse', title: 'Medical Camp Assistant', location: 'Mobile Clinics, UP & Bihar', commitment: 'Weekend Events', description: 'Help us save lives. Walk alongside doctors to distribute medicine, clean water tablets, and basic hygiene kits to sick kids.' },
      { _key: 'role-3', iconName: 'Megaphone', title: 'Voice for the Voiceless', location: 'Delhi NCR & Metro Cities', commitment: 'Flexible', description: 'Be the advocate they need. Tell their stories, gather critical donations, and connect kind hearts with families fighting for survival.' },
      { _key: 'role-4', iconName: 'Camera', title: 'Storyteller & Photographer', location: 'Field & Remote', commitment: 'Project-Based', description: 'Give a face to the struggle. Capture the joy of a village tasting clean water for the first time and share their hope with the world.' },
    ],
    benefits: [
      'Save lives and witness immediate, real-world change',
      'Work directly on the frontlines of humanitarian action',
      'Earn a certificate honoring your service and dedication',
      'Join 200+ active volunteers standing up for others',
      'Give whatever hours you can spare — every second counts',
      'Learn hands-on grassroots coordination and community relief',
    ],
    communityCount: '200+',
    communityLabel: 'Active Volunteers',
    communityDescription: 'Join a dedicated team across India who refused to stand by, giving over 5,000 hours of direct, life-saving action to communities in need.',
    formInterestOptions: ['Teaching & Education', 'Healthcare & Medical Aid', 'Community Outreach', 'Media & Storytelling', 'Fundraising & Drives', 'Other'],
    formAvailabilityOptions: ['A few hours per week', 'Weekends only', 'Full-time for a project', 'Flexible / Remote'],
  },
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
