"use client";

import Link from "next/link";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  GraduationCap,
  HeartPulse,
  Droplets,
  Wheat,
  Home,
  Baby,
  ArrowRight,
  CheckCircle,
  Users,
  MapPin,
} from "lucide-react";

const PROGRAMS = [
  {
    id: "education",
    icon: GraduationCap,
    title: "Education for All",
    tagline: "Building futures through learning",
    description:
      "Our education programs provide quality schooling, scholarships, after-school tutoring, and digital literacy to underprivileged children in rural and urban areas. We operate 45 learning centers across 3 countries.",
    stats: [
      { label: "Children Enrolled", value: "12,000+" },
      { label: "Learning Centers", value: "45" },
      { label: "Scholarship Recipients", value: "3,200" },
    ],
    highlights: [
      "Free primary and secondary education",
      "After-school tutoring and mentorship",
      "Digital literacy and computer labs",
      "Teacher training programs",
      "School meal programs",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "healthcare",
    icon: HeartPulse,
    title: "Healthcare Access",
    tagline: "Healthy communities, stronger futures",
    description:
      "We run mobile health clinics, maternal care programs, vaccination drives, and mental health awareness campaigns. Our goal is to ensure no community is left without essential healthcare.",
    stats: [
      { label: "Medical Checkups", value: "35,000+" },
      { label: "Mobile Clinics", value: "12" },
      { label: "Health Workers Trained", value: "500+" },
    ],
    highlights: [
      "Mobile health clinics in remote areas",
      "Maternal and child health programs",
      "Vaccination and immunization drives",
      "Mental health awareness campaigns",
      "Training community health workers",
    ],
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
  {
    id: "water",
    icon: Droplets,
    title: "Clean Water Initiative",
    tagline: "Every drop counts",
    description:
      "We build bore wells, install filtration systems, and implement rainwater harvesting in drought-affected communities. Clean water reduces disease, frees up time for education, and transforms entire villages.",
    stats: [
      { label: "Wells Built", value: "200+" },
      { label: "People Served", value: "25,000+" },
      { label: "Villages Reached", value: "85" },
    ],
    highlights: [
      "Bore well construction in water-scarce regions",
      "Community water filtration plants",
      "Rainwater harvesting systems",
      "Water quality testing and monitoring",
      "Hygiene and sanitation education",
    ],
    color: "text-secondary",
    bg: "bg-secondary/10",
  },
  {
    id: "livelihood",
    icon: Wheat,
    title: "Livelihood Support",
    tagline: "Self-reliance through skill",
    description:
      "Our livelihood programs empower families through vocational training, micro-finance, sustainable agriculture, and small business support — building self-reliance and long-term stability.",
    stats: [
      { label: "Families Supported", value: "4,500+" },
      { label: "Micro-Loans Given", value: "2,100" },
      { label: "Businesses Started", value: "800+" },
    ],
    highlights: [
      "Vocational skill training",
      "Micro-finance and savings groups",
      "Sustainable agriculture training",
      "Small business mentorship",
      "Women's entrepreneurship programs",
    ],
    color: "text-accent-green",
    bg: "bg-accent-green/10",
  },
  {
    id: "shelter",
    icon: Home,
    title: "Shelter & Relief",
    tagline: "A safe place to call home",
    description:
      "During natural disasters and crises, we provide emergency shelter, food, and supplies. We also run long-term housing assistance for displaced families.",
    stats: [
      { label: "Families Sheltered", value: "1,800+" },
      { label: "Emergency Responses", value: "25" },
      { label: "Homes Rebuilt", value: "350" },
    ],
    highlights: [
      "Emergency disaster relief",
      "Transitional housing programs",
      "Home reconstruction assistance",
      "Food and supply distribution",
      "Disaster preparedness training",
    ],
    color: "text-primary",
    bg: "bg-primary/10",
  },
  {
    id: "childcare",
    icon: Baby,
    title: "Child Welfare",
    tagline: "Protecting childhood, nurturing potential",
    description:
      "We protect vulnerable children through nutrition programs, early childhood development centers, child protection services, and safe community spaces.",
    stats: [
      { label: "Children Supported", value: "8,000+" },
      { label: "Nutrition Centers", value: "30" },
      { label: "Child Protection Cases", value: "600+" },
    ],
    highlights: [
      "Nutrition and meal programs",
      "Early childhood development centers",
      "Child protection and advocacy",
      "Foster care support",
      "Safe community play spaces",
    ],
    color: "text-accent-orange",
    bg: "bg-accent-orange/10",
  },
];

export default function ProgramsPage() {
  return (
    <>
      <PageBanner
        title="Our Programs"
        subtitle="Evidence-based programs designed to address the most pressing needs of underserved communities."
        breadcrumb="What We Do"
      />

      {PROGRAMS.map((program, i) => {
        const Icon = program.icon;
        return (
          <Section
            key={program.id}
            spacing="lg"
            background={i % 2 === 0 ? "white" : "default"}
            id={program.id}
          >
            <Container size="lg">
              <div className={`grid lg:grid-cols-2 gap-12 items-start ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}>
                {/* Info */}
                <div className="space-y-6">
                  <div className={`w-16 h-16 rounded-[var(--radius-sm)] ${program.bg} flex items-center justify-center`}>
                    <Icon size={32} className={program.color} />
                  </div>
                  <div>
                    <p className={`text-sm font-semibold uppercase tracking-wider ${program.color} mb-1`}>
                      {program.tagline}
                    </p>
                    <h2 className="text-3xl md:text-4xl font-bold font-heading">{program.title}</h2>
                  </div>
                  <p className="text-text-muted text-lg leading-relaxed">{program.description}</p>

                  <ul className="space-y-2">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-text-muted">
                        <CheckCircle size={18} className={`${program.color} shrink-0 mt-0.5`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats */}
                <div className="space-y-6">
                  <div className="grid grid-cols-3 gap-4">
                    {program.stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="bg-bg-off-white border border-border-light rounded-[var(--radius-sm)] p-4 text-center"
                      >
                        <p className={`text-2xl md:text-3xl font-bold font-heading ${program.color}`}>
                          {stat.value}
                        </p>
                        <p className="text-text-muted text-xs mt-1">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  {/* Placeholder image area */}
                  <div className="w-full aspect-video rounded-[var(--radius-md)] bg-gradient-to-br from-primary/5 to-secondary/5 border border-border-light flex items-center justify-center">
                    <div className="text-center text-text-muted/40 space-y-2">
                      <Icon size={48} className={program.color + "/30"} />
                      <p className="text-sm">Program Photo</p>
                    </div>
                  </div>

                  <Link href="/donate" tabIndex={-1}>
                    <Button variant="accent" className="gap-2 w-full md:w-auto mt-2">
                      Support This Program <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </Container>
          </Section>
        );
      })}

      {/* Bottom CTA */}
      <Section spacing="md" background="primary">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading text-surface">
              Every Program Needs Your Support
            </h2>
            <p className="text-surface/80 text-lg max-w-xl mx-auto">
              Your contribution directly funds these programs and changes real lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="accent" size="lg">Donate Now</Button>
              </Link>
              <Link href="/volunteer" tabIndex={-1}>
                <Button variant="outline" size="lg" className="border-surface/40 text-surface hover:bg-surface/10">
                  Volunteer With Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
