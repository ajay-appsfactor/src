
"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const statusBadgeMap = {
  Active: "bg-green-100 text-green-800",
  Inactive: "bg-gray-200 text-gray-700",
  Lead: "bg-yellow-100 text-yellow-800",
  Blocked: "bg-red-100 text-red-800",
};

export default function StatusSelector({ id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus);

  const handleChange = async (newStatus) => {
    await fetch("/api/customer/update-status", {
      method: "PUT",
      body: JSON.stringify({ id, status: newStatus }),
    });
    setStatus(newStatus);
  };

  return (
    <Select value={status} onValueChange={handleChange}>
      <SelectTrigger className="h-6 text-xs w-[120px]">
        <div
          className={`capitalize px-2 py-0.5 rounded-full ${
            statusBadgeMap[status] || "bg-gray-100 text-gray-800"
          }`}
        >
          {status}
        </div>
      </SelectTrigger>
      <SelectContent>
        {Object.keys(statusBadgeMap).map((s) => (
          <SelectItem key={s} value={s}>
            {s}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
