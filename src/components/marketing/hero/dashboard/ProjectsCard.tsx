import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "Client Portal",
    status: "Active",
    progress: 68,
    due: "Jul 30",
  },
  {
    id: 2,
    name: "Mobile App",
    status: "Review",
    progress: 82,
    due: "Aug 05",
  },
  {
    id: 3,
    name: "Marketing Website",
    status: "Planning",
    progress: 24,
    due: "Aug 18",
  },
];

export default function ProjectsCard() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Projects</h3>
          <p className="text-sm text-muted-foreground">
            Active work in progress
          </p>
        </div>

        <Link
          href="#"
          className="text-sm font-medium text-primary transition hover:opacity-80">
          View All
        </Link>
      </div>

      {/* Projects */}
      <div className="space-y-5">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-xl border border-border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div className="mb-3 flex items-center justify-between">
              <div>
                <h4 className="font-medium">{project.name}</h4>

                <p className="mt-1 text-xs text-muted-foreground">
                  Due {project.due}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {project.status}
                </span>

                <ArrowUpRight className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>

            {/* Progress */}
            <div className="mb-2 h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{
                  width: `${project.progress}%`,
                }}
              />
            </div>

            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{project.progress}% Complete</span>

              <span>{100 - project.progress}% Remaining</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
