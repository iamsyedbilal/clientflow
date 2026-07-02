"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import Container from "@/components/ui/Container";
import NavbarLogo from "./NavbarLogo";
import NavLinks from "./NavLinks";
import NavActions from "./NavActions";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  const navRef = useRef<HTMLDivElement>(null);

  // Mobile menu
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

  // Hide navbar while scrolling down
  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: hidden ? -100 : 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div ref={navRef}>
        <Container className="flex h-16 items-center justify-between">
          <NavbarLogo />

          <NavLinks />

          <NavActions />

          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            transition={{
              type: "spring",
              stiffness: 500,
              damping: 25,
            }}
            className="ml-2 flex h-10 w-10 items-center justify-center rounded-lg transition-colors hover:bg-muted/50 lg:hidden"
            onClick={() => setMobileMenuOpen((prev) => !prev)}>
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>

          <MobileMenu
            open={mobileMenuOpen}
            close={() => setMobileMenuOpen(false)}
          />
        </Container>
      </div>
    </motion.header>
  );
}
