import FeatureList from "@/components/shared/FeatureList";
import Section from "@/components/shared/Section";
import SectionHeader from "@/components/shared/SectionHeader";
import KanbanBoard from "./KanbanBoard";
import { marketingFeatures } from "@/data/marketing";

export default function ProjectManagement() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <SectionHeader
            badge="Project Management"
            title={
              <>
                Keep every project
                <br />
                moving forward.
              </>
            }
            description="Plan, organize and deliver projects with an intuitive Kanban board."
          />

          <FeatureList items={[...marketingFeatures.projectManagement]} />
        </div>

        {/* Right */}
        <KanbanBoard />
      </div>
    </Section>
  );
}
