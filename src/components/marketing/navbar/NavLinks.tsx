import Link from "next/link";

const navLinks = [
  {
    label: "Features",
    href: "#features",
  },
  {
    label: "Pricing",
    href: "#pricing",
  },
  {
    label: "Resources",
    href: "#resources",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
