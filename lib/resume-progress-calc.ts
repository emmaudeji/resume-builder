import { Resume } from "@/types/resume"

type ProgressBreakdown = {
  personal: number
  summary: number
  experience: number
  education: number
  skills: number
}

type ProgressResult = {
  percentage: number
  total: number
  breakdown: ProgressBreakdown
  next: string
}

function scorePersonal(p: Resume["personal"]) {
  let score = 0

  if (p.first_name && p.last_name) score += 10
  if (p.email) score += 5
  if (p.phone) score += 5
  if (p.job_title) score += 10

  return score // max 30
}

function scoreSummary(summary: Resume["summary"]) {
  return summary.content ? 15 : 0
}

function scoreExperience(exp: Resume["experience"]) {
  return exp.items.length ? 25 : 0
}

function scoreEducation(edu: Resume["education"]) {
  return edu.items.length ? 10 : 0
}

function scoreSkills(skills: Resume["skills"]) {
  return skills.items.length ? 15 : 0
}

function getNext(resume: Resume): string {
  const p = resume.personal

  if (!p.first_name || !p.last_name) return "Add your name"
  if (!p.job_title) return "Define your job target"
  if (!p.email) return "Add email for recruiters"
  if (!resume.summary.content) return "Write a summary"
  if (!resume.experience.items.length) return "Add experience"

  return "Your resume is looking strong 🚀"
}

export function calculateProgress(resume: Resume): ProgressResult {
  const breakdown: ProgressBreakdown = {
    personal: scorePersonal(resume.personal),
    summary: scoreSummary(resume.summary),
    experience: scoreExperience(resume.experience),
    education: scoreEducation(resume.education),
    skills: scoreSkills(resume.skills),
  }

  const total = Object.values(breakdown).reduce((a, b) => a + b, 0)

  const percentage = Math.round((total / 100) * 100)

  return {
    percentage,
    total,
    breakdown,
    next: getNext(resume),
  }
}