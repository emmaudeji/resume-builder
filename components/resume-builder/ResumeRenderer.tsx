// Renderer.tsx
import { useResumeBuilder } from "@/context/resume-builder.context"
import { TEMPLATE_REGISTRY } from "./TemplateRegistry"
import { Resume } from "@/types/resume"

export function ResumeRenderer( ) {
  const {resume} = useResumeBuilder()
  const Template =
    TEMPLATE_REGISTRY[resume.theme.templateId as keyof typeof TEMPLATE_REGISTRY] ||
    TEMPLATE_REGISTRY["modern"]

  return (
    <div 
        className="w-full h-full"
        style={{
            ["--resume-primary" as string]: resume.theme.color,
            ["--resume-font" as string]: resume.theme.font,
        }}
    >
      <Template resume={resume} />
    </div>
  )
}

// style={{
//   ["--resume-primary" as any]: resume.theme.color,
//   ["--resume-secondary" as any]: "#64748b",
//   ["--resume-heading" as any]: "#111827",
// }}
{/* <h1 className="text-[color:var(--resume-heading)]"></h1> */}
{/* <p className="text-[color:var(--resume-secondary)]"></p> */}