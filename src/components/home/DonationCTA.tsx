"use client";

import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Heart, CheckCircle } from "lucide-react";
import { donationCTAContent } from "@/content";

export function DonationCTA() {
  const c = donationCTAContent;

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-secondary via-secondary/95 to-secondary overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-surface/5 blur-3xl" />
      </div>

      <Container size="md" className="relative z-10">
        <div className="text-center text-surface space-y-6 max-w-2xl mx-auto">
          <p className="text-primary font-semibold text-sm uppercase tracking-wider">
            {c.label}
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
            {c.headline}
            <span className="text-primary"> {c.highlightedText}</span>
          </h2>
          <p className="text-surface/85 text-lg leading-relaxed">
            {c.description}
          </p>

          <ul className="space-y-3 pt-2 inline-block text-left">
            {c.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-3 text-surface/90">
                <CheckCircle size={20} className="text-accent-green shrink-0 mt-0.5" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <div className="pt-4">
            <Link href="/donate" tabIndex={-1}>
              <Button variant="primary" size="lg" className="gap-2 text-lg">
                <Heart size={22} />
                Donate Now
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
