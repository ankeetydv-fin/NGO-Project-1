/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  IMPACT STATISTICS
 *  Edit this file to update impact numbers
 *  shown on the homepage and impact page.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ImpactStat } from "@/types/content";

export const impactStats: ImpactStat[] = [
  { iconName: "Users", value: "50,000+", label: "Lives Impacted", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "GraduationCap", value: "12,000+", label: "Children Educated", color: "text-secondary", bg: "bg-secondary/10" },
  { iconName: "Droplets", value: "200+", label: "Clean Water Wells", color: "text-accent-green", bg: "bg-accent-green/10" },
  { iconName: "HeartPulse", value: "35,000+", label: "Medical Checkups", color: "text-accent-orange", bg: "bg-accent-orange/10" },
];

/** Extended stats used on the /impact page */
export const impactStatsExtended: ImpactStat[] = [
  ...impactStats,
  { iconName: "MapPin", value: "120+", label: "Villages Reached", color: "text-primary", bg: "bg-primary/10" },
  { iconName: "Globe", value: "12", label: "States Covered", color: "text-secondary", bg: "bg-secondary/10" },
];

export const impactOutcomes = [
  {
    title: "Education",
    items: [
      "94% school attendance rate in our programs",
      "78% of scholarship recipients go to college",
      "45 learning centers operational",
      "3,200 active scholarships",
    ],
  },
  {
    title: "Healthcare",
    items: [
      "80% reduction in waterborne disease",
      "12 mobile clinics operational",
      "95% vaccination coverage in target areas",
      "500+ community health workers trained",
    ],
  },
  {
    title: "Livelihoods",
    items: [
      "85% of micro-loan recipients report income increase",
      "800+ small businesses started",
      "4,500+ families supported",
      "60% of beneficiaries are women",
    ],
  },
];
