"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";

const ACCEPTED_TYPES = [
  "application/pdf",
  "image/*",
  "text/plain",
  "text/csv",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
];

const ACCEPTED_TYPE_LABELS = {
  "application/pdf": "PDF",
  "image/*": "Images",
  "text/plain": "Text",
  "text/csv": "CSV",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": "Excel",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document": "Word",
};

const MAX_FILE_SIZE_MB = 50;

export default function ManualFileUploader({
  value = [],
  onChange,
  onError,
  maxFiles = 1,
}) {
  const [progressMap, setProgressMap] = useState({});

  const simulateUpload = (file) => {
    let progress = 0;
    const stepTime = 100;
    const interval = setInterval(() => {
      progress += 20;
      if (progress > 100) progress = 100;
      setProgressMap((prev) => ({ ...prev, [file.name]: progress }));
      if (progress >= 100) clearInterval(interval);
    }, stepTime);
  };

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

  const onDropRejected = useCallback(
    (fileRejections) => {
      const reason = fileRejections[0]?.errors[0];
      if (!reason) return;

      if (reason.code === "file-too-large") {
        onError?.("File exceeds 50MB limit.");
      } else if (reason.code === "file-invalid-type") {
        onError?.("Unsupported file type.");
      } else {
        onError?.("File upload failed.");
      }
    },
    [onError]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    onDropRejected,
    multiple: false,
    accept: {
      "application/pdf": [],
      "image/*": [],
      "text/plain": [],
      "text/csv": [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [],
    },
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
  });

  const removeFile = () => {
    onChange([]);
    setProgressMap({});
  };

  const renderFilePreview = (file) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={URL.createObjectURL(file)}
          alt={file.name}
          className="w-12 h-12 object-cover rounded-md border shrink-0"
        />
      );
    }

    return (
      <div className="w-12 h-12 flex items-center justify-center bg-muted rounded-md border text-xs font-semibold text-gray-600 shrink-0">
        FILE
      </div>
    );
  };

  return (
    <div className="space-y-4">
      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-500" : "hover:bg-muted/30"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm font-medium">Drag & drop your file here</p>
        <p className="text-xs text-gray-500">
          or click to browse (1 file only, max 50MB)
        </p>
        <div className="mt-2 text-[11px] text-muted-foreground text-center">
          <p className="mb-1">Supported file types:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {ACCEPTED_TYPES.map((type) => (
              <span
                key={type}
                className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground border text-xs"
              >
                {ACCEPTED_TYPE_LABELS[type]}
              </span>
            ))}
          </div>
        </div>
      </div>

      {value.length > 0 && (
        <div className="bg-gray-100 rounded-md p-4 flex items-center gap-4 overflow-hidden">
          <div className="flex items-start gap-4 flex-1 min-w-0">
            {renderFilePreview(value[0])}
            <div className="flex flex-col flex-1 space-y-1 overflow-hidden">
              <p className="font-medium text-sm truncate">{value[0].name}</p>
              <p className="text-xs text-gray-500">
                {(value[0].size / 1024 / 1024).toFixed(2)} MB
              </p>
              <Progress
                value={progressMap[value[0].name] || 0}
                className="h-1 w-full"
              />
            </div>
          </div>
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
