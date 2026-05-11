"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import * as LucideIcons from "lucide-react";
import { trustPartners } from "@/content";

export function TrustBar() {
  return (
    <section className="py-8 md:py-12 bg-surface border-y border-border-light">
      <Container size="xl">
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-text-muted text-sm font-medium uppercase tracking-wider shrink-0">
            Trusted Partners
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {trustPartners.map((partner, i) => {
              // Dynamically get the icon component from LucideIcons
              const Icon = (LucideIcons as any)[partner.iconName] || LucideIcons.Building2;
              
              return (
                <motion.div
                  key={partner.name}
                  className="flex items-center gap-2 text-text-muted/60 hover:text-primary transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <Icon size={24} />
                  <span className="text-sm font-semibold tracking-wide">{partner.name}</span>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
