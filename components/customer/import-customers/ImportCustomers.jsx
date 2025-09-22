"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Papa from "papaparse";
import * as XLSX from "xlsx";

import { Button } from "@/components/ui/button";
import { ArrowLeft, Loader } from "lucide-react";
import { toast } from "react-toastify";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import ImportCustomerUpload from "@/components/customer/import-customers/ImportCustomerUpload";

export default function ImportCustomers() {
  const router = useRouter();

  const [file, setFile] = useState(null);
  const [fileUploaded, setFileUploaded] = useState(false);
  const [headers, setHeaders] = useState([]);
  const [mapping, setMapping] = useState({});
  const [isParsing, setIsParsing] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const requiredFields = ["First Name","Last Name", "Email"];
  const allFields = ["First Name","Last Name", "Email", "Phone", "Type", "Website", "Notes"];

  const handleFileChange = (e) => {
    const selected = e.target.files?.[0];
    if (!selected) return;
    setFile(selected);
    setFileUploaded(false);
    setHeaders([]);
    setMapping({});
  };

  const handleUploadFile = async () => {
    if (!file) {
      toast.error("Please upload a file.");
      return;
    }

    setIsParsing(true);

    try {
      const ext = file.name.split(".").pop().toLowerCase();
      const buffer = await file.arrayBuffer();
      let cols = [];

      if (ext === "csv") {
        const text = await file.text();
        const parsed = Papa.parse(text, { header: true });
        cols = Object.keys(parsed.data?.[0] || {});
      } else {
        const workbook = XLSX.read(buffer, { type: "array" });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json(sheet);
        cols = Object.keys(json?.[0] || {});
      }

      if (cols.length === 0) {
        toast.error("No headers found in the file.");
        setIsParsing(false);
        return;
      }

      setHeaders(cols);
      setFileUploaded(true);
    } catch (error) {
      toast.error("Failed to parse file headers.");
    } finally {
      setIsParsing(false);
    }
  };

  const handleMappingChange = (field, value) => {
    setMapping((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    const missing = requiredFields.filter((f) => !mapping[f]);
    if (missing.length > 0) {
      toast.error("Please map all required fields.");
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData();
    formData.append("file", file);
    formData.append("mapping", JSON.stringify(mapping));

    try {
      const res = await fetch("/api/customers/import-customer", {
        method: "POST",
        body: formData,
      });

      if (res.ok) {
        toast.success("Customers imported successfully.");
        router.push("/customers");
      } else {
        toast.error("Import failed. Please check your file and try again.");
      }
    } catch (err) {
      toast.error("Unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      {/* Header */}
      <div className="px-4 sm:px-6 py-2 max-w-7xl w-full">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between md:justify-start gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Import Customers
          </h2>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-sm w-full sm:w-auto cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <hr />

      {/* Main Content */}
      <div className="px-4 sm:px-6 py-6 max-w-8xl w-full flex flex-col lg:flex-row justify-between gap-6 lg:gap-8">
        {/* Upload File Section */}
        <div className="w-full lg:max-w-2xl">
          <h5 className="text-gray-800 font-semibold text-md mb-4">
            Upload your file here
          </h5>

          <ImportCustomerUpload
            file={file}
            setFile={(file) => {
              setFile(file);
              setFileUploaded(false);
              setHeaders([]);
              setMapping({});
            }}
            isParsing={isParsing}
          />

          <Button
            className="mt-4 w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-white cursor-pointer"
            onClick={handleUploadFile}
            disabled={!file || isParsing || fileUploaded}
          >
            {isParsing ? (
              <span className="flex items-center gap-2">
                <Loader className="w-4 h-4 animate-spin" />
                Parsing...
              </span>
            ) : (
              "Upload File"
            )}
          </Button>
        </div>

        {/* Map Fields Section */}
        {fileUploaded && headers.length > 0 && (
          <div className="w-full lg:max-w-2xl">
            <h3 className="text-md font-semibold mb-4">Map Fields</h3>

            <div className="space-y-4">
              {allFields.map((field) => (
                <div key={field} className="flex items-center gap-4">
                  {/* Left side: label */}
                  <div className="w-24 text-sm font-medium text-slate-700">
                    {field}
                    {requiredFields.includes(field) && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </div>

                  {/* Right side: select */}
                  <div className="flex-1">
                    <Select
                      value={mapping[field] || ""}
                      onValueChange={(value) =>
                        handleMappingChange(field, value)
                      }
                    >
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder={`Select ${field} column`} />
                      </SelectTrigger>
                      <SelectContent>
                        {headers.map((header) => (
                          <SelectItem key={header} value={header}>
                            {header}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              ))}
            </div>

            {/* Submit Button */}
            {requiredFields.every((f) => mapping[f]) && (
              <Button
                className="mt-6 cursor-pointer bg-gray-800 hover:bg-gray-700 mb-8"
                onClick={handleSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader className="w-4 h-4 animate-spin" />
                    Importing...
                  </span>
                ) : (
                  "Import Customers"
                )}
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
