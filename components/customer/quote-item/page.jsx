"use client";

import React, { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea"
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Command,
  CommandInput,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const service = [
  { value: "next.js", label: "Next.js" },
  { value: "sveltekit", label: "SvelteKit" },
  { value: "nuxt.js", label: "Nuxt.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
];

const material = [
  { value: "wood", label: "Wood" },
  { value: "metal", label: "Metal" },
  { value: "plastic", label: "Plastic" },
  { value: "glass", label: "Glass" },
];

const finish = [
  { value: "matte", label: "Matte" },
  { value: "glossy", label: "Glossy" },
  { value: "polished", label: "Polished" },
];

const QuoteItemID = ({quoteID}) => {
  const [serviceOpen, setServiceOpen] = useState(false);
  const [materialOpen, setMaterialOpen] = useState(false);
  const [finishOpen, setFinishOpen] = useState(false);

  const [serviceValue, setServiceValue] = useState("");
  const [materialValue, setMaterialValue] = useState("");
  const [finishValue, setFinishValue] = useState("");

  return (
    <div className="bg-white border border-gray-200 rounded w-full p-6">
      <div className="flex flex-wrap justify-start items-center gap-4 mb-4">
        <h2 className="text-md font-semibold text-slate-800">
          Quote Items : {quoteID} (Add More Items In This Quote)
        </h2>
      </div>
      <hr className="mb-8" />

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Service */}
        <div>
          <h2 className="mb-2 text-sm font-medium">Service</h2>
          <Popover open={serviceOpen} onOpenChange={setServiceOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={serviceOpen}
                className="w-full text-gray-500 hover:text-gray-600 justify-between cursor-pointer"
              >
                {serviceValue
                  ? service.find((s) => s.value === serviceValue)?.label
                  : "Select Service..."}
                <ChevronDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-0">
              <Command>
                <CommandInput placeholder="Search Service..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No service found.</CommandEmpty>
                  <CommandGroup>
                    {service.map((s) => (
                      <CommandItem
                        key={s.value}
                        value={s.value}
                        onSelect={(currentValue) => {
                          setServiceValue(
                            currentValue === serviceValue ? "" : currentValue
                          );
                          setServiceOpen(false);
                        }}
                      >
                        {s.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            serviceValue === s.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Material */}
        <div>
          <h2 className="mb-2 text-sm font-medium">Material</h2>
          <Popover open={materialOpen} onOpenChange={setMaterialOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={materialOpen}
                className="w-full text-gray-500 hover:text-gray-600 justify-between cursor-pointer"
              >
                {materialValue
                  ? material.find((m) => m.value === materialValue)?.label
                  : "Select Material..."}
                <ChevronDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search Material..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No material found.</CommandEmpty>
                  <CommandGroup>
                    {material.map((m) => (
                      <CommandItem
                        key={m.value}
                        value={m.value}
                        onSelect={(currentValue) => {
                          setMaterialValue(
                            currentValue === materialValue ? "" : currentValue
                          );
                          setMaterialOpen(false);
                        }}
                      >
                        {m.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            materialValue === m.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Finish */}
        <div>
          <h2 className="mb-2 text-sm font-medium">Finish</h2>
          <Popover open={finishOpen} onOpenChange={setFinishOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={finishOpen}
                className="w-full text-gray-500 hover:text-gray-600 justify-between cursor-pointer"
              >
                {finishValue
                  ? finish.find((f) => f.value === finishValue)?.label
                  : "Select Finish..."}
                <ChevronDown className="opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[340px] p-0">
              <Command>
                <CommandInput placeholder="Search Finish..." className="h-9" />
                <CommandList>
                  <CommandEmpty>No finish found.</CommandEmpty>
                  <CommandGroup>
                    {finish.map((f) => (
                      <CommandItem
                        key={f.value}
                        value={f.value}
                        onSelect={(currentValue) => {
                          setFinishValue(
                            currentValue === finishValue ? "" : currentValue
                          );
                          setFinishOpen(false);
                        }}
                      >
                        {f.label}
                        <Check
                          className={cn(
                            "ml-auto",
                            finishValue === f.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
        </div>

        {/* Button */}
        <div className="flex items-end">
          <Button className="md:w-28 sm:w-full bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center cursor-pointer">
            BULK APPLY
          </Button>
        </div>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto mt-5">
        <Table className="bg-white rounded-md shadow-sm border">
          <TableHeader className="sticky top-0 select-none">
            <TableRow>
              <TableHead className="w-12">S.NO.</TableHead>
              <TableHead className="border border-gray-200 min-w-[200px]">
                File Name
              </TableHead>
              <TableHead className="border border-gray-200 w-16">
                Quantity
              </TableHead>
              <TableHead className="border border-gray-200 min-w-[250px]">
                Methodology
              </TableHead>
              <TableHead className="border border-gray-200 min-w-[250px]">
                Description
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow className="hover:bg-gray-50">
              <TableCell className="font-medium text-slate-700 w-12 text-center">
                1
              </TableCell>
              <TableCell className="border border-gray-200 min-w-[200px]">
                customer_export_data.csv
              </TableCell>
              <TableCell className="border border-gray-200 text-center">
                {" "}
                <Badge variant="secondary" className="h-5 min-w-5 px-1 font-mono tabular-nums">2</Badge>
              </TableCell>
              <TableCell className="border border-gray-200 min-w-[250px]"></TableCell>
              <TableCell className="border border-gray-200 min-w-[250px]">
                <Textarea placeholder="Description"  />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default QuoteItemID;
