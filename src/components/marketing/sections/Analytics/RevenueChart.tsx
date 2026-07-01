export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-border bg-surface-secondary p-6">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold">Revenue Overview</h3>

          <p className="text-sm text-muted-foreground">Last 6 months</p>
        </div>

        <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
          +18%
        </span>
      </div>

      <div className="relative h-64">
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

        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Jan</span>
          <span>Feb</span>
          <span>Mar</span>
          <span>Apr</span>
          <span>May</span>
          <span>Jun</span>
        </div>
      </div>
    </div>
  );
}
