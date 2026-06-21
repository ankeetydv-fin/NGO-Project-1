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

import { programs } from "@/content";

export const metadata: Metadata = {
  title: "Home",
  description: "Join us in our mission to empower communities and create sustainable positive change across India.",
};

export default function Home() {
  return (
    <>
      <EditorialHero />
      <TrustBar />
      <EditorialMission />
      <ProgramsPreview programs={programs} />
      <Testimonials />
      <LatestUpdates />
      <TransparencySection />
      <VolunteerSection />
      <DonationCTA />
    </>
  );
}
