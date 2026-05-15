"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Heart, CheckCircle } from "lucide-react";
import { donationCTAContent } from "@/content";

export function DonationCTA() {
  const [donationType, setDonationType] = useState<'one-time' | 'monthly'>('one-time');
  const c = donationCTAContent;

  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary via-primary/95 to-secondary overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-accent-orange/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-surface/5 blur-3xl" />
      </div>

      <Container size="lg" className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-surface space-y-6">
            <p className="text-accent-orange font-semibold text-sm uppercase tracking-wider">
              {c.label}
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading leading-tight">
              {c.headline}
              <span className="text-accent-orange"> {c.highlightedText}</span>
            </h2>
            <p className="text-surface/85 text-lg leading-relaxed max-w-lg">
              {c.description}
            </p>

            <ul className="space-y-3 pt-2">
              {c.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-surface/90">
                  <CheckCircle size={20} className="text-accent-green shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Donation Card */}
          <div>
            <div className="bg-surface text-text-dark rounded-[var(--radius-lg)] p-8 md:p-10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold font-heading text-center">
                Choose Your Impact
              </h3>

              {/* Donation Type Toggle */}
              <div className="flex p-1 bg-bg-off-white/50 border border-border-light rounded-[var(--radius-sm)] mb-6">
                {['one-time', 'monthly'].map((type) => (
                  <button
                    key={type}
                    onClick={() => setDonationType(type as 'one-time' | 'monthly')}
                    className={`flex-1 py-2 px-4 rounded-[calc(var(--radius-sm)-4px)] text-sm font-bold capitalize transition-all ${
                      donationType === type
                        ? "bg-primary text-surface shadow-sm"
                        : "text-text-muted hover:text-primary"
                    }`}
                  >
                    {type === 'monthly' && <span className="mr-1 text-[10px] bg-accent-orange text-surface px-1.5 py-0.5 rounded-full uppercase">Save 12x</span>}
                    {type}
                  </button>
                ))}
              </div>

              {/* Amount buttons */}
              <div className="grid grid-cols-3 gap-3">
                {c.amounts.map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 rounded-[var(--radius-sm)] border-2 border-border-light text-text-dark font-bold font-heading hover:border-primary hover:bg-primary/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    {amount}
                    {donationType === 'monthly' && <span className="block text-[10px] text-text-muted font-normal mt-0.5">/ mo</span>}
                  </button>
                ))}
              </div>

              {/* Custom amount */}
              <div>
                <label htmlFor="custom-amount" className="text-sm text-text-muted block mb-2">
                  Or enter a custom amount
                </label>
                <input
                  id="custom-amount"
                  type="text"
                  placeholder="₹ Enter amount"
                  className="w-full px-4 py-3 rounded-[var(--radius-sm)] border-2 border-border-light focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 text-lg font-medium transition-colors"
                />
              </div>

              <Link href="/donate" tabIndex={-1} className="block">
                <Button variant="accent" size="lg" className="w-full gap-2 text-lg">
                  <Heart size={22} />
                  Donate Now
                </Button>
              </Link>

              <p className="text-xs text-text-muted text-center">
                {c.securityNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
