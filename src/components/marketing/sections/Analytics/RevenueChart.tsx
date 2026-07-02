import PreviewCard from "@/components/shared/PreviewCard";
import PreviewHeader from "@/components/shared/PreviewHeader";

export default function RevenueChart() {
  return (
    <PreviewCard>
      <PreviewHeader
        eyebrow="Revenue Overview"
        title="Last 6 months"
        badge="+18%"
      />

      <div className="relative h-48 sm:h-56 lg:h-64">
        <svg viewBox="0 0 600 220" className="h-full w-full" fill="none">
          <defs>
            <linearGradient id="analyticsGradient" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="#22C55E" stopOpacity="0.35" />

              <stop offset="100%" stopColor="#22C55E" stopOpacity="0" />
            </linearGradient>
          </defs>

          <path
            d="M20 180 C90 170,120 150,180 155 S280 120,340 125 S440 70,580 45"
            stroke="#22C55E"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
          />

          <path
            d="M20 180 C90 170,120 150,180 155 S280 120,340 125 S440 70,580 45 L580 220 L20 220 Z"
            fill="url(#analyticsGradient)"
          />
        </svg>

        <div className="mt-0 flex justify-between text-[11px] text-muted-foreground sm:text-xs">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </PreviewCard>
  );
}
