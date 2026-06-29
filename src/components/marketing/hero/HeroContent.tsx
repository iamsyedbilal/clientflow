import { Check } from "lucide-react";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-20 text-center">
      {/* Badge */}
      <div className="mb-2 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-1 text-sm font-medium text-primary backdrop-blur-sm">
        AI-powered platform for service businesses
      </div>

      {/* Heading */}
      <h1 className="max-w-5xl text-5xl font-bold leading-tight tracking-tight text-foreground lg:text-7xl">
        Run your clients, projects
        <br />
        and billing <span className="text-primary">in one place.</span>
      </h1>

      {/* Description */}
      <p className="mt-4 max-w-2xl text-lg leading-6 text-muted-foreground">
        ClientFlow helps freelancers and agencies streamline their workflow, get
        paid faster, and grow their business.
      </p>

      <HeroButtons />

      {/* Trust Points */}
      <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>14-day free trial</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>No credit card required</span>
        </div>

        <div className="flex items-center gap-2">
          <Check className="h-4 w-4 text-primary" />
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
