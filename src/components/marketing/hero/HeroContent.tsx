import { Check } from "lucide-react";
import HeroButtons from "./HeroButtons";

export default function HeroContent() {
  return (
    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center py-8 text-center ">
      {/* Badge */}
      <div className="mb-4 inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary sm:px-4 sm:text-sm">
        AI-powered platform for service businesses
      </div>

      {/* Heading */}
      <h1 className="max-w-5xl text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl xl:text-7xl">
        Run your entire freelance business
        {/* <br /> */}
        <span className="text-primary"> in one place.</span>
      </h1>

      {/* Description */}
      <p className="mt-5 max-w-2xl px-2 text-base leading-7 text-muted-foreground sm:px-0 sm:text-lg">
        ClientFlow helps freelancers and agencies streamline their workflow, get
        paid faster, and grow their business.
      </p>

      <HeroButtons />

      {/* Trust Points */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-muted-foreground lg:mt-10 lg:gap-x-8">
        <div className="flex items-center gap-2 whitespace-nowrap">
          <Check className="h-4 w-4 text-primary" />
          <span>14-day free trial</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <Check className="h-4 w-4 text-primary" />
          <span>No credit card required</span>
        </div>

        <div className="flex items-center gap-2 whitespace-nowrap">
          <Check className="h-4 w-4 text-primary" />
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
}
