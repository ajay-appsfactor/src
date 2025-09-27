import * as Yup from "yup";

const taxCustomerSchema = Yup.object().shape({
  tax_number: Yup.string().nullable(),
  default_tax_rate: Yup.number()
    .typeError("Must be a number")
    .min(0, "Cannot be negative")
    .max(100, "Cannot be more than 100")
    .nullable(),
  currency: Yup.string().required("Currency is required"),
  payment_terms: Yup.string().required("Payment terms is required"),
  credit_limit: Yup.number()
    .typeError("Must be a number")
    .min(0, "Cannot be negative")
    .nullable(),
});

export default taxCustomerSchema;
