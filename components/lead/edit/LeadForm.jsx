import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import leadValidationSchema from '@/validations/lead/leadSchema';

const initialValues = {
  leadName: '',
  contactPerson: '',
  email: '',
  phone: '',
  companyName: '',
  website: '',
  leadSource: '',
  leadStatus: '',
  leadScore: '',
  projectTitle: '',
  projectDescription: '',
  interestedServices: [],
  estimatedQuantity: '',
  urgency: '',
  quoteRequested: false,
  quoteSentOn: '',
  followUpDate: '',
  assignedSalesRep: '',
  tags: [],
  notes: '',
};

export default function LeadForm({ onSubmit }) {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={leadValidationSchema}
      onSubmit={onSubmit}
    >
      {({ values, handleChange, handleBlur }) => (
        <Form className="space-y-4">
          <div>
            <label>Lead Name</label>
            <Field name="leadName" />
            <ErrorMessage name="leadName" component="div" />
          </div>

          <div>
            <label>Contact Person</label>
            <Field name="contactPerson" />
            <ErrorMessage name="contactPerson" component="div" />
          </div>

          <div>
            <label>Email</label>
            <Field name="email" type="email" />
            <ErrorMessage name="email" component="div" />
          </div>

          <div>
            <label>Phone Number</label>
            <Field name="phone" />
            <ErrorMessage name="phone" component="div" />
          </div>

          <div>
            <label>Company Name</label>
            <Field name="companyName" />
          </div>

          <div>
            <label>Website</label>
            <Field name="website" />
            <ErrorMessage name="website" component="div" />
          </div>

          <div>
            <label>Lead Source</label>
            <Field as="select" name="leadSource">
              <option value="">Select</option>
              <option value="Website">Website</option>
              <option value="Referral">Referral</option>
              <option value="Trade Show">Trade Show</option>
            </Field>
            <ErrorMessage name="leadSource" component="div" />
          </div>

          <div>
            <label>Lead Status</label>
            <Field as="select" name="leadStatus">
              <option value="">Select</option>
              <option value="New">New</option>
              <option value="Contacted">Contacted</option>
              <option value="Qualified">Qualified</option>
              <option value="Quoted">Quoted</option>
              <option value="Converted">Converted</option>
              <option value="Lost">Lost</option>
            </Field>
            <ErrorMessage name="leadStatus" component="div" />
          </div>

          <div>
            <label>Lead Score</label>
            <Field as="select" name="leadScore">
              <option value="">Select</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </Field>
            <ErrorMessage name="leadScore" component="div" />
          </div>

          <div>
            <label>Project Title</label>
            <Field name="projectTitle" />
            <ErrorMessage name="projectTitle" component="div" />
          </div>

          <div>
            <label>Project Description</label>
            <Field as="textarea" name="projectDescription" />
          </div>

          <div>
            <label>Interested Services</label>
            <div role="group">
              <label><Field type="checkbox" name="interestedServices" value="CNC" /> CNC</label>
              <label><Field type="checkbox" name="interestedServices" value="3D Printing" /> 3D Printing</label>
            </div>
            <ErrorMessage name="interestedServices" component="div" />
          </div>

          <div>
            <label>Estimated Quantity</label>
            <Field name="estimatedQuantity" type="number" />
            <ErrorMessage name="estimatedQuantity" component="div" />
          </div>

          <div>
            <label>Urgency / Timeline</label>
            <Field name="urgency" />
          </div>

          <div>
            <label>Quote Requested</label>
            <Field type="checkbox" name="quoteRequested" />
          </div>

          <div>
            <label>Quote Sent On</label>
            <Field name="quoteSentOn" type="date" />
          </div>

          <div>
            <label>Follow-Up Date</label>
            <Field name="followUpDate" type="date" />
          </div>

          <div>
            <label>Assigned Sales Rep</label>
            <Field name="assignedSalesRep" />
          </div>

          <div>
            <label>Tags</label>
            <Field name="tags" placeholder="Comma separated e.g., High Priority, Repeat Customer" />
          </div>

          <div>
            <label>Notes / Comments</label>
            <Field as="textarea" name="notes" />
          </div>

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
}
