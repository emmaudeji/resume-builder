"use client"

import { Progress } from "@/components/ui/progress"

export function LineHeightControl({
  value,
  onChange,
}: {
  value: number
  onChange: (v: number) => void
}) {
  const min = 1.2
  const max = 2

  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-2">

      {/* LABEL */}
      <div className="flex justify-between text-sm">
        <span>Line Height</span>
        <span className="text-muted-foreground">{value.toFixed(1)}</span>
      </div>

      {/* SLIDER */}
      <div className="relative w-full">

        {/* 🔥 PROGRESS */}
        <Progress value={percentage} className="h-2" />

        {/* 🎯 THUMB */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow transition"
          style={{
            left: `calc(${percentage}% - 8px)`,
          }}
        />

        {/* 🎮 INTERACTION */}
        <input
          type="range"
          min={min}
          max={max}
          step={0.1}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  )
}