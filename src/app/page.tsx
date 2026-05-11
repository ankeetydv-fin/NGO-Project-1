import {
  Hero,
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

export default function Home() {
  return (
    <>
      <Hero />
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
