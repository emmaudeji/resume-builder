"use client"

import * as React from "react"
import { HexColorPicker } from "react-colorful"
import tinycolor from "tinycolor2"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import { cn } from "@/lib/utils"

type ColorPickerProps = {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void

  // 🔥 UI control
  className?: string
  trigger?: React.ReactNode
  showValue?: boolean
}

export function ColorPicker({
  value,
  defaultValue = "#6366f1",
  onChange,
  className,
  trigger,
  showValue = true,
}: ColorPickerProps) {
  const isControlled = value !== undefined

  const [internalColor, setInternalColor] = React.useState(defaultValue)

  const color = isControlled ? value! : internalColor

  const updateColor = React.useCallback(
    (newColor: string) => {
      if (!isControlled) {
        setInternalColor(newColor)
      }
      onChange?.(newColor)
    },
    [isControlled, onChange]
  )

  // 🔥 normalize color (avoid weird picker bugs)
  const safeColor = React.useMemo(() => {
    const tc = tinycolor(color)
    return tc.isValid() ? tc.toHexString() : "#6366f1"
  }, [color])

  return (
    <Popover>
      <PopoverTrigger asChild>
        {trigger ? (
          trigger
        ) : (
          <button
            className={cn(
              "w-10 h-10 rounded-full border shadow-sm hover:scale-105 transition",
              className
            )}
            style={{ background: safeColor }}
          />
        )}
      </PopoverTrigger>

      <PopoverContent className="w-fit  space-y- ">
        {/* 🎨 Picker */}
        <HexColorPicker
          color={safeColor}
          onChange={updateColor}
        //   className="w-full"
        //   style={{
        //     width:'220px'
        //   }}
        />

        {/* 🔢 HEX DISPLAY */}
        {showValue && (
          <div className="flex w-full items-center gap-0">
            <input
              value={safeColor}
              onChange={(e) => updateColor(e.target.value)}
              className="h-6 w-44 text-sm px-2 py-1 border rounded-l bg-background"
            />

            {/* preview */}
            <div
              className="w-6 h-6 shrink-0 rounded-r border"
              style={{ background: safeColor }}
            />
          </div>
        )}
      </PopoverContent>
    </Popover>
  )
}