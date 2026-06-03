import Link from "next/link";
import Image from "next/image";
import { PageBanner } from "@/components/ui/PageBanner";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import {
  GraduationCap,
  HeartPulse,
  Droplets,
  Wheat,
  Home,
  Baby,
  ArrowRight,
  CheckCircle,
  Target,
} from "lucide-react";
import { getPrograms, type ProgramData } from "@/sanity/lib/queries";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  GraduationCap, HeartPulse, Droplets, Wheat, Home, Baby, Target,
};

const FALLBACK_PROGRAMS = [
  {
    id: "education",
    iconName: "GraduationCap",
    title: "Education for All",
    tagline: "Building futures through learning",
    description: "Our education programs provide quality schooling, scholarships, after-school tutoring, and digital literacy to underprivileged children in rural and urban areas. We operate 45 learning centers across 3 countries.",
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
    image: "/images/programs/education.svg",
    link: "/donate?cause=education",
  },
  {
    id: "healthcare",
    iconName: "HeartPulse",
    title: "Healthcare Access",
    tagline: "Healthy communities, stronger futures",
    description: "We run mobile health clinics, maternal care programs, vaccination drives, and mental health awareness campaigns. Our goal is to ensure no community is left without essential healthcare.",
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
    image: "/images/programs/healthcare.svg",
    link: "/donate?cause=healthcare",
  },
  {
    id: "water",
    iconName: "Droplets",
    title: "Clean Water Initiative",
    tagline: "Every drop counts",
    description: "We build bore wells, install filtration systems, and implement rainwater harvesting in drought-affected communities. Clean water reduces disease, frees up time for education, and transforms entire villages.",
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
    image: "/images/programs/water.svg",
    link: "/donate?cause=water",
  },
  {
    id: "livelihood",
    iconName: "Wheat",
    title: "Livelihood Support",
    tagline: "Self-reliance through skill",
    description: "Our livelihood programs empower families through vocational training, micro-finance, sustainable agriculture, and small business support — building self-reliance and long-term stability.",
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
    image: "/images/programs/livelihood.svg",
    link: "/donate?cause=livelihood",
  },
  {
    id: "shelter",
    iconName: "Home",
    title: "Shelter & Relief",
    tagline: "A safe place to call home",
    description: "During natural disasters and crises, we provide emergency shelter, food, and supplies. We also run long-term housing assistance for displaced families.",
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
    image: "/images/programs/shelter.svg",
    link: "/donate?cause=shelter",
  },
  {
    id: "childcare",
    iconName: "Baby",
    title: "Child Welfare",
    tagline: "Protecting childhood, nurturing potential",
    description: "We protect vulnerable children through nutrition programs, early childhood development centers, child protection services, and safe community spaces.",
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
    image: "/images/programs/childcare.svg",
    link: "/donate?cause=childcare",
  },
];

function mapProgram(p: ProgramData, fallback: typeof FALLBACK_PROGRAMS[number]) {
  return {
    id: p._id,
    iconName: p.iconName ?? fallback.iconName,
    title: p.title,
    tagline: p.tagline ?? fallback.tagline,
    description: p.description,
    stats: p.stats?.length ? p.stats : fallback.stats,
    highlights: p.highlights?.length ? p.highlights : fallback.highlights,
    color: p.color ?? fallback.color,
    bg: p.bg ?? fallback.bg,
    image: p.imageUrl ?? fallback.image,
    link: p.link ?? fallback.link,
  };
}

export default async function ProgramsPage() {
  const sanityData: ProgramData[] | undefined = await getPrograms();
  const hasSanityData = sanityData && sanityData.length > 0;

  const programs = hasSanityData
    ? sanityData.map((p, i) => mapProgram(p, FALLBACK_PROGRAMS[i % FALLBACK_PROGRAMS.length]))
    : FALLBACK_PROGRAMS;

  return (
    <>
      <PageBanner
        title="Our Programs"
        subtitle="Evidence-based programs designed to address the most pressing needs of underserved communities."
        breadcrumb="What We Do"
      />

      {programs.map((program, i) => {
        const Icon = ICON_MAP[program.iconName] || Target;
        const isEven = i % 2 === 0;
        return (
          <Section
            key={program.id}
            spacing="none"
            background={isEven ? "white" : "default"}
            id={program.id}
          >
            <div className={`flex flex-col lg:flex-row w-full ${isEven ? "" : "lg:flex-row-reverse"}`}>
              <div className="lg:w-1/2 relative min-h-[400px] bg-neutral-100">
                {program.image ? (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5">
                    <Icon size={64} className={`${program.color}/20`} />
                  </div>
                )}
                <div className="absolute inset-0 bg-secondary/10 mix-blend-multiply" />
              </div>

              <div className="lg:w-1/2 p-6 sm:p-10 md:p-16 lg:p-20 xl:p-24 flex flex-col justify-center">
                <div className="max-w-xl mx-auto lg:mx-0">
                  <div className={`w-14 h-14 rounded-2xl ${program.bg} flex items-center justify-center mb-6`}>
                    <Icon size={28} className={program.color} />
                  </div>

                  <p className={`text-xs font-bold uppercase tracking-widest ${program.color} mb-2`}>
                    {program.tagline}
                  </p>
                  <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-secondary mb-6 leading-tight">
                    {program.title}
                  </h2>
                  <p className="text-text-muted text-base sm:text-lg leading-relaxed font-light mb-8">
                    {program.description}
                  </p>

                  <ul className="space-y-3 mb-10">
                    {program.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-3 text-text-muted font-medium">
                        <CheckCircle size={20} className={`${program.color} shrink-0`} />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8 border-t border-border-light/60 mb-8">
                    {program.stats.map((stat) => (
                      <div key={stat.label}>
                        <p className={`text-xl sm:text-2xl md:text-3xl font-extrabold font-heading ${program.color} mb-1`}>
                          {stat.value}
                        </p>
                        <p className="text-text-muted text-[10px] font-bold uppercase tracking-wider">{stat.label}</p>
                      </div>
                    ))}
                  </div>

                  <Link href="/donate" tabIndex={-1}>
                    <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all font-bold">
                      Support This Program <ArrowRight size={18} />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </Section>
        );
      })}

      <Section spacing="md" background="primary">
        <Container size="md">
          <div className="text-center space-y-8">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold font-heading text-secondary leading-tight">
              Every Program Needs Your Support
            </h2>
            <p className="text-secondary/80 text-lg max-w-xl mx-auto font-medium">
              Your contribution directly funds these grassroots programs and changes real lives.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="secondary" size="lg" className="gap-2 rounded-full px-8 shadow-glow hover:-translate-y-1 transition-transform font-bold text-surface">
                  Donate Now
                </Button>
              </Link>
              <Link href="/volunteer" tabIndex={-1}>
                <Button variant="outline" size="lg" className="gap-2 rounded-full px-8 border-secondary/30 text-secondary hover:bg-secondary hover:text-primary transition-all font-bold">
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