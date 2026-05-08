"use client"

import { useCookieConsent } from "@/hooks/cookies-store-helper"
import {
  ShieldCheck,
  Settings,
  X,
  CheckCircle2,
} from "lucide-react"
 

export function CookieConsent() {
  const {
    open,
    setOpen,
    handleAcceptAll,
    handleReject,
    handlePartial,
  } = useCookieConsent()

  if (!open) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 w-[380px]">

      <div className="p-[1px] rounded-2xl bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500">

        <div className="rounded-2xl bg-background/90 backdrop-blur-xl shadow-2xl p-5 space-y-4">

          {/* HEADER */}
          <div className="flex items-start justify-between">

            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-purple-500" />
              <h3 className="font-semibold text-foreground">
                Cookie Preferences
              </h3>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="  hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>

          </div>

          {/* TEXT */}
          <p className="text-xs   leading-relaxed">
            We use cookies to improve performance, personalize experience, and analyze usage.
            You are in control of your data at all times.
          </p>

          {/* SMART NOTICE */}
          <div className="flex items-start gap-2 text-xs p-2 rounded-lg bg-primary/5 text-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
            <span>
              For best experience, we recommend enabling cookies. You can change this anytime.
            </span>
          </div>

          {/* ACTIONS */}
          <div className="flex flex-col gap-2 pt-2">

            <button
              onClick={handleAcceptAll}
              className="w-full py-2 rounded-xl bg-primary text-white font-medium hover:opacity-90 transition"
            >
              Accept All Cookies
            </button>

            <button
              onClick={handleReject}
              className="w-full py-2 rounded-xl border text-foreground hover:bg-muted transition"
            >
              Reject Optional
            </button>

            <button
              onClick={handlePartial}
              className="w-full py-2 rounded-xl text-sm text-purple-500 hover:underline flex items-center justify-center gap-1"
            >
              <Settings className="w-4 h-4" />
              Customize Preferences
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}