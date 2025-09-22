"use client";

import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { X, FileIcon, Upload } from "lucide-react";
import { allowedExtensions } from "@/utils/allowedExtensions";

const MAX_FILE_SIZE_MB = 32;
const MAX_FILES = 10;

export default function FileUpload({ onChange, onError }) {
  const [files, setFiles] = useState([]);
  const [progressMap, setProgressMap] = useState({});

  // Validate files
  const validateFiles = (files) => {
    const errors = [];
    const validFiles = [];

    if (files.length > MAX_FILES) {
      errors.push(`You can upload a maximum of ${MAX_FILES} files.`);
      return { errors, validFiles };
    }

    const isZipOnly =
      files.length === 1 && files[0].name.toLowerCase().endsWith(".zip");

    if (isZipOnly) {
      if (files[0].size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        errors.push("ZIP file exceeds 32MB limit.");
      } else {
        validFiles.push(files[0]);
      }
      return { errors, validFiles };
    }

    for (let file of files) {
      const ext = file.name.split(".").pop().toLowerCase();

      if (ext === "zip") {
        errors.push(`${file.name} - ZIP not allowed in multi-file upload.`);
        continue;
      }

      if (!allowedExtensions.includes(ext)) {
        errors.push(`${file.name} - Unsupported file type.`);
        continue;
      }

      if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
        errors.push(`${file.name} exceeds 32MB limit.`);
        continue;
      }

      validFiles.push(file);
    }

    return { errors, validFiles };
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      const { errors, validFiles } = validateFiles(acceptedFiles);
      if (errors.length > 0) {
        onError?.(errors.join("\n"));
      }
      if (validFiles.length > 0) {
        setFiles(validFiles);
        setProgressMap({});
        onChange?.(validFiles);
      }
    },
    [onError, onChange]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    multiple: true,
    maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
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

// "use client";

// import { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";
// import { Button } from "@/components/ui/button";
// import { Progress } from "@/components/ui/progress";
// import { X, FileIcon } from "lucide-react";
// import { allowedExtensions } from "@/utils/allowedExtensions";

// const MAX_FILE_SIZE_MB = 32;
// const MAX_FILES = 10;

// export default function CustomerQuoteUpload({ value = [], onChange, onError }) {
//   const [progressMap, setProgressMap] = useState({});

//   //  Simulate Upload Progress
//   const simulateUpload = (file) => {
//     let progress = 0;
//     const interval = setInterval(() => {
//       progress += 5;
//       if (progress > 100) progress = 100;
//       setProgressMap((prev) => ({ ...prev, [file.name]: progress }));
//       if (progress === 100) clearInterval(interval);
//     }, 100);
//   };

//   // Validate uploaded files
//   const validateFiles = (files) => {
//     const errors = [];
//     const validFiles = [];

//     if (files.length > MAX_FILES) {
//       errors.push(` You can upload a maximum of ${MAX_FILES} files.`);
//       return { errors, validFiles };
//     }

//     const isZipOnly =
//       files.length === 1 && files[0].name.toLowerCase().endsWith(".zip");

//     if (isZipOnly) {
//       if (files[0].size > MAX_FILE_SIZE_MB * 1024 * 1024) {
//         errors.push(" ZIP file exceeds 32MB limit.");
//       } else {
//         validFiles.push(files[0]);
//       }
//       return { errors, validFiles };
//     }

//     // Multiple non-ZIP files
//     for (let file of files) {
//       const ext = file.name.split(".").pop().toLowerCase();

//       if (ext === "zip") {
//         errors.push(` ${file.name} - ZIP not allowed in multi-file upload.`);
//         continue;
//       }

//       if (!allowedExtensions.includes(ext)) {
//         errors.push(` ${file.name} - Unsupported file type.`);
//         continue;
//       }

//       if (file.size > MAX_FILE_SIZE_MB * 1024 * 1024) {
//         errors.push(` ${file.name} exceeds 32MB limit.`);
//         continue;
//       }

//       validFiles.push(file);
//     }

//     return { errors, validFiles };
//   };

//   const onDrop = useCallback(
//     (acceptedFiles) => {
//       const { errors, validFiles } = validateFiles(acceptedFiles);
//       if (errors.length > 0) {
//         onError?.(errors.join("\n"));
//       }
//       if (validFiles.length > 0) {
//         onChange(validFiles);
//         setProgressMap({});
//         validFiles.forEach((f) => simulateUpload(f));
//       }
//     },
//     [onChange, onError]
//   );

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     multiple: true,
//     maxSize: MAX_FILE_SIZE_MB * 1024 * 1024,
//   });

//   const removeFile = (fileName) => {
//     const updated = value.filter((f) => f.name !== fileName);
//     onChange(updated);
//     setProgressMap((prev) => {
//       const copy = { ...prev };
//       delete copy[fileName];
//       return copy;
//     });
//   };

//   return (
//     <div className="space-y-4">
//       {/* Upload Box */}
//       <div
//         {...getRootProps()}
//         className={`border-2 border-dashed rounded-md p-6 flex flex-col items-center justify-center text-center cursor-pointer transition ${
//           isDragActive ? "bg-blue-50 border-blue-500" : "hover:bg-muted/30"
//         }`}
//       >
//         <input {...getInputProps()} />
//         <p className="text-sm font-medium">Drag & drop your files here</p>
//         <p className="text-xs text-gray-500">
//           or click to browse (Max {MAX_FILES} files, {MAX_FILE_SIZE_MB}MB each)
//         </p>
//         <div className="mt-2 text-[11px] text-muted-foreground text-center">
//           <p className="mb-1">Supported file types:</p>
//           <span className="px-2 py-0.5 rounded-full bg-muted text-muted-foreground border text-xs">
//             STEP, IGES, DWG, DXF, PDF, Images, Docs, CAD formats
//           </span>
//         </div>
//       </div>

//       {/* File Preview List */}
//       {value.length > 0 && (
//         <div className="space-y-3">
//           {value.map((file) => (
//             <div
//               key={file.name}
//               className="bg-gray-100 rounded-md p-3 flex items-center gap-3"
//             >
//               <FileIcon className="w-6 h-6 text-gray-500 shrink-0" />
//               <div className="flex-1 min-w-0">
//                 <p className="text-sm font-medium truncate">{file.name}</p>
//                 <p className="text-xs text-gray-500">
//                   {(file.size / 1024 / 1024).toFixed(2)} MB
//                 </p>
//                 <Progress
//                   value={progressMap[file.name] || 0}
//                   className="h-1 w-full mt-1"
//                 />
//               </div>
//               <Button
//                 type="button"
//                 variant="ghost"
//                 size="icon"
//                 onClick={() => removeFile(file.name)}
//                 className="text-red-600 hover:text-white bg-red-100 hover:bg-red-500 border border-red-200 hover:border-red-600 rounded-full transition"
//               >
//                 <X className="w-4 h-4" />
//               </Button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
