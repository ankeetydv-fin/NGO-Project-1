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
      "Hum apne bacchon ko padhane ki haalat mein nahi the, unhe khet mein kaam par lagana padta. Par Shiv Prabha Foundation ne humari beti ko kitaabein, kapde aur hausla diya. Aaj woh humare khandaan mein pehli ladki hai jo college ja rahi hai.",
    name: "Priya Sharma",
    role: "Parent & Mother",
    location: "Jodhpur, Rajasthan",
  },
  {
    quote:
      "Pehle humare bacchon ko ganda paani peena padta tha, jisse woh lagatar bimaar rehte the. Jab se gaon mein saaf paani ka well khula hai, humari pareshaniyan khatam ho gayi hain aur auraton ko milo door nahi chalna padta.",
    name: "Ramesh Meena",
    role: "Village Leader",
    location: "Kumbha Village, Rajasthan",
  },
  {
    quote:
      "In remote hamlets, a simple throat infection or fever can turn fatal because there is no clinic. I volunteer here to ensure no mother has to watch her child suffer and wither away from a disease that a simple kit can cure.",
    name: "Dr. Anjali Gupta",
    role: "Volunteer Doctor",
    location: "Mumbai, Maharashtra",
  },
];

/** Subset used on impact page */
export const impactStories = [
  {
    quote:
      "We were going to pull my daughter out of school to work in the fields. A simple learning scholarship gave her books, tuition, and hope. Now she is the first person in our family to ever attend college.",
    name: "Priya Sharma",
    location: "Rajasthan, India",
  },
  {
    quote:
      "Before the clean water well was dug, our children were constantly sick from drinking dirty pond water. Now they are healthy, and the women no longer walk 5 km under the blazing sun.",
    name: "Ramesh Meena",
    location: "Kumbha Village, Rajasthan",
  },
];
