import { useResumeBuilder } from "@/context/resume-builder.context"
import  { SummaryStep } from "./SummaryStep"
import { PersonalStep } from "./PersonalStep"
  import { ExperienceStep } from "./ExperienceStep"
import { EducationStep } from "./EducationForm"
 import { CertificationStep } from "./CertificationForm"
import { SkillsStep } from "./SkillStep"
import { ProjectStep } from "./ProjectsStep"
import { ReviewStep } from "./ReviewStep"

export function ResumeFormStepRenderer() {
  const { step } = useResumeBuilder()

  switch (step) {
    case "personal":
      return <PersonalStep/>
    case "experience":
      return <ExperienceStep/>
    case "education":
      return <EducationStep/>
    case "certifications":
      return <CertificationStep/>
    case "summary":
      return <SummaryStep/>
    case "skills":
      return <SkillsStep/>
    case "projects":
      return <ProjectStep/>
    case "review":
      return <ReviewStep/>
    default:
      return null
  }
}