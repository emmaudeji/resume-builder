"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { getTemplateById } from "./TemplateRegistry"
import { useMemo, useState, useEffect } from "react"
import { applyThemeVariables } from "@/lib/theme-engine"
import { getSampleResume } from "@/lib/sample-resume"
import { PreviewToggle } from "./PreviewToggle"
import { A4Page } from "../resume-templates/A4Page"

export function ResumeRenderer() {
  const { resume } = useResumeBuilder()
  const [preview, setPreview] = useState(false)
  const [scale, setScale] = useState(1)

  useEffect(() => {
    const updateScale = () => {
      if (window.innerWidth < 640) setScale(0.6)
      else if (window.innerWidth < 1024) setScale(0.8)
      else setScale(1)
    }

    updateScale()
    window.addEventListener("resize", updateScale)
    return () => window.removeEventListener("resize", updateScale)
  }, [])

  const activeResume = useMemo(() => {
    if (!preview) return resume

    const sample = getSampleResume()
    return {
      ...sample,
      theme: resume.theme,
      templateId: resume.templateId,
    }
  }, [preview, resume])

  const template = getTemplateById(activeResume.theme.template)

  const TemplateComponent = useMemo(
    () => template.component,
    [template.id]
  )

  return (
    <div className="relative w-full h-full">
      <PreviewToggle preview={preview} setPreview={setPreview} />

      <div className="w-full overflow-auto flex justify-center">
        <div
          className="origin-top"
          style={{
            transform: `scale(${scale})`,
          }}
        >
          <div style={applyThemeVariables(activeResume.theme)}>
            <A4Page>
              <TemplateComponent resume={activeResume} />
            </A4Page>
          </div>
        </div>
      </div>
    </div>
  )
}