"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { getTemplateById } from "./TemplateRegistry"
import { useMemo, useState } from "react"
import { applyThemeVariables } from "@/lib/theme-engine"
import { ResumePreviewControls } from "./ResumePreviewControls"
import { SAMPLE_RESUME } from "@/constants/sample-resume"
import { TemplateTab } from "../resume-theme-templates/TemplateTab"
import { ResumePreviewScale } from "./ResumePreviewScale"

export function ResumeRenderer() {
  const { resume } = useResumeBuilder()

  const [useSample, setUseSample] = useState(false)

  const activeResume = useSample ? {...SAMPLE_RESUME, theme:  resume.theme } : resume

  const template = getTemplateById(activeResume.theme.template)

  const TemplateComponent = useMemo(
    () => template.component,
    [template.id]
  )

  const [viewing, setViewing] = useState<"resume" | "sample" | "template">('resume')

  return (
    <div className="relative w-full h-full flex flex-col items-center space-y-1">
      
 
      <ResumePreviewControls
        viewing={viewing}
        onToggle={setViewing} 
        setUseSample={setUseSample}
      />

      {
        viewing === "template" ? 
          <TemplateTab /> 
          :
          <ResumePreviewScale>
            <div
              className="bg-white overflow-hidden  text-[var(--resume-font-size)] leading-[var(--resume-line-height)] font-[var(--resume-font-family)]"
              style={{
                ...applyThemeVariables(activeResume.theme),
                width: "794px",
                height: "1123px",
              }}
            >
              <TemplateComponent resume={activeResume} />
            </div>
          </ResumePreviewScale>
      }
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