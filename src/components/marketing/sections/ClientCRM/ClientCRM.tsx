import FeatureSection from "@/components/shared/FeatureSection";
import { marketingFeatures } from "@/data/marketing";
import ClientList from "./ClientList";

export default function ClientCRM() {
  return (
    <FeatureSection
      id="features"
      badge="Client CRM"
      title={
        <>
          Every client.
          <br />
          One organized workspace.
        </>
      }
      description="Manage leads, active clients, notes, invoices and communication from a single dashboard."
      features={marketingFeatures.clientCRM}
      preview={<ClientList />}
      // reverse={true}
    />
  );
}
