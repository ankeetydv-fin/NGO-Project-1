"use server"

interface VolunteerFormData {
  name: string
  email: string
  phone: string
  role: string
  availability?: string
  motivation: string
}

export async function submitVolunteerForm(data: VolunteerFormData) {
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }
  if (!data.phone?.trim()) return { error: "Phone number is required" }
  if (!data.role) return { error: "Please select a role" }
  if (!data.motivation?.trim()) return { error: "Motivation is required" }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  if (data.motivation.trim().length < 20) return { error: "Please write at least 20 characters about why you want to volunteer" }

  return { success: true }
}
