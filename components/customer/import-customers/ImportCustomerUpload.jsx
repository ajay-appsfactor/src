"use client";

import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";

const ACCEPTED_TYPES = [".csv", ".xlsx", ".xls"];
const ACCEPTED_TYPE_LABELS = {
  ".csv": "CSV",
  ".xlsx": "Excel (XLSX)",
  ".xls": "Excel (XLS)"
};

export default function ImportCustomerUpload({ file, setFile, isParsing }) {
  const [progress, setProgress] = useState(0);

  const onDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      const selected = acceptedFiles[0];
      setFile(selected);
      setProgress(0);

      // Simulate a fake upload progress
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            return 100;
          }
          return prev + 10;
        });
      }, 150);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: false,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [".xlsx"],
      "application/vnd.ms-excel": [".xls"],
      "text/csv": [".csv"]
    }
  });

  const removeFile = () => {
    setFile(null);
    setProgress(0);
  };

  return (
    <div className="w-full">
      <Label className="mb-2 block">xlsx, xls, csv file Allowed.</Label>

      <div
        {...getRootProps()}
        className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer transition ${
          isDragActive ? "bg-blue-50 border-blue-500" : "hover:bg-muted/30"
        }`}
      >
        <input {...getInputProps()} />
        <p className="text-sm font-medium">Drag & drop your file here</p>
        <p className="text-xs text-gray-500">
          or click to browse (1 file only, max 100MB)
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

      {file && (
        <div className="bg-gray-100 rounded-md p-4 mt-4 flex items-center gap-4">
          <div className="flex items-start gap-4 flex-1">
            <div className="text-2xl">📄</div>
            <div className="flex flex-col flex-1 space-y-1 overflow-hidden">
              <p className="font-medium text-sm truncate">{file.name}</p>
              <p className="text-xs text-gray-500">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
              <Progress value={progress} className="h-1 w-full" />
            </div>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="icon"
            onClick={removeFile}
            className="text-red-600 hover:text-white bg-red-100 hover:bg-red-500 border border-red-200 hover:border-red-600 rounded-full text-sm transition duration-200 shadow-sm cursor-pointer"
          >
            <X className="w-3 h-3" />
          </Button>
        </div>
      )}
    </div>
  );
}
