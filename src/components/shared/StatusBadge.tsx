// components/shared/StatusBadge.tsx

import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const statusBadgeVariants = cva(
  "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium sm:px-4 sm:text-sm",
  {
    variants: {
      variant: {
        primary: "bg-primary/10 text-primary",

        success: "bg-emerald-500/10 text-emerald-600",

        warning: "bg-amber-500/10 text-amber-600",

        danger: "bg-red-500/10 text-red-600",

        secondary: "bg-muted text-muted-foreground",
      },
    },

    defaultVariants: {
      variant: "primary",
    },
  },
);

interface StatusBadgeProps
  extends
    React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof statusBadgeVariants> {}

export default function StatusBadge({
  className,
  variant,
  ...props
}: StatusBadgeProps) {
  return (
    <span
      className={cn(statusBadgeVariants({ variant }), className)}
      {...props}
    />
  );
}
