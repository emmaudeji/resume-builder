"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Palette, Type, LayoutTemplate } from "lucide-react"
import { TemplateTab } from "./TemplateTab"
import { TextTab } from "./TextTab"

 

type Tab = "template" | "text" | "layout"

export function ThemeStudio() {
  const [tab, setTab] = useState<Tab>("template")

  const tabs = [
    { id: "template", label: "Template", icon: LayoutTemplate },
    { id: "text", label: "Text", icon: Type },
    { id: "layout", label: "Layout", icon: Palette },
  ]

  return (
    <div className="w-full space-y-4">

      {/* TAB BAR */}
      <div className="flex gap-2 border-b pb-2">
        {tabs.map((t) => {
          const Icon = t.icon
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id as Tab)}
              className={cn(
                "flex items-center gap-2 px-3 py-1.5 text-sm rounded-md transition",
                tab === t.id
                  ? "bg-primary text-white"
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon size={14} />
              {t.label}
            </button>
          )
        })}
      </div>

      {/* CONTENT */}
      <div className="pt-2">
        {tab === "template" && <TemplateTab />}
        {tab === "text" && <TextTab />}
        {tab === "layout" && (
          <div className="text-sm text-muted-foreground">
            Layout customization coming soon...
          </div>
        )}
      </div>
    </div>
  )
}