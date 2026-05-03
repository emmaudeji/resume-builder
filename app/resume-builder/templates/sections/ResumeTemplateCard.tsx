"use client"

import { TemplateProp } from '@/components/resume-builder/TemplateRegistry'
import { useResumeBuilder } from '@/context/resume-builder.context'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
 

const ResumeTemplateCard = ({t}:{t:TemplateProp}) => {
    const {update, resume} = useResumeBuilder()
    const {push} = useRouter()
    const handleSelect = () => {
        update("theme", {...resume.theme, template: t.id})
        push(`/resume-builder`)
    }
  return (
    <div
        onClick={handleSelect}
                className="group relative rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition"
              >
    
                {/* A4 VISUAL */}
                <div className="relative aspect-[210/297] bg-gradient-to-br from-gray-100 to-gray-200">
    
                  <Image
                    src={t.preview}
                    alt={t.name}
                    fill
                    className="object-cover group-hover:scale-105 transition duration-300"
                  />
    
                  {/* glow overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
    
                  <p className="absolute bottom-3 left-3 text-white text-sm font-semibold">
                    {t.name}
                  </p>
    
                </div>
    
              </div>
  )
}

export default ResumeTemplateCard