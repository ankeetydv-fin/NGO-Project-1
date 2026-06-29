"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { testimonials } from "@/content";

export function Testimonials() {
  if (!testimonials || testimonials.length === 0) return null;

  return (
    <Section spacing="xl" background="white" className="border-b border-border-light/40 relative overflow-hidden">
      {/* Decorative large quote mark in the background */}
      <div className="absolute -top-12 left-0 text-[150px] sm:text-[200px] md:text-[250px] font-heading font-extrabold text-neutral-50/80 leading-none select-none pointer-events-none z-0 overflow-hidden">
        {'\u201C'}
      </div>

      <Container size="md" className="relative z-10">
        <div className="flex items-center gap-2 mb-12 justify-center">
          <span className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
          <span className="text-sm font-bold uppercase tracking-[0.2em] text-text-dark/60">
            Voices from the ground
          </span>
        </div>

        <div className="space-y-24">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="flex flex-col items-start text-left">
               <blockquote className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-text-dark leading-snug mb-8 relative">
                <span className="text-primary absolute -left-6 md:-left-8 top-0">{'\u201C'}</span>
                {testimonial.quote}
                <span className="text-primary">{'\u201D'}</span>
              </blockquote>
              <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-lg">
                  {testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-bold uppercase tracking-widest text-text-dark text-sm">
                    {testimonial.name}
                  </span>
                  <span className="text-xs text-text-muted font-semibold uppercase tracking-wider">
                    {testimonial.role} • {testimonial.location}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
