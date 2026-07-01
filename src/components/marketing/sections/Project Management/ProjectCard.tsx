import PreviewCard from "@/components/shared/PreviewCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { CalendarDays, Flag } from "lucide-react";

interface ProjectCardProps {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
  date: string;
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
  date,
}: ProjectCardProps) {
  return (
    <PreviewCard>
      <h4 className="text-sm font-medium sm:text-base">{title}</h4>

      <p className="mt-1 text-sm text-muted-foreground">{client}</p>

      <div className="mt-4 flex items-center justify-center gap-2 sm:mt-5 sm:gap-3">
        <StatusBadge className={priorityColors[priority]}>
          <Flag className="inline h-3 w-3" />
          {priority}
        </StatusBadge>

        <div className="flex items-center justify-between gap-1 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" />
          {new Date(date).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </div>
      </div>
    </PreviewCard>
  );
}
