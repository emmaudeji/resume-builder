import { Resume } from "@/types/resume"
import { Section } from "./Section"

export function ExecutiveElegantTemplate({
  resume,
}: {
  resume: Resume
}) {
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
      className="w-full h-full flex flex-col p-10"
      style={{
        fontFamily: "var(--resume-font-family)",
        fontSize: "var(--resume-font-size)",
        lineHeight: "var(--resume-line-height)",
        gap: "var(--resume-space-section)",
      }}
    >
      {/* ---------------- HEADER ---------------- */}
      <header
        className="flex flex-col"
        style={{ gap: "var(--resume-space-block)" }}
      >
        <h1 className="text-2xl font-semibold tracking-wide">
          {personal.first_name} {personal.last_name}
        </h1>

        {personal.job_title && (
          <p className="opacity-70">{personal.job_title}</p>
        )}

        <div className="flex flex-wrap gap-3 text-sm opacity-80">
          {personal.email && <span>{personal.email}</span>}
          {personal.phone && <span>• {personal.phone}</span>}
          {(personal.address || personal.city) && (
            <span>
              • {personal.address}
              {personal.city ? `, ${personal.city}` : ""}
            </span>
          )}
        </div>
      </header>

      {/* subtle divider */}
      <div
        style={{
          height: "1px",
          background: "var(--resume-primary)",
          opacity: 0.2,
        }}
      />

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
              style={{
                gap: "var(--resume-space-block)",
                paddingBottom: "var(--resume-space-block)",
                borderBottom:
                  "1px solid rgba(0,0,0,0.06)",
              }}
            >
              <div className="flex justify-between">
                <div className="font-semibold">
                  {exp.role}
                </div>

                <div className="text-xs opacity-70">
                  {exp.start_date} -{" "}
                  {exp.current ? "Present" : exp.end_date}
                </div>
              </div>

              <p className="opacity-80">
                {exp.company_name}
              </p>

              {exp.description && (
                <p className="opacity-80">
                  {exp.description}
                </p>
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

      {/* ---------------- SKILLS ---------------- */}
      {skills?.visible && skills.items?.length > 0 && (
        <Section title={skills.label || "Skills"}>
          <div className="flex flex-wrap gap-3">
            {skills.items.map((s, i) => (
              <span
                key={i}
                className="text-sm"
                style={{
                  padding: "4px 8px",
                  borderRadius: "var(--resume-radius)",
                  border:
                    "1px solid rgba(0,0,0,0.15)",
                }}
              >
                {s.name}
              </span>
            ))}
          </div>
        </Section>
      )}

      {/* ---------------- PROJECTS ---------------- */}
      {projects?.visible && projects.items?.length > 0 && (
        <Section title={projects.label || "Projects"}>
          {projects.items.map((p) => (
            <div
              key={p.id}
              className="flex flex-col"
              style={{ gap: "var(--resume-space-block)" }}
            >
              <div className="font-semibold">
                {p.name}
              </div>

              {p.description && (
                <p className="opacity-80">
                  {p.description}
                </p>
              )}

              {p.technologies && p.technologies?.length > 0 && (
                <p className="text-xs opacity-60">
                  {p.technologies.join(", ")}
                </p>
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
              <div className="flex justify-between">
                <div className="font-semibold">
                  {edu.degree}
                </div>

                <div className="text-xs opacity-70">
                  {edu.start_date} -{" "}
                  {edu.current ? "Present" : edu.end_date}
                </div>
              </div>

              <p className="opacity-80">
                {edu.institution}
              </p>

              {edu.field_of_study && (
                <p className="text-xs opacity-60">
                  {edu.field_of_study}
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
            {certifications.items.map((c) => (
              <div key={c.id}>
                <span className="font-medium">
                  {c.title}
                </span>
                {c.issuer && (
                  <span className="opacity-70">
                    {" "}
                    — {c.issuer}
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