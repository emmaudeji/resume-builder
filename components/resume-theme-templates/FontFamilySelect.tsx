"use client"

import * as React from "react"
import { Check, ChevronsUpDown } from "lucide-react"

import { FONT_OPTIONS } from "@/constants/resume-constants"
import { cn } from "@/lib/utils"

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import {
  Command,
  CommandInput,
  CommandItem,
  CommandList,
  CommandEmpty,
  CommandGroup,
} from "@/components/ui/command"

type Props = {
  value: string
  onChange: (v: string) => void
}

export function FontFamilySelect({ value, onChange }: Props) {
  const [open, setOpen] = React.useState(false)

  return (
    <div className="space-y-1">
      
      {/* LABEL */}
      <p className="text-sm font-medium">
        Font <span className="italic text-muted-foreground">- {value}</span>
      </p>

      {/* POPOVER */}
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <button
            role="combobox"
            className="w-full flex items-center justify-between border rounded-md px-3 py-2 text-sm bg-background hover:bg-muted transition"
          >
            <span style={{ fontFamily: value }}>
              {value || "Select font"}
            </span>

            <ChevronsUpDown className="ml-2 h-4 w-4 opacity-50" />
          </button>
        </PopoverTrigger>

        <PopoverContent className="w-[240px] p-0">
          <Command>
            {/* 🔍 SEARCH */}
            <CommandInput placeholder="Search font..." />

            <CommandList>
              <CommandEmpty>No font found.</CommandEmpty>

              <CommandGroup>
                {FONT_OPTIONS.map((font) => {
                  const isActive = value === font.value

                  return (
                    <CommandItem
                      key={font.value}
                      value={font.value}
                      onSelect={() => {
                        onChange(font.value)
                        setOpen(false)
                      }}
                      className="flex items-center justify-between"
                    >
                      {/* FONT PREVIEW */}
                      <span style={{ fontFamily: font.value }}>
                        {font.label}
                      </span>

                      {/* ACTIVE CHECK */}
                      <Check
                        className={cn(
                          "h-4 w-4",
                          isActive ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  )
}