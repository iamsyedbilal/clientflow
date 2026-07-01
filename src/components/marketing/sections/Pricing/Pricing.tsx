"use client";

import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import PricingToggle from "./PricingToggle";
import PricingCard from "./PricingCard";
import { useState } from "react";

const plans = [
  {
    name: "Starter",
    monthlyPrice: 0,
    yearlyPrice: 0,
    description: "Perfect for freelancers getting started.",
    features: ["Client CRM", "Project Management", "Invoices", "Client Portal"],
  },
  {
    name: "Professional",
    monthlyPrice: 29,
    yearlyPrice: 23,
    popular: true,
    description: "For growing freelancers and agencies.",
    features: [
      "Everything in Starter",
      "Analytics",
      "Automation",
      "Integrations",
      "Priority Support",
    ],
  },
  {
    name: "Agency",
    monthlyPrice: 79,
    yearlyPrice: 63,
    description: "For teams managing multiple clients.",
    features: [
      "Unlimited Team Members",
      "White Label Portal",
      "Advanced Permissions",
      "API Access",
      "Priority Support",
    ],
  },
];

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  return (
    <Section id="pricing" className="bg-background">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          align="center"
          badge="Pricing"
          title="Simple pricing for every stage."
          description="Choose the plan that fits your business today and upgrade anytime."
        />

        <PricingToggle billing={billing} setBilling={setBilling} />

        <div className="mt-10 grid gap-6 lg:mt-16 lg:grid-cols-3 lg:gap-8">
          {plans.map((plan) => (
            <PricingCard key={plan.name} {...plan} billing={billing} />
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-muted-foreground">
          30-day money-back guarantee · Cancel anytime
        </p>
      </div>
    </Section>
  );
}
