import { SliderControl } from "./ThemeSliderControl";

export function LineHeightControl(props:any) {
  return (
    <SliderControl
      label="Line Height"
      min={1.2}
      max={2}
      step={0.1}
      format={(v) => v.toFixed(1)}
      {...props}
    />
  )
}