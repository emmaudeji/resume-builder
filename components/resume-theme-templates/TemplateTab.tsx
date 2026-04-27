"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { TemplateSelector } from "./TemplateSelector"
import { ColorPickerGroup } from "./ColorPickerGroup"
 

export function TemplateTab() {
  const { resume, update } = useResumeBuilder()

  return (
    <div className="space-y-6">

      {/* TEMPLATE SELECTOR */}
      <TemplateSelector
        value={resume.settings.template}
        onChange={(template) =>
          update("settings", { template })
        }
      />

      {/* COLOR CUSTOMIZATION */}
      <ColorPickerGroup
        theme={resume.theme}
        onChange={(theme) =>
          update("theme", theme)
        }
      />

    </div>
  )
}