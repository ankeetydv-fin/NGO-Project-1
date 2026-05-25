import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Programs",
  description: "Discover our initiatives in education, healthcare, and community development.",
};

export default function ProgramsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
