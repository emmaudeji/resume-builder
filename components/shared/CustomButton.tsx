"use client";

import * as React from "react";
import { Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface CustomButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {
  loading?: boolean;
  text?: string;
}

/**
 * CustomButton
 * ------------------------------------------------------
 * - Built on top of shadcn/ui Button
 * - Accepts ALL Button props (variant, size, asChild, etc.)
 * - Supports loading state with spinner
 * - Automatically disables button when loading
 */
export const CustomButton = React.forwardRef<
  React.ElementRef<typeof Button>,
  CustomButtonProps
>(({ loading = false, disabled, text, children, className, ...props }, ref) => {
  return (
    <Button
      ref={ref}
      disabled={loading || disabled}
      className={cn("relative flex items-center gap-2 h-12 -none text-base", className)}
      {...props}
    >
      {loading && (
        <Loader2 className="h-4 w-4 animate-spin" />
      )}

      <span
        className={cn(
          "flex items-center gap-2",
        //   loading && "opacity-0"
        )}
      >
        {text ?? children}
      </span>
    </Button>
  );
});

CustomButton.displayName = "CustomButton";
