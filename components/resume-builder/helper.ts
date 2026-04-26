 

// import { ExperienceSectionProp, PersonalSectionProp, Section, SkillsSectionProp, SummarySectionProp } from "@/types/resume"
// import { PersonalSection } from "../resume-sections/PersonalSection"
// import { ExperienceSection } from "../resume-sections/ExperienceSection"
// // import { PersonalSection } from "../sections/Personal"
// // import { SummarySection } from "../sections/Summary"
// // import { ExperienceSection } from "../sections/Experience"
// // import { SkillsSection } from "../sections/Skills"

// export function renderSection(section: Section) {
//   switch (section.type) {
//     case "personal":
//       return <PersonalSection data={section.data as PersonalSectionProp} />

//     // case "summary":
//     //   return <SummarySection data={section.data as SummarySectionProp} />

//     case "experience":
//       return <ExperienceSection data={section.data as ExperienceSectionProp} />

//     // case "skills":
//     //   return <SkillsSection data={section.data as SkillsSectionProp} />

//     default:
//       return null
//   }
// }

// export const orderedSections = [
//   resume.personal,
//   resume.summary,
//   resume.experience,
//   resume.education,
// ].sort((a, b) => a.order - b.order)