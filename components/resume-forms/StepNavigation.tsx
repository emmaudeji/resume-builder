"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { cn } from "@/lib/utils"
import { Check } from "lucide-react"
import { useMemo, useCallback } from "react"

const steps = [
  { key: "personal", label: "Personal" },
  { key: "experience", label: "Experience" },
  { key: "education", label: "Education" },
  { key: "skills", label: "Skills" },
  { key: "projects", label: "Projects" },
  { key: "certifications", label: "Certifications" },
  { key: "summary", label: "Summary" },
  { key: "review", label: "Review" },
] as const

export function StepNavigation() {
  const { step, goTo, validateStep, resume } = useResumeBuilder()

  // 🧠 VALID STATE (only strict on personal)
  const isPersonalValid = useMemo(() => {
    const p = resume.personal
    return (
      p.first_name?.trim() &&
      p.last_name?.trim() &&
      p.email?.includes("@") &&
      p.job_title?.trim()
    )
  }, [resume.personal])

  // 🔐 LOCK LOGIC
  const isLocked = useCallback(
    (targetIndex: number, currentIndex: number) => {
      // only enforce lock for moving forward from personal
      if (currentIndex === 0 && !isPersonalValid) {
        return targetIndex > currentIndex
      }
      return false
    },
    [isPersonalValid]
  )

  // 🧠 HANDLE CLICK
  const handleClick = useCallback(
    (key: string, index: number) => {
      const currentIndex = steps.findIndex(
        (s) => s.key === step
      )

      if (isLocked(index, currentIndex)) {
        validateStep("personal") // trigger errors
        return
      }

      goTo(key as any)
    },
    [step, goTo, isLocked, validateStep]
  )

  return (
    <div className="flex items-center gap-2 overflow-x-auto   mini-scrollbar">

    {steps.map((s, index) => {
        const isActive = step === s.key
        const currentIndex = steps.findIndex(
        (st) => st.key === step
        )

        const completed = index < currentIndex
        const locked = isLocked(index, currentIndex)

        return (
        <button
            key={s.key}
            onClick={() => handleClick(s.key, index)}
            className={cn(
            "flex items-center gap-1 px-1 py-1  rounded-full text-[9px] whitespace-nowrap transition",
            
            // ACTIVE
            isActive &&
                "bg-primary text-primary-foreground shadow",

            // COMPLETED
            completed &&
                "text-primary",

            // LOCKED
            locked &&
                "opacity-40 cursor-not-allowed",

            // DEFAULT
            !isActive &&
                !completed &&
                "text-muted-foreground hover:text-foreground"
            )}
        >
            {/* ICON */}
            <span
            className={cn(
                "w-5 h-5 flex items-center justify-center rounded-full border text-[10px]",

                isActive &&
                "bg-primary-foreground text-primary border-transparent",

                completed &&
                "bg-primary text-white border-transparent",

                !isActive &&
                !completed &&
                "border-muted-foreground"
            )}
            >
            {completed ? <Check size={12} /> : index + 1}
            </span>

            {/* LABEL */}
            <span className="hidden sm:inline">
            {s.label}
            </span>
        </button>
        )
    })}
    </div>
  )
}