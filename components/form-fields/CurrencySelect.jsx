"use client";

import { useEffect, useState } from "react";
import { Field, ErrorMessage } from "formik";
import { Label } from "@/components/ui/label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";

export default function CurrencySelect({ name, label, required }) {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const res = await fetch("/api/company/active-list/currency");
        const data = await res.json();
        if (res.ok) {
          setCurrencies(data.data);
        }
      } catch (err) {
        console.error("Error fetching currencies:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchCurrencies();
  }, []);

  if (loading) return <p className="text-sm text-gray-500">Loading currencies...</p>;

  return (
    <div>
      <Label htmlFor={name} className="mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Field name={name}>
        {({ field, form }) => ( 
          <Select
            value={field.value || ""}
            onValueChange={(val) => form.setFieldValue(name, val)}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select currency" />
            </SelectTrigger>
            <SelectContent>
              {currencies.map((c) => (
                <SelectItem key={c.code} value={c.code}>
                  {c.name} ({c.symbol})
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        )}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-xs text-red-500 mt-1"
      />
    </div>
  );
}
