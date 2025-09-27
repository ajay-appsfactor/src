"use client";

import { useState, useRef, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { Save, Loader, X, Pencil, Trash2, Download } from "lucide-react";
import { toast } from "react-toastify";
import ManualFileUploader from "../shared/ManualFileUploader";
import { MultiSelect } from "@/components/ui/multi-selected";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import moment from "moment-timezone";
import { useRouter } from "next/navigation";

const tagOptions = [
  { label: "VIP", value: "vip" },
  { label: "Repeat Client", value: "repeat" },
];

export default function SingleAttachmentForm({ customer }) {
  const [fileError, setFileError] = useState("");
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const formikRef = useRef();
  const customerId = customer?.id;
  const customerName = customer?.customer_name || "Customer";
  const subDomain = customer?.subdomain || "default";
  const domain = customer?.subdomain?.split(".")[0] || "default";
  const protocol = customer?.protocol;

  const [uploadedBlocks, setUploadedBlocks] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [deletingId, setDeletingId] = useState(null);

  // Fetch from API
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await fetch(
        `/api/customer/edit/${customerId}/attachments-notes`
      );
      const data = await res.json();
      // console.log("fetch data :", data);
      setUploadedBlocks(data);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [customerId]);

  // Reset form when vendorId changes or component unmounts
  useEffect(() => {
    return () => {
      if (formikRef.current) {
        formikRef.current.resetForm();
      }
      setEditIndex(null);
    };
  }, [customerId]);

  const initialValues = {
    id: "",
    internal_notes: "",
    tags: [],
    files: [],
    file_url: "",
    file_name: "",
  };

  const validationSchema = Yup.object().shape({
    internal_notes: Yup.string().nullable().max(500),
    tags: Yup.array().of(Yup.string()),
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

  // Handle Create
  const handleCreate = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("internal_notes", values.internal_notes || "");
      formData.append("tags", JSON.stringify(values.tags || []));

      values.files.forEach((file) => {
        formData.append("files", file);
      });

      const res = await fetch(
        `/api/customer/edit/${customerId}/attachments-notes`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Failed to create attachment");
        return;
      }

      toast.success(data.message || "Attachment added.");
      resetForm();
      fetchData();
    } catch (err) {
      toast.error("Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  // Handle Update
  const handleUpdate = async (values, { resetForm, setSubmitting }) => {
    try {
      const formData = new FormData();
      formData.append("internal_notes", values.internal_notes || "");
      formData.append("tags", JSON.stringify(values.tags || []));
      formData.append("file_url", values.file_url || "");
      formData.append("file_name", values.file_name || "");

      if (values.files.length > 0) {
        values.files.forEach((file) => {
          formData.append("files", file);
        });
      }

      const res = await fetch(
        `/api/customer/edit/${customerId}/attachments-notes/${values.id}`,
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

      toast.success(data.message || "Attachment updated.");
      setUploadedBlocks((prev) =>
        prev.map((b) => (b.id === values.id ? data : b))
      );
      resetForm();
      setEditIndex(null);
    } catch (err) {
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

      const res = await fetch(
        `/api/customer/edit/${customerId}/attachments-notes/${id}`,
        {
          method: "DELETE",
        }
      );

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
    } catch (err) {
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
        internal_notes: block.internal_notes || "",
        tags: block.tags || [],
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

  return (
    <div className="bg-white rounded-md">
      {/* Top Header */}
      <div className="px-6 py-2 max-w-7xl w-full flex justify-between items-center">
        <div className="flex items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {customerName} - Attachments & Notes
          </h2>
        </div>
      </div>

      <hr />

      {/* Main Content */}
      <div className="p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Form */}
          <div>
            <div className="bg-gray-50 px-4 py-3 rounded-t-lg border-b">
              <h3 className="font-medium text-md">
                {editIndex !== null
                  ? "Edit Attachment & Note"
                  : "Add New Attachment & Note"}
              </h3>
            </div>

            <Formik
              innerRef={formikRef}
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({
                values,
                setFieldValue,
                isSubmitting,
                resetForm,
                setFieldError,
                touched,
                errors,
              }) => (
                <Form className="space-y-5 p-4 border rounded-b-lg">
                  {/* File Upload */}
                  <div>
                    <Label className="mb-2 block font-medium">
                      Upload File<span className="text-rose-500">*</span>
                    </Label>

                    <ManualFileUploader
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

                  {/* Internal Notes */}
                  <div>
                    <Label className="mb-2 block font-medium">
                      Internal Notes
                    </Label>
                    <Field
                      as={Textarea}
                      name="internal_notes"
                      placeholder="Private notes visible only to your team"
                      className="min-h-[120px]"
                    />
                  </div>

                  {/* Tags */}
                  <div>
                    <Label className="mb-2 block font-medium">Tags</Label>
                    <MultiSelect
                      options={tagOptions}
                      value={values.tags}
                      onValueChange={(val) => setFieldValue("tags", val)}
                      placeholder="Select tags"
                    />
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex items-center gap-2 px-5 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <Loader className="w-4 h-4 animate-spin" />
                      ) : (
                        <Save className="w-4 h-4" />
                      )}
                      {editIndex !== null ? "Update Attachment" : "Save"}
                    </Button>

                    {editIndex !== null && (
                      <Button
                        type="button"
                        variant="outline"
                        onClick={() => {
                          setEditIndex(null);
                          resetForm();
                        }}
                        className="gap-2 cursor-pointer"
                      >
                        <X className="w-4 h-4" /> Cancel
                      </Button>
                    )}
                  </div>
                </Form>
              )}
            </Formik>
          </div>

          {/* Right: Uploaded Blocks */}
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
                  <p className="text-gray-600 text-sm">
                    Loading attachments...
                  </p>
                </div>
              ) : uploadedBlocks.length === 0 ? (
                <div className="flex flex-col items-center justify-center p-12 text-center">
                  <div className="bg-gray-100 p-6 rounded-full mb-5">
                    <File className="w-10 h-10 text-gray-400" />
                  </div>
                  <p className="text-gray-700 font-medium">
                    No attachments yet
                  </p>
                  <p className="text-gray-500 text-sm mt-2 max-w-md">
                    Upload files and add private notes to keep important
                    information organized
                  </p>
                </div>
              ) : (
                <div className="divide-y max-h-[calc(100vh-220px)] overflow-y-auto">
                  {uploadedBlocks.map((block, i) => (
                    <div
                      key={block.id}
                      className="p-4 hover:bg-gray-50 transition-colors"
                    >
                      <div className="flex gap-4">
                        <div className="flex-shrink-0 mt-1">
                          {getFileIcon(block.file_url)}
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between">
                            <div>
                              <p className="font-medium text-sm truncate">
                                {getFileName(block.file_name)}
                              </p>
                              <p className="text-xs text-gray-500 mt-1">
                                {block.updated_at
                                  ? moment(block.updated_at)
                                      .tz(customer.timezone)
                                      .format("MMM DD, YYYY · hh:mm A")
                                  : "Date unknown"}
                              </p>
                            </div>

                            <div className="flex gap-2">
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 text-gray-500 hover:text-blue-600 cursor-pointer"
                                onClick={() => handleEdit(i)}
                              >
                                <Pencil className="w-4 h-4" />
                              </Button>
                              <Button
                                variant="ghost"
                                size="icon"
                                className="w-8 h-8 text-gray-500 hover:text-red-600 cursor-pointer"
                                onClick={() =>
                                  block.id && handleDelete(block.id)
                                }
                                disabled={deletingId === block.id}
                              >
                                {deletingId === block.id ? (
                                  <Loader className="w-4 h-4 animate-spin" />
                                ) : (
                                  <Trash2 className="w-4 h-4" />
                                )}
                              </Button>
                            </div>
                          </div>

                          {/* Notes */}
                          {block.internal_notes && (
                            <div className="mt-3 bg-gray-50 p-3 rounded-md border">
                              <p className="text-sm text-gray-700">
                                {block.internal_notes}
                              </p>
                            </div>
                          )}

                          {/* Tags */}
                          {block.tags?.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-1.5">
                              {block.tags.map((tag) => (
                                <Badge
                                  key={tag}
                                  variant="outline"
                                  className="text-xs px-2 py-0.5 bg-blue-50 text-blue-700 border-blue-100"
                                >
                                  {tagOptions.find((opt) => opt.value === tag)
                                    ?.label || tag}
                                </Badge>
                              ))}
                            </div>
                          )}

                          {/* Download Button - Only show if file exists */}
                          {block.file_url && (
                            <div className="mt-4 flex justify-end">
                              <Button
                                variant="outline"
                                className="cursor-pointer"
                                size="sm"
                                onClick={() => {
                                  const realFileUrl = `${protocol}//${subDomain}/uploads/${domain}/customers/attachment-notes/${customerId}/${block.file_url}`;
                                  const a = document.createElement("a");
                                  a.href = realFileUrl;
                                  a.download = getFileName(block.file_name);
                                  document.body.appendChild(a);
                                  a.click();
                                  a.remove();
                                }}
                              >
                                <Download className="w-4 h-4 mr-2" />
                                Download
                              </Button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
