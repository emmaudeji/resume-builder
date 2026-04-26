"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Clock, Sparkles } from "lucide-react";
import { CustomButton } from "./CustomButton";
import { LinkButton } from "./LinkButton";
import { urls } from "@/constants";

export default function ComingSoon() {
  return (
    <div className="min-h-[60vh] flex h-full flex-col items-center justify-center bg-background px-4">
      <Card className="w-full max-w-md border border-border/50 shadow-sm -2xl">
        <CardContent className="flex flex-col items-center text-center p-8">
          {/* Icon */}
          <div className="mb-6 flex items-center justify-center h-14 w-14 -full bg-primary/10">
            <Clock className="size-12 text-primary" />
          </div>

          {/* Title */}
          <h1 className="text-4xl font-semibold tracking-tight">
            Coming Soon
          </h1>

          {/* Description */}
          <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
            This feature is currently under development. We're building
            something clean, fast, and reliable for your workflow.
          </p>

          {/* Badge */}
          <div className="mt-6">
            <Badge
              variant="secondary"
              className="flex items-center gap-1 px-3 py-1 text-xs"
            >
              <Sparkles className="h-3 w-3" />
              Stay tuned
            </Badge>
          </div>
        </CardContent>

        <CardFooter>
          <LinkButton href={urls.base} className="w-full"> <ArrowLeft/> Back to Home</LinkButton >
        </CardFooter>
      </Card>
    </div>
  );
}
