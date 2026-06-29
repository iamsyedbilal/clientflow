import DashboardHeader from "./dashboard/DashboardHeader";
import DashboardSidebar from "./dashboard/DashboardSidebar";
import ProjectsCard from "./dashboard/ProjectsCard";
import RecentInvoices from "./dashboard/RecentInvoice";
import RevenueChart from "./dashboard/RevenueChart";
import StatsCards from "./dashboard/Card";
import TasksCard from "./dashboard/TasksCard";

export default function HeroDashboard() {
  return (
    <div className="relative mx-auto my-6 max-w-7xl overflow-hidden rounded-3xl border border-border bg-background shadow-[0_40px_100px_rgba(0,0,0,0.08)] backdrop-blur-md ">
      <div className="grid min-h-162.5 grid-cols-[240px_1fr]">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <div className="flex flex-col">
          <DashboardHeader />

          <main className="flex-1 space-y-6 bg-surface-secondary p-6">
            <StatsCards />

            <div className="grid grid-cols-3 gap-6">
              <div className="col-span-2">
                <RevenueChart />
              </div>

              <RecentInvoices />
            </div>

            <div className="grid grid-cols-2 gap-6">
              <TasksCard />
              <ProjectsCard />
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
