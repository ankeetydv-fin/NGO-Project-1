"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { missionContent, impactStats } from "@/content";

export function EditorialMission() {
  const c = missionContent;

  return (
    <Section spacing="xl" background="secondary" className="border-b border-border-light/40 relative overflow-hidden">
      {/* Subtle background element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none" />
      
      <Container size="md" className="relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-12">
          
          {/* Label */}
          <div className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-text-dark/60">
              {c.label}
            </span>
          </div>

          {/* Massive Blockquote */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-[1.2] text-text-dark">
            "{c.headline} <span className="text-accent-orange italic">{c.highlightedText}</span>"
          </h2>

          <p className="text-lg md:text-xl text-text-muted font-sans leading-relaxed max-w-2xl mx-auto font-light">
            {c.description}
          </p>

          {/* Stats Grid - Clean, no borders, typography focused */}
          <div className="pt-12 grid grid-cols-3 gap-4 sm:gap-4 mt-8 border-t border-border-light/60">
            {impactStats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center justify-center">
                <span className={`text-4xl md:text-5xl font-heading font-bold mb-2 ${stat.color.replace('text-', 'text-').replace('-600', '')} text-primary`}>
                  {stat.value}
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.15em] text-text-dark/60 text-center max-w-[150px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </Section>
  );
}
