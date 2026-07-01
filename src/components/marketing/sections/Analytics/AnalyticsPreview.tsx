import MetricsGrid from "./MetricsGrid";
import RevenueChart from "./RevenueChart";

export default function AnalyticsPreview() {
  return (
    <div className="rounded-3xl border border-border bg-background p-6 shadow-xl">
      <MetricsGrid />

      <div className="mt-6">
        <RevenueChart />
      </div>
    </div>
  );
}
