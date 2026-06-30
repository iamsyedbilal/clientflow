import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
}

interface KanbanColumnProps {
  title: string;
  projects: Project[];
}

export default function KanbanColumn({ title, projects }: KanbanColumnProps) {
  return (
    <div className="rounded-2xl bg-surface-secondary p-4">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>

        <span className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground">
          {projects.length}
        </span>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}
