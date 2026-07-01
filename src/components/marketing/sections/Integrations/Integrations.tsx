import { marketingFeatures } from "@/data/marketing";
import IntegrationsPreview from "./IntegrationsPreview";
import FeatureSection from "@/components/shared/FeatureSection";

export default function Integrations() {
  return (
    <FeatureSection
      badge="Integrations"
      title={
        <>
          Connect your
          <br />
          favorite tools.
        </>
      }
      description="ClientFlow works seamlessly with the tools you already use."
      features={marketingFeatures.integrations}
      preview={<IntegrationsPreview />}
      // reverse={true}
    />
  );
}
