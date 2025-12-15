"use client";

import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";
import { useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const PaymentLink = () => {
  const [copied, setCopied] = useState(false);

  const link = "https://appsfactor.com/payment/abcde1234567890longlinkhere";

  const handleCopy = () => {
    navigator.clipboard.writeText(link).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // Reset after 1  seconds
    });
  };
  return (
    <div className="p-4 md:col-span-2">
      <h4 className="text-gray-800 font-semibold mb-2">Payment link</h4>

      <div className="text-sm text-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded bg-gray-50 p-2">
          <div className="truncate text-blue-800 font-medium text-sm">
            https://appsfactor.com/payment/abcde1234567890longlinkhere
          </div>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                size="sm"
                variant="outline"
                className="cursor-pointer"
                // className="bg-gray-800 hover:bg-gray-700 text-white w-full sm:w-auto text-sm cursor-pointer"
                onClick={handleCopy}
              >
                {copied ? <Check /> : <Copy />}
                {/* {copied ? " COPY LINK" : " COPY LINK"} */}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Copy Link</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
