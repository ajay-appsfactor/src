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
import RFQActions from "./RFQ/RFQActions";
import InvoiceActions from "./Invoice/InvoiceActions";
import PurchaseActions from "./PO/PurchaseActions";
import CertificateConformance from "./COFC/CertificateConformance";
import Traveller from "./TRV/Traveller";
import RMA from "./RMA/RMA";
import ConfirmationOrder from "./CO/ConfirmationOrder";
import PartialInvoice from "./PI/PartialInvoice";
import CopyOrder from "./CopyOrder/CopyOrder";
import SendOffer from "./SendOffer/SendOffer";

const ActionsToolbar = ({ data }) => {
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
            {/* RFQ Actions */}
            <RFQActions data={data} />
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
            {/* Invoice Actions */}
            <InvoiceActions data={data} />
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
            {/* Purchase Actions */}
            <PurchaseActions data={data} />
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
            <CertificateConformance data={data} />
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
            <Traveller data={data} />
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
            <RMA data={data} />
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
            <ConfirmationOrder data={data} />
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
            <PartialInvoice data={data} />
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
            <CopyOrder data={data} />
          </HoverCardContent>
        </HoverCard>

        {/* Actions Buttons */}
        <SendOffer data={data}>
          <Button className="cursor-pointer flex items-center gap-1 text-xs sm:text-sm">
            <Send className="w-3 h-3 sm:w-4 sm:h-4" />
            <span>Send offer</span>
          </Button>
        </SendOffer>
      </div>
    </div>
  );
};

export default ActionsToolbar;
