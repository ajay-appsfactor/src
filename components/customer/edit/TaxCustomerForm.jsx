"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import { Loader, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import taxCustomerSchema from "@/validations/customer/TaxCustomerSchema";
import CurrencySelect from "@/components/form-fields/CurrencySelect";
import PaymentTermsSelect from "@/components/form-fields/PaymentTermsSelect";

export default function EditCustomerTaxForm({ customer }) {
  const router = useRouter();

  // Always use consistent key
  const customerId = customer?.customer_id;
  const customerName = customer?.customer_name || "Customer";

  const validationSchema = taxCustomerSchema;

  const initialValues = {
    tax_number: customer.tax_number || "",
    default_tax_rate: customer.default_tax || "",
    currency: customer.currency || "",
    payment_terms: customer.payment_terms || "",
    credit_limit: customer.credit_limit || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      ...values,
      default_tax_rate: values.default_tax_rate
        ? parseFloat(values.default_tax_rate)
        : null,
      credit_limit: values.credit_limit
        ? parseFloat(values.credit_limit)
        : null,
    };
    try {
      const res = await fetch(
        `/api/customer/edit/${customerId}/tax-financial`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();
      // console.log("Customer Tax Data:", data);

      if (!res.ok) throw new Error(data.error || "Failed to update.");

      toast.success(data.message || "Tax & Financial Info saved successfully.");

      router.push(`/customer/${customerId}/edit/contact-persons`);
    } catch (error) {
      // console.error("Submit error:", error);
      toast.error("Failed to save tax & financial info.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {customerName} - Tax & Financial Info
          </h2>
        </div>
      </div>
      <hr />
      <div className="px-6 py-4 max-w-2xl">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Tax Number */}
              <div>
                <Label htmlFor="tax_number" className="mb-2">
                  Tax/VAT Number
                </Label>
                <Field
                  as={Input}
                  id="tax_number"
                  name="tax_number"
                  className="w-full"
                />
                <ErrorMessage
                  name="tax_number"
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
              <CurrencySelect name="currency" label="Currency" required />

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
                  step="0.01"
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

              {/* Submit */}
              <div className="md:col-span-2 text-right mb-2">
                <div className="flex justify-start gap-4 ">
                  {/* Save Button */}
                  <Button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" />
                        Save
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
