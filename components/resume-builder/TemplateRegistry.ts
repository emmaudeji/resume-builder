// TemplateRegistry.ts

import { Resume } from "@/types/resume"
import { ClassicTemplate } from "../resume-templates/ClassicTemplate"
import { DefaultTemplate } from "../resume-templates/DefaultTemplate"
import { ModernTemplate } from "../resume-templates/ModernTemplate"
import { ReactNode } from "react"

export const TEMPLATE_CATEGORIES = [
  "all",
  "modern",
  "classic",
  "minimal",
  "executive",
  "creative",
  "ats",
  "two-column",
  "single-column",
  "with-photo",
  "no-photo",
  "free",
  "premium",
] as const

export type TemplateCategory = (typeof TEMPLATE_CATEGORIES)[number]

export type TemplateProp = {
  id: string
  name: string
  preview: string

  // 🔥 allow multiple tags
  category: TemplateCategory[]
  component: TemplateComponent

  // optional future fields
  isPremium?: boolean
  isATS?: boolean
}

export function getTemplateById(id: string): TemplateProp {
  return (
    TEMPLATES.find((t) => t.id === id) || {
      id: "default",
      name: "Default",
      category: ["all"],
      preview: "",
      component: DefaultTemplate,
    }
  )
}

export type TemplateComponent = (props: { resume: Resume }) => ReactNode

export const TEMPLATES: TemplateProp[] = [
  {
    id: "modern-flow",
    name: "Modern Flow",
    category: ["modern", "two-column", "ats"],
    preview: "/t1.png",
    component: DefaultTemplate,
  },
  {
    id: "modern-edge",
    name: "Modern Edge",
    category: ["modern", "single-column"],
    preview: "/t2.png",
    component: ModernTemplate,
  },
  {
    id: "classic-pro",
    name: "Classic Pro",
    category: ["classic", "ats"],
    preview: "/t3.png",
    component: ClassicTemplate,
  },
  {
    id: "classic-clean",
    name: "Classic Clean",
    category: ["classic", "single-column"],
    preview: "/t4.png",
    component: DefaultTemplate,
  },
  {
    id: "minimal-light",
    name: "Minimal Light",
    category: ["minimal", "no-photo"],
    preview: "/t5.png",
    component: DefaultTemplate,
  },
  {
    id: "minimal-grid",
    name: "Minimal Grid",
    category: ["minimal", "two-column"],
    preview: "/t6.png",
    component: DefaultTemplate,
  },
  {
    id: "executive-prime",
    name: "Executive Prime",
    category: ["executive", "premium"],
    preview: "/t7.png",
    component: DefaultTemplate,
  },
  {
    id: "executive-dark",
    name: "Executive Dark",
    category: ["executive"],
    preview: "/t8.png",
    component: DefaultTemplate,
  },
  {
    id: "creative-bold",
    name: "Creative Bold",
    category: ["creative", "with-photo"],
    preview: "/t9.png",
    component: DefaultTemplate,
  },
  {
    id: "creative-split",
    name: "Creative Split",
    category: ["creative", "two-column"],
    preview: "/t10.png",
    component: DefaultTemplate,
  },
  {
    id: "ats-simple",
    name: "ATS Simple",
    category: ["ats", "single-column"],
    preview: "/t11.png",
    component: DefaultTemplate,
  },
  {
    id: "ats-clean",
    name: "ATS Clean",
    category: ["ats", "minimal"],
    preview: "/t12.png",
    component: DefaultTemplate,
  },
  {
    id: "starter-one",
    name: "Starter One",
    category: ["free"],
    preview: "/t13.png",
    component: DefaultTemplate,
  },
  {
    id: "starter-two",
    name: "Starter Two",
    category: ["free", "minimal"],
    preview: "/t14.png",
    component: DefaultTemplate,
  },
  {
    id: "profile-pro",
    name: "Profile Pro",
    category: ["with-photo", "modern"],
    preview: "/t15.png",
    component: DefaultTemplate,
  },
  {
    id: "profile-edge",
    name: "Profile Edge",
    category: ["with-photo", "creative"],
    preview: "/t16.png",
    component: DefaultTemplate,
  },
  {
    id: "grid-resume",
    name: "Grid Resume",
    category: ["two-column", "modern"],
    preview: "/t17.png",
    component: DefaultTemplate,
  },
  {
    id: "simple-ats",
    name: "Simple ATS",
    category: ["ats", "no-photo"],
    preview: "/t18.png",
    component: DefaultTemplate,
  },
  {
    id: "pro-clean",
    name: "Pro Clean",
    category: ["premium", "minimal"],
    preview: "/t19.png",
    component: DefaultTemplate,
  },
  {
    id: "pro-elegant",
    name: "Pro Elegant",
    category: ["premium", "executive"],
    preview: "/t20.png",
    component: DefaultTemplate,
  },
]