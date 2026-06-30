import { BadgeCheck, Bell, CreditCard, Mail, ArrowDown } from "lucide-react";
import WorkflowNode from "./WorkflowNode";
import AutomationLog from "./AutomationLog";

export default function WorkflowPreview() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Workflow</p>

          <h3 className="mt-1 text-xl font-semibold">Payment Automation</h3>
        </div>

        <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Active
        </span>
      </div>

      <div className="flex flex-col items-center">
        <WorkflowNode
          icon={CreditCard}
          title="Invoice Paid"
          description="Trigger"
        />

        <ArrowDown className="my-2 h-5 w-5 text-muted-foreground" />

        <WorkflowNode
          icon={Mail}
          title="Send Thank You Email"
          description="Email"
        />

        <ArrowDown className="my-2 h-5 w-5 text-muted-foreground" />

        <WorkflowNode
          icon={BadgeCheck}
          title="Update Project Status"
          description="Automation"
        />

        <ArrowDown className="my-2 h-5 w-5 text-muted-foreground" />

        <WorkflowNode
          icon={Bell}
          title="Notify Team"
          description="Notification"
        />
      </div>

      <AutomationLog />
    </div>
  );
}
