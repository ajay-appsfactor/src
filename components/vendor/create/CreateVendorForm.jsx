"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";
import { ArrowLeft, Loader, Save, EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "react-toastify";
import Link from "next/link";

const CreateVendorForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const validationSchema = Yup.object({
    first_name: Yup.string()
      .trim()
      .min(2)
      .max(100)
      .required("First name is required"),
    last_name: Yup.string()
      .trim()
      .min(2)
      .max(100)
      .required("Last name is required"),
    vendor_type: Yup.string().trim().required("Vendor type is required"),
    email: Yup.string()
      .trim()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email")
      .required("Email is required"),
    phone: Yup.string()
      .nullable()
      .notRequired()
      .test("is-valid-e164", "Enter a valid phone number", (value) =>
        value ? /^\+\d{8,15}$/.test(value) : true
      ),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    website: Yup.string()
      .trim()
      .matches(
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/,
        "Enter a valid website URL"
      )
      .nullable()
      .notRequired(),
  });

  const initialValues = {
    first_name: "",
    last_name: "",
    vendor_type: "",
    email: "",
    phone: "",
    website: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch("/api/vendor/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to add vendor.");
      } else {
        toast.success(data.message || "Vendor Saved.");
        resetForm();
        router.push(`/vendor/${data.vendor_id}`);
      }
    } catch (error) {
      // console.error(error);
      toast.error("Failed to save vendor");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex items-center justify-start gap-4">
          <h2 className="text-md font-semibold text-slate-800">
            Add Vendor Information
          </h2>
          <Button variant="outline" asChild>
            <Link href="/vendors" className="flex items-center text-sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Link>
          </Button>
        </div>
      </div>
      <hr />

      <div className="px-6 py-4 max-w-2xl w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* LOGIN CREDENTIALS SECTION */}
              <div className="sm:col-span-2">
                <h3 className="text-md font-semibold text-slate-700">
                  Login Credentials
                </h3>
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
                  placeholder="email@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Password */}
              <div>
                <Label htmlFor="password" className="mb-2">
                  Password<span className="text-rose-500">*</span>
                </Label>
                <div className="relative">
                  <Field
                    name="password"
                    as={Input}
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                  >
                    {showPassword ? (
                      <EyeOffIcon className="w-4 h-4" />
                    ) : (
                      <EyeIcon className="w-4 h-4" />
                    )}
                  </button>
                </div>
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* VENDOR DETAILS SECTION */}
              <div className="sm:col-span-2">
                <h3 className="text-md font-semibold text-slate-700">
                  Vendor Details
                </h3>
              </div>

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
                  component="div"
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
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Phone */}
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
                        inputProps={{ name: "phone", id: "phone", autoFocus: false }}
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
                        component="div"
                        className="text-xs text-red-500 mt-1"
                      />
                    </>
                  )}
                </Field>
              </div>

              {/* Website */}
              <div>
                <Label htmlFor="website" className="mb-2">
                  Website
                </Label>
                <Field as={Input} id="website" name="website" placeholder="https://example.com" />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Vendor Type */}
              <div>
                <Label htmlFor="vendor_type" className="mb-2">
                  Type<span className="text-rose-500">*</span>
                </Label>
                <Field name="vendor_type">
                  {({ field, form }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) => form.setFieldValue(field.name, value)}
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select vendor type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Raw Material Supplier">Raw Material Supplier</SelectItem>
                        <SelectItem value="Subcontractor">Subcontractor</SelectItem>
                        <SelectItem value="OEM">OEM</SelectItem>
                        <SelectItem value="Logistics">Logistics</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  name="vendor_type"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Submit */}
              <div className="sm:col-span-2 text-right">
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

export default CreateVendorForm;
