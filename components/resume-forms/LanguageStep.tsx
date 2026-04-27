"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import CustomSelect from "@/components/shared/CustomSelect"
import { Button } from "@/components/ui/button"
import { useCallback } from "react"
import { Plus, Trash2 } from "lucide-react"
import { Language } from "@/types/resume"

const proficiencyOptions = [
  { label: "Basic", value: "basic" },
  { label: "Intermediate", value: "intermediate" },
  { label: "Advanced", value: "advanced" },
  { label: "Native", value: "native" },
]

export function LanguageStep() {
  const { resume, update } = useResumeBuilder()

  const items = resume.languages?.items || []

  // ➕ ADD
  const addLanguage = useCallback(() => {
    // prevent empty stacking
    const last = items[items.length - 1]
    if (last && !last.name?.trim()) return

    update("languages", {
      items: [...items, { name: "", proficiency: "basic" }],
    })
  }, [items, update])

  // ❌ REMOVE
  const removeLanguage = useCallback(
    (index: number) => {
      update("languages", {
        items: items.filter((_, i) => i !== index),
      })
    },
    [items, update]
  )

  // ✏️ UPDATE
  const updateItem = useCallback(
    (index: number, field: string, value: any) => {
      update("languages", {
        items: items.map((item, i) =>
          i === index ? { ...item, [field]: value } : item
        ),
      })
    },
    [items, update]
  )

  return (
    <div className="space-y-5">

      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">Languages</h2>
        <p className="text-sm text-muted-foreground">
          Add languages you speak and your proficiency level.
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-2">
        {items.map((lang, index) => (
          <div
            key={index}
            className="flex items-center gap-2"
          >
            {/* NAME */}
            <CustomInput
              value={lang.name}
              onChange={(e) =>
                updateItem(index, "name", e.target.value)
              }
              placeholder="English"
              className="text-base"
              wrapper="flex-1"
            />

            {/* PROFICIENCY */}
            <div className="w-[160px]">
              <CustomSelect
                name={`proficiency-${index}`}
                value={lang.proficiency || "basic"}
                onChange={(val) =>
                  updateItem(index, "proficiency", val)
                }
                options={proficiencyOptions}
              />
            </div>

            {/* DELETE */}
            <button
              type="button"
              onClick={() => removeLanguage(index)}
              className="text-muted-foreground hover:text-destructive"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* ADD */}
      <Button
        variant="ghost"
        onClick={addLanguage}
        className="w-full justify-center text-sm"
      >
        <Plus size={14} className="mr-2" />
        Add Language
      </Button>

      {/* 💡 TIP */}
      <p className="text-xs text-muted-foreground">
        Tip: Include languages relevant to the job or region you're applying to.
      </p>
    </div>
  )
}