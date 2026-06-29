import Logo from "@/components/shared/Logo";
import {
  LayoutGrid,
  Users,
  FolderKanban,
  FileText,
  FileSignature,
  CreditCard,
  Clock3,
  BarChart3,
  Settings,
  CircleHelp,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigation = [
  {
    label: "Dashboard",
    href: "#",
    icon: LayoutGrid,
    active: true,
  },
  {
    label: "Clients",
    href: "#",
    icon: Users,
  },
  {
    label: "Projects",
    href: "#",
    icon: FolderKanban,
  },
  {
    label: "Invoices",
    href: "#",
    icon: FileText,
  },
  {
    label: "Contracts",
    href: "#",
    icon: FileSignature,
  },
  {
    label: "Payments",
    href: "#",
    icon: CreditCard,
  },
  {
    label: "Time Tracking",
    href: "#",
    icon: Clock3,
  },
  {
    label: "Reports",
    href: "#",
    icon: BarChart3,
  },
];

export default function DashboardSidebar() {
  return (
    <aside className="flex h-full flex-col border-r border-border bg-background">
      {/* Logo */}
      <div className="border-border px-6 py-2">
        <Logo size="lg" showText={false} />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">
        <ul className="space-y-1.5">
          {navigation.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200",
                    item.active
                      ? "bg-primary text-primary-foreground shadow-sm"
                      : "text-muted-foreground hover:bg-surface hover:text-foreground",
                  )}>
                  <Icon className="h-5 w-5" />

                  <span>{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom */}
      <div className="border-t border-border p-4">
        <Link
          href="#"
          className="mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-surface hover:text-foreground">
          <Settings className="h-5 w-5" />
          Settings
        </Link>

        <Link
          href="#"
          className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-surface hover:text-foreground">
          <CircleHelp className="h-5 w-5" />
          Help & Support
        </Link>
      </div>
    </aside>
  );
}
