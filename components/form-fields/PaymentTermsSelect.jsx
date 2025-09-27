"use client";

import { useEffect, useState } from "react";
import { Field, ErrorMessage } from "formik";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

export default function PaymentTermsSelect({ name, label, required }) {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchTerms() {
      try {
        const res = await fetch("/api/company/active-list/payment-terms");
        const data = await res.json();
        if (res.ok) {
          setTerms(data.data);
        }
      } catch (err) {
        console.error("Error fetching payment terms:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchTerms();
  }, []);

  if (loading)
    return <p className="text-sm text-gray-500">Loading payment terms...</p>;

  return (
    <div>
      <Label htmlFor={name} className="mb-2">
        {label} {required && <span className="text-red-500">*</span>}
      </Label>
      <Field name={name}>
        {({ field, form }) => (
          <Select
            value={field.value || ""}
            onValueChange={(id) => {
              form.setFieldValue(name, id);
            }}
          >
            <SelectTrigger className="w-full cursor-pointer">
              <SelectValue placeholder="Select payment terms" />
            </SelectTrigger>
            <SelectContent>
              {terms.map((t) => (
                <SelectItem
                  key={t.payment_terms_id}
                  value={t.payment_terms_id.toString()}
                >
                  {t.name} {t.due_days ? `— Due in ${t.due_days} days` : ""}
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
