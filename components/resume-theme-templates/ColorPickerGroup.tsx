"use client"

import { cn } from "@/lib/utils"
import { Theme } from "@/types/resume"

 

const COLORS = [
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
  return (
    <div className="space-y-3">
      
      <div>
        <h3 className="text-sm font-medium">Brand Color</h3>
        <p className="text-xs text-muted-foreground">
          This defines your resume identity
        </p>
      </div>

      <div className="flex gap-2">
        {COLORS.map((color) => (
          <button
            key={color}
            onClick={() =>
              onChange({ ...theme, primary: color })
            }
            className={cn(
              "w-7 h-7 rounded-full border transition",
              theme.primary === color && "scale-110 border-black"
            )}
            style={{ backgroundColor: color }}
          />
        ))}
      </div>

      {/* TEXT SETTINGS QUICK EDIT */}
      <div className="grid grid-cols-2 gap-3 pt-3">
        <select
          value={theme.font_family}
          onChange={(e) =>
            onChange({
              ...theme,
              font_family: e.target.value,
            })
          }
          className="border rounded-md p-2 text-sm"
        >
          <option value="inter">Inter</option>
          <option value="poppins">Poppins</option>
          <option value="serif">Serif</option>
        </select>

        <select
          value={theme.density}
          onChange={(e) =>
            onChange({
              ...theme,
              density: e.target.value as any,
            })
          }
          className="border rounded-md p-2 text-sm"
        >
          <option value="compact">Compact</option>
          <option value="normal">Normal</option>
          <option value="spacious">Spacious</option>
        </select>
      </div>
    </div>
  )
}