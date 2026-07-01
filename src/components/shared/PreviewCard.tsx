import { cn } from "@/lib/utils";

interface PreviewCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PreviewCard({ children, className }: PreviewCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border bg-background p-4 shadow-xl sm:p-6 lg:rounded-3xl",
        className,
      )}>
      {children}
    </div>
  );
}
