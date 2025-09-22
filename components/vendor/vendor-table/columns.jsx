import { Eye, SquarePen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";

export const columns = [
  {
    accessorKey: "action",
    header: "Actions",
    disableSort: true,
    visible: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Link href={`/vendor/${row.original.id}`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <SquarePen className="w-4 h-4" />
          </Button>
        </Link>
        <Link href={`/vendor/view/${row.original.id}`}>
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
    accessorKey: "vendor_name",
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
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
];
