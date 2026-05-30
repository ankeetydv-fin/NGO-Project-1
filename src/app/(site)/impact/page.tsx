import Link from "next/link";
import { PageBanner } from "@/components/ui/PageBanner";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Section } from "@/components/layout/Section";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import {
  Calendar,
  Target,
  Shield,
  Eye,
  TrendingUp,
  BarChart3,
  ArrowRight,
  Heart,
  Quote,
  BookOpen,
  HeartPulse,
  Trophy,
  Gift,
  Award,
} from "lucide-react";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { impactStatsExtended as staticImpactStatsExtended, impactOutcomes as staticImpactOutcomes, impactStories as staticImpactStories } from "@/content";
import { getImpactPage, type ImpactPageData } from "@/sanity/lib/queries";
import type { LucideIcon } from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  Calendar,
  Target,
  Shield,
  Eye,
  BookOpen,
  HeartPulse,
  Trophy,
  Gift,
  Award,
};

/* ──────────────────────────────────────────────
 *  CauseCard — A premium, asymmetrical storytelling
 *  card presenting actual causes and actions.
 * ────────────────────────────────────────────── */
function CauseCard({
  src,
  alt,
  category,
  title,
  description,
  badge,
  iconName,
  aspect = "4/3",
  className = "",
}: {
  src?: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
  aspect?: string;
  className?: string;
}) {
  const Icon = ICON_MAP[iconName] || Target;
  const showImages = false; // Set to true once actual assets are available in /images/impact/

  return (
    <div
      className={`group relative overflow-hidden rounded-[var(--radius-lg)] border border-border-light shadow-soft hover:shadow-xl hover:-translate-y-1 transition-all duration-500 bg-secondary flex flex-col justify-between ${className}`}
      style={{ aspectRatio: aspect }}
    >
      {/* Background Mesh Glow Fallback by default to ensure maximum professionalism */}
      {showImages && src ? (
        <>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105 pointer-events-none"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/40 to-transparent z-10" />
        </>
      ) : (
        <>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,151,43,0.15),transparent_60%)] z-0 pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
          <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-secondary/20 z-10" />
        </>
      )}

      {/* Top Header Overlay Row */}
      <div className="relative z-20 p-5 md:p-6 flex items-start justify-between w-full">
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-primary bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full backdrop-blur-md">
          {category}
        </span>
        <span className="text-[9px] font-bold uppercase tracking-widest text-text-muted/80 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md backdrop-blur-md">
          {badge}
        </span>
      </div>

      {/* Center glowing Lucide Icon */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-15 opacity-60 group-hover:opacity-90 group-hover:scale-110 transition-all duration-500">
        <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner backdrop-blur-sm text-primary">
          <Icon size={18} className="stroke-[1.5]" />
        </div>
      </div>

      {/* Bottom Content Area */}
      <div className="relative z-20 p-5 md:p-6 space-y-2 mt-auto">
        <h3 className="font-heading font-extrabold text-white text-base md:text-lg leading-tight group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="text-xs md:text-sm text-neutral-300 font-light leading-relaxed max-w-sm">
          {description}
        </p>
      </div>
    </div>
  );
}

