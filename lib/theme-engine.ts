// lib/theme-engine.ts

import { Theme } from "@/types/resume"

export function applyThemeVariables(theme: Theme) {
  return {
    // 🎨 Colors
    "--resume-primary": theme.primary,
    "--resume-secondary": theme.secondary || theme.primary,
    "--resume-accent": theme.accent || theme.primary,

    // ✍️ Typography
    "--resume-font-family": theme.font_family,
    "--resume-font-secondary": theme.font_secondary || theme.font_family,
    "--resume-font-size": `${theme.font_size}px`,
    "--resume-line-height": theme.line_height,

    // 🧱 UI Tokens
    "--resume-radius": radiusMap(theme.radius),
    "--resume-shadow": shadowMap(theme.shadow),

    // 📏 Spacing system (NEW 🔥)
    ...densityMap(theme.density),
  } as React.CSSProperties
}

// ---------------------------------------------
// MAPS
// ---------------------------------------------

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

// 🔥 THIS replaces getSpacing()
function densityMap(d?: Theme["density"]) {
  switch (d) {
    case "compact":
      return {
        "--resume-space-section": "16px",
        "--resume-space-block": "6px",
      }
    case "spacious":
      return {
        "--resume-space-section": "32px",
        "--resume-space-block": "12px",
      }
    default:
      return {
        "--resume-space-section": "24px",
        "--resume-space-block": "8px",
      }
  }
}

export const resumeStyles = {
  section: "flex flex-col",
  block: "flex flex-col",
  heading:
    "text-sm uppercase font-semibold text-[var(--resume-primary)]",
  text: "text-[var(--resume-font-size)]",
}

// ai generator syntax
// export function generateTheme(prompt: string): Theme {
//   return {
//     id: crypto.randomUUID(),
//     name: "AI Generated",
//     primary: "#111827",
//     mode: "light",
//     font_family: "inter",
//     font_size: 15,
//     line_height: 1.6,
//     density: "normal",
//     radius: "md",
//     style: "modern",
//     shadow: "soft",
//   }
// }