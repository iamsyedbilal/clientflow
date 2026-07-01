import StatusBadge from "@/components/shared/StatusBadge";
import { LucideIcon } from "lucide-react";

interface IntegrationCardProps {
  icon: LucideIcon;
  name: string;
  status?: string;
}

export default function IntegrationCard({
  icon: Icon,
  name,
  status = "Connected",
}: IntegrationCardProps) {
  return (
    <div className="flex items-center justify-between rounded-2xl border border-border bg-surface-secondary p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:p-4">
      <div className="flex min-w-0 items-center gap-3">
        <StatusBadge>
          <Icon className="h-4 w-4 text-primary sm:h-5 sm:w-5" />
        </StatusBadge>

        <div>
          <h4 className="text-sm font-medium sm:text-base">{name}</h4>
          <p className="text-sm text-muted-foreground">{status}</p>
        </div>
      </div>
      <div className="h-2.5 w-2.5 shrink-0 rounded-full bg-green-500 sm:h-3 sm:w-3" />
    </div>
  );
}
