"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Target, Eye, ArrowRight } from "lucide-react";
import { missionContent } from "@/content";

export function MissionSummary() {
  const c = missionContent;

  return (
    <Section spacing="lg" background="default">
      <Container size="lg">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider">
              {c.label}
            </p>
            <h2 className="text-h2 text-text-dark">
              {c.headline}{" "}
              <span className="text-primary">{c.highlightedText}</span>
            </h2>
            <p className="text-body-large text-text-muted max-w-lg">
              {c.description}
            </p>
            <Link href="/about" tabIndex={-1}>
              <Button variant="outline" className="gap-2 mt-2">
                Learn More About Us
                <ArrowRight size={18} />
              </Button>
            </Link>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Mission Card */}
            <div className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-primary/10 flex items-center justify-center">
                <Target size={24} className="text-primary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-text-dark">{c.mission.title}</h3>
              <p className="text-text-muted leading-relaxed">{c.mission.text}</p>
            </div>

            {/* Vision Card */}
            <div className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft space-y-4">
              <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-secondary/10 flex items-center justify-center">
                <Eye size={24} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold font-heading text-text-dark">{c.vision.title}</h3>
              <p className="text-text-muted leading-relaxed">{c.vision.text}</p>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
