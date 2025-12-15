"use client";

import { useState, useEffect, useRef, useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { toast } from "react-toastify";
import * as Yup from "yup";
import {
  Loader,
  ChevronDown,
  Save,
  EyeOffIcon,
  EyeIcon,
  User,
  Lock,
} from "lucide-react";

// UI Components
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
} from "@/components/ui/command";

// Schemas & Constants
import addressCustomerSchema from "@/validations/my-account/addressCustomerSchema";
// import addressCustomerSchema from "@/validations/addressCustomerSchema";
import { countries } from "@/constants/countries";
import { useUser } from "@/context/UserContext";

// Password Schema
const passwordSchema = Yup.object({
  oldPassword: Yup.string().required("Current password is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password")], "Passwords must match")
    .required("Confirm password is required"),
});

// Custom Field Components
const FormField = ({
  label,
  name,
  required = false,
  children,
  errorClassName = "text-red-500 text-xs mt-1",
}) => (
  <div className="space-y-2">
    <Label htmlFor={name} className="text-sm font-medium">
      {label} {required && <span className="text-rose-500">*</span>}
    </Label>
    {children}
    <ErrorMessage name={name} component="div" className={errorClassName} />
  </div>
);

const PasswordField = ({
  name,
  label,
  showPassword,
  onToggle,
  required = true,
}) => (
  <FormField label={label} name={name} required={required}>
    <div className="relative">
      <Field
        name={name}
        as={Input}
        type={showPassword ? "text" : "password"}
        className="pr-10"
      />
      <button
        type="button"
        onClick={onToggle}
        className="absolute inset-y-0 right-0 px-3 flex items-center cursor-pointer hover:bg-gray-100 rounded-r-md"
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        {showPassword ? (
          <EyeOffIcon className="w-4 h-4 text-gray-500" />
        ) : (
          <EyeIcon className="w-4 h-4 text-gray-500" />
        )}
      </button>
    </div>
  </FormField>
);

