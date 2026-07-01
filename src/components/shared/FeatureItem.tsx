import { Check } from "lucide-react";

interface FeatureItemProps {
  children: React.ReactNode;
}

export default function FeatureItem({ children }: FeatureItemProps) {
  return (
    <div className="flex items-start gap-3">
      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />

      <span className="text-sm leading-6 sm:text-base">{children}</span>
    </div>
  );
}
