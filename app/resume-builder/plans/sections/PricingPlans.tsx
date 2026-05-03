"use client"

import { useState } from "react"
import CheckoutForm from "./CheckoutForm"

type Plan = {
  id: string
  title: string
  price: string
  subtitle: string
  featured?: boolean
}

const PLANS: Plan[] = [
  {
    id: "7day",
    title: "7-Day Access",
    price: "N1000.95",
    subtitle: "Try full features",
  },
  {
    id: "annual",
    title: "Annual Access",
    price: "N3000.95/mo",
    subtitle: "Best value",
    featured: true,
  },
]

export function PricingPlans() {
  const [selectedPlan, setSelectedPlan] = useState<Plan>(PLANS[1]) // default → featured

  return (
    <section className="space-y-8">

      {/* PLANS */}
      <div className="grid sm:grid-cols-2 gap-4">
        {PLANS.map((plan) => (
          <PlanCard
            key={plan.id}
            {...plan}
            active={selectedPlan.id === plan.id}
            onSelect={() => setSelectedPlan(plan)}
          />
        ))}
      </div>

      {/* CHECKOUT */}
      <CheckoutForm selectedPlan={selectedPlan} />
    </section>
  )
}


function PlanCard({
  title,
  price,
  subtitle,
  featured,
  active,
  onSelect,
}: any) {
  return (
    <div
      onClick={onSelect}
      className={`cursor-pointer relative p-[1px] rounded-2xl transition-all
        ${featured ? "bg-gradient-to-br from-primary via-purple-500 to-pink-500" : "bg-border"}
        ${active ? "scale-[1.02] shadow-xl" : "hover:shadow-md"}
      `}
    >
      <div
        className={`rounded-2xl bg-background p-6 space-y-4 h-full transition
          ${active ? "ring-2 ring-primary" : ""}
        `}
      >
        {featured && (
          <span className="absolute -top-3 left-4 text-xs bg-primary text-white px-2 py-1 rounded-full">
            Most popular
          </span>
        )}

        {/* RADIO INDICATOR */}
        <div className="flex justify-between items-start">
          <h3>{title}</h3>

          <div
            className={`w-4 h-4 rounded-full border flex items-center justify-center
              ${active ? "border-primary" : "border-muted-foreground"}
            `}
          >
            {active && (
              <div className="w-2 h-2 bg-primary rounded-full" />
            )}
          </div>
        </div>

        <p className="text-3xl font-bold">{price}</p>

        <p className="text-muted-foreground text-sm">{subtitle}</p>
      </div>
    </div>
  )
}