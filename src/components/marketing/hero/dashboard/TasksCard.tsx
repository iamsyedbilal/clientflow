import { Circle, CircleCheckBig, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const tasks = [
  {
    id: 1,
    title: "Send invoice to Acme Inc.",
    completed: true,
  },
  {
    id: 2,
    title: "Review Client Portal UI",
    completed: false,
  },
  {
    id: 3,
    title: "Prepare project proposal",
    completed: false,
  },
  {
    id: 4,
    title: "Follow up with Nova Studio",
    completed: true,
  },
];

export default function TasksCard() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Today&apos;s Tasks</h3>
          <p className="text-sm text-muted-foreground">
            Stay on top of your work
          </p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-primary transition hover:opacity-80">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Tasks */}
      <div className="space-y-3">
        {tasks.map((task) => (
          <div
            key={task.id}
            className="flex items-center justify-between rounded-xl border border-border p-4 transition-all duration-200 hover:bg-surface hover:shadow-sm">
            <div className="flex items-center gap-3">
              {task.completed ? (
                <CircleCheckBig className="h-5 w-5 text-emerald-500" />
              ) : (
                <Circle className="h-5 w-5 text-muted-foreground" />
              )}

              <span
                className={
                  task.completed
                    ? "text-sm text-muted-foreground line-through"
                    : "text-sm font-medium text-foreground"
                }>
                {task.title}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm text-muted-foreground">2 of 4 completed</span>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          50%
        </span>
      </div>
    </div>
  );
}
