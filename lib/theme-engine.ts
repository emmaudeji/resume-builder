// lib/theme-engine.ts

import { Theme } from "@/types/resume"


export function applyThemeVariables(theme: Theme) {
  return {
    "--resume-primary": theme.primary,
    "--resume-secondary": theme.secondary || theme.primary,
    "--resume-accent": theme.accent || theme.primary,

    "--resume-font-family": theme.font_family,
    "--resume-font-secondary": theme.font_secondary || theme.font_family,

    "--resume-font-size": `${theme.font_size}px`,
    "--resume-line-height": theme.line_height,

    "--resume-radius": radiusMap(theme.radius),
    "--resume-shadow": shadowMap(theme.shadow),

    "--resume-density": theme.density,
  } as React.CSSProperties
}

function radiusMap(r?: Theme["radius"]) {
  switch (r) {
    case "none":
      return "0px"
    case "sm":
      return "6px"
    case "md":
      return "10px"
    case "lg":
      return "14px"
    default:
      return "8px"
  }
}

function shadowMap(s?: Theme["shadow"]) {
  switch (s) {
    case "none":
      return "none"
    case "soft":
      return "0 1px 2px rgba(0,0,0,0.05)"
    case "medium":
      return "0 4px 10px rgba(0,0,0,0.08)"
    default:
      return "none"
  }
}

// ai generator syntax
export function generateTheme(prompt: string): Theme {
  return {
    id: crypto.randomUUID(),
    name: "AI Generated",
    primary: "#111827",
    mode: "light",
    font_family: "inter",
    font_size: 15,
    line_height: 1.6,
    density: "normal",
    radius: "md",
    style: "modern",
    shadow: "soft",
  }
}