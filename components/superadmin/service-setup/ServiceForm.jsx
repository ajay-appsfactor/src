"use client";

import React from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save, Plus, X, ArrowLeft } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const ServiceCreate = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Service name is required"),
    material_name: Yup.array().of(Yup.string().nullable().trim()),
    finishes_name: Yup.array().of(Yup.string().nullable().trim()),
  });

  const initialValues = {
    name: "",
    material_name: [""],
    finishes_name: [""],
    exclude_inspection: false,
    invoice50: false,
    fob_china: false,
    require_deposit_invoice: false,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    // console.log("Submit Values :", values)
    try {
      const response = await fetch("/api/superadmin/service-setup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (!response.ok) throw new Error("Failed to create service");

      toast.success(data.message || "Service created successfully.");
      router.push("/super-admin/master-list/services");
    } catch (error) {
      // console.error(error);
      toast.error(data.error || "Failed to create service.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Create Service
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

      <div className="w-full px-6 py-4 mt-2">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-6">
              {/* Checkboxes */}
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <Checkbox
                    id="exclude_inspection"
                    checked={values.exclude_inspection}
                    onCheckedChange={(val) =>
                      setFieldValue("exclude_inspection", val)
                    }
                  />
                  <Label htmlFor="exclude_inspection">
                    Exclude from Inspection
                  </Label>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="invoice50"
                    checked={values.invoice50}
                    onCheckedChange={(val) =>
                      setFieldValue("invoice50", val)
                    }
                  />
                  <Label htmlFor="invoice50">Enable INV50</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="fob_china"
                    checked={values.fob_china}
                    onCheckedChange={(val) =>
                      setFieldValue("fob_china", val)
                    }
                  />
                  <Label htmlFor="fob_china">FOB China</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="require_deposit_invoice"
                    checked={values.require_deposit_invoice}
                    onCheckedChange={(val) =>
                      setFieldValue("require_deposit_invoice", val)
                    }
                  />
                  <Label htmlFor="require_deposit_invoice">
                    Require Deposit Invoice
                  </Label>
                </div>
              </div>

              {/* Service Name */}
              <div>
                <Label htmlFor="name" className="mb-2">
                  Name <span className="text-rose-500">*</span>
                </Label>
                <Field name="name" as={Input} />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {/* Materials */}
                <div>
                  <Label className="mb-2">Materials</Label>
                  <FieldArray name="material_name">
                    {({ push, remove }) => (
                      <div className="space-y-2">
                        {values.material_name.map((_, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Field
                              name={`material_name[${index}]`}
                              as={Input}
                              placeholder="Material"
                              className="flex-1"
                            />
                            {values.material_name.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => remove(index)}
                                size="sm"
                                className="bg-red-50 rounded-full p-1 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                        ))}

                        <div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => push("")}
                            size="sm"
                            className="flex items-center gap-1 mt-1 cursor-pointer"
                          >
                            <Plus size={16} /> Add More
                          </Button>
                        </div>

                        <ErrorMessage
                          name="material_name"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    )}
                  </FieldArray>
                </div>

                {/* Finishes */}
                <div>
                  <Label className="mb-2">Finishes</Label>
                  <FieldArray name="finishes_name">
                    {({ push, remove }) => (
                      <div className="space-y-2">
                        {values.finishes_name.map((_, index) => (
                          <div key={index} className="flex items-center gap-2">
                            <Field
                              name={`finishes_name[${index}]`}
                              as={Input}
                              placeholder="Finish"
                              className="flex-1"
                            />
                            {values.finishes_name.length > 1 && (
                              <Button
                                type="button"
                                onClick={() => remove(index)}
                                size="sm"
                                className="bg-red-50 rounded-full p-1 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                        ))}

                        <div>
                          <Button
                            type="button"
                            variant="outline"
                            onClick={() => push("")}
                            size="sm"
                            className="flex items-center gap-1 mt-1 cursor-pointer"
                          >
                            <Plus size={16} /> Add More
                          </Button>
                        </div>

                        <ErrorMessage
                          name="finishes_name"
                          component="div"
                          className="text-red-500 text-sm mt-1"
                        />
                      </div>
                    )}
                  </FieldArray>
                </div>
              </div>

              {/* Submit */}
              <div className="flex gap-2">
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
                      Save
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

export default ServiceCreate;
