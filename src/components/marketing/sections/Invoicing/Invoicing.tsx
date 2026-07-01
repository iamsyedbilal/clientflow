import FeatureSection from "@/components/shared/FeatureSection";
import InvoicePreview from "./InvoicePreview";
import { marketingFeatures } from "@/data/marketing";

export default function Invoicing() {
  return (
    <FeatureSection
      reverse
      badge="Invoicing"
      title={
        <>
          Get paid faster
          <br />
          with professional invoices.
        </>
      }
      description="Create branded invoices, accept online payments and automate reminders so you spend less time chasing clients."
      features={marketingFeatures.invoicing}
      preview={<InvoicePreview />}
    />
  );
}
