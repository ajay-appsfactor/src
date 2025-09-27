"use client";

import { Button } from "@/components/ui/button";

const PaymentLink = () => {
  return (
    <div className="p-4 md:col-span-2">
      <h4 className="text-gray-800 font-semibold mb-2">Payment link</h4>
      <div className="text-sm text-gray-700">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border rounded bg-gray-50 p-2">
          <div className="truncate text-blue-800 font-medium text-sm">
            https://appsfactor.com/payment/abcde1234567890longlinkhere
          </div>
          <Button
            size="sm"
            className="bg-gray-800 hover:bg-gray-700 text-white w-full sm:w-auto text-sm cursor-pointer"
          >
            COPY LINK
          </Button>
        </div>
      </div>
    </div>
  );
};

export default PaymentLink;
