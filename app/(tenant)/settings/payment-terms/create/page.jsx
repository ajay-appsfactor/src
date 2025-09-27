"use client";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save, ArrowLeft, Plus, X } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function MasterPaymentTermsForm() {
  const router = useRouter();

  const initialValues = {
    payment_terms: [
      {
        name: "",
        description: "",
        due_days: "",
        discount_days: "",
        discount_percent: "",
        is_active: true,
      },
    ],
  };

  const validationSchema = Yup.object({
    payment_terms: Yup.array().of(
      Yup.object({
        name: Yup.string()
          .trim()
          .required("Payment term name is required")
          .max(100, "Payment term name too long"),
        description: Yup.string().trim().max(255, "Description too long"),
        due_days: Yup.number()
          .typeError("Due days must be a number")
          .min(0, "Cannot be negative")
          .required("Due days are required"),
        discount_days: Yup.number()
          .typeError("Discount days must be a number")
          .min(0, "Cannot be negative")
          .nullable(),
        discount_percent: Yup.number()
          .typeError("Discount percent must be a number")
          .min(0, "Cannot be negative")
          .max(100, "Cannot exceed 100%")
          .nullable(),
      })
    ),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch(`/api/company/master-list/payment-terms`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Something went wrong.");
        return;
      }

      toast.success(data.message || "Payment terms saved.");
      router.push("/settings/payment-terms");
    } catch (error) {
      // console.error("Error submitting form:", error);
      toast.error("Failed to save payment terms.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-white">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Create Payment Terms
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
      <div className="px-6 py-4 w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, isSubmitting, setFieldValue }) => (
            <Form>
              <FieldArray name="payment_terms">
                {({ push, remove }) => (
                  <>
                    {/* Add More */}
                    <div className="mb-4 flex justify-end">
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() =>
                          push({
                            name: "",
                            description: "",
                            due_days: 0,
                            discount_days: "",
                            discount_percent: "",
                            is_active: true,
                          })
                        }
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Plus className="w-4 h-4" />
                        Add More
                      </Button>
                    </div>

                    {/* Payment Term Fields */}
                    <div className="space-y-6">
                      {values.payment_terms.map((term, index) => (
                        <div
                          key={index}
                          className="relative border p-4 rounded-md"
                        >
                          {/* Remove */}
                          {values.payment_terms.length > 1 && (
                            <button
                              type="button"
                              onClick={() => remove(index)}
                              className="cursor-pointer absolute top-2 right-2 bg-red-50 rounded-full p-1 text-sm text-red-500 hover:text-red-700"
                              title="Remove payment term"
                            >
                              <X className="w-3 h-3" />
                            </button>
                          )}

                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {/* Name */}
                            <div>
                              <Label className="mb-2">
                                Name <span className="text-rose-500">*</span>
                              </Label>
                              <Field
                                as={Input}
                                name={`payment_terms.${index}.name`}
                                placeholder="Net 30"
                              />
                              <ErrorMessage
                                name={`payment_terms.${index}.name`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>

                            {/* Due Days */}
                            <div>
                              <Label className="mb-2">
                                Due Days{" "}
                                <span className="text-rose-500">*</span>
                              </Label>
                              <Field
                                as={Input}
                                type="number"
                                name={`payment_terms.${index}.due_days`}
                                placeholder="30"
                              />
                              <ErrorMessage
                                name={`payment_terms.${index}.due_days`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>

                            {/* Discount Days */}
                            <div>
                              <Label className="mb-2">Discount Days</Label>
                              <Field
                                as={Input}
                                type="number"
                                name={`payment_terms.${index}.discount_days`}
                                placeholder="10"
                              />
                              <ErrorMessage
                                name={`payment_terms.${index}.discount_days`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>

                            {/* Discount Percent */}
                            <div>
                              <Label className="mb-2">Discount Percent</Label>
                              <Field
                                as={Input}
                                type="number"
                                step="0.01"
                                name={`payment_terms.${index}.discount_percent`}
                                placeholder="5"
                              />
                              <ErrorMessage
                                name={`payment_terms.${index}.discount_percent`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>

                            {/* Description */}
                            <div className="sm:col-span-2">
                              <Label className="mb-2">Description</Label>
                              <Field
                                as={Input}
                                name={`payment_terms.${index}.description`}
                                placeholder="Payment due in 30 days"
                              />
                              <ErrorMessage
                                name={`payment_terms.${index}.description`}
                                component="div"
                                className="text-xs text-red-500 mt-1"
                              />
                            </div>

                            {/* Active */}
                            <div className="flex items-center gap-2 sm:col-span-2">
                              <Checkbox
                                id={`is_active_${index}`}
                                checked={term.is_active}
                                onCheckedChange={(value) =>
                                  setFieldValue(
                                    `payment_terms.${index}.is_active`,
                                    value
                                  )
                                }
                              />
                              <Label htmlFor={`is_active_${index}`}>
                                Active
                              </Label>
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
