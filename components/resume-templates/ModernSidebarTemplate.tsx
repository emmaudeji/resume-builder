import { TemplateComponent } from "../resume-builder/TemplateRegistry"
import { resumeStyles } from "@/lib/theme-engine"

export const ModernSidebarTemplate: TemplateComponent = ({ resume }) => {
  const { personal, summary, experience, education, skills } = resume

  return (
    <div
      className="w-full h-full grid grid-cols-3"
      style={{
        fontFamily: "var(--resume-font-family)",
        fontSize: "var(--resume-font-size)",
        lineHeight: "var(--resume-line-height)",
      }}
    >
      {/* 🟣 SIDEBAR */}
      <aside
        className="col-span-1 p-5 flex flex-col"
        style={{
          background: "var(--resume-primary)",
          color: "white",
          gap: "var(--resume-space-section)",
        }}
      >
        {/* PROFILE */}
        <div className="space-y-2">
          {personal.avatar && (
            <img
              src={personal.avatar}
              alt="avatar"
              className="w-20 h-20 rounded-full object-cover border"
            />
          )}

          <h1 className="text-lg font-bold">
            {personal.first_name} {personal.last_name}
          </h1>

          <p className="text-sm opacity-80">
            {personal.job_title}
          </p>
        </div>

        {/* CONTACT */}
        <div className={resumeStyles.section} style={{ gap: "6px" }}>
          <h2 className="text-xs uppercase font-semibold opacity-70">
            Contact
          </h2>

          <p>{personal.email}</p>
          <p>{personal.phone}</p>
          <p>{personal.city}</p>
          <p>{personal.linkedin}</p>
        </div>

        {/* SKILLS */}
        {skills.items.length > 0 && (
          <div className={resumeStyles.section} style={{ gap: "6px" }}>
            <h2 className="text-xs uppercase font-semibold opacity-70">
              Skills
            </h2>

            {skills.items.map((skill, i) => (
              <div key={i} className="flex justify-between text-sm">
                <span>{skill.name}</span>

                {skills.show_level && skill.level && (
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, idx) => (
                      <span
                        key={idx}
                        className="w-2 h-2 rounded-full"
                        style={{
                          background:
                            skill?.level && (idx < skill?.level)
                              ? "white"
                              : "rgba(255,255,255,0.3)",
                        }}
                      />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </aside>

      {/* ⚪ MAIN CONTENT */}
      <main
        className="col-span-2 p-6 flex flex-col"
        style={{
          gap: "var(--resume-space-section)",
        }}
      >
        {/* SUMMARY */}
        {summary.summary && (
          <section className={resumeStyles.section}>
            <h2 className={resumeStyles.heading}>Summary</h2>
            <p className={resumeStyles.text}>{summary.summary}</p>
          </section>
        )}

        {/* EXPERIENCE */}
        {experience.items.length > 0 && (
          <section className={resumeStyles.section}>
            <h2 className={resumeStyles.heading}>Experience</h2>

            <div style={{ gap: "var(--resume-space-block)" }} className="flex flex-col">
              {experience.items.map((exp) => (
                <div key={exp.id} className={resumeStyles.block}>
                  <div className="flex justify-between">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-xs text-muted-foreground">
                      {exp.start_date} -{" "}
                      {exp.current ? "Present" : exp.end_date}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground">
                    {exp.company_name} • {exp.location}
                  </p>

                  {exp.description && (
                    <p className="text-sm mt-1">{exp.description}</p>
                  )}

                  {exp?.highlights && (exp?.highlights?.length > 0) && (
                    <ul className="list-disc ml-4 text-sm mt-1">
                      {exp?.highlights?.map((h, i) => (
                        <li key={i}>{h}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EDUCATION */}
        {education.items.length > 0 && (
          <section className={resumeStyles.section}>
            <h2 className={resumeStyles.heading}>Education</h2>

            {education.items.map((edu) => (
              <div key={edu.id} className={resumeStyles.block}>
                <div className="flex justify-between">
                  <h3 className="font-semibold">
                    {edu.degree} {edu.field_of_study}
                  </h3>

                  <span className="text-xs text-muted-foreground">
                    {edu.start_date} -{" "}
                    {edu.current ? "Present" : edu.end_date}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground">
                  {edu.institution}
                </p>

                {edu.description && (
                  <p className="text-sm mt-1">{edu.description}</p>
                )}
              </div>
            ))}
          </section>
        )}
      </main>
    </div>
  )
}