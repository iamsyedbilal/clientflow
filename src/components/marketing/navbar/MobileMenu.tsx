"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navLinks";

type Props = {
  open: boolean;
  close: () => void;
};

const menuVariants = {
  closed: {
    opacity: 0,
    y: -16,
    transition: {
      duration: 0.2,
    },
  },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.05,
    },
  },
};

const itemVariants = {
  closed: {
    opacity: 0,
    x: -16,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.25,
    },
  },
};

export default function MobileMenu({ open, close }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
          className="absolute left-0 top-full w-full overflow-hidden rounded-b-2xl border-x border-b border-border/50 bg-background/95 backdrop-blur-xl lg:hidden">
          <div className="space-y-1 p-6">
            {navLinks.map((link) => (
              <motion.div key={link.label} variants={itemVariants}>
                <Link
                  href={link.href}
                  onClick={close}
                  className="block rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-muted hover:text-foreground">
                  {link.label}
                </Link>
              </motion.div>
            ))}

            <motion.div
              variants={itemVariants}
              className="mt-6 space-y-3 border-t border-border pt-6">
              <Link
                href="/sign-in"
                onClick={close}
                className="block rounded-xl border px-4 py-3 text-center text-sm font-medium transition-all duration-200 hover:bg-muted">
                Sign In
              </Link>

              <Button size="md" className="w-full">
                Get Started
              </Button>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
