import Image from "next/image"
import { ShieldCheck, SearchCheck, FileText } from "lucide-react"

export default function ATSImpactSection() {
  return (
    <section className="py-24 px-6">

      <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT CONTENT */}
        <div className="space-y-6">

          <div className="space-y-2">
            <p className="inline-flex items-center gap-2 text-sm font-medium text-purple-500">
              <ShieldCheck className="w-4 h-4" />
              ATS Optimization System
            </p>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight text-foreground">
              Why ATS-Optimized Resume Templates Matter More Than Ever
            </h2>
          </div>

          <p className="text-foreground leading-relaxed">
            Most companies now use Applicant Tracking Systems (ATS) to automatically filter and rank resumes before a human recruiter ever sees them. This means even highly qualified candidates can be rejected instantly if their resume is poorly formatted or not keyword-optimized.
          </p>

          <p className="text-foreground leading-relaxed">
            Our resume templates are engineered with structured hierarchy, keyword intelligence, and clean formatting rules that ensure your application is readable by ATS software and visible to hiring managers.
          </p>

          {/* feature bullets */}
          <div className="space-y-3 pt-2">

            <div className="flex gap-3 items-start">
              <SearchCheck className="w-5 h-5 text-blue-500 mt-1" />
              <p className="text-sm text-foreground">
                Smart keyword alignment improves visibility in recruiter searches
              </p>
            </div>

            <div className="flex gap-3 items-start">
              <FileText className="w-5 h-5 text-pink-500 mt-1" />
              <p className="text-sm text-foreground">
                Clean structure ensures compatibility with all major ATS systems
              </p>
            </div>

          </div>

        </div>

        {/* IMAGE SIDE */}
        <div className="relative group">

          {/* gradient frame */}
          <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 via-blue-500 to-pink-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition" />

          <div className="relative rounded-2xl overflow-hidden shadow-xl bg-white">

            <Image
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              alt="ATS Resume Optimization"
              width={800}
              height={600}
              className="w-full h-full object-cover group-hover:scale-[1.03] transition duration-300"
            />

            {/* overlay badge */}
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-medium text-purple-600">
              ATS Intelligent Matching
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}