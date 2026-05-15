"use client";

import Link from "next/link";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  ArrowRight,
} from "lucide-react";
import { aboutPageMeta, timeline, values, teamMembers } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { Heart, Eye, Users, Award };

export default function AboutPage() {
  return (
    <>
      <PageBanner
        title={aboutPageMeta.title}
        subtitle={aboutPageMeta.subtitle}
        breadcrumb={aboutPageMeta.breadcrumb}
      />

      {/* Mission & Vision */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading label="Our Purpose" title="Mission & Vision" />
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <Card>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-[var(--radius-sm)] bg-primary/10 flex items-center justify-center">
                    <Target size={28} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Our Mission</h3>
                  <p className="text-text-muted leading-relaxed">
                    To provide sustainable solutions that uplift communities through education,
                    clean water access, healthcare, and livelihood programs — creating lasting
                    change from the ground up. We believe that every person, regardless of
                    circumstance, deserves the opportunity to live with dignity and hope.
                  </p>
                </div>
              </Card>
            </div>
            <div>
              <Card>
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-[var(--radius-sm)] bg-secondary/10 flex items-center justify-center">
                    <Eye size={28} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading">Our Vision</h3>
                  <p className="text-text-muted leading-relaxed">
                    A world where every community has the resources, knowledge, and support to
                    build a self-sufficient and dignified future for all its members. We envision
                    thriving communities where children can learn, families can flourish, and
                    futures are full of possibility.
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      {/* Core Values */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <SectionHeading
            label="What Guides Us"
            title="Our Core Values"
            description="Every decision we make is rooted in these principles."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = ICON_MAP[v.iconName] || Heart;
              return (
                <div
                  key={v.title}
                  className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 text-center shadow-soft"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-heading text-lg mb-2">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Timeline */}
      <Section spacing="lg" background="white">
        <Container size="md">
          <SectionHeading
            label="Our Journey"
            title="15 Years of Impact"
            description="From a small community project in Rajasthan to a pan-India nonprofit."
          />
          <div className="relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border-light md:-translate-x-0.5" />

            <div className="space-y-8">
              {timeline.map((item, i) => (
                <div
                  key={item.year}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-surface -translate-x-1.5 mt-2 z-10" />
                  <div className={`ml-10 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                    <span className="text-sm font-bold text-accent-orange">{item.year}</span>
                    <h3 className="font-bold font-heading text-lg text-text-dark">{item.title}</h3>
                    <p className="text-text-muted text-sm mt-1">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Team */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <SectionHeading
            label="Our People"
            title="Leadership Team"
            description="Dedicated professionals driving our mission forward."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 text-center shadow-soft"
              >
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 text-primary font-bold font-heading text-xl">
                  {member.initials}
                </div>
                <h3 className="font-bold font-heading text-lg">{member.name}</h3>
                <p className="text-text-muted text-sm">{member.role}</p>
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
              Ready to Make a Difference?
            </h2>
            <p className="text-surface/80 text-lg max-w-xl mx-auto">
              Join thousands of supporters who are already changing lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="accent" size="lg" className="gap-2">
                  <Heart size={20} /> Donate Now
                </Button>
              </Link>
              <Link href="/volunteer" tabIndex={-1}>
                <Button variant="outline" size="lg" className="gap-2 border-surface/40 text-surface hover:bg-surface/10">
                  Become a Volunteer <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