const CountrySelect = ({
  name,
  label,
  open,
  onOpenChange,
  value,
  onChange,
  disabled = false,
  required = false,
}) => (
  <FormField label={label} name={name} required>
    <Popover open={open} onOpenChange={onOpenChange}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-between"
          disabled={disabled}
          aria-label={`Select ${label.toLowerCase()}`}
        >
          <span className="truncate">
            {value
              ? countries.find((c) => c.value === value)?.label
              : "Select Country"}
          </span>
          <ChevronDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0" align="start">
        <Command>
          <CommandInput placeholder="Search country..." />
          <CommandEmpty>No country found.</CommandEmpty>
          <CommandGroup className="max-h-60 overflow-y-auto">
            {countries.map((country) => (
              <CommandItem
                key={country.value}
                value={country.value}
                onSelect={() => {
                  onChange(country.value);
                  onOpenChange(false);
                }}
              >
                {country.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  </FormField>
);

const MyAccount = ({ userId }) => {
  const { user, setUser } = useUser();
  const router = useRouter();
  const formikRef = useRef();
  //   const id = user?.id;
  //   console.log("Set User id is :", id)
  const customerId = userId;

  // State
  const [loading, setLoading] = useState(true);
  const [customerData, setCustomerData] = useState(null);
  const [passwordVisibility, setPasswordVisibility] = useState({
    old: false,
    new: false,
    confirm: false,
  });
  const [countryOpen, setCountryOpen] = useState({
    billing: false,
    shipping: false,
  });

  // Fetch customer data
  const fetchCustomerData = useCallback(async () => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/customer/edit/${customerId}/my-account`);

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const data = await res.json();
      setCustomerData(data.customer || {});
    } catch (error) {
      console.error("Error fetching customer data:", error);
      toast.error("Failed to load account information.");
    } finally {
      setLoading(false);
    }
  }, [customerId]);

  useEffect(() => {
    fetchCustomerData();
  }, [fetchCustomerData]);

  // Reset form on unmount
  useEffect(() => {
    return () => {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
    };
  }, []);

  // Default form values
  const defaultValues = useMemo(() => {
    const address = customerData?.addresses?.[0] || {};

    return {
      // Personal Info
      first_name: customerData?.first_name || "",
      last_name: customerData?.last_name || "",
      billing_email: customerData?.email || "",
      billing_company: customerData?.company_name || "",
      phone: customerData?.phone || "",

      // Billing Address
      billing_address: address.billing_address || "",
      billing_address2: address.billing_address2 || "",
      billing_city: address.billing_city || "",
      billing_state: address.billing_state || "",
      billing_zip: address.billing_zip || "",
      billing_country: address.billing_country || "",

      // Shipping Address
      shipping_address: address.shipping_address || "",
      shipping_address2: address.shipping_address2 || "",
      shipping_city: address.shipping_city || "",
      shipping_state: address.shipping_state || "",
      shipping_zip: address.shipping_zip || "",
      shipping_country: address.shipping_country || "",
      address_id: address.id || null,
      copy_billing: false,
      is_default: address.is_default || false,
    };
  }, [customerData]);

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const payload = {
        customer: {
          first_name: values.first_name,
          last_name: values.last_name,
          email: values.billing_email,
          company_name: values.billing_company,
          phone: values.phone,
        },
        address: {
          id: values.address_id,
          billing_address: values.billing_address,
          billing_address2: values.billing_address2,
          billing_city: values.billing_city,
          billing_state: values.billing_state,
          billing_zip: values.billing_zip,
          billing_country: values.billing_country,
          shipping_address: values.shipping_address,
          shipping_address2: values.shipping_address2,
          shipping_city: values.shipping_city,
          shipping_state: values.shipping_state,
          shipping_zip: values.shipping_zip,
          shipping_country: values.shipping_country,
        },
      };

      const res = await fetch(`/api/customer/edit/${customerId}/my-account`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      // console.log("Update Data :", data)

      if (!res.ok) {
        throw new Error(data.error || "Update failed");
      }

      toast.success("Account updated successfully.");
      setUser((prev) => ({
        ...prev,
        first_name: data.customer.first_name,
        last_name: data.customer.last_name,
        email: data.customer.email,
        phone: data.customer.phone,
      }));
      await fetchCustomerData();
      router.refresh();
    } catch (error) {
      toast.error(error.message || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle password update
  const handlePasswordSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch(`/api/company/users/${customerId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Password update failed");

      toast.success("Password updated successfully");
      resetForm();
      setPasswordVisibility({ old: false, new: false, confirm: false });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setSubmitting(false);
    }
  };

  // Toggle password visibility
  const togglePasswordVisibility = (field) => {
    setPasswordVisibility((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  // Handle country select
  const handleCountrySelect = (field, value, setFieldValue, values) => {
    setFieldValue(field, value);
    if (values.copy_billing && field.startsWith("billing_")) {
      const shippingField = field.replace("billing_", "shipping_");
      setFieldValue(shippingField, value);
    }
  };

  // Handle copy billing toggle
  const handleCopyBillingToggle = (checked, setFieldValue, values) => {
    setFieldValue("copy_billing", checked);
    if (checked) {
      // Copy billing to shipping
      setFieldValue("shipping_address", values.billing_address);
      setFieldValue("shipping_address2", values.billing_address2);
      setFieldValue("shipping_city", values.billing_city);
      setFieldValue("shipping_state", values.billing_state);
      setFieldValue("shipping_zip", values.billing_zip);
      setFieldValue("shipping_country", values.billing_country);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Loader className="w-8 h-8 animate-spin text-gray-400" />
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <User className="w-5 h-5 text-gray-600" />
          <h1 className="text-lg font-semibold text-gray-900">My Account</h1>
        </div>
      </div>

      <div className="p-6 space-y-8">
        {/* Account Information Form */}
        <div>
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={defaultValues}
            validationSchema={addressCustomerSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                {/* Billing Address Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold  text-gray-900">
                      Billing Address
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="First Name" name="first_name" required>
                      <Field as={Input} name="first_name" />
                    </FormField>

                    <FormField label="Last Name" name="last_name" required>
                      <Field as={Input} name="last_name" />
                    </FormField>
                  </div>

                  <FormField label="Email" name="billing_email" required>
                    <Field as={Input} type="email" name="billing_email" />
                  </FormField>

                  <FormField
                    label="Street Address"
                    name="billing_address"
                    required
                  >
                    <Field as={Input} name="billing_address" />
                  </FormField>

                  <FormField label="Street Address 2" name="billing_address2">
                    <Field as={Input} name="billing_address2" />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="Company" name="billing_company" required>
                      <Field as={Input} name="billing_company" />
                    </FormField>
                    <FormField label="Phone" name="phone">
                      <Field name="phone">
                        {({ field, form }) => (
                          <PhoneInput
                            country={"us"}
                            enableSearch
                            value={field.value}
                            onChange={(value, country) => {
                              const dialCode = country?.dialCode || "";
                              let formatted = value;
                              if (value && !value.startsWith("+")) {
                                formatted = `+${dialCode}${value.replace(
                                  new RegExp(`^${dialCode}`),
                                  ""
                                )}`;
                              }
                              form.setFieldValue("phone", formatted || "");
                            }}
                            inputProps={{
                              name: "phone",
                              id: "phone",
                              autoFocus: false,
                            }}
                            containerStyle={{ width: "100%" }}
                            inputStyle={{
                              width: "100%",
                              height: "40px",
                              fontSize: "14px",
                              borderRadius: "6px",
                              border: "1px solid #e5e7eb",
                              paddingLeft: "48px",
                            }}
                            buttonStyle={{
                              border: "none",
                              borderTopLeftRadius: "6px",
                              borderBottomLeftRadius: "6px",
                            }}
                          />
                        )}
                      </Field>
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="City" name="billing_city" required>
                      <Field as={Input} name="billing_city" />
                    </FormField>

                    <FormField label="State" name="billing_state" required>
                      <Field as={Input} name="billing_state" />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Postal/Zip Code"
                      name="billing_zip"
                      required
                    >
                      <Field as={Input} name="billing_zip" />
                    </FormField>

                    <CountrySelect
                      name="billing_country"
                      label="Country"
                      open={countryOpen.billing}
                      onOpenChange={(open) =>
                        setCountryOpen((prev) => ({ ...prev, billing: open }))
                      }
                      value={values.billing_country}
                      onChange={(value) =>
                        handleCountrySelect(
                          "billing_country",
                          value,
                          setFieldValue,
                          values
                        )
                      }
                    />
                  </div>
                </div>

                {/* Shipping Address Section */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold  text-gray-900">
                      Shipping Address
                    </h3>
                    <Label className="flex items-center gap-2 text-sm font-normal">
                      <Checkbox
                        className="me-2"
                        checked={values.copy_billing}
                        onCheckedChange={(checked) =>
                          handleCopyBillingToggle(
                            checked,
                            setFieldValue,
                            values
                          )
                        }
                      />
                      Same as Billing Address
                    </Label>
                  </div>

                  <FormField
                    label="Street Address"
                    name="shipping_address"
                    required
                  >
                    <Field
                      as={Input}
                      name="shipping_address"
                      disabled={values.copy_billing}
                    />
                  </FormField>

                  <FormField label="Street Address 2" name="shipping_address2">
                    <Field
                      as={Input}
                      name="shipping_address2"
                      disabled={values.copy_billing}
                    />
                  </FormField>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField label="City" name="shipping_city" required>
                      <Field
                        as={Input}
                        name="shipping_city"
                        disabled={values.copy_billing}
                      />
                    </FormField>

                    <FormField label="State" name="shipping_state" required>
                      <Field
                        as={Input}
                        name="shipping_state"
                        disabled={values.copy_billing}
                      />
                    </FormField>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <FormField
                      label="Postal/Zip Code"
                      name="shipping_zip"
                      required
                    >
                      <Field
                        as={Input}
                        name="shipping_zip"
                        disabled={values.copy_billing}
                      />
                    </FormField>

                    <CountrySelect
                      name="shipping_country"
                      label="Country"
                      open={countryOpen.shipping}
                      onOpenChange={(open) =>
                        setCountryOpen((prev) => ({ ...prev, shipping: open }))
                      }
                      value={values.shipping_country}
                      onChange={(value) =>
                        setFieldValue("shipping_country", value)
                      }
                      disabled={values.copy_billing}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="col-span-1 lg:col-span-2 flex justify-center gap-4 mt-4 order-last">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto cursor-pointer bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Update Address
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>

        {/* Password Update Section */}
        <div className="border-t border-gray-200 pt-8">
          <div className="mb-6">
            <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
              <Lock className="w-5 h-5" />
              Change Password
            </h2>
          </div>

          <Formik
            initialValues={{
              oldPassword: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={passwordSchema}
            onSubmit={handlePasswordSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="max-w-2xl space-y-4">
                <PasswordField
                  name="oldPassword"
                  label="Current Password"
                  showPassword={passwordVisibility.old}
                  onToggle={() => togglePasswordVisibility("old")}
                />

                <PasswordField
                  name="password"
                  label="New Password"
                  showPassword={passwordVisibility.new}
                  onToggle={() => togglePasswordVisibility("new")}
                />

                <PasswordField
                  name="confirmPassword"
                  label="Confirm New Password"
                  showPassword={passwordVisibility.confirm}
                  onToggle={() => togglePasswordVisibility("confirm")}
                />

                <div className="pt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto cursor-pointer bg-gray-900 hover:bg-gray-800 text-white"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 mr-2 animate-spin" />
                        Updating...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4 mr-2" />
                        Change Password
                      </>
                    )}
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
