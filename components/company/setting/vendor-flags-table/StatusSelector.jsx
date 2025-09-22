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
};

export default function StatusSelector({ id, currentStatus }) {
  const initialStatus = currentStatus ? "Active" : "Inactive";
  const [status, setStatus] = useState(initialStatus);

  const handleChange = async (newStatus) => {
    setStatus(newStatus);

    // Convert string → boolean for API
    const statusBool = newStatus === "Active";

    await fetch(`/api/company/settings/vendor-flags/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, is_active: statusBool }),
    });
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
