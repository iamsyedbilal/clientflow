import Section from "@/components/shared/Section";
import StatusBadge from "@/components/shared/StatusBadge";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <Section>
      <div className="relative overflow-hidden rounded-3xl border border-border bg-linear-to-br from-primary/10 via-background to-primary/5 px-5 py-14 text-center sm:px-8 sm:py-18 lg:rounded-[40px] lg:py-24">
        {/* Background Blur */}
        <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-primary/20 blur-[90px] lg:h-72 lg:w-72 lg:blur-[120px]" />
        <div className="relative z-10 mx-auto max-w-3xl">
          <StatusBadge>Get Started Today</StatusBadge>

          <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl lg:text-6xl">
            Spend less time managing
            <span className="block">your business.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
            ClientFlow helps freelancers and agencies organize clients,
            projects, invoices and communication in one place.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4">
            <Button size="lg">
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <Button variant="secondary" size="lg">
              Book a Demo
            </Button>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              14-day free trial
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              No credit card required
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              Cancel anytime
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
