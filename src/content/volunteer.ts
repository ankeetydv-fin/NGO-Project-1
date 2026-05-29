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
    title: "Teach a Child",
    location: "Rajasthan & MP Villages",
    commitment: "10 hrs/week",
    description:
      "Sit beside a child who has never owned a book. Teach them to read, write, and see a future beyond poverty and labor.",
  },
  {
    iconName: "HeartPulse",
    title: "Medical Camp Assistant",
    location: "Mobile Clinics, UP & Bihar",
    commitment: "Weekend Events",
    description:
      "Help us save lives. Walk alongside doctors to distribute medicine, clean water tablets, and basic hygiene kits to sick kids.",
  },
  {
    iconName: "Megaphone",
    title: "Voice for the Voiceless",
    location: "Delhi NCR & Metro Cities",
    commitment: "Flexible",
    description:
      "Be the advocate they need. Tell their stories, gather critical donations, and connect kind hearts with families fighting for survival.",
  },
  {
    iconName: "Camera",
    title: "Storyteller & Photographer",
    location: "Field & Remote",
    commitment: "Project-Based",
    description:
      "Give a face to the struggle. Capture the joy of a village tasting clean water for the first time and share their hope with the world.",
  },
];

export const volunteerBenefits: string[] = [
  "Save lives and witness immediate, real-world change",
  "Work directly on the frontlines of humanitarian action",
  "Earn a certificate honoring your service and dedication",
  "Join 200+ active volunteers standing up for others",
  "Give whatever hours you can spare — every second counts",
  "Learn hands-on grassroots coordination and community relief",
];

export const volunteerPageMeta = {
  title: "Join the Frontlines",
  subtitle:
    "Your hands can dig a well. Your voice can teach a child. Join 200+ volunteers standing up for families in need right now.",
  breadcrumb: "Volunteer With Us",
};

export const volunteerCommunityStats = {
  count: "200+",
  label: "Active Volunteers",
  description:
    "Join a dedicated team across India who refused to stand by, giving over 5,000 hours of direct, life-saving action to communities in need.",
};

export const volunteerFormOptions = {
  interests: [
    "Teaching & Education",
    "Healthcare & Medical Aid",
    "Community Outreach",
    "Media & Storytelling",
    "Fundraising & Drives",
    "Other",
  ],
  availability: [
    "A few hours per week",
    "Weekends only",
    "Full-time for a project",
    "Flexible / Remote",
  ],
};
