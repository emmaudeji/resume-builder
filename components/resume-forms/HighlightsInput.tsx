"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface Props {
  highlights: string[]
  onChange: (val: string[]) => void
}

export function HighlightsInput({ highlights, onChange }: Props) {
  const [value, setValue] = useState("")

  const add = () => {
    if (!value.trim()) return
    onChange([...highlights, value.trim()])
    setValue("")
  }

  const remove = (i: number) => {
    onChange(highlights.filter((_, idx) => idx !== i))
  }

  return (
    <div className=" pb-4 space-y-3">
      
      {/* 🔥 LABEL */}
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium">Key Achievements</p>
      </div>

      {/* ➕ INPUT */}
      <div className="flex items-center gap-2">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="e.g Increased sales by 30%"
          className="h-10"
        />

        <Button
          type="button"
          onClick={add}
          size="icon"
          variant="secondary"
          className="shrink-0"
        >
          <Plus size={16} />
        </Button>
      </div>

      {/* 📌 BULLET LIST */}
      <ul className="space-y-1">
        {highlights.map((h, i) => (
          <li
            key={i}
            className="group flex items-start gap-2 text-sm text-foreground/90"
          >
            {/* BULLET */}
            <span className="mt-1 text-muted-foreground">•</span>

            {/* TEXT */}
            <span className="flex-1 leading-relaxed">{h}</span>

            {/* REMOVE (SUBTLE) */}
            <button
              type="button"
              onClick={() => remove(i)}
              className={cn(
                "opacity-0 group-hover:opacity-100 transition",
                "text-muted-foreground hover:text-destructive"
              )}
            >
              <Trash2 size={14} />
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}