"use client"

import React from "react"
import { CalendarIcon } from "lucide-react"
import { format } from "date-fns"
import { DateRange } from "react-day-picker"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Calendar } from "@/components/ui/calendar"
import { cn } from "@/lib/utils"

interface DateRangePickerProps {
  value: DateRange | undefined
  onChange: (date: DateRange | undefined) => void
  placeholder?: string
  className?: string
  popContentStyle?:string
  doubleCalendar?: boolean // ✅ new optional prop
}

export function DateRangePicker({ 
  value, 
  onChange,
  placeholder = "Pick a date range",
  className,
  popContentStyle,
  doubleCalendar = false // ✅ default to false
}: DateRangePickerProps) {
  const handleChange = (newDate: DateRange | undefined) => {
    onChange(newDate)
  }

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn("w-80 px-2  h-9 flex gap-2 items-center", className)}
        >
          <CalendarIcon className="h-4 w-4" />
          {
            value?.from ? 
            <small className="font-medium">
              { value.to ? 
                `${format(value.from, "dd/MM/yyyy")} - ${format(value.to, "dd/MM/yyyy")}`
                : 
                format(value.from, "dd/MM/yyyy")
              }
            </small> : <small>{placeholder}</small>
          }
        </button>
      </PopoverTrigger>
      <PopoverContent className={cn("w-auto p-0 ", popContentStyle)}>
        <Calendar
          mode="range"
          selected={value}
          onSelect={handleChange}
          initialFocus
          numberOfMonths={doubleCalendar ? 2 : 1} // ✅ control number of months
        />
      </PopoverContent>
    </Popover>
  )
}
