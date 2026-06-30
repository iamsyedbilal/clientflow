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
    <div className="flex items-center justify-between rounded-2xl p-4 shadow-none">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-5 w-5 text-primary" />
        </div>

        <div>
          <h4 className="font-medium">{name}</h4>
          <p className="text-sm text-muted-foreground">{status}</p>
        </div>
      </div>

      <div className="h-3 w-3 rounded-full bg-green-500" />
    </div>
  );
}
