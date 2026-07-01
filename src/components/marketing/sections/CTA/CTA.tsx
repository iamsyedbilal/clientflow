import Section from "@/components/shared/Section";
import { Button } from "@/components/ui/Button";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export default function CTA() {
  return (
    <Section className="py-32">
      <div className="relative overflow-hidden rounded-[40px] border border-border bg-linear-to-br from-primary/10 via-background to-primary/5 px-8 py-24 text-center">
        {/* Background Blur */}
        <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/20 blur-[120px]" />

        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Get Started Today
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight lg:text-6xl">
            Spend less time managing
            <br />
            your business.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            ClientFlow helps freelancers and agencies organize clients,
            projects, invoices and communication in one place.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
