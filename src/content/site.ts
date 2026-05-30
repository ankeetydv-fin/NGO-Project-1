/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  SITE CONFIGURATION
 *  Edit this file to update org-wide info like
 *  name, address, phone, social links, etc.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { SiteConfig, NavLink, ContactInfoBlock } from "@/types/content";

export const siteConfig: SiteConfig = {
  name: "Shiv Prabha Foundation",
  tagline: "Helping children survive, learn, and play | संस्कार, शिक्षा और सेवा की ओर एक कदम",
  description:
    "We work directly on the ground in India's most remote blocks to rescue families from dirty water, keep children in school, and equip young talent to escape poverty.",
  url: "https://shivprabhafoundation.org",
  email: "hello@shivprabhafoundation.org",
  phone: ["+91 11 4567 8900", "+91 98765 43210"],
  address: {
    line1: "42, Lodhi Road, Institutional Area",
    line2: "New Delhi, Delhi 110003",
  },
  workingHours: [
    "Monday – Friday: 9:30 AM – 6:00 PM",
    "Saturday: 10:00 AM – 2:00 PM",
  ],
  social: {
    facebook: "https://facebook.com/ngofund",
    twitter: "https://twitter.com/ngofund",
    instagram: "https://instagram.com/ngofund",
    linkedin: "https://linkedin.com/company/ngofund",
    youtube: "https://youtube.com/@ngofund",
  },
  legal: {
    registrations: [
      "FCRA Registered Organization",
      "80G Tax Exemption Certificate",
      "12A Registration under IT Act",
      "Registered under Societies Registration Act",
    ],
  },
};

export const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Programs", href: "/programs" },
  { label: "Our Impact", href: "/impact" },
  { label: "Stories of Hope", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reports", href: "/reports" },
  { label: "Contact Us", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Our Work", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Stories of Hope", href: "/stories" },
  { label: "Join the Frontlines", href: "/volunteer" },
  { label: "Transparency & Reports", href: "/reports" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refunds" },
];

export const contactInfo: ContactInfoBlock[] = [
  {
    iconName: "MapPin",
    title: "Visit Our Office",
    lines: [siteConfig.address.line1, siteConfig.address.line2],
  },
  {
    iconName: "Phone",
    title: "Call Us Directly",
    lines: siteConfig.phone,
  },
  {
    iconName: "Mail",
    title: "Email Our Team",
    lines: [siteConfig.email, "support@ngofund.org"],
  },
  {
    iconName: "Clock",
    title: "Office Hours",
    lines: siteConfig.workingHours,
  },
];
