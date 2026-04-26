import { Resume } from "@/types/resume"

export const initialResume: Resume = {
  id: crypto.randomUUID(),
  userId: "user_1",

  title: "Untitled Resume",
  slug: undefined,

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  // 👤 PERSONAL
  personal: {
    label: "Personal Information",
    visible: true,
    order: 0,

    full_name: "",
    job_title: "",
    email: "",
    phone: "",
    location: "",
    website: "",
    linkedin: "",
    github: "",
    avatar: "",
    more: {},
  },

  // 📝 SUMMARY
  summary: {
    label: "Professional Summary",
    visible: true,
    order: 1,

    content: "",
  },

  // 💼 EXPERIENCE
  experience: {
    label: "Work Experience",
    visible: true,
    order: 2,

    items: [
      {
        id: crypto.randomUUID(),
        user_id: "user_1",
        company_name: "",
        role: "",
        location: "",
        start_date: "",
        end_date: "",
        current: false,
        description: "",
        highlights: [],
      },
    ],
  },

  // 🎓 EDUCATION
  education: {
    label: "Education",
    visible: true,
    order: 3,

    items: [
      {
        id: crypto.randomUUID(),
        user_id: "user_1",
        institution: "",
        degree: "",
        field_of_study: "",
        start_date: "",
        end_date: "",
        current: false,
        grade: "",
        description: "",
      },
    ],
  },

  // 🛠️ SKILLS
  skills: {
    label: "Skills",
    visible: true,
    order: 4,

    items: [],
  },

  // 🚀 PROJECTS (optional but initialized for UX)
  projects: {
    label: "Projects",
    visible: false,
    order: 5,

    items: [],
  },

  // 📜 CERTIFICATIONS
  certifications: {
    label: "Certifications",
    visible: false,
    order: 6,

    items: [],
  },

  // 🌍 LANGUAGES
  languages: {
    label: "Languages",
    visible: false,
    order: 7,

    items: [],
  },

  // 🧩 CUSTOM
  custom: {
    label: "Custom Section",
    visible: false,
    order: 8,

    title: "",
    items: [],
  },

  // 🎨 THEME
  theme: {
    templateId: "modern",
    color: "#6C5CE7",
    font: "Inter",
    layout: "single-column",
    spacing: "comfortable",
    fontSize: "md",
    showIcons: true,
  },

  // ⚙️ SETTINGS
  settings: {
    showSectionHeadings: true,
    showDates: true,
    pageSize: "A4",
    hiddenSections: [],
  },

  // 🤖 AI
  ai: {
    summarySuggestions: [],
    experienceSuggestions: {},
    score: 0,
    lastOptimizedAt: undefined,
  },
}