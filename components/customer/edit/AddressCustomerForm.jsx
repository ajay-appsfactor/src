"use client";

import { useState, useEffect, useRef } from "react";
import addressCustomerSchema from "@/validations/addressCustomerSchema";
import { Checkbox } from "@/components/ui/checkbox";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Loader, ChevronDown, Save, Pencil, Trash2 } from "lucide-react";
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
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { toast } from "react-toastify";
import { countries } from "@/constants/countries";

const AddressCustomerForm = ({ customer }) => {
  const router = useRouter();
  const formikRef = useRef();
  const customerId = customer?.id;
  const customerName = customer?.customer_name || "Customer";

  const [loading, setLoading] = useState(true);
  const [uploadedBlocks, setUploadedBlocks] = useState([]);
  const [billingCountryOpen, setBillingCountryOpen] = useState(false);
  const [shippingCountryOpen, setShippingCountryOpen] = useState(false);
  const [editAddress, setEditAddress] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [deletingId, setDeletingId] = useState(null);
  const [previousBillingValues, setPreviousBillingValues] = useState({});

  // Fetch from API
  const fetchData = async () => {
    if (!customerId) {
      setLoading(false);
      return;
    }

    try {
      setLoading(true);
      const res = await fetch(`/api/customer/edit/${customerId}/address`);

      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.status}`);
      }

      const data = await res.json();
      setUploadedBlocks(data);
    } catch (error) {
      console.error("Error fetching addresses:", error);
      toast.error("Failed to load addresses");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [customerId]);

  // Reset form when customer changes or component unmounts
  useEffect(() => {
    return () => {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      setEditAddress(null);
    };
  }, [customerId]);

  useEffect(() => {
    // Show form if no addresses or when editing
    setShowForm(uploadedBlocks.length === 0 || editAddress !== null);
  }, [uploadedBlocks.length, editAddress]);

  const defaultValues = editAddress || {
    billing_address: "",
    billing_address2: "",
    billing_city: "",
    billing_state: "",
    billing_zip: "",
    billing_country: "",

    shipping_address: "",
    shipping_address2: "",
    shipping_city: "",
    shipping_state: "",
    shipping_zip: "",
    shipping_country: "",

    copy_billing: false,
    is_default: false,
  };

  // Store initial billing values when copy_billing is enabled
  useEffect(() => {
    if (formikRef.current && formikRef.current.values.copy_billing) {
      const values = formikRef.current.values;
      setPreviousBillingValues({
        billing_address: values.billing_address,
        billing_address2: values.billing_address2,
        billing_city: values.billing_city,
        billing_state: values.billing_state,
        billing_zip: values.billing_zip,
        billing_country: values.billing_country,
      });
    }
  }, []);

  // Create Contact (POST)
  const handleCreate = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = { ...values };
      delete payload.id;

      const res = await fetch(`/api/customer/edit/${customerId}/address`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success(data.message || "Address saved successfully.");

      resetForm();
      setEditAddress(null);

      // Refresh the data
      await fetchData();

      // Redirect after new address
      // router.push(`/customer/${customerId}/edit/address-details`);
    } catch (error) {
      // console.error("Error creating address:", error);
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  // Update Contact (PUT)
  const handleUpdate = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = { ...values };
      delete payload.id;

      // console.log("values:", values);
      // console.log("payload:", payload);

      const res = await fetch(
        `/api/customer/edit/${customerId}/address/${values.id}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success(data.message || "Address updated successfully.");

      resetForm();
      setEditAddress(null);

      // Refresh the data
      await fetchData();

      // Just refresh page after update
      router.refresh();
    } catch (error) {
      // console.error("Error updating address:", error);
      toast.error("Something went wrong!");
    } finally {
      setSubmitting(false);
    }
  };

  // Formik onSubmit decides which one to call
  const handleSubmit = (values, formikHelpers) => {
    if (!customerId) {
      toast.error("Customer ID is missing.");
      return;
    }

    if (values.id) {
      return handleUpdate(values, formikHelpers);
    } else {
      return handleCreate(values, formikHelpers);
    }
  };

  // Handle billing address changes when copy_billing is enabled
  const handleBillingChange = (field, value, setFieldValue, values) => {
    // Update the billing field
    setFieldValue(field, value);

    // If copy_billing is enabled, also update the corresponding shipping field
    if (values.copy_billing) {
      const shippingField = field.replace("billing_", "shipping_");
      setFieldValue(shippingField, value);
    }
  };

  // Handle Delete
  const handleDeleteAddress = async (id) => {
    try {
      setDeletingId(id);

      // Check if we're deleting the currently edited item
      const isEditingCurrent = editAddress?.id === id;
      const res = await fetch(`/api/customer/edit/${id}/address/remove`, {
        method: "DELETE",
      });
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to delete address");

      toast.success("Address deleted successfully.");
      setUploadedBlocks((prev) => prev.filter((b) => b.id !== id));
      // Reset form if deleting the currently edited item
      if (isEditingCurrent) {
        formikRef.current?.resetForm();
        setEditAddress(null);
      }

      fetchData();
    } catch (error) {
      console.error("Error deleting address:", error);
      toast.error("Failed to delete address.");
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {customerName} - Address Details
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 pt-4 ">
        {uploadedBlocks.length > 0 && !showForm && (
          <Button
            className="flex items-center gap-2 px-5 pt-2 text-sm bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
            onClick={() => {
              setEditAddress(null);
              setShowForm(true);
            }}
          >
            + Add Address
          </Button>
        )}
      </div>
      {/* max-w-7xl */}
      {showForm && (
        <div className="px-6 py-4 w-full">
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={defaultValues}
            validationSchema={addressCustomerSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting, resetForm }) => (
              <Form className="grid grid-cols-1 lg:grid-cols-2 auto-rows-min gap-4 md:gap-6 w-full">
                {/* Set as Default Checkbox */}
                <div className="col-span-1 lg:col-span-2 flex items-center gap-2">
                  <Checkbox
                    id="is_default"
                    checked={values.is_default}
                    onCheckedChange={(val) =>
                      setFieldValue("is_default", val === true)
                    }
                  />
                  <Label htmlFor="is_default">Set as default</Label>
                </div>

                {/* Billing Address */}
                <div className="order-1 lg:order-none col-span-1">
                  <h3 className="font-semibold mb-2">Billing Address</h3>
                  {/* Street Address 1 */}
                  <Label htmlFor="billing_address" className="mb-2">
                    Street Address <span className="text-rose-500">*</span>
                  </Label>
                  <Field name="billing_address">
                    {({ field }) => (
                      <Input
                        {...field}
                        className="w-full"
                        onChange={(e) =>
                          handleBillingChange(
                            "billing_address",
                            e.target.value,
                            setFieldValue,
                            values
                          )
                        }
                      />
                    )}
                  </Field>
                  <ErrorMessage
                    name="billing_address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  {/* Street Address 2 */}
                  <Label htmlFor="billing_address2" className="mt-4 mb-2">
                    Street Address 2
                  </Label>
                  <Field name="billing_address2">
                    {({ field }) => (
                      <Input
                        {...field}
                        className="w-full"
                        onChange={(e) =>
                          handleBillingChange(
                            "billing_address2",
                            e.target.value,
                            setFieldValue,
                            values
                          )
                        }
                      />
                    )}
                  </Field>

                  {/* City + State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="billing_city" className="mb-2">
                        City <span className="text-rose-500">*</span>
                      </Label>
                      <Field name="billing_city">
                        {({ field }) => (
                          <Input
                            {...field}
                            onChange={(e) =>
                              handleBillingChange(
                                "billing_city",
                                e.target.value,
                                setFieldValue,
                                values
                              )
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="billing_city"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billing_state" className="mb-2">
                        State <span className="text-rose-500">*</span>
                      </Label>
                      <Field name="billing_state">
                        {({ field }) => (
                          <Input
                            {...field}
                            onChange={(e) =>
                              handleBillingChange(
                                "billing_state",
                                e.target.value,
                                setFieldValue,
                                values
                              )
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="billing_state"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Postal Code + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="billing_zip" className="mb-2">
                        Postal/Zip Code <span className="text-rose-500">*</span>
                      </Label>
                      <Field name="billing_zip">
                        {({ field }) => (
                          <Input
                            {...field}
                            onChange={(e) =>
                              handleBillingChange(
                                "billing_zip",
                                e.target.value,
                                setFieldValue,
                                values
                              )
                            }
                          />
                        )}
                      </Field>
                      <ErrorMessage
                        name="billing_zip"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="billing_country" className="mb-2">
                        Country <span className="text-rose-500">*</span>
                      </Label>
                      <Popover
                        open={billingCountryOpen}
                        onOpenChange={setBillingCountryOpen}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between cursor-pointer"
                          >
                            {values.billing_country
                              ? countries.find(
                                  (c) => c.value === values.billing_country
                                )?.label
                              : "Select Country"}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0 z-50 max-h-60 overflow-y-auto scroll-mt-16">
                          <Command>
                            <CommandInput placeholder="Search country..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countries.map((c) => (
                                <CommandItem
                                  key={c.value}
                                  onSelect={() => {
                                    handleBillingChange(
                                      "billing_country",
                                      c.value,
                                      setFieldValue,
                                      values
                                    );
                                    setBillingCountryOpen(false);
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

                {/* Shipping Address */}
                <div className="order-2 lg:order-none col-span-1">
                  <h3 className="font-semibold mb-2 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                    Shipping Address
                    <Label className="flex items-center gap-2 text-sm">
                      <Checkbox
                        className="me-2"
                        checked={values.copy_billing}
                        onCheckedChange={(val) => {
                          const isChecked = val === true;
                          setFieldValue("copy_billing", isChecked);
                          if (isChecked) {
                            // Copy all billing values to shipping
                            setFieldValue(
                              "shipping_address",
                              values.billing_address
                            );
                            setFieldValue(
                              "shipping_address2",
                              values.billing_address2
                            );
                            setFieldValue("shipping_city", values.billing_city);
                            setFieldValue(
                              "shipping_state",
                              values.billing_state
                            );
                            setFieldValue("shipping_zip", values.billing_zip);
                            setFieldValue(
                              "shipping_country",
                              values.billing_country
                            );
                          }
                        }}
                      />
                      Same as Billing Address
                    </Label>
                  </h3>

                  {/* Street Address 1 */}
                  <Label htmlFor="shipping_address" className="mb-2">
                    Street Address <span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    name="shipping_address"
                    className="w-full"
                    disabled={values.copy_billing}
                  />
                  <ErrorMessage
                    name="shipping_address"
                    component="div"
                    className="text-red-500 text-xs mt-1"
                  />

                  {/* Street Address 2 */}
                  <Label htmlFor="shipping_address2" className="mt-4 mb-2">
                    Street Address 2
                  </Label>
                  <Field
                    as={Input}
                    name="shipping_address2"
                    className="w-full"
                    disabled={values.copy_billing}
                  />

                  {/* City + State */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="shipping_city" className="mb-2">
                        City <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        as={Input}
                        name="shipping_city"
                        className="w-full"
                        disabled={values.copy_billing}
                      />
                      <ErrorMessage
                        name="shipping_city"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="shipping_state" className="mb-2">
                        State <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        as={Input}
                        name="shipping_state"
                        className="w-full"
                        disabled={values.copy_billing}
                      />
                      <ErrorMessage
                        name="shipping_state"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                  </div>

                  {/* Postal Code + Country */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                    <div>
                      <Label htmlFor="shipping_zip" className="mb-2">
                        Postal/Zip Code <span className="text-rose-500">*</span>
                      </Label>
                      <Field
                        as={Input}
                        name="shipping_zip"
                        className="w-full"
                        disabled={values.copy_billing}
                      />
                      <ErrorMessage
                        name="shipping_zip"
                        component="div"
                        className="text-red-500 text-xs mt-1"
                      />
                    </div>
                    {/* Country */}
                    <div>
                      <Label htmlFor="shipping_country" className="mb-2">
                        Country <span className="text-rose-500">*</span>
                      </Label>
                      <Popover
                        open={shippingCountryOpen}
                        onOpenChange={setShippingCountryOpen}
                      >
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-between cursor-pointer"
                            disabled={values.copy_billing}
                          >
                            {values.shipping_country
                              ? countries.find(
                                  (c) => c.value === values.shipping_country
                                )?.label
                              : "Select Country"}
                            <ChevronDown className="ml-2 h-4 w-4" />
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="p-0">
                          <Command>
                            <CommandInput placeholder="Search..." />
                            <CommandEmpty>No country found.</CommandEmpty>
                            <CommandGroup>
                              {countries.map((c) => (
                                <CommandItem
                                  key={c.value}
                                  onSelect={() => {
                                    setFieldValue("shipping_country", c.value);
                                    setShippingCountryOpen(false);
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

                {/* Submit Buttons */}
                <div className="col-span-1 lg:col-span-2 flex flex-wrap justify-center gap-4 mt-4">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-slate-800 text-white hover:bg-slate-700 cursor-pointer w-full sm:w-auto"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin w-4 h-4" /> Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" /> Save
                      </>
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="cursor-pointer w-full sm:w-auto"
                    onClick={() => {
                      resetForm();
                      setEditAddress(null);
                      if (uploadedBlocks.length > 0) {
                        setShowForm(false);
                      }
                    }}
                  >
                    Cancel
                  </Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      )}

      {/* Address List Rendering */}
      <div className="px-6 py-4 w-full">
        {loading ? (
          <div className="flex flex-col items-center justify-center p-12 text-center">
            <Loader className="w-8 h-8 animate-spin text-gray-800 mb-3" />
            <p className="text-gray-600 text-sm">Loading addresses...</p>
          </div>
        ) : uploadedBlocks.length === 0 && !showForm ? (
          <div className="flex flex-col items-center justify-center p-10 text-center">
            <div className="bg-gray-100 p-4 rounded-full mb-5">
              <Pencil className="w-5 h-5 text-gray-400" />
            </div>
            <p className="text-gray-700 font-medium">No addresses added yet</p>
            <Button
              onClick={() => setShowForm(true)}
              className="mt-4 bg-slate-800 text-white hover:bg-slate-700"
            >
              Add First Address
            </Button>
          </div>
        ) : (
          !showForm &&
          uploadedBlocks.map((address, index) => (
            <div
              key={address.id}
              className="space-y-4 mt-4 p-4 border rounded-lg"
            >
              {/* Header with default badge + actions */}
              <div className="flex justify-between items-center">
                <div>
                  {address.is_default ? (
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm font-medium">
                      Default
                    </span>
                  ) : (
                    <span className="bg-gray-100 text-gray-800 px-3 py-1 rounded text-sm">
                      Address {index + 1}
                    </span>
                  )}
                </div>
                <div className="flex gap-2">
                  {/* Edit Button */}
                  <Button
                    variant="outline"
                    className="text-sm gap-1 cursor-pointer"
                    onClick={() => {
                      setEditAddress({ ...address, copy_billing: false });
                      setShowForm(true);
                    }}
                  >
                    <Pencil className="w-3 h-3" />
                  </Button>

                  {/* Delete Button with Confirmation */}
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-red-300 hover:bg-red-50 text-red-600 cursor-pointer"
                        disabled={deletingId === address.id}
                      >
                        {deletingId === address.id ? (
                          <Loader className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle>Are you sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                          This action cannot be undone. This will permanently
                          delete this address.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel className="cursor-pointer">
                          Cancel
                        </AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDeleteAddress(address.id)}
                          className="bg-red-600 hover:bg-red-700 cursor-pointer"
                        >
                          Delete
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>

              {/* Billing + Shipping */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="text-sm font-semibold">Billing Address</p>
                  <div className="text-sm text-muted-foreground">
                    {[
                      address.billing_address,
                      address.billing_address2,
                      address.billing_city,
                      address.billing_state,
                      address.billing_country,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                    {address.billing_zip && ` - ${address.billing_zip}`}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-semibold">Shipping Address</p>
                  <div className="text-sm text-muted-foreground">
                    {[
                      address.shipping_address,
                      address.shipping_address2,
                      address.shipping_city,
                      address.shipping_state,
                      address.shipping_country,
                    ]
                      .filter(Boolean)
                      .join(", ")}
                    {address.shipping_zip && ` - ${address.shipping_zip}`}
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AddressCustomerForm;
