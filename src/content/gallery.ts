/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  GALLERY CONTENT
 *  Edit this file to update gallery categories
 *  and individual image items.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { GalleryItem } from "@/types/content";

export const galleryCategories = [
  "All",
  "Education",
  "Healthcare",
  "Water",
  "Events",
  "Volunteers",
];

export const galleryItems: GalleryItem[] = [
  { category: "Education", alt: "Children studying in our learning center", image: "/images/gallery/education-1.svg" },
  { category: "Healthcare", alt: "Mobile health camp in a rural village", image: "/images/gallery/healthcare-1.svg" },
  { category: "Water", alt: "Borewell installation in Rajasthan", image: "/images/gallery/water-1.svg" },
  { category: "Events", alt: "Annual fundraising gala 2024", image: "/images/gallery/events-1.svg" },
  { category: "Volunteers", alt: "Volunteer team at community outreach", image: "/images/gallery/volunteers-1.svg" },
  { category: "Education", alt: "Digital literacy class for children", image: "/images/gallery/education-2.svg" },
  { category: "Healthcare", alt: "Vaccination drive in rural school", image: "/images/gallery/healthcare-2.svg" },
  { category: "Water", alt: "Community celebration after well completion", image: "/images/gallery/water-2.svg" },
  { category: "Events", alt: "World Water Day awareness campaign", image: "/images/gallery/events-2.svg" },
  { category: "Volunteers", alt: "Teaching assistants in the classroom", image: "/images/gallery/volunteers-2.svg" },
  { category: "Education", alt: "School supply distribution day", image: "/images/gallery/education-3.svg" },
  { category: "Healthcare", alt: "Maternal care program checkup", image: "/images/gallery/healthcare-3.svg" },
];

export const galleryCategoryColors: Record<string, string> = {
  Education: "from-primary/20 to-primary/5",
  Healthcare: "from-accent-orange/20 to-accent-orange/5",
  Water: "from-secondary/20 to-secondary/5",
  Events: "from-accent-green/20 to-accent-green/5",
  Volunteers: "from-primary/15 to-secondary/10",
};

export const galleryPageMeta = {
  title: "Gallery",
  subtitle:
    "Moments captured from the field — our programs, events, communities, and volunteers in action.",
  breadcrumb: "Our Work in Pictures",
};
