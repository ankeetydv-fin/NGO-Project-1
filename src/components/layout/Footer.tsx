"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin, Loader2 } from "lucide-react";
import {
  siteConfig,
  footerQuickLinks,
  footerLegalLinks,
} from "@/content";
import { submitNewsletterForm } from "@/app/actions/newsletter";

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
  const [newsletterName, setNewsletterName] = React.useState("");
  const [newsletterEmail, setNewsletterEmail] = React.useState("");
  const [subscribed, setSubscribed] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    if (!newsletterName || !newsletterEmail) return;
    setError(null);
    setLoading(true);
    const result = await submitNewsletterForm({
      name: newsletterName,
      email: newsletterEmail,
    });
    setLoading(false);
    if (result.error) {
      setError(result.error);
    } else {
      setSubscribed(true);
      setNewsletterName("");
      setNewsletterEmail("");
    }
  }

  return (
    <footer className="bg-secondary text-surface pt-10 sm:pt-12 md:pt-16 pb-6 sm:pb-8">
      <Container size="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Trust */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity mb-6">
              <Image
                src="/Logo_Icon.png"
                alt="Shiv Prabha Foundation Logo"
                width={64}
                height={64}
                className="object-contain w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16"              />
              <div className="flex flex-col items-start text-left">
                <span className="text-2xl font-bold text-surface leading-tight tracking-tight">Shiv Prabha</span>
                <span className="text-sm font-semibold text-surface/80 leading-none mt-0.5">Foundation</span>
              </div>
            </Link>
            <div className="space-y-1 mb-8 text-center md:text-left">
              <p className="text-sm text-surface/90 font-medium leading-relaxed">
                Transforming Lives… One Step at a Time
              </p>
              <p className="text-sm text-surface/80 leading-relaxed">
                संस्कार, शिक्षा और सेवा की ओर एक कदम
              </p>
            </div>
            <div className="flex items-center justify-center md:justify-start gap-4 opacity-70 grayscale">
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><span className="text-[9px] text-surface font-bold text-center leading-tight">GuideStar<br/>India</span></div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><span className="text-[9px] text-surface font-bold text-center leading-tight">Credibility<br/>Alliance</span></div>
              <div className="w-12 h-12 bg-white/10 rounded flex items-center justify-center"><span className="text-[9px] text-surface font-bold text-center leading-tight">ISO<br/>Cert</span></div>
            </div>
          </div>

          {/* Column 2: Discover & Engage */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-heading mb-6 text-surface">Quick Links</h3>
            <ul className="space-y-3 text-center md:text-left">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-surface/80 hover:text-surface hover:underline underline-offset-4 transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Governance & Compliance */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold font-heading mb-6 text-surface">Transparency</h3>
            <ul className="space-y-3 text-center md:text-left">
              {footerLegalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-surface/80 hover:text-surface hover:underline underline-offset-4 transition-colors text-sm font-medium">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#334155] w-full space-y-2 text-xs text-surface/70 font-medium text-center md:text-left">
              <p>FCRA Registered Organization</p>
              <p>80G Tax Exemption Certificate</p>
              <p>12A Registration under IT Act</p>
            </div>
          </div>

          {/* Column 4: Connect & Action */}
          <div className="flex flex-col items-center md:items-start w-full">
            <h3 className="text-lg font-bold font-heading mb-6 text-surface">Contact Us</h3>
            <ul className="space-y-4 mb-8 w-full text-center md:text-left">
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span className="text-surface/80 text-sm font-medium">
                  42, Lodhi Road, Institutional Area,<br />New Delhi, Delhi 110003
                </span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span className="text-surface/80 text-sm font-medium">+91 11 4567 8900</span>
              </li>
              <li className="flex flex-col md:flex-row items-center md:items-start gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <a href="mailto:hello@shivprabhafoundation.org" className="text-surface/80 hover:text-surface text-sm font-medium transition-colors">
                  hello@shivprabhafoundation.org
                </a>
              </li>
            </ul>
            
            <Link href="/donate" className="w-full block mb-6">
              <Button variant="primary" className="w-full font-bold text-sm tracking-widest py-4 rounded-xl shadow-glow">
                DONATE NOW
              </Button>
            </Link>

            <div className="flex items-center justify-center gap-3 w-full opacity-60 grayscale">
              <div className="bg-white px-2 py-1 rounded text-secondary text-[10px] font-bold">UPI</div>
              <div className="bg-white px-2 py-1 rounded text-secondary text-[10px] font-bold">RuPay</div>
              <div className="bg-white px-2 py-1 rounded text-secondary text-[10px] font-bold">VISA</div>
              <div className="bg-white px-2 py-1 rounded text-secondary text-[10px] font-bold">MC</div>
            </div>
          </div>

        </div>

        {/* Newsletter Horizontal Block */}
        <div className="mt-16 pt-10 border-t border-[#334155]">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-sm font-medium text-surface/90 text-center md:text-left mb-6">
              Subscribe to Our Newsletter
            </h3>
            {subscribed ? (
              <p className="text-accent-green text-sm text-center md:text-left font-medium">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row items-end gap-6 md:gap-8 w-full">
                <div className="flex-1 w-full">
                  <input
                    type="text"
                    placeholder="Name"
                    value={newsletterName}
                    onChange={(e) => setNewsletterName(e.target.value)}
                    required
                    className="w-full bg-white/10 border-b border-surface/30 pb-2 text-surface placeholder:text-surface/50 text-sm focus:outline-none focus:border-primary transition-colors rounded-none px-2"
                  />
                </div>
                <div className="flex-1 w-full">
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    required
                    className="w-full bg-white/10 border-b border-surface/30 pb-2 text-surface placeholder:text-surface/50 text-sm focus:outline-none focus:border-primary transition-colors rounded-none px-2"
                  />
                </div>
                <Button type="submit" variant="primary" disabled={loading} className="w-full md:w-auto px-10 py-3 shrink-0 font-bold tracking-widest text-xs rounded-lg">
                  {loading ? <Loader2 size={16} className="animate-spin" /> : "SUBSCRIBE"}
                </Button>
              </form>
            )}
            {error && (
              <p className="text-red-400 text-xs mt-2 text-center md:text-left">{error}</p>
            )}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="mt-16 pt-6 border-t border-[#334155] flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-surface/60 text-sm font-medium text-center md:text-left">
            © 2026 Shiv Prabha Foundation. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            {Object.entries(siteConfig.social).map(([key, url]) => {
              const IconComp = socialIcons[key];
              if (!IconComp || !url) return null;
              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-surface/10 flex items-center justify-center hover:bg-primary transition-colors text-surface hover:text-secondary"
                  aria-label={key}
                >
                  <IconComp />
                </a>
              );
            })}
          </div>
        </div>
      </Container>
    </footer>
  );
}
