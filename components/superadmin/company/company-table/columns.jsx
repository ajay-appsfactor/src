import { Eye, SquarePen } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { format } from "date-fns";
import StatusSelector from "./StatusSelector";
import { rootDomain, protocol } from "@/utils/rootDomain";
import { Badge } from "@/components/ui/badge";

export const columns = [
  {
    accessorKey: "company_name",
    header: "Organization Name",
    visible: true,
  },
  {
    accessorKey: "sub_domain",
    header: "Subdomain",
    visible: true,
    cell: ({ row }) => (
      <Link
        target="_blank"
        href={`${protocol}://${row.original.sub_domain}.${rootDomain}`}
        className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
      >
        {row.original.sub_domain}.{rootDomain}/login
      </Link>
    ),
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
    accessorKey: "created_at",
    header: "Created At",
    visible: true,
    cell: ({ row }) =>
      format(new Date(row.original.created_at), "dd MMM yyyy, hh:mm a"),
  },
  {
    accessorKey: "users",
    header: "Users",
    visible: true,
    cell: ({ row }) => {
      const userCount = row.original.userCount ?? 0;
      const userPageUrl = `/super-admin/company/${row.original.id}/users`;

      return (
        <Link href={userPageUrl}>
          <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700">
            {userCount}
          </Badge>
        </Link>
      );
    },
  },
  {
    accessorKey: "actions",
    header: "Actions",
    visible: true,
    disableSort: true,
    cell: ({ row }) => (
      <div className="flex items-center gap-1">
        <Link href={`/super-admin/company/${row.original.id}/edit`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <SquarePen className="w-4 h-4" />
          </Button>
        </Link>
        {/* <Link href={`/super-admin/company/${row.original.id}/view`}>
          <Button
            variant="ghost"
            size="icon"
            className="h-6 w-6 p-0 text-gray-600 hover:text-gray-800 cursor-pointer"
          >
            <Eye className="w-4 h-4" />
          </Button>
        </Link> */}
      </div>
    ),
  },
];
