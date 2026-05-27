/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOMEPAGE CONTENT
 *  Edit this file to update hero, trust bar,
 *  mission, donation CTA, and quick stats.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { HeroContent, TrustPartner, DonationTier } from "@/types/content";

export const heroContent: HeroContent = {
  badge: "Shiv Prabha Foundation • Direct Grassroots Action",
  slides: [
    {
      id: "slide-1",
      subtitle: "Empowering Futures",
      title: "Education is a Right",
      description: "We empower children in underprivileged clusters through complete writing aid packages and direct support, ensuring every youth has a sincere opportunity to learn and grow.",
      image: "/images/hero/education.png",
      ctaText: "Support Education",
      ctaLink: "/donate?cause=education"
    },
    {
      id: "slide-2",
      subtitle: "Compassion in Action",
      title: "Essential Healthcare",
      description: "Delivering first-aid awareness and direct hygiene kit drives to remote blocks. Your support funds local wellness workshops and basic medical guidance panels.",
      image: "/images/hero/healthcare.png",
      ctaText: "Fund Healthcare",
      ctaLink: "/donate?cause=healthcare"
    },
    {
      id: "slide-3",
      subtitle: "Sports Excellence",
      title: "Nurturing Athletic Talents",
      description: "Sponsoring training stipends, active sportswear, and athletic kits for passionate, underprivileged local young talents to dream big on and off the field.",
      image: "/images/hero/water.png",
      ctaText: "Support Sports",
      ctaLink: "/donate?cause=sports"
    }
  ],
  stats: [
    { value: "2025", label: "Year Established" },
    { value: "3", label: "Focus Pillars" },
    { value: "100%", label: "Direct-to-Cause" },
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
  label: "Who We Are",
  headline: "Empowering Communities,",
  highlightedText: "Transforming Futures",
  description:
    "Founded on February 13, 2025, we are an India-based nonprofit dedicated to creating sustainable change in underserved communities. Our programs focus on primary education drives, healthcare awareness, and grassroots sports excellence — because every child deserves the chance to thrive.",
  mission: {
    title: "Our Mission",
    text: "To provide direct support and resources that uplift communities through primary learning aids, healthcare wellness workshops, and youth athletic gear sponsorships.",
  },
  vision: {
    title: "Our Vision",
    text: "A world where every child has the core supplies, support networks, and sporting opportunities to shape a self-sufficient and dignified future.",
  },
};

export const donationTiers: DonationTier[] = [
  { amount: 500, impact: "Provides textbook sets and writing supplies for 5 kids" },
  { amount: 1000, impact: "Sponsors essential wellness & nutrition kit for 2 families" },
  { amount: 2500, impact: "Sponsors complete athletic kit and shoes for a local sports talent" },
  { amount: 5000, impact: "Sponsors primary educational aid for a classroom block" },
  { amount: 10000, impact: "Funds an entire community hygiene drives event in a village block" },
];
