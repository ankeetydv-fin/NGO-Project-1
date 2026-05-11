import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Donate",
  description: "Your generosity creates real, measurable change. Make a donation to support our causes.",
};

export default function DonateLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
