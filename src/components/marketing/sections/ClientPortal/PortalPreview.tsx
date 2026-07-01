import PreviewCard from "@/components/shared/PreviewCard";
import PreviewHeader from "@/components/shared/PreviewHeader";
import ClientFiles from "./ClientFiles";
import ProjectStatus from "./ProjectStatus";

export default function PortalPreview() {
  return (
    <PreviewCard>
      <PreviewHeader
        eyebrow="Welcome back"
        title="Acme Inc."
        badge="Client Portal"
      />

      <ProjectStatus />

      <div className="mt-6">
        <ClientFiles />
      </div>
    </PreviewCard>
  );
}
