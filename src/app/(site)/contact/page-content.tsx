"use client";

import { useState, useRef } from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  MessageSquare,
  Loader2,
} from "lucide-react";
import { contactInfo as staticContactInfo } from "@/content";
import { submitContactForm } from "@/app/actions/contact";
import type { LucideIcon } from "lucide-react";
import type { SiteSettingsData } from "@/sanity/lib/queries";

const ICON_MAP: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock };

function buildContactInfo(settings?: SiteSettingsData) {
  if (!settings) return staticContactInfo;
  return [
    {
      iconName: "MapPin" as const,
      title: "Visit Our Office",
      lines: [settings.address?.line1 ?? "", settings.address?.line2 ?? ""].filter(Boolean),
    },
    {
      iconName: "Phone" as const,
      title: "Call Us Directly",
      lines: settings.phone ?? [],
    },
    {
      iconName: "Mail" as const,
      title: "Email Our Team",
      lines: [settings.email].filter(Boolean),
    },
    {
      iconName: "Clock" as const,
      title: "Office Hours",
      lines: settings.workingHours ?? [],
    },
  ];
}

interface ContactPageContentProps {
  siteSettings?: SiteSettingsData;
}

export default function ContactPageContent({ siteSettings }: ContactPageContentProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const contactInfo = buildContactInfo(siteSettings);

  return (
    <>
      <PageBanner
        title="Contact Us"
        subtitle="Have questions, want to partner, or need support? We would love to hear from you."
        breadcrumb="Get in Touch"
      />

      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            <div className="lg:col-span-3">
              <div className="bg-surface border border-border-light/60 rounded-2xl p-5 sm:p-8 md:p-10 shadow-soft">
                <h2 className="text-2xl sm:text-3xl font-extrabold font-heading mb-3 flex items-center gap-3 text-secondary">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <MessageSquare size={20} />
                  </div>
                  Send a Message
                </h2>
                <p className="text-text-muted mb-8 leading-relaxed">
                  Fill out the form below and we will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <CheckCircle size={56} className="text-accent-green mx-auto" />
                    <h3 className="text-2xl font-bold font-heading text-secondary">Message Sent!</h3>
                    <p className="text-text-muted">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    className="space-y-5"
                    onSubmit={async (e) => {
                      e.preventDefault();
                      setError(null);
                      const form = e.currentTarget;
                      const formData = new FormData(form);
                      setLoading(true);
                      const result = await submitContactForm({
                        name: formData.get("name") as string,
                        email: formData.get("email") as string,
                        phone: formData.get("phone") as string,
                        subject: formData.get("subject") as string,
                        message: formData.get("message") as string,
                      });
                      setLoading(false);
                      if (result.error) {
                        setError(result.error);
                      } else {
                        setSubmitted(true);
                      }
                    }}
                  >
                    {error && (
                      <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm font-medium">
                        {error}
                      </div>
                    )}
                    <div className="grid md:grid-cols-2 gap-5">
                      <input name="name" type="text" placeholder="Full Name *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      <input name="email" type="email" placeholder="Email Address *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    </div>
                    <input name="phone" type="tel" placeholder="Phone Number (Optional)" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    <select name="subject" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-muted">
                      <option value="">Select a subject *</option>
                      <option>General Inquiry</option>
                      <option>Donations &amp; Payments</option>
                      <option>Volunteering</option>
                      <option>Partnership / Collaboration</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      name="message"
                      placeholder="Your message... *"
                      rows={5}
                      required
                      className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                    />
                    <Button type="submit" variant="primary" size="lg" disabled={loading} className="w-full gap-2 rounded-xl shadow-glow py-6 font-bold hover:-translate-y-1 transition-transform">
                      {loading ? <><Loader2 size={20} className="animate-spin" /> Sending...</> : <><Send size={20} /> Send Message</>}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-6">
              {contactInfo.map((info) => {
                const Icon = ICON_MAP[info.iconName] || Mail;
                return (
                  <div
                    key={info.title}
                    className="bg-surface border border-border-light/60 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex items-start gap-5 group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Icon size={22} className="text-primary group-hover:text-surface transition-colors" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading mb-1.5 text-secondary">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-text-muted text-sm leading-relaxed">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}

              <a
                href="#location-map"
                className="flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-primary hover:text-secondary transition-colors mt-8"
              >
                <MapPin size={16} /> View full map below
              </a>
            </div>
          </div>
        </Container>
      </Section>

      <section id="location-map" className="w-full border-t border-border-light/50">
        <div className="w-full h-[400px] md:h-[500px] relative bg-neutral-200">
          <iframe
            title="Shiv Prabha Foundation Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5!2d77.2273!3d28.5919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sLodhi+Road%2C+New+Delhi!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute inset-0 grayscale contrast-125 opacity-90"
          />
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 z-10">
            <div className="bg-surface/95 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 border border-white/20 max-w-sm">
              <p className="font-extrabold font-heading text-lg text-secondary flex items-center gap-2 mb-2">
                <MapPin size={20} className="text-primary" />
                {siteSettings?.name ?? "Shiv Prabha Foundation"}
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                {siteSettings?.address
                  ? `${siteSettings.address.line1}, ${siteSettings.address.line2}`
                  : "42, Lodhi Road, Institutional Area, New Delhi 110003"}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}