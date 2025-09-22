"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useState, useEffect, useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter, useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Loader, Save, Pencil, Trash2 } from "lucide-react";
import { toast } from "react-toastify";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogCancel,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

export default function EditCustomerContactForm({ customer }) {
  const router = useRouter();
  const formikRef = useRef();
  const searchParams = useSearchParams();
  const customerId = customer?.id || searchParams.get("customerId");
  const customerName = customer?.customer_name || "Customer";

  const [loading, setLoading] = useState(true);
  const [uploadedBlocks, setUploadedBlocks] = useState([]);
  const [showForm, setShowForm] = useState(uploadedBlocks.length === 0);
  const [editContact, setEditContact] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/customer/edit/${customerId}/contact-persons`
      );
      const data = await res.json();
      setUploadedBlocks(data);
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
      setEditContact(null);
    };
  }, [customerId]);

  useEffect(() => {
    setShowForm(uploadedBlocks.length === 0 || editContact !== null);
  }, [uploadedBlocks.length, editContact]);

  // useEffect(() => {
  //   if (uploadedBlocks.length === 0) {
  //     setShowForm(true);
  //   }
  // }, [uploadedBlocks.length]);

  const initialValues = editContact || {
    contact_name: "",
    contact_email: "",
    contact_phone: "",
    job_title: "",
    is_primary: false,
  };

  const validationSchema = Yup.object({
    contact_name: Yup.string()
      .required("Contact name is required")
      .min(3, "Contact name must be at least 3 characters")
      .max(50, "Contact name cannot exceed 50 characters"),
    contact_email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    contact_phone: Yup.string()
      .nullable()
      .notRequired()
      .test("is-valid-e164", "Enter a valid phone number", function (value) {
        if (!value) return true;
        return /^\+\d{8,15}$/.test(value);
      }),
    job_title: Yup.string()
      .min(2, "Job title must be at least 2 characters")
      .max(50, "Job title cannot exceed 50 characters"),
    is_primary: Yup.boolean(),
  });

  // Create Contact (POST)
  const handleCreate = async (values, { setSubmitting, resetForm }) => {
    try {
      const payload = { ...values };
      delete payload.id;

      const res = await fetch(
        `/api/customer/edit/${customerId}/contact-persons`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success("Contact saved successfully.");

      resetForm();
      setEditContact(null);

      // Redirect after new contact
      router.push(`/customer/${customerId}/edit/operational-details`);
    } catch (error) {
      console.error("Error creating contact:", error);
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
        `/api/customer/edit/${customerId}/contact-persons/${values.id}`,
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

      toast.success("Contact updated successfully.");

      resetForm();
      setEditContact(null);

      // Refresh the data
      await fetchData();

      // Just refresh page after update
      router.refresh();
    } catch (error) {
      console.error("Error updating contact:", error);
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

  // Handle Delete
  const handleDeleteContact = async (id) => {
    try {
      setDeletingId(id);

      // Check if we're deleting the currently edited item
      const isEditingCurrent = editContact?.id === id;
      // const isEditingCurrent =
      //   editContact !== null && uploadedBlocks[editContact]?.id === id;

      const res = await fetch(
        `/api/customer/edit/${id}/contact-persons/remove`,
        {
          method: "DELETE",
        }
      );
      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Failed to delete contact");

      toast.success("Contact deleted successfully.");
      setUploadedBlocks((prev) => prev.filter((b) => b.id !== id));
      // Reset form if deleting the currently edited item
      if (isEditingCurrent) {
        formikRef.current?.resetForm();
        setEditContact(null);
      }

      fetchData();
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast.error("Failed to delete contact.");
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {customerName} - Contact Person
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 pt-4">
        {uploadedBlocks.length > 0 && !showForm && (
          <Button
            onClick={() => {
              setEditContact(null);
              setShowForm(true);
            }}
            className="bg-slate-800 text-white hover:bg-slate-700 text-sm cursor-pointer"
          >
            + Add Contact
          </Button>
        )}
      </div>

      {showForm && (
        <div className="px-6 py-4 max-w-7xl">
          <Formik
            innerRef={formikRef}
            enableReinitialize
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ values, setFieldValue, isSubmitting, resetForm }) => (
              <Form className="space-y-6 border p-4 rounded-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <Label className="block mb-1">
                      Contact Name <span className="text-rose-500">*</span>
                    </Label>
                    <Field as={Input} name="contact_name" />
                    <ErrorMessage
                      name="contact_name"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>
                  <div>
                    <Label className="block mb-1">
                      Email <span className="text-rose-500">*</span>
                    </Label>
                    <Field as={Input} name="contact_email" />
                    <ErrorMessage
                      name="contact_email"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>
                  {/* Phone */}
                  <div>
                    <Label htmlFor="contact_phone" className="mb-1">
                      Phone
                    </Label>
                    <Field name="contact_phone">
                      {({ field, form }) => (
                        <>
                          <PhoneInput
                            country={"us"}
                            enableSearch
                            value={field.value}
                            onChange={(value, country) => {
                              if (!value)
                                return form.setFieldValue("contact_phone", "");
                              const dialCode = country?.dialCode || "";
                              let formatted = value;
                              if (!value.startsWith("+")) {
                                const numberOnly = value.replace(
                                  new RegExp(`^${dialCode}`),
                                  ""
                                );
                                formatted = `+${dialCode}${numberOnly}`;
                              }
                              form.setFieldValue("contact_phone", formatted);
                            }}
                            inputProps={{
                              name: "contact_phone",
                              id: "contact_phone",
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
                            name="contact_phone"
                            component="div"
                            className="text-xs text-red-500 mt-1"
                          />
                        </>
                      )}
                    </Field>
                  </div>

                  {/* Job Title */}
                  <div>
                    <Label className="block mb-1">Job Title</Label>
                    <Field as={Input} name="job_title" />
                    <ErrorMessage
                      name="job_title"
                      component="div"
                      className="text-xs text-red-500 mt-1"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 mt-3">
                  <Label>Primary Contact</Label>
                  <Switch
                    checked={values.is_primary}
                    onCheckedChange={(val) => setFieldValue("is_primary", val)}
                  />
                </div>

                <div className="flex gap-4 pt-4 justify-center">
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex items-center gap-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" /> Save
                      </>
                    )}
                  </Button>
                  <Button
                    className="cursor-pointer"
                    type="button"
                    variant="outline"
                    onClick={() => {
                      resetForm();
                      setEditContact(null);
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

      {/* Display Contact Data */}
      <div className="px-6 py-4 max-w-7xl">
        <div className="border rounded-lg">
          {loading ? (
            <div className="flex flex-col items-center justify-center p-12 text-center">
              <Loader className="w-8 h-8 animate-spin text-gray-800 mb-3" />
              <p className="text-gray-600 text-sm">
                Loading contacts person...
              </p>
            </div>
          ) : uploadedBlocks.length === 0 ? (
            <div className="flex flex-col items-center justify-center p-10 text-center">
              <div className="bg-gray-100 p-4 rounded-full mb-5">
                <Pencil className="w-5 h-5 text-gray-400" />
              </div>
              <p className="text-gray-700 font-medium">No contacts added yet</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[50px]">#</TableHead>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Job Title</TableHead>
                    <TableHead>Primary</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {uploadedBlocks.map((contact, index) => (
                    <TableRow key={contact.id || index}>
                      <TableCell>{index + 1}</TableCell>
                      <TableCell className="font-medium">
                        {contact.contact_name}
                      </TableCell>
                      <TableCell>{contact.contact_email}</TableCell>
                      <TableCell>{contact.contact_phone || "-"}</TableCell>
                      <TableCell>{contact.job_title || "-"}</TableCell>
                      <TableCell>
                        {contact.is_primary ? (
                          <span className="px-2 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded">
                            Yes
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-xs font-medium text-gray-600 bg-gray-100 rounded">
                            No
                          </span>
                        )}
                      </TableCell>
                      <TableCell className="text-right">
                        <div className="flex justify-end gap-2">
                          <Button
                            variant="outline"
                            className="cursor-pointer border-gray-300 hover:bg-gray-50"
                            size="sm"
                            onClick={() => {
                              setEditContact({ ...contact });
                              setShowForm(true);
                            }}
                          >
                            <Pencil className="w-4 h-4 mr-1" />
                          </Button>

                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <Button
                                variant="outline"
                                size="sm"
                                className="border-red-300 hover:bg-red-50 text-red-600 cursor-pointer"
                                disabled={deletingId === contact.id}
                              >
                                {deletingId === contact.id ? (
                                  <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                              </Button>
                              {/* <Button
                                variant="outline"
                                size="sm"
                                className="border-red-300 hover:bg-red-50 cursor-pointer"
                              >
                                <Trash2 className="w-4 h-4 text-red-600" />
                              </Button> */}
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Are you sure?
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  This will permanently delete the contact.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel className="cursor-pointer">
                                  Cancel
                                </AlertDialogCancel>
                                <AlertDialogAction
                                  className="cursor-pointer bg-red-600 hover:bg-red-700"
                                  onClick={() =>
                                    handleDeleteContact(contact.id)
                                  }
                                  disabled={deletingId === contact.id}
                                >
                                  Delete
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
