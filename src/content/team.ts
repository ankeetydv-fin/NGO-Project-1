/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  TEAM & ABOUT PAGE CONTENT
 *  Edit this file to update team members,
 *  timeline, values, and about page text.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { TeamMember, TimelineEvent, ValueItem } from "@/types/content";

export const teamMembers: TeamMember[] = [
  { name: "Anika Patel", role: "Founder & Executive Director", initials: "AP" },
  { name: "Vikram Mehta", role: "Director of Programs", initials: "VM" },
  { name: "Dr. Priya Nair", role: "Head of Healthcare", initials: "PN" },
  { name: "Rahul Verma", role: "Chief Financial Officer", initials: "RV" },
];

export const timeline: TimelineEvent[] = [
  { year: "2009", title: "Founded", text: "Started with a single community school in a village in Rajasthan." },
  { year: "2012", title: "First 1,000 Lives", text: "Expanded healthcare camps to 5 districts across Rajasthan and Madhya Pradesh." },
  { year: "2015", title: "Clean Water Launch", text: "Began the Clean Water Initiative across drought-hit villages in western India." },
  { year: "2018", title: "10,000 Milestone", text: "Reached 10,000 direct beneficiaries across 8 states." },
  { year: "2021", title: "Pan-India Expansion", text: "Expanded operations to 12 states including Bihar, UP, and Odisha." },
  { year: "2025", title: "50,000+ Lives", text: "Impacted 50,000+ lives with 200+ completed projects across India." },
];

export const values: ValueItem[] = [
  { iconName: "Heart", title: "Compassion", text: "We lead with empathy in everything we do." },
  { iconName: "Eye", title: "Transparency", text: "Open books, open reports, open communication." },
  { iconName: "Users", title: "Community", text: "Solutions are designed with communities, not for them." },
  { iconName: "Award", title: "Accountability", text: "Every rupee is tracked and reported." },
];

export const aboutPageMeta = {
  title: "About Us",
  subtitle: "We are a team of changemakers committed to creating sustainable impact in underserved communities across India.",
  breadcrumb: "Our Story",
};
