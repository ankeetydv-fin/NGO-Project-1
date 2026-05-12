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
  tagline: "Transforming lives..One Step At A Time | संस्कार, शिक्षा और सेवा की ओर एक कदम",
  description:
    "We empower communities across India through education, healthcare, and sustainable development. Every contribution creates lasting impact.",
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
  { label: "Impact", href: "/impact" },
  { label: "Stories", href: "/stories" },
  { label: "Gallery", href: "/gallery" },
  { label: "Reports", href: "/reports" },
  { label: "Contact", href: "/contact" },
];

export const footerQuickLinks: NavLink[] = [
  { label: "About Us", href: "/about" },
  { label: "Our Programs", href: "/programs" },
  { label: "Impact & Stories", href: "/impact" },
  { label: "Become a Volunteer", href: "/volunteer" },
  { label: "Annual Reports", href: "/reports" },
];

export const footerLegalLinks: NavLink[] = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refunds" },
];

export const contactInfo: ContactInfoBlock[] = [
  {
    iconName: "MapPin",
    title: "Visit Us",
    lines: [siteConfig.address.line1, siteConfig.address.line2],
  },
  {
    iconName: "Phone",
    title: "Call Us",
    lines: siteConfig.phone,
  },
  {
    iconName: "Mail",
    title: "Email Us",
    lines: [siteConfig.email, "support@ngofund.org"],
  },
  {
    iconName: "Clock",
    title: "Working Hours",
    lines: siteConfig.workingHours,
  },
];
