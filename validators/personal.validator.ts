import { PersonalSectionProp } from "@/types/resume"

export function validatePersonal(p: PersonalSectionProp) {
  const errors: Record<string, string> = {}

  if (!p.first_name?.trim()) {
    errors.first_name = "First name is required"
  }

  if (!p.last_name?.trim()) {
    errors.last_name = "Last name is required"
  }

  if (!p.email?.trim()) {
    errors.email = "Email is required"
  } else if (!p.email.includes("@")) {
    errors.email = "Invalid email format"
  }

  if (!p.phone?.trim()) {
    errors.phone = "Phone number is required"
  }

  if (!p.job_title?.trim()) {
    errors.job_title = "Job target is required"
  }

  return errors
}