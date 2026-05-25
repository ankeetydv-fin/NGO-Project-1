import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reports & Financials",
  description: "Read our annual reports and financial statements. We believe in 100% transparency.",
};

export default function ReportsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
