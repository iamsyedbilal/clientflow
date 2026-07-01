import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PricingCardProps {
  name: string;
  monthlyPrice: number;
  yearlyPrice: number;
  description: string;
  features: string[];
  popular?: boolean;
  billing: "monthly" | "yearly";
}

export default function PricingCard({
  name,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  popular = false,
  billing,
}: PricingCardProps) {
  const price = billing === "monthly" ? monthlyPrice : yearlyPrice;

  return (
    <div
      className={cn(
        "relative flex h-full flex-col p-8 transition-all duration-300",
        popular && "scale-105 border-primary shadow-2xl lg:-translate-y-3",
      )}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold">{name}</h3>

      <p className="mt-3 text-muted-foreground">{description}</p>

      <div className="mt-8">
        <div className="flex items-end gap-2">
          <span className="text-5xl font-bold">${price}</span>

          <span className="pb-1 text-muted-foreground">/month</span>
        </div>

        {billing === "yearly" && price !== 0 && (
          <p className="mt-2 text-sm text-green-600">Billed annually</p>
        )}
      </div>

      <div className="my-8 h-px bg-border" />

      <div className="flex-1 space-y-4">
        {features.map((feature) => (
          <div key={feature} className="flex items-center gap-3">
            <Check className="h-5 w-5 text-primary" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      <Button
        className="mt-10 w-full"
        variant={popular ? "primary" : "secondary"}>
        Get Started
      </Button>
    </div>
  );
}
