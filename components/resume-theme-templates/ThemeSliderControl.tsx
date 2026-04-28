import { Progress } from "../ui/progress"

export function SliderControl({
  label,
  value,
  min,
  max,
  step,
  format,
  onChange,
}: {
  label: string
  value: number
  min: number
  max: number
  step: number
  format?: (v: number) => string
  onChange: (v: number) => void
}) {
  const percentage = ((value - min) / (max - min)) * 100

  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm">
        <span>{label}</span>
        <span className="text-muted-foreground">
          {format ? format(value) : value}
        </span>
      </div>

      <div className="relative w-full">
        <Progress value={percentage} className="h-2" />

        <div
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-primary shadow"
          style={{ left: `calc(${percentage}% - 8px)` }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>
    </div>
  )
}