"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useCallback, useState } from "react"
import { Plus, Trash2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { CustomInput } from "../shared/CustomInput"

export function SkillsStep() {
  const { resume, update } = useResumeBuilder()

  const skills:{name:string,level?:number}[] = resume.skills.items
  const showLevel = resume.skills.show_level

  const [input, setInput] = useState("")
  const [error, setError] = useState<string | null>(null)

  // ➕ ADD SKILL
  const addSkill = useCallback(() => {
    if (!input.trim()) {
      setError("Enter a skill name")
      return
    }

    setError(null)

    update("skills", {
      items: [
        ...skills,
        { name: input.trim(), level: showLevel ? 3 : undefined },
      ],
    })

    setInput("")
  }, [input, skills, update, showLevel])

  // ❌ REMOVE
  const remove = useCallback(
    (name: string) => {
      update("skills", {
        items: skills.filter((s) => s.name !== name),
      })
    },
    [skills, update]
  )

  // ✏️ UPDATE LEVEL
  const updateLevel = useCallback(
    (name: string, level: number) => {
      update("skills", {
        items: skills.map((s) =>
          s.name === name ? { ...s, level } : s
        ),
      })
    },
    [skills, update]
  )

  // 🔁 TOGGLE LEVEL
  const toggleLevel = useCallback(() => {
    update("skills", {
      show_level: !showLevel,
      items: skills.map((s) => ({
        ...s,
        level: !showLevel ? s.level || 3 : undefined,
      })),
    })
  }, [showLevel, skills, update])

  return (
    <div className="space-y-4">

      {/* HEADER */}
      <div>
        <h2 className="text-lg font-semibold">Skills</h2>
        <p className="text-sm text-muted-foreground">
          Add your key skills. Highlight your strengths clearly.
        </p>
      </div>

      {/* 🔥 TOGGLE */}
      <div className="flex items-center gap-4">
        <span className="text-sm">Show skill level</span>

        <button
          onClick={toggleLevel}
          className={cn(
            "w-10 h-5 flex items-center rounded-full transition",
            showLevel ? "bg-primary" : "bg-muted"
          )}
        >
          <span
            className={cn(
              "w-4 h-4 bg-white rounded-full shadow transition",
              showLevel ? "translate-x-5" : "translate-x-1"
            )}
          />
        </button>
      </div>

      {/* ➕ INPUT */}
      <div className="flex gap-2">
        <CustomInput
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addSkill()}
          placeholder="e.g React, Node.js"
        />
        <Button onClick={addSkill} size="icon">
          <Plus size={16} />
        </Button>
      </div>

      {error && (
        <p className="text-xs text-destructive animate-in fade-in">
          {error}
        </p>
      )}

      {/* 🔥 SKILL LIST */}
      <div className="space-y-2">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between gap-4"
          >
            {/* NAME */}
            <span className="text-sm font-medium">
              {skill.name}
            </span>

            <div className="flex items-center gap-3">

              {/* LEVEL */}
              {showLevel && (
                <LevelSelector
                  value={skill.level || 0}
                  onChange={(val) =>
                    updateLevel(skill.name, val)
                  }
                />
              )}

              {/* REMOVE */}
              <button
                onClick={() => remove(skill.name)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function LevelSelector({
  value,
  onChange,
}: {
  value: number
  onChange: (val: number) => void
}) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((lvl) => (
        <button
          key={lvl}
          onClick={() => onChange(lvl)}
          className={cn(
            "h-2 w-6 rounded-full transition-all duration-200",
            lvl <= value
              ? "bg-primary"
              : "bg-muted hover:bg-muted-foreground/30"
          )}
        />
      ))}
    </div>
  )
}