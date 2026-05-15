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
                  className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 shadow-soft hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-secondary/10 flex items-center justify-center shrink-0">
                      <Icon size={24} className="text-secondary" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-bold font-heading text-lg">{role.title}</h3>
                      <div className="flex flex-wrap gap-3 text-text-muted text-sm">
                        <span className="flex items-center gap-1"><MapPin size={14} /> {role.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {role.commitment}</span>
                      </div>
                      <p className="text-text-muted text-sm">{role.description}</p>
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
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div className="space-y-6">
              <div>
                <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-2">
                  Why Volunteer
                </p>
                <h2 className="text-h2">Benefits of Volunteering</h2>
              </div>
              <ul className="space-y-3">
                {volunteerBenefits.map((b) => (
                  <li key={b} className="flex items-start gap-3 text-text-muted">
                    <CheckCircle size={20} className="text-accent-green shrink-0 mt-0.5" />
                    <span className="text-lg">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 shadow-soft">
                <div className="flex items-center gap-3 mb-2">
                  <Users size={24} className="text-primary" />
                  <h3 className="font-bold font-heading text-lg">
                    {volunteerCommunityStats.count} {volunteerCommunityStats.label}
                  </h3>
                </div>
                <p className="text-text-muted text-sm">
                  {volunteerCommunityStats.description}
                </p>
              </div>
            </div>

            {/* Form */}
            <div>
              <div className="bg-surface border border-border-light rounded-[var(--radius-lg)] p-6 md:p-8 shadow-soft">
                <h3 className="text-2xl font-bold font-heading mb-6 flex items-center gap-2">
                  <HandHeart size={24} className="text-secondary" />
                  Sign Up to Volunteer
                </h3>

                {submitted ? (
                  <div className="text-center py-12 space-y-4">
                    <CheckCircle size={48} className="text-accent-green mx-auto" />
                    <h4 className="text-xl font-bold font-heading">Thank You!</h4>
                    <p className="text-text-muted">We will reach out to you within 48 hours.</p>
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
                      <input type="text" placeholder="Full Name *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20" />
                      <input type="email" placeholder="Email *" required className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20" />
                    </div>
                    <input type="tel" placeholder="Phone Number" className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20" />
                    <select className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 text-text-muted">
                      {volunteerFormOptions.interests.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <select className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 text-text-muted">
                      {volunteerFormOptions.availability.map((opt) => (
                        <option key={opt}>{opt}</option>
                      ))}
                    </select>
                    <textarea placeholder="Tell us about yourself and why you want to volunteer..." rows={4} className="w-full px-4 py-3 rounded-[var(--radius-sm)] border border-border-light focus:border-btn-blue focus:outline-none focus:ring-2 focus:ring-btn-blue/20 resize-none" />
                    <Button type="submit" variant="secondary" size="lg" className="w-full gap-2">
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
