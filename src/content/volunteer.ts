/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  VOLUNTEER CONTENT
 *  Edit this file to update volunteer roles,
 *  benefits, and the application form settings.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { VolunteerRole } from "@/types/content";

export const volunteerRoles: VolunteerRole[] = [
  {
    iconName: "GraduationCap",
    title: "Teaching Assistant",
    location: "Rajasthan & MP Villages",
    commitment: "10 hrs/week",
    description:
      "Help children in our learning centers with reading, math, and digital literacy across rural schools.",
  },
  {
    iconName: "HeartPulse",
    title: "Health Camp Organizer",
    location: "Mobile Clinics, UP & Bihar",
    commitment: "Weekend Events",
    description:
      "Assist doctors during medical camps — registration, logistics, and patient support in underserved communities.",
  },
  {
    iconName: "Megaphone",
    title: "Community Outreach",
    location: "Delhi NCR & Metro Cities",
    commitment: "Flexible",
    description:
      "Spread awareness, organize fundraisers, and connect urban communities with our grassroots programs.",
  },
  {
    iconName: "Camera",
    title: "Media & Documentation",
    location: "Field & Remote",
    commitment: "Project-Based",
    description:
      "Capture stories, photograph events, and help create content for reports and social media campaigns.",
  },
];

export const volunteerBenefits: string[] = [
  "Make a direct, tangible impact",
  "Gain field experience in social development",
  "Receive a certificate of volunteering",
  "Join a supportive community of 200+ volunteers",
  "Flexible commitment — from hours to months",
  "Professional development and training",
];

export const volunteerPageMeta = {
  title: "Volunteer",
  subtitle:
    "Your time can change someone's life. Join 200+ volunteers making a real difference.",
  breadcrumb: "Join Our Team",
};

export const volunteerCommunityStats = {
  count: "200+",
  label: "Active Volunteers",
  description:
    "Join a growing community of volunteers across India who have collectively contributed over 5,000 hours of service.",
};

export const volunteerFormOptions = {
  interests: [
    "Teaching & Education",
    "Healthcare",
    "Community Outreach",
    "Media & Documentation",
    "Fundraising",
    "Other",
  ],
  availability: [
    "A few hours per week",
    "Weekends only",
    "Full-time for a project",
    "Flexible / Remote",
  ],
};
