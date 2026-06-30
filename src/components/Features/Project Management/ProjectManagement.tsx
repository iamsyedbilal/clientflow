import { Check } from "lucide-react";
import KanbanBoard from "./KanbanBoard";

const features = [
  "Visual Kanban workflow",
  "Track project progress",
  "Due dates & priorities",
  "Client-linked projects",
];

export default function ProjectManagement() {
  return (
    <section className="py-32">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left Content */}
        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Project Management
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Keep every project
            <br />
            moving forward.
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
            Plan, organize and deliver projects with an intuitive Kanban board.
            Track every stage from lead to launch without losing visibility.
          </p>

          <div className="mt-8 space-y-4">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <KanbanBoard />
      </div>
    </section>
  );
}
