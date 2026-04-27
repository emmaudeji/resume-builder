"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import { Trash2, Plus, ChevronDown, X } from "lucide-react"
import { v4 as uuid } from "uuid"
import { cn } from "@/lib/utils"
import { Project } from "@/types/resume"
import { TechInput } from "./Technput"

export function ProjectStep() {
  const { resume, update } = useResumeBuilder()
  const items:Project[] = resume.projects?.items || []

  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id || null
  )

  const [error, setError] = useState<string | null>(null)

  // 🔍 VALIDATION
  const canAdd = useCallback(() => {
    const invalid = items.find((item) => !item.name?.trim())

    if (invalid) {
      setOpenId(invalid.id)
      setError("Please add project name before adding another")
      return false
    }

    setError(null)
    return true
  }, [items])

  // ➕ ADD
  const addProject = useCallback(() => {
    if (!canAdd()) return

    const newItem: Project = {
      id: uuid(),
      name: "",
      description: "",
      link: "",
      technologies: [],
    }

    update("projects", {
      items: [...items, newItem],
    })

    setOpenId(newItem.id)
  }, [items, update, canAdd])

  // ❌ REMOVE
  const remove = useCallback(
    (id: string) => {
      update("projects", {
        items: items.filter((i) => i.id !== id),
      })
    },
    [items, update]
  )

  // ✏️ UPDATE
  const updateItem = useCallback(
    (id: string, field: string, value: any) => {
      setError(null)

      update("projects", {
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
        <h2 className="text-lg font-semibold">Projects</h2>
        <p className="text-sm text-muted-foreground">
          Showcase real work. Projects make your resume stand out.
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-2">
        {items.map((proj) => {
          const isOpen = openId === proj.id

          return (
            <div key={proj.id}>

              {/* 🔹 HEADER */}
              <button
                type="button"
                onClick={() =>
                  setOpenId(isOpen ? null : proj.id)
                }
                className="w-full flex items-center justify-between py-2 px-2 text-left bg-primary/5"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {proj.name || "Untitled Project"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {proj.link || "No link"}
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
                      remove(proj.id)
                    }}
                    className="text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </button>

              {/* 🔥 COLLAPSIBLE */}
              <div
                className={cn(
                  "grid transition-all duration-300",
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                )}
              >
                <div className="overflow-hidden space-y-4 pt-2">

                  <CustomInput
                    label="Project Name"
                    value={proj.name}
                    onChange={(e) =>
                      updateItem(proj.id, "name", e.target.value)
                    }
                    required
                  />

                  <CustomInput
                    label="Project Link"
                    value={proj.link || ""}
                    onChange={(e) =>
                      updateItem(proj.id, "link", e.target.value)
                    }
                    placeholder="https://..."
                  />

                  <CustomInput
                    label="Description"
                    isTextArea
                    value={proj.description || ""}
                    onChange={(e) =>
                      updateItem(proj.id, "description", e.target.value)
                    }
                    placeholder="What did you build? What impact did it have?"
                  />

                  {/* 🔥 TECHNOLOGIES (TAG INPUT) */}
                  <TechInput
                    value={proj.technologies || []}
                    onChange={(val) =>
                      updateItem(proj.id, "technologies", val)
                    }
                  />
                </div>
              </div>
            </div>
          )
        })}
      </div>

      {/* ERROR */}
      {error && (
        <div className="text-xs text-destructive animate-in fade-in slide-in-from-bottom-1">
          {error}
        </div>
      )}

      {/* ADD */}
      <Button
        variant="ghost"
        onClick={addProject}
        className="w-full justify-center text-sm"
      >
        <Plus size={14} className="mr-2" />
        Add Project
      </Button>
    </div>
  )
}