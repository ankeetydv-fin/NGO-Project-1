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
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-bg-off-white border border-border-light rounded-[var(--radius-lg)] p-6 md:p-8 shadow-soft">
                <h2 className="text-2xl font-bold font-heading mb-2 flex items-center gap-2">
                  <MessageSquare size={24} className="text-primary" />
                  Send a Message
                </h2>
                <p className="text-text-muted mb-6">
                  Fill out the form below and we will respond within 24 hours.
                </p>

                {submitted ? (
                  <div className="text-center py-16 space-y-4">
                    <CheckCircle size={48} className="text-accent-green mx-auto" />
                    <h3 className="text-xl font-bold font-heading">Message Sent!</h3>
                    <p className="text-text-muted">Thank you for reaching out. We will get back to you shortly.</p>
                  </div>
                ) : (
                  <form
                    className="space-y-4"
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                  >
                    <div className="grid md:grid-cols-2 gap-4">
                      <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 bg-surface" />
                      <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 bg-surface" />
                    </div>
                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 bg-surface" />
                    <select className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 text-text-muted bg-surface">
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
                      className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 resize-none bg-surface"
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
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
                    className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-5 shadow-soft flex items-start gap-4"
                  >
                    <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <Icon size={22} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading mb-1">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-text-muted text-sm">{line}</p>
                      ))}
                    </div>
                  </div>
                );
              })}

              {/* Mini map hint — full map below */}
              <a
                href="#location-map"
                className="flex items-center gap-3 text-sm font-semibold text-btn-blue hover:underline"
              >
                <MapPin size={16} /> View full map below
              </a>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Full-width Location Map ─── */}
      <section id="location-map" className="w-full">
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
            className="absolute inset-0"
          />
          {/* Overlay label */}
          <div className="absolute bottom-4 left-4 z-10">
            <div className="bg-surface/95 backdrop-blur-sm rounded-[var(--radius-md)] shadow-lg px-5 py-3 border border-border-light">
              <p className="font-bold font-heading text-sm text-text-dark flex items-center gap-2">
                <MapPin size={16} className="text-primary" />
                Shiv Prabha Foundation
              </p>
              <p className="text-text-muted text-xs mt-0.5">
                42, Lodhi Road, Institutional Area, New Delhi 110003
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
