"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ColumnToggle from "./ColumnToggle";
import { Loader } from "lucide-react";
import Link from "next/link";
import { Plus } from "lucide-react";

function getPaginationRange(current, total) {
  const delta = 2;
  const range = [];

  for (
    let i = Math.max(2, current - delta);
    i <= Math.min(total - 1, current + delta);
    i++
  ) {
    range.push(i);
  }

  if (current - delta > 2) range.unshift("...");
  if (current + delta < total - 1) range.push("...");

  range.unshift(1);
  if (total > 1) range.push(total);

  return range;
}

export default function DataTable({
  columns,
  setColumns,
  data,
  total,
  filters,
  setFilters,
  loading,
  company
}) {
  const totalPages = Math.max(1, Math.ceil(total / filters.pageSize));

  const resolvedColumns =
    typeof columns === "function"
      ? columns(setDeleteId, setDeleteOpen, filters, setFilters)
      : columns || [];

  return (
    <div className="p-4 space-y-4">
      <div className="flex items-center justify-start gap-4">
        <h2 className="text-lg font-semibold text-gray-800">{company.name} — Users</h2>
        <Button
          asChild
          className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
        >
          <Link href={`/super-admin/company/${company.id}/users/create`}>
            <Plus className="mr-2 h-4 w-4" />
            Add New User
          </Link>
        </Button>
      </div>
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 mb-4">
        {/* Search input */}
        <div className="w-full sm:w-[800px]">
          <Input
            placeholder="Search name, email, phone..."
            value={filters.search}
            onChange={(e) =>
              setFilters((f) => ({ ...f, search: e.target.value, page: 1 }))
            }
            className="w-full bg-white"
          />
        </div>

        {/* Column toggle */}
        <div className="flex items-center gap-3 flex-wrap">
          <ColumnToggle columns={resolvedColumns} setColumns={setColumns} />
        </div>
      </div>

      {/* Table */}
      <div>
        <Table className="bg-white rounded-md">
          <TableHeader>
            <TableRow>
              {resolvedColumns.map(
                (col) =>
                  col.visible !== false && (
                    <TableHead
                      key={col.accessorKey ?? col.header}
                      className={`px-4 py-2 ${
                        col.disableSort ? "" : "cursor-pointer select-none"
                      }`}
                      onClick={() => {
                        if (!col.disableSort && col.accessorKey) {
                          setFilters((f) => ({
                            ...f,
                            sort: col.accessorKey,
                            order:
                              f.sort === col.accessorKey && f.order === "asc"
                                ? "desc"
                                : "asc",
                          }));
                        }
                      }}
                    >
                      {col.header}
                      {!col.disableSort &&
                        col.accessorKey &&
                        filters.sort === col.accessorKey &&
                        (filters.order === "asc" ? " ↑" : " ↓")}
                    </TableHead>
                  )
              )}
            </TableRow>
          </TableHeader>

          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={resolvedColumns.length}>
                  <div className="flex justify-center items-center py-20">
                    <Loader className="animate-spin h-6 w-6 text-muted-foreground" />
                  </div>
                </TableCell>
              </TableRow>
            ) : data.length === 0 ? (
              <TableRow>
                <TableCell
                  colSpan={resolvedColumns.length}
                  className="text-center py-8"
                >
                  No users found.
                </TableCell>
              </TableRow>
            ) : (
              data.map((row) => (
                <TableRow key={row.id}>
                  {resolvedColumns.map(
                    (col, cIndex) =>
                      col.visible !== false && (
                        <TableCell
                          key={col.accessorKey ?? `${col.header}-${cIndex}`}
                          className="px-4 py-2"
                        >
                          {col.cell
                            ? col.cell({ row: { original: row } })
                            : col.accessorKey
                            ? row[col.accessorKey] != null
                              ? String(row[col.accessorKey])
                              : "-"
                            : "-"}
                        </TableCell>
                      )
                  )}
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>

      {/* Footer: summary + pagination */}
      <div className="flex flex-col sm:flex-row sm:justify-between items-center gap-4 text-sm mt-6 px-2">
        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 bg-white px-3 py-2 border rounded-md shadow-sm">
            <span className="text-gray-500">Total:</span>
            <span className="text-foreground font-semibold">{total}</span>
            <span className="text-gray-500">row(s)</span>
          </div>

          <div className="flex items-center gap-1 bg-white px-3 py-2 border rounded-md shadow-sm">
            <span className="text-gray-500">Page:</span>
            <span className="text-foreground font-semibold">
              {filters.page} of {totalPages}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <div className="font-medium text-slate-800">Row per page</div>
          <Select
            value={String(filters.pageSize)}
            onValueChange={(value) =>
              setFilters((f) => ({ ...f, pageSize: +value, page: 1 }))
            }
          >
            <SelectTrigger className="w-[130px] text-sm bg-white">
              <SelectValue placeholder="Rows per page" />
            </SelectTrigger>
            <SelectContent>
              {[10, 20, 50, 100].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Button
            className="cursor-pointer bg-white"
            variant="outline"
            size="icon"
            onClick={() => setFilters((f) => ({ ...f, page: f.page - 1 }))}
            disabled={filters.page <= 1}
          >
            <ChevronLeft size={16} />
          </Button>

          {getPaginationRange(filters.page, totalPages).map((p, i) =>
            p === "..." ? (
              <span key={`dots-${i}`} className="px-1 text-gray-500">
                ...
              </span>
            ) : (
              <Button
                key={`page-${p}`}
                size="sm"
                variant={p === filters.page ? "default" : "outline"}
                onClick={() => setFilters((f) => ({ ...f, page: p }))}
              >
                {p}
              </Button>
            )
          )}

          <Button
            className="cursor-pointer bg-white"
            variant="outline"
            size="icon"
            onClick={() => setFilters((f) => ({ ...f, page: f.page + 1 }))}
            disabled={filters.page >= totalPages}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      </div>
    </div>
  );
}
