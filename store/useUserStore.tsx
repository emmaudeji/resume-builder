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
  id?: string
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

  setUser: (user: User | null) => void
  logout: () => void

  setCookiePreferences: (prefs: Partial<CookiePreferences>) => void
  acceptAllCookies: () => void
  rejectOptionalCookies: () => void

  syncCookiesToDocument: () => void

  // ---------------- RESUME ----------------
  resumeForm: ResumeFormData | null
  persistResumeEnabled: boolean

  setResumeForm: (data: ResumeFormData) => void
  clearResumeForm: () => void

  enableResumePersistence: () => void
  disableResumePersistence: () => void
}

const RESUME_STORAGE_KEY = "rsm_x9kqv_form"
const RESUME_COOKIE_KEY = "rsm_persist_z7p3"

export const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      // ---------------- USER ----------------
      user: null,
      isAuthenticated: false,

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

      // ---------------- COOKIE PREFS ----------------
      cookiePreferences: {
        necessary: true,
        analytics: false,
        marketing: false,
        preferences: false,
      },

      hasSetCookiePreferences: false,

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
        set({
          cookiePreferences: {
            necessary: true,
            analytics: true,
            marketing: true,
            preferences: true,
          },
          hasSetCookiePreferences: true,
        })

        get().syncCookiesToDocument()
      },

      rejectOptionalCookies: () => {
        set({
          cookiePreferences: {
            necessary: true,
            analytics: false,
            marketing: false,
            preferences: false,
          },
          hasSetCookiePreferences: true,
        })

        get().syncCookiesToDocument()
      },

      syncCookiesToDocument: () => {
        const prefs = get().cookiePreferences

        document.cookie = `cookie_preferences=${encodeURIComponent(
          JSON.stringify(prefs)
        )}; path=/; max-age=31536000; SameSite=Lax`
      },

      // ---------------- RESUME (FULLY PERSISTED NOW) ----------------
      resumeForm: null,
      persistResumeEnabled: true, // ✅ default ON

      setResumeForm: (data) => {
        set({ resumeForm: data })

        if (get().persistResumeEnabled) {
          localStorage.setItem(RESUME_STORAGE_KEY, JSON.stringify(data))
        }
      },

      clearResumeForm: () => {
        localStorage.removeItem(RESUME_STORAGE_KEY)
        set({ resumeForm: null })
      },

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
      name: "usr_vb91_store", // 🧪 jabrish storage name

      storage: createJSONStorage(() => localStorage),

      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
        cookiePreferences: state.cookiePreferences,
        hasSetCookiePreferences: state.hasSetCookiePreferences,

        // ✅ FULL PERSISTENCE
        resumeForm: state.resumeForm,
        persistResumeEnabled: state.persistResumeEnabled,
      }),
    }
  )
)