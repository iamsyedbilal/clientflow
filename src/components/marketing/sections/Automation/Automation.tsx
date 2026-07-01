import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import WorkflowPreview from "./WorkflowPreview";
import { marketingFeatures } from "@/data/marketing";

export default function Automation() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        <div>
          <SectionHeader
            badge="Automation"
            title={
              <>
                Let ClientFlow
                <br />
                handle the repetitive work.
              </>
            }
            description="Create simple workflows that automatically send emails, update
            projects, notify your team, and keep clients informed."
          />

          <FeatureList items={[...marketingFeatures.automation]} />
        </div>

        <WorkflowPreview />
      </div>
    </Section>
  );
}
