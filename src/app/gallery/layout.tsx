import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description: "View our photo gallery to see our impact and programs in action.",
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
