import { defineField, defineType } from 'sanity'

export const aboutType = defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  initialValue: {
    pageTitle: 'About Us',
    pageBreadcrumb: 'Our Story',
    pageTagline: 'Transforming Lives… One Step at a Time — संस्कार, शिक्षा और सेवा की ओर एक कदम',
    storyParagraphs: [
      'Welcome to Shiv Prabha Foundation — a foundation established with the vision of building a stronger, empowered, and inclusive society. Founded on 13th February 2025, our organization is committed to the holistic development of communities, with a special focus on youth and the younger generation of boys and girls who represent the future of our nation.',
      'At Shiv Prabha Foundation, we believe that real change begins with education, awareness, opportunity, and empowerment. Our mission is to guide, inspire, and support young minds so they can grow into confident, responsible, and successful individuals who contribute positively to society.',
      'We are also deeply committed to uplifting the weaker and underprivileged sections of society through social initiatives, awareness campaigns, educational support, community welfare programs, and humanitarian activities aimed at creating meaningful and lasting change.',
    ],
    foundingDate: '13th February 2025',
    visionText: 'To build an empowered, educated, inclusive, and progressive society where every individual — especially youth, sportspersons, and the underprivileged — gets equal opportunities to grow, succeed, and achieve their dreams.',
    missionPoints: [
      'To empower youth through education, guidance, skill development, and social awareness.',
      'To support weaker and underprivileged sections of society through meaningful social initiatives.',
      'To promote sports and provide opportunities to talented boys and girls who aspire to excel in athletics and other sporting fields.',
      'To ensure that no dream is left behind because of a lack of opportunity or support.',
      'To encourage social responsibility, equality, values, and community development.',
      'To create positive and lasting change through dedicated service and collective efforts.',
    ],
    pillars: [
      { _key: 'pillar-1', iconName: 'GraduationCap', title: 'Education & Empowerment', description: 'Guiding and inspiring young minds through education, awareness campaigns, and skill development so they grow into confident, responsible individuals.' },
      { _key: 'pillar-2', iconName: 'Trophy', title: 'Sports & Athletics', description: 'Every boy and girl deserves a fair opportunity to pursue their dreams in sports. We encourage and support young sportspersons by creating opportunities and helping them reach their dream ground.' },
      { _key: 'pillar-3', iconName: 'Heart', title: 'Community Welfare', description: 'Uplifting the weaker and underprivileged sections through social initiatives, educational support, and humanitarian activities that create meaningful and lasting change.' },
    ],
    values: [
      { _key: 'val-1', iconName: 'Heart', title: 'Compassion', text: 'We lead with empathy, serving those who need it most with genuine care and respect.' },
      { _key: 'val-2', iconName: 'Shield', title: 'Integrity', text: 'Transparency and honesty guide every decision we make and every action we take.' },
      { _key: 'val-3', iconName: 'Users', title: 'Inclusivity', text: 'We believe in equal opportunity for every individual regardless of background or circumstance.' },
      { _key: 'val-4', iconName: 'Award', title: 'Dedication', text: 'Our commitment toward social service remains strong and unwavering, every single day.' },
    ],
    teamMembers: [
      { _key: 'team-1', name: 'Founder Name', role: 'Founder & President', initials: 'FN' },
      { _key: 'team-2', name: 'Team Member', role: 'Director of Programs', initials: 'TM' },
      { _key: 'team-3', name: 'Team Member', role: 'Head of Operations', initials: 'TM' },
      { _key: 'team-4', name: 'Team Member', role: 'Community Outreach Lead', initials: 'TM' },
    ],
  },
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
