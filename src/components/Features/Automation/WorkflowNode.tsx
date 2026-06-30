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
    <div className="w-full max-w-sm rounded-2xl border border-border bg-surface-secondary p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h4 className="font-semibold">{title}</h4>

          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </div>
  );
}
