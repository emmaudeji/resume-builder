"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import { Trash2, Plus, ChevronDown } from "lucide-react"
import { v4 as uuid } from "uuid"
import { HighlightsInput } from "./HighlightsInput"
import { Experience } from "@/types/resume"
import { cn } from "@/lib/utils"

export function ExperienceStep() {
  const { resume, update } = useResumeBuilder()
  const items = resume.experience.items as Experience[]
  const [error, setError] = useState<string | null>(null)

  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id || null
  )

  const canAddExperience = useCallback(() => {
    const invalid = items.find(
      (item) => !item.role?.trim() || !item.company_name?.trim()
    )

    if (invalid) {
      setOpenId(invalid.id) // 🔥 focus the problem
      setError("Please add Job Title and Company before adding another experience")
      return false
    }

    setError(null)
    return true
  }, [items])

  // ➕ ADD
 const addExperience = useCallback(() => {
    if (!canAddExperience()) return

    const newItem = {
      id: uuid(),
      user_id: resume.userId || "",
      company_name: "",
      role: "",
      location: "",
      start_date: "",
      end_date: "",
      current: false,
      description: "",
      highlights: [],
    }

    update("experience", {
      items: [...items, newItem],
    })

    setOpenId(newItem.id)
  }, [items, update, resume.userId, canAddExperience])

  // ❌ REMOVE
  const removeExperience = useCallback(
    (id: string) => {
      update("experience", {
        items: items.filter((i) => i.id !== id),
      })
    },
    [items, update]
  )

  // ✏️ UPDATE
  const updateItem = useCallback(
    (id: string, field: string, value: any) => {
      setError(null) // 🔥 clears instantly

      update("experience", {
        items: items.map((item) =>
          item.id === id ? { ...item, [field]: value } : item
        ),
      })
    },
    [items, update]
  )


  return (
    <div className="space-y-4">
      
      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">Work Experience</h2>
        <p className="text-sm text-muted-foreground">
          Focus on achievements, not responsibilities.
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-">
        {items.map((exp, index) => {
          const isOpen = openId === exp.id

          return (
            <div key={exp.id} className=" ">

              {/* 🔹 HEADER ROW */}
              <button
                type="button"
                onClick={() =>
                  setOpenId(isOpen ? null : exp.id)
                }
                className="w-full flex items-center justify-between py-2 bg-primary/5 px-2 text-left"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {exp.role || "Untitled Role"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {exp.company_name || "Company"}{" "}
                    {exp.start_date &&
                      `• ${exp.start_date}`}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <ChevronDown
                    size={16}
                    className={cn(
                      "transition-transform duration-300",
                      isOpen && "rotate-180"
                    )}
                  />

                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation()
                      removeExperience(exp.id)
                    }}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </button>

              {/* 🔥 COLLAPSIBLE CONTENT */}
              <div
                className={cn(
                  "grid transition-all duration-300 ease-in-out",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden space-y-4 pt-2">

                  <CustomInput
                    label="Job Title"
                    value={exp.role}
                    onChange={(e) =>
                      updateItem(exp.id, "role", e.target.value)
                    }
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      label="Company"
                      value={exp.company_name}
                      onChange={(e) =>
                        updateItem(exp.id, "company_name", e.target.value)
                      }
                    />

                    <CustomInput
                      label="Location"
                      value={exp.location || ""}
                      onChange={(e) =>
                        updateItem(exp.id, "location", e.target.value)
                      }
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      type="date"
                      label="Start Date"
                      value={exp.start_date}
                      onChange={(e) =>
                        updateItem(exp.id, "start_date", e.target.value)
                      }
                    />

                    {!exp.current && (
                      <CustomInput
                        type="date"
                        label="End Date"
                        value={exp.end_date || ""}
                        onChange={(e) =>
                          updateItem(exp.id, "end_date", e.target.value)
                        }
                      />
                    )}
                  </div>

                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={exp.current || false}
                      onChange={(e) =>
                        updateItem(exp.id, "current", e.target.checked)
                      }
                    />
                    I currently work here
                  </label>

                  <CustomInput
                    label="Description"
                    isTextArea
                    value={exp.description || ""}
                    onChange={(e) =>
                      updateItem(exp.id, "description", e.target.value)
                    }
                  />

                  <HighlightsInput
                    highlights={exp.highlights || []}
                    onChange={(val) =>
                      updateItem(exp.id, "highlights", val)
                    }
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ADD */}
      <div className="">
        {error && (
          <div className="text-xs text-destructive animate-in fade-in slide-in-from-bottom-1">
            {error}
          </div>
        )}
        <Button
          variant="ghost"
          onClick={addExperience}
          className="w-full justify-center text-sm"
        >
          <Plus size={14} className="mr-2" />
          Add Experience
        </Button>
      </div>
      
    </div>
  )
}

