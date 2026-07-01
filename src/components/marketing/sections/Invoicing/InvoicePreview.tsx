import PreviewCard from "@/components/shared/PreviewCard";
import PreviewHeader from "@/components/shared/PreviewHeader";
import InvoiceTable from "./InvoiceTable";
import PaymentSummary from "./PaymentSummary";

export default function InvoicePreview() {
  return (
    <PreviewCard>
      <PreviewHeader eyebrow="Invoice" title="#INV-2025-1024" badge="Paid" />

      <div className="mb-6">
        <p className="text-sm text-muted-foreground">Client</p>

        <h4 className="mt-1 text-sm font-semibold sm:text-base">Acme Inc.</h4>

        <p className="text-sm text-muted-foreground">billing@acme.com</p>
      </div>

      <InvoiceTable />

      <PaymentSummary />
    </PreviewCard>
  );
}
