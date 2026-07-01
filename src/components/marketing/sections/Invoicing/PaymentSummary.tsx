const stats = [
  {
    title: "Paid",
    value: "$42.8k",
    color: "text-primary",
  },
  {
    title: "Pending",
    value: "$7.8k",
    color: "text-yellow-500",
  },
  {
    title: "Overdue",
    value: "$920",
    color: "text-red-500",
  },
];

export default function PaymentSummary() {
  return (
    <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-border bg-surface-secondary p-4">
          <p className="text-sm text-muted-foreground">{stat.title}</p>

          <p className={`mt-2 text-xl font-bold ${stat.color}`}>{stat.value}</p>
        </div>
      ))}
    </div>
  );
}
