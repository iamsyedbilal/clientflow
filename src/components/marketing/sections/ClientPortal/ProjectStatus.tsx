const projects = [
  {
    name: "Website Redesign",
    progress: 82,
  },
  {
    name: "Brand Identity",
    progress: 55,
  },
];

export default function ProjectStatus() {
  return (
    <div className="space-y-5 rounded-2xl border border-border p-4 sm:p-5">
      <h4 className="text-sm font-semibold sm:text-base">Active Projects</h4>
      {projects.map((project) => (
        <div key={project.name}>
          <div className="mb-2 flex justify-between">
            <span className="text-sm sm:text-base">{project.name}</span>

            <span className="text-sm text-muted-foreground">
              {project.progress}%
            </span>
          </div>

          <div className="h-2 rounded-full bg-surface-secondary">
            <div
              className="h-full rounded-full bg-primary"
              style={{ width: `${project.progress}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
