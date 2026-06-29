"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from "recharts";
import { ArrowUpRight } from "lucide-react";

const data = [
  { month: "Jan", revenue: 4200 },
  { month: "Feb", revenue: 5100 },
  { month: "Mar", revenue: 4800 },
  { month: "Apr", revenue: 6700 },
  { month: "May", revenue: 7200 },
  { month: "Jun", revenue: 8900 },
  { month: "Jul", revenue: 9600 },
];

export default function RevenueChart() {
  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
      {/* Header */}
      <div className="mb-8 flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground">Monthly Revenue</p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight">$9,600</h2>

          <div className="mt-2 flex items-center gap-2">
            <span className="inline-flex items-center rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-600">
              <ArrowUpRight className="mr-1 h-3 w-3" />
              +18.4%
            </span>

            <span className="text-xs text-muted-foreground">vs last month</span>
          </div>
        </div>

        <button className="rounded-lg border border-border px-3 py-1.5 text-sm hover:bg-surface">
          Monthly
        </button>
      </div>

      {/* Chart */}
      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop
                  offset="0%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0.35}
                />

                <stop
                  offset="100%"
                  stopColor="var(--color-primary)"
                  stopOpacity={0}
                />
              </linearGradient>
            </defs>

            <CartesianGrid
              strokeDasharray="4 4"
              vertical={false}
              stroke="var(--color-border)"
            />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tick={{
                fontSize: 12,
                fill: "var(--color-muted-foreground)",
              }}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="revenue"
              stroke="var(--color-primary)"
              strokeWidth={3}
              fill="url(#revenueGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
