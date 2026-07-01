import PreviewCard from "@/components/shared/PreviewCard";
import MetricsGrid from "./MetricsGrid";
import RevenueChart from "./RevenueChart";

export default function AnalyticsPreview() {
  return (
    <PreviewCard>
      <MetricsGrid />
      <div className="mt-6">
        <RevenueChart />
      </div>
    </PreviewCard>
  );
}
