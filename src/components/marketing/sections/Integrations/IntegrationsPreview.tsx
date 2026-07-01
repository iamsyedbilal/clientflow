import IntegrationCard from "./IntegrationCard";

import { Calendar, CreditCard, Workflow } from "lucide-react";

export default function IntegrationsPreview() {
  return (
    <div className="space-y-5 p-6">
      <div className="mb-2">
        <p className="text-sm text-muted-foreground">Connected Apps</p>

        <h3 className="mt-1 text-xl font-semibold">4 Active Integrations</h3>
      </div>

      <IntegrationCard icon={CreditCard} name="Stripe" />

      <IntegrationCard icon={Calendar} name="Google Calendar" />

      {/* <IntegrationCard icon={Slack} name="Slack" /> */}

      <IntegrationCard icon={Workflow} name="Zapier" />
    </div>
  );
}
