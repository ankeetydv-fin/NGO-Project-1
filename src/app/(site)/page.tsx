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

export const metadata: Metadata = {
  title: "Home",
  description: "Join us in our mission to empower communities and create sustainable positive change across India.",
};

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

export default async function Home() {
  const programsData: Awaited<ReturnType<typeof getPrograms>> = await getPrograms();

  return (
    <>
      <EditorialHero />
      <TrustBar />
      <EditorialMission />
      <ProgramsPreview programs={programsData} />
      <Testimonials />
      <LatestUpdates />
      <TransparencySection />
      <VolunteerSection />
      <DonationCTA />
    </>
  );
}
