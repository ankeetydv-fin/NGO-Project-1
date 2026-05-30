import { client } from './client'

// ─── Revalidation ───
const REVALIDATE = 3600 // 1 hour

// ─── Fetch helper ───
async function fetchData<T>(query: string, params?: Record<string, unknown>): Promise<T> {
  try {
    return await client.fetch<T>(query, params ?? {}, { next: { revalidate: REVALIDATE } })
  } catch {
    return undefined as T
  }
}

// ─── Site Settings ───
export interface SiteSettingsData {
  name: string
  tagline: string
  description: string
  url: string
  email: string
  phone: string[]
  address: { line1: string; line2: string }
  workingHours: string[]
  navLinks: { label: string; href: string }[]
  footerQuickLinks: { label: string; href: string }[]
  footerLegalLinks: { label: string; href: string }[]
  social: {
    facebook?: string
    twitter?: string
    instagram?: string
    linkedin?: string
    youtube?: string
  }
  legal: {
    registrations?: string[]
    taxId?: string
  }
}

const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  name,
  tagline,
  description,
  url,
  email,
  phone,
  address,
  workingHours,
  navLinks,
  footerQuickLinks,
  footerLegalLinks,
  social,
  legal
}`

export async function getSiteSettings() {
  return fetchData<SiteSettingsData>(siteSettingsQuery)
}

// ─── Homepage ───
export interface HomepageData {
  heroBadge?: string
  heroSlides: {
    id: string
    title: string
    subtitle: string
    description: string
    image?: { asset: { url: string } }
    ctaText: string
    ctaLink: string
  }[]
  heroStats: { value: string; label: string }[]
  recentDonation?: { amount: string; donor: string; time: string }
  trustPartners: { name: string; iconName: string }[]
  missionLabel?: string
  missionHeadline?: string
  missionHighlightedText?: string
  missionDescription?: string
  missionText?: string
  visionText?: string
  donationTiers: { amount: number; impact: string }[]
}

const homepageQuery = `*[_type == "homepage"][0] {
  heroBadge,
  heroSlides[] {
    id,
    title,
    subtitle,
    description,
    "image": image.asset->{url},
    ctaText,
    ctaLink
  },
  heroStats,
  recentDonation,
  trustPartners,
  missionLabel,
  missionHeadline,
  missionHighlightedText,
  missionDescription,
  missionText,
  visionText,
  donationTiers
}`

export async function getHomepage() {
  return fetchData<HomepageData>(homepageQuery)
}

// ─── Stories ───
export interface StoryData {
  _id: string
  title: string
  excerpt: string
  date: string
  author?: string
  category?: string
  categoryColor?: string
  readTime?: string
  slug?: { current: string }
  image?: { asset: { url: string } }
}

const storiesQuery = `*[_type == "story"] | order(date desc) {
  _id,
  title,
  excerpt,
  date,
  author,
  category,
  categoryColor,
  readTime,
  slug,
  "image": image.asset->{url}
}`

export async function getStories() {
  return fetchData<StoryData[]>(storiesQuery)
}

// ─── Testimonials ───
export interface TestimonialData {
  _id: string
  quote: string
  name: string
  role?: string
  location?: string
}

const testimonialsQuery = `*[_type == "testimonial"] {
  _id,
  quote,
  name,
  role,
  location
}`

export async function getTestimonials() {
  return fetchData<TestimonialData[]>(testimonialsQuery)
}

// ─── Impact Page ───
export interface ImpactPageData {
  stats: { iconName: string; value: string; label: string; color: string; bg: string }[]
  outcomes: { title: string; items: string[] }[]
  stories: { quote: string; name: string; location: string }[]
  pageTitle?: string
  pageBreadcrumb?: string
}

const impactPageQuery = `*[_type == "impactPage"][0] {
  stats,
  outcomes,
  stories,
  pageTitle,
  pageBreadcrumb
}`

export async function getImpactPage() {
  return fetchData<ImpactPageData>(impactPageQuery)
}

// ─── About Page ───
export interface AboutData {
  pageTitle?: string
  pageBreadcrumb?: string
  pageTagline?: string
  storyParagraphs: string[]
  foundingDate?: string
  visionText?: string
  missionPoints: string[]
  pillars: { iconName: string; title: string; description: string }[]
  values: { iconName: string; title: string; text: string }[]
  teamMembers: { name: string; role: string; initials: string; image?: { asset: { url: string } } }[]
}

const aboutQuery = `*[_type == "about"][0] {
  pageTitle,
  pageBreadcrumb,
  pageTagline,
  storyParagraphs,
  foundingDate,
  visionText,
  missionPoints,
  pillars,
  values,
  teamMembers[] {
    name,
    role,
    initials,
    "image": image.asset->{url}
  }
}`

export async function getAbout() {
  return fetchData<AboutData>(aboutQuery)
}

// ─── Volunteer Page ───
export interface VolunteerPageData {
  pageTitle?: string
  pageSubtitle?: string
  pageBreadcrumb?: string
  roles: { iconName: string; title: string; location: string; commitment: string; description: string }[]
  benefits: string[]
  communityCount?: string
  communityLabel?: string
  communityDescription?: string
  formInterestOptions: string[]
  formAvailabilityOptions: string[]
}

const volunteerPageQuery = `*[_type == "volunteerPage"][0] {
  pageTitle,
  pageSubtitle,
  pageBreadcrumb,
  roles,
  benefits,
  communityCount,
  communityLabel,
  communityDescription,
  formInterestOptions,
  formAvailabilityOptions
}`

export async function getVolunteerPage() {
  return fetchData<VolunteerPageData>(volunteerPageQuery)
}

// ─── Reports ───
export interface ReportData {
  _id: string
  title: string
  year?: string
  pages?: string
  size?: string
  reportType: 'annual' | 'financial' | 'impact'
}

const reportsQuery = `*[_type == "report"] | order(year desc) {
  _id,
  title,
  year,
  pages,
  size,
  reportType
}`

export async function getReports() {
  return fetchData<ReportData[]>(reportsQuery)
}

// ─── Gallery ───
export interface GalleryItemData {
  _id: string
  category: string
  alt: string
  image?: { asset: { url: string } }
}

const galleryItemsQuery = `*[_type == "galleryItem"] | order(_createdAt asc) {
  _id,
  category,
  alt,
  "image": image.asset->{url}
}`

export async function getGalleryItems() {
  return fetchData<GalleryItemData[]>(galleryItemsQuery)
}

// ─── FAQ ───
export interface FAQData {
  _id: string
  question: string
  answer: string
}

const faqItemsQuery = `*[_type == "faqItem"] {
  _id,
  question,
  answer
}`

export async function getFAQItems() {
  return fetchData<FAQData[]>(faqItemsQuery)
}
