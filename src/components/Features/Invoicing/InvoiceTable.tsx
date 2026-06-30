const items = [
  {
    name: "Website Design",
    price: "$1,800",
  },
  {
    name: "Brand Identity",
    price: "$650",
  },
  {
    name: "Hosting",
    price: "$120",
  },
];

export default function InvoiceTable() {
  return (
    <div className="space-y-4 rounded-2xl border border-border p-4">
      {items.map((item) => (
        <div key={item.name} className="flex items-center justify-between">
          <span>{item.name}</span>

          <span className="font-medium">{item.price}</span>
        </div>
      ))}

      <div className="border-t border-border pt-4">
        <div className="flex items-center justify-between text-lg font-semibold">
          <span>Total</span>

          <span>$2,570</span>
        </div>
      </div>
    </div>
  );
}
