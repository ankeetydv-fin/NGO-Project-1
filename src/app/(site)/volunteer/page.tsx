"use client";

import { useState } from "react";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  HandHeart,
  MapPin,
  Clock,
  Users,
  GraduationCap,
  HeartPulse,
  Megaphone,
  Camera,
  CheckCircle,
  Send,
} from "lucide-react";
import {
  volunteerPageMeta,
  volunteerRoles,
  volunteerBenefits,
  volunteerCommunityStats,
  volunteerFormOptions,
} from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  HeartPulse,
  Megaphone,
  Camera,
};

export default function VolunteerPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <PageBanner
        title={volunteerPageMeta.title}
        subtitle={volunteerPageMeta.subtitle}
        breadcrumb={volunteerPageMeta.breadcrumb}
      />

      {/* Roles */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="Open Roles"
            title="Ways You Can Help"
            description="Choose a role that matches your skills and availability."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {volunteerRoles.map((role) => {
              const Icon = ICON_MAP[role.iconName] || Users;
              return (
                <div
                  key={role.title}
                  className="bg-surface border border-border-light/60 rounded-2xl p-5 sm:p-6 md:p-8 shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
                >
                  <div className="flex items-start gap-5">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary transition-colors">
                      <Icon size={24} className="text-primary group-hover:text-surface transition-colors" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-bold font-heading text-xl text-secondary">{role.title}</h3>
                      <div className="flex flex-wrap gap-4 text-text-muted text-xs font-semibold uppercase tracking-wider">
                        <span className="flex items-center gap-1.5"><MapPin size={14} className="text-primary" /> {role.location}</span>
                        <span className="flex items-center gap-1.5"><Clock size={14} className="text-primary" /> {role.commitment}</span>
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed">{role.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Benefits & Form */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Benefits */}
            <div className="space-y-8">
              <div>
                <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">
                  Why Volunteer
                </p>
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-secondary leading-tight">Benefits of Volunteering</h2>
              </div>
              <ul className="space-y-4">
                {volunteerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-4 text-text-muted font-medium">
                    <CheckCircle size={22} className="text-accent-green shrink-0 mt-0.5" />
                    <span className="text-base sm:text-lg leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-white border border-border-light/60 rounded-2xl p-5 sm:p-6 md:p-8 shadow-sm flex items-start gap-5 mt-8">
                <div className="w-12 h-12 rounded-full bg-secondary/5 flex items-center justify-center shrink-0">
                  <Users size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-extrabold font-heading text-xl sm:text-2xl text-secondary mb-1">
                    {volunteerCommunityStats.count} {volunteerCommunityStats.label}
                  </h3>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {volunteerCommunityStats.description}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-surface border border-border-light/60 rounded-2xl p-5 sm:p-8 md:p-10 shadow-soft">
                <h3 className="text-2xl sm:text-3xl font-extrabold font-heading mb-8 flex items-center gap-3 text-secondary">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <HandHeart size={20} />
                  </div>
                  Sign Up to Volunteer
                </h3>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle size={56} className="text-accent-green mx-auto" />
                    <h4 className="text-2xl font-bold font-heading text-secondary">Thank You!</h4>
                    <p className="text-text-muted">We will reach out to you within 48 hours.</p>
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
                      <input type="email" placeholder="Email *" required className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    </div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium" />
                    <select className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-muted">
                      {volunteerFormOptions.interests.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <select className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium text-text-muted">
                      {volunteerFormOptions.availability.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <textarea placeholder="Tell us about yourself and why you want to volunteer..." rows={4} className="w-full px-5 py-4 bg-neutral-50 rounded-xl border border-border-light/60 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-medium resize-none" />
                    <Button type="submit" variant="primary" size="lg" className="w-full gap-2 rounded-xl shadow-glow py-6 font-bold hover:-translate-y-1 transition-transform">
                      <Send size={20} /> Submit Application
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
