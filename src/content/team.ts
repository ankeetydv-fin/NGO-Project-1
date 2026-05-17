/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  TEAM & ABOUT PAGE CONTENT
 *  Edit this file to update team members,
 *  about page text, mission, vision, and values.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { TeamMember, ValueItem } from "@/types/content";

export const teamMembers: TeamMember[] = [
  { name: "Founder Name", role: "Founder & President", initials: "FN" },
  { name: "Team Member", role: "Director of Programs", initials: "TM" },
  { name: "Team Member", role: "Head of Operations", initials: "TM" },
  { name: "Team Member", role: "Community Outreach Lead", initials: "TM" },
];

export const aboutPageMeta = {
  title: "About Us",
  subtitle:
    "Building a stronger, empowered, and inclusive society — one step at a time.",
  breadcrumb: "Our Story",
  tagline: `\u201CTransforming Lives\u2026 One Step at a Time\u201D \u2014 \u0938\u0902\u0938\u094D\u0915\u093E\u0930, \u0936\u093F\u0915\u094D\u0937\u093E \u0914\u0930 \u0938\u0947\u0935\u093E \u0915\u0940 \u0913\u0930 \u090F\u0915 \u0915\u0926\u092E`,
};

export const aboutStory = {
  paragraphs: [
    "Welcome to Shiv Prabha Foundation — a foundation established with the vision of building a stronger, empowered, and inclusive society. Founded on 13th February 2025, our organization is committed to the holistic development of communities, with a special focus on youth and the younger generation of boys and girls who represent the future of our nation.",
    "At Shiv Prabha Foundation, we believe that real change begins with education, awareness, opportunity, and empowerment. Our mission is to guide, inspire, and support young minds so they can grow into confident, responsible, and successful individuals who contribute positively to society.",
    "We are also deeply committed to uplifting the weaker and underprivileged sections of society through social initiatives, awareness campaigns, educational support, community welfare programs, and humanitarian activities aimed at creating meaningful and lasting change.",
    "Though we are new in this journey, our dedication, passion, and commitment toward social service remain strong and unwavering. Every day is a learning experience for us, and with each step, we continue to grow and strengthen our efforts to serve society better.",
    "Shiv Prabha Foundation is not just an organization — it is a movement toward hope, empowerment, equal opportunity, and a brighter tomorrow for all.",
  ],
  foundingDate: "13th February 2025",
};

export const aboutVision = {
  text: "To build an empowered, educated, inclusive, and progressive society where every individual — especially youth, sportspersons, and the underprivileged — gets equal opportunities to grow, succeed, and achieve their dreams.",
};

export const aboutMission = {
  points: [
    "To empower youth through education, guidance, skill development, and social awareness.",
    "To support weaker and underprivileged sections of society through meaningful social initiatives.",
    "To promote sports and provide opportunities to talented boys and girls who aspire to excel in athletics and other sporting fields.",
    "To ensure that no dream is left behind because of a lack of opportunity or support.",
    "To encourage social responsibility, equality, values, and community development.",
    "To create positive and lasting change through dedicated service and collective efforts.",
  ],
};

export const aboutPillars: {
  iconName: string;
  title: string;
  description: string;
}[] = [
  {
    iconName: "GraduationCap",
    title: "Education & Empowerment",
    description:
      "Guiding and inspiring young minds through education, awareness campaigns, and skill development so they grow into confident, responsible individuals.",
  },
  {
    iconName: "Trophy",
    title: "Sports & Athletics",
    description:
      "Every boy and girl deserves a fair opportunity to pursue their dreams in sports. We encourage and support young sportspersons by creating opportunities and helping them reach their dream ground.",
  },
  {
    iconName: "HandHeart",
    title: "Community Welfare",
    description:
      "Uplifting the weaker and underprivileged sections through social initiatives, educational support, and humanitarian activities that create meaningful and lasting change.",
  },
];

export const values: ValueItem[] = [
  {
    iconName: "Heart",
    title: "Compassion",
    text: "We lead with empathy, serving those who need it most with genuine care and respect.",
  },
  {
    iconName: "Shield",
    title: "Integrity",
    text: "Transparency and honesty guide every decision we make and every action we take.",
  },
  {
    iconName: "Users",
    title: "Inclusivity",
    text: "We believe in equal opportunity for every individual regardless of background or circumstance.",
  },
  {
    iconName: "Award",
    title: "Dedication",
    text: "Our commitment toward social service remains strong and unwavering, every single day.",
  },
];
