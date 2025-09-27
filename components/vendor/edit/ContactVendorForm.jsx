"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save } from "lucide-react";
import { toast } from "react-toastify";

export default function VendorContactForm({ vendor }) {
  const router = useRouter();
  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";

  const initialValues = {
    contact_name: vendor?.contact_name || "",
    contact_email: vendor?.email || "",
    contact_phone: vendor?.phone || "",
    job_title: vendor?.job_title || "",
  };

  const validationSchema = Yup.object({
    contact_name: Yup.string()
      .required("Contact name is required")
      .min(3, "Contact name must be at least 3 characters")
      .max(50, "Contact name cannot exceed 50 characters"),
    contact_email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact_phone: Yup.string()
      .nullable()
      .notRequired()
      .test("is-valid-e164", "Enter a valid phone number", function (value) {
        if (!value) return true;
        return /^\+\d{8,15}$/.test(value);
      }),
    job_title: Yup.string()
      .min(2, "Job title must be at least 2 characters")
      .max(50, "Job title cannot exceed 50 characters"),
  });

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!vendorId) {
      toast.error("Vendor ID is missing.");
      return;
    }

    const payload = {
      ...values,
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}/contact-detail`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success(data.message || "Primary Contact Saved");
      router.push(`/vendor/${vendorId}/address-details`);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed contact saved");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {vendorName} - Primary Contact Details
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 py-4 mt-2 w-full">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-6 border p-4 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-5">
                {/* Contact name */}
                <div>
                  <Label className="block mb-1">
                    Contact Name <span className="text-rose-500">*</span>
                  </Label>
                  <Field as={Input} name="contact_name" />
                  <ErrorMessage
                    name="contact_name"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                {/* Email */}
                <div>
                  <Label className="block mb-1">
                    Email <span className="text-rose-500">*</span>
                  </Label>
                  <Field as={Input} name="contact_email" />
                  <ErrorMessage
                    name="contact_email"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                {/* Phone */}
                <div>
                  <Label htmlFor="contact_phone" className="mb-1">
                    Phone
                  </Label>
                  <Field name="contact_phone">
                    {({ field, form }) => (
                      <>
                        <PhoneInput
                          country={"us"}
                          enableSearch
                          value={field.value}
                          onChange={(value, country) => {
                            if (!value)
                              return form.setFieldValue("contact_phone", "");
                            const dialCode = country?.dialCode || "";
                            let formatted = value;
                            if (!value.startsWith("+")) {
                              const numberOnly = value.replace(
                                new RegExp(`^${dialCode}`),
                                ""
                              );
                              formatted = `+${dialCode}${numberOnly}`;
                            }
                            form.setFieldValue("contact_phone", formatted);
                          }}
                          inputProps={{
                            name: "contact_phone",
                            id: "contact_phone",
                            autoFocus: false,
                          }}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{
                            width: "100%",
                            height: "36px",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            border: "1px solid #e5e7eb",
                            paddingLeft: "48px",
                          }}
                          buttonStyle={{
                            border: "none",
                            borderTopLeftRadius: "0.375rem",
                            borderBottomLeftRadius: "0.375rem",
                          }}
                        />
                        <ErrorMessage
                          name="contact_phone"
                          component="div"
                          className="text-xs text-red-500 mt-1"
                        />
                      </>
                    )}
                  </Field>
                </div>
                {/* Job Title */}
                <div>
                  <Label className="block mb-1">Job Title</Label>
                  <Field as={Input} name="job_title" />
                  <ErrorMessage
                    name="job_title"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                {/* Button */}
                <div className="md:col-span-2 text-right mb-2">
                  <div className="flex justify-start gap-4">
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
                          <Save className="w-4 h-4" /> Save
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
