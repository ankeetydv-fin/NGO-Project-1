"use server"

import { getWriteClient } from "@/sanity/lib/client"

interface NewsletterFormData {
  name: string
  email: string
}

export async function submitNewsletterForm(data: NewsletterFormData) {
  // Validate required fields
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  try {
    const client = getWriteClient()

    // Check if email already exists
    const existing = await client.fetch(
      `*[_type == "newsletterSubscriber" && email == $email][0]`,
      { email: data.email.trim().toLowerCase() }
    )

    if (existing) {
      return { success: true, message: "You are already subscribed!" }
    }

    await client.create({
      _type: "newsletterSubscriber",
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      subscribedAt: new Date().toISOString(),
      isActive: true,
    })
    return { success: true, message: "Successfully subscribed!" }
  } catch (error: unknown) {
    console.error("Failed to subscribe:", error)
    if (error instanceof Error && error.message.includes("Insufficient permissions")) {
      console.error("⚠️  Your SANITY_API_TOKEN lacks write permissions. Generate an 'Editor' token at https://www.sanity.io/manage")
      return { error: "Subscription is temporarily unavailable. Please try again later." }
    }
    return { error: "Something went wrong. Please try again later." }
  }
}
