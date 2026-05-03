import React from 'react'
import { LinkButton } from '../shared/LinkButton'
import Image from 'next/image'
import { TemplateSlider } from './TemplateSlider'
import { Wand2, LayoutTemplate, Download } from 'lucide-react'

const ResumeSection = () => {

const steps = [
  {
    title: "Choose a template",
    desc: "Pick from 40+ recruiter-approved designs.",
    icon: LayoutTemplate,
  },
  {
    title: "Let AI do the work",
    desc: "Generate summaries, bullet points, and skills instantly.",
    icon: Wand2,
  },
  {
    title: "Download & apply",
    desc: "Get an ATS-ready resume and start applying.",
    icon: Download,
  },
]

  return (
    <section className='w-full py-20 px-4 bg-gradient-to-b from-primary/5 to-transparent space-y-16'>

      {/* HERO */}
      <section className="mx-auto max-w-7xl rounded-3xl bg-background shadow-xl border  md:grid md:grid-cols-2 overflow-hidden">

        {/* LEFT */}
        <div className="flex flex-col justify-center space-y-8 px-6 py-10 sm:px-10 md:px-16 md:py-16">

          <div className="space-y-4">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Create a job-winning resume in minutes
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg max-w-lg">
              Stand out, pass ATS filters, and land interviews faster with a resume built for modern hiring.
            </p>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              { value: '49,303', label: 'resumes today' },
              { value: '48%', label: 'higher hiring chance' },
              { value: '12%', label: 'average pay boost' },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-muted/40 backdrop-blur-sm border rounded-xl p-4"
              >
                <p className="text-xl sm:text-2xl font-bold">{stat.value}</p>
                <p className="text-xs text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-wrap gap-4 pt-2">
            <LinkButton href='/resume-builder' className='px-6 py-3 text-sm sm:text-base'>
              Build My Resume
            </LinkButton>

            <LinkButton
              href='/resume-templates'
              variant="outline"
              className='px-6 py-3 text-sm sm:text-base'
            >
              Browse Templates
            </LinkButton>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative h-[320px] md:h-full">

          <Image
            src="https://images.unsplash.com/photo-1586281380349-632531db7ed4"
            alt='Resume preview'
            fill
            className='object-cover'
          />

          {/* overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent" />

          {/* FLOATING BADGES */}
          <div className="absolute top-6 left-6 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm shadow">
            ✅ ATS Optimized
          </div>

          <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur rounded-lg px-4 py-2 text-sm shadow">
            🚀 1209+ users building now
          </div>

          <div className="absolute top-1/2 right-2 -translate-y-1/2 bg-primary text-white shadow-xl rounded-xl px-4 py-3 text-sm font-medium">
            +48% Hiring Success
          </div>
        </div>
      </section>

      {/* TEMPLATES + SOCIAL PROOF */}
      <section className="space-y-10">
        <div className='mx-auto max-w-3xl text-center space-y-4'>
          <p className="text-muted-foreground text-sm">
            Trusted by <span className="font-semibold text-foreground">23,000+ job seekers</span> who have improved their hiring outcomes.
          </p>

          <h3 className="text-2xl sm:text-3xl font-semibold">
            Pick a template and start instantly
          </h3>
        </div>

        {/* SLIDER */}
        <div className="relative">
          <TemplateSlider />

          {/* gradient edges */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-background to-transparent" />
        </div>


<div className="mx-auto max-w-5xl grid sm:grid-cols-3 gap-6">
  {steps.map((step, i) => {
    const Icon = step.icon

    return (
      <div
        key={i}
        className="group relative p-[1px] rounded-2xl bg-gradient-to-b from-primary/20 to-transparent"
      >
        <div className="h-full w-full rounded-2xl bg-background/80 backdrop-blur p-6 space-y-4 transition group-hover:-translate-y-1 group-hover:shadow-xl">
          
          {/* ICON */}
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary/10">
            <Icon className="w-5 h-5 text-primary" />
          </div>

          {/* TEXT */}
          <div className="space-y-1">
            <p className="text-sm font-semibold">{step.title}</p>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {step.desc}
            </p>
          </div>

        </div>
      </div>
    )
  })}
</div>

        {/* FINAL CTA */}
        <div className="flex justify-center pt-4">
          <LinkButton href='/resume-builder/templates' className="px-8 py-3">
            40+ recruiter-approved templates for free
          </LinkButton>
        </div>

      </section>
    </section>
  )
}

export default ResumeSection