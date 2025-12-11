import { Button } from "@/components/ui/button";
import { SquarePen } from "lucide-react";

const DeliveryDetails = ({ delivery, onEdit }) => {
  return (
    <div className="p-4 col-span-1">
      <h4 className="text-gray-800 font-semibold mb-2 flex justify-start gap-2 items-center">
        Shipping Details
        <Button
          size="sm"
          variant="outline"
          className="cursor-pointer"
          onClick={() => onEdit("delivery", delivery)}
        >
          {<SquarePen />}
        </Button>
      </h4>
      <div className="text-sm text-gray-700 space-y-1">
        <div>Shipping address:</div>
        <div>
          {delivery?.shipping_address || ""}
          {delivery?.shipping_city ? `, ${delivery.shipping_city}` : ""}
          {delivery?.shipping_state ? `, ${delivery.shipping_state}` : ""}
          {delivery?.shipping_country ? `, ${delivery.shipping_country}` : ""}
          {delivery?.shipping_zip ? `, ${delivery.shipping_zip}` : ""}
          {!delivery?.shipping_address &&
            !delivery?.shipping_city &&
            !delivery?.shipping_state &&
            !delivery?.shipping_country &&
            !delivery?.shipping_zip &&
            "N/A"}
        </div>

        <div>Delivery Type: Pick up</div>
        <div>Delivery Price: $300</div>
        <div className="flex gap-2">
          <span>Tracking:</span>
          <span className="text-blue-800 font-semibold">Not set</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveryDetails;