export default async function ImpactPage() {
  const sanityData: ImpactPageData | undefined = await getImpactPage();
  const stats = sanityData?.stats && sanityData.stats.length > 0 ? sanityData.stats : staticImpactStatsExtended;
  const outcomes = sanityData?.outcomes && sanityData.outcomes.length > 0 ? sanityData.outcomes : staticImpactOutcomes;
  const stories = sanityData?.stories && sanityData.stories.length > 0 ? sanityData.stories : staticImpactStories;

  return (
    <>
      <PageBanner
        title="Our Impact"
        breadcrumb="Making a Difference"
      />

      {/* Impact Numbers */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading
            label="Our Foundations"
            title="Operational Values"
            description="Every strategic parameter represents a direct, transparent commitment to building real social opportunities."
          />
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {stats.map((stat) => {
              const Icon = ICON_MAP[stat.iconName] || Target;
              return (
                <div
                  key={stat.label}
                  className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] p-6 text-center shadow-soft"
                >
                  <div className={`w-14 h-14 rounded-full ${stat.bg} flex items-center justify-center mx-auto mb-3`}>
                    <Icon size={26} className={stat.color} />
                  </div>
                  <p className={`text-2xl sm:text-3xl md:text-4xl font-bold font-heading ${stat.color}`}>
                    {stat.value}
                  </p>
                  <p className="text-text-muted text-sm mt-1">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Impact in Action — Photo Gallery */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <SectionHeading
            label="On the Ground"
            title="Our Grassroots Causes"
            description="Direct, localized action plans designed to uplift rural classrooms, sports opportunities, and family welfare."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <CauseCard
              category="Primary Education"
              badge="Active Initiative"
              iconName="BookOpen"
              title="Equitable Classrooms Drive"
              description="Supplying primary village schools with core learning sets, notebook kits, and interactive digital aids to support student retention."
              src="/images/impact/education-drive.svg"
              alt="Equitable classrooms drive"
              aspect="4/3"
              className="md:col-span-2 md:row-span-2"
            />
            <CauseCard
              category="Grassroots Welfare"
              badge="Community Focus"
              iconName="Gift"
              title="Welfare Resource Drop-offs"
              description="Providing clothing bundles, direct nutrition packets, and basic home supplies to remote clusters in underserved districts."
              src="/images/impact/community-outreach.svg"
              alt="Welfare resource drop-offs"
              aspect="1/1"
            />
            <CauseCard
              category="Community Health"
              badge="Welfare Camp"
              iconName="HeartPulse"
              title="First-Aid & Hygiene Sessions"
              description="Collaborating with volunteer doctors to conduct health workshops and supply emergency diagnostic boxes to village blocks."
              src="/images/impact/health-camp.svg"
              alt="First-aid and hygiene session"
              aspect="1/1"
            />
            <CauseCard
              category="Sports Excellence"
              badge="Talent Development"
              iconName="Trophy"
              title="Grassroots Athletic Gear"
              description="Sponsoring high-quality athletic gear, football packages, and cricket trials support for young sports talents."
              src="/images/impact/sports-event.svg"
              alt="Grassroots athletic gear support"
              aspect="1/1"
            />
            <CauseCard
              category="Academic Care"
              badge="Future Builder"
              iconName="Award"
              title="Deserving Student Aid"
              description="Bridging tuition gaps and matching passionate school-goers with career mentors to ensure successful graduation."
              src="/images/impact/water-project.svg"
              alt="Deserving student aid"
              aspect="1/1"
            />
          </div>
        </Container>
      </Section>

      {/* Outcomes */}
      <Section spacing="lg" background="default">
        <Container size="lg">
          <SectionHeading
            label="Measurable Results"
            title="Program Outcomes"
            description="Third-party verified results from our core programs."
          />
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {outcomes.map((outcome) => (
              <div
                key={outcome.title}
                className="bg-surface border border-border-light rounded-[var(--radius-md)] overflow-hidden shadow-soft"
              >
                <ImagePlaceholder
                  src={`/images/impact/${outcome.title.toLowerCase()}.svg`}
                  alt={`${outcome.title} program in action`}
                  aspect="16/9"
                  className="rounded-none border-0"
                />
                <div className="p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 size={20} className="text-secondary" />
                    <h3 className="text-xl font-bold font-heading">{outcome.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {outcome.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-text-muted text-sm">
                        <TrendingUp size={16} className="text-accent-green shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Beneficiary Stories */}
      <Section spacing="lg" background="white">
        <Container size="lg">
          <SectionHeading label="Voices of Change" title="Stories from the Field" />
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {stories.map((story) => {
              const initials = story.name.split(" ").map((n) => n[0]).join("");
              const slug = story.name.toLowerCase().replace(/\s+/g, "-");
              return (
                <div
                  key={story.name}
                  className="bg-bg-off-white border border-border-light rounded-[var(--radius-md)] overflow-hidden shadow-soft"
                >
                  <ImagePlaceholder
                    src={`/images/impact/stories/${slug}.svg`}
                    alt={`${story.name}'s story`}
                    aspect="16/9"
                    className="rounded-none border-0"
                  />
                  <div className="p-6 md:p-8">
                    <Quote size={28} className="text-accent-orange/40 mb-4" />
                    <blockquote className="text-text-dark leading-relaxed italic text-lg mb-4">
                      &ldquo;{story.quote}&rdquo;
                    </blockquote>
                    <div className="flex items-center gap-3 pt-4 border-t border-border-light">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
                        {initials}
                      </div>
                      <div>
                        <p className="font-semibold text-sm">{story.name}</p>
                        <p className="text-text-muted text-xs">{story.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section spacing="md" background="primary">
        <Container size="md">
          <div className="text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-heading text-surface">
              Sponsor Our Grassroots Initiatives
            </h2>
            <p className="text-surface/80 text-lg max-w-xl mx-auto">
              Help us expand our sincere education, welfare, and sports initiatives to target clusters in need.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/donate" tabIndex={-1}>
                <Button variant="accent" size="lg" className="gap-2">
                  <Heart size={20} /> Donate Now
                </Button>
              </Link>
              <Link href="/reports" tabIndex={-1}>
                <Button variant="outline" size="lg" className="border-surface/40 text-surface hover:bg-surface/10 gap-2">
                  View Reports <ArrowRight size={18} />
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
