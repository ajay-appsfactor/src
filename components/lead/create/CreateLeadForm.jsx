"use client";

import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { MultiSelect } from "@/components/ui/multi-selected";
import { useRouter } from "next/navigation";
import { Loader, Save, ArrowLeft } from "lucide-react";
import * as Yup from "yup";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarDays } from "lucide-react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { format } from "date-fns";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { toast } from "react-toastify";

const categoryOptions = [
  { label: "3D Printing Materials", value: "3d_printing" },
  { label: "CNC Parts", value: "cnc_parts" },
];

const CreateLeadForm = () => {
  const router = useRouter();

  const validationSchema = Yup.object({
    leadName: Yup.string()
      .trim()
      .min(2, "Name must be at least 2 characters")
      .max(100, "Name cannot exceed 100 characters")
      .required("Lead name is required"),
    leadType: Yup.string().trim().required("Lead type is required"),
    email: Yup.string()
      .trim()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address")
      .required("Email is required"),
    phone: Yup.string().nullable().notRequired(),
    website: Yup.string()
      .trim()
      .matches(
        /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/,
        "Enter a valid website URL"
      )
      .nullable()
      .notRequired(),
    companyName: Yup.string(),
    leadSource: Yup.string().required("Lead Source is required"),
    leadStatus: Yup.string().required("Lead Status is required"),
    leadScore: Yup.string().oneOf(["High", "Medium", "Low"], "Invalid score"),
    projectTitle: Yup.string().required("Project Title is required"),
    projectDescription: Yup.string(),
    interestedServices: Yup.array().min(1, "Select at least one service"),
    estimatedQuantity: Yup.number()
      .positive("Must be positive")
      .integer()
      .nullable(),
    urgency: Yup.string(),
    quoteRequested: Yup.boolean(),
    quoteSentOn: Yup.date().nullable(),
    followUpDate: Yup.date().nullable(),
    assignedSalesRep: Yup.string(),
    tags: Yup.array().of(Yup.string()),
    notes: Yup.string(),
  });

  const initialValues = {
    leadName: "",
    leadType: "",
    email: "",
    phone: "",
    website: "",
  };

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    try {
      const res = await fetch("/api/lead/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      });

      const data = await res.json();
      console.log("Lead Data:", data);

      if (!res.ok) {
        toast.error(data.error || "Failed to add lead.");
      } else {
        toast.success(data.message || "Lead Saved.");
        resetForm();
        // Redirect lead
        router.push(`/admin/lead/${data.lead_id}`);
      }
    } catch (error) {
      console.error("Submit error:", error);
      toast.error("Failed to save lead");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-md">
      <div className="px-6 py-2 max-w-7xl w-full">
        <div className="flex items-center justify-start gap-4">
          <h2 className="text-lg font-semibold text-slate-800">
            Add Lead Information
          </h2>
          <Button
            onClick={() => router.back()}
            variant="outline"
            className="text-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
        </div>
      </div>

      <hr />

      <div className="px-6 py-2 mt-2 max-w-2xl w-full">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, handleChange, setFieldValue, values }) => (
            <Form className="grid grid-cols-1 gap-5">
              {/*  Lead Name + Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="leadName" className="mb-2">
                    Lead Name <span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="leadName"
                    name="leadName"
                    placeholder="Full Name"
                  />
                  <ErrorMessage
                    name="leadName"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="mb-2">
                    Email <span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="email"
                    name="email"
                    type="text"
                    placeholder="email@example.com"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Phone + Website */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="phone" className="mb-2">
                    Phone
                  </Label>
                  <Field name="phone">
                    {({ field, form }) => (
                      <div>
                        <PhoneInput
                          country={"in"}
                          enableSearch
                          value={field.value}
                          onChange={(value, country) => {
                            const dialCode = country?.dialCode;
                            let normalized = value;

                            if (!value) {
                              form.setFieldValue("phone", "");
                              return;
                            }

                            if (value && !value.startsWith("+")) {
                              const raw = value.replace(
                                new RegExp(`^${dialCode}`),
                                ""
                              );
                              normalized = `+${dialCode}${raw}`;
                            }

                            form.setFieldValue("phone", normalized);
                          }}
                          inputProps={{
                            name: "phone",
                            id: "phone",
                            autoFocus: false,
                          }}
                          containerStyle={{ width: "100%" }}
                          inputStyle={{
                            width: "100%",
                            height: "40px",
                            fontSize: "14px",
                            borderRadius: "0.375rem",
                            border: "1px solid #e5e7eb",
                            paddingLeft: "48px",
                          }}
                          buttonStyle={{
                            border: "none",
                            borderTopLeftRadius: "0.375rem",
                            borderBottomLeftRadius: "0.375rem",
                          }}
                        />
                        {form.errors.phone && form.touched.phone && (
                          <div className="text-xs text-red-500 mt-1">
                            {form.errors.phone}
                          </div>
                        )}
                      </div>
                    )}
                  </Field>
                </div>
                <div>
                  <Label htmlFor="website" className="mb-2">
                    Website
                  </Label>
                  <Field
                    as={Input}
                    id="website"
                    name="website"
                    placeholder="https://example.com"
                  />
                  <ErrorMessage
                    name="website"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/* Company Name  +  Lead Source */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="companyName" className="mb-2">
                    Company Name
                  </Label>
                  <Field
                    as={Input}
                    id="companyName"
                    name="companyName"
                    placeholder="https://example.com"
                  />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="leadSource" className="mb-2">
                    Lead Source <span className="text-rose-500">*</span>
                  </Label>
                  <Field name="leadSource">
                    {({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) =>
                          setFieldValue("leadSource", value)
                        }
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select lead source" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Website">Website</SelectItem>
                          <SelectItem value="Referral">Referral</SelectItem>
                          <SelectItem value="Trade Show">Trade Show</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="leadSource"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Lead Status + Lead Score */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="leadStatus" className="mb-2">
                    Lead Status<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="leadStatus">
                    {({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) =>
                          setFieldValue("leadStatus", value)
                        }
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select lead status" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="New">New</SelectItem>
                          <SelectItem value="Contacted">Contacted</SelectItem>
                          <SelectItem value="Qualified">Qualified</SelectItem>
                          <SelectItem value="Quoted">Quoted</SelectItem>
                          <SelectItem value="Converted">Converted</SelectItem>
                          <SelectItem value="Lost">Lost</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="leadStatus"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="leadScore" className="mb-2">
                    Lead Status<span className="text-rose-500">*</span>
                  </Label>
                  <Field name="leadScore">
                    {({ field }) => (
                      <Select
                        value={field.value}
                        onValueChange={(value) =>
                          setFieldValue("leadScore", value)
                        }
                      >
                        <SelectTrigger className="w-full cursor-pointer">
                          <SelectValue placeholder="Select lead score" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="High">High</SelectItem>
                          <SelectItem value="Medium">Medium</SelectItem>
                          <SelectItem value="Low">Low</SelectItem>
                        </SelectContent>
                      </Select>
                    )}
                  </Field>
                  <ErrorMessage
                    name="leadScore"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Project Title + Description */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="projectTitle" className="mb-2">
                    Project Title<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="projectTitle"
                    name="projectTitle"
                    placeholder="Project Title"
                  />
                  <ErrorMessage
                    name="projectTitle"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="projectDescription" className="mb-2">
                    Project Description<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="projectDescription"
                    name="projectDescription"
                    type="text"
                    placeholder="Project Description"
                  />
                  <ErrorMessage
                    name="projectDescription"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/* Interested Service +  Estimated Quantity */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="interestedServices" className="mb-2">
                    Interested Service <span className="text-rose-500">*</span>
                  </Label>
                  <MultiSelect
                    options={categoryOptions}
                    value={values.categories}
                    onValueChange={(val) => setFieldValue("categories", val)}
                    placeholder="Select categories"
                    maxCount={3}
                  />
                  <ErrorMessage
                    name="interestedServices"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="estimatedQuantity" className="mb-2">
                    Estimated Quantity<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="estimatedQuantity"
                    name="estimatedQuantity"
                    placeholder="Estimated Quantity"
                  />
                  <ErrorMessage
                    name="estimatedQuantity"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Urgency + Quote Requested */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="urgency" className="mb-2">
                    Urgency / Timeline<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="urgency"
                    name="urgency"
                    placeholder="Urgency / Timeline"
                  />
                  <ErrorMessage
                    name="urgency"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="quoteRequested" className="mb-2">
                    Quote Requested<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="quoteRequested"
                    name="quoteRequested"
                    type="text"
                    placeholder="Quote Requested"
                  />
                  <ErrorMessage
                    name="quoteRequested"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Quote Sent On + Follow-Up Date*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="quoteSentOn" className="mb-2">
                    Quote Sent On<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="quoteSentOn"
                    name="quoteSentOn"
                    placeholder="Quote Sent On"
                  />
                  <ErrorMessage
                    name="quoteSentOn"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="quoteRequested" className="mb-2">
                    Quote Requested<span className="text-rose-500">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${
                          values.quoteRequested ? "" : "text-muted-foreground"
                        }`}
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                        {values.quoteRequested
                          ? format(values.quoteRequested, "dd MMM yyyy")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={values.quoteRequested}
                        onSelect={(date) => {
                          setFieldValue("quoteRequested", date);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <ErrorMessage
                    name="quoteRequested"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/*  Follow-Up Date + Assigned Sales Rep*/}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <Label htmlFor="followUpDate" className="mb-2">
                    Follow-Up Date<span className="text-rose-500">*</span>
                  </Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={`w-full justify-start text-left font-normal ${
                          values.followUpDate ? "" : "text-muted-foreground"
                        }`}
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-muted-foreground" />
                        {values.followUpDate
                          ? format(values.followUpDate, "dd MMM yyyy")
                          : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={values.quoteRequested}
                        onSelect={(date) => {
                          setFieldValue("quoteRequested", date);
                        }}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <ErrorMessage
                    name="followUpDate"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="" className="mb-2">
                    Assigned Sales Rep<span className="text-rose-500">*</span>
                  </Label>
                  <Field
                    as={Input}
                    id="assignedSalesRep"
                    name="assignedSalesRep"
                    type="text"
                    placeholder="Assigned Sales Rep"
                  />
                  <ErrorMessage
                    name="assignedSalesRep"
                    component="div"
                    className="text-xs text-red-500 mt-1"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-right">
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex items-center bg-slate-800 text-white hover:bg-slate-700 gap-2 px-6 py-2 cursor-pointer"
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

export default CreateLeadForm;
