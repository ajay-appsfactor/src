"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Loader, Save, Eye } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import CurrencySelect from "@/components/form-fields/CurrencySelect";
import PaymentTermsSelect from "@/components/form-fields/PaymentTermsSelect";

const FinancialVendorForm = ({ vendor }) => {
  // console.log("vendor financial data :", vendor);
  const router = useRouter();

  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";

  const validationSchema = Yup.object({
    bank_name: Yup.string().required("Bank name is required"),
    bank_account_number: Yup.string().required("Account number is required"),
    swift_iban_code: Yup.string().required("SWIFT/IBAN is required"),
    preferred_currency: Yup.string().required("Currency is required"),
    payment_terms: Yup.string().required("Payment terms is required"),
    default_tax_rate: Yup.number()
      .typeError("Must be a number")
      .min(0, "Cannot be negative")
      .max(100, "Cannot be more than 100")
      .nullable(),
    credit_limit: Yup.number()
      .typeError("Must be a number")
      .min(0, "Cannot be negative")
      .nullable(),
  });

  const initialValues = {
    bank_name: vendor?.bank_name || "",
    bank_account_number: vendor?.bank_account_number || "",
    swift_iban_code: vendor?.swift_iban_code || "",
    preferred_currency: vendor?.preferred_currency || "",
    payment_terms: vendor?.payment_terms || "",
    default_tax_rate: vendor?.default_tax_rate || "",
    credit_limit: vendor?.credit_limit || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      ...values,
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}/financial`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to save financial info.");
      } else {
        toast.success(data.message || "Financial info saved!");
        router.push(`/vendor/${vendorId}/operational-settings`);
      }
    } catch (error) {
      // console.error("Submit error:", error);
      toast.error("Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {vendorName} - Payment & Financial Info
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 py-4 mt-2 max-w-2xl w-full">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Bank Name */}
              <div>
                <Label htmlFor="bank_name" className="mb-2">
                  Bank Name <span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="bank_name"
                  name="bank_name"
                  className="w-full"
                />
                <ErrorMessage
                  name="bank_name"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Account Number */}
              <div>
                <Label htmlFor="bank_account_number" className="mb-2">
                  Bank Account Number <span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="bank_account_number"
                  name="bank_account_number"
                  className="w-full"
                />
                <ErrorMessage
                  name="bank_account_number"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* SWIFT/IBAN Code */}
              <div>
                <Label htmlFor="swift_iban_code" className="mb-2">
                  SWIFT / IBAN <span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="swift_iban_code"
                  name="swift_iban_code"
                  className="w-full"
                />
                <ErrorMessage
                  name="swift_iban_code"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Default Tax Rate */}
              <div>
                <Label htmlFor="default_tax_rate" className="mb-2">
                  Default Tax Rate (%)
                </Label>
                <Field
                  as={Input}
                  type="number"
                  step="0.01"
                  id="default_tax_rate"
                  name="default_tax_rate"
                  className="w-full"
                />
                <ErrorMessage
                  name="default_tax_rate"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Master Currency */}
              <CurrencySelect
                name="preferred_currency"
                label="Currency"
                required
              />

              {/* Master Payment Terms */}
              <PaymentTermsSelect
                name="payment_terms"
                label="Payment Terms"
                required
              />

              {/* Credit Limit */}
              <div>
                <Label htmlFor="credit_limit" className="mb-2">
                  Credit Limit
                </Label>
                <Field
                  as={Input}
                  type="number"
                  id="credit_limit"
                  name="credit_limit"
                  className="w-full"
                />
                <ErrorMessage
                  name="credit_limit"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-right mb-2">
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer "
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Save
                    </>
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FinancialVendorForm;
