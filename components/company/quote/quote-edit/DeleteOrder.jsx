"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

const DeleteOrder = ({ quoteId }) => {
  // console.log("Quote Delete Id is :", quoteId)
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const deleteOrder = async () => {
    try {
      setLoading(true);

      const res = await fetch(`/api/company/quotes/${quoteId}/delete`, {
        method: "DELETE",
      });

      const data = await res.json();
      // console.log("Data Delete Order:", data)
      if (!res.ok) {
        throw new Error(data.error || "Delete failed");
      }

       const userId = data.user_id;
      toast.success("Order deleted successfully." || data.message);
      router.push(`/customer/${userId}/quotes`);
    } catch (err) {
      // console.error("Delete failed:", err);
      toast.error("Failed to delete order.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mt-6 mb-5 px-4 text-start">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2 text-red-800 hover:text-red-900 cursor-pointer"
          >
            <Trash className="w-4 h-4" />
            <span>Delete Order</span>
          </Button>
        </AlertDialogTrigger>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle className="text-red-600">
              Confirm Delete
            </AlertDialogTitle>

            <AlertDialogDescription>
              Are you sure you want to delete this order? This action will soft
              delete the quote and all its items.
            </AlertDialogDescription>
          </AlertDialogHeader>

          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer" disabled={loading}>
              Cancel
            </AlertDialogCancel>

            <AlertDialogAction
              disabled={loading}
              onClick={deleteOrder}
              className="bg-red-600 hover:bg-red-700 text-white cursor-pointer"
            >
              {loading ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteOrder;
