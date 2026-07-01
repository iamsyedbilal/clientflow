import { DollarSign, Users, FolderKanban, TrendingUp } from "lucide-react";

const metrics = [
  {
    icon: DollarSign,
    title: "Revenue",
    value: "$48.2k",
    growth: "+18%",
  },
  {
    icon: Users,
    title: "Clients",
    value: "42",
    growth: "+6",
  },
  {
    icon: FolderKanban,
    title: "Projects",
    value: "18",
    growth: "+4",
  },
  {
    icon: TrendingUp,
    title: "Growth",
    value: "24%",
    growth: "+3%",
  },
];

export default function MetricsGrid() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {metrics.map((metric) => {
        const Icon = metric.icon;

        return (
          <div
            key={metric.title}
            className="rounded-2xl border border-border bg-surface-secondary p-5">
            <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
              <Icon className="h-5 w-5 text-primary" />
            </div>

            <p className="text-sm text-muted-foreground">{metric.title}</p>

            <h3 className="mt-2 text-3xl font-bold">{metric.value}</h3>

            <p className="mt-1 text-sm text-primary">
              {metric.growth} this month
            </p>
          </div>
        );
      })}
    </div>
  );
}
