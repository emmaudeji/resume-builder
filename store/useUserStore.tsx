"use client"

import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

type CookiePreferences = {
  necessary: true
  analytics: boolean
  marketing: boolean
  preferences: boolean
}

type User = {
  id: string
  email: string
  full_name?: string
  role?: string
}

type ResumeFormData = Record<string, any>

type UserStore = {
  user: User | null
  isAuthenticated: boolean

  cookiePreferences: CookiePreferences
  hasSetCookiePreferences: boolean

  // actions
  setUser: (user: User | null) => void
  logout: () => void

  setCookiePreferences: (prefs: Partial<CookiePreferences>) => void
  acceptAllCookies: () => void
  rejectOptionalCookies: () => void

  syncCookiesToDocument: () => void

//   important
  resumeForm: ResumeFormData | null
  persistResumeEnabled: boolean

  setResumeForm: (data: ResumeFormData) => void
  loadResumeForm: () => void
  clearResumeForm: () => void

  enableResumePersistence: () => void
  disableResumePersistence: () => void
}

const RESUME_STORAGE_KEY = "resume-builder-form"
const RESUME_COOKIE_KEY = "resume_builder_persist" 

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,

      cookiePreferences: {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      },

      hasSetCookiePreferences: false,

      // ---------------- USER ----------------
      setUser: (user) =>
        set({
          user,
          isAuthenticated: !!user,
        }),

      logout: () =>
        set({
          user: null,
          isAuthenticated: false,
        }),

      // ---------------- COOKIES ----------------
      setCookiePreferences: (prefs) => {
        const updated = {
          ...get().cookiePreferences,
          ...prefs,
        }

        set({
          cookiePreferences: updated,
          hasSetCookiePreferences: true,
        })

        get().syncCookiesToDocument()
      },

      acceptAllCookies: () => {
        const allAccepted = {
          necessary: true,
          analytics: true,
          marketing: true,
          preferences: true,
        }

        set({
          cookiePreferences: allAccepted,
          hasSetCookiePreferences: true,
        })

        get().syncCookiesToDocument()
      },

      rejectOptionalCookies: () => {
        const minimal = {
          necessary: true,
          analytics: false,
          marketing: false,
          preferences: false,
        }

        set({
          cookiePreferences: minimal,
          hasSetCookiePreferences: true,
        })

        get().syncCookiesToDocument()
      },

      // ---------------- SYNC TO COOKIE ----------------
      syncCookiesToDocument: () => {
        const prefs = get().cookiePreferences

        // store as a single cookie (recommended)
        document.cookie = `cookie_preferences=${encodeURIComponent(
          JSON.stringify(prefs)
        )}; path=/; max-age=31536000; SameSite=Lax`

        // optional granular cookies (for backend parsing)
        document.cookie = `cookie_analytics=${prefs.analytics}; path=/`
        document.cookie = `cookie_marketing=${prefs.marketing}; path=/`
        document.cookie = `cookie_preferences_enabled=${prefs.preferences}; path=/`
      },

       // ---------------- STATE ----------------
      resumeForm: null,
      persistResumeEnabled: false,

      // ---------------- FORM ----------------
      setResumeForm: (data: ResumeFormData) => {
        set({ resumeForm: data })

        if (get().persistResumeEnabled) {
          localStorage.setItem(
            RESUME_STORAGE_KEY,
            JSON.stringify(data)
          )
        }
      },

      loadResumeForm: () => {
        if (!get().persistResumeEnabled) return

        const stored = localStorage.getItem(RESUME_STORAGE_KEY)

        if (stored) {
          set({ resumeForm: JSON.parse(stored) })
        }
      },

      clearResumeForm: () => {
        localStorage.removeItem(RESUME_STORAGE_KEY)
        set({ resumeForm: null })
      },

      // ---------------- COOKIE CONTROL ----------------
      enableResumePersistence: () => {
        document.cookie = `${RESUME_COOKIE_KEY}=true; path=/; max-age=31536000; SameSite=Lax`

        set({ persistResumeEnabled: true })
      },

      disableResumePersistence: () => {
        document.cookie = `${RESUME_COOKIE_KEY}=false; path=/; max-age=31536000; SameSite=Lax`

        localStorage.removeItem(RESUME_STORAGE_KEY)

        set({
          persistResumeEnabled: false,
          resumeForm: null,
        })
      },

    }),
    {
      name: "user-store",

      storage: createJSONStorage(() => localStorage),

      partialize: (state:any) => ({
        user: state?.user,
        isAuthenticated: state?.isAuthenticated,
        cookiePreferences: state?.cookiePreferences,
        hasSetCookiePreferences: state?.hasSetCookiePreferences,
      }),


      
    }
  )
)