import { Resume } from "@/types/resume"
import { Section } from "./Section"
import { resumeTemplateAvatar } from "@/constants/resume-constants"

export function CreativeSplitTemplate({
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
    languages,
  } = resume

  return (
    <div
      className="w-full h-full flex"
      style={{
        fontFamily: "var(--resume-font-family)",
        fontSize: "var(--resume-font-size)",
        lineHeight: "var(--resume-line-height)",
      }}
    >
      {/* ---------------- LEFT PANEL ---------------- */}
      <aside
        className="w-[35%] p-8 flex flex-col text-white"
        style={{
          background: "var(--resume-primary)",
          gap: "var(--resume-space-section)",
        }}
      >
        {/* PHOTO + NAME */}
        <div
          className="flex flex-col items-center text-center"
          style={{ gap: "var(--resume-space-block)" }}
        >
            <img
              src={personal.avatar || resumeTemplateAvatar}
              alt={`${personal.first_name} ${personal.last_name}`}
              className="w-28 h-28 object-cover"
              style={{
                borderRadius: "50%",
                border: "3px solid white",
              }}
            />

          <div>
            <h1 className="text-lg font-semibold">
              {personal.first_name} {personal.last_name}
            </h1>

            {personal.job_title && (
              <p className="opacity-90 text-sm">
                {personal.job_title}
              </p>
            )}
          </div>
        </div>

        {/* CONTACT */}
        <div
          className="flex flex-col"
          style={{ gap: "var(--resume-space-block)" }}
        >
          {personal.email && <p>{personal.email}</p>}
          {personal.phone && <p>{personal.phone}</p>}
          {personal.linkedin && <p>{personal.linkedin}</p>}
          {personal.github && <p>{personal.github}</p>}
        </div>

        {/* SKILLS */}
        {skills?.visible && skills.items?.length > 0 && (
          <div
            className="flex flex-col"
            style={{ gap: "var(--resume-space-block)" }}
          >
            <h2 className="text-sm uppercase tracking-wide opacity-80">
              {skills.label || "Skills"}
            </h2>

            <div className="flex flex-wrap gap-2">
              {skills.items.map((s, i) => (
                <span
                  key={i}
                  className="text-xs"
                  style={{
                    padding: "4px 8px",
                    borderRadius: "999px",
                    background: "rgba(255,255,255,0.15)",
                  }}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* LANGUAGES */}
        {languages?.visible && languages.items?.length > 0 && (
          <div
            className="flex flex-col"
            style={{ gap: "var(--resume-space-block)" }}
          >
            <h2 className="text-sm uppercase tracking-wide opacity-80">
              {languages.label || "Languages"}
            </h2>

            {languages.items.map((l, i) => (
              <p key={i}>
                {l.name}
                {l.proficiency && (
                  <span className="opacity-80">
                    {" "}
                    — {l.proficiency}
                  </span>
                )}
              </p>
            ))}
          </div>
        )}
      </aside>

      {/* ---------------- RIGHT CONTENT ---------------- */}
      <main
        className="w-[65%] p-10 flex flex-col bg-white"
        style={{
          gap: "var(--resume-space-section)",
        }}
      >
        {/* SUMMARY */}
        {summary?.visible && summary.summary && (
          <Section title={summary.label || "Profile"}>
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
                  <div className="font-semibold">
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
                  <div className="font-semibold">
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