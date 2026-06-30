import { Check } from "lucide-react";
import InvoicePreview from "./InvoicePreview";

const features = [
  "Create professional invoices",
  "Accept online payments",
  "Recurring billing",
  "Automatic payment reminders",
];

export default function Invoicing() {
  return (
    <section className="py-16">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}

        <InvoicePreview />

        {/* Right */}

        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Invoicing
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Get paid faster
            <br />
            with professional invoices.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Create branded invoices, accept online payments and automate
            reminders so you spend less time chasing clients.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
