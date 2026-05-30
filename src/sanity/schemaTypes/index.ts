import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './program'
import { contactMessageType } from './contactMessage'
import { volunteerApplicationType } from './volunteerApplication'
import { newsletterSubscriberType } from './newsletterSubscriber'
import { donationType } from './donation'
import { siteSettingsType } from './siteSettings'
import { homepageType } from './homepage'
import { aboutType } from './about'
import { impactPageType } from './impactPage'
import { volunteerPageType } from './volunteerPage'
import { storyType } from './story'
import { testimonialType } from './testimonial'
import { reportType } from './report'
import { galleryItemType } from './galleryItem'
import { faqItemType } from './faqItem'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    programType,
    contactMessageType,
    volunteerApplicationType,
    newsletterSubscriberType,
    donationType,
    siteSettingsType,
    homepageType,
    aboutType,
    impactPageType,
    volunteerPageType,
    storyType,
    testimonialType,
    reportType,
    galleryItemType,
    faqItemType,
  ],
}
