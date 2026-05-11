"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  Droplets,
  HeartPulse,
  Wheat,
  Home,
  Baby,
  ArrowRight,
} from "lucide-react";
import { homepagePrograms } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Droplets,
  HeartPulse,
  Wheat,
  Home,
  Baby,
};

export function ProgramsPreview() {
  return (
    <Section spacing="lg" background="default">
      <Container size="lg">
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
            What We Do
          </p>
          <h2 className="text-h2 text-text-dark mb-4">
            Programs That Create Change
          </h2>
          <p className="text-body-large text-text-muted max-w-2xl mx-auto">
            We design and implement evidence-based programs that address the most
            pressing needs of underserved communities.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {homepagePrograms.map((program, i) => {
            const Icon = ICON_MAP[program.iconName] || GraduationCap;
            return (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card interactive className="h-full">
                  <div className="space-y-4">
                    <div className={`w-14 h-14 rounded-[var(--radius-sm)] ${program.bg} flex items-center justify-center`}>
                      <Icon size={28} className={program.color} />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-text-dark">
                      {program.title}
                    </h3>
                    <p className="text-text-muted leading-relaxed">
                      {program.description}
                    </p>
                    <Link
                      href={program.link}
                      className={`inline-flex items-center gap-1 ${program.color} font-semibold text-sm hover:underline underline-offset-4`}
                    >
                      Learn More <ArrowRight size={16} />
                    </Link>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
          <Link href="/programs" tabIndex={-1}>
            <Button variant="primary" className="gap-2">
              View All Programs <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
