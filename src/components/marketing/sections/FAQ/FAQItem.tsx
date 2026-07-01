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
    <div className="overflow-hidden p-0 shadow-sm">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full cursor-pointer items-center justify-between p-6 text-left">
        <h3 className="text-lg font-semibold">{question}</h3>

        <ChevronDown
          className={cn(
            "h-5 w-5 transition-transform duration-300",
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
          <p className="px-6 pb-6 text-muted-foreground leading-7">{answer}</p>
        </div>
      </div>
    </div>
  );
}
