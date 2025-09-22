"use client";

import { Suspense } from "react";
import CurrencySelect from "./CurrencySelect";

export default function CurrencyField({ setFieldValue, value }) {
  return (
    <Suspense fallback={<p className="text-sm text-gray-500">Loading currencies...</p>}>
      <CurrencySelect setFieldValue={setFieldValue} value={value} />
    </Suspense>
  );
}