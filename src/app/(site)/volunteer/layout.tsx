import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Volunteer",
  description: "Join our community of volunteers and make a hands-on impact. Your time can change lives.",
};

export default function VolunteerLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
