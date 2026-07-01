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
    <div className="mt-12 flex justify-center">
      <div className="flex items-center rounded-full border border-border bg-background p-1">
        <button
          onClick={() => setBilling("monthly")}
          className={cn(
            "cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all",
            billing === "monthly"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground",
          )}>
          Monthly
        </button>

        <button
          onClick={() => setBilling("yearly")}
          className={cn(
            "cursor-pointer rounded-full px-5 py-2 text-sm font-medium transition-all",
            billing === "yearly"
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground",
          )}>
          Yearly
          <span
            className={cn(
              "ml-2 rounded-full bg-green-500/10 px-2 py-0.5 text-xs",
              billing === "yearly" ? "text-white" : "text-green-600",
            )}>
            Save 20%
          </span>
        </button>
      </div>
    </div>
  );
}
