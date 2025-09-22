"use client";

import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { columns as getColumns } from "./columns";
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import { toast } from "react-toastify";

export default function UsersTable() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);

  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 10,
    search: "",
    sort: "created_at",
    order: "desc",
  });

  // Delete states
  const [deleteId, setDeleteId] = useState(null);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [columns, setColumns] = useState(() =>
    getColumns(setDeleteId, setDeleteOpen)
  );

  const fetchData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        ...filters,
        page: filters.page.toString() || "1",
        pageSize: filters.pageSize.toString() || "10",
      });
      const res = await fetch(`/api/company/users?${params}`);
      const result = await res.json();

      if (!res.ok) {
        throw new Error(
          result?.error || `API request failed with status ${res.status}`
        );
      }
      setData(result.data || []);
      setTotal(result.totalCount ?? 0);
    } catch (error) {
      toast.error(error.message || "Failed to fetch services");
      console.error("Failed to fetch customer data", error);
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
      const res = await fetch(`/api/company/users/${id}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to delete user");
      toast.success(data.message || "User deleted successfully.");
      setData((d) => d.filter((r) => r.id !== id));
      setTotal((t) => t - 1);
    } catch (error) {
      toast.error(error.message || "Error deleting user");
      console.error(err);
    }
  };

  return (
    <>
      <DataTable
        columns={columns}
        setColumns={setColumns}
        data={data}
        total={total}
        loading={loading}
        filters={filters}
        setFilters={setFilters}
        onDelete={handleDelete}
      />

      <DeleteConfirmDialog
        open={deleteOpen}
        setOpen={setDeleteOpen}
        deleteId={deleteId}
        onConfirm={handleDelete}
      />
    </>
  );
}
