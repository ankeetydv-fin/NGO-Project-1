"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { FileText, Download, ShieldCheck, Award, ArrowRight } from "lucide-react";
import { transparencyReports, certifications } from "@/content";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = { FileText, Download, ShieldCheck };

export function TransparencySection() {
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
            Transparency & Trust
          </p>
          <h2 className="text-h2 text-text-dark mb-4">
            Open Books, Open Hearts
          </h2>
          <p className="text-body-large text-text-muted max-w-2xl mx-auto">
            We believe accountability is the foundation of trust. Explore our reports,
            certifications, and audited financials to see exactly where your money goes.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {transparencyReports.map((report, i) => {
            const Icon = ICON_MAP[report.iconName] || FileText;
            return (
              <motion.div
                key={report.title}
                className="bg-surface border border-border-light rounded-[var(--radius-md)] p-6 md:p-8 shadow-soft hover:shadow-lg transition-shadow group cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-[var(--radius-sm)] bg-primary/10 flex items-center justify-center">
                    <Icon size={24} className="text-primary" />
                  </div>
                  <span className="text-xs font-semibold text-text-muted bg-bg-off-white px-3 py-1 rounded-full">
                    {report.year}
                  </span>
                </div>
                <h3 className="text-lg font-bold font-heading text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {report.title}
                </h3>
                <p className="text-text-muted text-sm leading-relaxed mb-4">
                  {report.description}
                </p>
                <span className="inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:underline underline-offset-4">
                  Download <Download size={14} />
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Certification badges */}
        <motion.div
          className="bg-surface border border-border-light rounded-[var(--radius-lg)] p-6 md:p-8 shadow-soft"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8">
            <div className="flex items-center gap-3 shrink-0">
              <Award size={28} className="text-accent-orange" />
              <h3 className="text-lg font-bold font-heading text-text-dark">
                Our Certifications
              </h3>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4 flex-1">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-medium"
                >
                  <ShieldCheck size={16} />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <Link href="/reports" tabIndex={-1}>
            <Button variant="outline" className="gap-2">
              View All Reports <ArrowRight size={18} />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </Section>
  );
}
