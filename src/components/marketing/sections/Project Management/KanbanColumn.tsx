import ProjectCard from "./ProjectCard";

interface Project {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
}

interface KanbanColumnProps {
  title: string;
  projects: Project[];
  date: string;
}

export default function KanbanColumn({
  title,
  projects,
  date,
}: KanbanColumnProps) {
  return (
    <div className="rounded-xl bg-surface-secondary p-3 sm:p-4 lg:rounded-2xl">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="text-sm font-semibold sm:text-base">{title}</h3>

        <span className="rounded-full bg-background px-2.5 py-1 text-xs text-muted-foreground">
          {projects.length}
        </span>
      </div>

      <div className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} date={date} />
        ))}
      </div>
    </div>
  );
}
