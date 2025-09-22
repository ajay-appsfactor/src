"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "react-toastify";

const statusBadgeMap = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-200 text-gray-700",
};

export default function CompanyStatusSelector({ id, currentStatus }) {
  const [status, setStatus] = useState(currentStatus ? "active" : "inactive");

  const handleChange = async (newStatus) => {
    try {
      const res = await fetch(`/api/superadmin/company/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: newStatus === "active" }),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Failed to update status");
        return;
      }

      setStatus(newStatus);
      toast.success("Company status updated.");
    } catch (err) {
      console.error(err);
      toast.error("Error updating status");
    }
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
        <SelectItem value="active">Active</SelectItem>
        <SelectItem value="inactive">Inactive</SelectItem>
      </SelectContent>
    </Select>
  );
}
