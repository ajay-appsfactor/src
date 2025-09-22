"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Checkbox } from "@/components/ui/checkbox";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Loader, Save, ArrowLeft, EyeOffIcon, EyeIcon } from "lucide-react";
import { toast } from "react-toastify";
import { useRouter, useParams } from "next/navigation";
import { roleOptions } from "@/constants/role";

const EditUser = () => {
  const router = useRouter();
  const params = useParams();
  const companyId = params?.id;
  const userId = params?.user_id;
  const [userData, setUserData] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Fetch user data
  useEffect(() => {
    if (!companyId || !userId) return;

    const fetchUser = async () => {
      try {
        const res = await fetch(`/api/superadmin/users/${companyId}/${userId}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.error || "Failed to fetch user");

        // Map roles from labels to keys
        const roleKeys = data.roles.map((label) => {
          const role = roleOptions.find((r) => r.label === label);
          return role ? role.name : label;
        });

        setUserData({ ...data, roles: roleKeys });
      } catch (error) {
        toast.error(error.message || "Failed to fetch user data");
      } finally {
        setLoadingUser(false);
      }
    };

    fetchUser();
  }, [companyId, userId]);

  const validationSchema = Yup.object({
    firstName: Yup.string().trim().required("First name is required"),
    lastName: Yup.string().trim().nullable(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .nullable()
      .test("is-valid-e164", "Enter a valid phone number", function (value) {
        if (!value) return true;
        return /^\+\d{8,15}$/.test(value);
      }),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .nullable(),
    confirmPassword: Yup.string()
      .nullable()
      .test("passwords-match", "Passwords must match", function (value) {
        const { password } = this.parent;
        if (password && value !== password) return false;
        return true;
      })
      .when("password", (password, schema) =>
        password ? schema.nullable() : schema
      ),
    roles: Yup.array()
      .of(Yup.string())
      .min(1, "At least one role must be selected"),
  });

  if (loadingUser) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  const initialValues = {
    firstName: userData?.first_name || "",
    lastName: userData?.last_name || "",
    email: userData?.email || "",
    password: "",
    confirmPassword: "",
    phone: userData?.phone || "",
    roles: userData?.roles || [],
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await fetch(
        `/api/superadmin/users/${companyId}/${userId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            first_name: values.firstName,
            last_name: values.lastName,
            email: values.email,
            password: values.password || undefined,
            phone: values.phone || null,
            roles: values.roles,
          }),
        }
      );

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to update user");

      toast.success(data.message || "User updated successfully.");
      router.push(`/super-admin/company/${companyId}/users`);
    } catch (error) {
      toast.error(error.message || "Failed to update user.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded">
      <div className="py-2 px-6 sm:px-4 w-full max-w-7xl flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-semibold text-slate-800">Edit User</h2>
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

      <div className="w-full px-6 py-4 max-w-2xl">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="space-y-6">
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <Label htmlFor="firstName" className="mb-2">
                    First Name<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="firstName" as={Input} />
                  <ErrorMessage
                    name="firstName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Last Name */}
                <div>
                  <Label htmlFor="lastName" className="mb-2">
                    Last Name
                  </Label>
                  <Field name="lastName" as={Input} />
                  <ErrorMessage
                    name="lastName"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>

                {/* Email */}
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="email" as={Input} type="text" />
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

                {/* Password */}
                <div>
                  <Label htmlFor="password" className="mb-2">
                    Password
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

                {/* Confirm Password */}
                <div>
                  <Label htmlFor="confirmPassword" className="mb-2">
                    Confirm Password
                  </Label>
                  <div className="relative">
                    <Field
                      name="confirmPassword"
                      as={Input}
                      type={showConfirmPassword ? "text" : "password"}
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
                    >
                      {showConfirmPassword ? (
                        <EyeOffIcon className="w-4 h-4" />
                      ) : (
                        <EyeIcon className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                  <ErrorMessage
                    name="confirmPassword"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />
                </div>
              </div>

              {/* Roles */}
              <div className="grid sm:grid-cols-1 gap-2">
                <Label htmlFor="usertype" className="mb-2">
                  User Types<span className="text-rose-500">*</span>
                </Label>
                {roleOptions.map((role) => (
                  <div key={role.name} className="flex items-center mt-2 gap-4">
                    <Checkbox
                      id={role.name}
                      checked={values.roles.includes(role.name)}
                      onCheckedChange={(checked) => {
                        if (checked)
                          setFieldValue("roles", [...values.roles, role.name]);
                        else
                          setFieldValue(
                            "roles",
                            values.roles.filter((r) => r !== role.name)
                          );
                      }}
                    />
                    <Label htmlFor={role.name}>{role.label}</Label>
                  </div>
                ))}
                <ErrorMessage
                  name="roles"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
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

export default EditUser;
