"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Loader, ArrowLeft } from "lucide-react";
import { rootDomain } from "@/utils/rootDomain";
import { toast } from "react-toastify";
import CompanyLogoUploader from "@/components/company/company-logo/CompanyLogoUplaod";
import { useCompany } from "@/context/CompanyContext";
import TimezoneField from "@/utils/TimezoneField";
import CurrencyField from "@/components/superadmin/company/create/CurrencyField";

const validationSchema = Yup.object({
  company_name: Yup.string()
    .trim()
    .strict(true)
    .required("Please enter your company name.")
    .min(2, "Too short")
    .max(100, "Too long"),
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

export default function GeneralSettingPage() {
  const router = useRouter();
  const { company, setCompany } = useCompany();
  const [fileError, setFileError] = React.useState("");

  if (!company) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, setFieldValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("company_name", values.company_name.trim());
      formData.append("currency_code", values.currency.code);
      formData.append("currency_symbol", values.currency.symbol);
      formData.append("timezone", values.timezone);
      if (values.files.length > 0 && values.files[0] instanceof File) {
        formData.append("company_logo", values.files[0]);
      }

      const res = await fetch("/api/company/general-settings", {
        method: "PUT",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.message || "Failed to update general-settings.");
      } else {
        toast.success(data.message || "General-settings updated successfully.");

        // Update context so Navbar & other components reflect changes
        setCompany((prev) => ({
          ...prev,
          company_name: data.company.company_name,
          currency_code: data.company.currency_code,
          currency_symbol: data.company.currency_symbol,
          timezone: data.company.timezone,
          company_logo: data.company.company_logo,
          logo_name: data.company.logo_name,
          company_logo_url: data.company.company_logo
            ? `/uploads/${data.company.sub_domain}/company-logo/${
                data.company.company_logo
              }?t=${Date.now()}`
            : null,
        }));

        setFieldValue("files", [
          {
            name: data.company.logo_name,
            size: data.company.logo_size,
            url: `/uploads/${data.company.sub_domain}/company-logo/${data.company.company_logo}`,
          },
        ]);
      }
    } catch (error) {
      // console.error(error);
      setFieldError(error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <h2 className="text-lg font-semibold text-slate-800">General</h2>
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
      <div className="w-full px-6 sm:px-6 py-4  max-w-2xl">
        <Formik
          enableReinitialize
          initialValues={{
            company_name: company.company_name || "",
            subdomain: company.sub_domain || "",
            currency: company.currency_code
              ? {
                  code: company.currency_code,
                  symbol: company.currency_symbol,
                }
              : null,
            timezone: company.timezone || "",
            files: company.company_logo
              ? [
                  {
                    name: company.logo_name,
                    size: company.logo_size,
                    url: company.company_logo_url,
                  },
                ]
              : [],
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            isSubmitting,
            values,
            errors,
            touched,
            setFieldError,
            setFieldValue,
          }) => (
            <Form className="space-y-4">
              {/* Company Details */}
              <h2 className="text-md font-semibold text-gray-700 mb-4 pb-1">
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
                  className="w-full"
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
                <Label htmlFor="currency_symbol" className="mb-2">
                  Currency<span className="text-rose-500">*</span>
                </Label>
                <CurrencyField
                  setFieldValue={setFieldValue}
                  value={values.currency}
                />
                <ErrorMessage
                  name="currency_symbol"
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

              <div className="flex items-center gap-4 mt-4">
                <Button
                  type="submit"
                  className="w-32 cursor-pointer bg-slate-800 hover:bg-slate-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader className="w-4 h-4 animate-spin" /> Saving...
                    </div>
                  ) : (
                    "Save"
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
