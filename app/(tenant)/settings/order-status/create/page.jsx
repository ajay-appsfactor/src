"use client";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save, ArrowLeft, Plus, X } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function OrderStatusForm() {
  const router = useRouter();

  const initialValues = {
    orders: [{  name: "", is_active: true }],
  };

  const validationSchema = Yup.object({
    orders: Yup.array().of(
      Yup.object({
        name: Yup.string()
          .trim()
          .required("Order status is required")
          .max(100, "Order status name too long"),
      })
    ),
  });

  const handleSubmit = async (values, { setSubmitting,}) => {
   
    try {
      const res = await fetch(`/api/company/master-list/order-status`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ orders: values.orders, }),
      });

      const data = await res.json();
      // console.log("Response currency :", data)
      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success(data.message || "Order status saved.");

      router.push('/settings/order-status');
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error("Failed to save order status");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Create Order Status
          </h2>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <hr />

      {/* Form */}
      <div className="w-full px-6 sm:px-6 py-4 mt-2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting }) => (
            <Form>
              <FieldArray name="orders">
                {({ push, remove }) => (
                  <>
                    {/* Add More Button */}
                    <div className="mb-4 flex justify-end">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => push({  name: "" })}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add More
                      </Button>
                    </div>

                    {/* Orders Fields */}
                    <div className="space-y-6">
                      {values.orders.map((_, index) => (
                        <div
                          key={index}
                          className="relative border p-4 rounded-md"
                        >
                          {/* Delete Button */}
                          {values.orders.length > 1 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="absolute cursor-pointer top-2 right-2 bg-red-50 rounded-full p-1 text-sm text-red-500 hover:text-red-700 "
                              title="Remove currency"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {/* Orders Status Name */}
                            <div>
                              <Label
                                htmlFor={`orders.${index}.name`}
                                className="mb-2"
                              >
                               Order Status Name{" "}
                                <span className="text-rose-500">*</span>
                              </Label>
                              <Field
                                as={Input}
                                name={`orders.${index}.name`}
                                placeholder="Orders Status"
                              />
                              <ErrorMessage
                                name={`orders.${index}.name`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </FieldArray>

              {/* Submit */}
              <div className="mt-6 text-right">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" />
                      Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" />
                      Save All
                    </>
                  )}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
}
