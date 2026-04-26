"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface SocialInputProps {
  name: string;
  label: string;
  icon?: ReactNode;
  baseUrl: string;
  value?: string;
  onChange: (name: string, value: string) => void;
  placeholder?: string;
  className?: string;
}

/**
 * Smart social media input — displays the base URL and allows entering only the username/route.
 * The parent form should store only the suffix (not the full URL).
 */
export default function SocialInput({
  name,
  label,
  icon,
  baseUrl,
  value = "",
  onChange,
  placeholder,
  className,
}: SocialInputProps) {
  return (
    <div className={cn("flex flex-col gap-1", className)}>
      <Label htmlFor={name} className="text-sm font-medium text-muted-foreground">
        <div className="flex items-center gap-2">
          {icon && <span className="text-primary">{icon}</span>}
          {label}
        </div>
      </Label>

      <div className="flex items-center mt-1">
        {/* Fixed Base URL */}
        <span className="px-3 py-2 bg-muted text-muted-foreground rounded-l-md border border-r-0 border-input text-sm select-none whitespace-nowrap">
          {baseUrl}
        </span>

        {/* Editable Suffix */}
        <Input
          id={name}
          name={name}
          placeholder={placeholder || "username"}
          value={value}
          onChange={(e) => {
            const suffix = e.target.value.trim();
            // store empty string if nothing provided (not the base URL)
            onChange(name, suffix || "");
          }}
          className="rounded-l-none"
        />
      </div>
    </div>
  );
}
