import * as Yup from "yup";
import { isValidPhoneNumber } from "libphonenumber-js";

const createCustomerSchema = Yup.object({
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

  company_name: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name cannot exceed 200 characters")
    .required("Company name is required"),

  email: Yup.string()
    .trim()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/, "Enter a valid email address")
    .required("Email is required"),

  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),

  phone: Yup.string()
    .nullable()
    .notRequired()
    .test("is-valid-e164", "Enter a valid phone number", function (value) {
      if (!value) return true;
      return /^\+\d{8,15}$/.test(value);
    }),

  website: Yup.string()
    .trim()
    .matches(
      /^(https?:\/\/)?(www\.)?[a-zA-Z0-9-]+(\.[a-zA-Z]{2,})(\/\S*)?$/,
      "Enter a valid website URL"
    )
    .nullable()
    .notRequired(),

  type: Yup.string().trim().required("Customer type is required"),

  notes: Yup.string()
    .trim()
    .max(500, "Notes must be 500 characters")
    .nullable()
    .notRequired(),
});

export default createCustomerSchema;
