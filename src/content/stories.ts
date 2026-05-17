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
    title: "How Clean Water Changed an Entire Village in Rajasthan",
    excerpt:
      "When the first borewell was installed in Kumbha village, women no longer had to walk 5 km each day. Here is the full story of how clean water transformed health, education, and daily life.",
    date: "April 28, 2025",
    author: "Field Team",
    category: "Impact Story",
    categoryColor: "bg-accent-green/10 text-accent-green",
    readTime: "5 min read",
    slug: "clean-water-rajasthan",
    image: "/images/stories/clean-water-rajasthan.jpg",
  },
  {
    title: "Annual Report 2024: A Year of Unprecedented Growth",
    excerpt:
      "We reached 5,000 lives this year — a milestone made possible by our donors, volunteers, and partners. Explore the highlights and key numbers from our first full year.",
    date: "April 15, 2025",
    author: "Communications",
    category: "Reports",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "8 min read",
    slug: "annual-report-2024",
    image: "/images/stories/annual-report-2024.jpg",
  },
  {
    title: "Volunteer Spotlight: Meet Dr. Anjali Gupta",
    excerpt:
      "A volunteer doctor from Mumbai shares her life-changing experience running health camps in remote communities across Rajasthan and Madhya Pradesh.",
    date: "March 30, 2025",
    author: "Volunteer Team",
    category: "Volunteer",
    categoryColor: "bg-secondary/10 text-secondary",
    readTime: "4 min read",
    slug: "volunteer-anjali-gupta",
    image: "/images/stories/volunteer-anjali-gupta.jpg",
  },
  {
    title: "From Dropout to Engineer: Ravi's Scholarship Story",
    excerpt:
      "Ravi was about to drop out of school when he received an NGO Foundation scholarship. Today, he's a software engineer — and he's giving back.",
    date: "March 15, 2025",
    author: "Field Team",
    category: "Impact Story",
    categoryColor: "bg-accent-green/10 text-accent-green",
    readTime: "6 min read",
    slug: "ravi-scholarship-story",
    image: "/images/stories/ravi-scholarship-story.jpg",
  },
  {
    title: "Building Resilience: Our Disaster Relief in Bihar",
    excerpt:
      "When floods devastated villages in Bihar, our team was on the ground within 24 hours. Here is how we helped 200 families recover.",
    date: "February 28, 2025",
    author: "Relief Team",
    category: "Field Update",
    categoryColor: "bg-accent-orange/10 text-accent-orange",
    readTime: "7 min read",
    slug: "disaster-relief-bihar",
    image: "/images/stories/disaster-relief-bihar.jpg",
  },
  {
    title: "Why Transparency Matters: Our Open Books Policy",
    excerpt:
      "Every rupee you donate is tracked and reported. Learn about our commitment to financial transparency and how we ensure accountability at every level.",
    date: "February 10, 2025",
    author: "Leadership",
    category: "Organization",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "5 min read",
    slug: "transparency-open-books",
    image: "/images/stories/transparency-open-books.jpg",
  },
];

/** Subset shown on homepage (latest 3) */
export const homepageStories = stories.slice(0, 3);
