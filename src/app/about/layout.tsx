import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about our mission, vision, and the core values that drive our NGO.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
