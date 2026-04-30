"use client"

import { useMemo } from "react"
import { useResumeBuilder } from "@/context/resume-builder.context"
import { calculateProgress } from "@/lib/resume-progress"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { ResumeFormStepRenderer } from "./ResumeFormStepRenderer"
import { ChevronLeft, ChevronRight, Check } from "lucide-react"
import { ResumeScore } from "../resume-builder/ResumeScore"
import { StepNavigation } from "./StepNavigation"

export function ResumeFormLayout() {
  const { resume, next, prev, step, submit } = useResumeBuilder()

  const progress = useMemo(() => calculateProgress(resume), [resume])

  const isLastStep = step === "review"

  return (
    <div className="flex flex-col h-full  ">
      
      {/* 🔥 HEADER */}
      <section className="border-b px-5 py-3 bg-background flex items-center gap-3 justify-between">
         <StepNavigation/>

        <ResumeScore />
        
      </section>

      {/* 🧾 BODY */}
      <section className="flex-1 overflow-y-auto mini-scrollbar p-4  w-full  max-w-3xl mx-auto">
        <ResumeFormStepRenderer />
      </section>

      {/* 🚀 FOOTER */}
      <section className="border-t px-5 py-3 bg-background flex items-center justify-between">
        
        {/* LEFT */}
        <Button variant="ghost" onClick={prev}>
          <ChevronLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        {/* RIGHT */}
        <div className="flex items-center gap-2">
          <Button variant="secondary" onClick={() => submit("draft")}>
            Save Draft
          </Button>

          {isLastStep ? (
            <Button onClick={() => submit("publish")}>
              <Check className="w-4 h-4 mr-2" />
              Publish
            </Button>
          ) : (
            <Button onClick={next}>
              Next
              <ChevronRight className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </section>
    </div>
  )
}