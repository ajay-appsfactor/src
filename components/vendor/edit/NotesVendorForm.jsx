"use client";

import { CalendarDays } from "lucide-react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import {  Loader, Save } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { MultiSelect } from "@/components/ui/multi-selected";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";

// Tags/Labels options
const tagOptions = [
  { label: "Preferred", value: "preferred" },
  { label: "Critical", value: "critical" },
  { label: "Overseas", value: "overseas" },
];

const VendorNotesForm = ({ vendor }) => {
  const router = useRouter();
  const vendorId = vendor?.id;
  const vendorName = vendor?.vendor_name || "Vendor";

  const validationSchema = Yup.object({
    notes: Yup.string().max(500),
    tags: Yup.array(),
    score: Yup.number().min(1).max(100).nullable(),
    next_review: Yup.date().nullable(),
  });
  const initialValues = {
    notes: vendor?.notes || "",
    tags: vendor?.tags || [],
    score: vendor?.score ?? "",
    last_order: vendor?.last_order,
    next_review: vendor?.next_review ? new Date(vendor.next_review) : null,
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    const payload = {
      ...values,
      next_review: values.next_review
        ? format(values.next_review, "yyyy-MM-dd")
        : null,
    };

    try {
      const res = await fetch(`/api/vendor/${vendorId}/notes-metadata`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      // console.log("response data :", data);

      if (!res.ok) {
        toast.error(data.error || "Failed to save metadata.");
      } else {
        toast.success(data.message || "Vendor metadata saved!");
        router.push("/vendors");
      }
    } catch (error) {
      // console.error("Submit error:", error);
      toast.error("Failed Notes & Metadata Saved.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex justify-start items-center gap-4">
          <h2 className="text-md font-semibold text-slate-800 py-2">
            {vendorName} - Notes & Metadata
          </h2>
        </div>
      </div>

      <hr />

      <div className="px-6 py-4 mt-2 max-w-2xl w-full">
        <Formik
          enableReinitialize
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, setFieldValue, isSubmitting }) => (
            <Form className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Internal Notes */}
              <div className="md:col-span-2">
                <Label htmlFor="notes" className="mb-2">
                  Internal Notes
                </Label>
                <Field
                  as={Textarea}
                  id="notes"
                  name="notes"
                  className="w-full min-h-[100px]"
                  placeholder="Notes for internal use only..."
                />
              </div>

              {/* Tags / Labels */}
              <div className="md:col-span-2">
                <Label className="mb-2">Tags / Labels</Label>
                <MultiSelect
                  options={tagOptions}
                  value={values.tags}
                  onValueChange={(value) => setFieldValue("tags", value)}
                  placeholder="Select tags"
                />
              </div>

              {/* Rating / Score */}
              <div>
                <Label htmlFor="score" className="mb-2">
                  Rating / Score (%)
                </Label>
                <Field
                  as={Input}
                  type="number"
                  id="score"
                  name="score"
                  placeholder="1 - 100"
                />
                <ErrorMessage
                  name="score"
                  component="div"
                  className="text-xs text-red-500 mt-1"
                />
              </div>

              {/* Last Order Date */}
              <div>
                <Label htmlFor="last_order" className="mb-2">
                  Last Order Date
                </Label>
                <Field
                  as={Input}
                  id="last_order"
                  name="last_order"
                  type="text"
                  readOnly
                  className="bg-gray-100 text-gray-500"
                />
              </div>

              {/* Next Review Date */}
              <div>
                <Label className="mb-2">Next Review Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={`w-full justify-start text-left font-normal ${
                        values.next_review ? "" : "text-muted-foreground"
                      }`}
                    >
                      <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                      {values.next_review
                        ? format(values.next_review, "dd MMM yyyy")
                        : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0">
                    <Calendar
                      mode="single"
                      selected={values.next_review}
                      onSelect={(date) => {
                        setFieldValue("next_review", date);
                      }}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Submit Button */}
              <div className="md:col-span-2 text-right mb-2">
                <Button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-2 bg-slate-800 text-white hover:bg-slate-700 cursor-pointer"
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
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default VendorNotesForm;
