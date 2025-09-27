import { format } from "date-fns";

const OrderSummary = ({ ordersummary }) => {
  const summary = [
    {
      label: "Placed",
      value: ordersummary?.created_at
        ? format(new Date(ordersummary.created_at), "dd MMM yyyy, hh:mm a")
        : "N/A",
    },
    { label: "Grand Total", value: "$1.245" },
    { label: "Tax", value: "0.00%" },
    { label: "Discount", value: "0.00%" },
  ];

  return (
    <div className="border-t border-b p-4">
      <div className="flex flex-wrap gap-6">
        {summary.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-2 text-sm text-gray-800"
          >
            <span className="font-medium">{item.label}:</span>
            <span className="text-blue-800 font-semibold">{item.value}</span>
          </div>
        ))}
        <div className="text-sm text-blue-800 font-semibold cursor-pointer">
          Add services
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
