"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { FileText, Download, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { transparencyReports, certifications } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { FileText, Download, ShieldCheck };

export function TransparencySection() {
  return (
    <Section spacing="xl" background="default" className="border-b border-border-light/40">
      <Container size="xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-text-dark/10 pb-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
                Transparency & Trust
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold font-heading text-text-dark leading-tight">
              Open Books, Open Hearts
            </h2>
            <p className="text-lg text-text-muted mt-4 max-w-2xl font-light">
              We believe accountability is the foundation of trust. Explore our reports,
              certifications, and audited financials to see exactly where your money goes.
            </p>
          </div>
          <div className="mt-8 md:mt-0 pb-2 hidden md:block">
            <Link href="/reports" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-orange transition-colors">
              View All Reports <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12 mb-16">
          {transparencyReports.map((report) => {
            const Icon = ICON_MAP[report.iconName] || FileText;
            return (
              <div
                key={report.title}
                className="group flex flex-col items-start cursor-pointer"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full border border-text-dark/10 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-colors text-text-dark">
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary">
                    {report.year}
                  </span>
                </div>
                <h3 className="text-2xl font-bold font-heading text-text-dark mb-3 group-hover:text-primary transition-colors leading-snug">
                  {report.title}
                </h3>
                <p className="text-text-muted text-base leading-relaxed mb-6 font-light">
                  {report.description}
                </p>
                <span className="mt-auto inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-dark group-hover:text-primary transition-colors">
                  Download PDF <span className="w-6 h-[1px] bg-current transform origin-left transition-transform group-hover:scale-x-150" />
                </span>
              </div>
            );
          })}
        </div>

        {/* Certification badges - Editorial Style */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-8 border-y border-text-dark/10">
          <div className="flex items-center gap-4 shrink-0">
            <Award size={32} className="text-accent-orange" />
            <div>
              <h3 className="text-xl font-bold font-heading text-text-dark leading-none">
                Accreditations
              </h3>
              <p className="text-xs font-bold uppercase tracking-widest text-text-muted mt-1">
                Verified & Audited
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            {certifications.map((cert) => (
              <span
                key={cert}
                className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-text-dark/80"
              >
                <ShieldCheck size={18} className="text-accent-green" />
                {cert}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 block md:hidden text-center">
           <Link href="/reports" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-orange transition-colors">
              View All Reports <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
        </div>
      </Container>
    </Section>
  );
}
