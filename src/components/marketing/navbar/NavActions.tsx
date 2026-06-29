import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NavActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <Link
        href="/sign-in"
        className="text-sm font-medium text-muted-foreground transition-colors duration-200 hover:text-foreground">
        Sign In
      </Link>

      <Button size="sm">Get Started</Button>
    </div>
  );
}
