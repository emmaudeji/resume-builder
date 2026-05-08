"use client"

import { useEffect, useState } from "react"
import { useUserStore } from "@/store/useUserStore"

const COOKIE_KEY = "cookie_consent_state"
const COOKIE_TIME_KEY = "cookie_consent_time"

type ConsentState = "accepted" | "rejected" | "partial"

export function useCookieConsent() {
  const {
    acceptAllCookies,
    rejectOptionalCookies,
    setCookiePreferences,
  } = useUserStore()

  const [open, setOpen] = useState(false)

  const REMINDER_DELAY = 1000 * 60 * 60 * 24 * 7 // 7 days

  useEffect(() => {
    const state = localStorage.getItem(COOKIE_KEY)
    const lastTime = localStorage.getItem(COOKIE_TIME_KEY)

    if (!state) {
      setOpen(true)
      return
    }

    // reminder logic for non-accept-all users
    if (state !== "accepted" && lastTime) {
      const elapsed = Date.now() - Number(lastTime)

      if (elapsed > REMINDER_DELAY) {
        setOpen(true)
      }
    }
  }, [])

  const saveState = (state: ConsentState) => {
    localStorage.setItem(COOKIE_KEY, state)
    localStorage.setItem(COOKIE_TIME_KEY, Date.now().toString())
  }

  const handleAcceptAll = () => {
    acceptAllCookies()
    saveState("accepted")
    setOpen(false)
  }

  const handleReject = () => {
    rejectOptionalCookies()
    saveState("rejected")
    setOpen(false)
  }

  const handlePartial = () => {
    setCookiePreferences({
      analytics: true,
      marketing: false,
      preferences: true,
    })

    saveState("partial")
    setOpen(false)
  }

  return {
    open,
    setOpen,
    handleAcceptAll,
    handleReject,
    handlePartial,
  }
}