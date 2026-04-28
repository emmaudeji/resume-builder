// Renderer.tsx
import { useResumeBuilder } from "@/context/resume-builder.context"
import { getTemplateById, TemplateProp } from "./TemplateRegistry"
import { useMemo } from "react"

export function ResumeRenderer( ) {
  const {resume} = useResumeBuilder()
  const theme = resume.theme

  const template = getTemplateById(theme.template)

const TemplateComponent = useMemo(
  () => template.component,
  [template.id]
) 
  return (
    <div 
        className="w-full h-full"
        style={{
          ["--primary" as any]: theme.primary,
 
          ["--radius" as any]: "0.5rem",

          ["--font-size" as any]: `${theme.font_size}px`,
          ["--line-height" as any]: theme.line_height,
          ["--font-family" as any]: theme.font_family,
         
        }}
    >
      <TemplateComponent resume={resume} />
    </div>
  )
}
 