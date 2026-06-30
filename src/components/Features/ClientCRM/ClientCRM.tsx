import Section from "@/components/shared/Section";
import ClientList from "./ClientList";
import FeatureList from "@/components/shared/FeatureList";
import SectionHeader from "@/components/shared/SectionHeader";
import { marketingFeatures } from "@/data/marketing";

export default function ClientCRM() {
  return (
    <Section>
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <SectionHeader
            badge="Client CRM"
            title={
              <>
                Every client.
                <br />
                One organized workspace.
              </>
            }
            description="Manage leads, active clients, notes, invoices and communication from a single dashboard."
          />

          <FeatureList items={[...marketingFeatures.clientCRM]} />
        </div>

        {/* Right */}
        <ClientList />
      </div>
    </Section>
  );
}
