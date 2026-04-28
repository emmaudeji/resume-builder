import { TemplateComponent } from "../resume-builder/TemplateRegistry"

export const DefaultTemplate: TemplateComponent = ({ resume }) => {
  return (
    <div className="p-6 text-sm space-y-4"
        style={{
            fontFamily: "var(--font-family)",
            fontSize: "var(--font-size)",
            lineHeight: "var(--line-height)",
        }}
    >
      <h1 className="text-xl font-bold">
        {resume.personal.first_name || "Your Name"}
      </h1>

      <p className="text-muted-foreground">
        {resume.personal.job_title}
      </p>

      <div>
        <h2 className="font-semibold">Summary</h2>
        <p>{resume.summary.summary}</p>
      </div>
    </div>
  )
}