"use client";

import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Quote } from "lucide-react";
import { testimonials } from "@/content";

export function Testimonials() {
  return (
    <Section spacing="lg" background="white">
      <Container size="lg">
        <div
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            Stories of Impact
          </p>
          <h2 className="text-h2 text-text-dark mb-4">
            Voices from the Ground
          </h2>
          <p className="text-body-large text-text-muted max-w-2xl mx-auto">
            Real stories from real people whose lives have been transformed
            through the generosity of our donors and the hard work of our team.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft flex flex-col"
            >
              <Quote size={32} className="text-accent-orange/40 mb-4" />
              <blockquote className="text-text-dark leading-relaxed flex-1 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>
              <div className="mt-6 pt-4 border-t border-border-light">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold font-heading text-sm">
                    {testimonial.name.split(" ").map((n) => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-text-dark text-sm">{testimonial.name}</p>
                    <p className="text-text-muted text-xs">
                      {testimonial.role} • {testimonial.location}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
