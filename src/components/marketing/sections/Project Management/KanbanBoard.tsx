import KanbanColumn from "./KanbanColumn";

type Project = {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
  date: string;
};

type Column = {
  title: string;
  projects: Project[];
  date: string;
};

const columns: Column[] = [
  {
    title: "Lead",
    projects: [
      {
        title: "Landing Page",
        client: "Acme Inc.",
        priority: "High",
        date: "2025-03-12",
      },
      {
        title: "Brand Identity",
        client: "Nova Studio",
        priority: "Medium",
        date: "2025-04-02",
      },
    ],
    date: "2025-03-12",
  },
  {
    title: "Active",
    projects: [
      {
        title: "ClientFlow",
        client: "Personal",
        priority: "High",
        date: "2025-04-15",
      },
      {
        title: "Portfolio",
        client: "PixelCraft",
        priority: "Low",
        date: "2025-05-01",
      },
    ],
    date: "2025-04-15",
  },
  {
    title: "Review",
    projects: [
      {
        title: "Invoice System",
        client: "Vision Labs",
        priority: "Medium",
        date: "2025-04-22",
      },
    ],
    date: "2025-04-22",
  },
  {
    title: "Completed",
    projects: [
      {
        title: "SEO Audit",
        client: "Growth Co.",
        priority: "Low",
        date: "2025-03-28",
      },
    ],
    date: "2025-03-28",
  },
];

export default function KanbanBoard() {
  return (
    <div className="overflow-x-auto scrollbar-hide rounded-2xl border border-border bg-background p-4 shadow-xl sm:p-6 lg:rounded-3xl">
      <div className="grid min-w-225 grid-cols-4 gap-4 lg:gap-5">
        {columns.map((column) => (
          <KanbanColumn
            key={column.title}
            title={column.title}
            projects={column.projects}
            date={column.date}
          />
        ))}
      </div>
    </div>
  );
}
