"use client"

import { cn } from "@/lib/utils"

const templates = [
  { id: "modern", name: "Modern", preview: "/t1.png" },
  { id: "classic", name: "Classic", preview: "/t2.png" },
  { id: "minimal", name: "Minimal", preview: "/t3.png" },
  { id: "executive", name: "Executive", preview: "/t4.png" },
]

export function TemplateSelector({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  return (
    <div className="space-y-2">
      <h3 className="text-sm font-medium">Choose Template</h3>
      <p className="text-xs text-muted-foreground">
        Select a layout style for your resume
      </p>

      <div className="grid grid-cols-2 gap-3">
        {templates.map((t) => (
          <button
            key={t.id}
            onClick={() => onChange(t.id)}
            className={cn(
              "group border rounded-lg p-2 transition hover:shadow-md",
              value === t.id && "border-primary shadow-sm"
            )}
          >
            <div className="aspect-[3/4] bg-muted rounded-md mb-2 overflow-hidden">
              {/* replace with image later */}
              <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition" />
            </div>

            <p className="text-xs font-medium">{t.name}</p>
          </button>
        ))}
      </div>
    </div>
  )
}