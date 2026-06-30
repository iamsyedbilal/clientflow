import { Check } from "lucide-react";
import AnalyticsPreview from "./AnalyticsPreview";

const features = [
  "Revenue insights",
  "Project performance",
  "Client growth tracking",
  "Business reports",
];

export default function Analytics() {
  return (
    <section className="py-32">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}

        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Analytics
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Make smarter
            <br />
            business decisions.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Understand your business with real-time analytics. Track revenue,
            project performance and client growth from one dashboard.
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

        {/* Right */}

        <AnalyticsPreview />
      </div>
    </section>
  );
}
