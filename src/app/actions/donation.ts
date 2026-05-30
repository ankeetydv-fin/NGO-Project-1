"use server"

import { getWriteClient } from "@/sanity/lib/client"

interface DonationFormData {
  name: string
  email: string
  phone: string
  panNumber: string
  amount: number
  frequency: "monthly" | "one-time"
}

export async function submitDonationForm(data: DonationFormData) {
  if (!data.name?.trim()) return { error: "Full name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  if (!data.phone?.trim()) return { error: "Phone number is required" }
  if (!data.panNumber?.trim()) return { error: "PAN number is required for 80G tax receipt" }
  if (!data.amount || data.amount <= 0) return { error: "Please select or enter a donation amount" }

  try {
    const client = getWriteClient()
    await client.create({
      _type: "donation",
      donorName: data.name.trim(),
      email: data.email.trim().toLowerCase(),
      phone: data.phone.trim(),
      panNumber: data.panNumber.trim().toUpperCase(),
      amount: data.amount,
      frequency: data.frequency,
      status: "pending",
      submittedAt: new Date().toISOString(),
    })
    return { success: true, message: "Thank you! Redirecting to payment gateway..." }
  } catch (error: unknown) {
    console.error("Failed to process donation:", error)
    if (error instanceof Error && error.message.includes("Insufficient permissions")) {
      console.error("⚠️  Your SANITY_API_TOKEN lacks write permissions.")
      return { error: "Donation submission is temporarily unavailable. Please try again later." }
    }
    return { error: "Something went wrong. Please try again later." }
  }
}
