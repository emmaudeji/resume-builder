"use client"

import { ReactNode, useMemo } from "react"
import { applyThemeVariables } from "@/lib/theme-engine"
import { Theme } from "@/types/resume"

export function ThemeProvider({
  theme,
  children,
}: {
  theme: Theme
  children: ReactNode
}) {
  const style = useMemo(() => applyThemeVariables(theme), [theme])

  return (
    <div
      style={style}
      className="w-full text-[var(--resume-font-size)] leading-[var(--resume-line-height)] font-[var(--resume-font-family)]"
    >
      {children}
    </div>
  )
}

// const [theme, setTheme] = useState(resume.theme)

// <ThemeProvider theme={theme}>
//   <ResumeRenderer resume={resume} />
// </ThemeProvider>