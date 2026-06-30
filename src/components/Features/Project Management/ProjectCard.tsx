import { CalendarDays, Flag } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
}

const priorityColors = {
  High: "bg-red-500/10 text-red-500",
  Medium: "bg-amber-500/10 text-amber-500",
  Low: "bg-emerald-500/10 text-emerald-500",
};

export default function ProjectCard({
  title,
  client,
  priority,
}: ProjectCardProps) {
  return (
    <div className="cursor-pointer rounded-2xl border border-border bg-background p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <h4 className="font-medium">{title}</h4>

      <p className="mt-1 text-sm text-muted-foreground">{client}</p>

      <div className="mt-5 flex items-center justify-between">
        <span
          className={`rounded-full px-2.5 py-1 text-xs font-medium ${priorityColors[priority]}`}>
          <Flag className="mr-1 inline h-3 w-3" />
          {priority}
        </span>

        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          Jul 30
        </div>
      </div>
    </div>
  );
}
