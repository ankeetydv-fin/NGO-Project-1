/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  STORIES / BLOG POSTS
 *  Edit this file to add or update stories,
 *  field updates, and blog posts.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { StoryItem } from "@/types/content";

export const stories: StoryItem[] = [
  {
    title: "How Clean Water Gave Rani's Twin Girls Their First Day at School",
    excerpt:
      "Rani used to spend 5 hours a day hauling dirty water. The moment our field crew drilled a clean borewell in Kumbha village, she stopped walking, and her daughters went to school for the first time.",
    date: "April 28, 2025",
    author: "Field Crew",
    category: "Impact Story",
    categoryColor: "bg-accent-green/10 text-accent-green",
    readTime: "5 min read",
    slug: "clean-water-rajasthan",
    image: "/images/stories/clean-water-rajasthan.svg",
  },
  {
    title: "First Quarter Action: 300 Rural Children Rescued from Dropouts",
    excerpt:
      "In just three months, we skipped the paperwork and delivered 1,200 school kits, set up 2 village wellness booths, and equipped 50 young athletes. Here is what your donations built.",
    date: "April 15, 2025",
    author: "Operations",
    category: "Reports",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "8 min read",
    slug: "annual-report-2024",
    image: "/images/stories/annual-report-2024.svg",
  },
  {
    title: "Saving Lives in Rajasthan: Meet Volunteer Doctor Anjali Gupta",
    excerpt:
      "A volunteer pediatrician from Mumbai describes the desperate conditions in rural medical camps, and how basic health kits are saving babies from critical winter illnesses.",
    date: "March 30, 2025",
    author: "Medical Team",
    category: "Volunteer",
    categoryColor: "bg-secondary/10 text-secondary",
    readTime: "4 min read",
    slug: "volunteer-anjali-gupta",
    image: "/images/stories/volunteer-anjali-gupta.svg",
  },
  {
    title: "From Broken Bat to District Coach: Ravi's Scholarship Victory",
    excerpt:
      "Ravi worked 8 hours a day in a cement yard to pay his school fees. We gave him proper sports gear, a learning stipend, and a clean place to sleep. Now he's a certified sports mentor.",
    date: "March 15, 2025",
    author: "Field Crew",
    category: "Impact Story",
    categoryColor: "bg-accent-green/10 text-accent-green",
    readTime: "6 min read",
    slug: "ravi-scholarship-story",
    image: "/images/stories/ravi-scholarship-story.svg",
  },
  {
    title: "Floodwaters Took Their Home. You Sent Safe Shelters Within 24 Hours.",
    excerpt:
      "When the river broke its banks in Bihar, families slept on muddy roads with zero food. Our team arrived with dry rations, water filters, and tarps to protect 200 shivering children.",
    date: "February 28, 2025",
    author: "Relief Team",
    category: "Field Update",
    categoryColor: "bg-accent-orange/10 text-accent-orange",
    readTime: "7 min read",
    slug: "disaster-relief-bihar",
    image: "/images/stories/disaster-relief-bihar.svg",
  },
  {
    title: "Where Does Your Money Go? Behind Our Zero-Waste Commitment",
    excerpt:
      "Every single rupee you send is traced, photographed, and posted. We show you the exact school packages and water wells your hard-earned money bought. No executive salaries, no wastes.",
    date: "February 10, 2025",
    author: "Leadership",
    category: "Organization",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "5 min read",
    slug: "transparency-open-books",
    image: "/images/stories/transparency-open-books.svg",
  },
];

/** Subset shown on homepage (latest 3) */
export const homepageStories = stories.slice(0, 3);
