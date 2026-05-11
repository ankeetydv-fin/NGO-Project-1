"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/layout/Container";
import { Heart, ArrowRight } from "lucide-react";
import { heroContent } from "@/content";

export function Hero() {
  const c = heroContent;

  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-secondary/20 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-surface/5 blur-2xl" />
      </div>

      <Container size="xl" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div
            className="text-surface space-y-8"
          >
            {/* Trust badge */}
            <div
              className="inline-flex items-center gap-2 bg-surface/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium border border-surface/20"
            >
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
              {c.badge}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-heading leading-tight">
              {c.headline}
              <span className="block text-accent-orange mt-2">{c.highlightedText}</span>
            </h1>

            <p className="text-lg md:text-xl text-surface/85 max-w-xl leading-relaxed">
              {c.description}
            </p>

            {/* CTA Buttons */}
            <div
              className="flex flex-wrap gap-4 pt-2"
            >
              <Link href={c.primaryCTA.href} tabIndex={-1}>
                <Button variant="accent" size="lg" className="gap-2 text-lg shadow-lg">
                  <Heart size={22} />
                  {c.primaryCTA.label}
                </Button>
              </Link>
              <Link href={c.secondaryCTA.href} tabIndex={-1}>
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 text-lg border-surface/40 text-surface hover:bg-surface/10"
                >
                  {c.secondaryCTA.label}
                  <ArrowRight size={20} />
                </Button>
              </Link>
            </div>

            {/* Quick stats row */}
            <div
              className="flex flex-wrap gap-8 pt-6 border-t border-surface/15"
            >
              {c.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold font-heading">{stat.value}</p>
                  <p className="text-surface/70 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div
            className="hidden lg:block relative"
          >
            <div className="relative w-full aspect-[4/5] rounded-[var(--radius-lg)] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent z-10" />
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/40 to-primary/60 flex items-center justify-center">
                <div className="text-center text-surface/80 space-y-4 p-8">
                  <Heart size={80} className="mx-auto text-accent-orange/80" />
                  <p className="text-xl font-heading font-semibold">Community Impact</p>
                  <p className="text-surface/60 text-sm">Replace with real photography</p>
                </div>
              </div>
            </div>
            {/* Floating donation card */}
            <div
              className="absolute -bottom-6 -left-6 bg-surface text-text-dark rounded-[var(--radius-md)] shadow-lg p-5 max-w-[220px]"
            >
              <p className="text-sm text-text-muted">Recent donation</p>
              <p className="text-2xl font-bold font-heading text-accent-green">{c.recentDonation.amount}</p>
              <p className="text-xs text-text-muted mt-1">
                by {c.recentDonation.donor} • {c.recentDonation.time}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
