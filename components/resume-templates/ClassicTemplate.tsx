import { Resume } from "@/types/resume"
import { Section } from "./Section"

export function ClassicTemplate({ resume }: { resume: Resume }) {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    certifications,
    languages,
  } = resume

  return (
    <div
      className="w-full h-full flex flex-col p-8"
      style={{
        fontFamily: "var(--resume-font-family)",
        fontSize: "var(--resume-font-size)",
        lineHeight: "var(--resume-line-height)",
        gap: "var(--resume-space-section)",
      }}
    >
      {/* ---------------- HEADER ---------------- */}
      <header
        className="flex flex-col items-center text-center"
        style={{ gap: "var(--resume-space-block)" }}
      >
        <h1 className="text-xl font-bold">
          {personal.first_name} {personal.last_name}
        </h1>

        {personal.job_title && (
          <p className="opacity-70">{personal.job_title}</p>
        )}

        <div className="flex flex-wrap justify-center gap-2 text-sm opacity-80">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>| {personal.phone}</span>}
          {(personal.address || personal.city) && (
            <span>
              | {personal.address}
              {personal.city ? `, ${personal.city}` : ""}
            </span>
          )}
        </div>
      </header>

      {/* ---------------- SUMMARY ---------------- */}
      {summary?.visible && summary.summary && (
        <Section title={summary.label || "Summary"}>
          <p>{summary.summary}</p>
        </Section>
      )}

      {/* ---------------- EXPERIENCE ---------------- */}
      {experience?.visible && experience.items?.length > 0 && (
        <Section title={experience.label || "Experience"}>
          {experience.items.map((exp) => (
            <div
              key={exp.id}
              className="flex flex-col"
              style={{ gap: "var(--resume-space-block)" }}
            >
              <div className="flex justify-between font-medium">
                <span>
                  {exp.role} — {exp.company_name}
                </span>

                <span className="text-xs opacity-70">
                  {exp.start_date} -{" "}
                  {exp.current ? "Present" : exp.end_date}
                </span>
              </div>

              {exp.description && (
                <p className="opacity-80">{exp.description}</p>
              )}

              {exp.highlights && exp.highlights?.length > 0 && (
                <ul className="list-disc pl-4 opacity-80">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ---------------- EDUCATION ---------------- */}
      {education?.visible && education.items?.length > 0 && (
        <Section title={education.label || "Education"}>
          {education.items.map((edu) => (
            <div
              key={edu.id}
              className="flex flex-col"
              style={{ gap: "var(--resume-space-block)" }}
            >
              <div className="flex justify-between font-medium">
                <span>
                  {edu.degree} — {edu.institution}
                </span>

                <span className="text-xs opacity-70">
                  {edu.start_date} -{" "}
                  {edu.current ? "Present" : edu.end_date}
                </span>
              </div>

              {edu.field_of_study && (
                <p className="text-sm opacity-70">
                  {edu.field_of_study}
                </p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ---------------- SKILLS ---------------- */}
      {skills?.visible && skills.items?.length > 0 && (
        <Section title={skills.label || "Skills"}>
          <p className="opacity-80">
            {skills.items.map((s) => s.name).join(", ")}
          </p>
        </Section>
      )}

      {/* ---------------- PROJECTS ---------------- */}
      {projects?.visible && projects.items?.length > 0 && (
        <Section title={projects.label || "Projects"}>
          {projects.items.map((project) => (
            <div
              key={project.id}
              className="flex flex-col"
              style={{ gap: "var(--resume-space-block)" }}
            >
              <div className="font-medium">{project.name}</div>

              {project.description && (
                <p className="opacity-80">{project.description}</p>
              )}

              {project.technologies && project.technologies?.length > 0 && (
                <p className="text-xs opacity-70">
                  {project.technologies.join(", ")}
                </p>
              )}
            </div>
          ))}
        </Section>
      )}

      {/* ---------------- CERTIFICATIONS ---------------- */}
      {certifications?.visible &&
        certifications.items?.length > 0 && (
          <Section title={certifications.label || "Certifications"}>
            {certifications.items.map((cert) => (
              <div key={cert.id}>
                <span className="font-medium">{cert.title}</span>
                {cert.issuer && (
                  <span className="opacity-70">
                    {" "}
                    — {cert.issuer}
                  </span>
                )}
              </div>
            ))}
          </Section>
        )}

      {/* ---------------- LANGUAGES ---------------- */}
      {languages?.visible && languages.items?.length > 0 && (
        <Section title={languages.label || "Languages"}>
          <p className="opacity-80">
            {languages.items
              .map(
                (l) =>
                  `${l.name}${
                    l.proficiency ? ` (${l.proficiency})` : ""
                  }`
              )
              .join(", ")}
          </p>
        </Section>
      )}
    </div>
  )
}