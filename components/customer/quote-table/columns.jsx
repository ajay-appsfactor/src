import { SquarePen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";


export const columns = [
  {
    accessorKey: "action",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex items-center">
        <Link href={`/quote/${row.original.id}/edit`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <SquarePen className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "quote_item_id",
    header: "Quote ID",
    visible: true,
  },
   {
    accessorKey: "billing_name",
    header: "Billing Name",
    visible: true,
  },
    {
    accessorKey: "status",
    header: "Status",
    visible: true,
    cell: ({ row }) => (
      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-700">
        {row.original.status}
      </span>
    ),
  },
    {
    accessorKey: "payment_status",
    header: "Payment",
    visible: true,
    cell: ({ row }) => (
      <span
        className={`px-2 py-1 text-xs rounded ${
          row.original.payment_status === "Paid"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {row.original.payment_status}
      </span>
    ),
  },
  {
    accessorKey: "quote_type",
    header: "Type",
    visible: true,
  },

  {
    accessorKey: "QuoteItems",
    header: "Items",
    visible: true,
    cell: ({ row }) => {
      const items = row.original.QuoteItems || [];

      return (
        <div className="flex flex-col gap-1">
          {items.map((item, index) => (
            <span key={index} className="text-sm text-gray-800">
             {item.item_name} (Qty: {item.quantity})
            </span>
          ))}

          {items.length === 0 && (
            <span className="text-sm text-gray-400">No Items</span>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
];
