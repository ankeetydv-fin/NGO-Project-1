"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
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
                      <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface" />
                      <input type="email" placeholder="Email Address *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface" />
                    </div>
                    <input type="tel" placeholder="Phone Number (Optional)" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 bg-surface" />
                    <select className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-text-muted bg-surface">
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
                      className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 resize-none bg-surface"
                    />
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2">
                      <Send size={20} /> Send Message
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
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

              <div className="w-full aspect-video rounded-[var(--radius-md)] bg-gradient-to-br from-primary/5 to-secondary/5 border border-border-light flex items-center justify-center">
                <div className="text-center text-text-muted/40 space-y-2">
                  <MapPin size={36} />
                  <p className="text-sm">Map Embed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </Container>
      </Section>
    </>
  );
}
