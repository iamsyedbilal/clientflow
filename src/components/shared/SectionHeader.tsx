interface SectionHeaderProps {
  badge: string;
  title: React.ReactNode;
  description: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  badge,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div className={align === "center" ? "text-center" : ""}>
      <span className="inline-flex rounded-full bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary sm:px-4 sm:py-2 sm:text-sm">
        {badge}
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight sm:mt-5 sm:text-4xl lg:mt-6 lg:text-5xl">
        {title}
      </h2>

      <p
        className={`mt-4 max-w-xl text-base leading-7 text-muted-foreground sm:mt-5 sm:text-lg sm:leading-8 ${
          align === "center" ? "mx-auto" : ""
        }`}>
        {description}
      </p>
    </div>
  );
}
