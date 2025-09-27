"use client";

import { useRouter } from "next/navigation";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Loader, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { rootDomain } from "@/utils/rootDomain";
import { useState } from "react";
import CurrencyField from "./CurrencyField";
import { toast } from "react-toastify";
import TimezoneField from "@/utils/TimezoneField";
import CompanyLogoUploader from "@/components/company/company-logo/CompanyLogoUplaod";

const validationSchema = Yup.object({
  company_name: Yup.string()
    .trim()
    .strict(true)
    .required("Please enter your company name.")
    .min(2, "Too short")
    .max(100, "Too long"),

  subdomain: Yup.string()
    .trim()
    .lowercase()
    .strict(true)
    .required("Please enter your company subdomain.")
    .matches(
      /^[a-z0-9-]+$/,
      "Subdomain can only contain lowercase letters, numbers, and hyphens."
    ),
  currency: Yup.object()
    .shape({
      code: Yup.string().required(),
      symbol: Yup.string().required(),
      name: Yup.string().required(),
    })
    .required("Please select a currency")
    .nullable(),
  timezone: Yup.string().required("Please select a timezone"),
  first_name: Yup.string()
    .trim()
    .strict(true)
    .required("Please enter your first name.")
    .min(2, "Too short")
    .max(100, "Too long"),

  last_name: Yup.string()
    .trim()
    .strict(true)
    .required("Please enter your last name.")
    .min(2, "Too short")
    .max(100, "Too long"),

  phone: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-e164", "Enter a valid phone number", function (value) {
      if (!value) return true;
      return /^\+\d{8,15}$/.test(value);
    }),

  email: Yup.string()
    .trim()
    .strict(true)
    .email("Invalid email address")
    .required("Please enter your email."),

  password: Yup.string()
    .trim()
    .strict(true)
    .min(6, "Password must be at least 6 characters")
    .required("Please enter your password."),

  files: Yup.array()
    .test("fileRequired", "File is required", (files, context) => {
      if (context.parent.id && context.parent.file_url) {
        return true;
      }
      return files && files.length > 0;
    })
    .test(
      "fileSize",
      "File is too large",
      (files) => !files.length || files[0].size <= 50 * 1024 * 1024
    ),
});

export default function CompanyCreate() {
  const router = useRouter();
  const [fileError, setFileError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (
    values,
    { setSubmitting, setFieldError, resetForm }
  ) => {
    const trimmedSubdomain = values.subdomain.trim().toLowerCase();
    try {
      const formData = new FormData();
      formData.append("company_name", values.company_name.trim());
      formData.append("sub_domain", trimmedSubdomain);
      formData.append("currency_code", values.currency?.code);
      formData.append("currency_symbol", values.currency?.symbol);
      formData.append("timezone", values.timezone);
      formData.append("email", values.email.trim());
      formData.append("password", values.password);
      formData.append("first_name", values.first_name.trim());
      formData.append("last_name", values.last_name.trim());
      if (values.phone) formData.append("phone", values.phone);

      if (values.files && values.files.length > 0) {
        formData.append("company_logo", values.files[0]);
      }

      const res = await fetch("/api/superadmin/company", {
        ///api/superadmin/company
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      // console.log("Response backend :", data);

      if (!res.ok) {
        toast.error(data.message || "Failed to create company.");
      } else {
        toast.success(data.message || "Comapny create successfully.");
        resetForm();

        router.push("/super-admin/company");
      }
    } catch (error) {
      // console.error(error);
      // console.log("subdomain", error.message);
      setFieldError("subdomain", error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Create Company
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
      <div className="w-full px-6 sm:px-6 py-6 max-w-2xl mb-8">
        <Formik
          initialValues={{
            company_name: "",
            subdomain: "",
            currency: null,
            timezone: "",
            first_name: "",
            last_name: "",
            phone: "",
            email: "",
            password: "",
            files: [],
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
            resetForm,
          }) => (
            <Form className="space-y-4">
              {/* Section: Company Details */}
              <h2 className="text-md font-semibold text-gray-700 mb-4  pb-1">
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
              {/* Sundomain */}
              <div>
                <Label htmlFor="subdomain" className="mb-2">
                  Subdomain<span className="text-rose-500">*</span>
                </Label>
                <div className="flex items-center">
                  <div className="relative flex-1">
                    <Field name="subdomain">
                      {({ field, form }) => (
                        <Input
                          {...field}
                          id="subdomain"
                          placeholder="your-subdomain"
                          className="w-full rounded-r-none focus:z-10 lowercase"
                          value={field.value}
                          onChange={(e) =>
                            form.setFieldValue(
                              "subdomain",
                              e.target.value.toLowerCase()
                            )
                          }
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
              {/* Currency Symbol */}
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
              {/* Section: Company Details */}
              <h2 className="text-md font-semibold text-gray-700 mb-4  pb-1">
                Contact Details
              </h2>
              {/* First Name */}
              <div>
                <Label htmlFor="first_name" className="mb-2">
                  First Name<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="first_name"
                  name="first_name"
                  placeholder="Enter First Name"
                />
                <ErrorMessage
                  name="first_name"
                  component="p"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
              {/* Last Name */}
              <div>
                <Label htmlFor="last_name" className="mb-2">
                  Last Name<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="last_name"
                  name="last_name"
                  placeholder="Enter Last Name"
                />
                <ErrorMessage
                  name="last_name"
                  component="p"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
              {/* Phone  */}
              <div>
                <Label htmlFor="phone" className="mb-2">
                  Phone
                </Label>
                <Field name="phone">
                  {({ field, form }) => (
                    <>
                      <PhoneInput
                        country={"us"}
                        enableSearch
                        value={field.value}
                        onChange={(value, country) => {
                          if (!value) return form.setFieldValue("phone", "");
                          const dialCode = country?.dialCode || "";
                          let formatted = value;
                          if (!value.startsWith("+")) {
                            const numberOnly = value.replace(
                              new RegExp(`^${dialCode}`),
                              ""
                            );
                            formatted = `+${dialCode}${numberOnly}`;
                          }
                          form.setFieldValue("phone", formatted);
                        }}
                        inputProps={{
                          name: "phone",
                          id: "phone",
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
                        name="phone"
                        component="p"
                        className="text-xs text-red-500 mt-1"
                      />
                    </>
                  )}
                </Field>
              </div>
              {/* Email */}
              <div>
                <Label htmlFor="email" className="mb-2">
                  Email<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className="w-full"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="text-xs text-red-600 mt-1"
                />
              </div>
              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-2">
                  Password<span className="text-rose-500">*</span>
                </Label>
                <div className="relative">
                  <Field
                    as={Input}
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter a password"
                    className="w-full pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-1/2 right-2 -translate-y-1/2 text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="text-xs text-red-600 mt-1"
                />
              </div>
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
              {/* Button */}
              <div className="flex items-center gap-4 mt-4">
                <Button
                  type="submit"
                  className="w-32 cursor-pointer bg-slate-800 hover:bg-slate-700"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <Loader className="w-4 h-4 animate-spin" />
                      Creating...
                    </div>
                  ) : (
                    "Create"
                  )}
                </Button>

                <Button
                  type="button"
                  variant="outline"
                  className="w-32 cursor-pointer"
                  onClick={() => {
                    resetForm();
                    setFileError("");
                  }}
                >
                  Cancel
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
