import { Resume } from "@/types/resume"
import { SidebarSection } from "./SidebarSection"
import { Section } from "./Section"

export function ModernSidebarTemplate({ resume }: { resume: Resume }) {
  const {
    personal,
    experience,
    education,
    skills,
    summary,
  } = resume

  return (
    <div
      className="w-full h-full flex text-[var(--resume-font-size)] leading-[var(--resume-line-height)]"
      style={{
        fontFamily: "var(--resume-font-family)",
      }}
    >
      {/* ---------------- SIDEBAR ---------------- */}
      <aside
        className="w-[30%] p-6 flex flex-col"
        style={{
          background:
            "color-mix(in srgb, var(--resume-primary) 10%, white)",
          gap: "var(--resume-space-section)",
        }}
      >
        {/* PROFILE */}
        <div
          className="flex flex-col"
          style={{ gap: "var(--resume-space-block)" }}
        >
          {personal.avatar && (
            <img
              src={personal.avatar}
              alt={`${personal.first_name} ${personal.last_name}`}
              className="w-20 h-20 object-cover"
              style={{
                borderRadius: "var(--resume-radius)",
              }}
            />
          )}

          <div>
            <h1 className="text-lg font-bold">
              {personal.first_name} {personal.last_name}
            </h1>

            {personal.job_title && (
              <p className="opacity-70">{personal.job_title}</p>
            )}
          </div>
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
        </SidebarSection>

        {/* SKILLS */}
        {skills?.visible && skills.items?.length > 0 && (
          <SidebarSection title={skills.label || "Skills"}>
            {skills.items.map((skill, i) => (
              <p key={i}>{skill.name}</p>
            ))}
          </SidebarSection>
        )}
      </aside>

      {/* ---------------- MAIN ---------------- */}
      <main
        className="w-[70%] p-8 flex flex-col"
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
                <div className="flex justify-between font-medium">
                  <span>{exp.role}</span>

                  <span className="text-xs opacity-70">
                    {exp.start_date} -{" "}
                    {exp.current ? "Present" : exp.end_date}
                  </span>
                </div>

                <p>{exp.company_name}</p>

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

        {/* EDUCATION */}
        {education?.visible && education.items?.length > 0 && (
          <Section title={education.label || "Education"}>
            {education.items.map((edu) => (
              <div
                key={edu.id}
                className="flex flex-col"
                style={{ gap: "var(--resume-space-block)" }}
              >
                <div className="flex justify-between font-medium">
                  <span>{edu.degree}</span>

                  <span className="text-xs opacity-70">
                    {edu.start_date} -{" "}
                    {edu.current ? "Present" : edu.end_date}
                  </span>
                </div>

                <p>{edu.institution}</p>

                {edu.field_of_study && (
                  <p className="text-sm opacity-70">
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