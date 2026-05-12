import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Mail, Phone, MapPin } from "lucide-react";
import {
  siteConfig,
  footerQuickLinks,
  footerLegalLinks,
} from "@/content";

/* Inline SVG social icons since lucide-react no longer ships brand icons */
const FacebookIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
);
const TwitterIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
);
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

const socialIcons: Record<string, React.FC> = {
  facebook: FacebookIcon,
  twitter: TwitterIcon,
  instagram: InstagramIcon,
  linkedin: LinkedInIcon,
};

export function Footer() {
  return (
    <footer className="bg-primary text-surface pt-16 pb-8 border-t border-primary/20">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          {/* Brand & Mission */}
          <div className="flex flex-col space-y-12">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <Image
                  src="/Logo_Icon.png"
                  alt="Shiv Prabha Foundation Logo"
                  width={100}
                  height={100}
                  className="object-contain"
                />
                <div className="flex flex-col items-center">
                  <span className="text-3xl font-bold text-surface leading-tight tracking-tight">Shiv Prabha</span>
                  <span className="text-xl font-semibold text-surface/80 leading-none">Foundation</span>
                </div>
              </Link>
              <div className="space-y-2 text-center">
                <p className="text-lg font-medium text-surface/90 leading-tight">Transforming lives .. One Step At A Time</p>
                <p className="text-base text-surface/80 font-hindi leading-tight">संस्कार, शिक्षा और सेवा की ओर एक कदम</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {Object.entries(siteConfig.social).map(([key, url]) => {
                const IconComp = socialIcons[key];
                if (!IconComp || !url) return null;
                return (
                  <a
                    key={key}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-surface/10 flex items-center justify-center hover:bg-accent-orange transition-colors"
                    aria-label={key}
                  >
                    <IconComp />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/80 hover:text-surface hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Trust */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Transparency</h3>
            <ul className="space-y-3">
              {footerLegalLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-surface/80 hover:text-surface hover:underline underline-offset-4 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <span className="text-surface/80 block mt-4 text-sm border-t border-surface/20 pt-4">
                  {siteConfig.legal.registrations.slice(0, 2).join(" | ")}
                </span>
              </li>
              <li>
                <span className="text-surface/80 block text-sm">
                  {siteConfig.legal.registrations[2]}
                </span>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold font-heading mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-accent-orange shrink-0 mt-1" />
                <span className="text-surface/80">
                  {siteConfig.address.line1}<br />{siteConfig.address.line2}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-accent-orange shrink-0" />
                <span className="text-surface/80">{siteConfig.phone[0]}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-accent-orange shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-surface/80 hover:text-surface transition-colors">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 border-t border-surface/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-surface/60 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-surface/60 text-sm">
            Designed with compassion.
          </p>
        </div>
      </Container>
    </footer>
  );
}
