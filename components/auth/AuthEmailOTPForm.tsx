"use client"

import { useState, useEffect } from "react"
import { Loader2, Mail, ArrowRight } from "lucide-react"
import { useResumeBuilder } from "@/context/resume-builder.context"
import { useUserStore } from "@/store/useUserStore"
import { useRouter } from "next/navigation"

type Props = {
  isSignin?: boolean
}

export function AuthEmailOTPForm({ isSignin=true }: Props) {
    const {resume:{personal:{email:userEmail, first_name,last_name, address, }}} = useResumeBuilder()
    const {setUser} = useUserStore()
    const {push} = useRouter()

  const [step, setStep] = useState<"email" | "otp">("email")
  const [email, setEmail] = useState(userEmail||"")
  const [otp, setOtp] = useState("")
  const [loading, setLoading] = useState(false)
  const [timer, setTimer] = useState(0)

  // ⏳ countdown timer
  useEffect(() => {
    if (timer <= 0) return

    const interval = setInterval(() => {
      setTimer((t) => t - 1)
    }, 1000)

    return () => clearInterval(interval)
  }, [timer])

  // 📩 send OTP
  const handleSendCode = async () => {
    if (!email) return

    setLoading(true)
console.log("==========================")
    try {
      // 👉 replace with your API
      await new Promise((res) => setTimeout(res, 1200))
      setUser({
        email,
        full_name: first_name + " " + last_name,
        
      })
      setStep("otp")
      setTimer(60) // 60 sec cooldown
      push("/resume-builder/plans")
    } finally {
      setLoading(false)
    }
  }

  // 🔐 verify OTP
  const handleVerify = async () => {
    if (otp.length < 6) return

    setLoading(true)

    try {
      // 👉 replace with your API
      await new Promise((res) => setTimeout(res, 1200))

      console.log("Authenticated:", email)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-5">

      {/* HEADER */}
      <div className="space-y-1">
        <h2 className="text-xl font-semibold text-foreground">
          {isSignin ? "Sign in to your account" : "Create your account"}
        </h2>

        <p className="text-xs text-muted-foreground">
          {step === "email"
            ? "Enter your email to continue"
            : `We sent a code to ${email}`}
        </p>
      </div>

      {/* STEP 1: EMAIL */}
      {step === "email" && (
        <div className="space-y-4">

          <div className="relative">
            <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>

          <button
            onClick={handleSendCode}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <>
                Continue
                <ArrowRight className="w-4 h-4" />
              </>
            )}
          </button>

        </div>
      )}

      {/* STEP 2: OTP */}
      {step === "otp" && (
        <div className="space-y-4">

          {/* OTP INPUT */}
          <input
            type="text"
            maxLength={6}
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter 6-digit code"
            className="w-full text-center tracking-[0.4em] text-lg py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <button
            onClick={handleVerify}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-white py-3 rounded-xl font-medium hover:opacity-90 transition disabled:opacity-60"
          >
            {loading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              "Verify & Continue"
            )}
          </button>

          {/* RESEND */}
          <div className="flex justify-between text-xs text-muted-foreground">

            <button
              onClick={() => setStep("email")}
              className="hover:underline"
            >
              Change email
            </button>

            {timer > 0 ? (
              <span>Resend in {timer}s</span>
            ) : (
              <button
                onClick={handleSendCode}
                className="text-primary hover:underline"
              >
                Resend code
              </button>
            )}

          </div>

        </div>
      )}

      {/* FOOTER */}
      <p className="text-xs text-muted-foreground text-center">
        By continuing, you agree to our Terms & Privacy Policy
      </p>

    </div>
  )
}