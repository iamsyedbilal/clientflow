import { Bell, Search, Plus, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function DashboardHeader() {
  return (
    <header className="flex h-20 items-center justify-between border-b border-border bg-background px-8">
      {/* Left */}
      <div>
        <p className="text-sm text-muted-foreground">Welcome back 👋</p>

        {/* <h2 className="mt-1 text-2xl font-semibold tracking-tight">
          Dashboard
        </h2> */}
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {/* Search */}
        <div className="flex h-11 w-72 items-center gap-3 rounded-xl border border-border bg-background px-4">
          <Search className="h-4 w-4 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
        </div>

        {/* Notification */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-border transition hover:bg-surface">
          <Bell className="h-5 w-5" />
        </button>

        {/* New Invoice */}
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          New Invoice
        </Button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-xl border border-border px-3 py-2 transition hover:bg-surface">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            JD
          </div>

          <div className="text-left">
            <p className="text-sm font-medium">John Doe</p>

            <p className="text-xs text-muted-foreground">Freelancer</p>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </button>
      </div>
    </header>
  );
}
