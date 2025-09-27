"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import ModelImg from "../../../../../public/model.jpg";
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
  Trash,
} from "lucide-react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";

const QuoteEdit = () => {
  return (
    <div className="bg-white rounded border border-gray-200">
      {/* Order Info */}
      <div className="p-4">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800">Order #315</h2>
        </div>
      </div>
      <hr className="mb-8" />
      <div>
        {/* Send offers */}
        <div className="flex items-center sm:justify-start md:justify-end mb-6 overflow-x-auto p-4">
          <div className="flex flex-wrap gap-2 sm:justify-start md:justify-end">
            {/* RFQ */}
            <HoverCard openDelay={50}>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Invoice  */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* PO */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* COFC */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* TRV */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* RMA */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* CO */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>
            {/* PI */}
            <HoverCard>
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
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    EMAIL CUSTOMER
                  </Button>
                </div>
              </HoverCardContent>
            </HoverCard>

            {/* Copy Order */}
            <HoverCard>
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
                  <h4 className="text-sm text-center font-semibold">
                    Copy Order
                  </h4>
                  {/* View */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    VIEW
                  </Button>
                  {/* Download */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
                    DOWNLOAD
                  </Button>
                  {/* Email Customer */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="cursor-pointer"
                  >
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
        {/* Order Info Header */}
        <div className="border-t border-b p-4">
          {/* <h2 className="text-md font-semibold text-slate-800 pb-2">
            May 23, 2025 12:00 PM
          </h2> */}
          <div className="flex flex-wrap gap-6">
            {[
              { label: "Placed", value: "May 30, 2025 12:00 PM" },
              { label: "Grand Total", value: "$1.245" },
              { label: "Tax", value: "0.00%" },
              { label: "Discount", value: "0.00%" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-sm text-gray-800"
              >
                <span className="font-medium">{item.label}:</span>
                <span className="text-blue-800 font-semibold flex items-center gap-1">
                  {item.value}
                </span>
              </div>
            ))}

            <div className="text-sm text-blue-800 font-semibold cursor-pointer">
              Add services
            </div>
          </div>
        </div>

        {/* Customer / Delivery / Notes Section */}
        <div className="grid sm:grid-cols-1 md:grid-cols-4 md:divide-y-0 md:divide-x">
          {/* Customer */}
          <div className="p-4 col-span-1">
            <h4 className="text-gray-800 font-semibold mb-2">
              Billing Details
            </h4>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Name: Ajay Kumar</div>
              <div>Phone: +918191041371</div>
              <div>Email: ajay@gmail.com</div>
              <div>Billing address:</div>
              <div>Jamapur kalan, Jwalapur, Haridwar, Uttarakhand</div>
            </div>
          </div>

          {/* Delivery */}
          <div className="p-4 col-span-1">
            <h4 className="text-gray-800 font-semibold mb-2">
              Delivery Details
            </h4>
            <div className="text-sm text-gray-700 space-y-1">
              <div>Delivery address</div>
              <div>Ranipur Mood, Haridwar, Uttarakhand</div>
              <div>Delivery Type: Pick up</div>
              <div>Delivery Price: $300</div>
              <div className="flex gap-2">
                <span>Tracking:</span>
                <span className="text-blue-800 font-semibold">Not set</span>
              </div>
            </div>
          </div>

          {/* Client Notes */}
          <div className="p-4 col-span-2">
            <h4 className="text-gray-800 font-semibold mb-2">Client Notes</h4>
            <p className="text-sm text-gray-700 mb-2">
              Those are the hex codes of the colors to be used on dark and light
              backgrounds.
            </p>
            <div className="text-blue-800 font-semibold text-sm cursor-pointer">
              specs.pdf
            </div>
          </div>
        </div>

        {/* Internal Notes / Payment Link */}
        <div className="border-t  grid grid-cols-1 md:grid-cols-4  md:divide-y-0 md:divide-x">
          {/* Internal Notes */}
          <div className="p-4 md:col-span-2">
            <h4 className="text-gray-800 font-semibold mb-2">Internal Notes</h4>
            <div className="text-sm text-gray-700 space-y-1">
              <p>Those are the hex codes of the colors to be used.</p>
              <div className="text-blue-800 text-sm font-semibold cursor-pointer">
                Edit notes
              </div>
            </div>
          </div>

          {/* Payment Link */}
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
        </div>

        {/* Models Section */}
        <div className=" border-t-1 border-b-1">
          <h2 className="text-md font-semibold text-slate-800 pb-2 px-4 pt-4">
            Models
          </h2>
          <div className="px-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">Select</TableHead>
                  <TableHead>Model</TableHead>
                  <TableHead>Model Name</TableHead>
                  <TableHead>Material</TableHead>
                  <TableHead>Specification</TableHead>
                  <TableHead>Production</TableHead>
                  <TableHead>Post Production</TableHead>
                  <TableHead>Priority</TableHead>
                  <TableHead>Quantity</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Image
                      className="rounded"
                      src={ModelImg}
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                  </TableCell>
                  <TableCell className=" text-blue-600">PSOH name_1</TableCell>
                  <TableCell>VisiJet PXL</TableCell>
                  <TableCell>
                    {" "}
                    Layer: 200μm
                    <br />
                    Filling: 100%
                  </TableCell>
                  <TableCell className=" text-blue-600">$150</TableCell>
                  <TableCell className=" text-blue-600">$150</TableCell>
                  <TableCell className=" text-blue-600">$150</TableCell>
                  <TableCell>2</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Image
                      className="rounded"
                      src={ModelImg}
                      width={80}
                      height={80}
                      alt="Picture of the author"
                    />
                  </TableCell>
                  <TableCell className=" text-blue-600">PSOH name_2</TableCell>
                  <TableCell>VisiJet PXL</TableCell>
                  <TableCell>
                    {" "}
                    Layer: 100μm
                    <br />
                    Filling: 600%
                  </TableCell>
                  <TableCell className=" text-blue-600">$150</TableCell>
                  <TableCell className=" text-blue-600">$250</TableCell>
                  <TableCell className=" text-blue-600">$150</TableCell>
                  <TableCell>5</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>

        {/* Files Download */}
        <div className="flex flex-wrap gap-2 px-4 mt-4">
          <Button
            className="bg-gray-100 text-slate-800 hover:bg-gray-200 hover:text-slate-700"
            size="sm"
          >
            Download Original Models
          </Button>
          <Button
            className="bg-gray-100 text-slate-800 hover:bg-gray-200 hover:text-slate-700"
            size="sm"
          >
            Download Repaired Models
          </Button>
          <Button
            className="bg-gray-100 text-slate-800 hover:bg-gray-200 hover:text-slate-700"
            size="sm"
          >
            Change Model
          </Button>
        </div>

        {/* Delete Button */}
        <div className="mt-6 mb-5 px-4 text-start">
          <Button
            size="sm"
            variant="outline"
            className="flex items-center gap-2 text-red-800 hover:text-red-900"
          >
            <Trash className="w-4 h-4" />
            <span>Delete Order</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default QuoteEdit;
