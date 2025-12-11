"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
import { ChevronDown, Save, Loader } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { countries } from "@/constants/countries";
import { toast } from "react-toastify";

const EditDetailsModal = ({ open, type, data, onClose, onSave }) => {
  const [countryOpen, setCountryOpen] = useState(false);

  if (!open || !data) return null;

  const modalTitle =
    type === "billing"
      ? "Billing Details"
      : type === "delivery"
      ? "Shipping Details"
      : "Edit Details";

  // Yup validation schema based on type
  const validationSchema =
    type === "billing"
      ? Yup.object({
          billing_name: Yup.string()
            .required("Billing name is required")
            .min(3)
            .max(50),
          customer_email: Yup.string().email("Invalid email").required(),
          billing_phone: Yup.string()
            .nullable()
            .test("is-valid-e164", "Enter a valid phone number", (v) =>
              !v ? true : /^\+\d{8,15}$/.test(v)
            ),
          billing_address: Yup.string().required().max(255),
          billing_city: Yup.string().max(100),
          billing_state: Yup.string().max(100),
          billing_zip: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9\s\-]{3,10}$/),
          billing_country: Yup.string().required(),
        })
      : Yup.object({
          shipping_address: Yup.string().required().max(255),
          shipping_city: Yup.string().max(100),
          shipping_state: Yup.string().max(100),
          shipping_zip: Yup.string()
            .required()
            .matches(/^[a-zA-Z0-9\s\-]{3,10}$/),
          shipping_country: Yup.string().required(),
        });

  // Formik initial values based on type
  const initialValues =
    type === "billing"
      ? {
          billing_name: data.billing_name || "",
          customer_email: data.customer_email || "",
          billing_phone: data.billing_phone || "",
          billing_address: data.billing_address || "",
          billing_city: data.billing_city || "",
          billing_state: data.billing_state || "",
          billing_zip: data.billing_zip || "",
          billing_country: data.billing_country || "",
          quoteId: data.quoteId,
        }
      : {
          shipping_address: data.shipping_address || "",
          shipping_city: data.shipping_city || "",
          shipping_state: data.shipping_state || "",
          shipping_zip: data.shipping_zip || "",
          shipping_country: data.shipping_country || "",
          quoteId: data.quoteId,
        };

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await fetch(
        `/api/company/quotes/${data.quoteId}/order-update`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
      const result = await res.json();
      if (!res.ok) {
        toast.error(result.error || "Something went wrong!");
        return;
      }
      onSave(type, values);
      toast.success(result.message || "Order detail updated.");
      onClose();
    } catch (err) {
      toast.error("Failed to save!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md p-4">
        <DialogHeader>
          <DialogTitle className="text-lg font-semibold text-slate-800 break-words">
            {modalTitle}
          </DialogTitle>
        </DialogHeader>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize
        >
          {({ setFieldValue, values, isSubmitting }) => (
            <Form className="grid grid-cols-1 gap-6">
              {type === "billing" && (
                <div className="space-y-4">
                  {/* Billing Fields */}
                  <Label className="mb-2 block">
                    Billing Name <span className="text-rose-500">*</span>
                  </Label>
                  <Field name="billing_name" as={Input} className="w-full" />
                  <ErrorMessage
                    name="billing_name"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  {/* Email + Phone */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="mb-2 block">
                        Billing Email <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="customer_email"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="customer_email"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div className="space-y-1">
                      <Label htmlFor="billing_phone">Phone </Label>
                      <Field name="billing_phone">
                        {({ field }) => (
                          <PhoneInput
                            country={"in"}
                            enableSearch
                            value={field.value}
                            onChange={(value, country) => {
                              let formatted = value;
                              const dialCode = country?.dialCode || "";
                              if (!value.startsWith("+")) {
                                const numberOnly = value.replace(
                                  new RegExp(`^${dialCode}`),
                                  ""
                                );
                                formatted = `+${dialCode}${numberOnly}`;
                              }
                              setFieldValue("billing_phone", formatted);
                            }}
                            inputProps={{
                              name: "billing_phone",
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
                        )}
                      </Field>
                      <ErrorMessage
                        name="billing_phone"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                  {/* Address */}
                  <Label className="mb-2 block">
                    Billing Address <span className="text-rose-500">*</span>
                  </Label>
                  <Field name="billing_address" as={Input} className="w-full" />
                  <ErrorMessage
                    name="billing_address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  {/* City + State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="mb-2 block">
                        Billing City <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="billing_city"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="billing_city"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block">
                        Billing State <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="billing_state"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="billing_state"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Zip + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="mb-2 block">
                        Postal / Zip Code{" "}
                        <span className="text-rose-500">*</span>
                      </Label>
                      <Field name="billing_zip" as={Input} className="w-full" />
                      <ErrorMessage
                        name="billing_zip"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">Country *</Label>
                      <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between"
                          >
                            {values.billing_country
                              ? countries.find(
                                  (c) => c.value === values.billing_country
                                )?.label
                              : "Select Country"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 max-h-60 overflow-y-auto">
                          <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countries.map((c) => (
                                <CommandItem
                                  key={c.value}
                                  onSelect={() => {
                                    setFieldValue("billing_country", c.value);
                                    setCountryOpen(false);
                                  }}
                                >
                                  {c.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <ErrorMessage
                        name="billing_country"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              {type === "delivery" && (
                <div className="space-y-4">
                  {/* Shipping Fields */}
                  <Label className="mb-2 block">
                    Address <span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    name="shipping_address"
                    as={Input}
                    className="w-full"
                  />
                  <ErrorMessage
                    name="shipping_address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  {/* City + State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="mb-2 block">
                        Shipping City <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="shipping_city"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="shipping_city"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>

                    <div>
                      <Label className="mb-2 block">
                        Shipping State <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="shipping_state"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="shipping_state"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Zip + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label className="mb-2 block">
                        Postal / Zip Code{" "}
                        <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        name="shipping_zip"
                        as={Input}
                        className="w-full"
                      />
                      <ErrorMessage
                        name="shipping_zip"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <Label className="mb-2 block">
                        Country <span className="text-rose-500">*</span>
                      </Label>
                      <Popover open={countryOpen} onOpenChange={setCountryOpen}>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between"
                          >
                            {values.shipping_country
                              ? countries.find(
                                  (c) => c.value === values.shipping_country
                                )?.label
                              : "Select Country"}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 max-h-60 overflow-y-auto">
                          <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countries.map((c) => (
                                <CommandItem
                                  key={c.value}
                                  onSelect={() => {
                                    setFieldValue("shipping_country", c.value);
                                    setCountryOpen(false);
                                  }}
                                >
                                  {c.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </Command>
                        </PopoverContent>
                      </Popover>
                      <ErrorMessage
                        name="shipping_country"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>
                </div>
              )}

              <DialogFooter className="mt-4">
                <Button variant="outline" className="cursor-pointer" onClick={onClose}>
                  Cancel
                </Button>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer"
                >
                  {isSubmitting ? (
                    <Loader className="w-4 h-4 animate-spin" />
                  ) : (
                    <Save className="w-4 h-4" />
                  )}
                  {isSubmitting ? "Saving..." : "Save Changes"}
                </Button>
              </DialogFooter>
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

// const EditDetailsModal = ({ open, type, data, onClose, onSave }) => {
//   const [billingCountryOpen, setBillingCountryOpen] = useState(false);
//   const [shippingCountryOpen, setShippingCountryOpen] = useState(false);

//   if (!open || !data) return null;

//   const title = "Edit Billing & Shipping Details";

//   // Yup validation schema
//   const validationSchema = Yup.object({
//     billing_name: Yup.string()
//       .required("Billing name is required")
//       .min(3, "Billing name must be at least 3 characters")
//       .max(50, "Billing name cannot exceed 50 characters"),
//     customer_email: Yup.string()
//       .email("Invalid email")
//       .required("Email is required"),
//     billing_phone: Yup.string()
//       .nullable()
//       .notRequired()
//       .test("is-valid-e164", "Enter a valid phone number", function (value) {
//         if (!value) return true;
//         return /^\+\d{8,15}$/.test(value);
//       }),
//     billing_address: Yup.string()
//       .required("Billing address is required")
//       .max(255, "Billing address must be at most 255 characters"),
//     billing_city: Yup.string().max(
//       100,
//       "Billing city must be at most 100 characters"
//     ),
//     billing_state: Yup.string().max(
//       100,
//       "Billing state must be at most 100 characters"
//     ),
//     billing_zip: Yup.string()
//       .required("Zip code is required")
//       .matches(
//         /^[a-zA-Z0-9\s\-]{3,10}$/,
//         "Billing ZIP must be 3–10 alphanumeric characters"
//       ),
//     billing_country: Yup.string().required("Country is required"),
//     // shipping_name: Yup.string().required("Shipping name is required"),
//     // shipping_phone: Yup.string().required("Shipping phone is required"),
//     shipping_address: Yup.string().max(
//       255,
//       "Shipping address must be at most 255 characters"
//     ),
//     shipping_city: Yup.string().max(
//       100,
//       "Shipping city must be at most 100 characters"
//     ),
//     shipping_state: Yup.string().max(
//       100,
//       "Shipping state must be at most 100 characters"
//     ),
//     shipping_zip: Yup.string()
//       .required("Zip code is required")
//       .matches(
//         /^[a-zA-Z0-9\s\-]{3,10}$/,
//         "Shipping ZIP must be 3–10 alphanumeric characters"
//       ),
//     shipping_country: Yup.string().required("Country is required"),
//   });

//   // Handle Submit

//   const handleSubmit = async (values, { setSubmitting }) => {
//     console.log("Order Detail updated:", values);
//     const payload = {
//       ...values,
//     };

//     try {
//       const res = await fetch(
//         `/api/company/quotes/${data.quoteId}/order-update`,
//         {
//           method: "PUT",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(payload),
//         }
//       );
//       console.log("Check resposne :", res);

//       const result = await res.json();

//       if (!res.ok) {
//         toast.error(result.error || "Something went wrong!");
//         return;
//       }

//       onSave(type, values);
//       toast.success(result.message || "Order detail Updates.");
//       onClose();
//     } catch (error) {
//       console.error("Error submitting address:", error);
//       toast.error("Failed address saved!");
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   return (
//     <Dialog open={open} onOpenChange={onClose}>
//       {/* <DialogContent
//         className="
//       w-full
//       max-w-[95vw]
//       sm:max-w-lg
//       md:max-w-xl
//       lg:max-w-2xl
//       xl:max-w-3xl
//       p-4
//     "
//       > */}
//         <DialogContent className="max-w-[95vw] sm:!max-w-screen-xl w-full p-4">
//         {/* <DialogContent className=" md:max-w-md w-full p-4"> */}

//         <DialogHeader>
//           <DialogTitle>{title}</DialogTitle>
//         </DialogHeader>

//         <Formik
//           initialValues={{
//             billing_name: data.billing_name || "",
//             customer_email: data.customer_email || "",
//             billing_phone: data.billing_phone || "",
//             billing_address: data.billing_address || "",
//             billing_city: data.billing_city || "",
//             billing_state: data.billing_state || "",
//             billing_zip: data.billing_zip || "",
//             billing_country: data.billing_country || "",
//             // shipping_name: data.shipping_name || data.billing_name || "",
//             shipping_phone: data.shipping_phone || data.billing_phone || "",
//             shipping_address:
//               data.shipping_address || data.billing_address || "",
//             shipping_city: data.shipping_city || data.billing_city || "",
//             shipping_state: data.shipping_state || data.billing_state || "",
//             shipping_zip: data.shipping_zip || data.billing_zip || "",
//             shipping_country:
//               data.shipping_country || data.billing_country || "",
//             quoteId: data.quoteId,
//           }}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//           enableReinitialize
//         >
//           {({ setFieldValue, values, isSubmitting }) => (
//             <Form className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               {/* Billing Details */}
//               <div className="space-y-4">
//                 <h2 className="font-semibold text-md pb-1 border-b">
//                   Billing Details
//                 </h2>

//                 {/* Billing Name */}
//                 <Label className="mb-2 block">
//                   Billing Name <span className="text-rose-500">*</span>
//                 </Label>
//                 <Field name="billing_name" as={Input} className="w-full" />
//                 <ErrorMessage
//                   name="billing_name"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 />

//                 {/* Email + Phone */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="mb-2 block">
//                       Billing Email <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field
//                       name="customer_email"
//                       as={Input}
//                       className="w-full"
//                     />
//                     <ErrorMessage
//                       name="customer_email"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>

//                   <div className="space-y-1">
//                     <Label htmlFor="billing_phone">Phone </Label>
//                     <Field name="billing_phone">
//                       {({ field }) => (
//                         <PhoneInput
//                           country={"in"}
//                           enableSearch
//                           value={field.value}
//                           onChange={(value, country) => {
//                             let formatted = value;
//                             const dialCode = country?.dialCode || "";
//                             if (!value.startsWith("+")) {
//                               const numberOnly = value.replace(
//                                 new RegExp(`^${dialCode}`),
//                                 ""
//                               );
//                               formatted = `+${dialCode}${numberOnly}`;
//                             }
//                             setFieldValue("billing_phone", formatted);
//                           }}
//                           inputProps={{
//                             name: "billing_phone",
//                           }}
//                           containerStyle={{ width: "100%" }}
//                           inputStyle={{
//                             width: "100%",
//                             height: "36px",
//                             fontSize: "14px",
//                             borderRadius: "0.375rem",
//                             border: "1px solid #e5e7eb",
//                             paddingLeft: "48px",
//                           }}
//                           buttonStyle={{
//                             border: "none",
//                             borderTopLeftRadius: "0.375rem",
//                             borderBottomLeftRadius: "0.375rem",
//                           }}
//                         />
//                       )}
//                     </Field>
//                     <ErrorMessage
//                       name="billing_phone"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>
//                 </div>

//                 {/* Address */}
//                 <Label className="mb-2 block">
//                   Billing Address <span className="text-rose-500">*</span>
//                 </Label>
//                 <Field name="billing_address" as={Input} className="w-full" />
//                 <ErrorMessage
//                   name="billing_address"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 />

//                 {/* City + State */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="mb-2 block">
//                       Billing City <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field name="billing_city" as={Input} className="w-full" />
//                     <ErrorMessage
//                       name="billing_city"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label className="mb-2 block">
//                       Billing State <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field name="billing_state" as={Input} className="w-full" />
//                     <ErrorMessage
//                       name="billing_state"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>
//                 </div>

//                 {/* Zip + Country */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="mb-2 block">
//                       Postal / Zip Code <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field name="billing_zip" as={Input} className="w-full" />
//                     <ErrorMessage
//                       name="billing_zip"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label className="mb-2 block">
//                       Country <span className="text-rose-500">*</span>
//                     </Label>
//                     <Popover
//                       open={billingCountryOpen}
//                       onOpenChange={setBillingCountryOpen}
//                     >
//                       <PopoverTrigger asChild>
//                         <Button
//                           variant="outline"
//                           className="w-full justify-between"
//                         >
//                           {values.billing_country
//                             ? countries.find(
//                                 (c) => c.value === values.billing_country
//                               )?.label
//                             : "Select Country"}
//                           <ChevronDown className="h-4 w-4" />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="p-0 max-h-60 overflow-y-auto">
//                         <Command>
//                           <CommandInput placeholder="Search country..." />
//                           <CommandEmpty>No country found.</CommandEmpty>
//                           <CommandGroup>
//                             {countries.map((c) => (
//                               <CommandItem
//                                 key={c.value}
//                                 onSelect={() => {
//                                   setFieldValue("billing_country", c.value);
//                                   setBillingCountryOpen(false);
//                                 }}
//                               >
//                                 {c.label}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </Command>
//                       </PopoverContent>
//                     </Popover>
//                     <ErrorMessage
//                       name="billing_country"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>
//                 </div>
//               </div>

//               {/* Shipping Details */}
//               <div className="space-y-4">
//                 <h2 className="font-semibold text-md pb-1 border-b">
//                   Shipping Details
//                 </h2>

//                 {/* Shipping Name */}
//                 {/* <Label className="mb-2 block">Shipping Name *</Label>
//                 <Field name="shipping_name" as={Input} className="w-full" />
//                 <ErrorMessage
//                   name="shipping_name"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 /> */}

//                 {/* Shipping Phone */}
//                 {/* <div className="space-y-1 mt-2">
//                   <Label htmlFor="shipping_phone">Phone *</Label>
//                   <Field name="shipping_phone">
//                     {({ field }) => (
//                       <PhoneInput
//                         country={"in"}
//                         enableSearch
//                         value={field.value}
//                         onChange={(value, country) => {
//                           let formatted = value;
//                           const dialCode = country?.dialCode || "";
//                           if (!value.startsWith("+")) {
//                             const numberOnly = value.replace(
//                               new RegExp(`^${dialCode}`),
//                               ""
//                             );
//                             formatted = `+${dialCode}${numberOnly}`;
//                           }
//                           setFieldValue("shipping_phone", formatted);
//                         }}
//                         inputProps={{
//                           name: "shipping_phone",
//                         }}
//                         containerStyle={{ width: "100%" }}
//                         inputStyle={{
//                           width: "100%",
//                           height: "36px",
//                           fontSize: "14px",
//                           borderRadius: "0.375rem",
//                           border: "1px solid #e5e7eb",
//                           paddingLeft: "48px",
//                         }}
//                         buttonStyle={{
//                           border: "none",
//                           borderTopLeftRadius: "0.375rem",
//                           borderBottomLeftRadius: "0.375rem",
//                         }}
//                       />
//                     )}
//                   </Field>
//                   <ErrorMessage
//                     name="shipping_phone"
//                     component="div"
//                     className="text-red-500 text-xs mt-1"
//                   />
//                 </div> */}

//                 {/* Shipping Address */}
//                 <Label className="mb-2 block mt-2">
//                   Shipping Address <span className="text-rose-500">*</span>
//                 </Label>
//                 <Field name="shipping_address" as={Input} className="w-full" />
//                 <ErrorMessage
//                   name="shipping_address"
//                   component="div"
//                   className="text-red-500 text-xs mt-1"
//                 />

//                 {/* City + State */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="mb-2 block">
//                       Shipping City <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field name="shipping_city" as={Input} className="w-full" />
//                     <ErrorMessage
//                       name="shipping_city"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label className="mb-2 block">
//                       Shipping State <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field
//                       name="shipping_state"
//                       as={Input}
//                       className="w-full"
//                     />
//                     <ErrorMessage
//                       name="shipping_state"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>
//                 </div>

//                 {/* Zip + Country */}
//                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
//                   <div>
//                     <Label className="mb-2 block">
//                       Postal / Zip Code <span className="text-rose-500">*</span>
//                     </Label>
//                     <Field name="shipping_zip" as={Input} className="w-full" />
//                     <ErrorMessage
//                       name="shipping_zip"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>

//                   <div>
//                     <Label className="mb-2 block">
//                       Country <span className="text-rose-500">*</span>
//                     </Label>
//                     <Popover
//                       open={shippingCountryOpen}
//                       onOpenChange={setShippingCountryOpen}
//                     >
//                       <PopoverTrigger asChild>
//                         <Button
//                           variant="outline"
//                           className="w-full justify-between"
//                         >
//                           {values.shipping_country
//                             ? countries.find(
//                                 (c) => c.value === values.shipping_country
//                               )?.label
//                             : "Select Country"}
//                           <ChevronDown className="h-4 w-4" />
//                         </Button>
//                       </PopoverTrigger>
//                       <PopoverContent className="p-0 max-h-60 overflow-y-auto">
//                         <Command>
//                           <CommandInput placeholder="Search country..." />
//                           <CommandEmpty>No country found.</CommandEmpty>
//                           <CommandGroup>
//                             {countries.map((c) => (
//                               <CommandItem
//                                 key={c.value}
//                                 onSelect={() => {
//                                   setFieldValue("shipping_country", c.value);
//                                   setShippingCountryOpen(false);
//                                 }}
//                               >
//                                 {c.label}
//                               </CommandItem>
//                             ))}
//                           </CommandGroup>
//                         </Command>
//                       </PopoverContent>
//                     </Popover>
//                     <ErrorMessage
//                       name="shipping_country"
//                       component="div"
//                       className="text-red-500 text-xs mt-1"
//                     />
//                   </div>
//                 </div>
//               </div>
//               <DialogFooter className="mt-4">
//                 <Button variant="outline" className="cursor-pointer" onClick={onClose}>
//                   Cancel
//                 </Button>
//                 <Button
//                   type="submit"
//                   disabled={isSubmitting}
//                   className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer"
//                 >
//                   {isSubmitting ? (
//                     <>
//                       <Loader className="w-4 h-4 animate-spin" />
//                       Saving...
//                     </>
//                   ) : (
//                     <>
//                       <Save className="w-4 h-4" />
//                       Save Changes
//                     </>
//                   )}
//                 </Button>
//                 {/* <Button type="submit" disabled={isSubmitting}>Save Changes</Button> */}
//               </DialogFooter>
//             </Form>
//           )}
//         </Formik>
//       </DialogContent>
//     </Dialog>
//   );
// };

export default EditDetailsModal;
