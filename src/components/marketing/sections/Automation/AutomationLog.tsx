import { CheckCircle2 } from "lucide-react";

const logs = [
  "Thank you email sent",
  "Project moved to Completed",
  "Slack notification delivered",
];

export default function AutomationLog() {
  return (
    <div className="mt-6 rounded-2xl border border-border p-4 sm:mt-8 sm:p-5">
      <h4 className="mb-4 text-sm font-semibold sm:text-base">
        Recent Activity
      </h4>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

            <span className="text-xs leading-6 text-muted-foreground sm:text-sm">
              {log}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
