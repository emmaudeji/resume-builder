import { Resume } from "@/types/resume"

export const SAMPLE_RESUME: Resume = {
  id: "sample",
  title: "Sample Resume",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),

  // templateId: "modern-single",

  theme: {
    id: "modern-default",
    name: "Modern Default",

    primary: "#2563eb",
    secondary: "#1e40af",
    accent: "#3b82f6",

    mode: "light",

    font_family: "Inter, sans-serif",
    font_size: 14,
    line_height: 1.5,

    density: "normal",
    radius: "md",

    style: "modern",
    shadow: "none",

    template: "modern-single",
  },

  personal: {
    label: "Personal",
    visible: true,
    order: 0,

    first_name: "Emmanuel",
    last_name: "Udeji",
    job_title: "Fullstack Developer",

    email: "emma.dev@example.com",
    phone: "+234 800 000 0000",
    address: "Onitsha, Nigeria",

    linkedin: "linkedin.com/in/emma",
    github: "github.com/emma",

    avatar: "",
  },

  summary: {
    label: "Summary",
    visible: true,
    order: 1,
    summary:
      "Fullstack developer with strong experience building scalable SaaS platforms using Next.js, TypeScript, and modern UI systems. Passionate about performance, clean architecture, and delivering excellent user experiences.",
  },

  experience: {
    label: "Experience",
    visible: true,
    order: 2,
    items: [
      {
        id: "exp-1",
        user_id: "sample",
        company_name: "Zikoro Technologies",
        role: "Senior Frontend Developer",
        location: "Remote",
        start_date: "2023",
        current: true,
        description:
          "Led frontend architecture for a SaaS event management platform, improving performance and UX across core workflows.",
        highlights: [
          "Built reusable component system used across 5+ products",
          "Improved page load speed by 40%",
        ],
      },
      {
        id: "exp-2",
        user_id: "sample",
        company_name: "Freelance",
        role: "Fullstack Developer",
        start_date: "2021",
        end_date: "2023",
        description:
          "Developed multiple web applications including e-commerce, booking systems, and internal tools.",
      },
    ],
  },

  education: {
    label: "Education",
    visible: true,
    order: 5,
    items: [
      {
        id: "edu-1",
        user_id: "sample",
        institution: "Nnamdi Azikiwe University",
        degree: "B.Sc Computer Science",
        start_date: "2017",
        end_date: "2021",
      },
    ],
  },

  skills: {
    label: "Skills",
    visible: true,
    order: 3,
    show_level: false,
    items: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Supabase" },
    ],
  },

  projects: {
    label: "Projects",
    visible: true,
    order: 4,
    items: [
      {
        id: "proj-1",
        name: "Event Management SaaS",
        description:
          "A full-featured platform for managing and hosting events with booking, registration, and analytics.",
        technologies: ["Next.js", "Supabase", "Tailwind"],
      },
    ],
  },

  certifications: {
    label: "Certifications",
    visible: false,
    order: 6,
    items: [],
  },

  languages: {
    label: "Languages",
    visible: false,
    order: 7,
    items: [],
  },

  custom: {
    label: "Custom",
    visible: false,
    order: 8,
    title: "",
    items: [],
  },
}