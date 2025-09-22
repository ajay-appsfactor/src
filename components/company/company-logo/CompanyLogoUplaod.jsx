"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

const MAX_FILE_SIZE_MB = 50;

export default function CompanyLogoUploader({
  value = [],
  onChange,
  onError,
  maxFiles = 1,
}) {
  const [progressMap, setProgressMap] = useState({});

  // Simulate upload progress
  const simulateUpload = (file) => {
    setProgressMap((prev) => ({ ...prev, [file.name]: 0 }));
    setTimeout(() => {
      setProgressMap((prev) => ({ ...prev, [file.name]: 100 }));
    }, 100);
  };

  // Handle file drop
  const onDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (!file) return;

      onChange([file]);
      setProgressMap({});
      simulateUpload(file);
    },
    [onChange]
  );

  // Handle rejected files
  const onDropRejected = useCallback(
    (fileRejections) => {
      const reason = fileRejections[0]?.errors[0];
      if (!reason) return;

      if (reason.code === "file-too-large") {
        onError?.("File exceeds 50MB limit.");
      } else if (reason.code === "file-invalid-type") {
        onError?.("Only images are allowed.");
      } else {
        onError?.("File upload failed.");
      }
    },
    [onError]
  );

  // Dropzone config
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: {
      "image/jpeg": [],
      "image/png": [],
      "image/gif": [],
      "image/webp": [],
      "image/svg+xml": [],
    },
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
  });

  // Remove file
  const removeFile = () => {
    onChange([]);
    setProgressMap({});
  };

  return (
    <div className="space-y-4">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-500" : "hover:bg-muted/30"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm font-medium">Drag & drop your logo here</p>
        <p className="text-xs text-gray-500">
          or click to browse (1 image only, max 50MB)
        </p>
        <div className="mt-2 text-[11px] text-muted-foreground text-center">
          <p className="mb-1">Supported file types:</p>
          <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground border text-xs">
            Images (JPG, PNG, GIF, WebP, SVG)
          </span>
        </div>
      </div>

      {/* Preview */}
      {value.length > 0 && (
        <div className="bg-gray-100 rounded-md p-4 flex items-center gap-4 overflow-hidden">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            <img
              src={
                value[0] instanceof File
                  ? URL.createObjectURL(value[0])
                  : `${value[0].url}?t=${Date.now()}`
              }
              alt={value[0] instanceof File ? value[0].name : "company logo"}
              className="w-12 h-12 object-cover rounded-md border shrink-0"
            />
            <div className="flex flex-col flex-1 space-y-1 overflow-hidden">
              <p className="font-medium text-sm truncate">
                {value[0] instanceof File
                  ? value[0].name
                  : value[0].name || "Logo"}
              </p>
              { value[0].size && (
                <p className="text-xs text-gray-500">
                  {(value[0].size / 1024).toFixed(2)} KB
                </p>
              )}
              <Progress
                value={progressMap[value[0].name] || 100}
                className="h-1 w-full transition-all duration-200 ease-in-out"
              />
            </div>
          </div>

          {/* Remove button */}
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={removeFile}
            className="text-red-600 hover:text-white bg-red-100 hover:bg-red-500 border border-red-200 hover:border-red-600 rounded-full text-sm transition duration-200 shadow-sm cursor-pointer"
          >
            <X className="w-4 h-4" />
          </Button>
        </div>
      )}
    </div>
  );
}
