import { getVolunteerPage, type VolunteerPageData } from "@/sanity/lib/queries";
import VolunteerPageContent from "./page-content";

export default async function VolunteerPage() {
  const data: VolunteerPageData | undefined = await getVolunteerPage();
  return <VolunteerPageContent data={data} />;
}
