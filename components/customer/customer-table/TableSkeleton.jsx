import { TableRow, TableCell } from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";

export default function TableSkeleton({ columns = 6, rows = 10 }) {
  return [...Array(rows)].map((_, i) => (
    <TableRow key={i} className="h-10">
      {[...Array(columns)].map((_, j) => (
        <TableCell key={j} className="px-2 py-0.5">
          <Skeleton className="h-3 w-full" />
        </TableCell>
      ))}
    </TableRow>
  ));
}

