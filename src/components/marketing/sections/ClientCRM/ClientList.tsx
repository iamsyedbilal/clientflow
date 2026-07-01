"use client";
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
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl">
      {/* Search */}
      <div className="mb-6 flex items-center gap-3 rounded-xl border border-border px-4 py-3">
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
              className="flex items-center justify-between rounded-2xl border border-border p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {client.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-medium">{client.name}</h4>

                  <p className="text-sm text-muted-foreground">
                    {client.email}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  {client.status}
                </span>

                <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
