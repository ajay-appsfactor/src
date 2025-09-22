"use client";

import { useState } from "react";
import { Field, ErrorMessage } from "formik";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/command";
import { Label } from "@/components/ui/label";
import { ChevronDown, Check } from "lucide-react";
import { timezones } from "./timezone";


export default function TimezoneField({ setFieldValue, value }) {
  const [open, setOpen] = useState(false);

  const selectedTz = timezones
    .flatMap((g) => g.options)
    .find((tz) => tz.value === value);

  return (
    <div>
      <Label htmlFor="timezone" className="mb-2">
        Timezone<span className="text-rose-500">*</span>
      </Label>

      <Field name="timezone">
        {({ field, form }) => (
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-between text-gray-800"
              >
                {selectedTz ? selectedTz.label : "Select Timezone"}
                <ChevronDown className="ml-2 h-4 w-4" />
              </Button>
            </PopoverTrigger>

            <PopoverContent
              className="p-0 z-50 w-[var(--radix-popover-trigger-width)] max-h-80 overflow-y-auto"
              align="start"
            >
              <Command>
                <CommandInput placeholder="Search timezone..." />
                <CommandEmpty>No timezone found.</CommandEmpty>
                {timezones.map((group) => (
                  <CommandGroup key={group.group} heading={group.group}>
                    {group.options.map((tz) => (
                      <CommandItem
                        key={tz.value}
                        onSelect={() => {
                          form.setFieldValue("timezone", tz.value);
                          setOpen(false);
                        }}
                        className="cursor-pointer flex justify-between items-center"
                      >
                        <span>{tz.label}</span>
                        {field.value === tz.value && (
                          <Check className="h-4 w-4 text-green-600" />
                        )}
                      </CommandItem>
                    ))}
                  </CommandGroup>
                ))}
              </Command>
            </PopoverContent>
          </Popover>
        )}
      </Field>

      <ErrorMessage
        name="timezone"
        component="p"
        className="text-xs text-red-600 mt-1"
      />
    </div>
  );
}
