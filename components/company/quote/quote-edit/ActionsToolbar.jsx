"use client";

import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import {
  File,
  FileText,
  Send,
  ClipboardList,
  BadgeCheck,
  RotateCcw,
  Receipt,
  Book,
  Copy,
} from "lucide-react";

const ActionsToolbar = () => {
  return (
    <div className="flex items-center sm:justify-start md:justify-end mb-6 overflow-x-auto p-4">
      <div className="flex flex-wrap gap-2 sm:justify-start md:justify-end">
        {/* RFQ */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <File className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>RFQ</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate RFQ
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Invoice  */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <FileText className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Invoice</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate Invoice
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* PO */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <Send className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>PO</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate Purchase Order
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* COFC */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <BadgeCheck className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>COFC</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate Certificate of Conformance
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* TRV */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <ClipboardList className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>TRV</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate Traveler
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* RMA */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>RMA</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate RMA
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* CO */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <Receipt className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>CO</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Generate Confirmation Order
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>
        {/* PI */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <Book className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>PI</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">
                Partial Invoice
              </h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Copy Order */}
        <HoverCard openDelay={100} closeDelay={200}>
          <HoverCardTrigger asChild>
            <Button
              variant="outline"
              className="flex items-center gap-1 text-xs sm:text-sm cursor-pointer"
            >
              <Copy className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Copy Order</span>
            </Button>
          </HoverCardTrigger>
          <HoverCardContent className="w-64">
            <div className="flex flex-col gap-2">
              {/* Heading */}
              <h4 className="text-sm text-center font-semibold">Copy Order</h4>
              {/* View */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                VIEW
              </Button>
              {/* Download */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                DOWNLOAD
              </Button>
              {/* Email Customer */}
              <Button size="sm" variant="outline" className="cursor-pointer">
                EMAIL CUSTOMER
              </Button>
            </div>
          </HoverCardContent>
        </HoverCard>

        {/* Actions Buttons */}
        <Button className="cursor-pointer flex items-center gap-1 text-xs sm:text-sm">
          <Send className="w-3 h-3 sm:w-4 sm:h-4" />
          <span>Send offer</span>
        </Button>
      </div>
    </div>
  );
};

export default ActionsToolbar;
