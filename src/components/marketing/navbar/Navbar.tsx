"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setMobileMenuOpen(false);

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      window.addEventListener("scroll", handleScroll);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [mobileMenuOpen]);

  return (
    <header
      ref={navRef}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <NavbarLogo />

        <NavLinks />

        <NavActions />
        <button
          className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted/50 lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        <MobileMenu
          open={mobileMenuOpen}
          close={() => setMobileMenuOpen(false)}
        />
      </Container>
    </header>
  );
}
