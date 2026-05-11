/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *  TESTIMONIALS
 *  Edit this file to update beneficiary and
 *  volunteer testimonials shown on the website.
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 */

import type { TestimonialItem } from "@/types/content";

export const testimonials: TestimonialItem[] = [
  {
    quote:
      "NGO Foundation ki wajah se meri beti ko scholarship mili aur aaj woh humare parivaar mein pehli hai jo college ja rahi hai. Is sansthan ne humare poore parivaar ka bhavishya badal diya.",
    name: "Priya Sharma",
    role: "Parent & Beneficiary",
    location: "Jodhpur, Rajasthan",
  },
  {
    quote:
      "Humare gaon mein jab se handpump laga hai, paani se hone waali bimaariyaan 80% kam ho gayi hain. Bacche sehatmand hain, aur auraton ko paani bharne 5 km nahi jaana padta.",
    name: "Ramesh Meena",
    role: "Sarpanch",
    location: "Kumbha Village, Rajasthan",
  },
  {
    quote:
      "I have been volunteering with NGO Foundation for 3 years. The transparency and dedication of this team is remarkable. Every rupee truly goes where it is needed most.",
    name: "Dr. Anjali Gupta",
    role: "Volunteer Doctor",
    location: "Mumbai, Maharashtra",
  },
];

/** Subset used on impact page */
export const impactStories = [
  {
    quote:
      "My daughter is now the first person in our family to attend college. This would never have been possible without the scholarship.",
    name: "Priya Sharma",
    location: "Rajasthan, India",
  },
  {
    quote:
      "Jab se gaon mein handpump laga hai, bacche sehatmand hain aur auraton ko 5 km paani bharne nahi jaana padta. Poora gaon badal gaya hai.",
    name: "Ramesh Meena",
    location: "Kumbha Village, Rajasthan",
  },
];
