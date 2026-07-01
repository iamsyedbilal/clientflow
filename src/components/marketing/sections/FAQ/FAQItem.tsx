"use client";

import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-5 text-left sm:px-6 sm:py-6">
        <h3 className="text-base font-semibold leading-6 sm:text-lg">
          {question}
        </h3>

        <ChevronDown
          className={cn(
            "h-5 w-5 shrink-0 transition-transform duration-300",
            open && "rotate-180",
          )}
        />
      </button>

      <div
        className={cn(
          "grid transition-all duration-300",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}>
        <div className="overflow-hidden">
          <p className="px-5 pb-5 text-sm leading-6 text-muted-foreground sm:px-6 sm:pb-6 sm:text-base sm:leading-7">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
