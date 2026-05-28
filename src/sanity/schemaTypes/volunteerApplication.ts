import { defineField, defineType } from 'sanity'

export const volunteerApplicationType = defineType({
  name: 'volunteerApplication',
  title: 'Volunteer Application',
  type: 'document',
  icon: () => '🙋',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Preferred Role',
      type: 'string',
      options: {
        list: [
          { title: 'Teaching & Education', value: 'Teaching & Education' },
          { title: 'Healthcare', value: 'Healthcare' },
          { title: 'Community Outreach', value: 'Community Outreach' },
          { title: 'Media & Documentation', value: 'Media & Documentation' },
          { title: 'Fundraising', value: 'Fundraising' },
          { title: 'Other', value: 'Other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'A few hours per week', value: 'A few hours per week' },
          { title: 'Weekends only', value: 'Weekends only' },
          { title: 'Full-time for a project', value: 'Full-time for a project' },
          { title: 'Flexible / Remote', value: 'Flexible / Remote' },
        ],
      },
    }),
    defineField({
      name: 'motivation',
      title: 'Motivation',
      type: 'text',
      validation: (Rule) => Rule.required().min(20),
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Reviewed', value: 'reviewed' },
          { title: 'Contacted', value: 'contacted' },
          { title: 'Accepted', value: 'accepted' },
          { title: 'Declined', value: 'declined' },
        ],
      },
      initialValue: 'pending',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      description: 'email',
    },
  },
})
