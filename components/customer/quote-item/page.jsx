"use client";

import React, { useState, useEffect } from "react";
import { Check, ChevronDown, Loader } from "lucide-react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";

const QuoteItemsForm = ({ quoteId }) => {
  console.log("Quote Id is :", quoteId);
  const router = useRouter();
  const [allServices, setAllServices] = useState([]);
  const [quoteItems, setQuoteItems] = useState([]);
  const [quoteMeta, setQuoteMeta] = useState({
    created_month: "",
    created_year: "",
    quote_item_id: null,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Bulk dropdown states
  const [serviceValue, setServiceValue] = useState("");
  const [materialValue, setMaterialValue] = useState("");
  const [finishValue, setFinishValue] = useState("");

  // Dropdown open states
  const [serviceOpen, setServiceOpen] = useState(false);
  const [materialOpen, setMaterialOpen] = useState(false);
  const [finishOpen, setFinishOpen] = useState(false);

  // Per-row open states
  const [rowServiceOpen, setRowServiceOpen] = useState({});
  const [rowMaterialOpen, setRowMaterialOpen] = useState({});
  const [rowFinishOpen, setRowFinishOpen] = useState({});

  // Fetch quote items
  useEffect(() => {
    if (!quoteId) return;
    const fetchQuoteItems = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/company/quotes/${quoteId}`);
        if (!res.ok) throw new Error(`Failed to fetch: ${res.status}`);
        const data = await res.json();
        // console.log("fetchQuoteItems :", data);
        // Store the array of items
        const itemsArray = Array.isArray(data?.QuoteItems)
          ? data.QuoteItems
          : [];
        setQuoteItems(itemsArray);

        // SetQuoteMeta Data
        setQuoteMeta({
          created_month: data?.created_month || "",
          created_year: data?.created_year || "",
          quote_item_id: data?.quote_item_id || null,
        });

        // setQuoteItems(data);
      } catch (err) {
        setError("Failed to load quote items.");
      } finally {
        setLoading(false);
      }
    };
    fetchQuoteItems();
  }, [quoteId]);

  // Fetch services setup
  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("/api/company/quotes/services-setup");
        const data = await res.json();
        if (data.success) {
          setAllServices(data.data);
        }
      } catch (err) {
        console.error(err);
      }
    };
    fetchServices();
  }, []);

  const handleServiceSelect = (serviceId) => {
    setServiceValue(serviceId);
    const selected = allServices.find((s) => s.id === serviceId);
    if (selected) {
      setMaterialValue("");
      setFinishValue("");
    }
    setServiceOpen(false);
  };

  const initialValues = {
    items: quoteItems.map((item) => ({
      id: item.id,
      file_name: item.file_name,
      quantity: item.quantity || 1,
      description: item.description || "",
      service: item.service || "",
      material: item.material || "",
      finish: item.finish || "",
    })),
  };

  const validationSchema = Yup.object().shape({
    items: Yup.array().of(
      Yup.object().shape({
        quantity: Yup.number()
          .required("Required")
          .min(1, "Quantity must be at least 1"),
        description: Yup.string(),
      })
    ),
  });

  const onSubmit = async (values) => {
    // console.log("Submit values:", values);

    const itemsWithNames = values.items.map((item) => {
      const service = allServices.find((s) => s.id === item.service);
      return {
        ...item,
        service: service ? service.name : "",
      };
    });

    try {
      const res = await fetch(`/api/company/quotes/${quoteId}/items`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          created_month: quoteMeta.created_month,
          created_year: quoteMeta.created_year,
          items: itemsWithNames,
        }),
      });
      if (!res.ok) throw new Error("Failed to save.");
      toast.success("Quote items updated successfully.");
      router.push(`/quote/${quoteId}/edit`);
    } catch (err) {
      // console.error(err);
      toast.error("Error saving quote items.");
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Loader className="animate-spin w-6 h-6 text-slate-700" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-64">
        <p className="text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded w-full p-6">
      <h2 className="text-md font-semibold text-slate-800 mb-4">
        Quote Items : {quoteMeta.quote_item_id} (Add More Items In This Quote)
      </h2>

      <Formik
        enableReinitialize
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, isSubmitting }) => (
          <Form>
            {/* Bulk Dropdowns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
              <Dropdown
                label="Service"
                options={allServices.map((s) => ({
                  value: s.id,
                  label: s.name,
                }))}
                value={serviceValue}
                setValue={handleServiceSelect}
                open={serviceOpen}
                setOpen={setServiceOpen}
              />
              <Dropdown
                label="Material"
                options={
                  allServices
                    .find((s) => s.id === serviceValue)
                    ?.materials.map((m) => ({
                      value: m.name,
                      label: m.name,
                    })) || []
                }
                value={materialValue}
                setValue={setMaterialValue}
                open={materialOpen}
                setOpen={setMaterialOpen}
              />
              <Dropdown
                label="Finish"
                options={
                  allServices
                    .find((s) => s.id === serviceValue)
                    ?.finishes.map((f) => ({ value: f.name, label: f.name })) ||
                  []
                }
                value={finishValue}
                setValue={setFinishValue}
                open={finishOpen}
                setOpen={setFinishOpen}
              />
              <div className="flex items-end">
                <Button
                  type="button"
                  className="w-full md:w-28 bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 flex gap-2 items-center justify-center cursor-pointer"
                  onClick={() => {
                    const newItems = values.items.map((item) => ({
                      ...item,
                      service: serviceValue,
                      material: materialValue,
                      finish: finishValue,
                    }));
                    setFieldValue("items", newItems);
                  }}
                >
                  BULK APPLY
                </Button>
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <Table className="bg-white shadow-sm table-fixed w-full">
                <TableHeader className="sticky top-0 bg-muted z-10">
                  <TableRow>
                    <TableHead className="w-12 border border-gray-200">
                      S.NO.
                    </TableHead>
                    <TableHead className="border border-gray-200 w-[250px]">
                      File Name
                    </TableHead>
                    <TableHead className="border border-gray-200 w-[150px]">
                      Quantity
                    </TableHead>
                    <TableHead className="border border-gray-200 w-[250px]">
                      Methodology
                    </TableHead>
                    <TableHead className="border border-gray-200 w-[250px]">
                      Description
                    </TableHead>
                  </TableRow>
                </TableHeader>

                <TableBody>
                  {values.items.map((item, index) => (
                    <TableRow key={item.id} className="align-top">
                      <TableCell className="border border-gray-200 align-top">
                        {index + 1}
                      </TableCell>
                      <TableCell className="border border-gray-200 align-top w-[250px] p-2">
                        <div className="w-full text-wrap">
                          {item.file_name || "No file"}
                        </div>
                      </TableCell>
                      <TableCell className="border border-gray-200 w-[150px] break-all align-top">
                        <Field
                          as={Input}
                          type="number"
                          name={`items[${index}].quantity`}
                          min={1}
                          className="h-8 w-full text-center"
                        />
                        <ErrorMessage
                          name={`items[${index}].quantity`}
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </TableCell>

                      <TableCell className="space-y-1 border border-gray-200 align-top">
                        <Dropdown
                          label="Service"
                          options={allServices.map((s) => ({
                            value: s.id,
                            label: s.name,
                          }))}
                          value={item.service}
                          setValue={(val) =>
                            setFieldValue(`items[${index}].service`, val)
                          }
                          open={rowServiceOpen[item.id] || false}
                          setOpen={(val) =>
                            setRowServiceOpen((prev) => ({
                              ...prev,
                              [item.id]: val,
                            }))
                          }
                        />

                        <Dropdown
                          label="Material"
                          options={
                            allServices
                              .find((s) => s.id === item.service)
                              ?.materials.map((m) => ({
                                value: m.name,
                                label: m.name,
                              })) || []
                          }
                          value={item.material}
                          setValue={(val) =>
                            setFieldValue(`items[${index}].material`, val)
                          }
                          open={rowMaterialOpen[item.id] || false}
                          setOpen={(val) =>
                            setRowMaterialOpen((prev) => ({
                              ...prev,
                              [item.id]: val,
                            }))
                          }
                        />

                        <Dropdown
                          label="Finish"
                          options={
                            allServices
                              .find((s) => s.id === item.service)
                              ?.finishes.map((f) => ({
                                value: f.name,
                                label: f.name,
                              })) || []
                          }
                          value={item.finish}
                          setValue={(val) =>
                            setFieldValue(`items[${index}].finish`, val)
                          }
                          open={rowFinishOpen[item.id] || false}
                          setOpen={(val) =>
                            setRowFinishOpen((prev) => ({
                              ...prev,
                              [item.id]: val,
                            }))
                          }
                        />
                      </TableCell>

                      <TableCell className="border border-gray-200 align-top">
                        <Field
                          as={Textarea}
                          name={`items[${index}].description`}
                          placeholder="Description"
                          className="w-full h-48 resize-y border rounded p-2"
                        />
                        <ErrorMessage
                          name={`items[${index}].description`}
                          component="div"
                          className="text-red-500 text-xs mt-1"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            <div className="mt-4 flex justify-end">
              <Button
                type="submit"
                className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-2 cursor-pointer flex items-center gap-2"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader className="animate-spin w-4 h-4" /> Saving...
                  </>
                ) : (
                  "Save"
                )}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

// Reusable Dropdown Component
const Dropdown = ({ label, options, value, setValue, open, setOpen }) => {
  const [search, setSearch] = useState("");
  const mergedOptions = [{ value: "", label: `Select ${label}` }, ...options];

  const filteredOptions = mergedOptions.filter((opt) =>
    opt.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2 className="mb-1 text-sm font-medium">{label}</h2>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            role="combobox"
            aria-expanded={open}
            className="w-full justify-between text-gray-500 hover:text-gray-600 cursor-pointer"
          >
            {mergedOptions.find((o) => o.value === value)?.label ||
              `Select ${label}`}
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0 overflow-y-auto">
          <Command>
            <CommandInput
              value={search}
              onValueChange={setSearch}
              placeholder={`Search ${label}...`}
              className="h-9"
            />
            <CommandList>
              <CommandEmpty>No {label.toLowerCase()} found.</CommandEmpty>
              <CommandGroup>
                {filteredOptions.map((opt) => (
                  <CommandItem
                    key={opt.value}
                    value={opt.value}
                    onSelect={() => {
                      setValue(opt.value);
                      setOpen(false);
                      setSearch("");
                    }}
                  >
                    {opt.label}
                    <Check
                      className={cn(
                        "ml-auto text-green-500",
                        value === opt.value ? "opacity-100" : "opacity-0"
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
  );
};

export default QuoteItemsForm;
