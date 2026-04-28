"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Palette, Type, LayoutTemplate } from "lucide-react"
// import { TemplateTab } from "./TemplateTab"
import { TextTab } from "./TextTab"
import ComingSoon from "../shared/ComingSoon"
import { TemplateTab } from "./TemplateTab"

 

type Tab = "template" | "text" | "layout"

export function ThemeStudio() {
  const [tab, setTab] = useState<Tab>("template")

  const tabs = [
    { id: "template", label: "Template", icon: LayoutTemplate },
    { id: "text", label: "Text", icon: Type },
    { id: "layout", label: "Layout", icon: Palette },
  ]

  return (
    <div className="w-full ">

      {/* TAB BAR */}
      <div className="flex divide-x border-b p-0 w-full">
        {tabs.map((t) => {
          const Icon = t.icon
          return (
            <span
              key={t.id}
              onClick={() => setTab(t.id as Tab)}
              className={cn(
                "flex h-12 w-full cursor-pointer justify-center items-center gap-2 relative   transition duration-300",
                tab === t.id
                  ? "  "
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              <Icon size={14} />
              {t.label}
              <div className={cn(
                "h-1  absolute bottom-0 w-full transition duration-500",
                tab === t.id
                  ? "bg-primary  w-full"
                  : "w-0  "
                )}/>
            </span>
          )
        })}
      </div>

      {/* CONTENT */}
      <div className=" w-full">
        {tab === "template" && <TemplateTab />}
        {tab === "text" && <TextTab />}
        {tab === "layout" && (
          <div className="text-sm text-muted-foreground">
            <ComingSoon href="#"/>
          </div>
        )}
      </div>
    </div>
  )
}