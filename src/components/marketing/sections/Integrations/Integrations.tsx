import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import IntegrationsPreview from "./IntegrationsPreview";
import { marketingFeatures } from "@/data/marketing";

export default function Integrations() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <div>
          <SectionHeader
            badge="Integrations"
            title={
              <>
                Connect your
                <br />
                favorite tools.
              </>
            }
            description="ClientFlow works seamlessly with the tools you already use, so your workflow stays connected without switching between dozens of apps."
          />

          <FeatureList items={[...marketingFeatures.integrations]} />
        </div>

        <IntegrationsPreview />
      </div>
    </Section>
  );
}
