"use client"

import { Check, Star } from "lucide-react"
import { PricingPlans } from "./sections/PricingPlans"
import { FeaturePaymentSection } from "./sections/FeatureStack"

const PricingPage = () => {
  return (
    <div className="min-h-screen  bg-gray-50">

      {/* STEP PROGRESS */}
      <div className="max-w-5xl mx-auto px-4 pt-6">
        <div className="flex items-center justify-between text-sm text-gray-500">
          {["Create resume", "Choose Plan", "Payment", "Download"].map((step, i) => (
            <div key={i} className="flex-1 flex items-center gap-2">
              <div
                className={`w-6 h-6 flex items-center justify-center rounded-full text-xs
                  ${i <= 1 ? "bg-blue-600 text-white" : "bg-gray-200"}`}
              >
                {i + 1}
              </div>
              <span className={i === 1 ? "font-semibold text-black" : ""}>
                {step}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* HERO */}
      <div className="text-center mt-10 px-4">
        <h1 className="text-2xl md:text-3xl font-bold">
          Download your job-winning resume!
        </h1>
        <p className="text-gray-500 mt-2">
          <span className="font-semibold">3,424 people</span> chose this in the last 24 hours
        </p>
      </div>

      <section className="grid md:grid-cols-2  gap-4 max-w-7xl w-full mx-auto py-10 px-6">
        <PricingPlans/>
        <FeaturePaymentSection/>
      </section>

      {/* <div className="text-center mt-10 px-4">
        <p className="text-sm text-gray-500">
          ⭐ Excellent • 3,112 reviews
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12">
        <h2 className="text-xl font-semibold mb-6">All Features:</h2>

        <div className="grid md:grid-cols-2 gap-4 text-sm">
          {features.map((f, i) => (
            <div key={i} className="flex gap-2">
              <Check className="w-4 h-4 text-green-600 mt-1" />
              <span>{f}</span>
            </div>
          ))}
        </div>
      </div> */}

      {/* REVIEWS */}
      <div className="max-w-5xl mx-auto px-4 mt-14 space-y-6">
        <h2 className="text-xl font-semibold">What users say</h2>

        <div className="grid md:grid-cols-2 gap-6">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white p-5 rounded-xl shadow-sm">
              <div className="flex mb-2">
                {Array(5).fill(0).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-sm text-gray-700">{r.text}</p>
              <p className="text-xs text-gray-500 mt-2">{r.author}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      {/* <div className="sticky bottom-0 bg-white border-t mt-16 p-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 items-center justify-between">
          <p className="text-xs text-gray-500">
            Cancel anytime. Money-back guarantee within 7 days.
          </p>

          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-blue-700">
            Continue
          </button>
        </div>
      </div> */}
    </div>
  )
}

export default PricingPage

/* ---------------- COMPONENTS ---------------- */

function PricingCard({
  title,
  price,
  features,
  highlight,
}: {
  title: string
  price: string
  features: string[]
  highlight?: boolean
}) {
  return (
    <div
      className={`rounded-2xl p-6 border bg-white relative
      ${highlight ? "border-blue-600 shadow-lg scale-[1.02]" : ""}`}
    >
      {highlight && (
        <div className="absolute top-3 right-3 text-xs bg-blue-600 text-white px-2 py-1 rounded-full">
          Most popular
        </div>
      )}

      <h3 className="font-semibold">{title}</h3>

      <p className="text-3xl font-bold mt-2">{price}</p>

      <ul className="mt-4 space-y-2 text-sm">
        {features.map((f, i) => (
          <li key={i} className="flex gap-2">
            <Check className="w-4 h-4 text-green-600" />
            {f}
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 w-full py-3 rounded-xl font-semibold
        ${highlight ? "bg-blue-600 text-white" : "bg-gray-100"}`}
      >
        Choose Plan
      </button>
    </div>
  )
}

/* ---------------- DATA ---------------- */

const features = [
  "Unlimited edits & downloads",
  "30+ templates & 1200+ designs",
  "ATS optimization",
  "AI resume improvements",
  "Resume to profile conversion",
  "Keyword optimization",
  "Money-back guarantee",
  "24/7 support",
]

const reviews = [
  {
    text: "Best resume service I have tried. Templates look professional.",
    author: "Sophie Barnes • 14h ago",
  },
  {
    text: "BetterCV templates made my resume stand out. Easy to use.",
    author: "Gareth Stead • 16h ago",
  },
  {
    text: "ATS checker helped fix issues I didn’t notice.",
    author: "Lisbeth Ra • 19h ago",
  },
  {
    text: "The yearly plan is worth it if you use it often.",
    author: "Isabel Nitzsch • 5h ago",
  },
]














// import { FeatureStack } from "./sections/FeatureStack";
// import { PaymentTrust } from "./sections/PaymentTrust";
// import { PricingFAQ } from "./sections/PricingFAQ";
// import { PricingHero } from "./sections/PricingHero";
// import { PricingPlans } from "./sections/PricingPlans";
// import { PricingUrgency } from "./sections/PricingUrgency";
// import { ReviewsSection } from "./sections/ReviewsSection";

 

// export default function PricingPage() {
//   return (
//     <main className="w-full bg-background">

//       {/* HERO */}
//       <PricingHero/>

//       {/* PLANS */}
//       <PricingPlans />

//       {/* FEATURES */}
//       <FeatureStack />

//       {/* URGENCY / GUARANTEE */}
//       <PricingUrgency />

//       {/* PAYMENT TRUST */}
//       <PaymentTrust />

//       {/* REVIEWS */}
//       <ReviewsSection />

//       {/* FAQ */}
//       <PricingFAQ />

//       {/* FINAL CTA */}
//       <section className="py-20 px-6 text-center space-y-6">
//         <h2>
//           Start building your job-winning resume today
//         </h2>

//         <p className="text-muted-foreground max-w-xl mx-auto">
//           Join thousands of professionals using AI-powered tools to land better jobs faster.
//         </p>

//         <button className="px-8 py-4 rounded-xl bg-primary text-white font-semibold text-lg hover:opacity-90 transition">
//           Continue
//         </button>
//       </section>

//     </main>
//   )
// }
