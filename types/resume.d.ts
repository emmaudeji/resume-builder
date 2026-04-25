export type Resume = {
  id: string
  userId: string

  title: string // "Frontend Developer Resume"
  slug?: string

  createdAt: string
  updatedAt: string

  // 🔥 Core content (dynamic)
  sections: Section[]

  // 🎨 Design system
  theme: Theme

  // ⚙️ Settings / metadata
  settings: ResumeSettings

  // 📊 AI + analytics (future-proof)
  ai?: AIData
}

export type Section = {
  id: string
  type: SectionType
  label: string
  visible: boolean
  order: number

  data: unknown
}

export type SectionType =
  | "personal"
  | "summary"
  | "experience"
  | "education"
  | "skills"
  | "projects"
  | "certifications"
  | "languages"
  | "custom"

export type PersonalSectionProp = {
  full_name: string
  job_title?: string
  email?: string
  phone?: string
  location?: string
  website?: string
  linkedin?: string
  github?: string
  avatar?: string
  more?: Record<string, string>
}

export type SummarySectionProp = {
  content: string
}

export type ExperienceItem  = {
  id: string
  company: string
  role: string
  location?: string
  start_date: string
  end_date?: string
  current?: boolean

  description?: string
  highlights?: string[] // 🔥 important for AI
}

export type ExperienceSectionProp = {
  items: ExperienceItem[]
}

export type EducationItemProp = {
  id: string
  school: string
  degree?: string
  field?: string
  start_date?: string
  end_date?: string
  description?: string
}

export type SkillsSectionProp = {
  items: {
    name: string
    level?: number // 1–5 (optional)
  }[]
}

export type ProjectItemProp = {
  id: string
  name: string
  description?: string
  link?: string
  technologies?: string[]
}

export type LanguageItemProp = {
  name: string
  proficiency?: "basic" | "intermediate" | "advanced" | "native"
}

export type CustomSectionProp = {
  title: string
  items: {
    id: string
    title: string
    subtitle?: string
    description?: string
  }[]
}
