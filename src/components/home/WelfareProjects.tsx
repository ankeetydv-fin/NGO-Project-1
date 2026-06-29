"use client";

import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { programs } from "@/content";
import { ArrowRight } from "lucide-react";

export function WelfareProjects() {
  const donatePrograms = programs.slice(0, 2);
  const helpPrograms = programs.slice(2, 4);

  return (
    <Section spacing="md" background="default" className="border-b border-border-light/40">
      <Container size="xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Content */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4 justify-center lg:justify-start">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
                Core Initiatives
              </span>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-text-dark mb-10 text-center lg:text-left leading-tight tracking-tight">
              Our Welfare<br />Projects
            </h2>

            {/* Images row */}
            <div className="grid grid-cols-2 gap-4 sm:gap-6 mb-10">
              <div className="relative aspect-[4/3] bg-neutral-200 shadow-soft overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform">
                 <Image src="/images/programs/education.svg" alt="Education" fill className="object-cover" />
              </div>
              <div className="relative aspect-[4/3] bg-neutral-200 shadow-soft overflow-hidden rounded-2xl hover:scale-[1.02] transition-transform">
                 <Image src="/images/programs/healthcare.svg" alt="Healthcare" fill className="object-cover" />
              </div>
            </div>

            <p className="text-text-muted leading-relaxed mb-10 font-sans text-base sm:text-lg">
              We refuse to turn away when a family cries out for help. Our organization is deeply dedicated to uplifting those whom society has forgotten—whether it’s bringing clean water to drought-stricken villages or ensuring a child doesn't have to choose between working in fields and going to school. We understand that with the passage of time, the needs of our society change. Therefore, we keep our horizons open, adapting our approach to heal communities and make our nation shine brighter.
            </p>

            <div className="text-center lg:text-left">
              <Link href="/programs" className="group inline-flex items-center gap-3 bg-primary text-white font-bold px-8 py-3.5 rounded-sm hover:bg-primary/90 transition-all hover:scale-[1.02] uppercase tracking-wider text-sm shadow-md">
                View All Programs <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Right Column: Cards */}
          <div className="grid sm:grid-cols-2 gap-6 lg:gap-8 mt-10 lg:mt-16">
            
            {/* Donate Card */}
            <div className="bg-surface shadow-soft relative flex flex-col h-full rounded-2xl overflow-hidden border border-border-light/50">
              <div className="bg-neutral-50 px-6 py-4 border-b border-border-light/40">
                <h3 className="text-sm font-bold uppercase tracking-widest text-text-dark">
                  Fund The Change
                </h3>
              </div>
              <div className="pt-8 pb-8 px-6 flex flex-col h-full flex-1">
                <ul className="space-y-4 mb-10 flex-1">
                  {donatePrograms.map((program) => (
                    <li key={program._id} className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                      {program.title}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Rural Development
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Skill Training
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Medical Assistance
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/donate" className="group inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-primary font-bold py-2.5 px-6 rounded-sm hover:border-primary hover:bg-primary/5 transition-all text-xs uppercase tracking-wider w-full">
                    Donate Now <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Help Card */}
            <div className="bg-surface shadow-soft relative flex flex-col h-full rounded-2xl overflow-hidden border border-border-light/50">
              <div className="bg-neutral-50 px-6 py-4 border-b border-border-light/40">
                <h3 className="text-sm font-bold uppercase tracking-widest text-text-dark">
                  Get Involved
                </h3>
              </div>
              <div className="pt-8 pb-8 px-6 flex flex-col h-full flex-1">
                <ul className="space-y-4 mb-10 flex-1">
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Slum Children Education
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Senior Citizen / Old Age
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                  {helpPrograms.map((program) => (
                    <li key={program._id} className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                      {program.title}
                      <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    </li>
                  ))}
                  <li className="border-b border-border-light/40 pb-3 text-text-muted hover:text-primary transition-colors cursor-pointer font-sans text-sm md:text-base flex justify-between items-center group">
                    Women Empowerment
                    <ArrowRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </li>
                </ul>
                <div className="mt-auto">
                  <Link href="/volunteer" className="group inline-flex items-center justify-center gap-2 border-2 border-primary/20 text-primary font-bold py-2.5 px-6 rounded-sm hover:border-primary hover:bg-primary/5 transition-all text-xs uppercase tracking-wider w-full">
                    Volunteer <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
          
        </div>
      </Container>
    </Section>
  );
}
