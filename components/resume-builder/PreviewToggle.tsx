// components/PreviewToggle.tsx

"use client"

import { Eye, Pencil } from "lucide-react"
import { cn } from "@/lib/utils"

export function PreviewToggle({
  preview,
  setPreview,
}: {
  preview: boolean
  setPreview: (v: boolean) => void
}) {
  return (
    <div className="absolute top-3 right-3 z-10">
      <button
        onClick={() => setPreview(!preview)}
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs transition",
          preview
            ? "bg-primary text-white"
            : "bg-background hover:bg-muted"
        )}
      >
        {preview ? <Pencil size={14} /> : <Eye size={14} />}
        {preview ? "Edit Mode" : "Preview Sample"}
      </button>
    </div>
  )
}