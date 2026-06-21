"use server"

interface ContactFormData {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}

export async function submitContactForm(data: ContactFormData) {
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }
  if (!data.subject?.trim()) return { error: "Subject is required" }
  if (!data.message?.trim()) return { error: "Message is required" }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  if (data.message.trim().length < 10) return { error: "Message must be at least 10 characters" }

  return { success: true }
}
