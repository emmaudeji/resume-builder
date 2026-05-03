import { Resume } from "@/types/resume"
import { Section } from "./Section"
import { SidebarSection } from "./SidebarSection"

export function MinimalGridTemplate({ resume }: { resume: Resume }) {
  const {
    personal,
    summary,
    experience,
    education,
    skills,
    projects,
    languages,
  } = resume

  return (
    <div
      className="w-full h-full grid grid-cols-3"
      style={{
        fontFamily: "var(--resume-font-family)",
        fontSize: "var(--resume-font-size)",
        lineHeight: "var(--resume-line-height)",
      }}
    >
      {/* ---------------- LEFT COLUMN ---------------- */}
      <aside
        className="col-span-1 p-6 flex flex-col border-r"
        style={{
          gap: "var(--resume-space-section)",
        }}
      >
        {/* NAME */}
        <div
          className="flex flex-col"
          style={{ gap: "var(--resume-space-block)" }}
        >
          <h1 className="text-lg font-semibold">
            {personal.first_name} {personal.last_name}
          </h1>

          {personal.job_title && (
            <p className="text-sm opacity-70">
              {personal.job_title}
            </p>
          )}
        </div>

        {/* CONTACT */}
        <SidebarSection title="Contact">
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}

          {(personal.address || personal.city) && (
            <p>
              {personal.address}
              {personal.city ? `, ${personal.city}` : ""}
            </p>
          )}

          {personal.linkedin && <p>{personal.linkedin}</p>}
          {personal.github && <p>{personal.github}</p>}
        </SidebarSection>

        {/* SKILLS */}
        {skills?.visible && skills.items?.length > 0 && (
          <SidebarSection title={skills.label || "Skills"}>
            <div className="flex flex-col gap-1">
              {skills.items.map((s, i) => (
                <p key={i}>{s.name}</p>
              ))}
            </div>
          </SidebarSection>
        )}

        {/* LANGUAGES */}
        {languages?.visible && languages.items?.length > 0 && (
          <SidebarSection title={languages.label || "Languages"}>
            {languages.items.map((l, i) => (
              <p key={i}>
                {l.name}
                {l.proficiency && (
                  <span className="opacity-60">
                    {" "}
                    — {l.proficiency}
                  </span>
                )}
              </p>
            ))}
          </SidebarSection>
        )}
      </aside>

      {/* ---------------- RIGHT COLUMN ---------------- */}
      <main
        className="col-span-2 p-8 flex flex-col"
        style={{
          gap: "var(--resume-space-section)",
        }}
      >
        {/* SUMMARY */}
        {summary?.visible && summary.summary && (
          <Section title={summary.label || "Summary"}>
            <p>{summary.summary}</p>
          </Section>
        )}

        {/* EXPERIENCE */}
        {experience?.visible && experience.items?.length > 0 && (
          <Section title={experience.label || "Experience"}>
            {experience.items.map((exp) => (
              <div
                key={exp.id}
                className="flex flex-col"
                style={{ gap: "var(--resume-space-block)" }}
              >
                <div className="flex justify-between">
                  <div className="font-medium">
                    {exp.role}
                  </div>

                  <div className="text-xs opacity-70">
                    {exp.start_date} -{" "}
                    {exp.current ? "Present" : exp.end_date}
                  </div>
                </div>

                <p className="text-sm opacity-80">
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

        {/* PROJECTS */}
        {projects?.visible && projects.items?.length > 0 && (
          <Section title={projects.label || "Projects"}>
            {projects.items.map((p) => (
              <div
                key={p.id}
                className="flex flex-col"
                style={{ gap: "var(--resume-space-block)" }}
              >
                <div className="font-medium">{p.name}</div>

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

        {/* EDUCATION */}
        {education?.visible && education.items?.length > 0 && (
          <Section title={education.label || "Education"}>
            {education.items.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col"
                style={{ gap: "var(--resume-space-block)" }}
              >
                <div className="flex justify-between">
                  <div className="font-medium">
                    {edu.degree}
                  </div>

                  <div className="text-xs opacity-70">
                    {edu.start_date} -{" "}
                    {edu.current ? "Present" : edu.end_date}
                  </div>
                </div>

                <p className="text-sm opacity-80">
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
      </main>
    </div>
  )
}