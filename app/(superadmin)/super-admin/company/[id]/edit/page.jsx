"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Loader, ArrowLeft } from "lucide-react";
import { rootDomain } from "@/utils/rootDomain";
import TimezoneField from "@/utils/TimezoneField";
import CurrencyField from "@/components/superadmin/company/create/CurrencyField";
import { toast } from "react-toastify";
import CompanyLogoUploader from "@/components/company/company-logo/CompanyLogoUplaod";

// Validation Schema
const validationSchema = Yup.object({
  company_name: Yup.string().required("Please enter your company name."),
  subdomain: Yup.string()
    .trim()
    .lowercase()
    .required("Please enter your company subdomain.")
    .matches(
      /^[a-z0-9-]+$/,
      "Subdomain can only contain lowercase letters, numbers, and hyphens."
    ),
  currency: Yup.object().nullable().required("Please select a currency"),

  timezone: Yup.string().required("Please select a timezone"),
  files: Yup.array()
    .test("fileRequired", "File is required", (files) => {
      return files && files.length > 0;
    })
    .test("fileSize", "File is too large", (files) => {
      if (!files.length) return true;
      const file = files[0];
      if (file instanceof File) {
        return file.size <= 50 * 1024 * 1024;
      }
      return true;
    }),
});

export default function EditCompany() {
  const router = useRouter();
  const { id } = useParams();
  const [fileError, setFileError] = React.useState("");
  const [initialValues, setInitialValues] = useState(null);

  // fetch existing company
  useEffect(() => {
    async function fetchCompany() {
      try {
        const res = await fetch(`/api/superadmin/company/${id}`);
        const result = await res.json();
        console.log("Fetch Comany details :", result);
        if (!res.ok)
          throw new Error(result.message || "Failed to fetch company");

        const data = result.data;
        setInitialValues({
          company_name: data.company_name || "",
          subdomain: data.sub_domain || "",
          currency: data.currency_code
            ? {
                code: data.currency_code,
                symbol: data.currency_symbol,
              }
            : null,
          timezone: data.timezone || "",
          files: data.company_logo
            ? [
                {
                  name: data.logo_name,
                  size: data.logo_size,
                  url: `/uploads/${data.sub_domain}/company-logo/${
                    data.company_logo
                  }?t=${Date.now()}`,
                },
              ]
            : [],
        });
      } catch (err) {
        toast.error(err.message);
      }
    }
    if (id) fetchCompany();
  }, [id]);

  //   Handle Update
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("id", id);
      formData.append("company_name", values.company_name.trim());
      formData.append("sub_domain", values.subdomain.trim().toLowerCase());
      formData.append("currency_code", values.currency.code);
      formData.append("currency_symbol", values.currency.symbol);
      formData.append("timezone", values.timezone);

      if (values.files.length > 0 && values.files[0] instanceof File) {
        formData.append("company_logo", values.files[0]);
      }

      const res = await fetch(`/api/superadmin/company/${id}`, {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to update company.");
      } else {
        toast.success("Company updated successfully.");
        router.push("/super-admin/company");
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  if (!initialValues) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader className="animate-spin h-6 w-6 text-muted-foreground" />
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <h2 className="text-lg font-semibold text-slate-800">Edit Company</h2>
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

      <div className="w-full px-6 sm:px-6 py-4 mt-2 max-w-2xl">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            setFieldValue,
            setFieldError,
            errors,
            touched,
          }) => (
            <Form className="space-y-4">
              {/* Company Details */}
              <h2 className="text-md font-semibold text-gray-700 mb-4">
                Company Details
              </h2>

              {/* Company Name */}
              <div>
                <Label htmlFor="company_name" className="mb-2">
                  Company Name<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  name="company_name"
                  placeholder="Enter company name"
                />
                <ErrorMessage
                  name="company_name"
                  component="p"
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              {/* Subdomain */}
              <div>
                <Label htmlFor="subdomain" className="mb-2">
                  Subdomain<span className="text-rose-500">*</span>
                </Label>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <Field name="subdomain">
                      {({ field }) => (
                        <Input
                          {...field}
                          id="subdomain"
                          placeholder="your-subdomain"
                          className="w-full rounded-r-none focus:z-10 lowercase bg-gray-100 cursor-not-allowed text-gray-500"
                          value={field.value}
                          readOnly
                        />
                      )}
                    </Field>
                  </div>
                  <span className="bg-gray-100 px-3 border border-l-0 border-input rounded-r-md text-gray-500 min-h-[36px] flex items-center">
                    .{rootDomain}
                  </span>
                </div>
                <ErrorMessage
                  name="subdomain"
                  component="p"
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              {/* Currency */}
              <div>
                <Label htmlFor="currency" className="mb-2">
                  Currency<span className="text-rose-500">*</span>
                </Label>
                <CurrencyField
                  setFieldValue={setFieldValue}
                  value={values.currency}
                />
                <ErrorMessage
                  name="currency"
                  component="p"
                  className="text-xs text-red-600 mt-1"
                />
              </div>

              {/* TimeZone Select */}
              <TimezoneField
                setFieldValue={setFieldValue}
                value={values.timezone}
              />
              {/* Company Logo */}
              <div>
                <Label htmlFor="company_logo" className="mb-2">
                  Company Logo Upload<span className="text-rose-500">*</span>
                </Label>
                <CompanyLogoUploader
                  value={values.files}
                  onChange={(newFiles) => {
                    setFieldValue("files", newFiles);
                    setFileError("");
                  }}
                  onError={(msg) => {
                    setFieldError("files", msg);
                    setFileError(msg);
                  }}
                />
                {(errors.files && touched.files) || fileError ? (
                  <p className="text-xs mt-1 text-red-500">
                    {errors.files || fileError}
                  </p>
                ) : null}
              </div>

              {/* Actions */}
              <div className="flex gap-4 mt-4">
                <Button
                  type="submit"
                  className="bg-slate-800 text-white cursor-pointer"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Updating..." : "Update"}
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
