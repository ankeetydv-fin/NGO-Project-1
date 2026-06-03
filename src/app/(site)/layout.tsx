import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import { cache } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getSiteSettings, type SiteSettingsData } from "@/sanity/lib/queries";
import { siteConfig as staticSiteConfig } from "@/content/site";
import "./globals.css";

const getCachedSiteSettings = cache(getSiteSettings);

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  const settings: SiteSettingsData | undefined = await getCachedSiteSettings();
  const name = settings?.name ?? staticSiteConfig.name;
  const tagline = settings?.tagline ?? staticSiteConfig.tagline;
  const description = settings?.description ?? staticSiteConfig.description;
  const url = settings?.url ?? staticSiteConfig.url;

  return {
    title: {
      default: `${name} | ${tagline.split(' | ')[0]}`,
      template: `%s | ${name}`
    },
    description,
    keywords: ["NGO", "Shiv Prabha Foundation", "charity", "donate", "volunteer", "community", "foundation", "India"],
    authors: [{ name }],
    creator: name,
    metadataBase: new URL(url),
    openGraph: {
      type: "website",
      locale: "en_IN",
      url: "/",
      title: `${name} | ${tagline.split(' | ')[0]}`,
      description,
      siteName: name,
    },
    twitter: {
      card: "summary_large_image",
      title: name,
      description,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings: SiteSettingsData | undefined = await getCachedSiteSettings();
  const navLinks = settings?.navLinks?.map(l => ({ name: l.label, href: l.href })) ?? [];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${lora.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans text-text-dark bg-bg-off-white">
        <Navbar links={navLinks} />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer
          siteConfig={settings ?? undefined}
          footerQuickLinks={settings?.footerQuickLinks ?? undefined}
          footerLegalLinks={settings?.footerLegalLinks ?? undefined}
        />
      </body>
    </html>
  );
}
