"use client"

import { Progress } from "@/components/ui/progress"

export function FontSizeControl({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  const min = 10
  const max = 24

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-2">

      {/* LABEL */}
      <div className="flex justify-between text-sm">
        <span>Font Size</span>
        <span className="text-muted-foreground">{value}px</span>
      </div>

      {/* 🎯 SLIDER WRAPPER */}
      <div className="relative w-full">

        {/* 🔥 PROGRESS (visual layer) */}
        <Progress value={percentage} className="h-2" />
         {/* 🎯 THUMB */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow transition"
          style={{
            left: `calc(${percentage}% - 8px)`,
          }}
        />

        {/* 🎮 RANGE INPUT (interaction layer) */}
        <input
          type="range"
          min={min}
          max={max}
          step={1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="
            absolute inset-0 w-full h-full opacity-0 cursor-pointer
          "
        />

      </div>
    </div>
  )
}