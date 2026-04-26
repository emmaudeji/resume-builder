import { Resume } from "@/types/resume"

export function calculateProgress(resume: Resume) {
  let total = 0
  let completed = 0

  // PERSONAL
  total += 3
  if (resume.personal.full_name) completed++
  if (resume.personal.email) completed++
  if (resume.personal.job_title) completed++

  // SUMMARY
  total += 1
  if (resume.summary.content) completed++

  // EXPERIENCE
  total += 1
  if (resume.experience.items.length > 0) completed++

  // EDUCATION
  total += 1
  if (resume.education.items.length > 0) completed++

  // SKILLS
  total += 1
  if (resume.skills.items.length > 0) completed++

  const percentage = Math.round((completed / total) * 100)

  return {
    percentage,
    completed,
    total,
    next:
      !resume.personal.full_name
        ? "Add your name"
        : !resume.summary.content
        ? "Write a summary"
        : resume.experience.items.length === 0
        ? "Add experience"
        : "Keep going 🚀",
  }
}

export function extractResumeSignals(resume: Resume) {
  return {
    hasName: !!resume.personal.full_name,
    hasEmail: !!resume.personal.email,
    hasJobTitle: !!resume.personal.job_title,
    hasSummary: !!resume.summary.content,
    hasExperience: resume.experience.items.length > 0,
    hasEducation: resume.education.items.length > 0,
    hasSkills: resume.skills.items.length > 0,
  }
}

export function calculateResumeScore(resume: Resume) {
  const s = extractResumeSignals(resume)

  let score = 0
  const insights: string[] = []

  if (s.hasName) score += 10
  else insights.push("Add your full name")

  if (s.hasEmail) score += 10
  else insights.push("Add email for recruiter contact")

  if (s.hasJobTitle) score += 10
  else insights.push("Define a clear job target")

  if (s.hasSummary) score += 15
  else insights.push("Write a professional summary")

  if (s.hasExperience) score += 25
  else insights.push("Add work experience")

  if (s.hasEducation) score += 10

  if (s.hasSkills) score += 20

  return {
    score: Math.min(score, 100),
    insights,
  }
}