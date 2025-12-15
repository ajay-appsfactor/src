// @/validations/addressCustomerSchema.js
import * as Yup from "yup";

const addressCustomerSchema = Yup.object({
  first_name: Yup.string()
    .trim()
    .min(2, "First name must be at least 2 characters")
    .max(100, "First name cannot exceed 100 characters")
    .required("First name is required"),

  last_name: Yup.string()
    .trim()
    .min(2, "Last name must be at least 2 characters")
    .max(100, "Last name cannot exceed 100 characters")
    .required("Last name is required"),

  billing_company: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 200 characters")
    .required("Billing company name is required"),

  phone: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-e164", "Enter a valid phone number", function (value) {
      if (!value) return true;
      return /^\+\d{8,15}$/.test(value);
    }),

  billing_email: Yup.string()
    .required("Email is required")
    .email("Please enter a valid email"),

  billing_address: Yup.string()
    .required("Billing address is required")
    .max(255, "Billing address must be at most 255 characters"),
  billing_address2: Yup.string().max(
    255,
    "Billing address 2 must be at most 255 characters"
  ),
  billing_city: Yup.string()
    .required("Billing city is required")
    .max(100, "Billing city must be at most 100 characters"),
  billing_state: Yup.string()
    .required("Billing state is required")
    .max(100, "Billing state must be at most 100 characters"),
  billing_zip: Yup.string()
    .required("Billing ZIP is required")
    .matches(
      /^[a-zA-Z0-9\s\-]{3,10}$/,
      "Billing ZIP must be 3–10 alphanumeric characters"
    ),
  billing_country: Yup.string().required("Billing country is required"),

  shipping_address: Yup.string()
    .required("Shipping address is required")
    .max(255, "Shipping address must be at most 255 characters"),
  shipping_address2: Yup.string().max(
    255,
    "Shipping address 2 must be at most 255 characters"
  ),
  shipping_city: Yup.string()
    .required("Shipping city is required")
    .max(100, "Shipping city must be at most 100 characters"),
  shipping_state: Yup.string()
    .required("Shipping state is required")
    .max(100, "Shipping state must be at most 100 characters"),
  shipping_zip: Yup.string()
    .required("Shipping ZIP is required")
    .matches(
      /^[a-zA-Z0-9\s\-]{3,10}$/,
      "Shipping ZIP must be 3-10 alphanumeric characters"
    ),
  shipping_country: Yup.string().required("Shipping country is required"),

  is_default: Yup.boolean(),
  copy_billing: Yup.boolean(),
});

export default addressCustomerSchema;
