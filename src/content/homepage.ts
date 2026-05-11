/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOMEPAGE CONTENT
 *  Edit this file to update hero, trust bar,
 *  mission, donation CTA, and quick stats.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { HeroContent, TrustPartner, DonationTier } from "@/types/content";

export const heroContent: HeroContent = {
  badge: "Trusted by 10,000+ donors across India",
  headline: "Together, We Can",
  highlightedText: "Transform India",
  description:
    "We empower communities across India through education, healthcare, and sustainable development. Every contribution creates lasting impact for those who need it most.",
  primaryCTA: { label: "Donate Now", href: "/donate" },
  secondaryCTA: { label: "Explore Programs", href: "/programs" },
  stats: [
    { value: "50K+", label: "Lives Impacted" },
    { value: "120+", label: "Villages Reached" },
    { value: "15+", label: "Years of Service" },
  ],
  recentDonation: { amount: "₹25,000", donor: "Anonymous", time: "2 min ago" },
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
    "Founded in 2009, we are an India-based nonprofit dedicated to creating sustainable change in underserved communities across the country. Our programs focus on education, healthcare, and economic empowerment — because every Indian deserves the chance to thrive.",
  mission: {
    title: "Our Mission",
    text: "To provide sustainable solutions that uplift communities through education, clean water access, healthcare, and livelihood programs — creating lasting change from the ground up.",
  },
  vision: {
    title: "Our Vision",
    text: "A world where every community has the resources, knowledge, and support to build a self-sufficient and dignified future for all its members.",
  },
};

export const donationCTAContent = {
  label: "Make a Difference",
  headline: "Your Generosity Can",
  highlightedText: "Save Lives",
  description:
    "A small act of kindness can create a ripple effect of change. Whether it's ₹500 or ₹5,00,000 — every rupee fuels education, healthcare, and hope for thousands of families across India.",
  benefits: [
    "100% of donations go directly to programs",
    "80G tax exemption certificate for all donations",
    "Real-time impact tracking and updates",
    "Choose one-time or recurring giving",
  ],
  amounts: ["₹500", "₹1,000", "₹2,500", "₹5,000", "₹10,000", "₹25,000"],
  securityNote:
    "Secure payment via Razorpay. All donations eligible for 80G tax exemption.",
};

export const donationTiers: DonationTier[] = [
  { amount: 500, impact: "Provides school supplies for 5 children for a month" },
  { amount: 1000, impact: "Funds a complete health checkup for 10 families" },
  { amount: 2500, impact: "Provides clean water access for a family for a year" },
  { amount: 5000, impact: "Sponsors a child's education for 3 months" },
  { amount: 10000, impact: "Funds a community health camp for a full day" },
  { amount: 25000, impact: "Builds a clean water handpump in a rural village" },
];
