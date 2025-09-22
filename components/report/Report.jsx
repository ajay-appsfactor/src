"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Loader } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";


const reportSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^\d+$/, "Invalid phone number"),
});

const Report = () => {
  const handleSubmit = (values) => {
    console.log("Report Data:", values);
    alert("Submitted!");
  };

  return (
    <div className="max-w-xl mx-auto p-4">
      <h3 className="text-gray-800 font-medium text-center mb-4">Reports Form</h3>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
        }}
        validationSchema={reportSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form className="grid grid-cols-1 gap-4">
            {/* Name */}
            <div>
              <Label className="block mb-1">Report Name</Label>
              <Field
                as={Input}
                name="name"
                placeholder="Enter report name"
              />
              <ErrorMessage
                name="name"
                className="text-xs text-rose-500 mt-1"
                component="div"
              />
            </div>

            {/* Email */}
            <div>
              <Label className="block mb-1">Email</Label>
              <Field
                as={Input}
                name="email"
                placeholder="Enter your email"
              />
              <ErrorMessage
                name="email"
                className="text-xs text-rose-500 mt-1"
                component="div"
              />
            </div>

            {/* Phone Input */}
            <div>
              <Label className="block mb-1">Phone</Label>
              <PhoneInput
                country={"us"}
                value={values.phone}
                disableFormatting={true}
                onChange={(phone) => setFieldValue("phone", phone)}
                inputStyle={{
                  width: "100%",
                  height: "42px",
                  borderRadius: "6px",
                  border: "1px solid #d1d5db",
                }}
              />
              <ErrorMessage
                name="phone"
                className="text-xs text-rose-500 mt-1"
                component="div"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <Button
                type="submit"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <Loader className="animate-spin" /> Saving...
                  </div>
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

export default Report;
