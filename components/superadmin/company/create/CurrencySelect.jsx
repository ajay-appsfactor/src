"use client";

import { useState, useEffect } from "react";
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
import { ChevronDown, Check } from "lucide-react";
import { toast } from "react-toastify";

export default function CurrencySelect({ setFieldValue, value }) {
  const [currencies, setCurrencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function fetchCurrencies() {
      try {
        const res = await fetch("/api/superadmin/master-list/currency");
        if (!res.ok) throw new Error("Failed to fetch currencies");
        const data = await res.json();
        setCurrencies(data.data || []);
      } catch (err) {
        console.error(err);
        toast.error("Failed to load currencies");
      } finally {
        setLoading(false);
      }
    }
    fetchCurrencies();
  }, []);

  if (loading)
    return (
      <p className="text-sm py-2 px-3 border border-gray-200 rounded-md text-gray-500">
        Loading currencies...
      </p>
    );

  const selectedCurrency = currencies.find((c) => c.code === value?.code);

  return (
    <div className="w-full">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="w-full justify-between text-gray-800"
          >
            {selectedCurrency
              ? `${selectedCurrency.name} (${selectedCurrency.symbol})`
              : "Select Currency"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>

        <PopoverContent
          className="p-0 z-50 w-[var(--radix-popover-trigger-width)] max-h-80 overflow-y-auto scroll-mt-16"
          align="start"
        >
          <Command>
            <CommandInput placeholder="Search currency..." />
            <CommandEmpty>No currency found.</CommandEmpty>
            <CommandGroup>
              {currencies.map((c) => (
                <CommandItem
                  key={c.code}
                  onSelect={() => {
                    setFieldValue("currency", c);
                    setOpen(false);
                  }}
                  className="cursor-pointer flex justify-between items-center"
                >
                  <span>
                    {c.name} ({c.symbol})
                  </span>

                  {selectedCurrency?.code === c.code && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </div>
  );
}
