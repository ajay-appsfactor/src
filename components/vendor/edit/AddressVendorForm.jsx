"use client";

import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { Loader, ChevronDown, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
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
import { toast } from "react-toastify";
import { countries } from "@/constants/countries";

const AddressVendorForm = ({ vendor }) => {
  const router = useRouter();
  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";

  const [CountryOpen, setCountryOpen] = useState(false);

  const validationSchema = Yup.object({
    address_1: Yup.string()
      .trim()
      .required("Address 1 is required")
      .min(5, "Address 1 must be at least 5 characters")
      .max(100, "Address 1 must be at most 100 characters"),

    address_2: Yup.string()
      .trim()
      .optional()
      .min(5, "Address 2 must be at least 5 characters")
      .max(100, "Address 2 must be at most 100 characters"),
    city: Yup.string().trim().required("City is required"),
    state: Yup.string().trim().required("State is required"),
    zip: Yup.string()
      .trim()
      .required("Postal/Zip code is required")
      .matches(
        /^[a-zA-Z0-9\s\-]{3,10}$/,
        "Postal/Zip must be 3–10 alphanumeric characters"
      ),
    country: Yup.string().required("Country is required"),
  });

  const initialValues = {
    address_1: vendor?.address_1 || "",
    address_2: vendor?.address_2 || "",
    city: vendor?.city || "",
    state: vendor?.state || "",
    zip: vendor?.zip || "",
    country: vendor?.country || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    if (!vendorId) {
      toast.error("Vendor ID is missing.");
      return;
    }

    const payload = {
      ...values,
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}/address-details`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.error || "Something went wrong!");
        return;
      }

      toast.success(data.message || "Address Saved.");
      // Redirect to tax & compliance
      router.push(`/vendor/${vendorId}/tax-compliance`);
    } catch (error) {
      // console.error("Error submitting address:", error);
      toast.error("Failed address saved!");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {vendorName} - Address Details
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 py-4 mt-2 max-w-2xl w-full">
        <Formik
          initialValues={initialValues}
          enableReinitialize
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue, values }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/*  Address  1*/}
              <div className="md:col-span-2">
                <Label htmlFor="address_1" className="mb-2">
                  Address 1<span className="text-rose-500">*</span>
                </Label>
                <Field
                  as={Input}
                  id="address_1"
                  name="address_1"
                  className="w-full"
                />
                <ErrorMessage
                  name="address_1"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
              {/* Address 2*/}
              <div className="md:col-span-2">
                <Label htmlFor="address_2" className="mb-2">
                  Address 2
                </Label>
                <Field
                  as={Input}
                  id="address_2"
                  name="address_2"
                  className="w-full"
                />
              </div>
              {/* City */}
              <div>
                <Label htmlFor="city" className="mb-2">
                  City <span className="text-rose-500">*</span>
                </Label>
                <Field as={Input} id="city" name="city" className="w-full" />
                <ErrorMessage
                  name="city"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
              {/* State */}
              <div>
                <Label htmlFor="state" className="mb-2">
                  State <span className="text-rose-500">*</span>
                </Label>
                <Field as={Input} id="state" name="state" className="w-full" />
                <ErrorMessage
                  name="state"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>
              {/* ZIP */}
              <div>
                <Label htmlFor="zip" className="mb-2">
                  Postal/Zip Code <span className="text-rose-500">*</span>
                </Label>
                <Field as={Input} id="zip" name="zip" className="w-full" />
                <ErrorMessage
                  name="zip"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Country */}
              <div>
                <Label htmlFor="country" className="mb-2">
                  Country <span className="text-rose-500">*</span>
                </Label>
                <Popover open={CountryOpen} onOpenChange={setCountryOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-between cursor-pointer"
                    >
                      {values.country
                        ? countries.find((c) => c.value === values.country)
                            ?.label
                        : "Select Country"}
                      <ChevronDown className="ml-2 h-4 w-4" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="p-0 z-50 max-h-60 overflow-y-auto scroll-mt-16">
                    <Command>
                      <CommandInput placeholder="Search country..." />
                      <CommandEmpty>No country found.</CommandEmpty>
                      <CommandGroup>
                        {countries.map((c) => (
                          <CommandItem
                            key={c.value}
                            onSelect={() => {
                              setFieldValue("country", c.value);
                              setCountryOpen(false);
                            }}
                          >
                            {c.label}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </Command>
                  </PopoverContent>
                </Popover>
                <ErrorMessage
                  name="country"
                  component="div"
                  className="text-red-500 text-xs mt-1"
                />
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-right mb-2">
                <div className="flex justify-start gap-4">
                  <Button
                    type="submit"
                    className="flex items-center gap-2 px-5 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader className="w-4 h-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="w-4 h-4" /> Save
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddressVendorForm;
