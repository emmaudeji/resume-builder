"use client"

import { useMemo } from "react"
import { useResumeBuilder } from "@/context/resume-builder.context"
 
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"
import { calculateResumeScore } from "@/lib/resume-progress"

const COLORS = {
  primary: "#4f46e5", // modern indigo (matches shadcn vibe)
  muted: "#e5e7eb",
  text: "#111827",
}
function CircleProgress({ value }: { value: number }) {
  const radius = 18
  const stroke = 4
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI

  const strokeDashoffset =
    circumference - (value / 100) * circumference

  const COLORS = {
    primary: "#4f46e5",
    muted: "#e5e7eb",
    text: "#111827",
  }

  return (
    <svg height={80} width={80}>
      {/* BACK CIRCLE */}
      <circle
        stroke={COLORS.muted}
        fill="transparent"
        strokeWidth={stroke}
        r={normalizedRadius}
        cx={24}
        cy={24}
      />

      {/* PROGRESS CIRCLE */}
      <circle
        stroke={COLORS.primary}
        fill="transparent"
        strokeWidth={stroke}
        strokeLinecap="round"
        strokeDasharray={`${circumference} ${circumference}`}
        strokeDashoffset={strokeDashoffset}
        r={normalizedRadius}
        cx={24}
        cy={24}
        style={{
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />

      {/* TEXT */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy=".3em"
        fill={COLORS.text}
        className="text-xs font-semibold"
      >
        {value}
      </text>
    </svg>
  )
}

export function ResumeScore() {
  const { resume } = useResumeBuilder()

  const data = useMemo(
    () => calculateResumeScore(resume),
    [resume]
  )

  return (
    <Popover>
      <PopoverTrigger asChild className="shrink-0">
        <button className="flex items-center gap-2 hover:scale-105 transition">
          <CircleProgress value={data.score} />
          <div className="text-xs md:text-sm">
            <p className="font-medium">Resume Score</p>
            <p className="text-muted-foreground text-xs">
              Click for insights
            </p>
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent className="w-80 space-y-3">
        <div>
          <h3 className="font-semibold">AI Resume Analysis</h3>
          <p className="text-sm text-muted-foreground">
            Your resume is {data.score}% optimized
          </p>
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Recommendations</p>

          {data.insights.length === 0 ? (
            <p className="text-sm text-green-600">
              Your resume looks great 🚀
            </p>
          ) : (
            <ul className="space-y-1">
              {data.insights.map((item, i) => (
                <li
                  key={i}
                  className="text-sm text-muted-foreground flex gap-2"
                >
                  <span className="text-primary">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}