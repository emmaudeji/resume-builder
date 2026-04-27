import React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "../ui/label";
import { cn } from "@/lib/utils";

interface Option {
  label: string;
  value: string;
}

interface OptionGroup {
  label: string;
  options: Option[];
}

interface CustomSelectProps {
  name: string;
  label?: string;
  options: Option[] | OptionGroup[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  disabled?:boolean;

  description?:string;
  labelStyle?:string
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  name,
  label,
  options,
  value,
  onChange,
  error,
  placeholder = "Select an option",
  required = false,
  className = "",
  disabled = false,
  description,
  labelStyle,
}) => {
  return (
    <div className={`w-full   ${className}`}>
      {label && (
        <div className="">
          <Label htmlFor={name} className={cn("flex items-center text-base gap-1", labelStyle)}>
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
          {description && <small className="text-foreground/50">{description}</small>}
        </div>
      )}

      <Select onValueChange={onChange} value={value} name={name} disabled={disabled}>
        <SelectTrigger id={name} className={`w-full  text-base px-2  ${error ? "border-red-500" : ""}`}>
          <SelectValue className="text-base  " placeholder={placeholder}  />
        </SelectTrigger>
        <SelectContent className="text-lg">
          {Array.isArray(options) &&
            options.map((option, index) => {
              if ("options" in option) {
                return (
                  <SelectGroup key={index}>
                    <SelectLabel>{option.label}</SelectLabel>
                    {option.options.map((opt) => (
                      <SelectItem key={opt.value} value={opt.value} className="text-lg">
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                );
              } else {
                return (
                  <SelectItem key={option.value} value={option.value}>
                    {option.label}
                  </SelectItem>
                );
              }
            })}
        </SelectContent>
      </Select>

      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default CustomSelect;
