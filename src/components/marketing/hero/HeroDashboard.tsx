import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import ProjectsCard from "./dashboard/ProjectsCard";
import RecentInvoices from "./dashboard/RecentInvoice";
import RevenueChart from "./dashboard/RevenueChart";
import StatsCards from "./dashboard/Card";
import TasksCard from "./dashboard/TasksCard";

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto mt-8 max-w-7xl overflow-hidden rounded-2xl border border-border bg-background shadow-[0_30px_80px_rgba(0,0,0,0.08)] lg:rounded-3xl">
      <div className="grid min-h-175 grid-cols-1 lg:grid-cols-[240px_1fr]">
        {" "}
        {/* Sidebar */}
        <DashboardSidebar />
        {/* Main Content */}
        <div className="flex flex-col">
          <DashboardHeader />

          <main className="flex-1 space-y-6 bg-surface-secondary p-4 sm:p-6">
            <StatsCards />

            <div className="grid gap-6 lg:grid-cols-3 ">
              <div className="lg:col-span-2">
                <RevenueChart />
              </div>

              <RecentInvoices />
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
              <TasksCard />
              <ProjectsCard />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
