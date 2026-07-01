import ClientFiles from "./ClientFiles";
import ProjectStatus from "./ProjectStatus";

export default function PortalPreview() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Welcome back</p>

          <h3 className="mt-1 text-2xl font-semibold">Acme Inc.</h3>
        </div>

        <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Client Portal
        </span>
      </div>

      <ProjectStatus />

      <div className="mt-6">
        <ClientFiles />
      </div>
    </div>
  );
}
