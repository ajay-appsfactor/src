"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Loader, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
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
import { MultiSelect } from "@/components/ui/multi-selected";

const categoryOptions = [
  { label: "3D Printing Materials", value: "3d_printing" },
  { label: "CNC Parts", value: "cnc_parts" },
  { label: "Electronics", value: "electronics" },
  { label: "Packaging", value: "packaging" },
];

const OperationalVendorForm = ({ vendor }) => {
  const router = useRouter();
  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";

  const validationSchema = Yup.object({
    status: Yup.string().required("vendor status is required"),
    shipping_method: Yup.string().nullable(),
    lead_time: Yup.number().typeError("Must be a number").nullable().min(1, "Lead time must be at least 1"),
    minimum_order_quantity: Yup.number()
      .nullable()
      .min(0, "MOQ cannot be negative"),
    categories: Yup.array().nullable(),
    manager: Yup.string().trim().nullable(),
  });

  const initialValues = {
    status: vendor?.status || "",
    shipping_method: vendor?.shipping_method || "",
    lead_time: vendor?.lead_time || "",
    minimum_order_quantity: vendor?.minimum_order_quantity || "",
    categories: vendor?.categories || [],
    manager: vendor?.manager || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      ...values,
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}/operational-settings`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to save operational settings.");
      } else {
        toast.success(data.message || "Operational Settings Saved.");
        router.push(`/vendor/${vendorId}/notes-and-metadata`);
      }
    } catch (error) {
      // console.error("Submit error:", error);
      toast.error("Failed operational settings saved.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {vendorName} - Operational Settings
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
              {/* Status */}
              <div>
                <Label className="mb-2">Vendor Status<span className="text-rose-500">*</span></Label>

                <Field name="status">
                  {({ field }) => (
                    <Select
                      value={field.value }
                      onValueChange={(value) => setFieldValue("status", value)}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select status" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Active">Active</SelectItem>
                        <SelectItem value="Inactive">Inactive</SelectItem>
                        <SelectItem value="Blacklisted">Blacklisted</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>

                <ErrorMessage
                  name="status"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Shipping Method */}
              <div>
                <Label className="mb-2">Preferred Shipping Method </Label>
                <Field name="shipping_method">
                  {({ field }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        setFieldValue("shipping_method", value)
                      }
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select method" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="courier">Courier</SelectItem>
                        <SelectItem value="freight">Freight</SelectItem>
                        <SelectItem value="inhouse">In-House</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  name="shipping_method"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Lead Time */}
              <div>
                <Label htmlFor="lead_time" className="mb-2">
                  Delivery Lead Time (Days){" "}
                </Label>
                <Field
                  as={Input}
                  id="lead_time"
                  name="lead_time"
                  type="number"
                  className="w-full"
                />
                <ErrorMessage
                  name="lead_time"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* MOQ */}
              <div>
                <Label htmlFor="minimum_order_quantity" className="mb-2">
                  Minimum Order Quantity (MOQ)
                </Label>
                <Field
                  as={Input}
                  id="minimum_order_quantity"
                  name="minimum_order_quantity"
                  type="number"
                  className="w-full"
                />
                <ErrorMessage
                  name="minimum_order_quantity"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Product/Service Categories */}
              <div className="md:col-span-2">
                <Label className="mb-2">Product/Service Categories </Label>
                <MultiSelect
                  options={categoryOptions}
                  value={values.categories}
                  onValueChange={(val) => setFieldValue("categories", val)}
                  placeholder="Select categories"
                />
                <ErrorMessage
                  name="categories"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Assigned Manager */}
              <div className="md:col-span-2">
                <Label className="mb-2">Assigned Buyer/Manager </Label>
                <Field
                  as={Input}
                  id="manager"
                  name="manager"
                  type="text"
                  className="w-full"
                />
                <ErrorMessage
                  name="manager"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-right mb-2">
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
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

export default OperationalVendorForm;
