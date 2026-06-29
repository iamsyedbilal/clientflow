import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

const invoices = [
  {
    id: "#INV-1024",
    client: "Acme Inc.",
    amount: "$2,400",
    status: "Paid",
  },
  {
    id: "#INV-1025",
    client: "Nova Studio",
    amount: "$850",
    status: "Pending",
  },
  {
    id: "#INV-1026",
    client: "PixelCraft",
    amount: "$1,320",
    status: "Overdue",
  },
];

const statusStyles = {
  Paid: "bg-emerald-500/10 text-emerald-600",
  Pending: "bg-amber-500/10 text-amber-600",
  Overdue: "bg-red-500/10 text-red-600",
};

export default function RecentInvoices() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      {/* Header */}
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Recent Invoices</h3>
          <p className="text-sm text-muted-foreground">
            Latest client payments
          </p>
        </div>

        <Link
          href="#"
          className="flex items-center gap-1 text-sm font-medium text-primary transition hover:opacity-80">
          View All
          <ArrowUpRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Invoice List */}
      <div className="space-y-4">
        {invoices.map((invoice) => (
          <div
            key={invoice.id}
            className="flex items-center justify-between rounded-xl border border-border p-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md">
            <div>
              <p className="font-medium">{invoice.client}</p>

              <p className="mt-1 text-xs text-muted-foreground">{invoice.id}</p>
            </div>

            <div className="text-right">
              <p className="font-semibold">{invoice.amount}</p>

              <span
                className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-xs font-medium ${
                  statusStyles[invoice.status as keyof typeof statusStyles]
                }`}>
                {invoice.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
