import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import AnalyticsPreview from "./AnalyticsPreview";
import { marketingFeatures } from "@/data/marketing";

export default function Analytics() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}

        <div>
          <SectionHeader
            badge="Analytics"
            title={
              <>
                Make smarter
                <br />
                business decisions.
              </>
            }
            description="Understand your business with real-time analytics. Track revenue, project performance and client growth from one dashboard."
          />

          <FeatureList items={[...marketingFeatures.analytics]} />
        </div>

        {/* Right */}

        <AnalyticsPreview />
      </div>
    </Section>
  );
}
