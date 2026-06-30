import { FileText, Download } from "lucide-react";

const files = [
  "Website Proposal.pdf",
  "Brand Guidelines.pdf",
  "Invoice INV-1024.pdf",
];

export default function ClientFiles() {
  return (
    <div className="rounded-2xl border border-border p-5">
      <h4 className="mb-5 font-semibold">Shared Files</h4>

      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file}
            className="flex items-center justify-between rounded-xl bg-surface-secondary p-3">
            <div className="flex items-center gap-3">
              <FileText className="h-5 w-5 text-primary" />

              <span className="text-sm">{file}</span>
            </div>

            <Download className="h-4 w-4 text-muted-foreground" />
          </div>
        ))}
      </div>
    </div>
  );
}
