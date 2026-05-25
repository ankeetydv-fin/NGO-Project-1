import { Metadata } from "next";
import {
  HeroCarousel,
  TrustBar,
  MissionSummary,
  ImpactStats,
  ProgramsPreview,
  DonationCTA,
} from "@/components/home";

import { client } from "@/sanity/lib/client";

export const metadata: Metadata = {
  title: "Home",
  description: "Join us in our mission to empower communities and create sustainable positive change across India.",
};

async function getPrograms() {
  const query = `*[_type == "program" && isActive == true] | order(_createdAt asc)[0...4] {
    _id,
    title,
    description,
    "imageUrl": image.asset->url,
    tagline,
    link
  }`;
  return client.fetch(query, {}, { next: { revalidate: 3600 } });
}

export default async function Home() {
  const programsData = await getPrograms();

  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <MissionSummary />
      <ImpactStats />
      <ProgramsPreview programs={programsData} />
      <DonationCTA />
    </>
  );
}
