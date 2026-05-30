import { getAbout, type AboutData } from "@/sanity/lib/queries";
import { getStories, type StoryData } from "@/sanity/lib/queries";
import AboutPageContent from "./page-content";

export default async function AboutPage() {
  const [aboutData, storiesData] = await Promise.all([
    getAbout(),
    getStories(),
  ]);

  return <AboutPageContent aboutData={aboutData} storiesData={storiesData} />;
}
