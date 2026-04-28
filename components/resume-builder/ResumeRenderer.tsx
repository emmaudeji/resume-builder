import { useResumeBuilder } from "@/context/resume-builder.context"
import { getTemplateById } from "./TemplateRegistry"
import { useMemo } from "react"
import { applyThemeVariables } from "@/lib/theme-engine"

export function ResumeRenderer() {
  const { resume } = useResumeBuilder()
  const theme = resume.theme

  const template = getTemplateById(theme.template)

  const TemplateComponent = useMemo(
    () => template.component,
    [template.id]
  )

  return (
    <div
      className="w-full h-full bg-white"
      style={applyThemeVariables(theme)}
    >
      <TemplateComponent resume={resume} />
    </div>
  )
}

// export const resumeStyles = {
//   section: "flex flex-col",
//   block: "flex flex-col",
//   heading:
//     "text-sm uppercase font-semibold text-[var(--resume-primary)]",
//   text: "text-[var(--resume-font-size)]",
// }

{/* <section
  className={resumeStyles.section}
  style={{ gap: "var(--resume-space-section)" }}
> */}

// {/* <div className="flex flex-col" style={{ gap: "var(--resume-space-section)" }}></div> */}
// className="text-[var(--resume-font-size)] leading-[var(--resume-line-height)] font-[var(--resume-font-family)]"
// className="text-[var(--resume-primary)]"
// className="rounded-[var(--resume-radius)]"
// className="shadow-[var(--resume-shadow)]"