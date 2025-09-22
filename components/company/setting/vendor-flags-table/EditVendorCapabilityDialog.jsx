"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import { toast } from "react-toastify";

export default function EditVendorCapabilityDialog({
  editOpen,
  setEditOpen,
  editData,
  setEditData,
  refreshList,
}) {
  const [saving, setSaving] = useState(false);

  const handleEditSave = async () => {
    try {
      setSaving(true);
      const res = await fetch(
        `/api/company/settings/vendor-flags/${editData.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: editData.name,
            is_active: editData.is_active,
          }),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update Vendor flags");
        return;
      }

      toast.success(data.message || "Vendor flags updated successfully.");
      setEditOpen(false);

      if (refreshList) refreshList();
    } catch (error) {
      console.error("Error updating Vendor flags:", error);
      toast.error("Something went wrong while saving");
    } finally {
      setSaving(false);
    }
  };

  return (
    <Dialog open={editOpen} onOpenChange={setEditOpen}>
      <DialogContent className="bg-white">
        <DialogHeader>
          <DialogTitle>Edit Vendor Flags</DialogTitle>
          <DialogDescription>
            Update the vendor flags details below
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4 py-2">
          {/* Capability Name */}
          <div>
            <Label htmlFor="capability-name" className="mb-2">Vendor Flags Name</Label>
            <Input
              id="capability-name"
              value={editData.name || ""}
              onChange={(e) =>
                setEditData({ ...editData, name: e.target.value })
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
  );
}
