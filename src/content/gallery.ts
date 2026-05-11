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
  { category: "Education", alt: "Children studying in our learning center" },
  { category: "Healthcare", alt: "Mobile health camp in a rural village" },
  { category: "Water", alt: "Borewell installation in Rajasthan" },
  { category: "Events", alt: "Annual fundraising gala 2024" },
  { category: "Volunteers", alt: "Volunteer team at community outreach" },
  { category: "Education", alt: "Digital literacy class for children" },
  { category: "Healthcare", alt: "Vaccination drive in rural school" },
  { category: "Water", alt: "Community celebration after well completion" },
  { category: "Events", alt: "World Water Day awareness campaign" },
  { category: "Volunteers", alt: "Teaching assistants in the classroom" },
  { category: "Education", alt: "School supply distribution day" },
  { category: "Healthcare", alt: "Maternal care program checkup" },
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
