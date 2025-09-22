"use client";

import { useEffect, useState } from "react";
import DataTable from "./DataTable";
import { columns as initialColumns } from "./columns";

export default function CustomerTable() {
  const [data, setData] = useState([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [columns, setColumns] = useState(initialColumns);

  const [filters, setFilters] = useState({
    page: 1,
    pageSize: 10,
    search: "",
    sort: "created_at",
    order: "desc",
    status: "all",
  });

  const fetchData = async () => {
    try {
      setLoading(true);
      const params = new URLSearchParams({
        ...filters,
        page: filters.page.toString(),
        pageSize: filters.pageSize.toString(),
      });
      const res = await fetch(`/api/customers?${params}`);

      if (res.status === 404) {
        // Handle API route not found
        throw new Error("API endpoint not found");
      }
       if (!res.ok) {
        throw new Error(`API request failed with status ${res.status}`);
      }

      const { data, totalCount } = await res.json();
      // console.log("Result Data :", data)
      setData(data || []);
      setTotal(totalCount || 0);
    } catch (error) {
      console.error("Failed to fetch customer data", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [filters]);

  return (
    <DataTable
      columns={columns}
      setColumns={setColumns}
      data={data}
      total={total}
      loading={loading}
      filters={filters}
      setFilters={setFilters}
    />
  );
}
