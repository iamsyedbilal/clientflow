import { Bell, Search, Plus, ChevronDown } from "lucide-react";

import { Button } from "@/components/ui/Button";

export default function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4  border-b border-border bg-background p-4 sm:p-6 lg:h-20 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      {/* Left */}
      <div>
        <p className="text-sm text-muted-foreground">Welcome back 👋</p>

        {/* <h2 className="mt-1 text-2xl font-semibold tracking-tight">
          Dashboard
        </h2> */}
      </div>

      {/* Right */}
      <div className="flex w-full flex-wrap items-center gap-3 lg:w-auto lg:flex-nowrap lg:gap-4">
        {/* Search */}
        <div className="flex h-11 flex-1 items-center gap-3 rounded-xl border border-border bg-background px-4 lg:w-72 lg:flex-none">
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
        <Button size="sm">
          <Plus className="lg:mr-2 h-4 w-4" />
          <span className="hidden sm:inline">New Invoice</span>
        </Button>
        {/* User */}
        <button className="flex items-center gap-3 rounded-xl border border-border px-3 py-2 transition hover:bg-surface">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
            JD
          </div>

          <div className="hidden text-left lg:block">
            <p className="text-sm font-medium">John Doe</p>
            <p className="text-xs text-muted-foreground">Freelancer</p>
          </div>

          <ChevronDown className="hidden h-4 w-4 text-muted-foreground lg:block" />
        </button>
      </div>
    </header>
  );
}
