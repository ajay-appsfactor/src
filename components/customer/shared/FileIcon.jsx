import { FileText, Image as ImageIcon, File } from "lucide-react";

function getFileIcon(ext) {
  switch (ext) {
    case "pdf":
    case "txt":
      return <FileText className="text-red-500 w-5 h-5" />;
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":
      return <ImageIcon className="text-blue-500 w-5 h-5" />;
    default:
      return <File className="text-gray-500 w-5 h-5" />;
  }
}

export function FileIcon({ fileUrl }) {
  try {
    const ext = fileUrl.split(".").pop()?.toLowerCase();
    return getFileIcon(ext);
  } catch {
    return <File className="w-5 h-5 text-gray-400" />;
  }
}
