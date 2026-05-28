"use server"

import { getWriteClient } from "@/sanity/lib/client"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  // Validate required fields
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }
  if (!data.subject?.trim()) return { error: "Subject is required" }
  if (!data.message?.trim()) return { error: "Message is required" }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  // Validate message length
  if (data.message.trim().length < 10) return { error: "Message must be at least 10 characters" }

  try {
    const client = getWriteClient()
    await client.create({
      _type: "contactMessage",
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone?.trim() || undefined,
      subject: data.subject.trim(),
      message: data.message.trim(),
      submittedAt: new Date().toISOString(),
      status: "new",
    })
    return { success: true }
  } catch (error: unknown) {
    console.error("Failed to submit contact form:", error)
    if (error instanceof Error && error.message.includes("Insufficient permissions")) {
      console.error("⚠️  Your SANITY_API_TOKEN lacks write permissions. Generate an 'Editor' token at https://www.sanity.io/manage")
      return { error: "Form submission is temporarily unavailable. Please try again later." }
    }
    return { error: "Something went wrong. Please try again later." }
  }
}
