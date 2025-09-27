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
  GripVertical,
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
import { Badge } from "@/components/ui/badge";
const STATUS_BADGE_MAP = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-200 text-gray-700",
};

export default function PaymentTermsTable() {
  const [saving, setSaving] = useState(false);
  const [paymentTerms, setPaymentTerms] = useState([]);
  const [filteredTerms, setFilteredTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Dialog states
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({
    name: "",
    description: "",
    due_days: 0,
    discount_days: 0,
    discount_percent: 0,
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
        const res = await fetch("/api/company/master-list/payment-terms");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch payment terms");
        }

        setPaymentTerms(data.data || []);
        setFilteredTerms(data.data || []);
      } catch (error) {
        toast.error(error.message || "Failed to fetch payment terms");
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
      const filtered = paymentTerms.filter(
        (term) =>
          term.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          term.description?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredTerms(filtered);
    }
  }, [searchTerm, paymentTerms]);

  // Handle status change
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/company/master-list/payment-terms/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: newStatus === "active" }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update status");

      toast.success("Status updated successfully");
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
      setSaving(true); // start saving
      // Convert string inputs to numbers
      const dataToSend = {
        ...editData,
        due_days: Number(editData.due_days),
        discount_days: Number(editData.discount_days),
        discount_percent: Number(editData.discount_percent),
      };

      const res = await fetch(
        `/api/company/master-list/payment-terms/${editData.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(dataToSend),
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Failed to update payment term");

      toast.success("Payment term updated successfully.");
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
      const res = await fetch(
        `/api/company/master-list/payment-terms/${deleteId}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      if (!res.ok)
        throw new Error(data.error || "Failed to delete payment term");

      toast.success("Payment term deleted successfully.");
      setPaymentTerms((prev) => prev.filter((term) => term.id !== deleteId));
      setDeleteOpen(false);
    } catch (error) {
      toast.error(error.message || "Error deleting payment term");
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
          <h2 className="text-lg font-semibold text-gray-800">Payment Terms</h2>
          <Button
            asChild
            className="px-5 text-sm bg-slate-800 text-white hover:bg-slate-700"
          >
            <Link href="/settings/payment-terms/create">
              <Plus className="mr-2 h-4 w-4" />
              Add New Payment Terms
            </Link>
          </Button>
        </div>

        {/* Search */}
        <div className="relative w-full md:w-64 rounded-md bg-white">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search payment terms..."
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
        <Table className="rounded-md border">
          <TableHeader  className="bg-muted">
            <TableRow>
              <TableHead className="w-[20px]"></TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Due Days</TableHead>
              <TableHead>Discount Days</TableHead>
              <TableHead>Discount %</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={9} className="text-center py-10">
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
                  <TableCell className="text-gray-600 max-w-[200px] whitespace-normal break-words">
                    {term.description || "-"}
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{term.due_days}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{term.discount_days || "-"}</Badge>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{term.discount_percent}%</Badge>
                  </TableCell>
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
                          setEditData({
                            ...term,
                            due_days: term.due_days.toString(),
                            discount_days: term.discount_days.toString(),
                            discount_percent: term.discount_percent.toString(),
                          });
                          setEditOpen(true);
                        }}
                        aria-label="Edit payment term"
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
                        aria-label="Delete payment term"
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
                  colSpan={9}
                  className="text-center text-gray-500 py-8"
                >
                  {searchTerm
                    ? "No matching payment terms found."
                    : "No payment terms available."}
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
              Edit Payment Term
            </DialogTitle>
            <DialogDescription className="text-sm text-gray-500">
              Update the payment term details below
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            {/* Name */}
            <div>
              <Label htmlFor="name" className="mb-2">
                Name
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
            {/* Description */}
            <div>
              <Label htmlFor="description" className="mb-2">
                Description
              </Label>
              <Input
                id="description"
                value={editData.description || ""}
                onChange={(e) =>
                  setEditData({ ...editData, description: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            {/* Due Days */}
            <div>
              <Label htmlFor="due-days" className="mb-2">
                Due Days
              </Label>
              <Input
                id="due-days"
                type="number"
                value={editData.due_days || ""}
                onChange={(e) =>
                  setEditData({ ...editData, due_days: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            {/* Discount Days */}
            <div>
              <Label htmlFor="discount-days" className="mb-2">
                Discount Days
              </Label>
              <Input
                id="discount-days"
                type="number"
                value={editData.discount_days || ""}
                onChange={(e) =>
                  setEditData({ ...editData, discount_days: e.target.value })
                }
                className="col-span-3"
              />
            </div>
            {/* Discount */}
            <div>
              <Label htmlFor="discount-percent" className="mb-2">
                Discount %
              </Label>
              <Input
                id="discount-percent"
                type="number"
                value={editData.discount_percent || ""}
                onChange={(e) =>
                  setEditData({ ...editData, discount_percent: e.target.value })
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
              payment term.
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
