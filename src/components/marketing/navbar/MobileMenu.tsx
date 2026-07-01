"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { navLinks } from "@/data/navLinks";

type Props = {
  open: boolean;
  close: () => void;
};

export default function MobileMenu({ open, close }: Props) {
  return (
    <div
      className={`
        absolute
        left-0
        top-full
        w-full
        overflow-hidden
        rounded-b-2xl
        border-b
        border-x
        border-border/50
        bg-background/95
        backdrop-blur-xl
        transition-all
        duration-300
        lg:hidden

        ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-2 opacity-0"
        }
      `}>
      <div className="space-y-1 p-6">
        {navLinks.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            onClick={close}
            className="block rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition hover:bg-muted hover:text-foreground">
            {link.label}
          </Link>
        ))}

        <div className="mt-6 border-t border-border pt-6 space-y-3">
          <Link
            href="/sign-in"
            onClick={close}
            className="block border rounded-lg px-4 py-3 text-center text-sm font-medium transition hover:bg-muted">
            Sign In
          </Link>

          <Button size={"md"} className="w-full">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}
