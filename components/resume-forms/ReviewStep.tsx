"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { Button } from "@/components/ui/button"
import { useMemo } from "react"
import { calculateProgress } from "@/lib/resume-progress"
import { ResumeRenderer } from "../resume-builder/ResumeRenderer"
import { CheckCircle2, AlertCircle, Sparkles } from "lucide-react"

export function ReviewStep() {
  const { resume } = useResumeBuilder()

  const progress = useMemo(
    () => calculateProgress(resume),
    [resume]
  )

  const suggestions = useMemo(() => {
    const s: string[] = []

    if (!resume.summary.summary) {
      s.push("Add a professional summary to stand out")
    }

    if (resume.experience.items.length === 0) {
      s.push("Add at least one work experience")
    }

    if (resume.skills.items.length < 3) {
      s.push("Include more skills to improve ATS match")
    }

    if (!resume.personal.linkedin) {
      s.push("Add LinkedIn profile for credibility")
    }

    return s
  }, [resume])

  return (
    <div className="flex flex-col h-full">

      {/* 🔥 HEADER */}
      <section className="border-b px-5 py-4 flex items-center justify-between">
        
        {/* SCORE */}
        <div className="flex items-center gap-4">
          <div className="text-3xl font-bold text-primary">
            {progress.percentage}%
          </div>

          <div>
            <p className="font-medium">Resume Score</p>
            <p className="text-xs text-muted-foreground">
              {progress.next}
            </p>
          </div>
        </div>

        {/* STATUS */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {progress.percentage > 80 ? (
            <>
              <CheckCircle2 className="text-green-500" size={18} />
              Strong Resume
            </>
          ) : (
            <>
              <AlertCircle className="text-yellow-500" size={18} />
              Needs Improvement
            </>
          )}
        </div>
      </section>

      {/* 🔥 BODY */}
      <section className="grid md:grid-cols-2 gap-4 flex-1 p-4 overflow-hidden">

        {/* 💡 INSIGHTS */}
        <div className="space-y-4 overflow-auto">

          <div>
            <h3 className="font-semibold flex items-center gap-2">
              <Sparkles size={16} />
              Suggestions
            </h3>

            {suggestions.length === 0 ? (
              <p className="text-sm text-muted-foreground">
                You're all set! 🚀 Your resume looks strong.
              </p>
            ) : (
              <ul className="space-y-2 mt-2">
                {suggestions.map((s, i) => (
                  <li
                    key={i}
                    className="text-sm flex gap-2 items-start"
                  >
                    <span className="mt-1 w-1.5 h-1.5 bg-primary rounded-full" />
                    {s}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* OPTIONAL FUTURE AI */}
          <div className="text-xs text-muted-foreground bg-muted/50 p-3 rounded-md">
            AI optimization coming soon — we’ll rewrite and improve your resume automatically.
          </div>
        </div>

        {/* 👀 PREVIEW */}
        {/* <div className="border rounded-lg overflow-hidden bg-background">
          <ResumeRenderer />
        </div> */}
      </section>

      {/* 🔥 FOOTER ACTIONS */}
      {/* <section className="border-t p-4 flex items-center justify-between gap-3">
        
        <Button variant="ghost">
          Back to Edit
        </Button>

        <div className="flex gap-2">
          <Button variant="secondary">
            Save Draft
          </Button>

          <Button>
            Download Resume
          </Button>
        </div>
      </section> */}
    </div>
  )
}