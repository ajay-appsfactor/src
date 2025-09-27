"use client";

import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { columns as getColumns } from "./columns";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import EditVendorCapabilityDialog from "./EditVendorCapabilityDialog";
import { toast } from "react-toastify";
import SubCategoryDialog from "./SubCategoryDialog";

export default function ServiceTable() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  // SubCategory states
  const [subCategoryOpen, setSubCategoryOpen] = useState(false);
  const [selectedVendor, setSelectedVendor] = useState(null);

  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 10,
    search: "",
    sort: "created_at",
    order: "desc",
    status: "all",
  });

  // For Edit Dialog
  const [editOpen, setEditOpen] = useState(false);
  const [editData, setEditData] = useState({});

  // Delete states
  const [deleteId, setDeleteId] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const [columns, setColumns] = useState(() =>
    getColumns(
      setDeleteId,
      setDeleteOpen,
      setEditOpen,
      setEditData,
      setSelectedVendor,
      setSubCategoryOpen
    )
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        ...filters,
        page: filters.page.toString() || "1",
        pageSize: filters.pageSize.toString() || "10",
      });
      const res = await fetch(
        `/api/superadmin/master-list/vendor-capabilities?${params}`
      );
      const result = await res.json();
      // console.log("result :", result);

      if (!res.ok) {
        throw new Error(
          result?.error || `API request failed with status ${res.status}`
        );
      }

      // const { data, totalCount } = await res.json();
      setData(result.data || []);
      setTotal(result.totalCount ?? 0);
      // setData(data || []);
      // setTotal(totalCount || 0);
    } catch (error) {
      toast.error(error.message || "Failed to fetch vendor capability.");
      // console.error("Failed to fetch vendor capability data", error);
      setData([]);
      setTotal(0);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      const res = await fetch(
        `/api/superadmin/master-list/vendor-capabilities/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();

      if (!res.ok)
        throw new Error(data.error || "Failed to delete vendor capability.");
      toast.success(data.message || "Vendor capability deleted successfully.");
      // console.log("Deleted ID:", id);
      setData((d) => d.filter((r) => r.id !== id));
      setTotal((t) => t - 1);
      // await fetchData();
    } catch (error) {
      toast.error(error.message || "Error deleting Vendor capability.");
      // console.error(err);
    }
  };

  return (
    <>
      <DataTable
        // columns={getColumns(setDeleteId, setDeleteOpen)}
        columns={columns}
        setColumns={setColumns}
        data={data}
        total={total}
        loading={loading}
        filters={filters}
        setFilters={setFilters}
        onDelete={handleDelete}
      />

      {/* Edit Dialog */}
      <EditVendorCapabilityDialog
        editOpen={editOpen}
        setEditOpen={setEditOpen}
        editData={editData}
        setEditData={setEditData}
        refreshList={fetchData}
      />

      {/* Delete Dailog */}
      <DeleteConfirmDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        deleteId={deleteId}
        onConfirm={handleDelete}
      />

      {/* Sub Category Dialog */}
      <SubCategoryDialog
        open={subCategoryOpen}
        setOpen={setSubCategoryOpen}
        vendor={selectedVendor}
        refreshList={fetchData}
      />
    </>
  );
}
