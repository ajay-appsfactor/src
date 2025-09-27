"use client";

import { Button } from "@/components/ui/button";

const FilesDownload = () => {
  return (
    <div className="flex flex-wrap gap-2 px-4 mt-4">
      <Button className="bg-gray-100 text-slate-800 hover:bg-gray-200" size="sm">
        Download Original Models
      </Button>
      <Button className="bg-gray-100 text-slate-800 hover:bg-gray-200" size="sm">
        Download Repaired Models
      </Button>
      <Button className="bg-gray-100 text-slate-800 hover:bg-gray-200" size="sm">
        Change Model
      </Button>
    </div>
  );
};

export default FilesDownload;
