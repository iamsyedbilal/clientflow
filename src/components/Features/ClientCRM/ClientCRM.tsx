import ClientList from "./ClientList";
import { Check } from "lucide-react";

export default function ClientCRM() {
  return (
    <section className="py-32">
      <div className="grid items-center gap-20 lg:grid-cols-2">
        {/* Left */}
        <div>
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Client CRM
          </span>

          <h2 className="mt-6 text-5xl font-bold tracking-tight">
            Every client.
            <br />
            One organized workspace.
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Manage leads, active clients, notes, invoices and communication from
            a single dashboard.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Complete client profiles",
              "Notes & communication history",
              "Invoice and payment tracking",
              "Projects linked to every client",
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <Check className="h-5 w-5 text-primary" />
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right */}
        <ClientList />
      </div>
    </section>
  );
}
