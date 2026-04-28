import { SliderControl } from "./ThemeSliderControl";

export function FontSizeControl(props) {
  return (
    <SliderControl
      label="Font Size"
      min={10}
      max={24}
      step={1}
      format={(v) => `${v}px`}
      {...props}
    />
  )
}