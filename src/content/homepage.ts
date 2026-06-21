/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOMEPAGE CONTENT
 *  Edit this file to update hero, trust bar,
 *  mission, donation CTA, and quick stats.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { HeroContent, TrustPartner, DonationTier } from "@/types/content";

export const heroContent: HeroContent = {
  badge: "Shiv Prabha Foundation • Real People. Real Lives. Immediate Action.",
  title: "Clean Water is Survival",
  subtitle: "Rani used to walk 5 km under a scorching sun for a single bucket of muddy water.",
  description: "No mother should have to watch her children drink water that will make them sick. We build wells directly in forgotten village blocks, bringing clean water and safety right to their doorstep.",
  image: "/images/hero/education.png",
  ctaText: "Build a Well Now",
  ctaLink: "/campaigns/clean-water-is-survival",
  stats: [
    { value: "2025", label: "Year We Began Rescuing Lives" },
    { value: "3", label: "Core Lifelines we Provide" },
    { value: "100%", label: "Direct-to-Child Grassroots Action" },
  ],
  recentDonation: { amount: "₹2,500", donor: "Anonymous", time: "Just now" },
};

export const trustPartners: TrustPartner[] = [
  { name: "NITI Aayog", iconName: "Building2" },
  { name: "UNICEF India", iconName: "Globe" },
  { name: "Tata Trusts", iconName: "Handshake" },
  { name: "Give India", iconName: "Shield" },
  { name: "CSR Partners", iconName: "Award" },
];

export const missionContent = {
  label: "Our Urgent Mission",
  headline: "No child should be left in the dark,",
  highlightedText: "waiting for help to arrive.",
  description:
    "We refuse to let another mother watch her child suffer from drinking toxic water. We cannot look away when bright young minds are forced into grueling child labor simply because they cannot afford a single notebook. We are on the ground in forgotten village blocks, racing against time to deliver clean water, life-saving medicine, and a glimmer of hope to children who have absolutely nothing.",
  mission: {
    title: "Our Mission",
    text: "To rescue children from hunger, ignorance, and neglect by delivering clean water wells, school supplies, and athletic training directly to families who need them today.",
  },
  vision: {
    title: "Our Vision",
    text: "A society where no family is left without drinking water, no child drops out of school to survive, and every rural talent has a chance to play and win.",
  },
};

export const donationTiers: DonationTier[] = [
  { amount: 500, impact: "Provides full sets of textbooks and pens for 5 children so they can stay in school" },
  { amount: 1000, impact: "Delivers an emergency nutrition and hygiene pack to keep 2 families safe from disease" },
  { amount: 2500, impact: "Sponsors a complete athletic kit and proper running shoes for a talented rural runner" },
  { amount: 5000, impact: "Funds all school desks, writing slates, and books for a village classroom block" },
  { amount: 10000, impact: "Builds a safe water filtration setup for 50 families to drink without fear" },
];
