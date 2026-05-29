/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  IMPACT STATISTICS
 *  Edit this file to update impact numbers
 *  shown on the homepage and impact page.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ImpactStat } from "@/types/content";

export const impactStats: ImpactStat[] = [
  { iconName: "Calendar", value: "2025", label: "First Families Saved", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Target", value: "3", label: "Vital Life-saving Programs", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Shield", value: "100%", label: "Direct-to-Family Funding", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Eye", value: "1", label: "Mission: Save Every Child", color: "text-primary", bg: "bg-primary/10" },
];

/** Extended stats used on the /impact page */
export const impactStatsExtended: ImpactStat[] = [
  ...impactStats,
];

export const impactOutcomes = [
  {
    title: "Keeping Kids in School",
    items: [
      "Placing textbook packs, writing slates, and schoolbags directly into children's hands",
      "Setting up community learning corners so children have a safe, quiet space to study",
      "Matching struggling students with mentors to guide them away from child labor",
      "Providing emergency school-fee stipends to keep poverty from cutting education short",
    ],
  },
  {
    title: "Clean Water & Survival Care",
    items: [
      "Distributing nutrition kits and hygiene packs to families in remote village blocks",
      "Training mothers in life-saving clean water storage and basic sanitation",
      "Drilling safe, clean water wells so women don't have to walk miles for muddy water",
      "Deploying volunteer doctors to diagnose and treat sick infants before it's too late",
    ],
  },
  {
    title: "Grassroots Sports & Opportunity",
    items: [
      "Equipping passionate, barefoot youth with proper running shoes and sports gear",
      "Building simple, safe playfields where children can run, practice, and learn discipline",
      "Providing healthy meals and training stipends to nurture raw athletic talents",
      "Creating direct pathways for talented village kids to join official district leagues",
    ],
  },
];
