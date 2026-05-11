"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Heart, CheckCircle } from "lucide-react";
import { donationCTAContent } from "@/content";

export function DonationCTA() {
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
          <motion.div
            className="text-surface space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.div>

          {/* Right - Donation Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-surface text-text-dark rounded-[var(--radius-lg)] p-8 md:p-10 shadow-2xl space-y-6">
              <h3 className="text-2xl font-bold font-heading text-center">
                Choose Your Impact
              </h3>

              {/* Amount buttons */}
              <div className="grid grid-cols-3 gap-3">
                {c.amounts.map((amount) => (
                  <button
                    key={amount}
                    className="py-3 px-4 rounded-[var(--radius-sm)] border-2 border-border-light text-text-dark font-bold font-heading hover:border-primary hover:bg-primary/5 transition-colors focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
                  >
                    {amount}
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

              {/* Frequency toggle */}
              <div className="flex rounded-[var(--radius-sm)] border border-border-light overflow-hidden">
                <button className="flex-1 py-3 text-center font-medium bg-primary text-surface transition-colors">
                  One-Time
                </button>
                <button className="flex-1 py-3 text-center font-medium text-text-muted hover:bg-bg-off-white transition-colors">
                  Monthly
                </button>
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
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
