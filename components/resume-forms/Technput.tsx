"use client"

import { Input } from "@/components/ui/input"
import { useState } from "react"
import { X } from "lucide-react"

export function TechInput({
  value,
  onChange,
}: {
  value: string[]
  onChange: (val: string[]) => void
}) {
  const [input, setInput] = useState("")

  const add = () => {
    if (!input.trim()) return
    onChange([...value, input.trim()])
    setInput("")
  }

  const remove = (tech: string) => {
    onChange(value.filter((t) => t !== tech))
  }

  return (
    <div className="space-y-2">

      <p className="text-sm font-medium">Technologies</p>

      {/* INPUT */}
      <div className="flex gap-2">
        <Input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && add()}
          placeholder="React, Next.js, Tailwind..."
        />
      </div>

      {/* TAGS */}
      <div className="flex flex-wrap gap-2">
        {value.map((tech) => (
          <div
            key={tech}
            className="flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full"
          >
            {tech}
            <button onClick={() => remove(tech)}>
              <X size={12} />
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}