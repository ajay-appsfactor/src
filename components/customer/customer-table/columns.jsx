import { Eye, SquarePen ,BadgePlus } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import StatusSelector from "./StatusSelector";

export const columns = [
  {
    accessorKey: "action",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Link href={`/customer/${row.original.id}/edit`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <SquarePen className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={`/customer/view/${row.original.id}`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </Link>
      </div>
    ),
  },
  {
    accessorKey: "customer_name",
    header: "Name",
    visible: true,
  },
  {
    accessorKey: "email",
    header: "Email",
    visible: true,
  },
  {
    accessorKey: "phone",
    header: "Phone",
    visible: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    visible: true,
    cell: ({ row }) => (
      <StatusSelector
        id={row.original.id}
        currentStatus={row.original.is_active}
      />
    ),
  },
  {
    accessorKey: "quote",
    header: "Create Quote",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <Link href={`/customer/${row.original.user_id}/create-quote`}>
        <Button
          variant="ghost"
          size="icon"
          className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
        >
          <BadgePlus className="w-4 h-4" />
        </Button>
      </Link>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
];
