export type Resume = {
  id: string
  userId?: string

  title: string
  slug?: string

  createdAt: string
  updatedAt: string

  // ✅ Flat sections (clean access)
  personal: PersonalSectionProp
  summary: SummarySectionProp
  experience: ExperienceSectionProp
  education: EducationSectionProp
  skills: SkillsSectionProp
  projects?: ProjectSectionProp
  certifications?: CertificationSectionProp
  languages?: LangaugeSectionProp
  custom?: CustomSectionProp

  // 🎨 Design
  theme: Theme
  // templateId: string,

  // ⚙️ Settings
  // settings: ResumeSettings

  // 🤖 AI
  ai?: AIData
}

export type Section = {
  id: string
  type: SectionType
  label: string
  visible: boolean
  order: number

  data: SectionDataMap
}

export type BaseSection = {
  label: string
  visible: boolean
  order: number
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

export type SectionDataMap = {
  personal: PersonalSectionProp
  summary: SummarySectionProp
  experience: ExperienceSectionProp
  education: EducationSectionProp
  skills: SkillsSectionProp
  projects: ProjectSectionProp
  certifications: CertificationSectionProp  
  languages: LangaugeSectionProp
  custom: CustomSectionProp
}

export type PersonalSectionProp = BaseSection & {
  // 👤 Identity
  first_name: string
  last_name: string
  job_title?: string

  // 📞 Contact
  email?: string
  phone?: string
  website?: string
  linkedin?: string
  github?: string

  // 📍 Location
  address?: string
  city?: string
  state?: string
  postal_code?: string
  country?: string

  // 🧾 Additional
  driving_license?: string
  place_of_birth?: string
  date_of_birth?: string
  nationality?: string

  // 🎛️ UI control
  show_additional_details?: boolean

  avatar?: string
}
export type SummarySectionProp = BaseSection & {
  summary: string
}

export type Experience  = {
  id: string
  user_id: string;
  company_name: string;
  role: string
  location?: string
  start_date: string
  end_date?: string
  current?: boolean

  description?: string
  highlights?: string[] // 🔥 important for AI
}

export type ExperienceSectionProp = BaseSection & {
  items: Experience[]
}

export type Education = {
  id: string
  user_id: string;
  institution: string
  degree?: string
  field_of_study?: string
  start_date?: string
  end_date?: string
  current?: boolean

  grade?: string
  description?: string
}

export type EducationSectionProp = BaseSection & {
  items: Education[]
}

export type SummarySection = BaseSection & {
  summary:string
}
export interface License {
  user_id?: string,
  id?: string
  title: string
  issuer?: string
  issue_date?: string
  expiry_date?: string | null
  current?: boolean

  created_date?: string
  updated_date?: string
}

export type CertificationSectionProp = BaseSection & {
  items: License[]
}

export type SkillsSectionProp = BaseSection & {
  show_level:boolean,
  items: {
    name: string
    level?: number // 1–5 (optional)
  }[]
}

export type Project = {
  id: string
  name: string
  description?: string
  link?: string
  technologies?: string[]
}

export type ProjectSectionProp = BaseSection & {
  items: Project[]
}

export type Language = {
  name: string
  proficiency?: "basic" | "intermediate" | "advanced" | "native"
}

export type LangaugeSectionProp = BaseSection & {
    items: Language[]
}

export type CustomSectionProp = BaseSection & {
  title: string
  items: {
    id: string
    title: string
    subtitle?: string
    description?: string
  }[]
}

export type Theme = {
  id: string
  name: string

  // 🎨 Colors
  primary: string
  secondary?: string
  accent?: string

  mode: "light" | "dark"

  // ✍️ Typography
  font_family: string
  font_secondary?: string

  font_size: number
  line_height: number

  // 🧱 Layout tokens (IMPORTANT)
  density: "compact" | "normal" | "spacious"
  radius: "none" | "sm" | "md" | "lg"

  // 🎯 Keep this ONLY for UI filtering (not styling)
  style: "modern" | "corporate" | "creative" | "minimal" | "executive"

  // ✨ Polish
  shadow: "none" | "soft" | "medium"

  // template id
  template: string
}