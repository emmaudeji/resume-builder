"use client"

import { Button } from "@/components/ui/button"
import { useResumeBuilder } from "@/context/resume-builder.context"

export function ResumePreviewControls({
  viewing,
  onToggle ,
  setUseSample
}: {
  onToggle: (viewing: "sample" | "resume" | "template") => void
  viewing: "sample" | "resume" | "template"
  setUseSample: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const { resetTheme, resume } = useResumeBuilder()

  console.log('TEMPLATE', resume.theme.template)
  return (
    <div className=" p-0.5 flex justify-self-center rounded-md overflow-clip bg-background border gap-0 divide-x">
     <Button
        size="sm"
        variant={viewing==="resume" ? "default" : "ghost"}
        onClick={() =>{
             onToggle("resume")
                setUseSample(false)
            }}
        className="  h-8"
      >
        Resume
      </Button>
      
      {/* Toggle Sample */}
      <Button
        size="sm"
        variant={viewing==="sample" ? "default" : "ghost"}
        onClick={() => {
          onToggle("sample")
          setUseSample(true)
        }}
        className=" -none h-8"
      >
        Sample
      </Button>

      {/* Template Picker */}
      {/* <Button
        size="sm"
        variant={viewing==="template" ? "default" : "ghost"}
        onClick={() => {
          onToggle("template")
          setUseSample(false)
        }}
        className=" -none h-8"
      >
        Templates
      </Button> */}

      <Button
        size="sm"
        variant={"secondary"}
        className=" -none h-8"
        onClick={resetTheme}
      >
        Reset Theme
      </Button>

      
    </div>
  )
}