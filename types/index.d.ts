// export type Theme = {
//   template_id: string // "modern" | "classic"

//   color: string // primary color
//   font: string // "inter", "roboto"

//   layout: "single-column" | "two-column"
//   spacing: "compact" | "comfortable"

//   font_size: "sm" | "md" | "lg"

//   show_icons?: boolean
// }

export type ResumeSettings = {
  show_section_headings: boolean
  show_dates: boolean
  page_size: "A4" | "Letter"

  hidden_sections?: string[] // section IDs
}

export type AIData = {
  summarySuggestions?: string[]
  experienceSuggestions?: Record<string, string[]>

  lastOptimizedAt?: string

  score?: number // resume score
}

export type CoverLetter = {
  id: string; // uuid
  user_id: string;
  job_slug: string | null;
  title: string | null;
  content: string;
  status: "DRAFT" | "PUBLISHED" | "ARCHIVED" | string;
  is_default: boolean | null;
  created_at: string; // ISO timestamp
  updated_at: string; // ISO timestamp
};

type CookiePreferences = {
  necessary: true // always true
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

type User = {
  id: string
  email: string
  full_name?: string
  role?: string
}