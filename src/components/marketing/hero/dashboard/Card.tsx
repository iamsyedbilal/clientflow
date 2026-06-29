import { DollarSign, Wallet, FolderKanban, Users } from "lucide-react";

import StatCard from "./StatsCards";

const stats = [
  {
    title: "Revenue",
    value: "$48.2k",
    change: "+12.5%",
    positive: true,
    icon: DollarSign,
  },
  {
    title: "Outstanding",
    value: "$7.8k",
    change: "-3.1%",
    positive: false,
    icon: Wallet,
  },
  {
    title: "Projects",
    value: "18",
    change: "+4",
    positive: true,
    icon: FolderKanban,
  },
  {
    title: "Clients",
    value: "42",
    change: "+8",
    positive: true,
    icon: Users,
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          change={stat.change}
          positive={stat.positive}
          icon={stat.icon}
        />
      ))}
    </div>
  );
}
