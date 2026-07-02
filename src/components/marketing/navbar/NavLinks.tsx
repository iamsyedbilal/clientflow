"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "@/data/navLinks";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navLinks.map((link) => (
        <motion.div
          key={link.label}
          whileHover={{ y: -2 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 28,
          }}>
          <Link
            href={link.href}
            className="group relative text-sm font-medium text-muted-foreground transition-colors duration-300 hover:text-foreground">
            {link.label}

            <span className="absolute -bottom-1 left-0 h-0.5 w-0 rounded-full bg-primary transition-all duration-300 group-hover:w-full" />
          </Link>
        </motion.div>
      ))}
    </nav>
  );
}
