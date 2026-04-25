import { Resume } from "@/types/resume";

export function ClassicTemplate({ resume }: { resume: Resume }) {
    const sections = [...resume.sections]
        .filter((s) => s.visible)
        .sort((a,b) => a.order - b.order)

  return (
    <div 
        className="grid grid-cols-3 gap-6 p-8">
      <div className="col-span-1 bg-[color:var(--resume-primary)]">
        {/* sidebar sections */}
      </div>

      <div className="col-span-2">
        {/* main sections */}
      </div>
    </div>
  )
}