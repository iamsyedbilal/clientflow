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
      <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
        {badge}
      </span>

      <h2 className="mt-6 text-5xl font-bold tracking-tight">{title}</h2>

      <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}
