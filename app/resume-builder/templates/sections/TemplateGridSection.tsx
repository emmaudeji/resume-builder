"use client"

import { TEMPLATES } from '@/components/resume-builder/TemplateRegistry'
import ResumeTemplateCard from './ResumeTemplateCard'

export default function TemplateGridSection() {
  return (
    <section className="py-20 px-6 bg-muted">

        <div className="flex flex-col items-center gap-">
            <h6 className='text-primary'>START HERE</h6>
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
                Choose Your Resume Style
            </h2>
        </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {TEMPLATES.map((t, i) => (
          <ResumeTemplateCard key={t.id} t={t} />
        ))}

      </div>

    </section>
  )
}