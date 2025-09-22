"use client";

import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Loader, Save } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "react-toastify";

export default function OperationalCustomerForm({ customer }) {
  const router = useRouter();

  // Always use consistent key
  const customerId = customer?.customer_id;
  const customerName = customer?.customer_name || "Customer";

  const initialValues = {
    delivery_method: customer.delivery_method || "",
    quote_format: customer.quote_format || "",
  };

  const validationSchema = Yup.object({
    delivery_method: Yup.string().nullable(),
    quote_format: Yup.string().nullable(),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch(
        `/api/customer/edit/${customerId}/operational-details`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );

      const data = await res.json();
      // console.log(data);

      if (!res.ok) {
        // Show backend error if present
        throw new Error(data.error || "Failed to update operational details");
      }

      toast.success(data.message || "Operational details saved successfully!");
      router.push(`/customer/${customerId}/edit/attachments-notes`);
    } catch (error) {
      console.error("Submit error:", error);
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {customerName} - Operational Details
          </h2>
        </div>
      </div>
      <hr />

      <div className="px-6 py-4 max-w-2xl">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          validateOnBlur={true}
          validateOnChange={false}
        >
          {({ isSubmitting, values, setFieldValue }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Delivery Method */}
              <div>
                <Label htmlFor="delivery_method" className="mb-2">
                  Preferred Delivery Method{" "}
                </Label>
                <Field name="delivery_method">
                  {({ field, form }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="email">Email</SelectItem>
                        <SelectItem value="portal">Portal</SelectItem>
                        <SelectItem value="courier">Courier</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
              </div>

              {/* Quote Format */}
              <div>
                <Label htmlFor="quote_format" className="mb-2">
                  Preferred Quote Format{" "}
                </Label>
                <Field name="quote_format">
                  {({ field, form }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF</SelectItem>
                        <SelectItem value="excel">Excel</SelectItem>
                        <SelectItem value="web">Web View</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
              </div>

              {/* Submit */}
              <div className="flex justify-start gap-4 mb-2">
                {/* Save Button */}
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-5 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                  disabled={
                    isSubmitting ||
                    (!values.delivery_method && !values.quote_format)
                  }
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
}
