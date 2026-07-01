"use client";
import PreviewCard from "@/components/shared/PreviewCard";
import StatusBadge from "@/components/shared/StatusBadge";
import { Search, MoreHorizontal } from "lucide-react";
import { useState } from "react";

const clients = [
  {
    name: "Acme Inc.",
    email: "hello@acme.com",
    status: "Active",
  },
  {
    name: "Nova Studio",
    email: "contact@nova.dev",
    status: "Proposal",
  },
  {
    name: "PixelCraft",
    email: "team@pixelcraft.io",
    status: "Completed",
  },
  {
    name: "Vision Labs",
    email: "info@visionlabs.com",
    status: "Active",
  },
];

export default function ClientList() {
  const [search, setSearch] = useState("");
  const filteredClients = clients.filter((client) => {
    const query = search.toLowerCase();
    return (
      client.name.toLowerCase().includes(query) ||
      client.email.toLowerCase().includes(query) ||
      client.status.toLowerCase().includes(query)
    );
  });

  return (
    <PreviewCard>
      {/* Search */}
      <div className="mb-5 flex items-center gap-3 rounded-xl border border-border px-3 py-3 sm:mb-6 sm:px-4">
        {" "}
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={search}
          placeholder="Search clients..."
          className="w-full bg-transparent outline-none"
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Client List */}
      <div className="space-y-3">
        {filteredClients.length === 0 ? (
          <div className="rounded-2xl border border-border p-6 text-center text-sm text-muted-foreground">
            No client available
          </div>
        ) : (
          filteredClients.map((client) => (
            <div
              key={client.name}
              className="flex flex-col gap-4 rounded-2xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-sm font-semibold text-primary sm:h-12 sm:w-12">
                  {client.name.charAt(0)}
                </div>

                <div>
                  <h4 className="text-sm font-semibold sm:text-base">
                    {client.name}
                  </h4>

                  <p className="text-xs text-muted-foreground sm:text-sm">
                    {" "}
                    {client.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-3">
                <StatusBadge>{client.status}</StatusBadge>
                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))
        )}
      </div>
    </PreviewCard>
  );
}
