import PreviewCard from "@/components/shared/PreviewCard";
import IntegrationCard from "./IntegrationCard";

import { Calendar, CreditCard, Workflow } from "lucide-react";
import PreviewHeader from "@/components/shared/PreviewHeader";

export default function IntegrationsPreview() {
  return (
    <PreviewCard>
      <PreviewHeader
        eyebrow="Integrations"
        title="Connect your favorite tools."
      />

      <div className="mt-5 space-y-4 sm:mt-6 sm:space-y-5">
        <IntegrationCard icon={CreditCard} name="Stripe" />

        <IntegrationCard icon={Calendar} name="Google Calendar" />

        <IntegrationCard icon={Workflow} name="Zapier" />
      </div>
    </PreviewCard>
  );
}
