"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { X, FileIcon, Upload } from "lucide-react";

const MAX_FILE_SIZE_MB = 32;
const MAX_FILES = 20;

export default function FileUpload({ value, onChange, onError }) {
  const [files, setFiles] = useState(value || []);

  const onDrop = useCallback(
  (acceptedFiles, rejectedFiles) => {
    // console.log("Accepted files:", acceptedFiles);
    // console.log("Rejected files:", rejectedFiles);

    const errors = [];

    // Handle rejected files
    rejectedFiles.forEach((rej) =>
      rej.errors.forEach((e) => {
        if (e.code === "file-too-large") {
          errors.push(`${rej.file.name} exceeds ${MAX_FILE_SIZE_MB}MB.`);
        } else if (e.code === "file-invalid-type") {
          errors.push(`${rej.file.name} has invalid type.`);
        } else {
          errors.push(`${rej.file.name} upload failed.`);
        }
      })
    );

    // Propagate errors to Formik
    if (errors.length > 0) {
      onError?.(errors.join("\n"));
    } else {
      onError?.(""); 
    }

    // Only update accepted files
    if (acceptedFiles.length > 0) {
      setFiles(acceptedFiles);
      onChange?.(acceptedFiles);
    } else {
      setFiles([]);
      onChange?.([]);
    }
  },
  [onChange, onError]
);


  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024, // 32MB
  });

  const removeFile = (fileName) => {
    const updated = files.filter((f) => f.name !== fileName);
    setFiles(updated);
    onChange?.(updated);
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
        <Upload className="w-8 h-8 text-gray-500 mb-2" />
        <p className="text-sm font-medium">Drag & drop your files here</p>
        <p className="text-xs text-gray-500">
          or click to browse (Max {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each)
        </p>
        <div className="mt-2 text-[11px] text-muted-foreground text-center">
          <p className="mb-1">Supported file types:</p>
          <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground border text-xs">
            STEP, IGES, DWG, DXF, PDF, Images, Docs, CAD formats
          </span>
        </div>
      </div>

      {/* File list */}
      {files.length > 0 && (
        <div className="grid grid-cols-5 gap-3">
          {files.map((file) => (
            <div
              key={file.name}
              className="bg-gray-100 rounded-md p-3 flex flex-col items-center text-center"
            >
              <FileIcon className="w-8 h-8 text-gray-600 shrink-0" />

              {/* File name */}
              <p className="text-sm font-medium truncate w-full mt-2">
                {file.name}
              </p>

              {/* File size */}
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>

              {/* Progress bar */}
              {/* <Progress
                value={progressMap[file.name] || 0}
                className="h-1 w-full mt-2"
              /> */}

              {/* Remove button */}
              <Button
                type="button"
                variant="ghost"
                size="icon"
                onClick={() => removeFile(file.name)}
                className="cursor-pointer mt-2 text-red-600 hover:text-white bg-red-100 hover:bg-red-500 border border-red-200 hover:border-red-600 rounded-full transition"
              >
                <X className="w-3 h-3" />
              </Button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
