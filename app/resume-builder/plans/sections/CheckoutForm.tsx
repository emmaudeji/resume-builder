"use client"

import { useResumeBuilder } from "@/context/resume-builder.context"
import { Mail, Phone, User } from "lucide-react"
import { useState } from "react"

const CheckoutForm = ({ selectedPlan }: any) => {
  const { resume } = useResumeBuilder()
  const { email, first_name, last_name, phone } = resume.personal

  const [form, setForm] = useState({
    email: email || "",
    first_name: first_name || "",
    last_name: last_name || "",
    phone: phone || "",
  })

  const handleChange = (key: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [key]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    console.log("Checkout Data:", form)
    // 👉 integrate payment logic here
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full pt-4  space-y-4"
    >
      {/* HEADER */}
      <div className="space-y-1">
        <h2>Payment details</h2>
        <p className="text-sm text-muted-foreground">
          Enter your details to continue securely
        </p>
      </div>

      {/* NAME */}
      <div className="grid sm:grid-cols-2 gap-4">
        <InputField
          icon={User}
          placeholder="First name"
          value={form.first_name}
          onChange={(v) => handleChange("first_name", v)}
        />

        <InputField
          icon={User}
          placeholder="Last name"
          value={form.last_name}
          onChange={(v) => handleChange("last_name", v)}
        />
      </div>

      {/* EMAIL */}
      <InputField
        icon={Mail}
        placeholder="Email address"
        type="email"
        value={form.email}
        onChange={(v) => handleChange("email", v)}
      />

      {/* PHONE */}
      <InputField
        icon={Phone}
        placeholder="Phone number"
        type="tel"
        value={form.phone}
        onChange={(v) => handleChange("phone", v)}
      />

      <div className="p-2 px-6 rounded-xl bg-primary/5 border text-sm">
        <p className="font-medium">{selectedPlan.title}</p>
        <p className="text-muted-foreground">{selectedPlan.price}</p>
    </div>

      {/* CTA */}
      <div className="space-y-3 pt-2">
        <button
          type="submit"
          className="w-full py-3 rounded-xl bg-primary text-white font-semibold hover:opacity-90 transition"
        >
          Continue to Payment
        </button>

        <p className="text-xs text-muted-foreground text-center">
          Your information is secure and encrypted
        </p>
      </div>

      
    </form>
  )
}

export default CheckoutForm

/* ---------------- INPUT COMPONENT ---------------- */

function InputField({
  icon: Icon,
  value,
  onChange,
  placeholder,
  type = "text",
}: {
  icon: any
  value: string
  onChange: (v: string) => void
  placeholder: string
  type?: string
}) {
  return (
    <div className="relative">
      <Icon className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />

      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-10 pr-3 py-3 rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition"
      />
    </div>
  )
}