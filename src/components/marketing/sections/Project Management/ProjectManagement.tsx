import FeatureSection from "@/components/shared/FeatureSection";
import { marketingFeatures } from "@/data/marketing";
import KanbanBoard from "./KanbanBoard";

export default function ProjectManagement() {
  return (
    <FeatureSection
      badge="Project Management"
      title={
        <>
          Keep every project
          <br />
          moving forward.
        </>
      }
      description="Plan, organize and deliver projects with an intuitive Kanban board."
      features={marketingFeatures.projectManagement}
      preview={<KanbanBoard />}
    />
  );
}
