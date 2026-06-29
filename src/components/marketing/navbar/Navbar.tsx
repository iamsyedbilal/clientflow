import Container from "@/components/ui/Container";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <NavbarLogo />

        <NavLinks />

        <NavActions />
      </Container>
    </header>
  );
}
