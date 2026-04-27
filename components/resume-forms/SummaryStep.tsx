"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import { Sparkles, Wand2 } from "lucide-react"

export function SummaryStep() {
  const { resume, update } = useResumeBuilder()

  const summary = resume.summary.summary || ""

  const handleChange = useCallback(
    (val: string) => {
      update("summary", { summary: val })
    },
    [update]
  )

  return (
    <div className="space-y-5">

      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">Professional Summary</h2>
        <p className="text-sm text-muted-foreground">
          This is your first impression. Make it count.
        </p>
      </div>

      {/* 🔥 AI-LIKE GUIDANCE */}
      <div className="text-sm text-muted-foreground space-y-1">
        <p>• Start with your role and years of experience</p>
        <p>• Highlight 2–3 key achievements or strengths</p>
        <p>• Include relevant keywords for your industry (ATS friendly)</p>
      </div>

      {/* ✍️ TEXTAREA */}
      <CustomInput
        label="Summary"
        isTextArea
        value={summary}
        onChange={(e) => handleChange(e.target.value)}
        placeholder="e.g Software Engineer with 4+ years of experience building scalable web applications. Proven track record of improving performance and delivering user-focused solutions."
        innerwrapperStyle="min-h-[140px]"
      />

      {/* 🔥 FUTURE AI ACTIONS */}
      <div className="flex items-center gap-2 flex-wrap">

        <Button
          type="button"
          variant="secondary"
          size="sm"
          className="text-xs gap-1"
          disabled
        >
          <Sparkles size={14} />
          Generate with AI
        </Button>

        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="text-xs gap-1"
          disabled
        >
          <Wand2 size={14} />
          Improve writing
        </Button>

        <span className="text-xs text-muted-foreground">
          AI features coming soon
        </span>
      </div>

      {/* 💡 ATS TIP */}
      <div className="text-xs text-muted-foreground bg-muted/50 px-3 py-2 rounded-md">
        Recruiters spend seconds scanning resumes. Keep it concise, impactful, and keyword-rich.
      </div>
    </div>
  )
}