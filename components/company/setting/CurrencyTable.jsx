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

const STATUS_BADGE_MAP = {
  active: "bg-green-100 text-green-800",
  inactive: "bg-gray-200 text-gray-700",
};

export default function MasterCurrencyForm() {
  const [saving, setSaving] = useState(false);
  const [currencies, setCurrencies] = useState([]);
  const [filteredCurrencies, setFilteredCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  // Dialog states
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({});
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);

  // Fetch data from backend
  useEffect(() => {
    const fetchCurrencies = async () => {
      try {
        setLoading(true);
        const res = await fetch("/api/company/master-list/currency");
        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Failed to fetch currencies");
        }

        setCurrencies(data.data || []);
        setFilteredCurrencies(data.data || []);
      } catch (error) {
        // console.error("Fetch error:", error);
        toast.error(error.message || "Failed to fetch currencies");
      } finally {
        setLoading(false);
      }
    };

    fetchCurrencies();
  }, []);

  const formatDate = (dateString) => {
    return format(new Date(dateString), "dd MMM yyyy hh:mm a");
  };

  // Search functionality
  useEffect(() => {
    if (searchTerm.trim() === "") {
      setFilteredCurrencies(currencies);
    } else {
      const filtered = currencies.filter(
        (currency) =>
          currency.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          currency.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
          currency.symbol.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCurrencies(filtered);
    }
  }, [searchTerm, currencies]);

  // Update status handler
  const handleStatusChange = async (id, newStatus) => {
    try {
      const res = await fetch(`/api/company/master-list/currency/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ is_active: newStatus === "active" }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update status");
      }

      toast.success("Status updated successfully.");
      setCurrencies((prev) =>
        prev.map((c) =>
          c.id === id ? { ...c, is_active: newStatus === "active" } : c
        )
      );
    } catch (error) {
      toast.error(error.message || "Error updating status");
    }
  };

  // Open edit dialog
  const openEditDialog = (currency) => {
    setEditData({ ...currency });
    setEditOpen(true);
  };

  // Handle edit save
  const handleEditSave = async () => {
    try {
      setSaving(true); 

      const res = await fetch(
        `/api/company/master-list/currency/${editData.id}`,
        {
          method: "PATCH",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(editData),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to update currency.");
      }

      toast.success("Currency updated successfully.");
      setCurrencies((prev) =>
        prev.map((c) => (c.id === editData.id ? editData : c))
      );
      setEditOpen(false);
    } catch (error) {
      toast.error(error.message || "Error saving changes.");
    } finally {
      setSaving(false);
    }
  };

  // Handle delete confirmation
  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const res = await fetch(`/api/company/master-list/currency/${deleteId}`, {
        method: "DELETE",
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to delete currency.");
      }

      toast.success("Currency deleted successfully.");
      setCurrencies((prev) => prev.filter((c) => c.id !== deleteId));
      setDeleteOpen(false);
    } catch (error) {
      toast.error(error.message || "Error deleting currency.");
    } finally {
      setIsDeleting(false);
    }
  };

  // Clear search
  const clearSearch = () => {
    setSearchTerm("");
  };

  return (
    <section className="w-full max-w-8xl mx-auto">
      {/* Header with search */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-6 py-4">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-gray-800">
            Currency Management
          </h2>
          <Button
            asChild
            className="px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700"
          >
            <Link href="/settings/currency/create">
              <Plus className="mr-2 h-4 w-4" />
              Add New Currency
            </Link>
          </Button>
        </div>

        {/* Search Function */}
        <div className="relative w-full md:w-64 bg-white rounded-md">
          <Search className="absolute  left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search currencies..."
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
          <TableHeader className="sticky top-0 bg-muted">
            <TableRow>
              <TableHead className="w-[20px]"></TableHead>
              <TableHead>Currency</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Created At</TableHead>
              {/* <TableHead>Updated</TableHead> */}
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {loading ? (
              <TableRow>
                <TableCell colSpan={8} className="text-center py-10">
                  <Loader className="w-6 h-6 animate-spin text-slate-500 mx-auto" />
                </TableCell>
              </TableRow>
            ) : filteredCurrencies.length > 0 ? (
              filteredCurrencies.map((item) => (
                <TableRow key={item.id} className="hover:bg-gray-50">
                  <TableCell>
                    {/* <GripVertical className="text-muted-foreground" /> */}
                  </TableCell>
                  <TableCell className="font-medium text-slate-700">
                    {item.name}
                  </TableCell>
                  <TableCell>{item.code}</TableCell>
                  <TableCell>{item.symbol}</TableCell>
                  <TableCell>
                    <Select
                      value={item.is_active ? "active" : "inactive"}
                      onValueChange={(value) =>
                        handleStatusChange(item.id, value)
                      }
                    >
                      <SelectTrigger className="h-6 text-xs w-[120px]">
                        <div
                          className={`capitalize px-2 py-0.5 rounded-full ${
                            STATUS_BADGE_MAP[
                              item.is_active ? "active" : "inactive"
                            ]
                          }`}
                        >
                          {item.is_active ? "active" : "inactive"}
                        </div>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="active">Active</SelectItem>
                        <SelectItem value="inactive">Inactive</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>{formatDate(item.created_at)}</TableCell>
                  {/* <TableCell>{formatDate(item.updated_at)}</TableCell> */}
                  <TableCell className="text-center">
                    <div className="flex justify-center gap-2">
                      <Button
                        variant="outline"
                        className="cursor-pointer"
                        size="sm"
                        onClick={() => openEditDialog(item)}
                        aria-label="Edit currency"
                      >
                        <Pencil className="w-4 h-4" />
                      </Button>
                      <Button
                        variant="destructive"
                        size="sm"
                        className="cursor-pointer"
                        onClick={() => {
                          console.log(`deleted id is ${item.id}`);
                          setDeleteId(item.id);
                          setDeleteOpen(true);
                        }}
                        aria-label="Delete currency"
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
                  colSpan={8}
                  className="text-center text-gray-500 py-8"
                >
                  {searchTerm
                    ? "No matching currencies found"
                    : "No currencies available"}
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Edit Dialog */}
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent className="bg-white">
          <DialogHeader>
            <DialogTitle>Edit Currency</DialogTitle>
            <DialogDescription>
              Update the currency details below
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 py-2">
            <div>
              <Label htmlFor="currency-name" className="mb-2">Currency Name</Label>
              <Input
                value={editData.name || ""}
                onChange={(e) =>
                  setEditData({ ...editData, name: e.target.value })
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="currency-code" className="mb-2">Currency Code</Label>
              <Input
                id="currency-code"
                value={editData.code || ""}
                onChange={(e) =>
                  setEditData({ ...editData, code: e.target.value })
                }
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="currency-symbol" className="mb-2">Symbol</Label>
              <Input
                id="currency-symbol"
                value={editData.symbol || ""}
                onChange={(e) =>
                  setEditData({ ...editData, symbol: e.target.value })
                }
                className="mt-1"
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
              disabled={!editData.name || !editData.code || saving}
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
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              currency.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel className="cursor-pointer">Cancel</AlertDialogCancel>
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
