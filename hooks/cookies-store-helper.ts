import { useUserStore } from "@/store/useUserStore"
import { useEffect } from "react"

export function hydrateCookiesToStore() {
  const cookies = document.cookie.split("; ").reduce((acc, curr) => {
    const [key, value] = curr.split("=")
    acc[key] = value
    return acc
  }, {} as Record<string, string>)

  if (cookies.cookie_preferences) {
    try {
      const parsed = JSON.parse(
        decodeURIComponent(cookies.cookie_preferences)
      )

      useUserStore.setState({
        cookiePreferences: parsed,
        hasSetCookiePreferences: true,
      })
    } catch (err) {
      console.error("Invalid cookie preferences", err)
    }
  }
}

export const initializeCookiesHook = () => {
    useEffect(() => {
        hydrateCookiesToStore()
    }, [])
}

// const acceptAll = useUserStore((s) => s.acceptAllCookies)

// <button onClick={acceptAll}>Accept All</button>

// const analyticsEnabled = useUserStore(
//   (s) => s.cookiePreferences.analytics
// )

// if (analyticsEnabled) {
//   // load Google Analytics
// }