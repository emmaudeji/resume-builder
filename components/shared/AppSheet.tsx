"use client";

import { ReactNode, useState } from "react";
import { cn } from "@/lib/utils";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetFooter,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { X, Maximize2, Minimize2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AppSheetProps {
  open?: boolean;
  setOpen?: (open: boolean) => void;

  trigger?: ReactNode;
  title?: ReactNode;
  description?: ReactNode;

  children: ReactNode;
  footer?: ReactNode;

  showClose?: boolean;
  showExpand?: boolean;
  defaultExpanded?: boolean;

  className?: string;
}

export function AppSheet({
  open,
  setOpen,
  trigger,
  title,
  description,
  children,
  footer,
  showClose = true,
  showExpand = true,
  defaultExpanded = false,
  className,
}: AppSheetProps) {
  const [expanded, setExpanded] = useState(defaultExpanded);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      {trigger && <SheetTrigger asChild>{trigger}</SheetTrigger>}

      <SheetContent
        side="right"
        className={cn(
          // BASE
          "p-0 flex flex-col bg-background border-l",
          
          // WIDTH CONTROL (FIXED)
          expanded
            ? "w-screen sm:max-w-none xl:max-w-[90vw] "
            : "w-full sm:max-w-6xl",

          // HEIGHT
          "h-screen",

          // REMOVE RADIUS
          "rounded-none",

          className
        )}
      >
        {/* =========================
            HEADER
        ========================= */}
        <SheetHeader className=" bg-gradient-to-br from-primary to-sky-500 text-white  border-b px-6 py-4 flex flex-row items-center justify-between">
          <div className="space-y-1">
            {title && (
              <SheetTitle className="text-base font-semibold">
                {title}
              </SheetTitle>
            )}

            {description && (
              <p className="text-sm text-muted-foreground">
                {description}
              </p>
            )}
          </div>

          <div className="flex items-center gap-2">
            {/* Expand */}
            {showExpand && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                onClick={() => setExpanded((v) => !v)}
                className="h-8 w-8"
              >
                {expanded ? (
                  <Minimize2 className="h-4 w-4" />
                ) : (
                  <Maximize2 className="h-4 w-4" />
                )}
              </Button>
            )}

            {/* Close */}
            {showClose && (
              <SheetClose asChild>
                <Button
                  type="button"
                //   variant="outline"
                  size="icon"
                  className="h-8 w-8 z-50"
                >
                  <X className="h-4 w-4" />
                </Button>
              </SheetClose>
            )}
          </div>
        </SheetHeader>

        {/* =========================
            BODY
        ========================= */}
        <div className="flex-1 overflow-y-auto px-6 py-5">
          {children}
        </div>

        {/* =========================
            FOOTER
        ========================= */}
        {footer && (
          <SheetFooter className="border-t px-6 py-4 flex justify-end gap-2">
            {footer}
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
}