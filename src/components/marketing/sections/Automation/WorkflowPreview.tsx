import PreviewCard from "@/components/shared/PreviewCard";
import PreviewHeader from "@/components/shared/PreviewHeader";
import { ArrowDown, BadgeCheck, Bell, CreditCard, Mail } from "lucide-react";
import AutomationLog from "./AutomationLog";
import WorkflowNode from "./WorkflowNode";

export default function WorkflowPreview() {
  return (
    <PreviewCard>
      <PreviewHeader
        eyebrow="Workflow"
        title="Payment Automation"
        badge="Active"
      />

      <div className="flex flex-col items-center">
        <WorkflowNode
          icon={CreditCard}
          title="Invoice Paid"
          description="Trigger"
        />

        <ArrowDown className="my-2 h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />

        <WorkflowNode
          icon={Mail}
          title="Send Thank You Email"
          description="Email"
        />

        <ArrowDown className="my-2 h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />

        <WorkflowNode
          icon={BadgeCheck}
          title="Update Project Status"
          description="Automation"
        />

        <ArrowDown className="my-2 h-4 w-4 text-muted-foreground sm:h-5 sm:w-5" />

        <WorkflowNode
          icon={Bell}
          title="Notify Team"
          description="Notification"
        />
      </div>

      <AutomationLog />
    </PreviewCard>
  );
}
