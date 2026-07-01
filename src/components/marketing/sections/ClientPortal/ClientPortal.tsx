import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import PortalPreview from "./PortalPreview";
import { marketingFeatures } from "@/data/marketing";

export default function ClientPortal() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <PortalPreview />

        <div>
          <SectionHeader
            badge="Client Portal"
            title={
              <>
                Give clients
                <br />
                their own workspace.
              </>
            }
            description="Share project updates, invoices, contracts and files in one secure
            place. Clients always know what's happening without endless
            emails."
          />

          <FeatureList items={[...marketingFeatures.clientPortal]} />
        </div>
      </div>
    </Section>
  );
}
