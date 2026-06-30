import { CheckCircle2 } from "lucide-react";

const logs = [
  "Thank you email sent",
  "Project moved to Completed",
  "Slack notification delivered",
];

export default function AutomationLog() {
  return (
    <div className="mt-8 rounded-2xl border border-border p-5">
      <h4 className="mb-4 font-semibold">Recent Activity</h4>

      <div className="space-y-3">
        {logs.map((log) => (
          <div key={log} className="flex items-center gap-3">
            <CheckCircle2 className="h-4 w-4 text-primary" />

            <span className="text-sm text-muted-foreground">{log}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
