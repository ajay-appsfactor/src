"use client";

import { useDropzone } from "react-dropzone";
import { useCallback, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

export const DropzoneField = ({ setFieldValue, value, error, touched }) => {
  const [progress, setProgress] = useState(0);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [localError, setLocalError] = useState("");

  const onDrop = useCallback(
    (acceptedFiles, fileRejections) => {
      setLocalError("");

      // Handle rejection error (file type/size)
      if (fileRejections.length > 0) {
        const reason = fileRejections[0].errors[0].message;
        setLocalError(reason);
        setFieldValue("attachments", null);
        setPreviewUrl(null);
        return;
      }

      if (acceptedFiles.length > 0) {
        const file = acceptedFiles[0];
        setFieldValue("attachments", file);
        setProgress(0);

        // Setup image preview if it's image
        if (file.type.startsWith("image/")) {
          const url = URL.createObjectURL(file);
          setPreviewUrl(url);
        } else {
          setPreviewUrl(null);
        }

        // Simulate progress
        const interval = setInterval(() => {
          setProgress((prev) => {
            if (prev >= 100) {
              clearInterval(interval);
              return 100;
            }
            return prev + 10;
          });
        }, 100);
      }
    },
    [setFieldValue]
  );

  const removeFile = () => {
    setFieldValue("attachments", null);
    setProgress(0);
    setPreviewUrl(null);
    setLocalError("");
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    maxSize: 50 * 1024 * 1024, // 50MB
    accept: {
      "application/pdf": [".pdf"],
      "image/png": [".png"],
      "image/jpeg": [".jpg", ".jpeg"],
    },
  });

  return (
    <div className="w-full">
      {/* Dropzone */}
      <div
        {...getRootProps()}
        className={`w-full border-2 border-dashed rounded-md p-5 flex flex-col items-center justify-center text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-500" : "hover:bg-muted/30"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm font-medium">Drag & drop a file here</p>
        <p className="text-xs text-gray-500">
          or click to select (PDF, PNG, JPG only, max 50MB)
        </p>
      </div>

      {/* Show errors */}
      {(error && touched) || localError ? (
        <p className="text-xs text-red-500 mt-1">
          {localError || error}
        </p>
      ) : null}

      {/* Preview and Progress */}
      {value && (
        <div className="w-full bg-gray-100 rounded-md p-4 mt-4 flex items-start gap-4">
          {/* Thumbnail */}
          <div className="w-14 h-14 flex-shrink-0 rounded-md bg-white border flex items-center justify-center overflow-hidden">
            {previewUrl ? (
              <img
                src={previewUrl}
                alt="preview"
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-xl">📄</span>
            )}
          </div>

          {/* Info */}
          <div className="flex flex-col flex-1 space-y-1 overflow-hidden">
            <p className="font-medium text-sm truncate">{value.name}</p>
            <p className="text-xs text-gray-500">
              {(value.size / 1024 / 1024).toFixed(2)} MB
            </p>
            <Progress value={progress} className="h-1 w-full" />
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
};
