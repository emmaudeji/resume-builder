"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Upload, FileText,   Wand2, Book } from "lucide-react";
import { useState } from "react";

 

export function StartResumeModal() {
    const [open, setOpen] = useState(true)
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="md:max-w-3xl p-0 overflow-hidden rounded-3xl animate-in fade-in zoom-in-95 duration-300">
        {/* Gradient Header */}
        <div className="p-8 bg-gradient-to-br from-primary/20 via-primary/10 to-purple-500/20 border-b">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold">
              Let’s get started
            </DialogTitle>
            <p className="text-muted-foreground mt-2">
              How do you want to create your resume?
            </p>
          </DialogHeader>
        </div>

        {/* Options */}
        <div className="p-6 grid md:grid-cols-2 gap-4">
          {options.map((option, i) => (
            <div
              key={i}
              className="animate-in fade-in slide-in-from-bottom-2 duration-300"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <Card 
              onClick={()=>setOpen(false)}
              className="group cursor-pointer rounded-2xl border bg-card/80 backdrop-blur-xl hover:shadow-xl hover:-translate-y-1 hover:ring-1 hover:ring-primary/30 transition-all duration-300">
                <CardContent className="p-5 flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 text-primary">
                    <option.icon className="w-5 h-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-base group-hover:text-primary transition">
                      {option.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      {option.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}

const options = [
  {
    title: "Create New Resume",
    description: "Start from scratch with a blank resume",
    icon: FileText,
  },
  {
    title: "Create with AI",
    description: "Generate a resume with AI assistance",
    icon: Sparkles,
  },
  {
    title: "Upload Resume",
    description: "Upload and enhance your existing resume",
    icon: Upload,
  },
  {
    title: "With LinkedIn Profile",
    description: "Import your data from LinkedIn",
    icon: Book,
  },
  {
    title: "Use Resume Example",
    description: "Start from a professionally designed example",
    icon: Wand2,
  },
];