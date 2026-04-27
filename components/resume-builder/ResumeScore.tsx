"use client"

import { useMemo } from "react"
import { useResumeBuilder } from "@/context/resume-builder.context"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { calculateResumeScore } from "@/lib/resume-progress"

const COLORS = {
  primary: "#4f46e5",
  muted: "#e5e7eb",
  text: "#111827",
}

function CircleProgress({ value }: { value: number }) {
  const size = 64
  const stroke = 5
  const radius = (size - stroke) / 2
  const circumference = 2 * Math.PI * radius

  const offset =
    circumference - (value / 100) * circumference

  return (
    <svg
      width={size}
      height={size}
      className="shrink-0"
    >
      {/* BACK */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={COLORS.muted}
        strokeWidth={stroke}
        fill="transparent"
      />

      {/* PROGRESS */}
      <circle
        cx={size / 2}
        cy={size / 2}
        r={radius}
        stroke={COLORS.primary}
        strokeWidth={stroke}
        fill="transparent"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={offset}
        className="transition-all duration-500 ease-out"
        style={{
          transform: "rotate(-90deg)",
          transformOrigin: "50% 50%",
        }}
      />

      {/* TEXT */}
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dominantBaseline="middle"
        fill={COLORS.primary}
        className="text-blue-500 text-[11px] font-semibold"
      >
        {value}%
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
      <PopoverTrigger asChild>
        <button className="flex items-center gap-3 hover:scale-[1.02] transition-transform">
          <CircleProgress value={data.score}  />

          <div className="text-left">
            <p className="text-sm font-medium">
              Resume Score
            </p>
            <p className="text-xs text-muted-foreground">
              {data.score >= 80
                ? "Strong profile"
                : "Needs improvement"}
            </p>
          </div>
        </button>
      </PopoverTrigger>

      <PopoverContent
        align="end"
        className="w-80 space-y-4"
      >
        {/* HEADER */}
        <div>
          <h3 className="font-semibold">
            AI Resume Analysis
          </h3>
          <p className="text-sm text-muted-foreground">
            Your resume is {data.score}% optimized
          </p>
        </div>

        {/* INSIGHTS */}
        <div className="space-y-2">
          <p className="text-sm font-medium">
            Recommendations
          </p>

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
                  <span className="text-primary mt-[2px]">•</span>
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* FOOTER HINT */}
        <p className="text-xs text-muted-foreground">
          Improve your score to increase recruiter visibility.
        </p>
      </PopoverContent>
    </Popover>
  )
}