// templates/Modern.tsx
import { Resume } from "@/types/resume"
import { renderSection } from "../resume-builder/renderSection"
 
export function ModernTemplate({ resume }: { resume: Resume }) {
  const sections = [...resume.sections]
    .filter((s) => s.visible)
    .sort((a,b) => a.order - b.order)

    // text-[color:var(--resume-primary)]
    // bg-[color:var(--resume-primary)]
    // border-[color:var(--resume-primary)]

  return (
    <div
      className="p-8 bg-white text-black "
      style={{
        fontFamily: resume.theme.font,
      }}
    >
      {sections.map((section) => (
        <div key={section.id} className="mb-6">
          {renderSection(section)}
        </div>
      ))}
    </div>
  )
}