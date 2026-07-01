import Container from "@/components/ui/Container";
import Logo from "@/components/shared/Logo";
import FooterColumn from "./FooterColumn";
import Link from "next/link";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Integrations", href: "#integrations" },
  { label: "FAQ", href: "#faq" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Cookies", href: "#" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border px-2" id="footer">
      <Container>
        <div className="grid gap-10 py-14 sm:gap-12 sm:py-16 lg:grid-cols-[1.4fr_repeat(4,1fr)] lg:gap-14 lg:py-20">
          {/* Brand */}

          <div className="max-w-sm">
            <Logo />

            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              ClientFlow helps freelancers and agencies manage clients,
              projects, invoices and communication from one beautiful workspace.
            </p>
          </div>

          <FooterColumn title="Product" links={productLinks} />

          <FooterColumn title="Company" links={companyLinks} />

          <FooterColumn title="Legal" links={legalLinks} />

          <FooterColumn title="Social">
            <div className="space-y-3">
              {socialLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block text-muted-foreground transition-colors hover:text-foreground">
                  {link.label}
                </Link>
              ))}
            </div>
          </FooterColumn>
        </div>

        <div className="flex flex-col gap-2 border-t border-border py-6 text-center text-xs text-muted-foreground sm:gap-3 sm:py-8 sm:text-sm lg:flex-row lg:items-center lg:justify-between lg:text-left">
          <p>© {new Date().getFullYear()} ClientFlow. All rights reserved.</p>

          <p>Built with Next.js, Tailwind CSS & TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
