import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "NGO Foundation | Making a Difference",
    template: "%s | NGO Foundation"
  },
  description: "Dedicated to empowering communities and creating sustainable positive change globally through education, healthcare, and environmental initiatives.",
  keywords: ["NGO", "non-profit", "charity", "donate", "volunteer", "community", "foundation"],
  authors: [{ name: "NGO Foundation" }],
  creator: "NGO Foundation",
  metadataBase: new URL("https://ngofoundation.example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "NGO Foundation | Making a Difference",
    description: "Dedicated to empowering communities and creating sustainable positive change globally.",
    siteName: "NGO Foundation",
  },
  twitter: {
    card: "summary_large_image",
    title: "NGO Foundation",
    description: "Making a difference in the world.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-dark bg-bg-off-white">
        <Navbar />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
