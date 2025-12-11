import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

const CustomerDetails = ({ customer, onEdit }) => {
  return (
    <div className="p-4 col-span-1">
      <h4 className="text-gray-800 font-semibold mb-2 flex justify-start gap-2 items-center">
        Billing Details
        <Button size="sm" variant="outline" className="cursor-pointer" onClick={() => onEdit("billing", customer)}>
          {<SquarePen />}
        </Button>
      </h4>
      <div className="text-sm text-gray-700 space-y-1">
        <div>Name: {customer?.billing_name}</div>
        <div>Phone: {customer?.billing_phone || "N/A"}</div>
        <div>Email: {customer?.customer_email}</div>
        <div>Billing address:</div>
        <div>
          {customer?.billing_address || ""}
          {customer?.billing_city ? `, ${customer.billing_city}` : ""}
          {customer?.billing_state ? `, ${customer.billing_state}` : ""}
          {customer?.billing_country ? `, ${customer.billing_country}` : ""}
          {customer?.billing_zip ? `, ${customer.billing_zip}` : ""}
          {!customer?.billing_address &&
            !customer?.billing_city &&
            !customer?.billing_state &&
            !customer?.billing_country &&
            !customer?.billing_zip &&
            "N/A"}
        </div>
      </div>
    </div>
  );
};

export default CustomerDetails;
