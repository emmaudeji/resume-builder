// lib/sample-resume.ts

import { Resume } from "@/types/resume"

export function getSampleResume(): Resume {
  return {
    id: "sample",
    title: "Sample Resume",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),

    templateId: "modern-sidebar",

    theme: {
      id: "sample-theme",
      name: "Default",
      primary: "#4f46e5",
      mode: "light",
      font_family: "Inter",
      font_size: 14,
      line_height: 1.6,
      density: "normal",
      radius: "md",
      style: "modern",
      shadow: "soft",
      template:  "modern-sidebar",
    },

    personal: {
      label: "Personal",
      visible: true,
      order: 0,
      first_name: "John",
      last_name: "Doe",
      job_title: "Senior Frontend Engineer",
      email: "john.doe@email.com",
      phone: "+1 234 567 890",
      city: "San Francisco",
      linkedin: "linkedin.com/in/johndoe",
      avatar: "https://i.pravatar.cc/150",
    },

    summary: {
      label: "Summary",
      visible: true,
      order: 1,
      summary:
        "Results-driven frontend engineer with 6+ years of experience building scalable web applications using React, TypeScript, and modern UI systems.",
    },

    experience: {
      label: "Experience",
      visible: true,
      order: 2,
      items: [
        {
          id: "1",
          user_id: "sample",
          company_name: "TechCorp",
          role: "Frontend Engineer",
          location: "Remote",
          start_date: "2021",
          current: true,
          description:
            "Led UI architecture and improved performance by 40%.",
          highlights: [
            "Built design system",
            "Optimized bundle size",
          ],
        },
      ],
    },

    education: {
      label: "Education",
      visible: true,
      order: 3,
      items: [
        {
          id: "1",
          user_id: "sample",
          institution: "MIT",
          degree: "BSc",
          field_of_study: "Computer Science",
          start_date: "2015",
          end_date: "2019",
        },
      ],
    },

    skills: {
      label: "Skills",
      visible: true,
      order: 4,
      show_level: true,
      items: [
        { name: "React", level: 5 },
        { name: "TypeScript", level: 4 },
        { name: "Next.js", level: 4 },
      ],
    },

    projects: { label: "", visible: false, order: 5, items: [] },
    certifications: { label: "", visible: false, order: 6, items: [] },
    languages: { label: "", visible: false, order: 7, items: [] },
    custom: { label: "", visible: false, order: 8, title: "", items: [] },
  }
}