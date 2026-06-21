import type { CampaignItem } from "@/types/content";

export const campaigns: CampaignItem[] = [
  {
    id: "camp-001",
    slug: "clean-water-is-survival",
    title: "Clean Water is Survival",
    subtitle: "Rani used to walk 5 km under a scorching sun for a single bucket of muddy water.",
    coverImage: "/images/hero/education.png", // Reusing hero image for continuity
    description: "No mother should have to watch her children drink water that will make them sick. We build wells directly in forgotten village blocks, bringing clean water and safety right to their doorstep.",
    problem: "Across rural blocks, thousands of children suffer from severe waterborne diseases. The only available water sources are often contaminated muddy pools shared with livestock. Women and children spend up to 5 hours a day hauling this unsafe water, keeping children out of school and mothers from earning a livelihood.",
    solution: "We bypass red tape and build deep-bore water wells equipped with robust hand-pumps directly in the center of forgotten villages. Each well provides a continuous supply of clean, safe drinking water, immediately eliminating waterborne illnesses.",
    impact: "A single well rescues an entire village. Children return to school, health dramatically improves, and communities thrive. Your donation directly funds the drilling, equipment, and installation of these life-saving wells.",
    location: "Rajasthan & Maharashtra Rural Blocks",
    beneficiaries: "Over 5,000 families in 2025",
    goalAmount: 500000,
    raisedAmount: 320000,
    stats: [
      { label: "Villages Reached", value: "45+" },
      { label: "Children Back in School", value: "2,100" },
      { label: "Disease Reduction", value: "85%" },
    ],
    testimonials: [
      {
        quote: "For the first time in my life, I don't have to walk miles before sunrise. My daughters are drinking clean water, and they can finally go to school.",
        name: "Rani Devi",
        role: "Mother of two, Kumbha Village",
      }
    ]
  },
  {
    id: "camp-002",
    slug: "education-for-every-child",
    title: "Keep a Child in School",
    subtitle: "A little girl reads under a flickering streetlamp because her home has no light.",
    coverImage: "/images/hero/healthcare.png",
    description: "Without basic pens, notebooks, and support, children are forced out of classrooms and into manual labor. We get supplies directly to children so they can stay in school and write their own future.",
    problem: "Poverty forces bright young minds out of the classroom and into hazardous manual labor. A lack of basic supplies like notebooks, uniforms, and slates is often the only barrier standing between a child and their education.",
    solution: "We deliver comprehensive 'School Readiness Kits' directly to children in the most underserved regions. We also work with local communities to ensure children have safe, well-lit spaces to study after dark.",
    impact: "Providing a single kit guarantees a child's enrollment and retention in school for an entire year. Education is the most proven pathway out of generational poverty.",
    location: "Bihar & Jharkhand",
    beneficiaries: "10,000+ Students",
    goalAmount: 1000000,
    raisedAmount: 750000,
    stats: [
      { label: "Kits Delivered", value: "12,500" },
      { label: "Dropout Rate Drop", value: "40%" },
      { label: "Girls Enrolled", value: "6,000+" },
    ],
    testimonials: [
      {
        quote: "I thought I would have to work in the fields forever. Now I have books, a uniform, and a dream to become a teacher.",
        name: "Priya",
        role: "5th Grade Student",
      }
    ]
  },
  {
    id: "camp-003",
    slug: "emergency-relief-fund",
    title: "Emergency Disaster Relief",
    subtitle: "When disaster strikes, every minute is a matter of life and death.",
    coverImage: "/images/hero/water.png",
    description: "Floodwaters, earthquakes, and extreme weather wipe out homes in seconds. Our emergency response teams deploy within 24 hours to deliver survival kits, shelter, and medical aid.",
    problem: "When natural disasters devastate rural communities, families are left stranded without food, clean water, or shelter. Traditional relief often takes days or weeks to reach these remote areas, costing lives.",
    solution: "Our agile rapid-response teams are pre-equipped with survival packs—containing dry rations, water filters, tarps, and basic medicines—and deploy immediately to ground zero.",
    impact: "Immediate intervention prevents starvation, halts the spread of post-disaster epidemics, and provides critical shelter to the most vulnerable, especially infants and the elderly.",
    location: "Nationwide Rapid Response",
    beneficiaries: "Affected Families",
    goalAmount: 2000000,
    raisedAmount: 1500000,
    stats: [
      { label: "Response Time", value: "< 24 Hrs" },
      { label: "Meals Served", value: "50,000+" },
      { label: "Families Sheltered", value: "3,500" },
    ],
    testimonials: [
      {
        quote: "The water took everything. But within hours, your team was here with food and a dry place for my baby to sleep. You saved us.",
        name: "Suresh",
        role: "Flood Survivor",
      }
    ]
  }
];
