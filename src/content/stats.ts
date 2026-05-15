/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  IMPACT STATISTICS
 *  Edit this file to update impact numbers
 *  shown on the homepage and impact page.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ImpactStat } from "@/types/content";

export const impactStats: ImpactStat[] = [
  { iconName: "Users", value: "5,000+", label: "Lives Impacted", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "GraduationCap", value: "1,200+", label: "Children Educated", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Droplets", value: "25+", label: "Water Wells Built", color: "text-accent-green", bg: "bg-accent-green/10" },
  { iconName: "HeartPulse", value: "3,000+", label: "Medical Checkups", color: "text-accent-orange", bg: "bg-accent-orange/10" },
];

/** Extended stats used on the /impact page */
export const impactStatsExtended: ImpactStat[] = [
  ...impactStats,
  { iconName: "MapPin", value: "30+", label: "Villages Reached", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Globe", value: "5", label: "States Covered", color: "text-primary", bg: "bg-primary/10" },
];

export const impactOutcomes = [
  {
    title: "Education",
    items: [
      "90% school attendance rate in our programs",
      "1,200+ children enrolled in learning centers",
      "5 learning centers operational",
      "200 active scholarships",
    ],
  },
  {
    title: "Healthcare",
    items: [
      "60% reduction in waterborne disease in target areas",
      "2 mobile clinics operational",
      "3,000+ medical checkups conducted",
      "50+ community health workers trained",
    ],
  },
  {
    title: "Livelihoods",
    items: [
      "80% of micro-loan recipients report income increase",
      "100+ small businesses started",
      "500+ families supported",
      "55% of beneficiaries are women",
    ],
  },
];
