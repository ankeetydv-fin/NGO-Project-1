/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  IMPACT STATISTICS
 *  Edit this file to update impact numbers
 *  shown on the homepage and impact page.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ImpactStat } from "@/types/content";

export const impactStats: ImpactStat[] = [
  { iconName: "Calendar", value: "2025", label: "Foundation Established", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Target", value: "3", label: "Direct Focus Pillars", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Shield", value: "100%", label: "Direct Grassroots Funding", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Eye", value: "1", label: "Unified Strategic Vision", color: "text-primary", bg: "bg-primary/10" },
];

/** Extended stats used on the /impact page */
export const impactStatsExtended: ImpactStat[] = [
  ...impactStats,
];

export const impactOutcomes = [
  {
    title: "Education Focus",
    items: [
      "Supplying textbooks, learning materials, and basic stationery kits directly",
      "Designing workshops for digital awareness and basic computer literacy",
      "Structuring mentorship links to support promising underprivileged youth",
      "Developing personalized academic paths to prevent school dropouts",
    ],
  },
  {
    title: "Community Welfare",
    items: [
      "Distributing nutrition kits and basic healthcare support to remote areas",
      "Organizing basic safety, sanitation, and first-aid awareness guidelines",
      "Running clean water access awareness campaigns in primary clusters",
      "Engaging community volunteer doctors to deliver diagnostic checkups",
    ],
  },
  {
    title: "Grassroots Athletics",
    items: [
      "Sponsoring sports gear and athletic supplies to promising local children",
      "Creating simple sports camps and accessible athletic training clusters",
      "Supplying nutritional counseling and financial stipends for trials",
      "Building a community of active sportsmanship, discipline, and success",
    ],
  },
];
