"use client";
import { Modal } from "@/components/ui/modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import { Plus, Trash2, Loader } from "lucide-react";
import { toast } from "react-toastify";

export default function SubCategoryDialog({
  open,
  setOpen,
  vendor,
  refreshList,
}) {
  const [formData, setFormData] = useState({
    subcategories: [{ id: Date.now(), name: "" }],
  });
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  // Fetch subcategories for vendor and prefill
  useEffect(() => {
    if (!vendor?.id) return;

    const fetchSubcategories = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `/api/superadmin/master-list/vendor-capabilities/vendor-subcategories/${vendor.id}`
        );
        if (!res.ok) throw new Error("Failed to fetch");
        const result = await res.json();
        const subs = result.data.length ? result.data : [{ name: "" }];
        setFormData({
          subcategories: subs.map((sub, idx) => ({
            id: Date.now() + idx,
            name: sub.name,
            dbId: sub.id,
          })),
        });
      } catch (err) {
        toast.error("Failed to fetch subcategories.");
      } finally {
        setLoading(false);
      }
    };

    fetchSubcategories();
  }, [vendor, open]);

  const handleSubcategoryChange = (id, value) => {
    setFormData((prev) => ({
      ...prev,
      subcategories: prev.subcategories.map((sub) =>
        sub.id === id ? { ...sub, name: value } : sub
      ),
    }));
  };

  const addSubcategory = () => {
    if (formData.subcategories.length < 5) {
      setFormData((prev) => ({
        ...prev,
        subcategories: [...prev.subcategories, { id: Date.now(), name: "" }],
      }));
    }
  };

  const removeSubcategory = async (id, dbId) => {
    // Delete from DB if dbId exists
    if (dbId) {
      try {
        const res = await fetch(
          `/api/superadmin/master-list/vendor-capabilities/vendor-subcategories/${dbId}`,
          { method: "DELETE" }
        );
        if (!res.ok) throw new Error("Failed to delete");
        toast.success("Sub category deleted.");

        // Refresh parent table badge count update
        refreshList?.();
      } catch (err) {
        toast.error("Failed to delete subcategory.");
        return;
      }
    }

    setFormData((prev) => {
      const updated = prev.subcategories.filter((sub) => sub.id !== id);
      return {
        ...prev,
        subcategories: updated.length
          ? updated
          : [{ id: Date.now(), name: "" }],
      };
    });
  };

  // Handle Save 
  const handleSave = async (e) => {
    e.preventDefault();

    // At least one non-empty subcategory required
    const validSubcategories = formData.subcategories.filter(
      (sub) => sub.name.trim() !== ""
    );

    if (validSubcategories.length === 0) {
      toast.error("Please add at least one subcategory.");
      return;
    }

    setSaving(true);

    const subcategoriesToSave = validSubcategories.map((sub) =>
      sub.dbId ? { id: sub.dbId, name: sub.name } : { name: sub.name }
    );

    try {
      const res = await fetch(
        `/api/superadmin/master-list/vendor-capabilities/vendor-subcategories/${vendor.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ subcategories: subcategoriesToSave }),
        }
      );
      if (!res.ok) throw new Error("Failed to save.");
      toast.success("Sub categories saved.");
      setOpen(false);

      // Refresh parent table badge count update
      refreshList?.();
    } catch (err) {
      toast.error("Failed to save subcategories.");
    } finally {
      setSaving(false);
    }
  };

  const canAddMore = formData.subcategories.length < 5;
  const canRemove = (subcategory) => {
    return !!subcategory.dbId;
  };

  return (
    <Modal
      isOpen={open}
      onClose={() => setOpen(false)}
      className="max-w-[700px]"
      showCloseButton
    >
      <div className="relative max-w-2xl mx-auto p-4 overflow-y-auto rounded-3xl dark:bg-gray-900">
        <h4 className="mb-6 text-lg font-semibold text-gray-800 dark:text-white/90">
          Edit Sub Categories{" "}
          {vendor?.name && (
            <span className="ml-2 text-gray-500 dark:text-gray-400 text-base font-normal">
              ({vendor.name})
            </span>
          )}
        </h4>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <Loader className="animate-spin w-6 h-6 text-slate-700" />
          </div>
        ) : (
          <form onSubmit={handleSave} className="space-y-5">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <Label className="text-base font-medium">Sub Categories</Label>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={addSubcategory}
                  disabled={!canAddMore}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  Add More ({formData.subcategories.length}/5)
                </Button>
              </div>

              {formData.subcategories.map((subcategory, index) => (
                <div key={subcategory.id} className="flex items-center gap-3">
                  <div className="flex-1">
                    <Label
                      htmlFor={`subcategory-${subcategory.id}`}
                      className="sr-only"
                    >
                      Sub Category {index + 1}
                    </Label>
                    <Input
                      id={`subcategory-${subcategory.id}`}
                      type="text"
                      placeholder={`Sub Category ${index + 1}`}
                      value={subcategory.name}
                      onChange={(e) =>
                        handleSubcategoryChange(subcategory.id, e.target.value)
                      }
                      className="w-full"
                    />
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() =>
                      removeSubcategory(subcategory.id, subcategory.dbId)
                    }
                    disabled={!canRemove(subcategory)}
                    className="flex items-center justify-center cursor-pointer text-red-600 hover:text-red-700 hover:bg-red-50 border-red-200"
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              ))}
            </div>

            {formData.subcategories.length === 5 && (
              <p className="text-sm text-red-600 dark:text-red-400">
                Maximum limit of 5 subcategories reached.
              </p>
            )}

            <div className="flex justify-end gap-3 pt-4">
              <Button
                className="cursor-pointer"
                variant="outline"
                type="button"
                onClick={() => setOpen(false)}
                disabled={saving}
              >
                Close
              </Button>
              <Button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 cursor-pointer"
              >
                {saving && <Loader className="w-4 h-4 animate-spin" />}
                {saving ? "Saving..." : "Save"}
              </Button>
            </div>
          </form>
        )}
      </div>
    </Modal>
  );
}
