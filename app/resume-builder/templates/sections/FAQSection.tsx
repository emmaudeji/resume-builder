'use client'

import { useState } from 'react'
import { CheckCircle2, Sparkles, Palette, FileText, Download, Brain } from 'lucide-react'

const faqs = [
  {
    icon: Sparkles,
    color: "text-purple-500",
    q: "Are these resume templates ATS-friendly?",
    a: `Yes. Every resume template is carefully structured to meet Applicant Tracking System (ATS) requirements used by modern recruiters and companies.

Each template follows a clean hierarchy with proper heading structure, standard fonts, and keyword-friendly formatting that ensures your resume is readable by automated systems.

This significantly improves your chances of passing the first screening stage where most resumes are rejected due to formatting errors or unreadable layouts.`
  },
  {
    icon: Brain,
    color: "text-blue-500",
    q: "How does the AI resume generator improve my chances of getting hired?",
    a: `Our AI resume generator transforms basic job descriptions into powerful, achievement-focused statements that highlight impact instead of just responsibilities.

It analyzes your input, suggests optimized keywords based on your industry, and rewrites bullet points to align with recruiter expectations.

This improves clarity, relevance, and keyword matching—three critical factors that increase interview callbacks in competitive job markets.`
  },
  {
    icon: FileText,
    color: "text-pink-500",
    q: "Can I fully edit and customize my resume after choosing a template?",
    a: `Yes. Every template is fully editable.

You can modify sections such as experience, education, skills, projects, and summaries in real-time using our editor.

The system ensures that formatting remains consistent even as you make changes, so you never have to worry about alignment, spacing, or layout breaking.`
  },
  {
    icon: Palette,
    color: "text-orange-500",
    q: "Do I need design experience to create a professional resume?",
    a: `No design experience is required at all.

All templates are pre-designed by professionals to ensure visual balance, readability, and recruiter-friendly structure.

You only focus on your content while the system handles typography, spacing, alignment, and overall design consistency automatically.`
  },
  {
    icon: Download,
    color: "text-green-500",
    q: "What formats can I export my resume in?",
    a: `You can export your resume in multiple professional formats including PDF, which is the most widely accepted format by recruiters and ATS systems.

The exported files maintain high-quality formatting, ensuring your resume looks exactly the same on all devices and platforms.`
  },
  {
    icon: CheckCircle2,
    color: "text-emerald-500",
    q: "Will using these templates really improve my job chances?",
    a: `Yes. Structured, ATS-optimized resumes significantly improve visibility during the hiring process.

Most applicants lose opportunities due to poor formatting or unclear presentation of experience. Our templates solve this by ensuring your skills and achievements are clearly highlighted and easy to scan.

Combined with AI optimization, this increases your chances of getting shortlisted for interviews.`
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="mx-auto max-w-4xl  pb-24 space-y-10">

      {/* TITLE */}
      <div className="space-y-3">
        <h2 className="text-3xl font-bold text-foreground">
          Frequently Asked Questions
        </h2>
        <p className=" ">
          Everything you need to know about AI resume templates, ATS optimization, and career impact.
        </p>
      </div>

      {/* ACCORDION */}
      <div className="space-y-4 divide-y">

        {faqs.map((item, i) => {
          const Icon = item.icon
          const isOpen = openIndex === i

          return (
            <div
              key={i}
              className=" overflow-hidden"
            >

              {/* QUESTION */}
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="w-full flex items-center gap-3 px-5 py-4 text-left"
              >
                <Icon className={`w-5 h-5 ${item.color}`} />

                <span className="font-semibold text-foreground flex-1">
                  {item.q}
                </span>

                <span className="text-xl text-foreground">
                  {isOpen ? "−" : "+"}
                </span>
              </button>

              {/* ANSWER */}
              {isOpen && (
                <div className="px-5 pb-5">
                  <p className="text-  text-foreground leading-relaxed whitespace-pre-line">
                    {item.a}
                  </p>
                </div>
              )}

            </div>
          )
        })}

      </div>

    </section>
  )
}