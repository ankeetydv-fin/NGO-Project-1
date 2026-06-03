import { getSiteSettings, type SiteSettingsData } from "@/sanity/lib/queries";
import ContactPageContent from "./page-content";

export default async function ContactPage() {
  const settings: SiteSettingsData | undefined = await getSiteSettings();
  return <ContactPageContent siteSettings={settings} />;
}