import { cn } from "@/lib/utils";

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
}

export default function Section({ id, children, className }: SectionProps) {
  return (
    <section id={id} className={cn("py-12 px-2 sm:py-16 lg:py-20", className)}>
      {children}
    </section>
  );
}
