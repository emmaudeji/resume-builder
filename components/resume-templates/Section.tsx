export function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section
      className="flex flex-col"
      style={{ gap: "var(--resume-space-block)" }}
    >
      <h2
        className="text-sm uppercase font-semibold"
        style={{
          color: "var(--resume-primary)",
        }}
      >
        {title}
      </h2>

      <div
        className="flex flex-col"
        style={{ gap: "var(--resume-space-block)" }}
      >
        {children}
      </div>
    </section>
  )
}