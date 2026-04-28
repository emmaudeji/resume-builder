"use client";

import Link, { LinkProps } from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "subtle";
type Size = "sm" | "md" | "lg" | "icon";

interface LinkButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
  prefetch?: boolean;
  prop?: LinkProps;
  target?: string;
}

export const LinkButton = ({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  prefetch = true,
  target
}: LinkButtonProps) => {
  return (
    <Link
      target={target}
      href={href}
      prefetch={prefetch}
      className={cn(
        // Base styling
        "rounded flex items-center gap-2 text-center justify-center  font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:pointer-events-none",

        // Variants
        {
          primary:
            "bg-primary text-white hover:bg-primary-hover active:bg-primary-hover",
          outline:
            "border border-gray-300 text-gray-800 hover:bg-gray-100 active:bg-gray-200",
          ghost:
            "text-gray-700 hover:bg-gray-100 active:bg-gray-200",
          subtle:
            "bg-gray-100 text-gray-800 hover:bg-gray-200 border active:bg-gray-300",
        }[variant],

        // Sizes
        {
          sm: "px-3 py-1.5 text-sm",
          md: "px-4 py-2 text-base",
          lg: "px-5 py-2.5 text-lg",
          icon: "p-2",
        }[size],

        className
      )}
    >
      {children}
    </Link>
  );
};
