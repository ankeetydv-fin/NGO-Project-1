import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about Shiv Prabha Foundation — our story, mission, vision, and commitment to empowering youth, supporting the underprivileged, and promoting sports across India.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
