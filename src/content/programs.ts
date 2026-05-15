/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  PROGRAMS
 *  Edit this file to add, remove, or update
 *  program details shown across the website.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { ProgramItem } from "@/types/content";

export const programs: ProgramItem[] = [
  {
    id: "education",
    iconName: "GraduationCap",
    title: "Education for All",
    tagline: "Building futures through learning",
    description:
      "Our education programs provide quality schooling, scholarships, after-school tutoring, and digital literacy to underprivileged children in rural and urban areas. We operate 5 learning centers across 3 states.",
    stats: [
      { label: "Children Enrolled", value: "1,200+" },
      { label: "Learning Centers", value: "5" },
      { label: "Scholarship Recipients", value: "200" },
    ],
    highlights: [
      "Free primary and secondary education",
      "After-school tutoring and mentorship",
      "Digital literacy and computer labs",
      "Teacher training programs",
      "School meal programs",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    link: "/programs#education",
  },
  {
    id: "healthcare",
    iconName: "HeartPulse",
    title: "Healthcare Access",
    tagline: "Healthy communities, stronger futures",
    description:
      "We run mobile health clinics, maternal care programs, vaccination drives, and mental health awareness campaigns. Our goal is to ensure no community is left without essential healthcare.",
    stats: [
      { label: "Medical Checkups", value: "3,000+" },
      { label: "Mobile Clinics", value: "2" },
      { label: "Health Workers Trained", value: "50+" },
    ],
    highlights: [
      "Mobile health clinics in remote areas",
      "Maternal and child health programs",
      "Vaccination and immunization drives",
      "Mental health awareness campaigns",
      "Training community health workers",
    ],
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
    link: "/programs#healthcare",
  },
  {
    id: "water",
    iconName: "Droplets",
    title: "Clean Water Initiative",
    tagline: "Every drop counts",
    description:
      "We build bore wells, install filtration systems, and implement rainwater harvesting in drought-affected communities. Clean water reduces disease, frees up time for education, and transforms entire villages.",
    stats: [
      { label: "Wells Built", value: "25+" },
      { label: "People Served", value: "3,000+" },
      { label: "Villages Reached", value: "15" },
    ],
    highlights: [
      "Bore well construction in water-scarce regions",
      "Community water filtration plants",
      "Rainwater harvesting systems",
      "Water quality testing and monitoring",
      "Hygiene and sanitation education",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    link: "/programs#water",
  },
  {
    id: "livelihood",
    iconName: "Wheat",
    title: "Livelihood Support",
    tagline: "Self-reliance through skill",
    description:
      "Our livelihood programs empower families through vocational training, micro-finance, sustainable agriculture, and small business support — building self-reliance and long-term stability.",
    stats: [
      { label: "Families Supported", value: "500+" },
      { label: "Micro-Loans Given", value: "150" },
      { label: "Businesses Started", value: "100+" },
    ],
    highlights: [
      "Vocational skill training",
      "Micro-finance and savings groups",
      "Sustainable agriculture training",
      "Small business mentorship",
      "Women's entrepreneurship programs",
    ],
    color: "text-accent-green",
    bg: "bg-accent-green/10",
    link: "/programs#livelihood",
  },
  {
    id: "shelter",
    iconName: "Home",
    title: "Shelter & Relief",
    tagline: "A safe place to call home",
    description:
      "During natural disasters and crises, we provide emergency shelter, food, and supplies. We also run long-term housing assistance for displaced families.",
    stats: [
      { label: "Families Sheltered", value: "200+" },
      { label: "Emergency Responses", value: "5" },
      { label: "Homes Rebuilt", value: "40" },
    ],
    highlights: [
      "Emergency disaster relief",
      "Transitional housing programs",
      "Home reconstruction assistance",
      "Food and supply distribution",
      "Disaster preparedness training",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
    link: "/programs#shelter",
  },
  {
    id: "childcare",
    iconName: "Baby",
    title: "Child Welfare",
    tagline: "Protecting childhood, nurturing potential",
    description:
      "We protect vulnerable children through nutrition programs, early childhood development centers, child protection services, and safe community spaces.",
    stats: [
      { label: "Children Supported", value: "800+" },
      { label: "Nutrition Centers", value: "3" },
      { label: "Child Protection Cases", value: "50+" },
    ],
    highlights: [
      "Nutrition and meal programs",
      "Early childhood development centers",
      "Child protection and advocacy",
      "Foster care support",
      "Safe community play spaces",
    ],
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
    link: "/programs#childcare",
  },
];

/** Subset shown on homepage (first 4) */
export const homepagePrograms = programs.slice(0, 4);
