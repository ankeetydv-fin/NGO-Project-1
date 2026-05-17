"use client";

import { Container } from "@/components/layout/Container";

interface PageBannerProps {
  title: string;
  subtitle?: string;
  breadcrumb?: string;
  tagline?: string;
}

export function PageBanner({ title, subtitle, breadcrumb, tagline }: PageBannerProps) {
  return (
    <section className="relative bg-secondary py-16 md:py-24 overflow-hidden">
      {/* Decorative */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 -right-20 w-72 h-72 rounded-full bg-accent-orange/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-56 h-56 rounded-full bg-surface/5 blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <div
          className="text-center text-surface space-y-4"
        >
          {breadcrumb && (
            <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider">
              {breadcrumb}
            </p>
          )}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight">
            {title}
          </h1>
          {tagline && (
            <p className="text-lg md:text-xl text-accent-orange font-semibold italic tracking-wide">
              {tagline}
            </p>
          )}
          {subtitle && (
            <p className="text-lg md:text-xl text-surface/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
