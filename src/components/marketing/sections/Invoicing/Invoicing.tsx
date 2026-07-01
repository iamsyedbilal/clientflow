import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import InvoicePreview from "./InvoicePreview";
import { marketingFeatures } from "@/data/marketing";

export default function Invoicing() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}

        <InvoicePreview />

        {/* Right */}

        <div>
          <SectionHeader
            badge="Invoicing"
            title={
              <>
                Get paid faster
                <br />
                with professional invoices.
              </>
            }
            description="Create branded invoices, accept online payments and automate
            reminders so you spend less time chasing clients."
          />

          <FeatureList items={[...marketingFeatures.invoicing]} />
        </div>
      </div>
    </Section>
  );
}
