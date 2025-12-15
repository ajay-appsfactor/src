"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { SquarePen} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ModelsTable = ({ quoteItems }) => {
  if (!quoteItems || quoteItems.length === 0) {
    return <div className="p-4">No models found for this quote.</div>;
  }
  return (
    <div className="border-t border-b">
      <h2 className="text-md font-semibold text-slate-800 pb-2 px-4 pt-4">
        Models
      </h2>
      <div className="px-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Select</TableHead>
              <TableHead>Model Name</TableHead>
              <TableHead>Service</TableHead>
              <TableHead>Material</TableHead>
              <TableHead>Finish</TableHead>
              <TableHead>Specification</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {quoteItems.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <SquarePen className="w-4 h-4" />
                </TableCell>
                <TableCell className="text-blue-600">
                  {item.file_name || "No Name"}
                </TableCell>
                <TableCell>{item.service || "—"}</TableCell>
                <TableCell>{item.material || "—"}</TableCell>
                <TableCell>{item.finish || "—"}</TableCell>
                <TableCell>—</TableCell>
                <TableCell>
                  <Badge className="h-5 min-w-5 rounded-full px-1 font-mono tabular-nums cursor-pointer hover:bg-gray-600 dark:hover:bg-gray-700">
                    {item.quantity || 1}
                  </Badge>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ModelsTable;
