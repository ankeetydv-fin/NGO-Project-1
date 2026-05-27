"use client";

import { useState } from "react";
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
} from "lucide-react";
import { contactInfo } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { MapPin, Phone, Mail, Clock };

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

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
            {/* Form */}
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
                    className="space-y-5"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-5">
                      <input type="text" placeholder="Full Name *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                      <input type="email" placeholder="Email Address *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    </div>
                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    <select className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-muted">
                      <option>Subject</option>
                      <option>General Inquiry</option>
                      <option>Donations &amp; Payments</option>
                      <option>Volunteering</option>
                      <option>Partnership / Collaboration</option>
                      <option>Media / Press</option>
                      <option>Other</option>
                    </select>
                    <textarea
                      placeholder="Your message... *"
                      rows={5}
                      required
                      className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none"
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2 rounded-xl shadow-glow py-6 font-bold hover:-translate-y-1 transition-transform">
                      <Send size={20} /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
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

              {/* Mini map hint — full map below */}
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

      {/* ─── Full-width Location Map ─── */}
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
          {/* Overlay label */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 md:bottom-10 md:left-10 z-10">
            <div className="bg-surface/95 backdrop-blur-md rounded-xl shadow-xl p-4 sm:p-6 border border-white/20 max-w-sm">
              <p className="font-extrabold font-heading text-lg text-secondary flex items-center gap-2 mb-2">
                <MapPin size={20} className="text-primary" />
                Shiv Prabha Foundation
              </p>
              <p className="text-text-muted text-sm leading-relaxed">
                42, Lodhi Road, Institutional Area, New Delhi 110003
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
