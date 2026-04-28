"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { TemplateSelector } from "./TemplateSelector"
import { ColorPickerGroup } from "./ColorPickerGroup"
 

export function TemplateTab() {
  const { resume, update } = useResumeBuilder()
  
  return (
    <section className=" ">
        {/* COLOR CUSTOMIZATION */}
      <ColorPickerGroup
        theme={resume.theme}
        onChange={(theme) =>
          update("theme", theme)
        }
      />

      {/* TEMPLATE SELECTOR */}
      <TemplateSelector
        value={resume.theme.template}
        onChange={(templateId) =>{
          update("theme", {template:templateId})
        }
        }
      />

      

    </section>
  )
}