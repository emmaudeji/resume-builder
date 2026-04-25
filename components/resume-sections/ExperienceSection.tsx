import { ExperienceItem, ExperienceSectionProp } from "@/types/resume";

// sections/Experience.tsx
export function ExperienceSection({ data }: {data:ExperienceSectionProp}) {
  return (
    <div>
      <h2 className="font-semibold text-lg mb-2">Experience</h2>
      {data.items.map((item: ExperienceItem) => (
        <div key={item.id} className="mb-4">
          <h3 className="font-medium">
            {item.role} @ {item.company}
          </h3>

          <p className="text-sm text-gray-500">
            {item.start_date} - {item.end_date || "Present"}
          </p>

          <ul className="list-disc ml-5 mt-2 text-sm">
            {item.highlights?.map((h: string, i: number) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}