"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  GraduationCap,
  Trophy,
  Users,
  Shield,
  Award,
} from "lucide-react";
import {
  aboutPageMeta,
  aboutStory,
  aboutVision,
  aboutMission,
  aboutPillars,
  values,
  teamMembers,
} from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Heart,
  Eye,
  Users,
  Award,
  Shield,
  GraduationCap,
  Trophy,
  Target,
};

const MISSION_STRATEGIES = [
  {
    title: "Youth Empowerment",
    iconName: "GraduationCap",
    strategy: "We design and deliver workshops covering computer literacy, financial planning, and contemporary life skills. By partnering with educators, we ensure that young boys and girls are equipped to navigate modern career landscapes successfully.",
    focus: "Education & Skills Focus",
    philosophy: "GUIDING THE FUTURE",
    link: "/programs",
    linkText: "Explore Youth Programs",
  },
  {
    title: "Underprivileged Support",
    iconName: "Heart",
    strategy: "Our localized social support drives focus on distributing nutrition kits, clothing, hygiene materials, and primary medical support. We actively identify resource deserts to deliver direct aid to vulnerable communities.",
    focus: "Community Welfare Focus",
    philosophy: "COMPASSION IN ACTION",
    link: "/volunteer",
    linkText: "Join a Welfare Drive",
  },
  {
    title: "Sports & Athletics",
    iconName: "Trophy",
    strategy: "We bridge the gap between passion and resources by supplying sports gear, building simple athletic fields, and providing financial stipends for talented boys and girls to attend state and national trials.",
    focus: "Grassroots Sports Focus",
    philosophy: "SUPPORTING DREAMS",
    link: "/programs",
    linkText: "View Athletics Programs",
  },
  {
    title: "Equal Opportunity",
    iconName: "Award",
    strategy: "No child should be forced to abandon their dreams due to financial constraints. We run scholarship matches, assign professional mentors, and establish placement connections to help underprivileged candidates succeed.",
    focus: "Academic Sponsorship Focus",
    philosophy: "EQUAL ACCESSIBILITY",
    link: "/volunteer",
    linkText: "Sponsor a Student's Dream",
  },
  {
    title: "Community & Values",
    iconName: "Users",
    strategy: "We foster deep civic values, equality, and cooperative development by organizing local environmental cleanups, blood donation camps, and gender-equality seminars led by civic leaders.",
    focus: "Civic Leadership Focus",
    philosophy: "SOCIAL RESPONSIBILITY",
    link: "/about",
    linkText: "Our Community Philosophy",
  },
  {
    title: "Lasting Impact",
    iconName: "Shield",
    strategy: "We don't focus on quick-fix answers. Every single initiative is tracked with rigorous progress audits and maintained alongside municipal representatives to guarantee self-sustainability and long-term societal progress.",
    focus: "Sustainable Growth Focus",
    philosophy: "SERVICE INTEGRITY",
    link: "/contact",
    linkText: "Collaborate with Us",
  },
];

