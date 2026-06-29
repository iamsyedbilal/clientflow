import { LucideIcon, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  change: string;
  positive?: boolean;
  icon: LucideIcon;
}

export default function StatCard({
  title,
  value,
  change,
  positive = true,
  icon: Icon,
}: StatCardProps) {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">{title}</p>

          <h3 className="mt-2 text-3xl font-bold tracking-tight">{value}</h3>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
          <Icon className="h-6 w-6 text-primary" />
        </div>
      </div>

      <div
        className={cn(
          "mt-6 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-xs font-medium",
          positive
            ? "bg-emerald-500/10 text-emerald-600"
            : "bg-red-500/10 text-red-600",
        )}>
        {positive ? (
          <ArrowUpRight className="h-3.5 w-3.5" />
        ) : (
          <ArrowDownRight className="h-3.5 w-3.5" />
        )}

        {change}
      </div>
    </div>
  );
}
