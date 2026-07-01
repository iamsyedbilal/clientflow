import { marketingFeatures } from "@/data/marketing";
import WorkflowPreview from "./WorkflowPreview";
import FeatureSection from "@/components/shared/FeatureSection";

export default function Automation() {
  return (
    <FeatureSection
      badge="Automation"
      title={
        <>
          Let ClientFlow
          <br />
          handle the repetitive work.
        </>
      }
      description="Create simple workflows that automatically send emails..."
      features={marketingFeatures.automation}
      preview={<WorkflowPreview />}
    />
  );
}