export default function AboutPage() {
  const [activeMissionIndex, setActiveMissionIndex] = useState(0);
  return (
    <>
      <PageBanner
        title={aboutPageMeta.title}
        breadcrumb={aboutPageMeta.breadcrumb}
        tagline={aboutPageMeta.tagline}
      />

      {/* ─── Our Story ─── */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text side */}
            <div className="space-y-6">
              <SectionHeading
                label="Who We Are"
                title="Our Story"
                align="left"
                className="mb-0"
              />
              {aboutStory.paragraphs.map((p, i) => (
                <p key={i} className="text-text-muted leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm font-semibold text-primary">
                  Founded {aboutStory.foundingDate}
                </span>
              </div>
            </div>

            {/* Image side */}
            <div className="space-y-4">
              <ImagePlaceholder
                src="/images/about/story.svg"
                alt="Shiv Prabha Foundation community event"
                aspect="4/3"
              />
              <ImagePlaceholder
                src="/images/about/founding.svg"
                alt="Founding day — 13th February 2025"
                aspect="16/9"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── Vision Section (Horizontal Banner with Overlay Content Card) ─── */}
      <section className="relative min-h-[450px] md:min-h-[550px] flex items-center justify-center overflow-hidden bg-neutral-950 py-16">
        {/* Large Horizontal Picture Background Banner - NULL for now, stylized with placeholder grid & overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-neutral-850 to-neutral-950 flex items-center justify-center opacity-70">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,151,43,0.18),transparent_75%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.75))]" />
          
          {/* Placeholder decorative artwork */}
          <div className="flex flex-col items-center gap-3 text-stone-500/20 pointer-events-none select-none">
            <svg className="w-20 h-20 stroke-[0.75]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
            </svg>
            <span className="text-xs uppercase tracking-[0.25em] font-medium">Vision Section Picture Banner</span>
          </div>
        </div>

        {/* Content Card Lying Over the Banner */}
        <Container size="md" className="relative z-10 px-4">
          <div className="bg-surface/95 backdrop-blur-md rounded-2xl border border-white/20 p-5 sm:p-8 md:p-12 shadow-2xl text-center max-w-2xl mx-auto hover:translate-y-[-4px] transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
              <Eye size={24} />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">
              Our Dream &amp; Destination
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-dark mb-6">
              Our Vision
            </h2>
            <p className="text-base md:text-lg text-text-dark/90 leading-relaxed font-sans font-light italic mb-8">
              &ldquo;{aboutVision.text}&rdquo;
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 pt-6 border-t border-border-light/60 text-xs font-semibold text-text-muted">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Inclusive Progress</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Youth Empowerment</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>Community Action</span>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── Mission Section (Minimalist, Professional, Highly Interactive Explorer) ─── */}
      <Section spacing="lg" background="default" className="relative overflow-hidden py-16 md:py-24 animate-fade-in">
        {/* Subtle grid details */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(23,23,23,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.01)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
        
        <Container size="lg" className="relative z-10">
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
            <span className="inline-block px-3 py-1 rounded-md bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-3">
              Strategic Path
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold font-heading text-text-dark tracking-tight">
              Our Mission Explorer
            </h2>
            <p className="text-sm md:text-base text-text-muted mt-3">
              Click or hover through our core strategic initiatives to see how we create sustainable change.
            </p>
          </div>

          {/* Desktop Master-Detail Layout (Visible on lg screens) */}
          <div className="hidden lg:grid lg:grid-cols-12 gap-8 items-stretch">
            {/* Left Nav Stack (5 columns) */}
            <div className="lg:col-span-5 space-y-3">
              {aboutMission.points.map((_, i) => {
                const meta = MISSION_STRATEGIES[i];
                const IconComponent = ICON_MAP[meta.iconName] || Target;
                const isActive = activeMissionIndex === i;

                return (
                  <button
                    key={i}
                    onClick={() => setActiveMissionIndex(i)}
                    onMouseEnter={() => setActiveMissionIndex(i)}
                    className={`w-full flex items-center gap-4 p-5 text-left rounded-[var(--radius-md)] border transition-all duration-300 group ${
                      isActive 
                        ? "bg-surface border-primary shadow-soft translate-x-1" 
                        : "bg-surface/50 border-border-light hover:bg-surface hover:border-primary/30"
                    }`}
                  >
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
                      isActive 
                        ? "bg-primary text-white border-primary" 
                        : "bg-primary/5 text-primary border-primary/10 group-hover:bg-primary/10"
                    }`}>
                      <IconComponent size={18} />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <span className={`text-[9px] uppercase tracking-[0.15em] block font-extrabold ${
                        isActive ? "text-primary" : "text-text-muted/60"
                      }`}>
                        {meta.philosophy}
                      </span>
                      <span className={`font-bold text-base transition-colors duration-200 block truncate ${
                        isActive ? "text-text-dark" : "text-text-muted group-hover:text-text-dark"
                      }`}>
                        {meta.title}
                      </span>
                    </div>

                    <ArrowRight 
                      size={16} 
                      className={`transition-all duration-300 ${
                        isActive 
                          ? "text-primary opacity-100 translate-x-0" 
                          : "text-text-muted/0 opacity-0 -translate-x-2 group-hover:text-primary group-hover:opacity-100 group-hover:translate-x-0"
                      }`} 
                    />
                  </button>
                );
              })}
            </div>

            {/* Right Strategic Detail Card (7 columns) */}
            <div className="lg:col-span-7">
              {(() => {
                // Guard: when mobile accordion closes all (activeMissionIndex = -1), default to first item
                const detailIdx = activeMissionIndex >= 0 ? activeMissionIndex : 0;
                return (
              <div className="bg-surface border border-border-light rounded-[var(--radius-lg)] p-5 sm:p-8 md:p-10 shadow-soft h-full flex flex-col justify-between min-h-[460px] relative overflow-hidden">
                {/* Visual accent subtle pattern */}
                <div className="absolute -right-16 -bottom-16 w-48 h-48 rounded-full bg-primary/5 blur-2xl pointer-events-none" />
                
                <div className="space-y-6">
                  {/* Top Bar with Philosophy Label & Icon */}
                  <div className="flex justify-between items-center pb-4 border-b border-border-light/60">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                        {(() => {
                          const IconComponent = ICON_MAP[MISSION_STRATEGIES[detailIdx]?.iconName] || Target;
                          return <IconComponent size={20} />;
                        })()}
                      </div>
                      <span className="font-heading font-extrabold text-lg text-text-dark">
                        {MISSION_STRATEGIES[detailIdx]?.title}
                      </span>
                    </div>
                    <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full select-none">
                      {MISSION_STRATEGIES[detailIdx]?.focus}
                    </span>
                  </div>

                  {/* Description & Objective details */}
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-1.5">
                        Our Objective
                      </h4>
                      <p className="text-lg text-text-dark leading-relaxed font-medium">
                        {aboutMission.points[detailIdx]}
                      </p>
                    </div>

                    <div>
                      <h4 className="text-xs font-bold text-text-muted uppercase tracking-widest mb-1.5">
                        Action Plan &amp; Strategy
                      </h4>
                      <p className="text-sm md:text-base text-text-muted leading-relaxed font-light">
                        {MISSION_STRATEGIES[detailIdx]?.strategy}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sincerity badge & Direct action CTA */}
                <div className="mt-8 pt-6 border-t border-border-light/60 flex flex-wrap gap-4 items-center justify-between">
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-neutral-50 border border-border-light/40 text-[11px] text-text-muted max-w-[340px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>Focus area: {MISSION_STRATEGIES[detailIdx]?.focus}</span>
                  </div>

                  <Link 
                    href={MISSION_STRATEGIES[detailIdx]?.link || "#"}
                    className="inline-flex items-center gap-1.5 text-xs md:text-sm font-extrabold text-primary hover:text-text-dark transition-colors duration-200"
                  >
                    <span>{MISSION_STRATEGIES[detailIdx]?.linkText}</span>
                    <ArrowRight size={14} className="transition-transform duration-200 hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
            })()}
            </div>
          </div>

          {/* Mobile Accordion (Visible on Mobile/Tablet, hidden on Desktop) */}
          <div className="lg:hidden space-y-4">
            {aboutMission.points.map((point, i) => {
              const meta = MISSION_STRATEGIES[i];
              const IconComponent = ICON_MAP[meta.iconName] || Target;
              const isOpen = activeMissionIndex === i;

              return (
                <div 
                  key={i} 
                  className={`border rounded-[var(--radius-md)] overflow-hidden transition-all duration-300 bg-surface ${
                    isOpen ? 'border-primary shadow-soft' : 'border-border-light'
                  }`}
                >
                  <button
                    onClick={() => setActiveMissionIndex(isOpen ? -1 : i)}
                    className="w-full flex items-center justify-between p-5 text-left font-heading"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center border transition-colors ${
                        isOpen ? 'bg-primary text-white border-primary' : 'bg-primary/5 text-primary border-primary/10'
                      }`}>
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <span className="text-[10px] text-text-muted font-semibold block uppercase">{meta.focus}</span>
                        <span className="font-bold text-text-dark text-sm md:text-base">{meta.title}</span>
                      </div>
                    </div>
                    <span className={`text-text-muted transition-transform duration-300 ${isOpen ? 'rotate-180 text-primary' : ''}`}>
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  {/* Expandable Panel */}
                  <div 
                    className={`transition-all duration-300 ease-in-out ${
                      isOpen ? 'max-h-[500px] border-t border-border-light/60 p-5' : 'max-h-0 overflow-hidden'
                    }`}
                  >
                    <div className="space-y-4 text-xs md:text-sm">
                      <div>
                        <h4 className="text-[10px] font-bold text-primary uppercase tracking-widest mb-1">
                          Our Objective
                        </h4>
                        <p className="text-text-dark leading-relaxed font-medium">{point}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-[10px] font-bold text-text-muted uppercase tracking-widest mb-1">
                          Action Plan &amp; Strategy
                        </h4>
                        <p className="text-text-muted leading-relaxed font-light">{meta.strategy}</p>
                      </div>

                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 border border-border-light/40 text-[11px] text-text-muted">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>Focus: {meta.focus}</span>
                      </div>

                      <div className="pt-2">
                        <Link 
                          href={meta.link}
                          className="inline-flex items-center gap-1.5 text-xs font-bold text-primary hover:text-primary-dark"
                        >
                          <span>{meta.linkText}</span>
                          <ArrowRight size={12} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Our Pillars ─── */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="What We Stand For"
            title="Our Core Pillars"
            description="Three areas that define our work and our commitment to society."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {aboutPillars.map((pillar) => {
              const Icon = ICON_MAP[pillar.iconName] || Heart;
              return (
                <div key={pillar.title} className="text-center space-y-4 group">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto transition-transform duration-300 group-hover:scale-110">
                    <Icon size={36} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold font-heading text-secondary">{pillar.title}</h3>
                  <p className="text-text-muted leading-relaxed max-w-sm mx-auto">{pillar.description}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Core Values ─── */}
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
                  className="bg-surface border border-border-light/60 rounded-[var(--radius-md)] p-5 sm:p-6 md:p-8 text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <Icon size={26} className="text-primary" />
                  </div>
                  <h3 className="font-bold font-heading text-lg mb-3 text-secondary">{v.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{v.text}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* ─── Team ─── */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="Our People"
            title="Leadership Team"
            description="Dedicated individuals driving our mission forward."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-surface border border-border-light/60 rounded-[var(--radius-md)] p-5 sm:p-6 md:p-8 text-center shadow-soft hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                {member.image ? (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden mx-auto mb-5 relative border-2 border-primary/20">
                    <Image src={member.image} alt={member.name} fill className="object-cover" />
                  </div>
                ) : (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5 text-primary font-bold font-heading text-2xl border-2 border-primary/20">
                    {member.initials}
                  </div>
                )}
                <h3 className="font-bold font-heading text-lg text-secondary mb-1">{member.name}</h3>
                <p className="text-text-muted text-sm font-semibold uppercase tracking-widest">{member.role}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── CTA ─── */}
      <Section spacing="md" background="primary">
        <Container size="md">
          <div className="text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-surface leading-tight">
              Join the Movement
            </h2>
            <p className="text-surface/80 text-lg max-w-xl mx-auto font-medium">
              Be part of a brighter tomorrow. Support Shiv Prabha Foundation and
              help us create lasting change for those who need it most.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="secondary" size="lg" className="gap-2 rounded-full px-8 shadow-glow hover:-translate-y-1 transition-transform font-bold text-surface">
                  <Heart size={20} /> Donate Now
                </Button>
              </Link>
              <Link href="/volunteer" tabIndex={-1}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 rounded-full px-8 border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all font-bold"
                >
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
