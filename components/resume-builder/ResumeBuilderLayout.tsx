"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { useState } from "react"
import { Button } from "../ui/button"
import { cn } from "@/lib/utils"
import { ResumeFormStepRenderer } from "../resume-forms/ResumeFormStepRenderer"
import { AppSheet } from "../shared/AppSheet"
import { Grid2X2 } from "lucide-react"
import { ResumeRenderer } from "./ResumeRenderer"
import { ResumeFormLayout } from "../resume-forms/ResumeFormLayout"

const ResumeBuilderLayout = () => {
  const [type, setType] = useState<"edit" | "customize">("edit")
  const { step } = useResumeBuilder()

  return (
    <section className="flex flex-col h-screen bg-muted/30">
      
      {/* 🔥 HEADER */}
      <header className="sticky  top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex items-center justify-between px-4 py-3">

          {/* LEFT */}
          <div className="flex items-center gap-3">
            <h2 className="font-semibold text-sm text-muted-foreground">
              Resume Builder
            </h2>

            {/* STEP INDICATOR */}
            <span className="text-xs bg-muted px-2 py-1 rounded-md">
              {step}
            </span>
          </div>

          {/* CENTER (SEGMENT CONTROL) */}
          <div className="hidden md:flex items-center bg-muted p-1 rounded-lg">
            {[
              { label: "Edit", value: "edit" },
              { label: "Customize", value: "customize" },
            ].map(({ label, value }) => (
              <button
                key={value}
                onClick={() => setType(value as typeof type)}
                className={cn(
                  "px-4 py-1.5 text-sm w-28 rounded-md transition-all duration-200",
                  type === value
                    ? "bg-background shadow text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-2">
            <AppSheet
              trigger={
                <Button size="sm" variant="outline" className="md:hidden">
                  <Grid2X2 className="w-4 h-4 mr-2" />
                  Preview
                </Button>
              }
              className="p-0"
            >
              <div className="bg-muted p-4">
                 <ResumeRenderer />
              </div>
            </AppSheet>
          </div>
        </div>
      </header>

      {/* 🔥 MAIN */}
      <section className="grid flex-1 md:grid-cols-2 overflow-hidden">
        
        {/* 🧾 LEFT PANEL */}
        <aside className="border-r w-full bg-background overflow-y-auto">
           
            {type === "edit" ? (
              <ResumeFormLayout />
            ) : (
              <div>ThemeCustomization</div>
            )}
           
        </aside>

        {/* 🖥️ RIGHT PANEL (PREVIEW CANVAS) */}
        <main className="hidden md:flex items-start justify-center overflow-auto bg-muted/40 p-6">
           <ResumeRenderer />
        </main>
      </section>
    </section>
  )
}

export default ResumeBuilderLayout