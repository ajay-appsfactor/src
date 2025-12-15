"use client";

import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";

import { useState } from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { Button } from "@/components/ui/button";
import { Loader, Save, CirclePlus } from "lucide-react";
import { toast } from "react-toastify";
import CustomerQuoteUpload from "../../../../customer/create-quote/quote-upload/QuoteUpload";

const AddNewItem = ({ children, quoteId, onSuccess  }) => {
  // const quoteId = quoteId;
  const [open, setOpen] = useState(false);
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
      formData.append("customerId",quoteId );

      const res = await fetch(`/api/company/quotes/${quoteId}/add-new-item`, {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (!res.ok) {
        toast.error(data.error || "Upload failed");
      } else {
        toast.success(data.message || "Files uploaded successfully.");
        resetForm();
        setOpen(false);
        onSuccess?.();
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="mt-6 mb-5 px-4 text-start">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{children}</DialogTrigger>

        <DialogContent className="max-w-[95vw] sm:!max-w-screen-xl w-full p-4">
          <DialogHeader>
            <DialogTitle>
              <div className="flex items-center gap-2">
                <CirclePlus className="h-5 w-5" /> <span>Add New Item</span>
              </div>
            </DialogTitle>
          </DialogHeader>

          <Formik
            initialValues={{ files: [] }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              values,
              setFieldValue,
              setFieldError,
              
              errors,
              touched,
            }) => (
              <Form className="bg-white rounded-md" noValidate>
                {/* File Upload */}
                <div className="px-4 sm:px-6 max-w-8xl w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
                  <div className="w-full">
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
                      <p className="text-xs mt-1 text-red-500">
                        {errors.files}
                      </p>
                    ) : null}

                    {/* Submit */}
                    <div className="sm:col-span-2 text-right mt-5 mb-5"></div>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" className="cursor-pointer">
                      Cancel
                    </Button>
                  </DialogClose>
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
                  {/* <Button
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
                  </Button> */}
                </DialogFooter>
              </Form>
            )}
          </Formik>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AddNewItem;
