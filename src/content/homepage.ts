/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  HOMEPAGE CONTENT
 *  Edit this file to update hero, trust bar,
 *  mission, donation CTA, and quick stats.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { HeroContent, TrustPartner, DonationTier } from "@/types/content";

export const heroContent: HeroContent = {
  badge: "Supported by 1,000+ donors across India",
  slides: [
    {
      id: "slide-1",
      subtitle: "Empowering Futures",
      title: "Education is a Right",
      description: "We empower communities across India through quality education, ensuring every child has the opportunity to learn and thrive.",
      image: "/images/hero/education.png",
      ctaText: "Support Education",
      ctaLink: "/donate?cause=education"
    },
    {
      id: "slide-2",
      subtitle: "Healing Hands",
      title: "Accessible Healthcare",
      description: "Bringing vital medical care to rural communities. Your support funds health camps and essential treatments for those in need.",
      image: "/images/hero/healthcare.png",
      ctaText: "Fund Healthcare",
      ctaLink: "/donate?cause=healthcare"
    },
    {
      id: "slide-3",
      subtitle: "Life's Source",
      title: "Clean Water for All",
      description: "Building sustainable water solutions to provide safe, clean drinking water to remote villages across the nation.",
      image: "/images/hero/water.png",
      ctaText: "Provide Water",
      ctaLink: "/donate?cause=water"
    }
  ],
  stats: [
    { value: "5,000+", label: "Lives Impacted" },
    { value: "30+", label: "Villages Reached" },
    { value: "2", label: "Years of Service" },
  ],
  recentDonation: { amount: "₹5,000", donor: "Anonymous", time: "2 min ago" },
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
    "Founded in 2024, we are an India-based nonprofit dedicated to creating sustainable change in underserved communities. Our programs focus on education, healthcare, and clean water — because every community deserves the chance to thrive.",
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
    "A small act of kindness can create a ripple effect of change. Whether it's ₹500 or ₹50,000 — every rupee fuels education, healthcare, and hope for families across India.",
  benefits: [
    "100% of donations go directly to programs",
    "80G tax exemption certificate for all donations",
    "Real-time impact tracking and updates",
    "Choose your preferred donation amount",
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
