"use client";

import { cn } from "@/lib/utils";

interface PricingToggleProps {
  billing: "monthly" | "yearly";
  setBilling: React.Dispatch<React.SetStateAction<"monthly" | "yearly">>;
}

export default function PricingToggle({
  billing,
  setBilling,
}: PricingToggleProps) {
  return (
    <div className="mt-12 flex justify-center p-2">
      <div className="inline-flex w-full max-w-sm items-center rounded-full border border-border bg-background p-1">
        <button
          onClick={() => setBilling("monthly")}
          className={cn(
            "flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all",
            billing === "monthly"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground",
          )}>
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={cn(
            "flex-1 cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all",
            billing === "yearly"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground",
          )}>
          Yearly
          <span
            className={cn(
              "ml-1 rounded-full px-1.5 py-0.5 text-[10px] font-semibold",
              billing === "yearly"
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-green-500/10 text-green-600",
            )}>
            -20%
          </span>
        </button>
      </div>
    </div>
  );
}
