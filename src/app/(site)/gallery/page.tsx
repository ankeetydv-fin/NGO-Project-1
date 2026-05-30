import { getGalleryItems, type GalleryItemData } from "@/sanity/lib/queries";
import GalleryPageContent from "./page-content";

export default async function GalleryPage() {
  const items: GalleryItemData[] | undefined = await getGalleryItems();
  return <GalleryPageContent items={items} />;
}
