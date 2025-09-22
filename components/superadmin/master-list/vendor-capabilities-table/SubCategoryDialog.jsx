"use client";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export default function SubCategoryDialog({ open, setOpen, vendor }) {
  const [formData, setFormData] = useState({ name: "" });

  // Prefill when vendor changes
  useEffect(() => {
    if (vendor) {
      setFormData({ name: vendor.name || "" });
    }
  }, [vendor]);

  const handleSave = (e) => {
    e.preventDefault();
    console.log("Saving SubCategory for Vendor:", vendor?.id, formData);
    setOpen(false);
  };

  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      className="max-w-[700px]"
      showCloseButton={true}
    >
      <div className="relative max-w-2xl mx-auto p-4 overflow-y-auto rounded-3xl dark:bg-gray-900">
        <h4 className="mb-6 text-xl font-semibold text-gray-800 dark:text-white/90">
          Edit Sub Category {vendor?.name ? `– (${vendor.name})` : ""}
        </h4>

        <form onSubmit={handleSave} className="space-y-5">
          {/* Input field */}
          <div>
            <Label htmlFor="subcategory">Sub Category Name</Label>
            <Input
              id="subcategory"
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
            />
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3 pt-4">
            <Button
              variant="outline"
              type="button"
              onClick={() => setOpen(false)}
              className="cursor-pointer"
            >
              Close
            </Button>
            <Button type="submit" className="cursor-pointer">
              Save
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
