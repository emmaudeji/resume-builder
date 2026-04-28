"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { FontFamilySelect } from "./FontFamilySelect"
import { FontSizeControl } from "./FontSizeControl"
import { LineHeightControl } from "./LineHeightControl"
import { FONT_OPTIONS } from "@/constants/resume-constants"

export function TextTab() {
  const { resume, update } = useResumeBuilder()
  const theme = resume.theme

  return (
    <div className="space-y-6 p-4 py-8 max-w-2xl mx-auto">

        <div className="grid sm:grid-cols-2 gap-6">
            <FontFamilySelect
                value={theme.font_family}
                onChange={(val) =>
                update("theme", { ...theme, font_family: val })
                }
            />

            <FontFamilySelect
                value={theme.font_secondary || FONT_OPTIONS[0].value}
                onChange={(val) =>
                update("theme", { ...theme, font_secondary: val })
                }
            />
        </div>

      

      <FontSizeControl
        value={theme.font_size}
        onChange={(val) =>
          update("theme", { ...theme, font_size: val })
        }
      />

      <LineHeightControl
        value={theme.line_height}
        onChange={(val) =>
          update("theme", { ...theme, line_height: val })
        }
      />
    </div>
  )
}