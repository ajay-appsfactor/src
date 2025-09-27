"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const DeleteOrder = () => {
  return (
    <div className="mt-6 mb-5 px-4 text-start">
      <Button
        size="sm"
        variant="outline"
        className="flex items-center gap-2 text-red-800 hover:text-red-900"
      >
        <Trash className="w-4 h-4" />
        <span>Delete Order</span>
      </Button>
    </div>
  );
};

export default DeleteOrder;
