"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import Image from "next/image"
import {
  Sparkles,
  FileText,
  ShieldCheck,
  Wand2,
} from "lucide-react"
import { useResumeBuilder } from "@/context/resume-builder.context"
import { AuthEmailOTPForm } from "../auth/AuthEmailOTPForm"
import { LucideIcon } from "lucide-react"

export function SignUpModal() {
  const { signin } = useResumeBuilder()

  const [open, setOpen] = useState(false)
  const [isSignin, setIsSignin] = useState(false)

  // sync modal with global state
  useEffect(() => {
    setOpen(!!signin)
  }, [signin])

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent
        className="
          w-[95%] 
          sm:max-w-4xl
          md:w-full
          
          max-w-5xl
          p-0
          overflow-hidden
          rounded-2xl
          grid
          grid-cols-1
          md:grid-cols-2
          gap-0
        "
      >
        {/* LEFT SIDE - FORM */}
        <div className="relative flex flex-col w-full justify-center p-6 sm:p-8 bg-white min-h-[400px]">

          {/* subtle background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <Image
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              alt="background"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10">
            <AuthEmailOTPForm isSignin={isSignin}/>

            {/* toggle */}
            <p className="text-sm mt-4 text-gray-600 text-center">
              {isSignin ? "Don't have an account?" : "Already have an account?"}{" "}
              <button
                onClick={() => setIsSignin(!isSignin)}
                className="text-blue-600 font-medium hover:underline"
              >
                {isSignin ? "Sign up" : "Sign in"}
              </button>
            </p>
          </div>
        </div>

        {/* RIGHT SIDE - BENEFITS */}
        <div className="relative w-full  p-6 sm:p-8 md:p-10 bg-gradient-to-br from-purple-600 to-blue-500 text-white overflow-hidden">

          {/* glow effects */}
          <div className="absolute top-[-80px] left-[-80px] w-[200px] h-[200px] bg-white/20 blur-3xl rounded-full" />
          <div className="absolute bottom-[-80px] right-[-80px] w-[220px] h-[220px] bg-white/20 blur-3xl rounded-full" />

          <div className="relative z-10 space-y-6">

            <DialogHeader>
              <DialogTitle className="text-xl text-white sm:text-2xl font-bold leading-tight">
                {isSignin
                  ? "Welcome back 👋"
                  : "Create your professional resume in minutes"}
              </DialogTitle>

              <p className="text-white/80 text-sm">
                Join thousands of job seekers using AI-powered resumes to land interviews faster.
              </p>
            </DialogHeader>

            {/* benefits */}
            <div className="space-y-4 sm:space-y-5">
              <Benefit
                icon={Sparkles}
                title="Variety of tools"
                desc="Create a professional resume tailored for your career."
              />

              <Benefit
                icon={FileText}
                title="Pre-written content"
                desc="Use expert-crafted content that boosts recruiter visibility."
              />

              <Benefit
                icon={Wand2}
                title="AI-powered optimization"
                desc="Improve wording, structure, and ATS keywords instantly."
              />

              <Benefit
                icon={ShieldCheck}
                title="Data privacy"
                desc="Your information is secure and never shared."
              />
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

/* ------------------- BENEFIT COMPONENT ------------------- */

function Benefit({
  icon: Icon,
  title,
  desc,
}: {
  icon: LucideIcon
  title: string
  desc: string
}) {
  return (
    <div className="flex gap-3 items-start">
      <div className="p-2 rounded-lg bg-white/20 shrink-0">
        <Icon className="w-5 h-5" />
      </div>

      <div>
        <p className="font-semibold text-sm">{title}</p>
        <p className="text-xs text-white/80 leading-relaxed">
          {desc}
        </p>
      </div>
    </div>
  )
}