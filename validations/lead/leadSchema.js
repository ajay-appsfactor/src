import * as Yup from 'yup';

const leadValidationSchema = Yup.object().shape({
  leadName: Yup.string().required('Lead Name is required'),
  contactPerson: Yup.string().required('Contact Person is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  phone: Yup.string().required('Phone Number is required'),
  companyName: Yup.string(),
  website: Yup.string().url('Invalid URL'),
  leadSource: Yup.string().required('Lead Source is required'),
  leadStatus: Yup.string().required('Lead Status is required'),
  leadScore: Yup.string().oneOf(['High', 'Medium', 'Low'], 'Invalid score'),
  projectTitle: Yup.string().required('Project Title is required'),
  projectDescription: Yup.string(),
  interestedServices: Yup.array().min(1, 'Select at least one service'),
  estimatedQuantity: Yup.number().positive('Must be positive').integer().nullable(),
  urgency: Yup.string(),
  quoteRequested: Yup.boolean(),
  quoteSentOn: Yup.date().nullable(),
  followUpDate: Yup.date().nullable(),
  assignedSalesRep: Yup.string(),
  tags: Yup.array().of(Yup.string()),
  notes: Yup.string(),
});


export default leadValidationSchema;