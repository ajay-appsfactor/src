"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import createCustomerSchema from "@/validations/customer/createCustomerSchema";
import { ArrowLeft, Loader, Save, EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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

const CreateCustomerForm = () => {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const validationSchema = createCustomerSchema;

  const initialValues = {
    first_name: "",
    last_name: "",
    company_name: "",
    email: "",
    phone: "",
    type: "",
    website: "",
    notes: "",
    password: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const body = { ...values };

      const res = await fetch("/api/customer/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to add customer.");
      } else {
        toast.success(data.message || "Customer saved successfully!");
        resetForm();
        router.push(`/customer/${data.customer_id}/edit`);
      }
    } catch (error) {
      toast.error("Failed to add customer.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      {/* Header */}
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl">
        <div className="flex flex-wrap items-center justify-start gap-4">
          <h2 className="text-md font-semibold text-slate-800">
            Add Customer Information
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

      <div className="w-full px-6 sm:px-6 py-4 max-w-2xl">
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
                    aria-label={
                      showPassword ? "Hide password" : "Show password"
                    }
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

              {/* CUSTOMER DETAILS SECTION */}
              <div className="sm:col-span-2">
                <h3 className="text-md font-semibold text-slate-700">
                  Customer Details
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

              {/* Company Name */}
              <div>
                <Label htmlFor="company_name" className="mb-2">
                  Company Name<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="company_name"
                  name="company_name"
                  placeholder="Company Name"
                />
                <ErrorMessage
                  name="company_name"
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
                <Field
                  as={Input}
                  id="website"
                  name="website"
                  placeholder="https://example.com"
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Type */}
              <div>
                <Label htmlFor="type" className="mb-2">
                  Type<span className="text-rose-500">*</span>
                </Label>
                <Field name="type">
                  {({ field, form }) => (
                    <Select
                      value={field.value}
                      onValueChange={(value) =>
                        form.setFieldValue(field.name, value)
                      }
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select customer type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="individual">Individual</SelectItem>
                        <SelectItem value="company">Company</SelectItem>
                        <SelectItem value="reseller">Reseller</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                </Field>
                <ErrorMessage
                  name="type"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Notes */}
              <div className="sm:col-span-2">
                <Label htmlFor="notes" className="mb-2">
                  Notes
                </Label>
                <Field
                  as={Textarea}
                  id="notes"
                  name="notes"
                  placeholder="Additional notes"
                  className="min-h-[100px]"
                />
                <ErrorMessage
                  name="notes"
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

export default CreateCustomerForm;
