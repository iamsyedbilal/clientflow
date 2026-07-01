import StatusBadge from "@/components/shared/StatusBadge";
import { LucideIcon } from "lucide-react";

interface WorkflowNodeProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WorkflowNode({
  icon: Icon,
  title,
  description,
}: WorkflowNodeProps) {
  return (
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface-secondary p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4">
      <div className="flex items-center gap-4">
        <StatusBadge>
          <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
        </StatusBadge>

        <div>
          <h4 className="text-sm font-semibold sm:text-base">{title}</h4>

          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
