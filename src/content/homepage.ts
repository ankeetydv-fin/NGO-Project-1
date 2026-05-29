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
  slides: [
    {
      id: "slide-1",
      subtitle: "Rani used to walk 5 km under a scorching sun for a single bucket of muddy water.",
      title: "Clean Water is Survival",
      description: "No mother should have to watch her children drink water that will make them sick. We build wells directly in forgotten village blocks, bringing clean water and safety right to their doorstep.",
      image: "/images/hero/education.png",
      ctaText: "Build a Well Now",
      ctaLink: "/donate?cause=water"
    },
    {
      id: "slide-2",
      subtitle: "A little girl reads under a flickering streetlamp because her home has no light.",
      title: "Keep a Child in School",
      description: "Without basic pens, notebooks, and support, children are forced out of classrooms and into manual labor. We get supplies directly to children so they can stay in school and write their own future.",
      image: "/images/hero/healthcare.png",
      ctaText: "Send School Books Now",
      ctaLink: "/donate?cause=education"
    },
    {
      id: "slide-3",
      subtitle: "He plays barefoot on rocky soil, dreaming of wearing real shoes.",
      title: "Nurture Raw Athletic Talent",
      description: "Underprivileged children with immense champion potential play in the dirt with broken gear. We give them real athletic kits, shoes, and direct coaching so they can run, compete, and escape poverty.",
      image: "/images/hero/water.png",
      ctaText: "Equip a Young Champion",
      ctaLink: "/donate?cause=sports"
    }
  ],
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
    "We don't wait for endless committee meetings or red tape. Founded on February 13, 2025, we are on the ground in India's most neglected village blocks. We deliver clean drinking water, protect families from deadly preventable sickness, and put learning books and sports gear directly into the hands of children who have nothing.",
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
