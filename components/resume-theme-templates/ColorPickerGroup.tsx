"use client"

import { cn } from "@/lib/utils"
import { Theme } from "@/types/resume"
import { useState, useCallback } from "react"
import { Plus, X } from "lucide-react"
 
import { ColorPicker } from "../shared/ColorPicker"

const DEFAULT_COLORS = [
  "#4f46e5",
  "#0ea5e9",
  "#10b981",
  "#f97316",
  "#ef4444",
  "#111827",
]

export function ColorPickerGroup({
  theme,
  onChange,
}: {
  theme: Theme
  onChange: (theme: Theme) => void
}) {
  const [colors, setColors] = useState<string[]>(DEFAULT_COLORS)
  const [pickerColor, setPickerColor] = useState<string>("")
 
  return (
    <div className="space-y-4 py-4 bg-muted/50">

      {/* HEADER */}
      {/* <div className="text-center space-y-1">
        <h4 className="text-xl font-medium">Brand Color</h4>
        <p className="  text-muted-foreground">
          Defines your resume identity
        </p>
      </div> */}

      {/* COLORS */}
      <div className="flex justify-center flex-wrap gap-2">

        {colors.map((color) => (
          <div
            key={color}
            className="relative group"
          >
            {/* COLOR BUTTON */}
            <button
              onClick={() =>
                onChange({ ...theme, primary: color })
              }
              className={cn(
                "w-8 h-8 rounded-full border transition",
                "hover:scale-110",
                theme.primary === color &&
                  "ring-2 ring-offset-2 ring-black"
              )}
              style={{ backgroundColor: color }}
            />
          </div>
        ))}

        <ColorPicker
            value={pickerColor}
            onChange={(color) => {
                onChange({ ...theme, primary: color })
                setPickerColor(color)
            }}
            trigger={
                <button
                    className={cn("w-8 h-8 rounded-full border flex items-center justify-center hover:scale-110 transition",
                    theme.primary === pickerColor &&
                        "ring-2 ring-offset-2 ring-black"
                    )}
                    style={{ backgroundColor: pickerColor }}
                    
                >
                <Plus size={14} />
                </button>
            }
            
        />


      </div>

      {/* PREVIEW */}
      {/* <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
        <span>Selected:</span>
        <div
          className="w-4 h-4 rounded-full border"
          style={{ backgroundColor: theme.primary }}
        />
        <span>{theme.primary}</span>
      </div> */}
    </div>
  )
}