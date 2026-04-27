"use client"

import React, { createContext, useContext, useMemo, useCallback, useState } from "react"
import { Resume, SectionType } from "@/types/resume"
import { initialResume } from "@/constants/resume-constants"
import { validatePersonal } from "@/validators"

type Step = SectionType | "review"
 
type StepErrors = Partial<Record<Step, Record<string, string>>>

type ResumeBuilderContextType = {
  resume: Resume
  step: Step
  errors: StepErrors

  // navigation
  next: () => void
  prev: () => void
  goTo: (step: Step) => void

  // update
  update: <K extends keyof Resume>(key: K, value: Partial<Resume[K]>) => void

  // validation
  validateStep: (step: Step) => boolean
  validateAll: () => boolean

  // submit
  submit: (mode: "draft" | "publish") => Promise<void>
}

const ResumeBuilderContext = createContext<ResumeBuilderContextType | null>(null)

// 🔥 STEP NAVIGATION
  const steps: Step[] = [
    "personal",
    "experience",
    "education",
    "skills",
    "projects",
    "certifications",
    "summary",
    "review",
    // "custom"
  ]

export function ResumeBuilderProvider({
  children,
  initialData = initialResume,
  persist = true,
}: {
  children: React.ReactNode
  initialData?: Partial<Resume>
  persist?: boolean
}) {
  
  // 🔥 INIT FROM LOCALSTORAGE (no useEffect)
  const [resume, setResume] = useState<Resume>(() => {
    if (persist) {
      const stored = typeof window !== "undefined"
        ? localStorage.getItem("resume_draft")
        : null

      if (stored) return JSON.parse(stored)
    }
    return initialData
  })

  const [step, setStep] = useState<Step>("personal")
  const [errors, setErrors] = useState<StepErrors>({})

  // 🔥 UPDATE FUNCTION (memoized)
  const update = useCallback(
     (key:keyof Resume, value:Partial<Resume[keyof Resume]>) => {
      setResume((prev) => {
        const updated = {
          ...prev,
          [key]: {
            ...prev[key],
            ...value,
          },
          updatedAt: new Date().toISOString(),
        }

        if (persist) {
          localStorage.setItem("resume_draft", JSON.stringify(updated))
        }

         // 🧠 clear errors for this section
          setErrors((prevErrors) => {
            const newErrors = { ...prevErrors }

            if (key === "personal") {
              const personalErrors = { ...(newErrors.personal || {}) }

              Object.keys(value).forEach((field) => {
                delete personalErrors[field]
              })

              newErrors.personal = personalErrors
            }

            return newErrors
          })


        return updated
      })
    },
    [persist]
  )

  // 🔥 VALIDATION ENGINE
const validateStep = useCallback(
  (step: Step): boolean => {
    let errs: Record<string, string> = {}

    switch (step) {
      case "personal":
        errs = validatePersonal(resume.personal)
        break
    }

    setErrors((prev) => ({
      ...prev,
      [step]: errs,
    }))

    return Object.keys(errs).length === 0
  },
  [resume]
)
  const validateAll = useCallback(() => {
       return steps.every((s) => validateStep(s))
  }, [validateStep])

  const next = useCallback(() => {
    const isValid = validateStep(step)

    if (!isValid) return

    const index = steps.indexOf(step)

    if (index < steps.length - 1) {
      setStep(steps[index + 1])
    }
  }, [step, validateStep])

  const prev = useCallback(() => {
    const idx = steps.indexOf(step)
    if (idx > 0) setStep(steps[idx - 1])
  }, [step])

  const goTo = useCallback((s: Step) => setStep(s), [])

  // 🔥 SUBMIT
  const submit = useCallback(
    async (mode: "draft" | "publish") => {
      if (mode === "publish" && !validateAll()) return

      // call API
      console.log("Submitting", mode, resume)

      if (mode === "publish") {
        localStorage.removeItem("resume_draft")
      }
    },
    [resume, validateAll]
  )

  const value = useMemo(
    () => ({
      resume,
      step,
      errors,
      next,
      prev,
      goTo,
      update,
      validateStep,
      validateAll,
      submit,
    }),
    [resume, step, errors, next, prev, goTo, update, validateStep, validateAll, submit]
  )

  return (
    <ResumeBuilderContext.Provider value={value}>
      {children}
    </ResumeBuilderContext.Provider>
  )
}

export const useResumeBuilder = () => {
  const ctx = useContext(ResumeBuilderContext)
  if (!ctx) throw new Error("Must be used within provider")
  return ctx
}