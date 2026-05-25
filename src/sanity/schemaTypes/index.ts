import { type SchemaTypeDefinition } from 'sanity'
import { programType } from './program'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [programType],
}
