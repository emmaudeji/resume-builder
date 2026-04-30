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

    first_name: "",
    last_name: "",
    job_title: "",

    email: "",
    phone: "",
    website: "",
    linkedin: "",
    github: "",

    address: "",
    city: "",
    state: "",
    postal_code: "",
    country: "",

    driving_license: "",
    place_of_birth: "",
    date_of_birth: "",
    nationality: "",

    show_additional_details: false,

    avatar: "https://i.pravatar.cc/150",
  },

  // 📝 SUMMARY
  summary: {
    label: "Professional Summary",
    visible: true,
    order: 1,
    summary: "",
  },

  // 💼 EXPERIENCE
  experience: {
    label: "Work Experience",
    visible: true,
    order: 2,

    items: [],
  },

  // 🎓 EDUCATION
  education: {
    label: "Education",
    visible: true,
    order: 3,

    items: [],
  },

  // 🛠️ SKILLS
  skills: {
    label: "Skills",
    visible: true,
    order: 4,
    show_level: true,
    items: [],
  },

  // 🚀 PROJECTS
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

  // 🎨 THEME (FIXED to match your Theme type)
  theme: {
    id: "default",
    name: "Default",

    primary: "#6C5CE7",
    secondary: "#111827",
    accent: "#10b981",

    mode: "light",

    font_family: "inter",
    font_secondary: "inter",

    font_size: 14,
    line_height: 1.6,

    density: "normal",
    radius: "md",

    style: "modern",

    shadow: "soft",
    template: "modern-single",
  },

  // 🔗 TEMPLATE
  // templateId: "modern-flow",

  // 🤖 AI (safe minimal init)
  ai: {
    summarySuggestions: [],
    experienceSuggestions: {},
    score: 0,
    lastOptimizedAt: undefined,
  },
}

export const FONT_OPTIONS = [
  { label: "Inter", value: "Inter" },
  { label: "Poppins", value: "Poppins" },
  { label: "Roboto", value: "Roboto" },
  { label: "Lora", value: "Lora" },
  { label: "Playfair Display", value: "Playfair Display" },
]