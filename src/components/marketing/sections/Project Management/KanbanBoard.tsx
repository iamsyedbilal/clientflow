import KanbanColumn from "./KanbanColumn";

type Project = {
  title: string;
  client: string;
  priority: "High" | "Medium" | "Low";
};

type Column = {
  title: string;
  projects: Project[];
};

const columns: Column[] = [
  {
    title: "Lead",
    projects: [
      {
        title: "Landing Page",
        client: "Acme Inc.",
        priority: "High",
      },
      {
        title: "Brand Identity",
        client: "Nova Studio",
        priority: "Medium",
      },
    ],
  },
  {
    title: "Active",
    projects: [
      {
        title: "ClientFlow",
        client: "Personal",
        priority: "High",
      },
      {
        title: "Portfolio",
        client: "PixelCraft",
        priority: "Low",
      },
    ],
  },
  {
    title: "Review",
    projects: [
      {
        title: "Invoice System",
        client: "Vision Labs",
        priority: "Medium",
      },
    ],
  },
  {
    title: "Completed",
    projects: [
      {
        title: "SEO Audit",
        client: "Growth Co.",
        priority: "Low",
      },
    ],
  },
];

export default function KanbanBoard() {
  return (
    <div className="overflow-hidden rounded-3xl border border-border bg-background p-6 shadow-xl">
      <div className="grid min-w-225 grid-cols-4 gap-5">
        {columns.map((column) => (
          <KanbanColumn
            key={column.title}
            title={column.title}
            projects={column.projects}
          />
        ))}
      </div>
    </div>
  );
}
