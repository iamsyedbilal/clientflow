import StatusBadge from "./StatusBadge";

interface PreviewHeaderProps {
  eyebrow: string;
  title: string;
  badge?: string;
}

export default function PreviewHeader({
  eyebrow,
  title,
  badge,
}: PreviewHeaderProps) {
  return (
    <div className="mb-6 flex items-start justify-between gap-4 sm:items-center">
      <div>
        <p className="text-sm text-muted-foreground">{eyebrow}</p>

        <h3 className="mt-1 text-lg font-semibold sm:text-xl">{title}</h3>
      </div>

      {badge && <StatusBadge>{badge}</StatusBadge>}
    </div>
  );
}
