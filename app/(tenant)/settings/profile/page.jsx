"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save, EyeOffIcon, EyeIcon } from "lucide-react";
import { toast } from "react-toastify";
import { useUser } from "@/context/UserContext";

const UserProfilePage = () => {
  const { user, setUser } = useUser();

  const [showOldPassword, setShowOldPassword] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const id = user?.id;

  if (!user) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  return (
    <>
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl flex justify-between items-center">
        <h2 className="text-lg font-semibold text-slate-800">Profile</h2>
      </div>
      <hr />
      <div className="w-full px-6 py-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          {/*  Manage Details Form  */}
          <Formik
            initialValues={{
              first_name: user.first_name || "",
              last_name: user.last_name || "",
              email: user.email || "",
              phone: user.phone || "",
            }}
            enableReinitialize
            validationSchema={Yup.object({
              first_name: Yup.string()
                .trim()
                .required("First name is required")
                .min(2, "First name must be at least 2 characters")
                .max(100, "First name cannot exceed 100 characters"),
              last_name: Yup.string()
                .nullable()
                .notRequired()
                .min(2, "First name must be at least 2 characters")
                .max(100, "First name cannot exceed 100 characters"),
              email: Yup.string()
                .email("Invalid email")
                .required("Email is required"),
              phone: Yup.string().nullable(),
            })}
            onSubmit={async (values, { setSubmitting }) => {
              try {
                const res = await fetch(`/api/company/users/${id}`, {
                  method: "PUT",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify({
                    first_name: values.first_name,
                    last_name: values.last_name,
                    email: values.email,
                    phone: values.phone || null,
                    roles: user.roles,
                  }),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Update failed");
                setUser((prev) => ({
                  ...prev,
                  first_name: data.user.first_name,
                  last_name: data.user.last_name,
                  email: data.user.email,
                  phone: data.user.phone,
                  roles: data.user.roles,
                }));
                toast.success("Profile updated successfully.");
              } catch (err) {
                toast.error(err.message);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <h3 className="text-base font-semibold text-slate-700 mb-4">
                  Manage Details
                </h3>

                {/* First Name */}
                <div>
                  <Label htmlFor="first_name" className="mb-2">
                    First Name<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="first_name" as={Input} />
                  <ErrorMessage
                    name="first_name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="last_name" className="mb-2">
                    Last Name
                  </Label>
                  <Field name="last_name" as={Input} />
                  <ErrorMessage
                    name="last_name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="email" as={Input} type="email" />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-xs mt-1"
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
                          country="us"
                          enableSearch
                          value={field.value}
                          onChange={(value) =>
                            form.setFieldValue("phone", value)
                          }
                          inputProps={{ name: "phone", id: "phone" }}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{
                            width: "100%",
                            height: "36px",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            border: "1px solid #e5e7eb",
                            paddingLeft: "48px",
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

                {/* Save Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Save
                    </>
                  )}
                </Button>
              </Form>
            )}
          </Formik>

          {/*  Manage Password Form  */}
          <Formik
            initialValues={{
              oldPassword: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={Yup.object({
              oldPassword: Yup.string().required("Current password is required"),
              password: Yup.string()
                .min(6, "Min 6 characters")
                .required("Password required"),
              confirmPassword: Yup.string()
                .oneOf([Yup.ref("password")], "Passwords must match")
                .required("Confirm password is required"),
            })}
            onSubmit={async (values, { setSubmitting, resetForm }) => {
              try {
                const res = await fetch(`/api/company/users/${id}`, {
                  method: "PATCH",
                  headers: { "Content-Type": "application/json" },
                  body: JSON.stringify(values),
                });
                const data = await res.json();
                if (!res.ok) throw new Error(data.error || "Update failed");
                toast.success(data.message || "Password updated successfully.");
                resetForm();
              } catch (err) {
                toast.error(err.message);
              } finally {
                setSubmitting(false);
              }
            }}
          >
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <h3 className="text-base font-semibold text-slate-700 mb-4">
                  Manage Password
                </h3>

                {/* Old Password */}
                <div>
                  <Label htmlFor="oldPassword" className="mb-2">
                    Current Password<span className="text-rose-500">*</span>
                  </Label>
                  <div className="relative">
                    <Field
                      name="oldPassword"
                      as={Input}
                      type={showOldPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowOldPassword((p) => !p)}
                      className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                    >
                      {showOldPassword ? (
                        <EyeOffIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="oldPassword"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* New Password */}
                <div>
                  <Label htmlFor="password" className="mb-2">
                    New Password<span className="text-rose-500">*</span>
                  </Label>
                  <div className="relative">
                    <Field
                      name="password"
                      as={Input}
                      type={showPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((p) => !p)}
                      className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                    >
                      {showPassword ? (
                        <EyeOffIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword" className="mb-2">
                    Confirm Password<span className="text-rose-500">*</span>
                  </Label>
                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      as={Input}
                      type={showConfirmPassword ? "text" : "password"}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword((p) => !p)}
                      className="absolute inset-y-0 right-2 flex items-center cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon className="w-4 h-4 text-gray-500" />
                      ) : (
                        <EyeIcon className="w-4 h-4 text-gray-500" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Save Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <>
                      <Loader className="w-4 h-4 animate-spin" /> Saving...
                    </>
                  ) : (
                    <>
                      <Save className="w-4 h-4" /> Save
                    </>
                  )}
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default UserProfilePage;
