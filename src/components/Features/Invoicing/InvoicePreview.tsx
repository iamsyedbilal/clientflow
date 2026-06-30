import PaymentSummary from "./PaymentSummary";
import InvoiceTable from "./InvoiceTable";

export default function InvoicePreview() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Invoice</p>

          <h3 className="mt-1 text-xl font-semibold">#INV-2025-1024</h3>
        </div>

        <span className="rounded-full bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
          Paid
        </span>
      </div>

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Client</p>

        <h4 className="mt-1 font-semibold">Acme Inc.</h4>

        <p className="text-sm text-muted-foreground">billing@acme.com</p>
      </div>

      <InvoiceTable />

      <PaymentSummary />
    </div>
  );
}
