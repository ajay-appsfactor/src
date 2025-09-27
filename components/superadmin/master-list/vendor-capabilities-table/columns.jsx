import { Button } from "@/components/ui/button";
import { SquarePen, Trash2 } from "lucide-react";
import { format } from "date-fns";
import { Badge } from "@/components/ui/badge";
import StatusSelector from "./StatusSelector";

export const columns = (
  setDeleteId,
  setDeleteOpen,
  setEditOpen,
  setEditData,
  setSelectedVendor,
  setSubCategoryOpen
) => [
  {
    accessorKey: "name",
    header: "Name",
    visible: true,
  },
  {
    accessorKey: "status",
    header: "Status",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="">
        <StatusSelector
          id={row.original.id}
          currentStatus={row.original.is_active}
        />
      </div>
    ),
  },
  {
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
  {
    accessorKey: "sub_category",
    header: "Sub Category",
    visible: true,
    cell: ({ row }) => (
      <Badge
        onClick={() => {
          setSelectedVendor(row.original);
          setSubCategoryOpen(true);
        }}
        className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700"
      >
      {row.original._count?.subCategories ?? 0}  
      </Badge>
    ),
  },
  {
    accessorKey: "actions",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex gap-2">
        {/* Edit Button */}
        <Button
          variant="outline"
          size="sm"
          className="cursor-pointer"
          onClick={() => {
            setEditData(row.original);
            setEditOpen(true);
          }}
          aria-label="Edit"
        >
          <SquarePen className="w-4 h-4" />
        </Button>
        {/* Delete Button */}
        <Button
          variant="destructive"
          className="cursor-pointer"
          size="sm"
          onClick={() => {
            // console.log("Clicked ID:", row.original.id);
            setDeleteId(row.original.id);
            setDeleteOpen(true);
          }}
          aria-label="Delete"
        >
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>
    ),
  },
];
