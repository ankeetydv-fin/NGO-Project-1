import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Stories of Change",
  description: "Read inspiring stories from the individuals and communities we serve.",
};

export default function StoriesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
