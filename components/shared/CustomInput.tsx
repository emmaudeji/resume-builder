'use client';

import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Eye, EyeOff, FilePenLine } from "lucide-react";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Textarea } from "@/components/ui/textarea";

interface CustomInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  description?: string;
  error?: string;
  icon?: React.ReactNode;
  isTextArea?: boolean;
  wrapper?:string;
  labelStyle?:string
  innerwrapperStyle?:string;
  required?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  description,
  error,
  icon,
  type = "text",
  className, wrapper,
  required,
  isTextArea = false,
  labelStyle,
  innerwrapperStyle,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";

  return (
    <div className={cn("flex flex-col  w-full",  wrapper)}>
      {label && (
        <div className="">
          <Label htmlFor={props.name} className={cn("flex items-center text-base gap-1", labelStyle)}>
            {label} {required && <span className="text-red-500">*</span>}
          </Label>
          {description && <small className="text-foreground/60">{description}</small>}
        </div>
      )}
      <div className={cn("flex items-center pl-2 gap-2 border border-gray-600    w-full", innerwrapperStyle, error ? "border-red-500" : "")}>
        {isPassword ? (
          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-foreground/50"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        ) : 
        isTextArea ? null : (
          <span className="text-foreground/50">
            {icon ? icon : <FilePenLine size={14} />}
          </span>
        )}

        {isTextArea ? (
          <Textarea
            id={props.name}
            className={cn("p-2 border-none text-base   h-24 focus-visible:ring-ring w-full", className)}
            required={required}
            {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
          />
        ) : (
          <Input
            id={props.name}
            type={isPassword && showPassword ? "text" : type}
            className={cn("p-2 h-12 bg-background  text-foreground border-none text-xl  focus-visible:ring-ring w-full", className)}
            required={required}
            {...props}
          />
        )}
      </div>
      {error && <small className="text-red-500">{error}</small>}
    </div>
  );
};
