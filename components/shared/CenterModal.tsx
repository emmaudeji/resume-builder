"use client"

import { ReactNode } from "react"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { Button } from "../ui/button"
import { X } from "lucide-react"

interface CenterModalProps {
  open?: boolean
  setOpen?: (open: boolean) => void
  triggerBtn?: ReactNode
  title?: ReactNode
  className?: string
  showCancel?: boolean
  children: ReactNode
  footer?: ReactNode
  showCloseIcon?: boolean
}

const CenterModal = ({
  open,
  setOpen,
  triggerBtn,
  title,
  className,
  children,
  footer,
  showCancel = false,
  showCloseIcon = true,
}: CenterModalProps) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      {triggerBtn && <DialogTrigger asChild>{triggerBtn}</DialogTrigger>}

      <DialogContent
        className={cn(
          "w-full max-w-4xl text-base",
          "max-h-[90vh] p-0 overflow-hidden",
          "-lg",
          className
        )}
      >
        {/* HEADER */}
        {(title || showCloseIcon) && (
          <DialogHeader className="flex flex-row items-center justify-between border-b bg-primary/10 p-6">
            {title && (
              <DialogTitle className="text-lg font-semibold ">
                {title}
              </DialogTitle>
            )}

            {/* {showCloseIcon && (
              <DialogClose asChild>
                <Button className="absolute right-4 top-4 z-50 -md p-1 bg-primary text-white">
                  <X className="h-5 w-5" />
                </Button>
              </DialogClose>
            )} */}
          </DialogHeader>
        )}

        {/* BODY */}
        <div className="px-6 py-4 overflow-y-auto max-h-[calc(90vh-140px)]">
          {children}
        </div>

        {/* FOOTER */}
        {(footer || showCancel) && (
          <DialogFooter className="border-t px-6 py-4 flex items-center justify-end gap-2">
            {showCancel && (
              <DialogClose asChild>
                <Button variant="outline">Cancel</Button>
              </DialogClose>
            )}
            {footer}
          </DialogFooter>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default CenterModal
