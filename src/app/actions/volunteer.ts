"use server"

import { getWriteClient } from "@/sanity/lib/client"

interface VolunteerFormData {
  name: string
  email: string
  phone: string
  role: string
  availability?: string
  motivation: string
}

export async function submitVolunteerForm(data: VolunteerFormData) {
  // Validate required fields
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }
  if (!data.phone?.trim()) return { error: "Phone number is required" }
  if (!data.role) return { error: "Please select a role" }
  if (!data.motivation?.trim()) return { error: "Motivation is required" }

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  // Validate motivation length
  if (data.motivation.trim().length < 20) return { error: "Please write at least 20 characters about why you want to volunteer" }

  try {
    const client = getWriteClient()
    await client.create({
      _type: "volunteerApplication",
      name: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      role: data.role,
      availability: data.availability || undefined,
      motivation: data.motivation.trim(),
      submittedAt: new Date().toISOString(),
      status: "pending",
    })
    return { success: true }
  } catch (error: unknown) {
    console.error("Failed to submit volunteer form:", error)
    if (error instanceof Error && error.message.includes("Insufficient permissions")) {
      console.error("⚠️  Your SANITY_API_TOKEN lacks write permissions. Generate an 'Editor' token at https://www.sanity.io/manage")
      return { error: "Form submission is temporarily unavailable. Please try again later." }
    }
    return { error: "Something went wrong. Please try again later." }
  }
}
