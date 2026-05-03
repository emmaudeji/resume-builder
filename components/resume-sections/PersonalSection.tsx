import { PersonalSectionProp } from "@/types/resume";

// sections/Personal.tsx
export function PersonalSection({ data }: {data:PersonalSectionProp}) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{data.first_name} {data.last_name}</h1>
      <p className="text-sm text-gray-500">{data.job_title}</p>

      <div className="mt-2 text-sm">
        {data.email && <span>{data.email}</span>}
      </div>
    </div>
  )
}