import { marketingFeatures } from "@/data/marketing";
import AnalyticsPreview from "./AnalyticsPreview";
import FeatureSection from "@/components/shared/FeatureSection";

export default function Analytics() {
  return (
    <FeatureSection
      badge="Analytics"
      title={
        <>
          Make smarter
          <br />
          business decisions.
        </>
      }
      description="Understand your business with real-time analytics."
      features={marketingFeatures.analytics}
      preview={<AnalyticsPreview />}
    />
  );
}
