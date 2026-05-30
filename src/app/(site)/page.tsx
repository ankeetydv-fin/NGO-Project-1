import { Metadata } from "next";
import {
  EditorialHero,
  TrustBar,
  EditorialMission,
  ProgramsPreview,
  Testimonials,
  LatestUpdates,
  TransparencySection,
  VolunteerSection,
  DonationCTA,
} from "@/components/home";

import { client } from "@/sanity/lib/client";
import {
  getHomepage,
  getStories,
  getTestimonials,
  getReports,
  type HomepageData,
  type StoryData,
  type TestimonialData,
  type ReportData,
} from "@/sanity/lib/queries";
import { heroContent as staticHeroContent, trustPartners as staticTrustPartners, missionContent as staticMissionContent, impactStats as staticImpactStats, homepageStories as staticHomepageStories } from "@/content";
import type { HeroContent, HeroSlide, StoryItem, TestimonialItem, ImpactStat } from "@/types/content";

export const metadata: Metadata = {
  title: "Home",
  description: "Join us in our mission to empower communities and create sustainable positive change across India.",
};

// ─── Fetch helpers ───
async function getPrograms() {
  try {
    const query = `*[_type == "program" && isActive == true] | order(_createdAt asc)[0...4] {
      _id,
      title,
      description,
      "imageUrl": image.asset->url,
      tagline,
      link
    }`;
    return (await client.fetch(query, {}, { next: { revalidate: 3600 } })) ?? [];
  } catch {
    console.error("Failed to fetch programs from Sanity");
    return [];
  }
}

// ─── Mappers ───
function mapHeroContent(data: HomepageData | undefined): HeroContent {
  if (!data) return staticHeroContent;
  return {
    badge: data.heroBadge ?? staticHeroContent.badge,
    slides: (data.heroSlides ?? []).map((s): HeroSlide => ({
      id: s.id,
      title: s.title,
      subtitle: s.subtitle,
      description: s.description,
      image: s.image?.asset?.url ?? "/images/placeholder.svg",
      ctaText: s.ctaText,
      ctaLink: s.ctaLink,
    })),
    stats: (data.heroStats ?? []).map(s => ({ value: s.value, label: s.label })),
    recentDonation: {
      amount: data.recentDonation?.amount ?? staticHeroContent.recentDonation.amount,
      donor: data.recentDonation?.donor ?? staticHeroContent.recentDonation.donor,
      time: data.recentDonation?.time ?? staticHeroContent.recentDonation.time,
    },
  };
}

function mapStories(data: StoryData[] | undefined): StoryItem[] {
  if (!data || data.length === 0) return staticHomepageStories;
  return data.map((s): StoryItem => ({
    title: s.title,
    excerpt: s.excerpt,
    date: s.date,
    author: s.author ?? "",
    category: s.category ?? "",
    categoryColor: s.categoryColor ?? "",
    readTime: s.readTime ?? "",
    slug: s.slug?.current,
    image: s.image?.asset?.url,
  }));
}

function mapTestimonials(data: TestimonialData[] | undefined): TestimonialItem[] {
  if (!data || data.length === 0) return [];
  return data.map((t): TestimonialItem => ({
    quote: t.quote,
    name: t.name,
    role: t.role ?? "",
    location: t.location ?? "",
  }));
}

function mapMissionContent(data: HomepageData | undefined) {
  if (!data) return { label: staticMissionContent.label, headline: staticMissionContent.headline, highlightedText: staticMissionContent.highlightedText, description: staticMissionContent.description };
  return {
    label: data.missionLabel ?? staticMissionContent.label,
    headline: data.missionHeadline ?? staticMissionContent.headline,
    highlightedText: data.missionHighlightedText ?? staticMissionContent.highlightedText,
    description: data.missionDescription ?? staticMissionContent.description,
  };
}

function mapImpactStats(data: HomepageData | undefined): ImpactStat[] {
  if (!data?.heroStats) return staticImpactStats;
  return data.heroStats.map((s, i): ImpactStat => {
    const fallback = staticImpactStats[i] ?? { iconName: "Target", value: s.value, label: s.label, color: "text-primary", bg: "bg-primary/10" };
    return { iconName: fallback.iconName, value: s.value, label: s.label, color: fallback.color, bg: fallback.bg };
  });
}

export default async function Home() {
  const [programsData, homepageData, storiesData, testimonialsData, reportsData] = await Promise.all([
    getPrograms(),
    getHomepage(),
    getStories(),
    getTestimonials(),
    getReports(),
  ]);

  const heroContent = mapHeroContent(homepageData);
  const stories = mapStories(storiesData);
  const homepageStories = stories.slice(0, 3);
  const testimonials = mapTestimonials(testimonialsData);
  const mission = mapMissionContent(homepageData);
  const stats = mapImpactStats(homepageData);
  const trustPartners = homepageData?.trustPartners ?? staticTrustPartners;
  const transparencyReports = homepageData?.donationTiers ? [] : [];
  const certifications: string[] = [];

  return (
    <>
      <EditorialHero heroContent={heroContent} homepageStories={homepageStories} />
      <TrustBar trustPartners={trustPartners} />
      <EditorialMission missionContent={mission} impactStats={stats} />
      <ProgramsPreview programs={programsData} />
      <Testimonials testimonials={testimonials} />
      <LatestUpdates homepageStories={homepageStories} />
      <TransparencySection transparencyReports={undefined} certifications={undefined} />
      <VolunteerSection />
      <DonationCTA />
    </>
  );
}
