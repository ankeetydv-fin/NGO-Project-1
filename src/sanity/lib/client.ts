import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

// Write client — uses API token for server-side mutations (form submissions)
// This client must ONLY be used in Server Actions or API routes, never in client components
// IMPORTANT: The token MUST have "Editor" or higher permissions in Sanity.
// A "Viewer" token will cause 403 errors on create/update/delete operations.
// Generate one at: https://www.sanity.io/manage → Project → API → Tokens → Add API token → "Editor" role
export function getWriteClient() {
  const token = process.env.SANITY_API_TOKEN
  if (!token) {
    throw new Error(
      'SANITY_API_TOKEN is not set. Add it to .env.local to enable form submissions.'
    )
  }
  return createClient({
    apiVersion,
    dataset,
    projectId,
    token,
    useCdn: false,
  })
}
