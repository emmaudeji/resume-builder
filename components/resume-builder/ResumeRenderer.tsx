// Renderer.tsx
import { useResumeBuilder } from "@/context/resume-builder.context"
import { TEMPLATE_REGISTRY } from "./TemplateRegistry"
import { Resume } from "@/types/resume"

export function ResumeRenderer( ) {
  const {resume} = useResumeBuilder()
  const theme = resume.theme

  const Template =
    TEMPLATE_REGISTRY[resume.templateId as keyof typeof TEMPLATE_REGISTRY] ||
    TEMPLATE_REGISTRY["modern"]

  return (
    <div 
        className="w-full h-full"
        style={{
          ["--primary" as any]: theme.primary,
          ["--font-size" as any]: `${theme.font_size}px`,
          ["--line-height" as any]: theme.line_height,
          ["--radius" as any]: "0.5rem",
        }}
    >
      <div
 
></div>
      <Template resume={resume} />
    </div>
  )
}
 