import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './program'
import { contactMessageType } from './contactMessage'
import { volunteerApplicationType } from './volunteerApplication'
import { newsletterSubscriberType } from './newsletterSubscriber'
import { donationType } from './donation'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    programType,
    contactMessageType,
    volunteerApplicationType,
    newsletterSubscriberType,
    donationType,
  ],
}
