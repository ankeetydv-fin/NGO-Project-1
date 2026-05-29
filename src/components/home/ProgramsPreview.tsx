"use client";

import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { ArrowRight } from "lucide-react";

type Program = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
  tagline?: string;
  link?: string;
};

export function ProgramsPreview({ programs }: { programs: Program[] }) {
  if (!programs || programs.length === 0) return null;

  return (
    <Section spacing="xl" background="white" className="border-b border-border-light/40">
      <Container size="xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
              <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
                Focus Areas
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold font-heading text-text-dark leading-tight">
              Where we direct your impact.
            </h2>
          </div>
          <div className="mt-8 md:mt-0 pb-2">
            <Link href="/programs" className="group inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-primary hover:text-accent-orange transition-colors">
              Explore All Sectors <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Editorial Masonry / Staggered Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-12 gap-y-10 sm:gap-y-16">
          {programs.map((program, index) => {
            // Create a staggered effect by pushing even items down on desktop
            const isEven = index % 2 !== 0;
            return (
              <div 
                key={program._id} 
                className={`group flex flex-col ${isEven ? 'md:mt-24' : ''}`}
              >
                <Link href={program.link || "#"} className="flex flex-col h-full">
                  <div className={`relative w-full overflow-hidden bg-neutral-100 mb-6 ${isEven ? 'aspect-[4/5]' : 'aspect-[4/3]'}`}>
                    <Image
                      src={program.imageUrl || "/images/placeholder.svg"}
                      alt={program.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col flex-1 pr-8">
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">
                      {program.title}
                    </span>
                    <h3 className="text-2xl md:text-3xl font-bold font-heading text-text-dark mb-4 leading-snug group-hover:text-primary transition-colors">
                      {program.tagline || `Supporting ${program.title} Initiatives`}
                    </h3>
                    <p className="text-base text-text-muted mb-6 leading-relaxed line-clamp-3">
                      {program.description}
                    </p>
                    <div className="mt-auto flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-dark group-hover:text-primary transition-colors">
                      Read More <span className="w-6 h-[1px] bg-current transform origin-left transition-transform group-hover:scale-x-150" />
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
