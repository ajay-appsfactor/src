import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export const columns = (setDeleteId, setDeleteOpen) => [
  {
    accessorKey: "first_name",
    header: "Name",
    visible: true,
    cell: ({ row }) =>
      `${row.original.first_name} ${row.original.last_name || ""}`,
  },
  {
    accessorKey: "email",
    header: "Email",
    visible: true,
  },
  {
    accessorKey: "phone",
    header: "Phone Number",
    visible: true,
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/users/edit/${row.original.id}`}>
            <SquarePen className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="destructive"
          className="cursor-pointer"
          size="sm"
          onClick={() => {
            setDeleteId(row.original.id);
            setDeleteOpen(true);
          }}
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
