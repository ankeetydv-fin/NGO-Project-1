"use server"

interface NewsletterFormData {
  name: string
  email: string
}

export async function submitNewsletterForm(data: NewsletterFormData) {
  if (!data.name?.trim()) return { error: "Name is required" }
  if (!data.email?.trim()) return { error: "Email is required" }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(data.email)) return { error: "Please enter a valid email address" }

  return { success: true, message: "Successfully subscribed!" }
}
