import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export default function HeroButtons() {
  return (
    <div className="px-2 flex items-center justify-center flex-wrap gap-4 mt-4">
      <Button size="lg">Start free trial</Button>

      <Button variant="secondary" size="lg">
        Book a demo
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}
