import HeroSection from './sections/HeroSection'
import TemplateGridSection from './sections/TemplateGridSection'
import StatsSection from './sections/StatsSection'
import ATSImpactSection from './sections/ATSImpactSection'
import AIImpactSection from './sections/AIImpactSection'
import SEOContentSection from './sections/SEOContentSection'
import FAQSection from './sections/FAQSection'
 
export default function ResumeTemplatesPage() {
  return (
    <main className="w-full bg-background text-foreground">

      <HeroSection />

      <TemplateGridSection />

      <StatsSection />

      <ATSImpactSection />

      <AIImpactSection />

      <SEOContentSection />

      <FAQSection />

      {/* <CTASection /> */}

    </main>
  )
}