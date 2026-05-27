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
            {annualReports.map((report) => (
              <div
                key={report.title}
                className="bg-surface border border-border-light/60 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 group cursor-pointer flex items-start gap-5"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <FileText size={24} className="text-primary group-hover:scale-110 transition-transform" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold font-heading text-lg text-secondary group-hover:text-primary transition-colors">
                    {report.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mt-2 text-text-muted text-xs font-semibold uppercase tracking-wider">
                    <span className="flex items-center gap-1.5"><Calendar size={14} className="text-primary" /> {report.year}</span>
                    {report.pages && <span>{report.pages}</span>}
                    {report.size && <span>{report.size}</span>}
                  </div>
                </div>
                <Download size={20} className="text-primary shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Financial & Impact Reports */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <SectionHeading label="Financial Transparency" title="Audited Financials" align="left" />
              <div className="space-y-4">
                {financialReports.map((report) => (
                  <div
                    key={report.title}
                    className="bg-surface border border-border-light/60 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <BarChart3 size={18} className="text-secondary" />
                    </div>
                    <span className="font-bold text-secondary flex-1 group-hover:text-primary transition-colors">{report.title}</span>
                    <Download size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <SectionHeading label="Third-Party Verified" title="Impact Assessments" align="left" />
              <div className="space-y-4">
                {impactReports.map((report) => (
                  <div
                    key={report.title}
                    className="bg-surface border border-border-light/60 rounded-xl p-5 flex items-center gap-4 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-accent-green/10 flex items-center justify-center shrink-0">
                      <ShieldCheck size={18} className="text-accent-green" />
                    </div>
                    <span className="font-bold text-secondary flex-1 group-hover:text-primary transition-colors">{report.title}</span>
                    <Download size={18} className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
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
          <div
            className="bg-surface border border-border-light/60 rounded-2xl p-10 shadow-soft"
          >
            <div className="flex flex-wrap justify-center gap-4">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex items-center gap-2 bg-accent-green/10 text-accent-green border border-accent-green/20 px-5 py-2.5 rounded-full text-sm font-bold uppercase tracking-wider"
                >
                  <Award size={18} />
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
