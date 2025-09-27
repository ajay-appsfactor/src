"use client";

import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Save, Loader, Pencil, Trash2, Download } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format } from "date-fns";
import moment from "moment-timezone";
import ManualFileUploader from "@/components/customer/shared/ManualFileUploader";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const TaxVendorForm = ({ vendor }) => {
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(true);
  const formikRef = useRef();
  const router = useRouter();

  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";
  const protocol = vendor?.protocol || "https:";
  const subDomain = vendor?.subdomain || "default";
  const domain = vendor?.subdomain?.split(".")[0] || "default";

  const [uploadedBlocks, setUploadedBlocks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(`/api/vendor/${vendorId}/tax-compliance`);
      const data = await res.json();
      setUploadedBlocks(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [vendorId]);

  // Reset form when vendorId changes or component unmounts
  useEffect(() => {
    return () => {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      setEditIndex(null);
    };
  }, [vendorId]);

  const validationSchema = Yup.object({
    tax_number: Yup.string().nullable(),
    vat_number: Yup.string().nullable(),
    company_number: Yup.string().nullable(),
    compliance_type: Yup.string().nullable(),
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

  const initialValues = {
    id: "",
    tax_number: "",
    vat_number: "",
    company_number: "",
    compliance_type: "",
    file_url: "",
    file_name: "",
    files: [],
  };

  const handleCreate = async (values, { resetForm, setSubmitting }) => {
    try {
      if (!vendorId) {
        toast.error("Vendor ID is missing.");
        return;
      }

      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          if (key === "files" && Array.isArray(value)) {
            value.forEach((f) => formData.append("files", f));
          } else {
            formData.append(key, value);
          }
        }
      });

      const res = await fetch(`/api/vendor/${vendorId}/tax-compliance`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to save Tax & Compliance info.");
      }

      toast.success(data.message || "Tax & Compliance saved.");

      // Redirect to Payment & financial
      router.push(`/vendor/${vendorId}/payment-financial-info`);
      resetForm();
      // fetchData();
    } catch (error) {
      toast.error(error.error || "Something went wrong.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdate = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = new FormData();
      Object.entries(values).forEach(([key, value]) => {
        if (value) {
          if (key === "files" && Array.isArray(value)) {
            value.forEach((f) => formData.append("files", f));
          } else {
            formData.append(key, value);
          }
        }
      });

      const res = await fetch(
        `/api/vendor/${vendorId}/tax-compliance/${values.id}`,
        {
          method: "PUT",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to update attachment");
        return;
      }

      toast.success("Attachment updated.");
      setUploadedBlocks((prev) =>
        prev.map((b) => (b.id === values.id ? data : b))
      );
      resetForm();
      setEditIndex(null);
    } catch {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      setDeletingId(id);

      // Check if we're deleting the currently edited item
      const isEditingCurrent =
        editIndex !== null && uploadedBlocks[editIndex]?.id === id;

      const res = await fetch(`/api/vendor/${vendorId}/tax-compliance/${id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast.error("Failed to delete attachment");
        return;
      }

      toast.success("Attachment deleted.");
      setUploadedBlocks((prev) => prev.filter((b) => b.id !== id));

      // Reset form if deleting the currently edited item
      if (isEditingCurrent) {
        formikRef.current?.resetForm();
        setEditIndex(null);
      }

      router.refresh();
      // fetchData();
    } catch {
      toast.error("Something went wrong");
    } finally {
      setDeletingId(null);
    }
  };

  const handleSubmit = async (values, formikHelpers) => {
    if (values.id) {
      await handleUpdate(values, formikHelpers);
    } else {
      await handleCreate(values, formikHelpers);
    }
  };

  const handleEdit = (index) => {
    // Validate index is within bounds
    if (index < 0 || index >= uploadedBlocks.length) {
      setEditIndex(null);
      formikRef.current?.resetForm();
      return;
    }

    const block = uploadedBlocks[index];

    if (!block) {
      setEditIndex(null);
      formikRef.current?.resetForm();
      return;
    }

    if (formikRef.current) {
      formikRef.current.setValues({
        id: block.id,
        tax_number: block.tax_number || "",
        vat_number: block.vat_number || "",
        company_number: block.company_number || "",
        compliance_type: block.compliance_type || "",
        file_url: block.file_url || "",
        file_name: block.file_name || "",
        files: [],
      });
      setEditIndex(index);
    }
  };

  const getFileIcon = (fileName) => {
    if (!fileName) return null;

    const ext = fileName.split(".").pop()?.toLowerCase() || "";
    const iconClass = "w-4 h-4";

    const fileTypeMap = {
      image: ["jpg", "jpeg", "png", "gif"],
      pdf: ["pdf"],
      word: ["doc", "docx"],
    };

    if (fileTypeMap.image.includes(ext)) {
      return (
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <ImageIcon className={iconClass} />
        </div>
      );
    }
    if (fileTypeMap.pdf.includes(ext)) {
      return (
        <div className="bg-red-100 p-2 rounded-md text-red-600">
          <FileText className={iconClass} />
        </div>
      );
    }
    if (fileTypeMap.word.includes(ext)) {
      return (
        <div className="bg-blue-100 p-2 rounded-md text-blue-600">
          <FileText className={iconClass} />
        </div>
      );
    }

    return (
      <div className="bg-gray-100 p-2 rounded-md text-gray-600">
        <File className={iconClass} />
      </div>
    );
  };

  // File icon components for previews
  const File = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
      <path d="M13 2v7h7" />
    </svg>
  );

  const ImageIcon = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <path d="M21 15l-5-5L5 21" />
    </svg>
  );

  const FileText = ({ className }) => (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" />
    </svg>
  );

  // Safe file name extraction
  const getFileName = (filePath) => {
    if (!filePath) return "Unnamed file";
    return filePath.split("/").pop() || "Unnamed file";
  };

  const getDownloadUrl = (fileUrl) =>
    `${protocol}//${subDomain}/uploads/${domain}/vendors/tax-attachments/${vendorId}/${fileUrl}`;

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2">
        <h2 className="text-md font-semibold">
          {vendorName} - Tax & Compliance
        </h2>
      </div>
      <hr />

      <div className="px-6 py-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Form */}
        <div className="">
          <Formik
            innerRef={formikRef}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              isSubmitting,
              setFieldValue,
              resetForm,
              setFieldError,
              values,
              errors,
              touched,
            }) => (
              <>
                {/* Left: Form */}
                <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <Label htmlFor="tax_number" className="mb-2">
                      Tax Identification Number
                    </Label>

                    <Field as={Input} name="tax_number" />
                  </div>

                  <div>
                    <Label htmlFor="vat_number" className="mb-2">
                      VAT / GST Number
                    </Label>
                    <Field as={Input} name="vat_number" />
                  </div>

                  <div>
                    <Label htmlFor="company_number" className="mb-2">
                      Registered Company Number
                    </Label>
                    <Field as={Input} name="company_number" />
                  </div>

                  <div>
                    <Label htmlFor="compliance_type" className="mb-2">
                      Compliance Documents
                    </Label>
                    <Select
                      value={values.compliance_type}
                      onValueChange={(val) =>
                        setFieldValue("compliance_type", val)
                      }
                    >
                      <SelectTrigger className="w-full cursor-pointer">
                        <SelectValue placeholder="Select Compliance Documents" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ISO certificates">
                          ISO certificates
                        </SelectItem>
                        <SelectItem value="NDAs">NDAs</SelectItem>
                        <SelectItem value="MSDS">MSDS</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="md:col-span-2">
                    <Label className="mb-2">
                      Upload File<span className="text-rose-500">*</span>
                    </Label>
                    <ManualFileUploader
                      value={values.files}
                      onChange={(files) => {
                        setFieldValue("files", files);
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

                    {/* Existing file in edit mode */}
                    {editIndex !== null && values.file_url && (
                      <div className="mt-3 flex items-center gap-3 p-3 bg-blue-50 rounded-md border border-blue-200">
                        <div className="flex-shrink-0">
                          {getFileIcon(values.file_url)}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate">
                            {values.file_name || getFileName(values.file_url)}
                          </p>
                          <p className="text-xs text-blue-600">
                            Existing file will be kept unless you upload a new
                            one
                          </p>
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="md:col-span-2 text-right">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex gap-2 cursor-pointer"
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
                  </div>
                </Form>
              </>
            )}
          </Formik>
        </div>

        {/* Right: Uploaded Files */}

        <div>
          {/* Header */}
          <div className="bg-gray-50 px-4 py-3 rounded-t-lg border-b flex justify-between items-center">
            <div className="flex items-center gap-2">
              <h3 className="font-medium text-md">Uploaded Files</h3>
              <Badge variant="secondary">{uploadedBlocks.length}</Badge>
            </div>
            <p className="text-xs text-gray-500">Max 50MB per file</p>
          </div>

          {/* Body */}
          <div className="border rounded-b-lg">
            {loading ? (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <Loader className="w-8 h-8 animate-spin text-blue-500 mb-3" />
                <p className="text-gray-600 text-sm">Loading attachments...</p>
              </div>
            ) : uploadedBlocks.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 text-center">
                <div className="bg-gray-100 p-6 rounded-full mb-5">
                  <File className="w-10 h-10 text-gray-400" />
                </div>
                <p className="text-gray-700 font-medium">No attachments yet</p>
                <p className="text-gray-500 text-sm mt-2 max-w-md">
                  Upload files and add private notes to keep important
                  information organized
                </p>
              </div>
            ) : (
              <div className="divide-y max-h-[calc(100vh-220px)] overflow-y-auto">
                {uploadedBlocks.map((b, i) => (
                  <div
                    key={b.id}
                    className="p-4 hover:bg-gray-50 transition-colors"
                  >
                    {/* File info */}
                    <div className="flex justify-between items-start gap-3">
                      <div className="flex-shrink-0 mt-1">
                        {getFileIcon(b.file_url)}
                      </div>
                      <div className="flex-1">
                        <p className="text-base truncate font-semibold text-gray-900">
                          {getFileName(b.file_name)}
                        </p>
                        <p className="text-xs text-gray-500 mt-1">
                          {b.updated_at
                            ? moment(b.updated_at)
                                .tz(vendor.timezone)
                                .format("MMM DD, YYYY · hh:mm A")
                            : "Date unknown"}
                        </p>
                        {/* <p className="text-xs text-gray-500 mt-0.5">
                          {b.created_at
                            ? format(
                                new Date(b.updated_at),
                                "MMM dd, yyyy · hh:mm a"
                              )
                            : ""}
                        </p> */}
                        <div className="mt-2 grid grid-cols-1 gap-x-4 gap-y-1 text-xs text-gray-600">
                          <p className="text-base">
                            <span className="font-medium text-gray-700">
                              Tax ID :
                            </span>{" "}
                            {b.tax_number || "-"}
                          </p>
                          <p className="text-base">
                            <span className="font-medium text-gray-700">
                              VAT :
                            </span>{" "}
                            {b.vat_number || "-"}
                          </p>
                          <p className="text-base">
                            <span className="font-medium text-gray-700">
                              Company No :
                            </span>{" "}
                            {b.company_number || "-"}
                          </p>
                          <p className="text-base">
                            <span className="font-medium text-gray-700">
                              Compliance :
                            </span>{" "}
                            {b.compliance_type || "-"}
                          </p>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex gap-1">
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-blue-50 rounded-full cursor-pointer"
                          onClick={() => handleEdit(i)}
                        >
                          <Pencil className="w-4 h-4 text-blue-500" />
                        </Button>
                        <Button
                          size="icon"
                          variant="ghost"
                          className="hover:bg-red-50 rounded-full cursor-pointer"
                          onClick={() => handleDelete(b.id)}
                          disabled={deletingId === b.id}
                        >
                          {deletingId === b.id ? (
                            <Loader className="w-4 h-4 animate-spin text-red-500" />
                          ) : (
                            <Trash2 className="w-4 h-4 text-red-500" />
                          )}
                        </Button>
                      </div>
                    </div>

                    {/* Download link */}
                    <div className="flex justify-end items-end">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center gap-1 cursor-pointer"
                        onClick={() => {
                          const fileUrl = getDownloadUrl(b.file_url);
                          const a = document.createElement("a");
                          a.href = fileUrl;
                          a.download = getFileName(b.file_name);
                          document.body.appendChild(a);
                          a.click();
                          a.remove();
                        }}
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </Button>
                    </div>

                    {/* {b.file_url && (
                      <Link
                        href={getDownloadUrl(b.file_url)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-3 inline-flex items-center px-3 py-1.5 bg-blue-50 text-blue-600 text-xs font-medium rounded-md hover:bg-blue-100 transition-colors"
                      >
                        <Download className="w-4 h-4 mr-1" /> Download
                      </Link>
                    )} */}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxVendorForm;
