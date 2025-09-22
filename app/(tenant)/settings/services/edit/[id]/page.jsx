"use client";

import { Formik, Form, Field, ErrorMessage, FieldArray } from "formik";
import * as Yup from "yup";
import { Checkbox } from "@/components/ui/checkbox";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Plus, Loader, ArrowLeft, X, Save } from "lucide-react";
import { toast } from "react-toastify";

export default function EditService() {
  const router = useRouter();
  const { id } = useParams();

  const [serviceData, setServiceData] = useState({
    name: "",
    materials: [],
    finishes: [],
    exclude_inspection: false,
    invoice50: false,
    fob_china: false,
    require_deposit_invoice: false,
  });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string().trim().required("Service name is required"),
    material_name: Yup.array().of(Yup.string().nullable().trim()),
    finishes_name: Yup.array().of(Yup.string().nullable().trim()),
  });

  // Fetch service data by ID
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/company/services-setup/${id}`);
        const data = await res.json();

        if (!res.ok) throw new Error(data.error || "Failed to load service");

        setServiceData({
          name: data.name || "",
          materials: data.materials || [],
          finishes: data.finishes || [],
          exclude_inspection: data.exclude_inspection ?? false,
          invoice50: data.invoice50 ?? false,
          fob_china: data.fob_china ?? false,
          require_deposit_invoice: data.require_deposit_invoice ?? false,
        });
      } catch (err) {
        toast.error(err.message || "Failed to load data");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id]);

  // Submit handler
  const handleSubmit = async (values) => {
    try {
      setSaving(true);

      const payload = {
        name: values.name,
        exclude_inspection: values.exclude_inspection,
        invoice50: values.invoice50,
        fob_china: values.fob_china,
        require_deposit_invoice: values.require_deposit_invoice,
        materials: values.material_name.filter(Boolean),
        finishes: values.finishes_name.filter(Boolean),
      };

      const res = await fetch(`/api/company/services-setup/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to update service.");

      toast.success(data.message || "Service updated successfully.");
      router.push("/settings/services");
    } catch (err) {
      toast.error(err.message || "Error saving service");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  return (
    <>
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">Edit Service</h2>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" /> Back
          </Button>
        </div>
      </div>

      <hr />

      <div className="w-full px-6 py-4 max-w-5xl mt-2">
        <Formik
          enableReinitialize
          initialValues={{
            name: serviceData.name || "",
            exclude_inspection: serviceData.exclude_inspection,
            invoice50: serviceData.invoice50,
            fob_china: serviceData.fob_china,
            require_deposit_invoice: serviceData.require_deposit_invoice,
            material_name: serviceData.materials?.map((m) => m.name) || [""],
            finishes_name: serviceData.finishes?.map((f) => f.name) || [""],
          }}
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
                      setFieldValue("exclude_inspection", val === true)
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
                      setFieldValue("invoice50", val === true)
                    }
                  />
                  <Label htmlFor="invoice50">Enable INV50</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="fob_china"
                    checked={values.fob_china}
                    onCheckedChange={(val) =>
                      setFieldValue("fob_china", val === true)
                    }
                  />
                  <Label htmlFor="fob_china">FOB China</Label>
                </div>

                <div className="flex items-center gap-3">
                  <Checkbox
                    id="require_deposit_invoice"
                    checked={values.require_deposit_invoice}
                    onCheckedChange={(val) =>
                      setFieldValue("require_deposit_invoice", val === true)
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
                                variant="destructive"
                                onClick={() => remove(index)}
                                size="sm"
                                className="bg-red-50 rounded-full p-1 text-sm text-red-500 hover:text-red-700 hover:bg-red-50 cursor-pointer"
                              >
                                <X className="w-3 h-3" />
                              </Button>
                            )}
                          </div>
                        ))}

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
                  {isSubmitting || saving ? (
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
    </>
  );
}
