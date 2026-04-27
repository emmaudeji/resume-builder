"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { CustomInput } from "@/components/shared/CustomInput"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import { Trash2, Plus, ChevronDown } from "lucide-react"
import { v4 as uuid } from "uuid"
import { cn } from "@/lib/utils"
import { License } from "@/types/resume"

export function CertificationStep() {
  const { resume, update } = useResumeBuilder()
  const items:License[] = resume.certifications?.items || [] 

  const [openId, setOpenId] = useState<string | null>(
    items[0]?.id || null
  )

  const [error, setError] = useState<string | null>(null)

  // 🔍 VALIDATION
  const canAdd = useCallback(() => {
    const invalid = items.find(
      (item) => !item.title?.trim()
    )

    if (invalid) {
      setOpenId(invalid.id || null)
      setError("Please add certification title before adding another")
      return false
    }

    setError(null)
    return true
  }, [items])

  // ➕ ADD
  const addCertification = useCallback(() => {
    if (!canAdd()) return

    const newItem: License = {
      id: uuid(),
      user_id: resume.userId,
      title: "",
      issuer: "",
      issue_date: "",
      expiry_date: "",
      current: false,
    }

    update("certifications", {
      items: [...items, newItem],
    })

    setOpenId(newItem.id!)
  }, [items, update, resume.userId, canAdd])

  // ❌ REMOVE
  const remove = useCallback(
    (id?: string) => {
      update("certifications", {
        items: items.filter((i) => i.id !== id),
      })
    },
    [items, update]
  )

  // ✏️ UPDATE
  const updateItem = useCallback(
    (id: string | undefined, field: string, value: any) => {
      setError(null)

      update("certifications", {
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
        <h2 className="text-lg font-semibold">Certifications</h2>
        <p className="text-sm text-muted-foreground">
          Add licenses or certifications that strengthen your profile.
        </p>
      </div>

      {/* LIST */}
      <div className="space-y-2">
        {items.map((cert, index) => {
          const isOpen = openId === cert.id

          return (
            <div key={cert.id}>

              {/* 🔹 HEADER */}
              <button
                type="button"
                onClick={() =>
                  setOpenId(isOpen ? null : cert.id || null)
                }
                className="w-full flex items-center justify-between py-2 px-2 text-left bg-primary/5"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-medium">
                    {cert.title || "Untitled Certification"}
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {cert.issuer || "Issuer"}{" "}
                    {cert.issue_date && `• ${cert.issue_date}`}
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
                      remove(cert.id)
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
                    label="Certification Title"
                    value={cert.title}
                    onChange={(e) =>
                      updateItem(cert.id, "title", e.target.value)
                    }
                    required
                  />

                  <CustomInput
                    label="Issuer"
                    value={cert.issuer || ""}
                    onChange={(e) =>
                      updateItem(cert.id, "issuer", e.target.value)
                    }
                    placeholder="e.g Google, AWS"
                  />

                  <div className="grid grid-cols-2 gap-4">
                    <CustomInput
                      type="date"
                      label="Issue Date"
                      value={cert.issue_date || ""}
                      onChange={(e) =>
                        updateItem(cert.id, "issue_date", e.target.value)
                      }
                    />

                    {!cert.current && (
                      <CustomInput
                        type="date"
                        label="Expiry Date"
                        value={cert.expiry_date || ""}
                        onChange={(e) =>
                          updateItem(cert.id, "expiry_date", e.target.value)
                        }
                      />
                    )}
                  </div>

                  {/* CURRENT */}
                  <label className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={cert.current || false}
                      onChange={(e) =>
                        updateItem(cert.id, "current", e.target.checked)
                      }
                    />
                    This certification does not expire
                  </label>
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
        onClick={addCertification}
        className="w-full justify-center text-sm"
      >
        <Plus size={14} className="mr-2" />
        Add Certification
      </Button>
    </div>
  )
}