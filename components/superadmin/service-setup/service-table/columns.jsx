import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import Link from "next/link";
import { format } from "date-fns";

export const columns = (setDeleteId, setDeleteOpen) => [
  {
    accessorKey: "name",
    header: "Name",
    visible: true,
  },
  {
    accessorKey: "exclude_inspection",
    header: "Exclude From Inspection",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <Checkbox checked={row.original.exclude_inspection} disabled />
    ),
  },
  {
    accessorKey: "fob_china",
    header: "FOB China",
    visible: true,
    disableSort: true,
    cell: ({ row }) => <Checkbox checked={row.original.fob_china} disabled />,
  },
  {
    accessorKey: "require_deposit_invoice",
    header: "Require Deposit Invoice",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <Checkbox checked={row.original.require_deposit_invoice} disabled />
    ),
  },
  {
    accessorKey: "invoice50",
    header: "Invoice 50",
    visible: true,
    disableSort: true,
    cell: ({ row }) => <Checkbox checked={row.original.invoice50} disabled />,
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>  format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex gap-2">
        <Button variant="outline" size="sm" asChild>
          <Link href={`/super-admin/master-list/services/edit/${row.original.id}`}>
            <SquarePen className="w-4 h-4" />
          </Link>
        </Button>
        <Button
          variant="destructive"
          className="cursor-pointer"
          size="sm"
          onClick={() => {
            // console.log("Clicked ID:", row.original.id);
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
