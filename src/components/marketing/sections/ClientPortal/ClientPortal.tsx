import FeatureSection from "@/components/shared/FeatureSection";
import PortalPreview from "./PortalPreview";
import { marketingFeatures } from "@/data/marketing";

export default function ClientPortal() {
  return (
    <FeatureSection
      reverse
      badge="Client Portal"
      title={
        <>
          Give clients
          <br />
          their own workspace.
        </>
      }
      description="Share project updates, invoices, contracts and files in one secure place. Clients always know what's happening without endless emails."
      features={marketingFeatures.clientPortal}
      preview={<PortalPreview />}
    />
  );
}
