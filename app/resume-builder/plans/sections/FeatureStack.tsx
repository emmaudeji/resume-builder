"use client"

import {
  FileText,
  Sparkles,
  Wand2,
  ShieldCheck,
  CheckCircle2,
  Layers,
  LifeBuoy,
  BadgeCheck,
} from "lucide-react"

export function FeaturePaymentSection() {
  const features = [
    {
      icon: FileText,
      title: "Unlimited edits & downloads",
      desc: "Export in multiple formats anytime",
      color: "text-blue-500 bg-blue-500/10",
    },
    {
      icon: Layers,
      title: "30+ Templates & 1200+ designs",
      desc: "Optimized to beat ATS scans",
      color: "text-purple-500 bg-purple-500/10",
    },
    {
      icon: Sparkles,
      title: "Create resumes in minutes",
      desc: "AI-assisted writing & formatting",
      color: "text-pink-500 bg-pink-500/10",
    },
    {
      icon: Wand2,
      title: "Turn resume into profile",
      desc: "One-click professional transformation",
      color: "text-indigo-500 bg-indigo-500/10",
    },
    {
      icon: CheckCircle2,
      title: "ATS Resume Checker",
      desc: "Fix 30+ issues with smart feedback",
      color: "text-green-500 bg-green-500/10",
    },
    {
      icon: BadgeCheck,
      title: "Expert-written content",
      desc: "Keyword-optimized samples included",
      color: "text-orange-500 bg-orange-500/10",
    },
    {
      icon: ShieldCheck,
      title: "Money-back guarantee",
      desc: "Risk-free within first 7 days",
      color: "text-emerald-500 bg-emerald-500/10",
    },
    {
      icon: LifeBuoy,
      title: "24/7 Customer support",
      desc: "Always available when you need help",
      color: "text-cyan-500 bg-cyan-500/10",
    },
  ]

  return (
     

      <div className="border mx-auto max-w-5xl rounded-3xl bg-background shadow-xl p-6  space-y-3">
        <h3 className="text-3xl font-semibold text-gradient-ai text-center">All Features</h3>

        {/* FEATURES GRID */}
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-2">

          {features.map((f, i) => {
            const Icon = f.icon

            return (
              <div
                key={i}
                className="flex items-start gap-2 p-2 rounded-2xl bg-primary/5 hover:bg-primary/10 transition"
              >
                <div className={`p-3 rounded-xl ${f.color}`}>
                  <Icon className="w-5 h-5" />
                </div>

                <div className="space-y-1">
                  <p className="text-sm font-semibold">{f.title}</p>
                  <p className="text-xs   leading-relaxed">
                    {f.desc}
                  </p>
                </div>
              </div>
            )
          })}

        </div>

        {/* DIVIDER */}
        <div className="border-t pt-3  space-y-3">

          {/* PAYMENT INFO */}
          <div className="  flex flex-wrap items-center gap-2 sm:gap-4 ">
            <p className="text-sm font-medium">We accept: </p>

            {/* <div className="flex items-center justify-center gap-6 opacity-70 text-sm"> */}
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayPal</span>
            {/* </div> */}
          </div>

          {/* CTA */}

            {/* <button className="w-full   px-8 py-4 rounded-xl bg-primary text-white font-semibold text-base hover:opacity-90 transition">
              Continue
            </button> */}

            <p className="text-xs    max-w-xl leading-relaxed">
              Cancel anytime online, by email, or call us toll-free. After 7 days, 
              the price is $24.95 with auto-renewal. Billed every 4 weeks. 
              Within 7 days after the first payment, you can claim your money-back guarantee.
            </p>


        </div>

      </div>

    
  )
}