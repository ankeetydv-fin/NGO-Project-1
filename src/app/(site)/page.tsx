import { Metadata } from "next";
import {
  EditorialHero,
  TrustBar,
  EditorialMission,
  WelfareProjects,
  EventsSection,
  GallerySection,
  Testimonials,
  LatestUpdates,
  VolunteerSection,
  DonationCTA,
} from "@/components/home";

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
      <LatestUpdates />
      <EventsSection />
      <WelfareProjects />
      <VolunteerSection />
      <Testimonials />
      <GallerySection />
      <DonationCTA />
    </>
  );
}
