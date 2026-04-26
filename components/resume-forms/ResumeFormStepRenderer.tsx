import { useResumeBuilder } from "@/context/resume-builder.context"
import SummaryForm from "./SummaryForm"
import { PersonalStep } from "./PersonalForm"
import ExeperienceForm from "./ExeperienceForm"
import EducationForm from "./EducationForm"

export function ResumeFormStepRenderer() {
  const { step } = useResumeBuilder()

  switch (step) {
    case "personal":
      return <PersonalStep/>
    case "experience":
      return <ExeperienceForm/>
    case "education":
      return <EducationForm/>
    case "certifications":
      return <EducationForm/>
    case "summary":
      return <SummaryForm/>
    
    default:
      return null
  }
}