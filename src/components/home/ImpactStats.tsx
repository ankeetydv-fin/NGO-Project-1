"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Users, GraduationCap, Droplets, HeartPulse, MapPin, Globe } from "lucide-react";
import { impactStats } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Droplets,
  HeartPulse,
  MapPin,
  Globe,
};

export function ImpactStats() {
  return (
    <Section spacing="lg" background="white">
      <Container size="lg">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider mb-3">
            Our Impact
          </p>
          <h2 className="text-h2 text-text-dark mb-4">
            Real Numbers, Real Change
          </h2>
          <p className="text-body-large text-text-muted max-w-2xl mx-auto">
            Every number represents a life transformed, a community uplifted,
            and a future made brighter. Here is the impact we have created together.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {impactStats.map((stat) => {
            const Icon = ICON_MAP[stat.iconName] || Users;
            return (
              <div
                key={stat.label}
                className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-4`}>
                  <Icon size={28} className={stat.color} />
                </div>
                <p className={`text-3xl md:text-4xl font-bold font-heading ${stat.color}`}>
                  {stat.value}
                </p>
                <p className="text-text-muted text-sm mt-2 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
