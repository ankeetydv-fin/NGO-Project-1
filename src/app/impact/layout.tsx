import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Impact",
  description: "Real numbers, real outcomes, real change. See the measurable difference your support creates.",
};

export default function ImpactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
