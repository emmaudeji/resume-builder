"use client"

import { useMemo } from "react"
import { useResumeBuilder } from "@/context/resume-builder.context"

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover"

import { Button } from "@/components/ui/button"
import { generateResumeInsights } from "@/lib/resume-progress-calc"

export function ResumeInsights() {
  const { resume } = useResumeBuilder()

  const insights = useMemo(
    () => generateResumeInsights(resume),
    [resume]
  )

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">
          AI Insights
        </Button>
      </PopoverTrigger>

      <PopoverContent className="w-96 space-y-3">
        <div>
          <h3 className="font-semibold">Resume Analysis</h3>
          <p className="text-xs text-muted-foreground">
            Smart suggestions to improve your resume
          </p>
        </div>

        <div className="space-y-2">
          {insights.map((item, i) => (
            <div
              key={i}
              className="p-3 rounded-md border bg-muted/30"
            >
              <p className="font-medium text-sm">
                {item.title}
              </p>
              <p className="text-xs text-muted-foreground">
                {item.message}
              </p>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}