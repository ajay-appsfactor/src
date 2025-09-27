"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader, Save } from "lucide-react";
import CustomerQuoteUpload from "./quote-upload/QuoteUpload";

export default function CreateQuotePage({ customer }) {
  const router = useRouter();
  const customerId = customer?.id;
  const customerName = customer?.customer_name;
  const customerEmail = customer?.email || "UNKNOWN";
  const [fileError, setFileError] = useState("");

  // Yup validation
  const validationSchema = Yup.object().shape({
    files: Yup.array()
      .min(1, "Please upload at least one file")
      .test(
        "fileSize",
        "Each file must be smaller than 32MB",
        (files) => files && files.every((file) => file.size <= 32 * 1024 * 1024)
      )
      .test(
        "zipOrNoZip",
        "Either upload one .zip OR multiple files (but not including a .zip)",
        (files) => {
          if (!files || files.length === 0) return false;
          const zipFiles = files.filter((f) =>
            f.name.toLowerCase().endsWith(".zip")
          );
          if (zipFiles.length > 0) {
            return files.length === 1;
          }
          return true;
        }
      ),
  });

  // Submit handler
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const formData = new FormData();
      values.files.forEach((file) => formData.append("files", file));
      formData.append("customerId", customerId);

      const res = await fetch(`/api/customer/edit/${customerId}/quote/upload`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Upload failed");
      } else {
        toast.success(data.message || "Files uploaded successfully.");
        resetForm();
        router.push(`/quote/${data.quote_id}`);
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={{ files: [] }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        setFieldValue,
        setFieldError,
        isSubmitting,
        errors,
        touched,
      }) => (
        <Form className="bg-white rounded-md" noValidate>
          {/* Header */}
          <div className="px-4 sm:px-6 py-2 max-w-7xl w-full">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:justify-start gap-4">
              <h2 className="text-lg font-semibold text-slate-800">
                Create Quote - {customerName} ({customerEmail})
              </h2>
              <Button
                onClick={() => router.back()}
                type="button"
                variant="outline"
                className="text-sm w-full sm:w-auto cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back
              </Button>
            </div>
          </div>

          <hr />

          {/* Instructions */}
          <div className="px-4 sm:px-6 py-6">
            <p className="text-sm text-slate-800">
              1. Please upload a single .zip file with all your files in it.
            </p>
            <p className="text-sm text-slate-800">
              2. Alternatively, you can upload all your files unzipped. But do
              not include a .zip file.
            </p>
            <p className="text-sm text-slate-800">
              3. Please ensure your upload does not exceed 32MB.
            </p>
          </div>

          {/* File Upload */}
          <div className="px-4 sm:px-6 max-w-8xl w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
            <div className="w-full lg:max-w-2xl">
              <h5 className="text-gray-800 font-semibold text-md mb-4">
                Upload your file here
              </h5>

              <CustomerQuoteUpload
                value={values.files}
                onChange={(newFiles) => {
                  setFieldValue("files", newFiles);
                  setFieldError("");
                }}
                onError={(msg) => {
                  setFieldError("files", msg);
                  setFileError(msg);
                }}
              />

              {/* ErrorMessage from Formik */}
              {fileError ? (
                <p className="text-xs mt-1 text-red-500">{fileError}</p>
              ) : errors.files && touched.files ? (
                <p className="text-xs mt-1 text-red-500">{errors.files}</p>
              ) : null}

              {/* Submit */}
              <div className="sm:col-span-2 text-right mt-5 mb-5">
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
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}
