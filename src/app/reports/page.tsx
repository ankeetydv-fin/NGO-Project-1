"use client";

import { motion } from "framer-motion";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import {
  FileText,
  Download,
  ShieldCheck,
  Award,
  BarChart3,
  Calendar,
} from "lucide-react";
import {
  reportsPageMeta,
  annualReports,
  financialReports,
  impactReports,
  certifications,
} from "@/content";

export default function ReportsPage() {
  return (
    <>
      <PageBanner
        title={reportsPageMeta.title}
        subtitle={reportsPageMeta.subtitle}
        breadcrumb={reportsPageMeta.breadcrumb}
      />

      {/* Annual Reports */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="Annual Reports"
            title="Year in Review"
            description="Comprehensive overviews of our programs, achievements, and financials."
          />
          <div className="grid md:grid-cols-2 gap-6">
            {annualReports.map((report, i) => (
              <motion.div
                key={report.title}
                className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 shadow-soft hover:shadow-lg transition-shadow group cursor-pointer flex items-start gap-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
              >
                <div className="w-14 h-14 rounded-[var(--radius-sm)] bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText size={28} className="text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold font-heading text-lg group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <div className="flex flex-wrap gap-3 mt-1 text-text-muted text-sm">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {report.year}</span>
                    {report.pages && <span>{report.pages}</span>}
                    {report.size && <span>{report.size}</span>}
                  </div>
                </div>
                <Download size={20} className="text-primary shrink-0 mt-1 group-hover:scale-110 transition-transform" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Financial & Impact Reports */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <SectionHeading label="Financial Transparency" title="Audited Financials" align="left" />
              <div className="space-y-4">
                {financialReports.map((report, i) => (
                  <motion.div
                    key={report.title}
                    className="bg-surface border border-border-light rounded-[var(--radius-sm)] p-4 flex items-center gap-3 hover:shadow-sm transition-shadow cursor-pointer group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <BarChart3 size={20} className="text-secondary shrink-0" />
                    <span className="font-medium flex-1 group-hover:text-primary transition-colors">{report.title}</span>
                    <Download size={16} className="text-text-muted" />
                  </motion.div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading label="Third-Party Verified" title="Impact Assessments" align="left" />
              <div className="space-y-4">
                {impactReports.map((report, i) => (
                  <motion.div
                    key={report.title}
                    className="bg-surface border border-border-light rounded-[var(--radius-sm)] p-4 flex items-center gap-3 hover:shadow-sm transition-shadow cursor-pointer group"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.08 }}
                  >
                    <ShieldCheck size={20} className="text-accent-green shrink-0" />
                    <span className="font-medium flex-1 group-hover:text-primary transition-colors">{report.title}</span>
                    <Download size={16} className="text-text-muted" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Certifications */}
      <Section spacing="lg" background="white">
        <Container size="md">
          <SectionHeading
            label="Trust & Credentials"
            title="Our Certifications"
            description="Verified by independent bodies and regulatory authorities."
          />
          <motion.div
            className="bg-bg-off-white border border-border-light rounded-[var(--radius-lg)] p-8 shadow-soft"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green px-4 py-2.5 rounded-full text-sm font-medium"
                >
                  <Award size={16} />
                  {cert}
                </span>
              ))}
            </div>
          </motion.div>
        </Container>
      </Section>
    </>
  );
}
