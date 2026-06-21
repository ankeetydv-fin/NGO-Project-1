/* ──────────────────────────────────────────────
 * Shared content types for the NGO website.
 * NGO staff should ONLY edit files in /content.
 * These types ensure content stays structured.
 * ────────────────────────────────────────────── */


/* ─── Site-wide ─── */
export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  url: string;
  email: string;
  phone: string[];
  address: {
    line1: string;
    line2: string;
  };
  workingHours: string[];
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  legal: {
    registrations: string[];
    taxId?: string;
  };
}

/* ─── Navigation ─── */
export interface NavLink {
  label: string;
  href: string;
}

/* ─── Hero ─── */
export interface HeroContent {
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  ctaText: string;
  ctaLink: string;
  stats: { value: string; label: string }[];
  recentDonation: { amount: string; donor: string; time: string };
}

/* ─── Trust Bar ─── */
export interface TrustPartner {
  name: string;
  iconName: string; // lucide icon key
}

/* ─── Impact Stat ─── */
export interface ImpactStat {
  iconName: string;
  value: string;
  label: string;
  color: string;
  bg: string;
}

/* ─── Program ─── */
export interface ProgramItem {
  id: string;
  iconName: string;
  title: string;
  tagline: string;
  description: string;
  stats: { label: string; value: string }[];
  highlights: string[];
  color: string;
  bg: string;
  link: string;
}

/* ─── Testimonial ─── */
export interface TestimonialItem {
  quote: string;
  name: string;
  role: string;
  location: string;
}

/* ─── Campaign ─── */
export interface CampaignItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  coverImage: string;
  description: string;
  problem: string;
  solution: string;
  impact: string;
  location: string;
  beneficiaries: string;
  goalAmount: number;
  raisedAmount: number;
  stats: { label: string; value: string }[];
  testimonials: { quote: string; name: string; role: string }[];
}

/* ─── Story / Blog Post ─── */
export interface StoryItem {
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  categoryColor: string;
  readTime: string;
  slug?: string;
  image?: string;
}

/* ─── Report ─── */
export interface ReportItem {
  title: string;
  year: string;
  pages?: string;
  size?: string;
  type: "annual" | "financial" | "impact";
}

/* ─── Team Member ─── */
export interface TeamMember {
  name: string;
  role: string;
  initials: string;
  image?: string;
}

/* ─── Timeline Event ─── */
export interface TimelineEvent {
  year: string;
  title: string;
  text: string;
}

/* ─── Value / Principle ─── */
export interface ValueItem {
  iconName: string;
  title: string;
  text: string;
}

/* ─── Volunteer Role ─── */
export interface VolunteerRole {
  iconName: string;
  title: string;
  location: string;
  commitment: string;
  description: string;
}

/* ─── FAQ ─── */
export interface FAQItem {
  question: string;
  answer: string;
}

/* ─── Gallery Item ─── */
export interface GalleryItem {
  category: string;
  alt: string;
  image?: string;
}

/* ─── Donation Amount ─── */
export interface DonationTier {
  amount: number;
  impact: string;
}

/* ─── Contact Info ─── */
export interface ContactInfoBlock {
  iconName: string;
  title: string;
  lines: string[];
}

/* ─── Page Meta (SEO) ─── */
export interface PageMeta {
  title: string;
  description: string;
  breadcrumb?: string;
}
