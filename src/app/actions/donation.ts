"use server"

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

  return { success: true, message: "Thank you! Redirecting to payment gateway..." }
}
