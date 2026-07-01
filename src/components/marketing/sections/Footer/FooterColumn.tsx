import Link from "next/link";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumnProps {
  title: string;
  links?: FooterLink[];
  children?: React.ReactNode;
}

export default function FooterColumn({
  title,
  links,
  children,
}: FooterColumnProps) {
  return (
    <div>
      <h3 className="mb-5 font-semibold">{title}</h3>

      {links ? (
        <div className="space-y-2.5">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </Link>
          ))}
        </div>
      ) : (
        children
      )}
    </div>
  );
}
