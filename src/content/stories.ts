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
    image: "/images/stories/clean-water-rajasthan.svg",
  },
  {
    title: "Our First Quarter: A Rapid Start to 2025",
    excerpt:
      "In just a few months since founding, we have already impacted hundreds of lives across education, healthcare, and sports. Explore the highlights from our initial quarter of operations.",
    date: "April 15, 2025",
    author: "Communications",
    category: "Reports",
    categoryColor: "bg-primary/10 text-primary",
    readTime: "8 min read",
    slug: "annual-report-2024",
    image: "/images/stories/annual-report-2024.svg",
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
    image: "/images/stories/volunteer-anjali-gupta.svg",
  },
  {
    title: "From Dropout to Engineer: Ravi's Scholarship Story",
    excerpt:
      "Ravi was about to drop out of school when he received a Shiv Prabha Foundation scholarship. Today, he's a software engineer — and he's giving back.",
    date: "March 15, 2025",
    author: "Field Team",
    category: "Impact Story",
    categoryColor: "bg-accent-green/10 text-accent-green",
    readTime: "6 min read",
    slug: "ravi-scholarship-story",
    image: "/images/stories/ravi-scholarship-story.svg",
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
    image: "/images/stories/disaster-relief-bihar.svg",
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
    image: "/images/stories/transparency-open-books.svg",
  },
];

/** Subset shown on homepage (latest 3) */
export const homepageStories = stories.slice(0, 3);
