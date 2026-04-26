"use client"

export function ValueRenderer({ value }: { value: any }) {
  if (value === null || value === undefined) return "—"

  if (typeof value === "boolean") return value ? "Yes" : "No"

  if (typeof value === "number")
    return value.toLocaleString()

  if (value instanceof Date)
    return value.toLocaleString()

  if (Array.isArray(value)) {
    return (
      <ul className="list-disc pl-5 space-y-1">
        {value.map((v, i) => (
          <li key={i}>{String(v)}</li>
        ))}
      </ul>
    )
  }

  if (typeof value === "object") {
    return (
      <pre className="text-xs bg-muted p-3 rounded overflow-auto">
        {JSON.stringify(value, null, 2)}
      </pre>
    )
  }

  if (typeof value === "string" && value.includes("@"))
    return <a href={`mailto:${value}`}>{value}</a>

  if (typeof value === "string" && value.startsWith("+"))
    return <a href={`tel:${value}`}>{value}</a>

  return value
}