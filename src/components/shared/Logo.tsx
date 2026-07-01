import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface LogoProps {
  href?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizes = {
  sm: "h-8 w-auto",
  md: "h-10 w-auto",
  lg: "h-14 w-auto",
};

export default function Logo({
  href = "/",
  showText = false,
  size = "lg",
  className,
}: LogoProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-3 transition-opacity hover:opacity-90",
        className,
      )}>
      <Image
        src="/logos/logo.png"
        alt="ClientFlow"
        width={300}
        height={300}
        className={sizes[size]}
        priority
      />

      {showText && (
        <span className="text-xl font-semibold tracking-tight text-foreground">
          ClientFlow
        </span>
      )}
    </Link>
  );
}
