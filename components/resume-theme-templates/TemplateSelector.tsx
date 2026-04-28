"use client"

import { useMemo, useState, useCallback, act } from "react"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { filteredTemplates, TEMPLATE_CATEGORIES, TemplateCategory, TEMPLATES } from "../resume-builder/TemplateRegistry"
  
export function TemplateSelector({
  value,
  onChange,
}: {
  value: string
  onChange: (v: string) => void
}) {
  const [activeCategory, setActiveCategory] = useState<TemplateCategory>("all")
   
  // 🔥 FILTERED LIST (memoized)
  const memoizedfilteredTemplates  = useMemo(() => filteredTemplates(activeCategory), [activeCategory])

  const handleCategory = useCallback((cat: TemplateCategory) => {
    setActiveCategory(cat)
  }, [])

 
  return (
    <div className="space-y-5 w-full py-6 px-4">

      {/* 🔥 CATEGORY FILTER */}
      <div className="flex flex-wrap gap-2 justify-center">
        {TEMPLATE_CATEGORIES.map((cat) => (
          <Button
            key={cat}
            variant={activeCategory === cat ? "default" : "outline"}
            onClick={() => handleCategory(cat)}
            className={cn(
              "capitalize rounded-full text-xs sm:text-sm px-3 py-1.5 transition",
              activeCategory === cat && "shadow-sm"
            )}
          >
            {cat.replace("-", " ")}
          </Button>
        ))}
      </div>

      {/* 🧱 TEMPLATE GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {memoizedfilteredTemplates.map((t) => {
          const isActive = value === t.id

          return (
            <button
              key={t.id}
              onClick={() => {
                    onChange(t.id)
                }}
              className={cn(
                "group rounded-lg transition text-left ",
                "hover:scale-[1.02]",
                isActive && "ring-2 ring-primary ring-offset-4"
              )}
            >
              {/* PREVIEW */}
              <div className="aspect-[3/4] bg-muted rounded-md overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 group-hover:scale-105 transition" />
              </div>

              {/* NAME */}
              <p className="text-xs font-medium mt-1 truncate">
                {t.name}
              </p>
            </button>
          )
        })}
      </div>
    </div>
  )
}