"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { useRef, useCallback } from "react"
import { Camera, User } from "lucide-react"
import { cn } from "@/lib/utils"

export function AvatarUpload() {
  const { resume, update } = useResumeBuilder()
  const inputRef = useRef<HTMLInputElement | null>(null)

  const avatar = resume.personal.avatar

  // 📤 HANDLE UPLOAD
  const handleUpload = useCallback(
    (file?: File) => {
      if (!file) return

      // ⚡ TEMP URL (replace later with cloud upload)
      const url = URL.createObjectURL(file)

      update("personal", { avatar: url })
    },
    [update]
  )

  // 🖱 TRIGGER INPUT
  const trigger = () => inputRef.current?.click()

  return (
    <div className="  flex items-center gap-4">

      {/* AVATAR */}
      <div
        onClick={trigger}
        className="relative group cursor-pointer"
      >
        <div
          className={cn(
            "w-20 h-20 rounded-full overflow-hidden bg-muted flex items-center justify-center",
            "border border-border"
          )}
        >
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="text-muted-foreground" size={28} />
          )}
        </div>

        {/* 🔥 HOVER OVERLAY */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center rounded-full">
          <Camera className="text-white" size={18} />
        </div>
      </div>

      {/* INFO */}
      <div className="text-sm">
        <p className="font-medium">Profile Photo</p>
        <p className="text-muted-foreground text-xs">
          Click to upload a photo
        </p>
      </div>

      {/* INPUT */}
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={(e) =>
          handleUpload(e.target.files?.[0])
        }
      />
    </div>
  )
}