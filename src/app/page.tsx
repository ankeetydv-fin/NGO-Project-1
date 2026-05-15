import { Metadata } from "next";
import {
  HeroCarousel,
  TrustBar,
  MissionSummary,
  ImpactStats,
  ProgramsPreview,
  DonationCTA,
  Testimonials,
  TransparencySection,
  VolunteerSection,
  LatestUpdates,
} from "@/components/home";

export const metadata: Metadata = {
  title: "Home",
  description: "Join us in our mission to empower communities and create sustainable positive change globally.",
};

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <TrustBar />
      <MissionSummary />
      <ImpactStats />
      <ProgramsPreview />
      <DonationCTA />
      <Testimonials />
      <TransparencySection />
      <VolunteerSection />
      <LatestUpdates />
    </>
  );
}
