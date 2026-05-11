"use client";

import Link from "next/link";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  Users,
  GraduationCap,
  Droplets,
  HeartPulse,
  MapPin,
  Globe,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Heart,
  Quote,
} from "lucide-react";
import { impactStatsExtended, impactOutcomes, impactStories } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Users,
  GraduationCap,
  Droplets,
  HeartPulse,
  MapPin,
  Globe,
};

export default function ImpactPage() {
  return (
    <>
      <PageBanner
        title="Our Impact"
        subtitle="Real numbers, real outcomes, real change. See the measurable difference your support creates."
        breadcrumb="Making a Difference"
      />

      {/* Impact Numbers */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="By the Numbers"
            title="Impact at a Glance"
            description="Every number represents a life transformed, a community uplifted, and a future made brighter."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {impactStatsExtended.map((stat, i) => {
              const Icon = ICON_MAP[stat.iconName] || Users;
              return (
                <div
                  key={stat.label}
                  className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 text-center shadow-soft"
                >
                  <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={26} className={stat.color} />
                  </div>
                  <p className={`text-3xl md:text-4xl font-bold font-heading ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <SectionHeading
            label="Measurable Results"
            title="Program Outcomes"
            description="Third-party verified results from our core programs."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {impactOutcomes.map((outcome, i) => (
              <div
                key={outcome.title}
                className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3 size={20} className="text-secondary" />
                  <h3 className="text-xl font-bold font-heading">{outcome.title}</h3>
                </div>
                <ul className="space-y-3">
                  {outcome.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                      <TrendingUp size={16} className="text-accent-green shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beneficiary Stories */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading label="Voices of Change" title="Stories from the Field" />
          <div className="grid md:grid-cols-2 gap-8">
            {impactStories.map((story, i) => (
              <div
                key={story.name}
                className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft"
              >
                <Quote size={28} className="text-accent-orange/40 mb-4" />
                <blockquote className="text-text-dark leading-relaxed italic text-lg mb-4">
                  &ldquo;{story.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                    {story.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{story.name}</p>
                    <p className="text-text-muted text-xs">{story.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="md" background="primary">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-surface">
              Be Part of Our Next Milestone
            </h2>
            <p className="text-surface/80 text-lg max-w-xl mx-auto">
              Help us reach 100,000 lives by 2027. Your support makes this possible.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="accent" size="lg" className="gap-2">
                  <Heart size={20} /> Donate Now
                </Button>
              </Link>
              <Link href="/reports" tabIndex={-1}>
                <Button variant="outline" size="lg" className="border-surface/40 text-surface hover:bg-surface/10 gap-2">
                  View Reports <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
