"use client";

import { useEffect, useState } from "react";
import { format } from "date-fns";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Pencil,
  Trash2,
  Plus,
  Loader,
  Search,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
const STATUS_BADGE_MAP = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-200 text-gray-700",
};

export default function OrderStatusTable() {
  const [saving, setSaving] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Dialog states
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    is_active: true,
  });
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch payment terms
  useEffect(() => {
    const fetchPaymentTerms = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/superadmin/master-list/order-status");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch order status");
        }

        setPaymentTerms(data.data || []);
        setFilteredTerms(data.data || []);
      } catch (error) {
        toast.error(error.message || "Failed to fetch order status");
      } finally {
        setLoading(false);
      }
    };

    fetchPaymentTerms();
  }, []);

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredTerms(paymentTerms);
    } else {
      const filtered = paymentTerms.filter((term) =>
        term.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTerms(filtered);
    }
  }, [searchTerm, paymentTerms]);

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/superadmin/master-list/order-status/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: newStatus === "active" }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");

      toast.success("Status updated successfully.");
      setPaymentTerms((prev) =>
        prev.map((term) =>
          term.id === id ? { ...term, is_active: newStatus === "active" } : term
        )
      );
    } catch (error) {
      toast.error(error.message || "Error updating status");
    }
  };

  // Handle edit save with proper type conversion
  const handleEditSave = async () => {
    try {
      setSaving(true);
      const dataToSend = {
        ...editData,
      };

      const res = await fetch(`/api/superadmin/master-list/order-status/${editData.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(dataToSend),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update payment");

      toast.success(data.message || "Order status updated successfully.");
      setPaymentTerms((prev) =>
        prev.map((term) => (term.id === editData.id ? dataToSend : term))
      );
      setEditOpen(false);
    } catch (error) {
      toast.error(error.message || "Error saving changes");
    } finally {
      setSaving(false);
    }
  };

  // Handle delete
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/superadmin/master-list/order-status/${deleteId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to delete payment");

      toast.success(data.message || "Order status deleted successfully.");
      setPaymentTerms((prev) => prev.filter((term) => term.id !== deleteId));
      setDeleteOpen(false);
    } catch (error) {
      toast.error(error.message || "Error deleting order status");
    } finally {
      setIsDeleting(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  // Format date
  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMM yyyy hh:mm a");
  };

  return (
    <section className="w-full max-w-8xl mx-auto">
      {/* Header with search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Order Status
          </h2>
          <Button
            asChild
            className="px-5 text-sm bg-slate-800 text-white hover:bg-slate-700"
          >
            <Link href="/super-admin/master-list/order-status/create">
              <Plus className="mr-2 h-4 w-4" />
              Add New Order Status
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64 rounded-md bg-white">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search order status..."
            className="pl-10 pr-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {searchTerm && (
            <X
              className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer"
              onClick={clearSearch}
            />
          )}
        </div>
      </div>

      {/* Table */}
      <div className="p-6 overflow-x-auto">
        <Table className="border rounded-lg">
          <TableHeader className="bg-muted">
            <TableRow>
              <TableHead className="w-[20px]"></TableHead>
              <TableHead>Order Status Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={5} className="py-10 text-center">
                  <Loader className="w-6 h-6 animate-spin text-slate-500 mx-auto" />
                </TableCell>
              </TableRow>
            ) : filteredTerms.length > 0 ? (
              filteredTerms.map((term) => (
                <TableRow key={term.id} className="hover:bg-gray-50">
                  <TableCell>
                    {/* <GripVertical className="text-gray-400" /> */}
                  </TableCell>
                  <TableCell className="font-medium">{term.name}</TableCell>
                  <TableCell>
                    <Select
                      value={term.is_active ? "active" : "inactive"}
                      onValueChange={(value) =>
                        handleStatusChange(term.id, value)
                      }
                    >
                      <SelectTrigger className="h-6 text-xs w-[120px]">
                        <div
                          className={`capitalize px-2 py-0.5 rounded-full ${
                            STATUS_BADGE_MAP[
                              term.is_active ? "active" : "inactive"
                            ]
                          }`}
                        >
                          {term.is_active ? "active" : "inactive"}
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell className="text-sm text-gray-500">
                    {formatDate(term.created_at)}
                  </TableCell>
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        className="cursor-pointer"
                        size="sm"
                        onClick={() => {
                          setEditData({ ...term });
                          setEditOpen(true);
                        }}
                        aria-label="Edit order status"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        className="cursor-pointer"
                        size="sm"
                        onClick={() => {
                          setDeleteId(term.id);
                          setDeleteOpen(true);
                        }}
                        aria-label="Delete order status"
                      >
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={5}
                  className="text-center text-gray-500 py-8"
                >
                  {searchTerm
                    ? "No matching order status found"
                    : "No order status available"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-white sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="text-lg font-semibold">
              Edit Order Status
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Update the order status details below
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div className="flex flex-col">
              <Label htmlFor="name" className="mb-2">
                Order Payment Status Name
              </Label>
              <Input
                id="name"
                value={editData.name || ""}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="cursor-pointer"
              onClick={() => setEditOpen(false)}
            >
              Cancel
            </Button>
            <Button
              className="cursor-pointer"
              onClick={handleEditSave}
              disabled={!editData.name || saving}
            >
              {saving ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Saving...
                </>
              ) : (
                "Save Changes"
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={deleteOpen} onOpenChange={setDeleteOpen}>
        <AlertDialogContent className="bg-white">
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              order status.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-red-600 hover:bg-red-700 cursor-pointer"
            >
              {isDeleting ? (
                <>
                  <Loader className="mr-2 h-4 w-4 animate-spin" />
                  Deleting...
                </>
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
