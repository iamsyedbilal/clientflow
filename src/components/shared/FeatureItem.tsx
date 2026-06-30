import { Check } from "lucide-react";

interface FeatureItemProps {
  children: React.ReactNode;
}

export default function FeatureItem({ children }: FeatureItemProps) {
  return (
    <div className="flex items-center gap-3">
      <Check className="h-5 w-5 text-primary" />

      <span>{children}</span>
    </div>
  );
}
