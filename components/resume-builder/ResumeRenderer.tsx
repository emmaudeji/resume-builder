"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { getTemplateById } from "./TemplateRegistry"
import { useEffect, useMemo, useState } from "react"
import { applyThemeVariables } from "@/lib/theme-engine"
import { ResumePreviewControls } from "./ResumePreviewControls"
import { SAMPLE_RESUME } from "@/constants/sample-resume"
import { TemplateTab } from "../resume-theme-templates/TemplateTab"
import { ResumePreviewScale } from "./ResumePreviewScale"

export function ResumeRenderer({
  templateId,
}: {
  templateId?: string
}) {
  const { resume, update } = useResumeBuilder()
  console.log("kkkkkkkkk", {templateId,  })

  const [useSample, setUseSample] = useState(false)
  const [viewing, setViewing] =
    useState<"resume" | "sample" | "template">("resume")

  // ✅ sync server prop → context (safe + optimized)
  useEffect(() => {
    if (!templateId) return

    const currentTemplate = resume?.theme?.template
  console.log({templateId, currentTemplate})

    // prevent unnecessary updates
    if (currentTemplate === templateId) return
  console.log("========", {templateId, currentTemplate})

    update("theme", {
      ...resume.theme,
      template: templateId,
    })
  }, [templateId, resume?.theme?.template, update])

  // fallback safety
  const activeResume = useSample
    ? { ...SAMPLE_RESUME, theme: resume.theme }
    : resume

  const template = useMemo(() => {
    return getTemplateById(activeResume.theme.template)
  }, [activeResume.theme.template])

  const TemplateComponent = template.component

  return (
    <div className="relative w-full h-full flex flex-col items-center space-y-1">

      <ResumePreviewControls
        viewing={viewing}
        onToggle={setViewing}
        setUseSample={setUseSample}
      />

      {viewing === "template" ? (
        <TemplateTab />
      ) : (
        <ResumePreviewScale>
          <div
            className="bg-white overflow-hidden text-[var(--resume-font-size)] leading-[var(--resume-line-height)] font-[var(--resume-font-family)]"
            style={{
              ...applyThemeVariables(activeResume.theme),
              width: "794px",
              height: "1123px",
            }}
          >
            <TemplateComponent resume={activeResume} />
          </div>
        </ResumePreviewScale>
      )}
    </div>
  )
}